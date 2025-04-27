import React, { useState } from "react";
import { Calendar, Code, ExternalLink, Github, ChevronRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import Modal from "./Modal";
import { experiences, projects } from "@/data/portfolioData";

const ExperienceSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Filter company projects
  const companyProjects = projects.filter(p => p.isCompanyProject);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <h2 className="section-heading">
            Experience
            <span className="wave-underline"></span>
          </h2>
        </RevealOnScroll>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="glass p-6 relative">
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary cursor-pointer hover:ring-4 ring-primary/20 transition-all"
                  onClick={() => openModal(index)}
                  role="button"
                  aria-label={`View details for ${experience.role} at ${experience.company}`}
                ></div>
                
                <div className="flex items-center text-white/70 mb-3 text-sm">
                <span className="font-medium">{experience.role}</span>
                <span className="mx-2">•</span>
                  <span className="font-medium">{experience.company}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{experience.duration}</span>
                  </div>
                </div>
                
                <p className="text-white/80 text-sm mb-3">{experience.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.stack.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-chip text-xs py-1 px-2">
                      <Code size={12} className="text-primary mr-1" />
                      {tech}
                    </span>
                  ))}
                  {experience.stack.length > 4 && (
                    <span className="bg-white/5 text-xs py-1 px-2 rounded-full">
                      +{experience.stack.length - 4}
                    </span>
                  )}
                </div>
                
                {/* Company Projects */}
                <h4 className="text-lg font-semibold mt-6 mb-4">Notable Projects</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {companyProjects.map((project, pIndex) => (
                    <div key={pIndex} className="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-base font-semibold flex items-center gap-2">
                          <div className="bg-primary/20 p-1.5 rounded-full">
                            <Code size={14} className="text-primary" />
                          </div>
                          {project.name}
                        </h5>
                        <button
                          onClick={() => openModal(pIndex)}
                          className="text-xs text-primary hover:text-primary/80 bg-primary/10 px-2 py-1 rounded-full flex items-center"
                        >
                          View More
                          <ChevronRight size={12} className="ml-1" />
                        </button>
                      </div>
                      <p className="text-sm text-white/70 mb-2">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech, tIndex) => (
                          <span key={tIndex} className="tech-chip text-xs">
                            <Code size={12} className="text-primary mr-1" />
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="bg-white/5 text-xs py-1 px-2 rounded-full">
                            +{project.stack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      
      {/* Project Details Modal */}
      {selectedProject !== null && companyProjects[selectedProject] && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={companyProjects[selectedProject].name}
          size="lg"
        >
          <div className="space-y-6">
            <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-black rounded-lg flex items-center justify-center">
              <span className="text-3xl font-display text-gradient">
                {companyProjects[selectedProject].name}
              </span>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
              <p className="text-white/80">
                {companyProjects[selectedProject].problemStatement}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">My Contribution</h3>
              <p className="text-white/80">
                {companyProjects[selectedProject].myContribution}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="space-y-2">
                {companyProjects[selectedProject].features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {companyProjects[selectedProject].stack.map((tech, i) => (
                  <span key={i} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default ExperienceSection;
