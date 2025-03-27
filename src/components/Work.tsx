import React from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "STARK",
    description: "Fitness app for tracking workouts and progress.",
    link: "https://cyberbank.example.com",
    github: "https://github.com/jmarcoz1",
    tags: ["Django", "TypeScript", "AWS"]
  }
];

interface WorkProps {
  onClose: () => void;
}

export function Work({ onClose }: WorkProps) {
  return (
    <div className="fixed inset-0 bg-[#ff3366] p-4 sm:p-8 overflow-y-auto z-[100]">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onClose}
          className="fixed top-4 sm:top-8 left-4 sm:left-8 bg-white p-3 sm:p-4 hover:bg-black hover:text-white transform hover:rotate-12 transition-all z-[110]"
        >
          <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
          <span className="ml-2 font-bold hidden sm:inline">BACK</span>
        </button>
        
        <div className="border-4 sm:border-8 border-black bg-white p-4 sm:p-8 mb-6 sm:mb-8 transform -rotate-1 mt-16 sm:mt-24">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase mb-2 relative inline-block">
            MY WORK
            <span className="absolute -inset-2 bg-[#00ff00] -z-10 transform -rotate-2" />
          </h2>
        </div>
        
        <div className="grid gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="border-4 sm:border-8 border-black bg-white p-4 sm:p-8 transform hover:scale-[1.02] transition-transform"
              style={{ 
                transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`,
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 sm:gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 relative inline-block">
                    {project.title}
                    <span className="absolute -inset-2 bg-[#ffff00] -z-10 opacity-50" />
                  </h3>
                  <p className="text-base sm:text-xl mb-4 sm:mb-6 font-mono">{project.description}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-black text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 w-full md:w-auto">
                  <a 
                    href={project.link}
                    className="bg-[#00ff00] hover:bg-black hover:text-white p-3 sm:p-4 flex-1 md:flex-initial flex items-center justify-center gap-2 transform hover:rotate-6 transition-all text-center"
                  >
                    {/* <ExternalLink size={24} /> */}
                    <span className="font-bold text-sm sm:text-base">Link coming soon</span>
                  </a>
                  <a 
                    href={project.github}
                    className="bg-[#00ffff] hover:bg-black hover:text-white p-3 sm:p-4 flex-1 md:flex-initial flex items-center justify-center gap-2 transform hover:-rotate-6 transition-all"
                  >
                    <Github size={18} className="sm:w-6 sm:h-6" />
                    <span className="font-bold text-sm sm:text-base">CODE</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}