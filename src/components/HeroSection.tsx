
import React from "react";
import { Github, Linkedin, Twitter, Mail, Folder, FileUser  } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { aboutMe } from "@/data/portfolioData";

const NameComponent = () => (
  <span className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
    <span className="text-gradient text-5xl md:text-7xl lg:text-8xl font-bold font-display">&lt;Nasif /&gt;</span>
  </span>
);

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Visual elements - Red abstract shapes */}
      <div className="absolute inset-0 -z-10">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-white/5"></div>
        
        {/* Red blob decorations */}
        <div className="red-blob w-[40rem] h-[40rem] top-[-10rem] left-[-15rem]"></div>
        <div className="red-blob w-[30rem] h-[30rem] bottom-[10%] right-[-10rem]"></div>
        
        {/* Red ribbon */}
        <div className="red-ribbon h-[60%] w-[80%] top-[20%] right-0 transform -rotate-12"></div>
        
        {/* Gradient overlays */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-70"></div>
      </div>
      
      <RevealOnScroll>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-4">
            <NameComponent />
          </h1>
          
          <div className="relative h-8 mb-6 overflow-hidden">
            <div className="absolute w-full text-center animate-text-cycle">
              <div className="h-8 flex items-center justify-center">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">Full-Stack Developer</span>
              </div>
              <div className="h-8 flex items-center justify-center">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">Front-End Developer</span>
              </div>
              <div className="h-8 flex items-center justify-center">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">Problem Solver</span>
              </div>
              <div className="h-8 flex items-center justify-center">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">Full-Stack Developer</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Building production-ready applications with modern tech stacks. Focused on AI integration and scalable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <a 
              href="/resume.pdf" 
              download="muhammed-nasif-resume.pdf"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition group"
            >
              <FileUser size={20} className="text-white group-hover:scale-110 transition" />
              Resume
            </a>
            <a 
              href="#projects"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition group"
            >
              <Folder size={20} className="text-primary group-hover:scale-110 transition" />
              Projects
            </a>
          </div>
          
          <div className="flex justify-center items-center gap-4 mb-12">
            <a 
              href={`mailto:${aboutMe.email}`} 
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition group"
            >
              <Mail size={20} className="group-hover:scale-110 transition" />
            </a>
            <a 
              href={aboutMe.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition group"
            >
              <Github size={20} className="group-hover:scale-110 transition" />
            </a>
            <a 
              href={aboutMe.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition" />
            </a>
            <a 
              href={aboutMe.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition group"
            >
              <Twitter size={20} className="group-hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default HeroSection;
