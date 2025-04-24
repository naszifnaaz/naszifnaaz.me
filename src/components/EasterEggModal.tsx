
import React, { useState, useEffect } from "react";
import { Github } from "lucide-react";
import Modal from "./Modal";
import { challengeQuestions } from "@/data/portfolioData";

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  // Select a random question on open
  useEffect(() => {
    if (isOpen) {
      const randomIndex = Math.floor(Math.random() * challengeQuestions.length);
      setCurrentQuestion(randomIndex);
      setIsTyping(true);
      setDisplayedText("");
    }
  }, [isOpen]);

  // Typing effect
  useEffect(() => {
    if (!isOpen || !isTyping) return;
    
    const question = challengeQuestions[currentQuestion].question;
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < question.length) {
        setDisplayedText(prev => prev + question.charAt(index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30); // Typing speed
    
    return () => clearInterval(interval);
  }, [isOpen, isTyping, currentQuestion]);

  const handleTryItClick = () => {
    // Redirect to GitHub in a new tab
    window.open("https://github.com/yourusername", "_blank");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Code Challenge"
      size="lg"
    >
      <div className="font-mono">
        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <span className="text-green-500">~ terminal</span>
        </div>
        
        {/* Terminal-like interface */}
        <div className="bg-black/80 rounded-md p-4 mb-6">
          <div className="text-green-400 mb-4">
            <span className="text-white/70">$ </span>
            <span className="text-yellow-400">challenge</span>
            <span className="text-white/70"> --random</span>
          </div>
          
          <div className="text-white mb-6">
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
          
          {!isTyping && (
            <div>
              <div className="text-green-400 mb-2">
                <span className="text-white/70">$ </span>
                <span className="text-yellow-400">code</span>
                <span className="text-white/70"> --editor</span>
              </div>
              
              {/* Code editor */}
              <div className="bg-gray-900 p-4 rounded border border-gray-700 mb-4">
                <pre className="text-white/90 whitespace-pre-wrap text-sm">
                  {challengeQuestions[currentQuestion].stub}
                </pre>
              </div>
            </div>
          )}
        </div>
        
        {!isTyping && (
          <div className="flex justify-end">
            <button
              onClick={handleTryItClick}
              className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
            >
              <Github size={16} />
              Try it on GitHub
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default EasterEggModal;
