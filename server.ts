import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import nodemailer from "nodemailer";
import "dotenv/config";

// Lazy-initialization of SMTP Transporter to prevent crashes if keys are not fully configured yet.
function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.warn("SMTP_USER and/or SMTP_PASS are not configured in environment variable secrets. Email delivery will be bypassed gracefully.");
    return null;
  }

  return nodemailer.createTransport({
    host: host || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Admissions Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, courseId, message } = req.body;

      if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: "Please fill in all required fields (Name, Email, Phone, and Message)." });
      }

      console.log(`[Admissions Engine] Parsing contact submission: Name: ${name}, Email: ${email}, Course: ${courseId}`);

      const transporter = getMailTransporter();
      if (!transporter) {
        // Fallback gracefully so that preview works perfectly even without configured secrets
        return res.json({
          success: true,
          warned: true,
          message: "Thank you! Your inquiries are processed successfully! (Note: Since SMTP server secrets are not active in the app's settings yet, the digital enrollment wasn't sent to 'sereneselina9@gmail.com' via SMTP, but it is logged on your locally persistent console list below!)."
        });
      }

      const smtpUser = process.env.SMTP_USER;
      await transporter.sendMail({
        from: `"TechDost Admissions" <${smtpUser}>`,
        to: "sereneselina9@gmail.com",
        replyTo: email,
        subject: `[TechDost Enrollment] Inquiry from ${name} (${courseId.toUpperCase()})`,
        text: `New Admissions Form Submission:\n\nStudent Name: ${name}\nEmail Address: ${email}\nTelephone: ${phone}\nTactical Course: ${courseId}\n\nCareer Goals / Inquiry:\n${message}\n\n-- TechDost Admissions Hub`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #0369a1; font-weight: 800; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-top: 0;">
              TechDost Digital Admissions Submission
            </h2>
            <p style="font-size: 14px; color: #334155;">A new student enrollment or partnership inquiry has been compiled from the web interface:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 18px 0; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Student Name:</td>
                <td style="padding: 8px 0; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
                <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Contact:</td>
                <td style="padding: 8px 0; color: #0f172a; font-family: monospace;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Target Course:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: bold; text-transform: uppercase;">${courseId}</td>
              </tr>
            </table>
            <div style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 12px 16px; margin: 20px 0; border-radius: 4px;">
              <span style="display: block; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Student Goals:</span>
              <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.6; font-style: italic;">"${message}"</p>
            </div>
            <p style="font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 12px; margin-bottom: 0;">
              This notification was generated automatically by the TechDost Web Client on ${new Date().toLocaleString()}.
            </p>
          </div>
        `,
      });

      console.log(`[Admissions Engine] Email successfully dispatched to sereneselina9@gmail.com!`);
      return res.json({
        success: true,
        message: "Your inquiry has been successfully sent directly to 'sereneselina9@gmail.com'! We will reach out to you within 24 hours."
      });
    } catch (err: any) {
      console.error("[Admissions Engine] Email delivery err:", err);
      return res.json({
        success: true,
        warned: true,
        message: `Your inquiry was submitted successfully! (Note: There was an issue delivering the email to 'sereneselina9@gmail.com' due to SMTP server authorization failure: ${err.message || err}. You can see your inquiry safely registered below!).`
      });
    }
  });

  // API Route for Gemini Chat queries
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        console.warn("GEMINI_API_KEY environment variable is not configured.");
        return res.json({
          text: "Hi there! I am DostAI, your TechDost helper. It seems my Gemini API Key is not configured yet in the Settings secrets. But don't worry! You can call or text our direct admissions team at **+91 9491089687** or email us at **sereneselina9@gmail.com** for immediate inquiry support!"
        });
      }

      // Lazy initialization of Gemini Client
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });

      // Construct messages list from history
      const contents = (history || []).map((h: any) => ({
        role: h.role === "user" ? "user" : "model",
        parts: [{ text: h.content }]
      }));

      // Append user's new message
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: `You are "DostAI", the smart, warm, and friendly admission assistant for "TechDost" – an elite, industry-oriented technology training and coding institute.

Your job is to answer student and parent queries, provide accurate details on courses, schedules, syllabi, contact avenues, and inspire confidence in TechDost's training paths.

Here are the complete details of TechDost:

### 1. MISSION & VISION
- TechDost is a professional training academy dedicated to providing practical, industry-focused learning in programming, web development, AI, prompt engineering, electronics, and career-oriented technical skills.
- The overarching mission is to make high-quality, project-heavy tech education accessible and assist students in converting learning into actual, high-paying skills and career outcomes.

### 2. CORE CONTACT DETAILS (Critical!)
- Admission/Inquiry Hotline: +91 9491089687 (For immediate enrollment, course queries, batch timings, and custom support).
- Email Address: sereneselina9@gmail.com (For additional information, institutional integrations, and corporate partnership negotiations).

### 3. COMPLETE COURSE PORTFOLIO

A. Web Development Course:
- Category: web-dev
- Difficulty: Beginner
- Duration: 10 weeks
- Price: ₹50
- Description: Learn to design, model, and deploy production-ready web applications from scratch using modern React, Node.js, Express, and databases.
- Syllabus Framework:
  - Week 1-2: Front-End Foundations (Semantic HTML, Flexbox, CSS Grid, Tailwind CSS responsive layouts)
  - Week 3-4: Dynamic JavaScript (DOM Manipulation, Async/Await, Fetching third-party REST APIs)
  - Week 5-6: Modern React (Composing components, Custom Hooks, Performance tuning, state synchronization)
  - Week 7-8: Backend Frameworks (Building modular REST APIs with Express, Middleware pipelines, JWT auth)
  - Week 9-10: Database Systems & Cloud Ingress (Data security, ORM/ODM modeling, CI/CD, and deploying to cloud platforms)

B. Python Programming Course:
- Category: python
- Difficulty: Beginner
- Duration: 8 weeks
- Price: ₹50
- Description: Master Python from scratch: syntax, object-oriented concepts, data structures, automation scripting, and backend library integration.
- Syllabus Framework:
  - Week 1-2: Python Fundamentals (Variables, loops, lists, dictionaries, functions, logical trees)
  - Week 3-4: OOP & Memory Model (Classes, inheritance, polymorphism, exceptions, package management)
  - Week 5-6: Data Scoping & File I/O (JSON parsing, CSV handling, web scraping with BeautifulSoup, NumPy basics)
  - Week 7: REST API Pipelines (Creating backend services with Flask, HTTP requests, endpoint testing)
  - Week 8: Custom Automation (Scheduled cron-jobs, system automation scripts, and unit-testing workflows)

C. Java + DSA Course:
- Category: java-dsa
- Difficulty: All Levels
- Duration: 8 weeks
- Price: ₹100
- Description: Master computer science fundamentals, object-oriented paradigms, and algorithm design to crack technical interviews.
- Syllabus Framework:
  - Week 1-2: Java OOP Core (Classes, Interfaces, Polymorphism, and garbage collection)
  - Week 3-4: Classic Data Structures (Double Linked Lists, Stacks, Queues, Binary Trees)
  - Week 5-6: Advanced Trees & Sorting (AVL trees, Heap Sort, Quick/Merge Sort complex optimization)
  - Week 7: Graphs & Dynamic Programming (BFS, DFS, Dijkstra, memoization puzzles)
  - Week 8: Interview Preparation (Acing coding puzzles, runtime optimizations, and simulation questions)

D. C Language Course:
- Category: c-language
- Difficulty: Beginner
- Duration: 6 weeks
- Price: ₹50
- Description: Build a rock-solid foundation in computer science. Master pointers, manual memory allocation, data structures, and hardware-level concepts.
- Syllabus Framework:
  - Week 1-2: Procedural Foundations (Data types, logical statements, nested loops, functional scoping)
  - Week 3: Deep Dive Pointers (Memory addresses, pointer arithmetic, double-pointers, reference arguments)
  - Week 4: Custom Composites (Defining structs/unions, manual dynamic memory buffers with malloc/realloc)
  - Week 5: Stream Handling (Standard binary and text files reading/writing, preprocessing macros, header files)
  - Week 6: Classic DSA in C (Bitwise mapping, implementing double-linked lists, custom stacks and queues)

E. Basic Electronics Course:
- Category: electronics
- Difficulty: Beginner
- Duration: 8 weeks
- Price: ₹50
- Description: Design custom electronic circuits and code firmware for microcontrollers. Bring physical hardware inventions to life.
- Syllabus Framework:
  - Week 1-2: Electricity & Components (Resistance, Capacitors, Transistors, and reading circuits)
  - Week 3-4: Microcontroller Essentials (Learning Arduino IDE, structure of Setup/Loop, editing GPIO pins)
  - Week 5-6: Integrated Sensors (Connecting and processing temperature, ultrasonic distance, moisture, and RFID sensors)
  - Week 7: Actuators & High Mains (Activating solenoids, driving stepper motors, routing safe AC mains relays)
  - Week 8: Networked IoT (Programming ESP8266 microchips, updating visual cloud dashboards, and publishing MQTT feeds)

F. Prompt Engineering Course:
- Category: prompt-engineering
- Difficulty: Beginner
- Duration: 4 weeks
- Price: ₹50
- Description: Unlock LLMs to automate tasks. Deep dive into context injection, chain-of-thought, autonomous agents, and RAG systems.
- Syllabus Framework:
  - Week 1: Foundations of LLMs (Deep dive into token logic, parameters, temperature metrics, and context windows)
  - Week 2: Direct Prompt Strategies (Applying Few-Shot templates, Markdown delimiters, and parsing custom JSON outputs)
  - Week 3: Advanced Cognitive Chaining (Constructing Chain-of-Thought, ReAct, and Self-Reflection frameworks)
  - Week 4: Real-World Integrations (Connecting prompts to Vector Databases via RAG, implementing smart tools, and security auditing)

### 4. FREQUENTLY ASKED QUESTIONS (FAQs)
- Kits/Hardware: Since our training is 100% online, we assist in sourcing components online via detailed guides and utilize high-fidelity virtual simulators like Tinkercad and Wokwi for circuit prototyping.
- Prerequisites: Absolutely zero programming background required for beginner-friendly tracks!
- Format: 100% online hybrid format, combining flexible pre-recorded conceptual drills with live interactive online workshops, Screen-share code reviews, and direct 1-on-1 virtual mentoring sessions.
- Contact hotline: Call/text admission desk at +91 9491089687, or write to sereneselina9@gmail.com.

### 5. STUDENT SUCCESS STORIES
- Rahul Kumar: Full-Stack Developer, placed at TCS Global Services.
- Simran Singh: Robotics Aspirant, designed automated greenhouse prototype.
- Deepak Reddy: AI Consultant, independent automation.
- Ananya Sen: Software Engineer, secured off-campus placement in 3 weeks.

### CHATBOT BEHAVIOR RULES:
1. Speak as DostAI. Be respectful, highly welcoming, informative, and encouraging.
2. If asked about syllabus, timings, features, or admissions, display details in clean markdown tables or formatted bullet lists.
3. Keep answers concise, direct, helpful, and free from corporate filler language.
4. When concluding advice or if the user asks for exact dates/fee breakdowns/partnerships/custom mentorship plans, ALWAYS prompt them to reach out to our admission team via +91 9491089687 or by emailing sereneselina9@gmail.com.
5. If the user asks general, irrelevant, or highly abstract off-topic questions, maintain your persona, answer briefly if appropriate, and then tie the theme back to one of TechDost's training programs. Let's stay focused on tech learning!`
        }
      });

      return res.json({ text: response.text });
    } catch (error: any) {
      console.error("Error in /api/chat:", error);
      return res.status(500).json({ error: error.message || "Failed to process chat" });
    }
  });

  // Serve static assets or mount Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
