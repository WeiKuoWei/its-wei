/**
 * Custom hook for scroll-triggered animations
 * Eliminates duplication across all section components
 */

import { useInView } from "react-intersection-observer";
import { Variants } from "framer-motion";
import { SCROLL_ANIMATION, ANIMATION_DURATION } from "@/config/constants";

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  initialY?: number;
  duration?: number;
}

interface ScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  inView: boolean;
  variants: Variants;
}

export const useScrollAnimation = (
  options: ScrollAnimationOptions = {}
): ScrollAnimationReturn => {
  const {
    threshold = SCROLL_ANIMATION.THRESHOLD,
    triggerOnce = SCROLL_ANIMATION.TRIGGER_ONCE,
    delay = 0,
    initialY = SCROLL_ANIMATION.INITIAL_Y,
    duration = ANIMATION_DURATION.DEFAULT,
  } = options;

  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: initialY,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  };

  return { ref, inView, variants };
};
