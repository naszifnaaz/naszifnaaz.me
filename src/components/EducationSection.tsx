
import React from "react";
import RevealOnScroll from "./RevealOnScroll";
import { School } from "lucide-react";
import { education, certifications } from "@/data/portfolioData";

const EducationSection: React.FC = () => {
  // Sort education entries by year (latest first)
  const allEducation = [...education, ...certifications].sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <h2 className="section-heading">
            Education
            <span className="wave-underline"></span>
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allEducation.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 50}>
              <div className="compact-card p-4 flex flex-col items-center text-center h-full min-h-[160px] justify-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <School className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-1">
                  {'degree' in item ? item.degree : item.name}
                </h4>
                <p className="text-xs text-white/70 mb-2">
                  {'institution' in item ? item.institution : item.issuer}
                </p>
                <span className="text-xs bg-white/5 px-2 py-0.5 rounded-full">
                  {item.year}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
