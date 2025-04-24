
import React from "react";
import { Download } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/80 mb-4 md:mb-0 text-sm">
        🚀 Nasif × AI
        </p>
        
        {/* Lighthouse Scores */}
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <a 
            href="/resume.pdf" 
            download="muhammed-nasif-resume.pdf"
            className="text-white/60 hover:text-primary transition-colors flex items-center gap-1 text-sm"
          >
            <Download size={14} />
            Download Résumé
          </a>
          <div className="flex space-x-3">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs text-white/60">Performance 100</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs text-white/60">Accessibility 100</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs text-white/60">SEO 100</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
