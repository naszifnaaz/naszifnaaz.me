
import React, { useEffect } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import EasterEggButton from "@/components/EasterEggButton";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemePicker } from "@/components/ThemePicker";

const Index = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          
          // Add animation to wave underlines
          const underlines = entry.target.querySelectorAll(".wave-underline");
          underlines.forEach(underline => {
            underline.classList.add("animated");
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".reveal").forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemePicker />
      <ScrollProgress />
      <BackToTop />
      <EasterEggButton />
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
