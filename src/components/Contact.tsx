import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';

interface ContactProps {
  onClose: () => void;
}

export function Contact({ onClose }: ContactProps) {
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
            CONTACT ME
            <span className="absolute -inset-2 bg-[#00ffff] -z-10 transform -rotate-2" />
          </h2>
          
          <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <Mail size={24} className="sm:w-8 sm:h-8 text-[#ff3366]" />
              <a 
                href="mailto:example@example.com" 
                className="text-base sm:text-xl md:text-2xl font-mono underline hover:text-[#ff3366] transform hover:-rotate-2 transition-transform"
              >
                example@example.com
              </a>
            </div>
            
            <p className="text-sm sm:text-base md:text-xl font-mono border-l-4 border-black pl-3 sm:pl-4">
              Feel free to reach out for collaborations or just to say hello!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 