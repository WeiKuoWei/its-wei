/**
 * Research contributions and publications data
 * Source of truth: latest resume (2026-06)
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
      "Led a team of 9 building an AI-driven educational platform connecting students and faculty to 11 specialized experts",
      "Designed a multi-layer semantic-routing framework reaching 95% routing accuracy in under 50ms",
      "Built RAG retrieval over a ChromaDB vector store of 184 documents (5,000+ pages), mitigating hallucinations",
      "Deployed FastAPI microservices on Kubernetes with SSO auth, scaling to 10,000+ user messages"
    ]
  },
  {
    institution: "NYU Abu Dhabi's Data Science and AI Lab",
    role: "Lead Researcher",
    period: "Feb 2024 – May 2025",
    location: "Abu Dhabi, UAE",
    highlights: [
      "Studied racial and gender bias trends in 10 major news publishers across 355k+ articles from the past decade",
      "Leveraged 6 state-of-the-art LLMs for bias detection and removal via few-shot learning and ensembles",
      "Designed a large-scale crowdsourced study with randomized controlled trials and causal inference analysis",
      "First author: 'Neutralizing the Narrative: AI-Powered Debiasing of Online News Articles' (Under Review at ICWSM'26)"
    ],
    paper: {
      title: "Neutralizing the Narrative: AI-Powered Debiasing of Online News Articles",
      authors: "Wei Kuo, Kevin Chu, Nouar AlDahoul, Hazem Ibrahim, Talal Rahwan, and Yasir Zaki",
      status: "Under Review at ICWSM'26",
      arxivLink: "https://arxiv.org/abs/2504.03520"
    }
  }
];

export interface Publication {
  title: string;
  role: string;
  venue: string;
  link?: string;
}

/** All publications, newest first */
export const publications: Publication[] = [
  {
    title: "Neutralizing the Narrative: AI-Powered Debiasing of Online News Articles",
    role: "First Author",
    venue: "Under Review at ICWSM'26",
    link: "https://arxiv.org/abs/2504.03520"
  },
  {
    title:
      "Does 4-bit Weight-Only Post-Training Quantization Preserve BOS-Sink Head Topology? An Empirical Study for Edge-Deployed Small Language Models",
    role: "Co-author",
    venue: "Under Review at IEEE IECON 2026"
  },
  {
    title:
      "ARID: A Deployable Edge AI System for Structured Information Extraction from Industrial Maintenance Work Orders",
    role: "Co-author",
    venue: "Under Review at IEEE IECON 2026"
  }
];

export const featuredPublication = research[1].paper;
