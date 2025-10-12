import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
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

const ExperienceTimeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 bg-slate-50 light-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Building innovative solutions across AI, automation, and software engineering
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline Node */}
                  <div 
                    className={`absolute left-2 top-6 w-12 h-12 rounded-full flex items-center justify-center text-2xl
                      backdrop-blur-sm border-2 transition-all duration-300
                      ${exp.current 
                        ? "bg-primary/90 border-primary shadow-[0_0_30px_rgba(0,222,255,0.8),0_0_60px_rgba(0,222,255,0.4)] animate-glow ring-4 ring-primary/40 scale-110" 
                        : "bg-white/80 border-secondary/50 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] hover:scale-105"
                      }`}
                  >
                    {exp.logo}
                  </div>

                  {/* Experience Card */}
                  <Card 
                    className={`gradient-border hover-glow cursor-pointer transition-all duration-300
                      ${exp.current ? "shadow-[0_0_30px_rgba(0,222,255,0.3)]" : ""}
                      ${expandedIndex === index ? "ring-2 ring-primary/50" : ""}`}
                    onClick={() => toggleExpand(index)}
                  >
                    <CardHeader className={expandedIndex === index ? "pb-3" : ""}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                            {exp.current && (
                              <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="text-primary font-semibold">{exp.company}</div>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                          <div>{exp.period}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end mt-2 text-primary">
                        {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </CardHeader>
                    
                    {/* Expandable Content */}
                    {expandedIndex === index && (
                      <CardContent className="animate-fade-in">
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex gap-3">
                              <span className="text-primary mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
