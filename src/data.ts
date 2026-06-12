import { Course, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'web-dev',
    title: 'Full-Stack Web Development',
    category: 'web-dev',
    difficulty: 'Beginner' as const,
    duration: '10 Weeks',
    description: 'Learn to design, model, and deploy production-ready web applications from scratch using modern React, Node.js, Express, and databases.',
    longDescription: 'This comprehensive bootcamp takes you from an absolute beginner to a confident full-stack engineer. You will study user-interface design with Tailwind CSS, component architecture in React, state management, backend server architectures, relational/non-relational database models, and cloud-scaling techniques. By the end, you’ll have 4 production-grade projects deployed live.',
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
  },
  {
    id: 'programming-dsa',
    title: 'Core Programming & DSA',
    category: 'programming',
    difficulty: 'All Levels' as const,
    duration: '8 Weeks',
    description: 'Master computer science fundamentals, object-oriented paradigms, and algorithm design to crack high-paying technical interviews.',
    longDescription: 'Engineered specifically for engineering aspirants and career changers. We focus deep into syntax execution in Python / Java / C++, and then build structural proficiency in arrays, linked lists, trees, graphs, sorting mechanisms, and search routines. You will write code with optimizing space and time complexity (Big-O analysis) as a second-nature behavior.',
    skills: ['Programming Logic', 'Python / Java / C++', 'Object-Oriented Coding', 'Memory Management', 'Data Structures (Trees, Graphs)', 'Algorithmic Optimization', 'Competitive Problem-Solving', 'Complexity Analysis'],
    syllabus: [
      'Week 1-2: Coding Core (Logical statements, Loops, Functions, and Memory pointers)',
      'Week 3-4: Advanced OOP (Inheritance, Polymorphism, Interfaces, and SOLID design principles)',
      'Week 5-6: Classic Data Structures (Double Linked Lists, Stacks, Queues, Binary Trees, Max Heaps)',
      'Week 7: Graph Algorithms & Dynamic Programming (BFS, DFS, Dijkstra, Memoization puzzles)',
      'Week 8: Interview Training (Reconstructing FAANG coding puzzles, optimizing time metrics, and whiteboard simulations)'
    ],
    iconName: 'Code',
    rating: 4.8,
    enrolledCount: '980+',
  },
  {
    id: 'ai-ml',
    title: 'Applied AI & Machine Learning',
    category: 'ai-ml',
    difficulty: 'Intermediate' as const,
    duration: '12 Weeks',
    description: 'Bridge the gap between theoretical AI models and real-world deployment. Train and implement neural networks with Python/TensorFlow.',
    longDescription: 'This course is tailored for developers seeking to harness the power of artificial intelligence. We bypass long math proofs and focus directly on compiling datasets, preparing variables, selecting regression/classification pipelines, building and training neural networks, custom fine-tuning processes, and deploying models as service endpoints.',
    skills: ['Python Data Science', 'NumPy & Pandas', 'Regression & Classifiers', 'Supervised Learning', 'Deep Learning & Neural Nets', 'TensorFlow & PyTorch', 'Model Hosting & Services', 'AI Agent Orchestration'],
    syllabus: [
      'Week 1-3: Modern Data Handling (Scoping features with Pandas, performing statistics, clean-room prepping)',
      'Week 4-6: Classical Machine Learning (Scikit-Learn algorithms, Random Forests, SVMs, hyper-parameter tuning)',
      'Week 7-9: Neural Networks & Deep Learning (Formulating activation functions, custom layers in TensorFlow & PyTorch)',
      'Week 10-11: Practical NLP & Vision (Fine-tuning pre-trained Transformers, building custom visual classifiers)',
      'Week 12: Production AI (Wrapping model weights inside microservice containers, building inference pipelines)'
    ],
    iconName: 'BrainCircuit',
    popular: true,
    rating: 4.9,
    enrolledCount: '750+',
  },
  {
    id: 'prompt-engineering',
    title: 'Professional Prompt Engineering',
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
  },
  {
    id: 'electronics-iot',
    title: 'Practical Electronics & IoT',
    category: 'electronics',
    difficulty: 'Beginner' as const,
    duration: '8 Weeks',
    description: 'Design custom electronic circuits and code firmware for microcontrollers. Bring your hardware inventions to life.',
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
  },
  {
    id: 'career-bootcamp',
    title: 'Career-Oriented Tech Bootcamp',
    category: 'career-skills',
    difficulty: 'Beginner' as const,
    duration: '6 Weeks',
    description: 'Banish the anxiety of job hunting. Acquire personal branding, rewrite resumes, master mock codes, and scale portfolios.',
    longDescription: 'Coding is only half the battle; knowing how to navigate the technical job market secures your future. In this specialized mentoring accelerator, you’ll undergo rigorous 1-on-1 resume rebuilding, create a robust personal brand, highlight high-tier projects effectively, practice live video coding rounds, and learn the art of professional technical communication.',
    skills: ['Resume Transformation', 'GitHub Portfolio Design', 'LinkedIn Professional Growth', 'Coding Interview Tactics', 'System Scaling Basics', 'Freelance Consulting Secrets', 'Advanced Salary Negotiation'],
    syllabus: [
      'Week 1: Brand Building (Re-arranging GitHub profiles, hosting live demo cards, structuring projects visually)',
      'Week 2: Standout Resume Secrets (Drafting machine-readable resumes, highlighting key technical impact over descriptions)',
      'Week 3-4: Live Technical Prep (Practicing mock database architectures, structuring systems, whiteboard solving)',
      'Week 5: Career Communication (Expressing modular code thoughts logically to interviewers, handling scenario questions)',
      'Week 6: Contract & Offer Strategy (Navigating freelance marketplaces, evaluating health/equity packages, and negotiating)'
    ],
    iconName: 'Briefcase',
    rating: 4.9,
    enrolledCount: '860+',
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
    courseTaken: 'Full-Stack Web Development'
  },
  {
    id: '2',
    name: 'Simran Singh',
    role: 'Robotics Aspirant',
    achievement: 'Designed automated greenhouse prototype',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=2&w=256&h=256&q=80',
    comment: 'Most electronics courses are too academic. TechDost had me writing firmwares for Arduino on day three! Being able to see physical hardware respond to my C++ variables was an absolute thrill. The instruction is incredibly supportive, even when I kept blowing up LEDs.',
    rating: 5,
    courseTaken: 'Practical Electronics & IoT'
  },
  {
    id: '3',
    name: 'Deepak Reddy',
    role: 'AI Consultant',
    achievement: 'Independent Automations Consultant',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80',
    comment: 'The Professional Prompt Engineering course was a revelation. It bridges clean english scripting with modular code design. I immediately applied the agent and RAG logic to automate customer CRM queries for local clients. It paid back the tuition in two weeks of consulting contracts.',
    rating: 5,
    courseTaken: 'Professional Prompt Engineering'
  },
  {
    id: '4',
    name: 'Ananya Sen',
    role: 'Software Engineer',
    achievement: 'Secured off-campus placement in 3 weeks',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=facearea&facepad=2&w=256&h=256&q=80',
    comment: 'Before this course, solving recursive array problems felt like black magic. The teachers explained algorithm space optimization using very visual, step-by-step memory tables. I gained the fundamental mental maps to step up my LeetCode ratings and cleared my off-campus rounds with calm confidence.',
    rating: 5,
    courseTaken: 'Core Programming & DSA'
  }
];

export const FAQS = [
  {
    question: 'Do I get physical hardware or kits for the Electronics & IoT course?',
    answer: 'Yes! When you enroll in the Practical Electronics course, we supply a detailed component bill-of-materials and assist you in sourcing high-quality, genuine development boards locally or online. For classroom clusters, we supply direct parts storage including breadboards, sensors, and cables.'
  },
  {
    question: 'Can I attend if I have absolutely zero knowledge of programming?',
    answer: 'Absolutely. TechDost’s primary mission is accessibility. Courses like Full-Stack Web Dev and Core Programming begin with visual walkthroughs, variables logic, and basic loops. No prior tech background of any kind is required.'
  },
  {
    question: 'Are classes live or pre-recorded modules?',
    answer: 'We provide structured hybrid classes: highly detailed, practical pre-recorded conceptual drills paired with intense, live interactive coding labs, workspace code reviews, and direct 1-on-1 mentorship sessions where we check your files.'
  },
  {
    question: 'How do I reach the team for specialized admissions or institution partnerships?',
    answer: 'You can immediately call or text our admissions desk at +91 9491089687, or submit an official query using our online contact system. For corporate trainings and educational partnership designs, write directly to sereneselina9@gmail.com.'
  }
];
