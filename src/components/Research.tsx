import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlaskConical, Users, FileText, ExternalLink } from "lucide-react";
import paperCover from "@/assets/paper-cover.jpg";

const research = [
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
      authors: "Wei Kuo, Talal Rahwan",
      status: "Under Review at COLM'25",
      arxivLink: "https://arxiv.org/abs/2504.03520"
    }
  }
];

const Research = () => {
  return (
    <section id="research" className="py-24 bg-white light-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Research <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Advancing AI through academic research and innovation
          </p>

          {/* Featured Publication */}
          <Card className="gradient-border hover-glow mb-8 overflow-hidden animate-fade-in bg-white">
            <div className="grid md:grid-cols-[300px_1fr] gap-6">
              <div className="relative h-[400px] md:h-auto overflow-hidden p-6">
                <img 
                  src={paperCover} 
                  alt="Neutralizing Narratives Paper Cover" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Featured Publication</h3>
                    <p className="text-xl font-semibold text-primary mb-2">
                      Neutralizing Narratives: Debias News Articles with AI
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      <span className="font-semibold">Wei Kuo</span>, Talal Rahwan
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Under Review at COLM'25
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Comprehensive study analyzing racial and gender bias in news media using state-of-the-art LLMs. 
                  Examined 355,000+ articles from 10 major publishers with novel crowdsourced evaluation methodology.
                </p>
                <Button asChild className="gap-2">
                  <a href="https://arxiv.org/abs/2504.03520" target="_blank" rel="noopener noreferrer">
                    Read Paper on arXiv
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </div>
          </Card>

          <div className="space-y-6">
            {research.map((item, index) => (
              <Card key={index} className="gradient-border hover-glow animate-fade-in">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <FlaskConical className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <CardTitle className="text-lg font-bold">{item.role}</CardTitle>
                          <p className="text-primary font-semibold mt-1">{item.institution}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <div>{item.period}</div>
                      <div>{item.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;
