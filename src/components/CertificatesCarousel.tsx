import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data/certificates";
import { useCarousel } from "@/hooks/useCarousel";
import { CAROUSEL } from "@/config/constants";

const CertificatesCarousel = () => {
  const {
    currentIndex,
    maxIndex,
    autoScroll,
    goToNext,
    goToPrevious,
    goToIndex,
  } = useCarousel({
    itemCount: certificates.length,
    itemsPerView: CAROUSEL.ITEMS_PER_VIEW,
    autoScrollInterval: CAROUSEL.AUTO_SCROLL_INTERVAL,
    autoScrollEnabled: true,
  });

  const visibleCertificates = certificates.slice(currentIndex, currentIndex + CAROUSEL.ITEMS_PER_VIEW);

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
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-primary/30 hover:bg-primary hover:border-primary shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
            </Button>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
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
              {Array.from({ length: Math.ceil(certificates.length / CAROUSEL.ITEMS_PER_VIEW) }).map((_, index) => {
                const pageIndex = index * CAROUSEL.ITEMS_PER_VIEW;
                return (
                  <button
                    key={index}
                    onClick={() => goToIndex(pageIndex)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === pageIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesCarousel;
