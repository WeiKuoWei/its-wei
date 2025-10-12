import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in"
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
          src="/public/certificates/weikuo_resume.pdf"
          className="w-full h-full border-0"
          title="Resume PDF"
        />
      </div>
    </div>,
    document.body
  );
};

export default ResumeModal;
