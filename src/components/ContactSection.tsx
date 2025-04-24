
import React from "react";
import { Mail, Github, Linkedin, Twitter, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import RevealOnScroll from "./RevealOnScroll";
import { aboutMe } from "@/data/portfolioData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  const copyEmail = async () => {
    await navigator.clipboard.writeText(aboutMe.email);
    toast({
      description: "Email copied to clipboard!",
      duration: 2000,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <h2 className="section-heading">
            Get In Touch
            <span className="wave-underline"></span>
          </h2>
        </RevealOnScroll>
        
        <div className="flex justify-center gap-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={copyEmail}
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all hover:scale-110"
                >
                  <Mail size={24} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to copy email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {Object.entries(aboutMe.socialLinks).map(([key, url]) => {
            const Icon = {
              github: Github,
              linkedin: Linkedin,
              twitter: Twitter,
            }[key];
            
            return Icon ? (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all hover:scale-110"
              >
                <Icon size={24} />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
