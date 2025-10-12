import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const featuredProjects = [
  {
    title: "LinkedIn Weak Ties AI Assistant",
    description: "Two-tier semantic search system identifying top connections from 1000+ LinkedIn profiles in under 100ms using multi-attribute vector search and GPT-4.1",
    tech: ["Python", "FastAPI", "React", "ChromaDB", "Azure OpenAI", "Tailwind CSS"],
    category: "ML/AI",
    featured: true,
    link: "https://github.com/WeiKuoWei/linkedin_connector",
  },
  {
    title: "Scalable AI Multi-Expert System",
    description: "Multi-layer routing framework with 11 cross-domain experts achieving 95% routing accuracy, processing knowledge from 184 documents (5,000+ pages)",
    tech: ["Python", "Langchain", "ChromaDB", "FastAPI", "React", "LLMs"],
    category: "ML/AI",
    featured: true,
    link: "https://github.com/WeiKuoWei/semantic_router",
  },
];

const otherProjects = [
  {
    title: "AI-Powered Course Assistant",
    description: "Full-stack application with RAG techniques managing 10,000+ messages and 94 documents, deployed on Kubernetes",
    tech: ["Python", "Langchain", "ChromaDB", "FastAPI"],
    category: "ML/AI",
    link: "https://github.com/WeiKuoWei/slack_chatbot",
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
    link: "https://github.com/WeiKuoWei/scrape_news_articles",
  }
];

const ProjectsShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 light-section">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              AI-driven solutions from research to production
            </p>
          </motion.div>

          {/* Featured Projects - 2 Large Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="gradient-border hover-glow h-full group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="bg-primary/20 text-primary">Featured</Badge>
                      <div className="flex gap-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button size="icon" variant="ghost" className="text-slate-700 hover:text-primary hover:bg-primary/10">
                            <Github className="w-4 h-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid - 3 Columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className="gradient-border hover-glow h-full min-h-[300px] group cursor-pointer transform transition-all duration-300 hover:scale-[1.05] relative overflow-hidden">
                  {/* Original Content */}
                  <CardHeader className="flex items-center justify-center h-full">
                    <CardTitle className="text-lg font-bold transition-colors text-center">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  {/* Dark Overlay with Description and Tech Badges - Appears on Hover */}
                  <div className="absolute inset-0 bg-slate-900/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 gap-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost" className="text-slate-400 hover:text-primary hover:bg-primary/10">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                    <p className="text-sm text-white/90 text-center leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs bg-white/10 text-white border border-white/20 backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
