/**
 * Custom hooks for modal keyboard interactions
 * Handles ESC key press and body scroll locking
 */

import { useEffect } from "react";

/**
 * Hook to handle ESC key press for closing modals
 */
export const useEscapeKey = (isOpen: boolean, onClose: () => void): void => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);
};

/**
 * Hook to lock body scroll when modal is open
 */
export const useBodyScrollLock = (isLocked: boolean): void => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLocked]);
};
