import React, { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { skills } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { Code, Server, Database, Laptop, Settings } from "lucide-react";

const categoryIcons = {
  frontend: Laptop,
  backend: Server,
  database: Database,
  devops: Settings,
  tools: Code,
};

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", name: "All", color: "from-gray-500/20 to-gray-400/20", icon: Code },
    { id: "frontend", name: "Front-End", color: "from-blue-500/20 to-cyan-500/20", icon: Laptop },
    { id: "backend", name: "Back-End", color: "from-green-500/20 to-emerald-500/20", icon: Server },
    { id: "database", name: "Database", color: "from-orange-500/20 to-yellow-500/20", icon: Database },
    { id: "devops", name: "DevOps", color: "from-purple-500/20 to-pink-500/20", icon: Settings },
  ];
  
  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto relative">
        <RevealOnScroll>
          <h2 className="section-heading">
            Technical Skills
            <span className="wave-underline"></span>
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all flex items-center gap-2",
                    activeCategory === category.id 
                      ? "bg-primary text-white scale-105" 
                      : "bg-white/5 hover:bg-white/10"
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>
        
        <div className="flex flex-wrap justify-center gap-4">
          {filteredSkills.map((skill, index) => (
            <RevealOnScroll key={skill.name} delay={index * 50}>
              <div className="tech-chip group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1.5">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center transition-transform group-hover:scale-110">
                  
                  <img src={skill.icon} alt={skill.name} />
                    {/* <span className="text-xs font-bold text-primary">{skill.name.substring(0, 2)}</span> */}
                  </div>
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
                
                <div className="absolute inset-x-0 -bottom-8 opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                  <div className="bg-black/90 text-white text-xs py-1 px-2 rounded text-center mx-2">
                    {skill.proficiency}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
