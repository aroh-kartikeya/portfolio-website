export interface Skill {
  name: string;
  icon?: string; // Icon identifier for custom component mapping
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { name: "Node.js" },
      { name: "Express" }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" }
    ]
  }
];
