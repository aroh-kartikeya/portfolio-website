export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  gradient: string; // Tailwind gradient classes for placeholder card fallback
  status?: string;
  plannedFeatures?: string[];
}

export const currentlyBuildingProject: Project = {
  id: "finance-tracker",
  title: "Finance Tracker",
  status: "In Progress",
  description: "A personal finance dashboard for tracking expenses, income, and financial insights.",
  techStack: ["React", "Node.js", "Express", "Database"],
  githubUrl: "https://github.com/arohk/finance-tracker",
  liveUrl: "#",
  gradient: "from-indigo-600/30 via-purple-600/20 to-blue-600/30",
  plannedFeatures: [
    "Transaction Tracking",
    "Expense Categories",
    "Financial Analytics Dashboard",
    "Monthly Reports"
  ]
};

export const completedProjects: Project[] = [
  {
    id: "book-tracking",
    title: "Book Tracking App",
    description: "An interactive application to organize, review, and track books read, currently reading, or planned to read.",
    techStack: ["React", "Tailwind CSS", "LocalStorage"],
    githubUrl: "https://github.com/arohk/book-tracker",
    liveUrl: "https://book-tracker-aroh.vercel.app",
    gradient: "from-blue-600/30 via-indigo-600/20 to-cyan-600/30"
  },
  {
    id: "blog-app",
    title: "Blog Application",
    description: "A dynamic blogging platform supporting markdown formatting, user authentication, comments, and post management.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/arohk/blog-application",
    liveUrl: "https://blog-app-aroh.vercel.app",
    gradient: "from-purple-600/30 via-pink-600/20 to-rose-600/30"
  },
  {
    id: "qr-generator",
    title: "QR Code Generator",
    description: "A lightweight frontend tool that generates high-quality, customizable QR codes for links, text, or contacts.",
    techStack: ["HTML", "CSS", "JavaScript", "Web QR API"],
    githubUrl: "https://github.com/arohk/qr-generator",
    liveUrl: "https://qr-gen-aroh.vercel.app",
    gradient: "from-cyan-600/30 via-teal-600/20 to-emerald-600/30"
  },
  {
    id: "simon-game",
    title: "Simon Game",
    description: "A classic pattern-matching memory game with sound triggers and progressive levels of speed and complexity.",
    techStack: ["HTML", "CSS", "JavaScript", "Web Audio"],
    githubUrl: "https://github.com/arohk/simon-game",
    liveUrl: "https://simon-game-aroh.vercel.app",
    gradient: "from-yellow-600/30 via-orange-600/20 to-red-600/30"
  }
];
