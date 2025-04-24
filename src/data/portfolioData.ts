export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "devops" | "tools";
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  details: string[];
  stack: string[];
  logo: string;
}

export interface Project {
  name: string;
  summary: string;
  description: string[];
  stack: string[];
  features: string[];
  challenges: string[];
  image: string;
  link?: string;
  isCompanyProject?: boolean;
  problemStatement?: string;
  myContribution?: string;
  githubLink?: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  logo: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  logo: string;
}

export const aboutMe = {
  name: "Muhammed Nasif",
  title: "Full-Stack Web Developer",
  phone: "80754 36081",
  email: "naszifnaaz@gmail.com",
  location: "Bengaluru, India",
  summary: "Full-stack web developer with 3 years of experience building production-ready applications using the MERN stack. Proficient in modern frameworks like Next.js and TypeScript , with a strong focus on AI integration and end-to-end feature delivery.",
  funFacts: [
    {
      icon: "code", 
      title: "3 Years", 
      description: "Building production web apps"
    },
    {
      icon: "zap", 
      title: "MERN + Next.js", 
      description: "Full-stack expertise"
    },
    {
      icon: "rocket", 
      title: "AI Integration", 
      description: "Expert in modern AI tooling"
    },
    {
      icon: "users", 
      title: "Team Player", 
      description: "Cross-functional collaboration"
    }
  ],
  socialLinks: {
    github: "https://github.com/naszifnaaz",
    linkedin: "https://www.linkedin.com/in/nasifnaaz",
    twitter: "https://x.com/naszifnaaz"
  }
};

export const skills: Skill[] = [
  // Frontend Skills
  { name: "React", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png", category: "frontend", proficiency: "Expert" },
  { name: "Next.js", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png", category: "frontend", proficiency: "Expert" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png", category: "frontend", proficiency: "Advanced" },
  { name: "JavaScript", icon: "	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png", category: "frontend", proficiency: "Expert" },
  { name: "Redux", icon: "	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redux.png", category: "frontend", proficiency: "Advanced" },
  { name: "Tailwind CSS", icon: "	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png", category: "frontend", proficiency: "Expert" },
  { name: "Material UI", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/material_ui.png", category: "frontend", proficiency: "Intermediate" },
  { name: "Chakra UI", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/chakra_ui.png", category: "frontend", proficiency: "Intermediate" },
  { name: "Ant Design", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ant_design.png", category: "frontend", proficiency: "Intermediate" },
  
  // Backend Skills
  { name: "Node.js", icon: "	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png", category: "backend", proficiency: "Expert" },
  { name: "Express", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png", category: "backend", proficiency: "Expert" },
  { name: "Python", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png", category: "backend", proficiency: "Intermediate" },
  
  // Database Skills
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png", category: "database", proficiency: "Expert" },
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png", category: "database", proficiency: "Advanced" },
  { name: "Firebase", icon: "	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/firebase.png", category: "database", proficiency: "Advanced" },
  { name: "Redis", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png", category: "database", proficiency: "Intermediate" },
  
  // DevOps Skills
  { name: "AWS", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png", category: "devops", proficiency: "Intermediate" },
  { name: "Git", icon: "	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png", category: "devops", proficiency: "Advanced" },
  
  // Tools
  { name: "Figma", icon: "	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/figma.png", category: "tools", proficiency: "Intermediate" },
  { name: "Postman", icon: "	https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png", category: "tools", proficiency: "Advanced" },
  { name: "Jira", icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jira.png", category: "tools", proficiency: "Intermediate" },
];

export const experiences: Experience[] = [
  {
    company: "Masai",
    role: "Full-Stack Developer",
    duration: "April 2022 – Present",
    description: "Built and maintained core platforms for an edtech startup used by thousands of students and staff.",
    details: [
      "Led development of AI-powered interview platform with real-time feedback and analytics",
      "Created in-house assessment platform replacing third-party tools like HackerRank",
      "Developed proctoring system with real-time behavior monitoring via AWS Rekognition",
      "Optimized MongoDB queries and implemented Redis caching for 40% faster response times",
      "Mentored junior developers and conducted code reviews to maintain code quality"
    ],
    stack: ["Next.js", "MongoDB", "OpenAI API", "Redis", "AWS", "Socket.io"],
    logo: "/images/companies/masai.png"
  },
  
];

export const education: Education[] = [
  {
    institution: "Acharya Institute of Technology",
    degree: "B.E. in Computer Science",
    year: "2021",
    logo: "/images/education/acharya.png"
  },
  {
    institution: "Marygiri Senior Secondary, School",
    degree: "12th Grade (Science)",
    year: "2017",
    logo: "/images/education/stjosephs.png"
  }
];

export const certifications: Certification[] = [
  {
    name: "Full-Stack Web Development",
    issuer: "National Skill Development Corporation (NSDC)",
    year: "2022",
    logo: "/images/certifications/nsdc.png"
  }
];

export const projects: Project[] = [
  {
    name: "LevelUp",
    summary: "AI-powered interview platform with real-time feedback",
    description: [
      "Designed and refined prompt-engineering strategies and interview-flow architecture",
      "Integrated features such as speech-to-text transcription, timed responses, adaptive follow-ups",
      "Developed custom interactive dashboards for interview analytics using Chart.js and Framer Motion"
    ],
    stack: ["Next.js", "MongoDB", "Web Sockets", "OpenAI API", "Redis", "AWS"],
    features: [
      "Real-time interview feedback",
      "Speech-to-text transcription",
      "Adaptive follow-up questions",
      "Interactive analytics dashboard"
    ],
    challenges: [
      "Complex prompt engineering",
      "Real-time audio processing",
      "Scalable WebSocket architecture"
    ],
    image: "/images/projects/levelup.jpg",
    isCompanyProject: true
  },
  {
    name: "Assess",
    summary: "In-house test creation and assessment platform",
    description: [
      "Replaced third-party assessment tools (Mettl, HackerRank) with an in-house platform",
      "Integrated seamlessly with the existing LMS for MCQs, coding challenges, and DSA questions",
      "Built an intuitive quiz-creation dashboard with drag-and-drop, code-splitting, and lazy loading"
    ],
    stack: ["React.js", "Node.js", "MongoDB", "Judge0", "Monaco Editor", "AWS", "Redis", "Firebase"],
    features: [
      "MCQ and coding assessments",
      "Drag-and-drop quiz creation",
      "Code editor integration",
      "Real-time test monitoring"
    ],
    challenges: [
      "Complex test validation",
      "Code execution sandboxing",
      "Large-scale concurrent testing"
    ],
    image: "/images/projects/assess.jpg",
    isCompanyProject: true
  },
  {
    name: "Copper",
    summary: "Advanced proctoring system with AI-powered monitoring",
    description: [
      "Led the video-recognition component using AWS Rekognition for real-time behavior analysis",
      "Implemented tab-tracking alerts and audio/video capture to ensure test integrity"
    ],
    stack: ["React.js", "Node.js", "MongoDB", "OpenAI API", "MOSS", "AWS Rekognition", "Web Sockets"],
    features: [
      "Real-time behavior monitoring",
      "Tab tracking and alerts",
      "Audio/video proctoring",
      "Plagiarism detection"
    ],
    challenges: [
      "Real-time video processing",
      "Browser security measures",
      "Privacy compliance"
    ],
    image: "/images/projects/copper.jpg",
    isCompanyProject: true
  },
  {
    name: "Ping",
    summary: "Custom chat solution featuring one-to-one and group messaging",
    description: [
      "Real-time chat application with one-to-one and group messaging capabilities",
      "Features presence indicators, typing status, and read receipts",
      "Integrated with Firebase for message persistence and real-time updates"
    ],
    stack: ["React", "Node.js", "Socket.IO", "Firebase"],
    features: [
      "Online/offline presence indicators and typing status",
      "Message persistence with Firebase Realtime Database",
      "Push notifications and activity status tracking",
      "Group chat creation and management",
      "Real-time message synchronization",
      "Read receipts and message status"
    ],
    challenges: [
      "Implementing real-time presence system",
      "Managing complex state for multiple chat rooms",
      "Optimizing performance for large message histories"
    ],
    image: "/images/projects/ping.jpg",
    link: "https://ping-chat.demo.com",
    githubLink: "https://github.com/username/ping"
  },
  {
    name: "Quizzle",
    summary: "SaaS platform for creating and participating in real-time quizzes",
    description: [
      "Web-based platform for creating, publishing, and participating in real-time quizzes",
      "Features live scoreboards, admin analytics, and unique quiz links",
      "Built with MERN stack and WebSockets for real-time functionality"
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "WebSockets"],
    features: [
      "Real-time submission tracking and scoreboard updates",
      "Admin dashboard for question management and analytics",
      "JWT authentication and role-based access control"
    ],
    challenges: [
      "Implementing concurrent user management for live quizzes",
      "Building a responsive UI that works well on all devices",
      "Ensuring data consistency during real-time updates"
    ],
    image: "/images/projects/quizzle.jpg",
    githubLink: "https://github.com/username/quizzle"
  }
];

