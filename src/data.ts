import { Course, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    category: 'web-dev',
    difficulty: 'Beginner' as const,
    duration: '10 Weeks',
    description: 'Learn to design, model, and deploy production-ready web applications from scratch using modern React, Node.js, Express, and databases.',
    longDescription: 'This comprehensive bootcamp takes you from an absolute beginner to a confident full-stack engineer. You will study user-interface design with Tailwind CSS, component architecture in React, state management, backend server architectures, relational/non-relational database models, and cloud-scaling techniques. By the end, you’ll have multiple production-grade projects deployed live.',
    skills: ['HTML5 & CSS3', 'Tailwind CSS', 'JavaScript ES6+', 'React Hooks & Router', 'Node.js & Express', 'MongoDB & SQL', 'Git & GitHub', 'VPS & Cloud Hosting'],
    syllabus: [
      'Week 1-2: Front-End Foundations (Semantic HTML, Flexbox, CSS Grid, Tailwind CSS responsive layouts)',
      'Week 3-4: Dynamic JavaScript (DOM Manipulation, Async/Await, Fetching third-party REST APIs)',
      'Week 5-6: Modern React (Composing components, Custom Hooks, Performance tuning, state synchronization)',
      'Week 7-8: Backend Frameworks (Building modular REST APIs with Express, Middleware pipelines, JWT auth)',
      'Week 9-10: Database Systems & Cloud Ingress (Data security, ORM/ODM modeling, CI/CD, and deploying to cloud platforms)'
    ],
    iconName: 'Globe',
    popular: true,
    rating: 4.9,
    enrolledCount: '1,450+',
    price: 50,
  },
  {
    id: 'python-dev',
    title: 'Python Programming',
    category: 'python',
    difficulty: 'Beginner' as const,
    duration: '8 Weeks',
    description: 'Master Python from scratch: syntax, object-oriented concepts, data structures, automation scripting, and backend library integration.',
    longDescription: 'Our signature Python track is designed to make you deeply proficient in building automation engines, dealing with databases, and starting your data analysis and AI integrations. We start with absolute basics and cover data science libraries, object-oriented coding, memory paradigms, and API connections.',
    skills: ['Python Basics', 'Control Flow', 'Object-Oriented Python', 'Data Handling (Pandas/NumPy)', 'File I/O', 'Web Scraping', 'API Integration', 'Decorators & Generators'],
    syllabus: [
      'Week 1-2: Python Fundamentals (Variables, loops, lists, dictionaries, functions, logical trees)',
      'Week 3-4: OOP & Memory Model (Classes, inheritance, polymorphism, exceptions, package management)',
      'Week 5-6: Data Scoping & File I/O (JSON parsing, CSV handling, web scraping with BeautifulSoup, NumPy basics)',
      'Week 7: REST API Pipelines (Creating backend services with Flask, HTTP requests, endpoint testing)',
      'Week 8: Custom Automation (Scheduled cron-jobs, system automation scripts, and unit-testing workflows)'
    ],
    iconName: 'Code',
    popular: true,
    rating: 4.9,
    enrolledCount: '1,200+',
    price: 50,
  },
  {
    id: 'java-dsa',
    title: 'Java + DSA',
    category: 'java-dsa',
    difficulty: 'All Levels' as const,
    duration: '8 Weeks',
    description: 'Master computer science fundamentals, object-oriented paradigms, and algorithm design to crack technical interviews.',
    longDescription: 'Deep dive into Java syntax execution, object-oriented principles, and building structural proficiency in arrays, linked lists, trees, graphs, sorting, and search routines. Ideal for students and professionals aiming for top core engineering roles.',
    skills: ['Java OOP', 'Memory Management', 'Arrays & Lists', 'Trees & Heaps', 'Graph Algorithms', 'Dynamic Programming', 'Complexity Analysis'],
    syllabus: [
      'Week 1-2: Java OOP Core (Classes, Interfaces, Polymorphism, and garbage collection)',
      'Week 3-4: Classic Data Structures (Double Linked Lists, Stacks, Queues, Binary Trees)',
      'Week 5-6: Advanced Trees & Sorting (AVl trees, Heap Sort, Quick/Merge Sort complex optimization)',
      'Week 7: Graphs & Dynamic Programming (BFS, DFS, Dijkstra, memoization puzzles)',
      'Week 8: Interview Preparation (Acing coding puzzles, runtime optimizations, and simulation questions)'
    ],
    iconName: 'Code',
    popular: true,
    rating: 4.9,
    enrolledCount: '955+',
    price: 100,
  },
  {
    id: 'c-language',
    title: 'C Language',
    category: 'c-language',
    difficulty: 'Beginner' as const,
    duration: '6 Weeks',
    description: 'Build a rock-solid foundation in computer science. Master pointers, manual memory allocation, data structures, and hardware-level concepts.',
    longDescription: 'The ultimate computer science foundation course. Learn procedural programming, absolute control over memory management, custom structures, and optimal data structure design to succeed in high-paying core engineering and technical screening rounds.',
    skills: ['C Syntax', 'Pointers & Addresses', 'Structures & Unions', 'Memory Management (malloc/free)', 'File System I/O', 'Linked Lists', 'Preprocessors', 'Bitwise Operations'],
    syllabus: [
      'Week 1-2: Procedural Foundations (Data types, logical statements, nested loops, functional scoping)',
      'Week 3: Deep Dive Pointers (Memory addresses, pointer arithmetic, double-pointers, reference arguments)',
      'Week 4: Custom Composites (Defining structs/unions, manual dynamic memory buffers with malloc/realloc)',
      'Week 5: Stream Handling (Standard binary and text files reading/writing, preprocessing macros, header files)',
      'Week 6: Classic DSA in C (Bitwise mapping, implementing double-linked lists, custom stacks and queues)'
    ],
    iconName: 'Code',
    rating: 4.8,
    enrolledCount: '890+',
    price: 50,
  },
  {
    id: 'electronics-iot',
    title: 'Basic Electronics',
    category: 'electronics',
    difficulty: 'Beginner' as const,
    duration: '8 Weeks',
    description: 'Design custom electronic circuits and code firmware for microcontrollers. Bring physical hardware inventions to life.',
    longDescription: 'Perfect for makers, developers, and automation hobbyists. This lab-heavy syllabus guides you from breadboard physics over Ohm’s law, to reading electronic meters, soldering securely, and compiling C++ firmware onto Arduino. You will integrate sensors (temperature, motion, light), driver motors, and activate electrical appliances safely through high-voltage relays.',
    skills: ['Ohm\'s Law & Circuit Design', 'Breadboard Prototyping', 'Arduino C++ Syntax', 'Sensor Reading (I2C, SPI)', 'Wireless Communications', 'Motor Controls & relays', 'Raspberry Pi OS foundations', 'IoT Cloud Infrastructure'],
    syllabus: [
      'Week 1-2: Electricity & Components (Resistance, Capacitors, Transistors, and reading circuits)',
      'Week 3-4: Microcontroller Essentials (Learning Arduino IDE, structure of Setup/Loop, editing GPIO pins)',
      'Week 5-6: Integrated Sensors (Connecting and processing temperature, ultrasonic distance, moisture, and RFID sensors)',
      'Week 7: Actuators & High Mains (Activating solenoids, driving stepper motors, routing safe AC mains relays)',
      'Week 8: Networked IoT (Programming ESP8266 microchips, updating visual cloud dashboards, and publishing MQTT feeds)'
    ],
    iconName: 'Cpu',
    rating: 4.9,
    enrolledCount: '430+',
    price: 50,
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    category: 'prompt-engineering',
    difficulty: 'Beginner' as const,
    duration: '4 Weeks',
    description: 'Unlock LLMs to automate tasks. Deep dive into context injection, chain-of-thought, autonomous agents, and RAG systems.',
    longDescription: 'Large Language Models are only as powerful as the systems instructing them. In this state-of-the-art course, you will learn systemic techniques to elicit highly precise, deterministic, and structured answers from LLMs. Discover how to safely chain intelligence, coordinate API tools, prevent prompting jailbreaks, and orchestrate automated AI workflows.',
    skills: ['Few-Shot Examples', 'Structured Data Outputs', 'Chain-of-Thought (CoT)', 'System Instructions', 'Embedding & Vector DBs', 'RAG Integration', 'Agent Tools & Function-Calling', 'Security & Guardrails'],
    syllabus: [
      'Week 1: Foundations of LLMs (Deep dive into token logic, parameters, temperature metrics, and context windows)',
      'Week 2: Direct Prompt Strategies (Applying Few-Shot templates, Markdown delimiters, and parsing custom JSON outputs)',
      'Week 3: Advanced Cognitive Chaining (Constructing Chain-of-Thought, ReAct, and Self-Reflection frameworks)',
      'Week 4: Real-World Integrations (Connecting prompts to Vector Databases via RAG, implementing smart tools, and security auditing)'
    ],
    iconName: 'Sparkles',
    rating: 4.7,
    enrolledCount: '1,120+',
    price: 50,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Kumar',
    role: 'Full-Stack Developer',
    achievement: 'Placed at TCS Global Services',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80',
    comment: 'TechDost transformed my journey. The curriculum isn’t just static code; they teach you how actual enterprise systems are built. I went from styling basic HTML to designing highly secured database endpoints. Secured my TCS role because the interview projects matched exactly what I built in class!',
    rating: 5,
    courseTaken: 'Web Development'
  },
  {
    id: '2',
    name: 'Simran Singh',
    role: 'Robotics Aspirant',
    achievement: 'Designed automated greenhouse prototype',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80',
    comment: 'Most electronics courses are too academic. TechDost had me writing firmwares for Arduino on day three! Being able to see physical hardware respond to my C++ variables was an absolute thrill. The instruction is incredibly supportive, even when I kept blowing up LEDs.',
    rating: 5,
    courseTaken: 'Basic Electronics'
  },
  {
    id: '3',
    name: 'Deepak Reddy',
    role: 'AI Consultant',
    achievement: 'Independent Automations Consultant',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80',
    comment: 'The Prompt Engineering course was a revelation. It bridges clean english scripting with modular code design. I immediately applied the agent and RAG logic to automate customer CRM queries for local clients. It paid back the tuition in two weeks of consulting contracts.',
    rating: 5,
    courseTaken: 'Prompt Engineering'
  },
  {
    id: '4',
    name: 'Ananya Sen',
    role: 'Software Engineer',
    achievement: 'Secured off-campus placement in 3 weeks',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=facearea&facepad=2&w=256&h=256&q=80',
    comment: 'Before this course, writing nested control statements and OOP structures in Python felt difficult. The teachers explained syntax and structure using very visual, step-by-step memory tables. I gained the fundamental maps to step up my projects and cleared my rounds with confidence.',
    rating: 5,
    courseTaken: 'Python Programming'
  }
];

export const FAQS = [
  {
    id: '1',
    question: 'Can I attend if I have absolutely zero knowledge of programming?',
    answer: 'Absolutely. TechDost’s primary mission is accessibility. All our online courses start from the absolute ground up. We use interactive visual slides, step-by-step logic maps, and live virtual code-alongs to ensure everyone can build confidence, regardless of background.'
  },
  {
    id: '2',
    question: 'Are classes live or pre-recorded modules?',
    answer: 'We provide a highly interactive 100% online hybrid format: flexible, top-tier recorded masterclasses for core concepts, coupled with intensive live online workshops, dynamic code-alongs, and personal 1-on-1 screen-share mentoring sessions to review your files and debug code.'
  },
  {
    id: '3',
    question: 'How do I reach the team for specialized admissions or institution partnerships?',
    answer: 'You can immediately call or text our admissions desk at +91 9491089687, or submit an official query using our online contact system. For corporate online trainings and university partnership designs, write directly to techdostacademy@gmail.com.'
  }
];
