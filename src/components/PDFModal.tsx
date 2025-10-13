/**
 * Consolidated PDF Modal Component
 * Replaces PaperModal and ResumeModal with a single reusable component
 * Includes visible close and download buttons
 */

import { createPortal } from "react-dom";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEscapeKey, useBodyScrollLock } from "@/hooks/useModalKeyboardHandlers";
import { Z_INDEX } from "@/config/constants";

export interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  showDownloadButton?: boolean;
}

const PDFModal = ({
  isOpen,
  onClose,
  pdfUrl,
  title,
  showDownloadButton = true,
}: PDFModalProps) => {
  // Use custom hooks for keyboard handling and scroll locking
  useEscapeKey(isOpen, onClose);
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center animate-fade-in"
      style={{ zIndex: Z_INDEX.MODAL }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative w-[95vw] h-[95vh] md:w-[90vw] md:h-[90vh] bg-background rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* PDF Viewer */}
        <iframe
          src={pdfUrl}
          className="w-full h-full border-0"
          title={title}
        />
      </div>
    </div>,
    document.body
  );
};

export default PDFModal;
