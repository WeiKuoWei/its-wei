import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlaskConical, Users, FileText, ExternalLink, Eye } from "lucide-react";
import paperCover from "@/assets/paper-cover.jpg";
import PaperModal from "@/components/PaperModal";
import { research, featuredPublication } from "@/data/research";

const Research = () => {
  const [isPaperModalOpen, setIsPaperModalOpen] = useState(false);

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
              <div
                className="relative h-[400px] md:h-auto overflow-hidden p-6 cursor-pointer group"
                onClick={() => setIsPaperModalOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsPaperModalOpen(true);
                  }
                }}
                aria-label="Preview research paper"
              >
                <img
                  src={paperCover}
                  alt="Neutralizing Narratives Paper Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover overlay with icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-primary-foreground rounded-full p-4">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
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
                      <span className="font-semibold">Wei Kuo</span>, Kevin Chu, Nouar AlDahoul, Hazem Ibrahim, Talal Rahwan, and Yasir Zaki
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
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => setIsPaperModalOpen(true)}
                    className="gap-2"
                    variant="default"
                  >
                    <Eye className="w-4 h-4" />
                    Preview Paper
                  </Button>
                  <Button asChild className="gap-2" variant="outline">
                    <a href="https://arxiv.org/abs/2504.03520" target="_blank" rel="noopener noreferrer">
                      Read on arXiv
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
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

      {/* Paper Preview Modal */}
      <PaperModal
        isOpen={isPaperModalOpen}
        onClose={() => setIsPaperModalOpen(false)}
      />
    </section>
  );
};

export default Research;
