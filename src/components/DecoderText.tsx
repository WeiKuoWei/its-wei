/**
 * Scramble-reveal text (hand-rolled, ~60 lines; pattern ref: HamishMW decoder).
 * Reveals instantly under reduced motion.
 */
import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#";

interface Props {
  text: string;
  className?: string;
  delay?: number; // seconds
  duration?: number; // seconds
}

const DecoderText = ({ text, className, delay = 0, duration = 1.1 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = text;
      return;
    }
    const proxy = { p: 0 };
    const tween = gsap.to(proxy, {
      p: 1,
      delay,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        const upto = Math.floor(proxy.p * text.length);
        let out = text.slice(0, upto);
        for (let i = upto; i < text.length; i++) {
          out += text[i] === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        el.textContent = out;
      },
      onComplete: () => {
        el.textContent = text;
      },
    });
    return () => {
      tween.kill();
    };
  }, [text, delay, duration]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text}
    </span>
  );
};

export default DecoderText;
