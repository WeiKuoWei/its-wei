/**
 * Paper Modal - Now uses consolidated PDFModal component
 * Reduced from 60 lines to ~15 lines
 */

import PDFModal from "./PDFModal";

interface PaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaperModal = ({ isOpen, onClose }: PaperModalProps) => {
  return (
    <PDFModal
      isOpen={isOpen}
      onClose={onClose}
      pdfUrl="certificates/neurtralizing_the_narrative.pdf"
      title="Research Paper PDF"
      showDownloadButton={true}
    />
  );
};

export default PaperModal;
