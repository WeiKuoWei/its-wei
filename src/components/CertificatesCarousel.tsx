import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data/certificates";
import { useCarousel } from "@/hooks/useCarousel";
import { CAROUSEL } from "@/config/constants";
import ExpandableCertificateCard from "./ExpandableCertificateCard";

const CertificatesCarousel = () => {
  // Sort certificates: featured first, then by date
  const sortedCertificates = [...certificates].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const {
    currentIndex,
    autoScroll,
    goToNext,
    goToPrevious,
    goToIndex,
    setAutoScroll,
  } = useCarousel({
    itemCount: sortedCertificates.length,
    itemsPerView: CAROUSEL.ITEMS_PER_VIEW,
    autoScrollInterval: CAROUSEL.AUTO_SCROLL_INTERVAL,
    autoScrollEnabled: true,
  });

  const visibleCertificates = sortedCertificates.slice(currentIndex, currentIndex + CAROUSEL.ITEMS_PER_VIEW);

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
                  {visibleCertificates.map((cert, index) => (
                    <ExpandableCertificateCard
                      key={currentIndex + index}
                      certificate={cert}
                      index={currentIndex + index}
                      onAutoScrollChange={setAutoScroll}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.ceil(sortedCertificates.length / CAROUSEL.ITEMS_PER_VIEW) }).map((_, index) => {
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
