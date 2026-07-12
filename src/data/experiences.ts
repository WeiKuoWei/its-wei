/**
 * Professional work experience data
 * Source of truth: latest resume (2026-06)
 */

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  logo: string;
  /** Focal metric for the deck slide — condensed from a resume achievement, no new facts. */
  headline: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "GitRoll",
    role: "Co-founder & Founding Engineer",
    location: "Remote",
    period: "Oct 2025 – Present",
    current: true,
    logo: "🚀",
    headline: "Architect of SkillsGraph — mapping real git commits to skills across 62 technical roadmaps",
    achievements: [
      "Shipped the SkillsGraph Analyzer end-to-end across all 4 monorepo layers: Postgres/Prisma schema, server-side scan integration, contributor-matrix API, and Next.js dashboards — a multi-stage LLM + embedding pipeline",
      "Owned the Assessment Engine — AI auto-grading API for a US federal workforce contract — leading a 4-engineer team building 3 parallel grading pipelines",
      "Built a Claude Code automation layer for company operations: 14 skills, 9 agents, 4 enforcement hooks, processing 300+ meeting transcripts across a 30,000+ file knowledge base",
      "Drove client-facing BD for 10+ enterprise prospects across Taiwan finance, US workforce platforms, and APAC healthcare — structuring the company's first paid client retainer"
    ]
  },
  {
    company: "PicCollage",
    role: "AI Engineer",
    location: "Taipei City, Taiwan",
    period: "June 2025 – Nov 2025",
    current: false,
    logo: "🎨",
    headline: "HRIS redesign — 4 databases, 300+ employees, 70% less admin overhead",
    achievements: [
      "Architected automation workflows integrating 4 platforms (incl. Amplitude, AppFigures), saving 50 minutes per iteration",
      "Co-developed AI agents for dynamic Apple Search Ads bid optimization across 200+ campaigns using real-time CPA/ROAS metrics"
    ]
  },
  {
    company: "Taiwan Semiconductor Manufacturing Company (TSMC)",
    role: "Machine Learning Intern",
    location: "Tainan, Taiwan",
    period: "June 2024 – Sep 2024",
    current: false,
    logo: "💎",
    headline: "Regional Intern Competition Gold Award — top 4 of 250 interns",
    achievements: [
      "Implemented an XGBoost model that raised production forecast accuracy by 4%, replacing the traditional prediction model across 10,000+ products and 150+ customers",
      "Developed an RPA pipeline with SQL, Excel, and PowerBI automating ETL, reducing data processing time by 30%"
    ]
  },
  {
    company: "Metamory Technology Limited",
    role: "Web Development Intern",
    location: "Hong Kong",
    period: "May 2023 – Jan 2024",
    current: false,
    logo: "🌐",
    headline: "160% surge in web traffic from targeted Google Ads campaigns",
    achievements: [
      "Built and instrumented a React.js marketing site with 13 GTM tags integrated into GA4 for full-funnel analytics"
    ]
  }
];
