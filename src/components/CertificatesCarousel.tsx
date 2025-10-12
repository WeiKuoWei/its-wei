import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Award, ExternalLink, FileText, GraduationCap, Brain, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    title: "TSMC Regional Intern Competition Gold Award",
    issuer: "Taiwan Semiconductor Manufacturing Company",
    achievement: "Top 4 out of 250 regional interns - recognized for outstanding ML research",
    date: "Summer 2023",
    Icon: Trophy,
    // verifyLink: "/certificates/founders-award.pdf",
    description: "Gold Award for Machine Learning Innovation in Semiconductor Manufacturing",
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM via Coursera",
    achievement:
      "Completed 9-course specialization covering data science methodology, Python, SQL, and machine learning",
    date: "2023",
    Icon: GraduationCap,
    // certificateFile: "/certificates/ibm-data-science.pdf",
    // verifyLink: "https://www.coursera.org/account/accomplishments/professional-cert/",
    description: "Comprehensive training in data analysis, visualization, and ML algorithms",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI via Coursera",
    achievement: "5-course specialization by Andrew Ng covering neural networks, CNNs, RNNs, and transformers",
    date: "2023",
    Icon: Brain,
    // certificateFile: "/certificates/deep-learning.pdf",
    // verifyLink: "https://www.coursera.org/account/accomplishments/specialization/",
    description: "Advanced deep learning architectures and practical implementation",
  },
  {
    title: "American Region Mathematics League International",
    issuer: "ARML",
    achievement: "3rd Place in International Mathematics Competition",
    date: "2019",
    Icon: Award,
    description: "Top performance in prestigious high school mathematics competition",
  },
];

const CertificatesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, certificates.length - itemsPerView);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [autoScroll, maxIndex]);

  const handlePrevious = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleCertificates = certificates.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section id="certificates" className="py-24 bg-white light-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Certificates & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Recognition for excellence in technology and mathematics
          </p>

          <div className="relative px-16">
            {/* Auto-scroll Indicator */}
            <div className="flex justify-center items-center gap-2 mb-6">
              <div className={`w-2 h-2 rounded-full ${autoScroll ? "bg-primary animate-pulse" : "bg-muted"}`}></div>
              <span className="text-sm text-muted-foreground">{autoScroll ? "Auto-scrolling" : "Manual"}</span>
            </div>

            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-primary/30 hover:bg-primary hover:border-primary shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
            </Button>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-primary/30 hover:bg-primary hover:border-primary shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
            </Button>

            {/* Carousel */}
            <div className="overflow-visible py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {visibleCertificates.map((cert, index) => {
                    const Icon = cert.Icon;
                    return (
                      <Card
                        key={currentIndex + index}
                        className="gradient-border hover-glow cursor-pointer group transform transition-all duration-300 hover:scale-[1.02]"
                      >
                        <CardContent className="pt-6 flex flex-col h-full">
                          <div className="text-center space-y-3 flex-1">
                            {/* Icon */}
                            <div className="p-3 bg-primary/10 rounded-full inline-block mb-2 transform transition-transform duration-300 group-hover:scale-110">
                              <Icon className="w-8 h-8 text-primary" />
                            </div>

                            {/* Content */}
                            <div>
                              <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors min-h-[3rem]">
                                {cert.title}
                              </h3>
                              <p className="text-sm text-primary font-semibold mb-1">{cert.issuer}</p>
                              <p className="text-xs text-muted-foreground mb-2">{cert.achievement}</p>
                              <p className="text-xs text-muted-foreground">{cert.date}</p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                            {cert.certificateFile && (
                              <Button asChild variant="outline" className="h-8 px-3 text-xs">
                                <a href={cert.certificateFile} target="_blank" rel="noopener noreferrer">
                                  <FileText className="w-3 h-3 mr-1" />
                                  View
                                </a>
                              </Button>
                            )}
                            {cert.verifyLink && (
                              <Button asChild variant="secondary" className="h-8 px-3 text-xs">
                                <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Verify
                                </a>
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoScroll(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesCarousel;
