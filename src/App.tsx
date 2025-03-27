import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Twitter, Mail, Briefcase, User, Eye, Lock, Key, Code, Hash, Binary } from 'lucide-react';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);
  const [puzzleProgress, setPuzzleProgress] = useState(0);
  const [revealedLetters, setRevealedLetters] = useState<number[]>([]);
  const [clickSequence, setClickSequence] = useState<string[]>([]);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [hoveredClue, setHoveredClue] = useState<number | null>(null);
  const [foundClues, setFoundClues] = useState<number[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 80);
    }, Math.random() * 8000 + 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  // Check if correct sequence is entered
  useEffect(() => {
    if (clickSequence.length >= 3) {
      const lastThree = clickSequence.slice(-3).join('');
      if (lastThree === 'J0RGE' || lastThree === 'JORGE' || lastThree === 'JOR') {
        setSecretUnlocked(true);
      }
    }
  }, [clickSequence]);

  const handleLetterClick = (letter: string, index: number) => {
    setClickSequence(prev => [...prev, letter]);
    if (!revealedLetters.includes(index)) {
      setRevealedLetters(prev => [...prev, index]);
      setPuzzleProgress(prev => prev + 1);
    }
  };

  const handleClueFound = (clueId: number) => {
    if (!foundClues.includes(clueId)) {
      setFoundClues(prev => [...prev, clueId]);
    }
  };

  const name = "JORGE MARCO ARRAEZ";
  const scrambledName = "█?█?█ ███?█ ?█?█";
  const hints = [
    "01001010", // J in binary
    "01001111", // O in binary
    "01010010", // R in binary
  ];

  return (
    <div
      className="min-h-screen p-6 md:p-8 relative overflow-hidden cursor-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #1a1a1a, #000000)',
        fontFamily: "'JetBrains Mono', 'Space Mono', 'Courier New', monospace"
      }}
    >
      {/* Custom cursor - changes based on puzzle progress */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {puzzleProgress < 3 ? (
          <Lock size={24} color="#fff" strokeWidth={2} />
        ) : puzzleProgress < 6 ? (
          <Key size={24} color="#fff" strokeWidth={2} />
        ) : (
          <Code size={24} color="#fff" strokeWidth={2} />
        )}
      </div>

      {/* Glitch overlay - reveals hints */}
      {glitchActive && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div
            className="absolute inset-0 bg-white opacity-5"
            style={{
              mixBlendMode: 'difference',
              animation: 'glitchAnim 0.08s infinite'
            }}
          />
          {/* Flash cryptic messages during glitch */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
            {hints[Math.floor(Math.random() * hints.length)]}
          </div>
        </div>
      )}

      {/* Static noise background */}
      <div
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid pattern that shifts */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)
          `,
          transform: `skew(${Math.sin(Date.now() / 5000) * 2}deg)`
        }}
      />

      {/* Hidden clickable clues scattered around */}
      {[
        { id: 1, x: 5, y: 10, icon: Hash, hint: "Click the letters in order" },
        { id: 2, x: 90, y: 15, icon: Binary, hint: "Binary speaks truth" },
        { id: 3, x: 10, y: 85, icon: Code, hint: "J.O.R.G.E" },
        { id: 4, x: 85, y: 80, icon: Key, hint: "Unlock by revealing" },
      ].map(({ id, x, y, icon: Icon, hint }) => (
        <div
          key={id}
          className={`fixed cursor-pointer transition-all duration-300 ${
            foundClues.includes(id) ? 'opacity-30' : 'opacity-10 hover:opacity-90'
          }`}
          style={{
            left: `${x}%`,
            top: `${y}%`,
          }}
          onMouseEnter={() => setHoveredClue(id)}
          onMouseLeave={() => setHoveredClue(null)}
          onClick={() => handleClueFound(id)}
        >
          <Icon size={20} color="#666" strokeWidth={1} />
          {hoveredClue === id && (
            <div className="absolute top-8 left-0 bg-black border border-white p-2 text-white text-xs whitespace-nowrap">
              {hint}
            </div>
          )}
        </div>
      ))}

      {/* Locked social links - only visible after puzzle completion */}
      {puzzleProgress >= 8 && (
        <div className={`fixed z-40 ${activeSection ? 'hidden' : ''}`}>
          <a
            href="https://www.instagram.com/dev.jmarco"
            className="fixed p-2 border border-white hover:bg-white hover:invert transition-all duration-300"
            style={{ left: '5%', top: '10%' }}
          >
            <Instagram size={20} color="#fff" />
          </a>
          <a
            href="https://x.com/devjmarco"
            className="fixed p-2 border border-white hover:bg-white hover:invert transition-all duration-300"
            style={{ right: '8%', top: '25%' }}
          >
            <Twitter size={20} color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/in/jorgemarcoarraez/"
            className="fixed p-2 border border-white hover:bg-white hover:invert transition-all duration-300"
            style={{ left: '12%', bottom: '30%' }}
          >
            <Linkedin size={20} color="#fff" />
          </a>
          <a
            href="https://github.com/jmarcoz1"
            className="fixed p-2 border border-white hover:bg-white hover:invert transition-all duration-300"
            style={{ right: '15%', bottom: '15%' }}
          >
            <Github size={20} color="#fff" />
          </a>
        </div>
      )}

      {/* Main content */}
      <div className={`max-w-4xl mx-auto mt-20 md:mt-32 relative z-10 ${activeSection ? 'hidden' : ''}`}>
        {/* Encrypted/Scrambled Name - Click to reveal */}
        <div className="mb-8 md:mb-12 relative">
          <div className="mb-4 text-gray-500 text-xs md:text-sm uppercase tracking-widest">
            [ {foundClues.length}/4 CLUES FOUND ] [ {revealedLetters.length}/{name.length} REVEALED ]
          </div>
          <div className="flex flex-wrap gap-2">
            {name.split('').map((letter, i) => {
              const isRevealed = revealedLetters.includes(i);
              const isSpace = letter === ' ';
              return (
                <span
                  key={i}
                  className="inline-block text-5xl md:text-7xl lg:text-8xl font-bold uppercase cursor-pointer select-none"
                  style={{
                    color: isRevealed ? '#fff' : '#333',
                    transform: `
                      rotate(${isRevealed ? 0 : Math.random() * 10 - 5}deg)
                      translateY(${Math.sin(i * 0.5) * 5}px)
                    `,
                    display: 'inline-block',
                    transition: 'all 0.5s',
                    textShadow: isRevealed
                      ? '3px 3px 0px #666, -1px -1px 0px #666'
                      : '1px 1px 0px #222',
                    WebkitTextStroke: isRevealed ? '1px #fff' : '1px #333',
                    filter: isRevealed ? 'none' : 'blur(2px)',
                    flexShrink: 0
                  }}
                  onClick={() => handleLetterClick(letter, i)}
                  onMouseEnter={(e) => {
                    if (!isRevealed) {
                      e.currentTarget.style.transform = 'scale(1.2) rotate(0deg)';
                      e.currentTarget.style.filter = 'blur(1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isRevealed) {
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.filter = 'blur(2px)';
                    }
                  }}
                >
                  {isSpace ? <span className="w-4 md:w-8 inline-block"></span> : (isRevealed ? letter : '█')}
                </span>
              );
            })}
          </div>

          <div className="mt-6 md:mt-8 space-y-4">
            <p
              className="text-lg md:text-2xl lg:text-3xl font-bold uppercase inline-block p-3 md:p-4 border-2 border-white"
              style={{
                backgroundColor: '#000',
                color: puzzleProgress >= 5 ? '#fff' : '#333',
                letterSpacing: '2px',
                filter: puzzleProgress >= 5 ? 'none' : 'blur(3px)',
                transition: 'all 0.5s'
              }}
            >
              {puzzleProgress >= 5 ? 'BACKEND AND CLOUD ENGINEER' : '███████ ███ ████ ████████'}
            </p>

            {/* Subheader - reveals at progress 7 */}
            <p
              className="text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl border-l-4 border-white pl-4 py-2"
              style={{
                fontFamily: "'IBM Plex Mono', 'Space Mono', 'Courier New', monospace",
                filter: puzzleProgress >= 7 ? 'none' : 'blur(4px)',
                opacity: puzzleProgress >= 7 ? 1 : 0.3,
                transition: 'all 0.5s'
              }}
            >
              {puzzleProgress >= 7
                ? 'I build systems with Python and Kubernetes that scale well and don\'t break the bank.'
                : '█████████ ████████, █████████, ███ █████████████ ███████ ████ ██████, ██████████, ███ █████████████ ████████████.'}
            </p>

            {/* Main intro paragraph - reveals at progress 9 */}
            <div
              className="text-sm md:text-base text-gray-300 max-w-3xl mt-4 md:mt-6 space-y-3"
              style={{
                fontFamily: "'IBM Plex Mono', 'Space Mono', 'Courier New', monospace",
                filter: puzzleProgress >= 9 ? 'none' : 'blur(4px)',
                opacity: puzzleProgress >= 9 ? 1 : 0.2,
                transition: 'all 0.5s'
              }}
            >
              {puzzleProgress >= 9 ? (
                <>
                  <p>
                    I'm a backend engineer who loves working with Python (FastAPI, Django) and Kubernetes. Most of my time goes into making systems that won't fall apart when they grow—stuff that's actually maintainable and doesn't cost a fortune to run. I'm finishing up my Master's in Distributed Computing while working at Mercadona, where I've been automating infrastructure and cutting costs (saved them €250k last year).
                  </p>
                  <div className="space-y-2 pt-4 border-t border-gray-700">
                    <p className="text-white">Open to relocation in Europe</p>
                    <p className="text-white">MSc in Distributed Computing</p>
                    <p className="text-white">EN (C1) • ES (Native) • DE (B1)</p>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    ███████ ████████ ████████████ ██ ██████ ████████, ███████ ███ ██████████████████ ██████████████, ████ ██████████ █████████ ████████ ███████ ████ ███████ ███████████ ███ █████████████████.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
                    <span>█ ████████, █████</span>
                    <span>█ ███ ███████████ ██████████ █ ███</span>
                    <span>█ ██ ███ • ██ ████████ • ██ ███</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Navigation buttons - locked until puzzle is partially solved */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 mb-12 md:mb-16">
          {[
            { icon: Mail, text: 'Contact', requiredProgress: 3 },
            { icon: Briefcase, text: 'Work', requiredProgress: 5 },
            { icon: User, text: 'About', requiredProgress: 7 }
          ].map(({ icon: Icon, text, requiredProgress }) => {
            const isLocked = puzzleProgress < requiredProgress;
            return (
              <button
                key={text}
                className="group w-full"
                onMouseEnter={() => !isLocked && setHoveredButton(text)}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => !isLocked && setActiveSection(text)}
                disabled={isLocked}
              >
                <div
                  className="border-2 border-white p-6 md:p-8 flex flex-col items-center gap-3 md:gap-4 transition-all duration-300 relative"
                  style={{
                    backgroundColor: '#000',
                    filter: isLocked ? 'blur(2px)' : 'none',
                    opacity: isLocked ? 0.3 : 1,
                    transform: hoveredButton === text && !isLocked ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: hoveredButton === text && !isLocked ? '8px 8px 0px #666' : 'none'
                  }}
                >
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock size={28} color="#fff" strokeWidth={2} />
                    </div>
                  )}
                  <Icon
                    size={40}
                    color="#fff"
                    strokeWidth={2}
                    className={hoveredButton === text && !isLocked ? 'animate-pulse' : ''}
                    style={{ opacity: isLocked ? 0.2 : 1 }}
                  />
                  <span className="text-lg md:text-xl font-bold uppercase text-white" style={{ opacity: isLocked ? 0.3 : 1 }}>
                    {isLocked ? '█'.repeat(text.length) : text}
                  </span>
                  {isLocked && (
                    <div className="text-xs text-gray-500 mt-2">
                      [{requiredProgress} REQUIRED]
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Cryptic footer with progress indicator */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: 11 }).map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 md:w-4 md:h-4 border border-white"
                style={{
                  backgroundColor: i < puzzleProgress ? '#fff' : 'transparent',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
          <p
            className="text-xs md:text-sm lg:text-base uppercase inline-block p-3 md:p-4 border border-white text-white"
            style={{
              letterSpacing: '2px',
              backgroundColor: '#000'
            }}
          >
            {secretUnlocked
              ? '▶ ACCESS GRANTED ◀'
              : '▶ SOLVE THE PUZZLE TO CONTINUE ◀'}
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