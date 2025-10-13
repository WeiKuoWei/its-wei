/**
 * Custom hook for carousel functionality
 * Handles auto-scrolling, navigation, and state management
 */

import { useState, useEffect, useCallback } from "react";
import { CAROUSEL } from "@/config/constants";

interface UseCarouselOptions {
  itemCount: number;
  itemsPerView?: number;
  autoScrollInterval?: number;
  autoScrollEnabled?: boolean;
}

interface UseCarouselReturn {
  currentIndex: number;
  maxIndex: number;
  autoScroll: boolean;
  goToNext: () => void;
  goToPrevious: () => void;
  goToIndex: (index: number) => void;
  resetAutoScroll: () => void;
  setAutoScroll: (enabled: boolean) => void;
}

export const useCarousel = ({
  itemCount,
  itemsPerView = CAROUSEL.ITEMS_PER_VIEW,
  autoScrollInterval = CAROUSEL.AUTO_SCROLL_INTERVAL,
  autoScrollEnabled = true,
}: UseCarouselOptions): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(autoScrollEnabled);

  const maxIndex = Math.max(0, itemCount - itemsPerView);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, maxIndex, autoScrollInterval]);

  const goToNext = useCallback(() => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrevious = useCallback(() => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToIndex = useCallback((index: number) => {
    setAutoScroll(false);
    setCurrentIndex(index);
  }, []);

  const resetAutoScroll = useCallback(() => {
    setAutoScroll(true);
  }, []);

  return {
    currentIndex,
    maxIndex,
    autoScroll,
    goToNext,
    goToPrevious,
    goToIndex,
    resetAutoScroll,
    setAutoScroll,
  };
};
