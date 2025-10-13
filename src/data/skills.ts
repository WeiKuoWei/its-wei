/**
 * Technical skills data organized by category
 */

import { GraduationCap, Award, BookOpen, Briefcase, Code, Trophy, LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    skills: ["Python", "C/C++", "JavaScript", "TypeScript"],
  },
  {
    title: "ML/AI Stack",
    skills: ["PyTorch", "TensorFlow", "LangChain", "RAG", "Claude"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Git"],
  },
  {
    title: "Data Tools",
    skills: ["Pandas", "NumPy", "SQL", "MongoDB", "PowerBI"],
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
  { icon: Code, label: "Projects", value: "10+", color: "text-primary" },
  { icon: Trophy, label: "TSMC Award", value: "Gold", color: "text-secondary" },
];
