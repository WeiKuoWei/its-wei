import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/socialLinks";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 light-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Open to opportunities in AI, machine learning, and full-stack development
          </p>

          <Card className="gradient-border">
            <CardContent className="pt-6">
              <div className="space-y-6">
                {SOCIAL_LINKS.filter((link) => link.id === "email").map((link) => (
                  <div key={link.id} className="flex items-center gap-3 text-left">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <link.Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <a
                        href={link.href}
                        className="text-base font-medium text-[hsl(var(--light-section-text))] hover:text-primary transition-colors"
                      >
                        {link.username}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex items-center gap-3 text-left">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-base font-medium text-[hsl(var(--light-section-text))]">Taipei City, Taiwan</p>
                  </div>
                </div>

                {SOCIAL_LINKS.filter((link) => link.id === "github").map((link) => (
                  <div key={link.id} className="flex items-center gap-3 text-left">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <link.Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-[hsl(var(--light-section-text))] hover:text-primary transition-colors"
                      >
                        {link.username}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-[hsl(var(--light-section-text))] mb-4">Social Links</h4>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((link) => (
                      <Button
                        key={link.id}
                        size="icon"
                        variant="outline"
                        className="border-primary/50 hover:bg-primary/10 hover:scale-110 transition-transform"
                        asChild
                      >
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                        >
                          <link.Icon className="w-5 h-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-glow">
                  <a href="mailto:ck3294@nyu.edu">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
