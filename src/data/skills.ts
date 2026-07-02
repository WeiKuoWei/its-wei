/**
 * Technical skills data organized by category
 * Source of truth: latest resume (2026-06)
 */

import { GraduationCap, Award, BookOpen, Briefcase, Code, Trophy, LucideIcon } from "lucide-react";

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
    title: "ML/AI Stack",
    skills: ["PyTorch", "TensorFlow", "LangChain", "RAG", "Agentic AI", "ChromaDB", "Harness Engineering"],
  },
  {
    title: "Backend & Web",
    skills: ["FastAPI", "Node.js", "Next.js", "React", "PostgreSQL", "Prisma", "MongoDB"],
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

// Stats for About section
export interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

export const statsData: Stat[] = [
  { icon: GraduationCap, label: "GPA", value: "3.94", color: "text-primary" },
  { icon: Briefcase, label: "Companies", value: "4", color: "text-secondary" },
  { icon: BookOpen, label: "Publications", value: "3", color: "text-primary" },
  { icon: Trophy, label: "TSMC Award", value: "Gold", color: "text-secondary" },
];
