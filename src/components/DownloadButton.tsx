
import React, { useState } from "react";
import { Download, Code } from "lucide-react";
import EasterEggModal from "./EasterEggModal";

const DownloadButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  const handleDownload = () => {
    // In a real implementation, this would download the actual resume
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to your resume PDF
    link.download = "muhammed-nasif-resume.pdf";
    link.click();
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 flex items-center gap-2 z-40">
        <div 
          className="relative" 
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <button 
            onClick={() => setIsEasterEggOpen(true)}
            className="text-white/60 hover:text-primary transition relative"
            aria-label="Easter egg"
          >
            <div className="animate-glitch">
              <Code size={16} />
            </div>
          </button>
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 bg-black/70 backdrop-blur-sm text-xs py-1 px-2 rounded text-white whitespace-nowrap">
              What's this?
            </div>
          )}
        </div>
        <button 
          onClick={handleDownload}
          className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
          aria-label="Download Resume"
        >
          <Download size={16} />
          <span>Résumé</span>
        </button>
      </div>
      <EasterEggModal isOpen={isEasterEggOpen} onClose={() => setIsEasterEggOpen(false)} />
    </>
  );
};

export default DownloadButton;
