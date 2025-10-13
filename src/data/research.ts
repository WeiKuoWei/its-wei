/**
 * Research contributions and publications data
 */

export interface ResearchPaper {
  title: string;
  authors: string;
  status: string;
  arxivLink: string;
}

export interface ResearchExperience {
  institution: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  paper?: ResearchPaper;
}

export const research: ResearchExperience[] = [
  {
    institution: "NYU Tandon's Flexible AI-enabled Mechatronic Systems Lab (FAMS)",
    role: "Head Researcher & Product Manager",
    period: "June 2024 – May 2025",
    location: "New York, USA (Hybrid)",
    highlights: [
      "Led team of 9 to develop AI-driven educational platform with 8 specialized experts",
      "Implemented automatic expert selection with semantic routing and NYU SSO & Kubernetes security",
      "Created vector databases from 1,000+ pages of course materials and 100+ mental health documents",
      "Mitigated hallucinations using RAG techniques and vector embeddings"
    ]
  },
  {
    institution: "NYU Abu Dhabi's Data Science and AI Lab",
    role: "Researcher & First Author",
    period: "Feb 2024 – May 2025",
    location: "Abu Dhabi, UAE",
    highlights: [
      "Studied racial and gender bias trends in 10 news publishers with 355k+ articles",
      "Leveraged 6 state-of-the-art LLMs for bias detection using few-shot learning",
      "Designed large-scale crowdsourced study with randomized controlled trials",
      "First Author: 'Neutralizing Narratives: Debias News Articles with AI' (Under Review at COLM'25)"
    ],
    paper: {
      title: "Neutralizing Narratives: Debias News Articles with AI",
      authors: "Wei Kuo, Kevin Chu, Nouar AlDahoul, Hazem Ibrahim, Talal Rahwan, and Yasir Zaki",
      status: "Under Review at COLM'25",
      arxivLink: "https://arxiv.org/abs/2504.03520"
    }
  }
];

export const featuredPublication = research[1].paper;
