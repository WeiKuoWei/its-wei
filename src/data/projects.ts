/**
 * Project portfolio data
 * Source of truth: latest resume (2026-06)
 */

export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  featured?: boolean;
  link: string;
}

export const featuredProjects: Project[] = [
  {
    title: "LinkedIn Weak Ties AI Assistant",
    description: "Two-tier semantic search identifying the top 4 relevant connections from 1000+ LinkedIn profiles in under 100ms, with weighted multi-attribute vector search and an AI outreach generator",
    tech: ["Python", "FastAPI", "React", "ChromaDB", "Azure OpenAI", "Tailwind CSS"],
    category: "ML/AI",
    featured: true,
    link: "https://github.com/WeiKuoWei/linkedin-connector",
  },
  {
    title: "Savory Genius — AI Meal Planner",
    description: "Full-stack AI meal planning app: GPT-4o-mini recipe generation from available ingredients, nutritional analysis, automated shopping lists, and calendar-based scheduling on a serverless Vercel deployment",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Drizzle", "OpenAI", "Vercel"],
    category: "ML/AI",
    featured: true,
    link: "https://github.com/WeiKuoWei",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Online Telehealth Portal — Smartel",
    description: "Telehealth portal for scheduling, recording, transcribing, and summarizing consultations with Whisper + GPT-4; scales to 1000+ concurrent users and 500 bookings/minute",
    tech: ["AWS", "FastAPI", "React", "PostgreSQL", "OpenAI"],
    category: "Web",
    link: "https://github.com/WeiKuoWei/ai-powered-health-platform",
  },
];

export const allProjects: Project[] = [...featuredProjects, ...otherProjects];
