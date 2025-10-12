import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    company: "PicCollage",
    role: "AI & Automation Engineer",
    location: "Taipei City, Taiwan",
    period: "June 2025 – Present",
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
    achievements: [
      "Optimized React.js website for peak performance with GA4, GTM, and Google Ads",
      "Developed 13 GTM tags integrated with GA4, resulting in 160% surge in web traffic"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Building innovative solutions across AI, automation, and software engineering
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="gradient-border hover-glow animate-fade-in">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                      <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                        <Briefcase size={16} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                      <div>{exp.period}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
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

export default Experience;
