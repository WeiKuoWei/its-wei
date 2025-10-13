/**
 * Professional work experience data
 */

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  logo: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "PicCollage",
    role: "AI & Automation Engineer",
    location: "Taipei City, Taiwan",
    period: "June 2025 – Present",
    current: true,
    logo: "🎨",
    achievements: [
      "Architected n8n automation workflows integrating 6 platforms with Excel and VBA scripting, saving 50 minutes per iteration",
      "Developed AI agents for dynamic bid optimization on Apple Search Ads, improving efficiency across 200+ campaigns",
      "Redesigned HRIS system with 4 interconnected databases, reducing HR administrative overhead by 70%"
    ]
  },
  {
    company: "Taiwan Semiconductor Manufacturing Company (TSMC)",
    role: "Machine Learning Intern",
    location: "Tainan, Taiwan",
    period: "June 2024 – Sep 2024",
    current: false,
    logo: "💎",
    achievements: [
      "Implemented XGBoost model that enhanced production forecast accuracy by 4%, impacting 10,000+ products",
      "Developed RPA pipeline with SQL, Excel, and PowerBI, reducing data processing time by 30%",
      "Won TSMC Regional Intern Competition Gold Award (4/250 Interns)"
    ]
  },
  {
    company: "GitRoll",
    role: "Software Engineer Intern",
    location: "Hong Kong, China",
    period: "Jan 2024 – Aug 2024",
    current: false,
    logo: "🔧",
    achievements: [
      "Utilized GitHub API for repository mining across 100+ repositories",
      "Evaluated 200+ repositories with OpenAI's API for in-depth analysis"
    ]
  },
  {
    company: "Metamory Technology Limited",
    role: "Web Development Intern",
    location: "Hong Kong, China",
    period: "May 2023 – Jan 2024",
    current: false,
    logo: "🌐",
    achievements: [
      "Optimized React.js website for peak performance with GA4, GTM, and Google Ads",
      "Developed 13 GTM tags integrated with GA4, resulting in 160% surge in web traffic"
    ]
  }
];
