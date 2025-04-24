
import React, { useState } from "react";
import { Sparkles, Send, Github } from "lucide-react";
import { cn } from "@/lib/utils";

type Position = {
  top: string;
  left: string;
};

const getRandomPosition = (): Position => {
  // Random position between 10% and 90% of viewport
  const top = `${10 + Math.random() * 80}%`;
  const left = `${10 + Math.random() * 80}%`;
  return { top, left };
};

const puzzles = [
  { 
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", 
    answer: "echo" 
  },
  { 
    question: "The more you take, the more you leave behind. What am I?", 
    answer: "footsteps" 
  },
  { 
    question: "What has many keys but can't open a single lock?", 
    answer: "piano" 
  },
  { 
    question: "What gets wet while drying?", 
    answer: "towel" 
  },
  { 
    question: "What has a head and a tail but no body?", 
    answer: "coin" 
  }
];

const EasterEggButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position>(getRandomPosition());
  const [puzzle, setPuzzle] = useState(puzzles[Math.floor(Math.random() * puzzles.length)]);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOpen = () => {
    // Set a new random position each time
    setPosition(getRandomPosition());
    setPuzzle(puzzles[Math.floor(Math.random() * puzzles.length)]);
    setAnswer("");
    setIsCorrect(null);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const checkAnswer = () => {
    if (answer.toLowerCase().trim() === puzzle.answer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const visitGithub = () => {
    window.open("https://github.com/naszifnaaz", "_blank");
  };

  return (
    <>
      <button 
        onClick={handleOpen} 
        className="fixed top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-white/10 hover:border-primary/30 transition-all z-40"
        aria-label="Easter egg"
      >
        <Sparkles size={16} className="text-primary animate-pulse" />
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleClose}
          ></div>
          
          {/* Puzzle modal */}
          <div 
            className="fixed z-50 w-80 glass p-4 rounded-xl shadow-xl"
            style={{ 
              top: position.top, 
              left: position.left, 
              transform: 'translate(-50%, -50%)' 
            }}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <span className="text-primary text-xl">✨</span>
                <h3 className="font-semibold">Puzzle Time!</h3>
              </div>
              <button 
                onClick={handleClose}
                className="text-white/50 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <p className="text-sm mb-4">{puzzle.question}</p>
            
            {isCorrect === true ? (
              <div className="text-center py-4">
                <p className="text-green-400 text-lg mb-3">🎉 You got it right!</p>
                <button 
                  onClick={visitGithub} 
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full inline-flex items-center gap-2"
                >
                  <Github size={16} />
                  Visit GitHub
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={answer} 
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Your answer..."
                  className={cn(
                    "flex-1 bg-white/5 border border-white/10 px-3 py-2 rounded-full text-sm placeholder:text-white/30",
                    isCorrect === false && "border-red-500/50",
                  )}
                  onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                />
                <button 
                  onClick={checkAnswer} 
                  className="bg-primary hover:bg-primary/90 w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            )}
            
            {isCorrect === false && (
              <p className="text-red-400 text-xs mt-2">That's not quite it. Try again!</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default EasterEggButton;
