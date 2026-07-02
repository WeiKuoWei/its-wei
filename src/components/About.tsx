import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { statsData, skillCategories } from "@/data/skills";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-white light-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Passionate about leveraging AI and automation to solve real-world problems
            </p>
          </motion.div>

          {/* Two Column Layout: Story + Stats */}
          <div className="grid md:grid-cols-5 gap-8 mb-16">
            {/* Story - 60% */}
            <motion.div
              className="md:col-span-3 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I graduated <span className="text-primary font-semibold">Magna Cum Laude</span> from{" "}
                    <span className="text-primary font-semibold">NYU Abu Dhabi</span> with a B.S. in Computer Science
                    and a minor in Mathematics, achieving a GPA of{" "}
                    <span className="text-primary font-semibold">3.94/4.00</span>.
                  </p>
                  <p>
                    During my internship at <span className="text-primary font-semibold">TSMC</span>, I developed
                    machine learning models that enhanced production forecast accuracy by 4%, impacting 10,000+
                    products. This work earned me the <span className="text-primary font-semibold">Gold Award</span> in
                    the regional intern competition.
                  </p>
                  <p>
                    Currently, I'm a{" "}
                    <span className="text-primary font-semibold">Co-founder & Founding Engineer</span> at{" "}
                    <span className="text-primary font-semibold">GitRoll</span>, where I architect the SkillsGraph
                    Analyzer — the engine mapping developers' real git commits to skill checkpoints — lead an AI
                    auto-grading engine for a US federal workforce contract, and build agentic automation that runs
                    company operations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid - 40% */}
            <motion.div
              className="md:col-span-2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {statsData.map((stat, index) => (
                <div key={index} className="p-6 text-center">
                  <div className="space-y-2">
                    <div className="flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </div>
                    <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Education Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-glow bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <p className="text-sm text-muted-foreground">B.S. Computer Science & Minor in Mathematics</p>
                    <p className="text-sm font-medium text-primary mt-1">NYU Abu Dhabi • GPA: 3.94/4.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-glow bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Honors</h3>
                    <p className="text-sm text-muted-foreground">Magna Cum Laude (GPA: 3.94)</p>
                    <p className="text-sm font-medium text-primary mt-1">NYU Abu Dhabi Founder's Day Award</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-glow bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Publications</h3>
                    <p className="text-sm text-muted-foreground">3 papers under review</p>
                    <p className="text-sm font-medium text-primary mt-1">First author at ICWSM'26 • Co-author ×2 at IEEE IECON 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div id="skills" className="space-y-8">
            <h3 className="text-2xl font-bold text-center">Technical Skills</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-sm font-semibold text-primary mb-3">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-slate-200 text-[hsl(var(--light-section-text))] rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
