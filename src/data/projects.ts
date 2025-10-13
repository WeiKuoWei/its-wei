/**
 * Project portfolio data
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
    description: "Two-tier semantic search system identifying top connections from 1000+ LinkedIn profiles in under 100ms using multi-attribute vector search and GPT-4.1",
    tech: ["Python", "FastAPI", "React", "ChromaDB", "Azure OpenAI", "Tailwind CSS"],
    category: "ML/AI",
    featured: true,
    link: "https://github.com/WeiKuoWei/linkedin-connector",
  },
  {
    title: "Scalable AI Multi-Expert System",
    description: "Multi-layer routing framework with 11 cross-domain experts achieving 95% routing accuracy, processing knowledge from 184 documents (5,000+ pages)",
    tech: ["Python", "Langchain", "ChromaDB", "FastAPI", "React", "LLMs"],
    category: "ML/AI",
    featured: true,
    link: "https://github.com/WeiKuoWei/semantic-router",
  },
];

export const otherProjects: Project[] = [
  {
    title: "AI-Powered Course Assistant",
    description: "Full-stack application with RAG techniques managing 10,000+ messages and 94 documents, deployed on Kubernetes",
    tech: ["Python", "Langchain", "ChromaDB", "FastAPI"],
    category: "ML/AI",
    link: "https://github.com/WeiKuoWei/slack-chatbot",
  },
  {
    title: "Online Telehealth Portal - Smartel",
    description: "Scalable platform handling 1000+ concurrent users with AWS infrastructure",
    tech: ["AWS", "FastAPI", "React", "PostgreSQL"],
    category: "Web",
    link: "https://github.com/WeiKuoWei/ai-powered-health-platform",
  },
  {
    title: "News Scraper",
    description: "Tool for scraping 10+ years of historical news articles from CNN Fox News, and other major publishers via Wayback Machine",
    tech: ["Python", "BeautifulSoup", "Pandas", "NewsPlease"],
    category: "Data Engineering",
    link: "https://github.com/WeiKuoWei/scrape-news-articles",
  }
];

export const allProjects: Project[] = [...featuredProjects, ...otherProjects];
