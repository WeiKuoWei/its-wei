import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Briefcase, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "./ParticlesBackground";
import avatar from "@/assets/avatar.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-slate-950 z-0"></div>
      
      {/* Particles */}
      <ParticlesBackground />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Avatar */}
          <div className="animate-fade-in">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden ring-4 ring-primary/30 shadow-[0_0_40px_rgba(0,222,255,0.4)]">
              <img 
                src={avatar} 
                alt="Wei Kuo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name with animated entrance */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-in">
            <span className="gradient-text">Wei Kuo</span>
          </h1>

          {/* Typing Animation for Tagline */}
          <div className="text-xl md:text-3xl text-foreground font-light min-h-[2.5rem]">
            <TypeAnimation
              sequence={[
                "AI & Automation Engineer",
                2000,
                "Machine Learning Researcher",
                2000,
                "Full-Stack Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>


          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/WeiKuoWei" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/chen-wei-kuo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:ck3294@nyu.edu"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
