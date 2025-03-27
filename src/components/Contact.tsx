import { useState, useEffect } from 'react';
import { ArrowLeft, Mail, Lock, Eye, Copy, Check } from 'lucide-react';

interface ContactProps {
  onClose: () => void;
}

export function Contact({ onClose }: ContactProps) {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [messageRevealed, setMessageRevealed] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, Math.random() * 6000 + 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const email = "marco.arraez.jorge@gmail.com";
  const encryptedEmail = "█████.██████.█████@█████.███";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          className="fixed top-4 md:top-8 left-4 md:left-8 border-2 border-white bg-black text-white p-3 md:p-4 hover:bg-white hover:text-black transition-all z-[110] uppercase font-bold"
        >
          <ArrowLeft size={20} className="md:w-6 md:h-6 inline" />
          <span className="ml-2 hidden md:inline">RETURN</span>
        </button>

        <div className="border-2 border-white bg-black p-4 md:p-6 lg:p-8 mb-6 md:mb-8 mt-16 md:mt-24">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-white mb-8 break-words"
              style={{ letterSpacing: '2px' }}>
            CONTACT<span className="text-gray-600">_</span>ME
          </h2>

          <div className="mt-4 md:mt-8 space-y-6 md:space-y-8">
            {/* Email Section - Click to reveal */}
            <div
              className="border-2 border-white p-4 md:p-6 lg:p-8 cursor-pointer relative transition-all duration-500 overflow-hidden"
              onClick={() => setEmailRevealed(true)}
              style={{
                filter: emailRevealed ? 'none' : 'blur(3px)',
                opacity: emailRevealed ? 1 : 0.6
              }}
            >
              {!emailRevealed && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="flex flex-col items-center gap-3">
                    <Lock size={32} color="#fff" strokeWidth={2} />
                    <span className="text-white text-xs md:text-sm uppercase tracking-widest">
                      Click to reveal
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
                <Mail size={20} className="md:w-8 md:h-8 text-white flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span
                    className="text-sm md:text-base lg:text-xl text-white break-all font-bold block"
                    style={{
                      fontFamily: "'JetBrains Mono', 'Space Mono', 'Courier New', monospace",
                      wordBreak: 'break-all'
                    }}
                  >
                    {emailRevealed ? email : encryptedEmail}
                  </span>
                </div>
                {emailRevealed && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyEmail();
                    }}
                    className="border border-white bg-black text-white px-3 md:px-4 py-2 hover:bg-white hover:text-black transition-all flex items-center gap-2 uppercase text-xs md:text-sm font-bold w-full md:w-auto justify-center"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                )}
              </div>

              {emailRevealed && (
                <div className="absolute top-2 right-2">
                  <Eye size={20} color="#fff" strokeWidth={2} className="animate-pulse" />
                </div>
              )}
            </div>

            {/* Message Section - Click to reveal */}
            <div
              className="border-2 border-white p-4 md:p-6 lg:p-8 cursor-pointer relative transition-all duration-500"
              onClick={() => setMessageRevealed(true)}
              style={{
                filter: messageRevealed ? 'none' : 'blur(2px)',
                opacity: messageRevealed ? 1 : 0.6
              }}
            >
              {!messageRevealed && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Lock size={28} color="#fff" strokeWidth={2} />
                </div>
              )}

              <p className="text-xs md:text-sm lg:text-base text-gray-300 border-l-4 border-white pl-3 md:pl-4 leading-relaxed break-words"
                 style={{ fontFamily: "'IBM Plex Mono', 'Space Mono', 'Courier New', monospace" }}>
                {messageRevealed
                  ? "Always happy to chat about interesting projects, grab a coffee if you're in Valencia, or just talk tech. Hit me up!"
                  : "████ ████ ██ █████ ███ ███ ███████████████ ██ ████ ██ ███ █████!"}
              </p>
            </div>

            {/* Decryption Status */}
            <div className="mt-8 text-center">
              <div className="inline-block border border-white px-4 md:px-6 py-2 md:py-3 text-gray-500 uppercase text-xs md:text-sm tracking-widest"
                   style={{ fontFamily: "'JetBrains Mono', 'Space Mono', 'Courier New', monospace" }}>
                [ {(emailRevealed ? 1 : 0) + (messageRevealed ? 1 : 0)}/2 FIELDS DECRYPTED ]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 