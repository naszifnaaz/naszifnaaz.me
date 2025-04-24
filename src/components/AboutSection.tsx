
import React from "react";
import { Code, Zap, Rocket, Users } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { aboutMe } from "@/data/portfolioData";

const HighlightedText = ({ text }: { text: string }) => (
  <span className="px-2 py-1 bg-primary/10 rounded text-primary">{text}</span>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto relative">
        <RevealOnScroll>
          <h2 className="section-heading">
            About Me
            <span className="wave-underline"></span>
          </h2>
        </RevealOnScroll>
        
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <RevealOnScroll delay={100}>
            <p className="text-lg text-white/80 leading-relaxed">
              {aboutMe.summary.split(' ').map((word, index) => {
                const highlightWords = ['Full-stack', 'MERN', 'Next.js', 'TypeScript', 'AI'];
                return highlightWords.includes(word) ? (
                  <React.Fragment key={index}>
                    <HighlightedText text={word} />{' '}
                  </React.Fragment>
                ) : word + ' '
              })}
            </p>
          </RevealOnScroll>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {aboutMe.funFacts.map((fact, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="compact-card p-3 h-full flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <div className="rounded-full bg-primary/10 p-1.5 shrink-0">
                    {getIcon(fact.icon)}
                  </div>
                  <h3 className="font-semibold text-sm">{fact.title}</h3>
                </div>
                <p className="text-xs text-white/70">{fact.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "code":
      return <Code size={16} className="text-primary" />;
    case "zap":
      return <Zap size={16} className="text-primary" />;
    case "rocket":
      return <Rocket size={16} className="text-primary" />;
    case "users":
      return <Users size={16} className="text-primary" />;
    default:
      return <Code size={16} className="text-primary" />;
  }
};

export default AboutSection;
