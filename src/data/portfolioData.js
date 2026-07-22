// Portfolio Data for Shaili Srivastava

export const PERSONAL_INFO = {
  name: 'Shaili Srivastava',
  title: 'Computer Science Undergraduate & Computer Vision Engineer',
  location: 'Bangalore, India',
  email: 'shailisrivastava090@gmail.com',
  phone: '+919305201801',
  phoneDisplay: '+91 9305201801',
  github: 'https://github.com/ShailiSrivastava',
  linkedin: 'https://www.linkedin.com/in/shaili-srivastava0908/',
  resumeUrl: '/Shaili_Srivastava_Resume.pdf',
  dsaCount: '250+',
  availability: 'Open for Opportunities',
};

export const PROJECTS_DATA = [
  {
    id: 'cvyolo',
    index: '01',
    title: 'CV+YOLO Classic – Augmented Reality Vision System',
    category: 'Computer Vision & Deep Learning',
    tags: ['Python', 'YOLOv11', 'OpenCV', 'Flask', 'Next.js', 'PyTorch'],
    description: [
      'Fine-tuned YOLOv11 on a custom dataset achieving 92% object detection accuracy at 28–32 FPS.',
      'Built an end-to-end computer vision pipeline using OpenCV for image acquisition, pre-processing, object detection, tracking, and visualization.',
      'Implemented deep learning-based object detection using YOLOv11 with confidence thresholding, NMS, and bounding-box visualization for real-time inference.'
    ],
    github: 'https://github.com/ShailiSrivastava/CV-YOLO-Vision-System',
    live: null
  },
  {
    id: 'repomind',
    index: '02',
    title: 'RepoMind RAG Matcher',
    category: 'AI & Vector Search Platform',
    tags: ['Next.js', 'FastAPI', 'Python', 'Docker', 'ChromaDB', 'SentenceTransformers'],
    description: [
      'Built a cloud-ready full-stack RAG platform with FastAPI services for resume parsing and semantic job matching.',
      'Designed scalable REST APIs and implemented semantic search using SentenceTransformers and ChromaDB.',
      'Containerized the application using Docker and developed a responsive recruiter dashboard using Next.js.'
    ],
    github: 'https://github.com/ShailiSrivastava/RepoMind-RAG-Matcher',
    live: null
  },
  {
    id: 'helpdesk',
    index: '03',
    title: 'AI College Helpdesk & Student Helpdesk',
    category: 'AI Chatbot & Full-Stack Platform',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
    description: [
      'Developed a SaaS-style AI chatbot supporting multiple student services using React, Node.js, and MongoDB.',
      'Built secure JWT-authenticated REST APIs with role-based access control.',
      'Improved user experience through responsive dashboards and context-aware AI conversations.'
    ],
    github: 'https://github.com/ShailiSrivastava/AI-College-Helpdesk',
    live: null
  },
  {
    id: 'campusconnect',
    index: '04',
    title: 'Campus Connect (MERN Stack)',
    category: 'Full-Stack MERN Social App',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    description: [
      'Developed a full-stack campus networking platform using the MERN stack.',
      'Built scalable REST APIs and optimized MongoDB schemas for user and community management.',
      'Collaborated using Git and reusable React components to deliver maintainable software.'
    ],
    github: 'https://github.com/ShailiSrivastava/Campus-Connect',
    live: null
  }
];

export const EXPERIENCES_DATA = [
  {
    index: '01',
    role: 'UI/UX Designer & Head of Operations',
    company: 'ENIGMA Club',
    duration: 'Apr 2024 – Apr 2026',
    bullets: [
      'Led cross-functional student teams while coordinating technical events using collaborative planning and communication.',
      'Designed UI assets and improved operational planning for club activities.'
    ]
  },
  {
    index: '02',
    role: 'Full Stack Developer Intern',
    company: 'RD Infro Technology',
    duration: 'Jun 2024 – Jul 2024',
    bullets: [
      'Contributed across the Software Development Life Cycle (SDLC), including development, testing, debugging, and API integration.',
      'Developed and validated 15+ REST APIs using Node.js, Express.js, and Postman, improving application reliability.',
      'Collaborated using Git in an Agile development environment to implement features, resolve bugs, and maintain clean code.'
    ]
  },
  {
    index: '03',
    role: 'Frontend Developer Intern',
    company: 'Motion Cut',
    duration: 'Jun 2024 – Jul 2024',
    bullets: [
      'Developed responsive frontend interfaces using React.js, HTML, CSS, and JavaScript.',
      'Tested and debugged UI components to improve responsiveness, accessibility, and cross-browser compatibility.',
      'Collaborated with developers using Git while following Agile software development practices.'
    ]
  }
];

export const EDUCATION_DATA = {
  school: 'Jain University, Bengaluru',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  timeline: '2023 – 2027',
  cgpa: '8.01 / 10',
  coursework: [
    'Deep Learning', 'Computer Vision', 'YOLOv11', 'OpenCV',
    'Object Detection', 'RAG & LLMs', 'Data Structures & Algorithms',
    'REST APIs', 'Software Engineering'
  ]
};

export const CERTIFICATIONS_DATA = [
  {
    title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
    issuer: 'Oracle',
    year: '2025'
  },
  {
    title: 'Cloud Computing',
    issuer: 'Microsoft',
    year: '2024'
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    year: '2024'
  },
  {
    title: 'Accenture Nordics Software Engineering Job Simulation',
    issuer: 'Accenture / Forage',
    year: '2024'
  }
];

export const MILESTONES_DATA = [
  'Solved 250+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks.',
  'Built 5+ AI-powered and full-stack applications using Computer Vision, YOLOv11, OpenCV, MERN, FastAPI, RAG, and Docker.',
  'Active GitHub contributor with multiple software engineering and AI projects.'
];
