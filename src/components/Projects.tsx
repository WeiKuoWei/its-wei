import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LinkedIn Weak Ties AI Assistant",
    description: "Two-tier semantic search system identifying top connections from 1000+ LinkedIn profiles in under 100ms using multi-attribute vector search and GPT-4.1",
    tech: ["Python", "FastAPI", "React", "ChromaDB", "Azure OpenAI", "Tailwind CSS"],
    date: "May 2025"
  },
  {
    title: "Scalable AI Multi-Expert System",
    description: "Multi-layer routing framework with 11 cross-domain experts achieving 95% routing accuracy, processing knowledge from 184 documents (5,000+ pages)",
    tech: ["Python", "Langchain", "ChromaDB", "FastAPI", "React", "LLMs"],
    date: "April 2025"
  },
  {
    title: "AI-Powered Course Assistant",
    description: "Full-stack application with RAG techniques and ChromaDB managing 10,000+ messages and 94 documents, deployed on Kubernetes with NYU SSO",
    tech: ["Python", "Langchain", "ChromaDB", "FastAPI", "PyDantic"],
    date: "Dec 2024"
  },
  {
    title: "Online Telehealth Portal - Smartel",
    description: "Scalable telehealth platform with automated transcription and consultation summaries, handling 1000+ concurrent users with AWS infrastructure",
    tech: ["AWS", "FastAPI", "React", "PyDantic", "TypeScript", "PostgreSQL"],
    date: "Jan 2024"
  },
  {
    title: "Hotel Demand EDA & Prediction",
    description: "ML models achieving 85.10% accuracy in predicting hotel booking cancellations using logistic regression, decision trees, KNN, and neural networks",
    tech: ["Python", "C++", "PyTorch", "Pandas", "NumPy", "Plotly"],
    date: "Dec 2023"
  },
  {
    title: "News Analysis Platform",
    description: "Full-stack web application with Flask and MySQL for real-time news analysis and sentiment prediction using NewsAPI and OpenAI's GPT",
    tech: ["Flask", "Python", "SQL", "Pandas", "Beautiful Soup", "OpenAI"],
    date: "Nov 2023"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            AI-driven solutions from research to production
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-border hover-glow animate-fade-in group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-xs text-muted-foreground mt-1">
                        {project.date}
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
