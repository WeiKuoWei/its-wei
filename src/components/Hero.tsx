/**
 * Editorial hero: masthead readouts, massive Clash Display headline (SplitText
 * masked line reveal), mono status line. LCP = the headline text, never the shader.
 */
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, OK_MOTION, REDUCED } from "@/lib/motion";
import DecoderText from "./DecoderText";

const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(OK_MOTION, () => {
        document.fonts.ready.then(() => {
          const split = SplitText.create("[data-headline]", {
            type: "lines",
            mask: "lines",
            linesClass: "line",
          });
          gsap.from(split.lines, {
            yPercent: 110,
            duration: 0.9,
            stagger: 0.09,
            ease: "power4.out",
            delay: 0.15,
          });
          gsap.from("[data-fade]", {
            opacity: 0,
            y: 14,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.75,
          });
        });
      });

      mm.add(REDUCED, () => {
        gsap.set("[data-headline], [data-fade]", { opacity: 1, y: 0 });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative min-h-svh flex flex-col justify-between px-5 md:px-10" id="top">
      {/* masthead row */}
      <div className="pt-24 md:pt-28 flex items-baseline justify-between font-mono text-[0.7rem] tracking-[0.18em] uppercase text-paper-dim" data-fade>
        <span>Wei Kuo — 郭宸維</span>
        <span className="hidden md:inline">Taipei · 25.03°N 121.56°E</span>
        <span>
          <DecoderText text="v2.0 — 2026" delay={1.1} />
        </span>
      </div>

      {/* headline */}
      <div className="flex-1 flex flex-col justify-center max-w-[1400px]">
        <p className="kicker mb-6" data-fade>
          Co-founder & Founding Engineer, GitRoll
        </p>
        <h1
          data-headline
          className="font-display font-semibold text-paper leading-[0.95] tracking-[-0.03em] text-[clamp(2.1rem,9vw,9.5rem)] text-balance"
        >
          Builds agents
          <br />
          that build things<span className="text-accent">.</span>
        </h1>
        <p className="mt-8 max-w-xl text-paper-dim text-base md:text-lg leading-relaxed" data-fade>
          AI engineer and first-author ML researcher. Ships agentic systems, ML pipelines, and the
          automation around them — from git-commit skill graphs to federal-grade auto-grading engines.
        </p>
      </div>

      {/* bottom readout row */}
      <div className="pb-8 flex items-end justify-between font-mono text-[0.7rem] tracking-[0.18em] uppercase text-paper-faint" data-fade>
        <span className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-term animate-blink" />
          <span className="text-paper-dim">open to interesting problems</span>
        </span>
        <span aria-hidden>scroll ↓</span>
      </div>
    </section>
  );
};

export default Hero;
