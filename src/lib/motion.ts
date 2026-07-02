/**
 * Central GSAP + Lenis setup.
 * All scroll choreography branches on prefers-reduced-motion via gsap.matchMedia().
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const REDUCED = "(prefers-reduced-motion: reduce)";
export const OK_MOTION = "(prefers-reduced-motion: no-preference)";

export function prefersReducedMotion(): boolean {
  return window.matchMedia(REDUCED).matches;
}

let lenis: Lenis | null = null;

/** Official Lenis + ScrollTrigger single-RAF recipe. No-op under reduced motion / touch. */
export function initSmoothScroll(): () => void {
  if (prefersReducedMotion()) return () => {};

  lenis = new Lenis({ autoRaf: false, syncTouch: false, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  const raf = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(raf);
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -72 });
  else el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

export { gsap, ScrollTrigger, SplitText };
