import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { initSmoothScroll } from "@/lib/motion";
import { attachReveals } from "@/lib/reveal";
import Atmosphere from "@/components/Atmosphere";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// Lazy: the console is behind an explicit open (backtick / nav) — keep it out of the initial bundle.
const Terminal = lazy(() => import("@/components/Terminal"));

const Home = () => {
  const [term, setTerm] = useState(false);
  // Latched on first open so the lazy chunk mounts once and keeps its history across toggles.
  const [termLoaded, setTermLoaded] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (term) setTermLoaded(true);
  }, [term]);

  useEffect(() => initSmoothScroll(), []);
  useEffect(() => (mainRef.current ? attachReveals(mainRef.current) : undefined), []);

  // backtick opens the console
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "`" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setTerm((t) => !t);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Atmosphere />
      <Nav onTerminal={() => setTerm(true)} />
      <main id="main" ref={mainRef} className="relative z-10">
        <Hero />
        <Work />
        <Research />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      {termLoaded && (
        <Suspense fallback={null}>
          <Terminal open={term} onClose={() => setTerm(false)} />
        </Suspense>
      )}
    </>
  );
};

export default Home;
