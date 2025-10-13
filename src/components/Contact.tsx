import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { emailConfig, isEmailConfigValid } from "@/lib/emailConfig";
import { SOCIAL_LINKS } from "@/config/socialLinks";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data with Zod
      const validated = contactSchema.parse(formData);

      // Check if EmailJS is configured
      if (!isEmailConfigValid()) {
        toast.error("Email service is not configured. Please contact the site administrator.");
        console.error("EmailJS configuration is missing. Please set up environment variables.");
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: validated.name,
        from_email: validated.email,
        message: validated.message,
        reply_to: validated.email,
        to_name: "Wei Kuo",
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        {
          publicKey: emailConfig.publicKey,
        }
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else if (error instanceof EmailJSResponseStatus) {
        console.error("EmailJS Error:", error);
        toast.error(`Failed to send message: ${error.text || "Please try again."}`);
      } else {
        console.error("Unexpected Error:", error);
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 light-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Open to opportunities in AI, machine learning, and full-stack development
          </p>

          {/* Split Design: Form Left, Info Right */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form - Left */}
            <Card className="gradient-border">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm text-muted-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="mt-1 bg-white border-gray-300 text-[hsl(var(--light-section-text))] placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[hsl(var(--light-section-text))]">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="mt-1 bg-white border-gray-300 text-[hsl(var(--light-section-text))] placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[hsl(var(--light-section-text))]">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      className="mt-1 min-h-[150px] bg-white border-gray-300 text-[hsl(var(--light-section-text))] placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info - Right */}
            <Card className="gradient-border">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {SOCIAL_LINKS.filter(link => link.id === "email").map((link) => (
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
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href="mailto:ck3294@nyu.edu"
                        className="text-base font-medium text-[hsl(var(--light-section-text))]"
                      >
                        [redacted]
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-left">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-base font-medium text-[hsl(var(--light-section-text))]">Taipei City, Taiwan</p>
                    </div>
                  </div>

                  {SOCIAL_LINKS.filter(link => link.id === "github").map((link) => (
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
