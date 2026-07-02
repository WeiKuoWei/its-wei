/**
 * Shared scroll-reveal: elements tagged [data-reveal] fade-rise once on enter.
 * Under reduced motion everything is simply visible.
 */
import { gsap, OK_MOTION, REDUCED } from "@/lib/motion";

export function attachReveals(scope: HTMLElement) {
  const mm = gsap.matchMedia();

  mm.add(OK_MOTION, () => {
    const els = scope.querySelectorAll<HTMLElement>("[data-reveal]");
    els.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });
  });

  mm.add(REDUCED, () => {
    gsap.set(scope.querySelectorAll("[data-reveal]"), { opacity: 1, y: 0 });
  });

  return () => mm.revert();
}
