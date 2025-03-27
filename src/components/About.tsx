import React, { useState, useEffect } from 'react';
import { Code, Pi, Cpu, Medal, Headphones, Terminal, ArrowLeft, Lock } from 'lucide-react';

const interests = [
  { name: "Distributed Systems", icon: Cpu, description: "How to make systems that handle tons of data without breaking" },
  { name: "Observability", icon: Terminal, description: "Knowing what's actually happening in production (before things break)" },
  { name: "Cloud Automation", icon: Code, description: "Making infrastructure deploy itself so we can focus on building stuff" }
];

const languages = [
  { text: "English (C2)", level: "Fluent—no problem with tech discussions or casual chat" },
  { text: "Spanish (Native)", level: "My first language, obviously" },
  { text: "German (B1)", level: "Can order beer and talk about the weather. Working on it." }
];

interface AboutProps {
  onClose: () => void;
}

export function About({ onClose }: AboutProps) {
  const [unlockedInterests, setUnlockedInterests] = useState<number[]>([]);
  const [unlockedLanguages, setUnlockedLanguages] = useState<number[]>([]);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, Math.random() * 6000 + 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleInterestClick = (index: number) => {
    if (!unlockedInterests.includes(index)) {
      setUnlockedInterests(prev => [...prev, index]);
    }
  };

  const handleLanguageClick = (index: number) => {
    if (!unlockedLanguages.includes(index)) {
      setUnlockedLanguages(prev => [...prev, index]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black p-4 sm:p-8 overflow-y-auto z-[100]">
      {/* Glitch overlay */}
      {glitchActive && (
        <div className="fixed inset-0 bg-white opacity-5 z-40 pointer-events-none"
             style={{ mixBlendMode: 'difference' }} />
      )}

      {/* Static noise background */}
      <div
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <button
          onClick={onClose}
          className="fixed top-4 sm:top-8 left-4 sm:left-8 border-2 border-white bg-black text-white p-3 sm:p-4 hover:bg-white hover:text-black transition-all z-[110] uppercase font-bold"
        >
          <ArrowLeft size={20} className="sm:w-6 sm:h-6 inline" />
          <span className="ml-2 hidden sm:inline">RETURN</span>
        </button>

        {/* Professional Philosophy Section */}
        <div className="border-2 border-white bg-black p-4 sm:p-8 mb-6 sm:mb-8 mt-16 sm:mt-24">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase mb-4 sm:mb-8 text-white"
              style={{ letterSpacing: '4px' }}>
            ABOUT<span className="text-gray-600">_</span>ME
          </h2>
          <div className="text-sm sm:text-base md:text-lg space-y-4 sm:space-y-6 text-gray-300 leading-relaxed"
               style={{ fontFamily: "'IBM Plex Mono', 'Space Mono', 'Courier New', monospace" }}>
            <p className="text-white">
              I'm into <span className="border-b-2 border-white font-bold">automation</span>, <span className="border-b-2 border-white font-bold">distributed systems</span>, and making things <span className="border-b-2 border-white font-bold">fast</span>. Most of my work sits somewhere between writing Python code and managing cloud infrastructure—deploying stuff with Kubernetes, setting up CI/CD pipelines, that kind of thing.
            </p>
            <p className="border-l-4 border-white pl-4">
              I care a lot about writing code that other people (including future me) can actually maintain. And if I can measure that something works better, even better.
            </p>
            <p>
              Right now I'm finishing my <span className="text-white font-bold">Master's in Distributed Computing</span> at UPV in Valencia—learning about how to process massive amounts of data without things exploding. It's pretty interesting, especially when you get to apply it to real systems.
            </p>
            <p className="text-white">
              Long term? I want to build systems that don't fall over when they grow. The kind that are <span className="border-b border-white">efficient</span>, easy to <span className="border-b border-white">monitor</span>, and won't require a complete rewrite in six months.
            </p>
          </div>
        </div>

        {/* Interests Grid - Click to unlock */}
        <div className="mb-6 sm:mb-8">
          <div className="text-gray-500 text-sm mb-4 uppercase tracking-widest">
            [ {unlockedInterests.length}/{interests.length} INTERESTS REVEALED ]
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {interests.map(({ name, icon: Icon, description }, index) => {
              const isUnlocked = unlockedInterests.includes(index);
              return (
                <div
                  key={name}
                  className="border-2 border-white bg-black p-4 sm:p-6 transition-all duration-300 cursor-pointer relative"
                  onClick={() => handleInterestClick(index)}
                  style={{
                    filter: isUnlocked ? 'none' : 'blur(3px)',
                    opacity: isUnlocked ? 1 : 0.4
                  }}
                >
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <Lock size={32} color="#fff" strokeWidth={2} />
                    </div>
                  )}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Icon size={24} className="sm:w-8 sm:h-8 text-white" />
                    <h3 className="text-lg sm:text-xl font-bold uppercase text-white"
                        style={{ letterSpacing: '1px' }}>
                      {isUnlocked ? name : '█'.repeat(name.length)}
                    </h3>
                  </div>
                  <p
                    className="text-sm sm:text-base text-gray-300"
                    style={{
                      fontFamily: "'IBM Plex Mono', 'Space Mono', 'Courier New', monospace",
                      opacity: isUnlocked ? 1 : 0
                    }}
                  >
                    {isUnlocked ? description : '█'.repeat(description.length)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages - Click to reveal */}
        <div className="border-2 border-white bg-black p-4 sm:p-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4 sm:mb-8 text-white"
              style={{ letterSpacing: '4px' }}>
            LANGUAGES
          </h3>
          <div className="text-gray-500 text-sm mb-4 uppercase tracking-widest">
            [ {unlockedLanguages.length}/{languages.length} LANGUAGES DECODED ]
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {languages.map(({ text, level }, index) => {
              const isUnlocked = unlockedLanguages.includes(index);
              return (
                <div
                  key={text}
                  className="flex flex-col gap-2 p-4 sm:p-6 border-2 border-white cursor-pointer transition-all duration-300 relative"
                  onClick={() => handleLanguageClick(index)}
                  style={{
                    backgroundColor: '#000',
                    filter: isUnlocked ? 'none' : 'blur(2px)',
                    opacity: isUnlocked ? 1 : 0.5
                  }}
                >
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock size={24} color="#fff" strokeWidth={2} />
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-base sm:text-lg font-bold text-white uppercase"
                          style={{ fontFamily: "'JetBrains Mono', 'Space Mono', 'Courier New', monospace" }}>
                      {isUnlocked ? text : '█'.repeat(text.length)}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 pl-8"
                     style={{
                       fontFamily: "'IBM Plex Mono', 'Space Mono', 'Courier New', monospace",
                       opacity: isUnlocked ? 1 : 0
                     }}>
                    {isUnlocked ? level : '█'.repeat(level.length)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}