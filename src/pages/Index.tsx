import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Research from "@/components/Research";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import CertificatesCarousel from "@/components/CertificatesCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Research />
      <ProjectsShowcase />
      <CertificatesCarousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
