import React from 'react';
import { Code, Pi, Cpu, Medal, Headphones, Terminal, ArrowLeft } from 'lucide-react';

const skills = [
  { name: "Frontend", icon: Terminal, items: ["React", "TypeScript", "TailwindCSS"] },
  { name: "Backend", icon: Code, items: ["Python", "PostgreSQL"] },
  { name: "DevOps", icon: Cpu, items: ["Docker", "Jenkins", "AWS", "Kubernetes"] }
];

const funFacts = [
  { icon: Pi, text: "Knew 100 digits of Pi" },
  { icon: Medal, text: "Ran a marathon (3:41)" },
  { icon: Headphones, text: "BBO from Hoke on loop" }
];

interface AboutProps {
  onClose: () => void;
}

export function About({ onClose }: AboutProps) {
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
        
        {/* Bio Section */}
        <div className="border-4 sm:border-8 border-black bg-white p-4 sm:p-8 mb-6 sm:mb-8 transform -rotate-1 hover:rotate-1 transition-transform mt-16 sm:mt-24">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase mb-4 sm:mb-8 relative inline-block">
            ABOUT ME
            <span className="absolute -inset-2 bg-[#00ffff] -z-10 transform -rotate-2" />
          </h2>
          <div className="text-base sm:text-xl md:text-2xl font-mono space-y-4 sm:space-y-6">
            <p className="relative inline-block">
              Telecom engineer with a passion for creating
              <span className="absolute -inset-2 bg-[#ffff00] -z-10 transform -rotate-1" />
            </p>
            <p>
              Based in <span className="font-bold">Valencia, Spain</span>, I tinker with technology from time to time.
              I am currently working as a Backend Engineer at Mercadona and studying an MsC in Distributed Systems.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
          {skills.map(({ name, icon: Icon, items }) => (
            <div 
              key={name}
              className="border-4 sm:border-8 border-black bg-white p-4 sm:p-8 transform hover:scale-105 transition-transform"
              style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-6">
                <Icon size={24} className="sm:w-8 sm:h-8 text-[#ff3366]" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase">{name}</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {items.map(item => (
                  <li 
                    key={item}
                    className="text-sm sm:text-base md:text-xl font-mono bg-black text-white px-2 sm:px-4 py-1 sm:py-2 inline-block transform hover:-rotate-2 transition-transform"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fun Facts */}
        <div className="border-4 sm:border-8 border-black bg-white p-4 sm:p-8 transform rotate-1">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4 sm:mb-8 relative inline-block">
            FUN FACTS
            <span className="absolute -inset-2 bg-[#00ff00] -z-10 transform -rotate-1" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {funFacts.map(({ icon: Icon, text }) => (
              <div 
                key={text}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-black text-white transform hover:scale-105 hover:-rotate-2 transition-transform"
              >
                <Icon size={20} className="sm:w-6 sm:h-6" />
                <span className="text-base sm:text-xl font-bold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}