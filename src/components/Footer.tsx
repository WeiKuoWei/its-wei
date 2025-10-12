import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-muted-foreground">
              © 2025 Wei Kuo. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-primary fill-primary" /> using React & TypeScript
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/WeiKuoWei" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/chen-wei-kuo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:ck3294@nyu.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
