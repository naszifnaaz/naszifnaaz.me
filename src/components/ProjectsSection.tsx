import React, { useState } from "react";
import { ExternalLink, ChevronRight, Code, Github } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import Modal from "./Modal";
import { projects } from "@/data/portfolioData";

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Filter to only include personal projects
  const personalProjects = projects.filter(
    (project) => !project.isCompanyProject
  );

  return (
    <section id="projects" className="py-20 px-4 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <h2 className="section-heading">
            Projects
            <span className="wave-underline"></span>
          </h2>
        </RevealOnScroll>

        <div className="space-y-16">
          {personalProjects.map((project, index) => (
            <RevealOnScroll key={project.name} delay={index * 100}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 items-center`}
              >
                {/* Project image/preview */}
                <div className="w-full md:w-2/5">
                  <div className="glass aspect-video flex items-center justify-center">
                    <span className="text-3xl font-display text-gradient">
                      {project.name}
                    </span>
                  </div>
                </div>

                {/* Project details */}
                <div className="w-full md:w-3/5 glass p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-white/80 mb-4">{project.summary}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-chip text-xs">
                        <Code size={12} className="text-primary" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between mt-4 pt-4 border-t border-white/10">
                    <button
                      onClick={() => openModal(index)}
                      className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full flex items-center transition"
                    >
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.name === "Ping" && (
                        <>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition"
                              title="Live Demo"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition"
                              title="GitHub Repository"
                            >
                              <Github size={16} />
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {selectedProject !== null && personalProjects[selectedProject] && (
          <Modal
            isOpen={true}
            onClose={closeModal}
            title={personalProjects[selectedProject].name}
            size="lg"
          >
            <div>
              {/* Project image */}
              <div className="w-full h-48 mb-6 bg-gradient-to-br from-primary/10 to-black rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-3xl font-display text-gradient">
                  {personalProjects[selectedProject].name}
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                {personalProjects[selectedProject].description.map(
                  (paragraph, i) => (
                    <p key={i} className="mb-2 text-white/80">
                      {paragraph}
                    </p>
                  )
                )}
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {personalProjects[selectedProject].features.map(
                    (feature, i) => (
                      <li key={i} className="flex">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {personalProjects[selectedProject].stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/20 text-primary text-sm py-1 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* External links */}
              <div className="mt-6 flex gap-4">
                {personalProjects[selectedProject].link && (
                  <a
                    href={personalProjects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 text-primary px-4 py-2 rounded-full"
                  >
                    Live Demo
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                )}

                {personalProjects[selectedProject].githubLink && (
                  <a
                    href={personalProjects[selectedProject].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 text-primary px-4 py-2 rounded-full"
                  >
                    GitHub Repo
                    <Github size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
