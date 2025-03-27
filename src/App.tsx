import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Twitter, Mail, Briefcase, User } from 'lucide-react';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#ff3366] p-4 sm:p-8 font-mono relative overflow-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 diagonal-lines opacity-20 z-0" />
      
      {/* Floating shapes */}
      <div className="fixed top-1/4 left-1/4 w-16 sm:w-32 h-16 sm:h-32 bg-[#00ff00] rotate-45 mix-blend-multiply animate-pulse z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-16 sm:w-32 h-16 sm:h-32 bg-[#ffff00] rounded-full mix-blend-multiply animate-pulse z-0" />

      {/* Header with social links */}
      <div className={`fixed top-4 sm:top-8 right-4 sm:right-8 flex gap-3 sm:gap-6 z-40 ${activeSection ? 'hidden' : ''}`}>
        <a href="https://www.instagram.com/dev.jmarco" className="bg-white p-2 sm:p-3 hover:bg-black hover:text-white transform hover:rotate-12 transition-all">
          <Instagram size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a href="https://x.com/devjmarco" className="bg-white p-2 sm:p-3 hover:bg-black hover:text-white transform hover:-rotate-12 transition-all">
          <Twitter size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a href="https://www.linkedin.com/in/jorgemarcoarraez/" className="bg-white p-2 sm:p-3 hover:bg-black hover:text-white transform hover:rotate-12 transition-all">
          <Linkedin size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a href="https://github.com/jmarcoz1" className="bg-white p-2 sm:p-3 hover:bg-black hover:text-white transform hover:-rotate-12 transition-all">
          <Github size={20} className="sm:w-6 sm:h-6" />
        </a>
      </div>

      {/* Main content */}
      <div className={`max-w-4xl mx-auto mt-16 sm:mt-24 md:mt-32 relative z-10 ${activeSection ? 'hidden' : ''}`}>
        <div className="border-4 sm:border-8 border-black bg-white p-4 sm:p-8 mb-6 sm:mb-12 transform -rotate-2 hover:rotate-2 transition-transform">
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-2 sm:mb-4 uppercase relative inline-block
                         hover:animate-glitch cursor-pointer">
              JORGE MARCO ARRÁEZ
              <span className="absolute -inset-2 bg-[#00ff00] -z-10 transform -rotate-3" />
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest bg-black text-white p-2 sm:p-4 inline-block
                        transform translate-x-2 sm:translate-x-4 hover:translate-x-0 transition-transform">
              BACKEND ENGINEER
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: Mail, text: 'Contact', color: '#00ff00' },
            { icon: Briefcase, text: 'Work', color: '#ffff00' },
            { icon: User, text: 'About', color: '#00ffff' }
          ].map(({ icon: Icon, text, color }) => (
            <button
              key={text}
              className="group relative border-4 sm:border-8 border-black bg-white p-4 sm:p-8 transform hover:scale-105 transition-all"
              onMouseEnter={() => setHoveredButton(text)}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => setActiveSection(text)}
              style={{
                transform: hoveredButton === text ? 'rotate(5deg)' : 'rotate(-2deg)'
              }}
            >
              <div className="relative flex flex-col items-center gap-2 sm:gap-4 group-hover:text-white z-10">
                <Icon size={36} className="sm:w-12 sm:h-12 group-hover:animate-bounce" />
                <span className="text-xl sm:text-2xl font-bold uppercase">{text}</span>
              </div>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: color }}
              />
            </button>
          ))}
        </div>

        {/* Footer text */}
        <div className="mt-8 sm:mt-16 text-center">
          <p className="text-white text-sm sm:text-lg uppercase tracking-widest border-2 sm:border-4 border-white p-2 sm:p-4 inline-block
                     transform -rotate-1 hover:rotate-1 transition-transform">
            Built with React & TailwindCSS — © 2024
          </p>
        </div>
      </div>

      {/* Sections */}
      {activeSection === 'Work' && <Work onClose={() => setActiveSection(null)} />}
      {activeSection === 'About' && <About onClose={() => setActiveSection(null)} />}
      {activeSection === 'Contact' && <Contact onClose={() => setActiveSection(null)} />}
    </div>
  );
}

export default App;