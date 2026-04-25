export const projectData = {
  fitwai: {
    badge: "AI & MOBILE DEVELOPMENT",
    title: "FitWAi",
    subtitle: "AI-Powered Fitness Recommendation System",
    role: "Lead Developer (Mobile & AI)",
    timeline: "4 Months",
    platform: "iOS & Android (Flutter)",
    tech: ["Flutter", "PyTorch", "FastAPI", "Firebase"],
    coverImage: "/assets/fitwai.png",
    sideImage: "/assets/fitwaiArc.png",
    overview: [
      "FitWAi is an intelligent mobile application designed to revolutionize personal fitness. Instead of relying on manual inputs, it utilizes device cameras and computer vision to analyze body structures and movements.",
      "The primary goal was to bridge the gap between complex AI body-analysis models and a smooth, consumer-friendly mobile interface."
    ],
    architecture: [
      { name: "Frontend (Flutter):", desc: "Handles cross-platform UI, camera integration, and real-time user feedback." },
      { name: "Backend API (FastAPI):", desc: "Receives image/video frames, validates data, and communicates with AI models." },
      { name: "AI Engine (PyTorch):", desc: "Processes visual data to estimate pose, body type, and form accuracy." },
      { name: "Database (Firebase):", desc: "Manages authentication, saves generated routines, and tracks progress." }
    ]
  },
  cloud: {
    badge: "BACKEND & CLOUD ARCHITECTURE",
    title: "Cloud Microservices API",
    subtitle: "Scalable High-Traffic Backend System",
    role: "Backend Architect",
    timeline: "2 Months",
    platform: "Cloud (AWS)",
    tech: ["Python", "FastAPI", "AWS", "Docker"],
    coverImage: "/assets/cloud.png",
    sideImage: "/assets/cloud.png",
    overview: [
      "A robust, scalable backend architecture designed from the ground up using microservices. This system handles high-traffic data flows without bottlenecks.",
      "It focuses on clean RESTful API principles, secure data routing, and modular deployment strategies."
    ],
    architecture: [
      { name: "API Gateway:", desc: "Routes client requests securely and efficiently." },
      { name: "Core Services:", desc: "Asynchronous Python services handling business logic." },
      { name: "Infrastructure:", desc: "Deployed using AWS services to ensure high availability." },
      { name: "Containerization:", desc: "Dockerized for consistent development environments." }
    ]
  },
  sabun: {
    badge: "E-COMMERCE & UI/UX DESIGN",
    title: "Sabun Atölyesi",
    subtitle: "Artisanal Soap E-Commerce Landing Page",
    role: "Frontend Developer & UI Designer",
    timeline: "3 Weeks",
    platform: "Web (Responsive)",
    tech: ["React.js", "Tailwind CSS", "Figma", "Framer Motion"],
    coverImage: "/assets/SabunAtolyesi.png",
    sideImage: "/assets/SabunAtolyesi.png",
    overview: [
      "A soft, modern, and inviting e-commerce landing page designed for an artisanal handmade soap brand. The core concept revolves around 'hyper-realistic fruit soaps' that deceive the eye, requiring a minimalist design that lets the vibrant product photography shine.",
      "The focus was on creating a warm, pastel-toned user experience with smooth interactions, encouraging users to explore and easily purchase these unique decorative products."
    ],
    architecture: [
      { name: "Frontend Framework (React):", desc: "Provides a fast, component-based structure for seamless navigation and interactive product galleries." },
      { name: "Styling (Tailwind CSS):", desc: "Custom utility classes used to carefully craft the warm, pastel aesthetic (creams, soft peaches) directly in the markup." },
      { name: "Animations (Framer Motion):", desc: "Subtle entrance animations and hover effects added to make the shopping experience feel premium and tactile." },
      { name: "Responsive UI:", desc: "A mobile-first approach ensuring that high-quality product images and call-to-action buttons look perfect on any screen size." }
    ]
  }
};

