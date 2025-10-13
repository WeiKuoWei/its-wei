/**
 * Resume Modal - Now uses consolidated PDFModal component
 * Reduced from 60 lines to ~15 lines
 */

import PDFModal from "./PDFModal";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  return (
    <PDFModal
      isOpen={isOpen}
      onClose={onClose}
      pdfUrl="certificates/weikuo_resume.pdf"
      title="Resume PDF"
      showDownloadButton={true}
    />
  );
};

export default ResumeModal;
