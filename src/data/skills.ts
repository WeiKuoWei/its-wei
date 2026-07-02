/**
 * Technical skills data organized by category
 * Source of truth: latest resume (2026-06)
 */

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL"],
  },
  {
    title: "ML/AI",
    skills: ["PyTorch", "TensorFlow", "LangChain", "RAG", "Agentic AI", "ChromaDB", "Harness Engineering"],
  },
  {
    title: "Backend & Web",
    skills: ["FastAPI", "Node.js", "Express", "Next.js", "React", "PostgreSQL", "Prisma", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Git", "n8n"],
  },
  {
    title: "Data",
    skills: ["Pandas", "NumPy", "Excel", "PowerBI"],
  },
];

export interface Stat {
  label: string;
  value: string;
}

export const statsData: Stat[] = [
  { label: "GPA / NYU Abu Dhabi", value: "3.94" },
  { label: "Publications under review", value: "03" },
  { label: "Companies shipped at", value: "04" },
  { label: "TSMC intern rank", value: "4/250" },
];
