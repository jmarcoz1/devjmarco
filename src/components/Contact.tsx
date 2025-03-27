import { useState } from 'react';
import { Mail, Copy, Check, X } from 'lucide-react';

interface ContactProps {
  onClose: () => void;
}

export function Contact({ onClose }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const email = "marco.arraez.jorge@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black brutalist-grid overflow-y-auto z-[100]">
      {/* Header */}
      <div className="border-b-4 md:border-b-8 border-yellow-400 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex justify-between items-center">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-black text-yellow-400"
              style={{ fontFamily: "'Anton', 'Impact', sans-serif" }}
            >
              CONTACT
            </h1>
            <button
              onClick={onClose}
              className="bg-yellow-400 text-black border-3 md:border-4 border-black p-2 md:p-3 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all"
              aria-label="Close"
            >
              <X size={20} strokeWidth={3} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 lg:py-20">
        <div className="space-y-6 md:space-y-12">
          {/* Main CTA */}
          <div className="bg-yellow-400 text-black border-4 md:border-8 border-black p-4 md:p-12 lg:p-16 harsh-shadow-grey">
            <h2
              className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 md:mb-8"
              style={{ fontFamily: "'Archivo Black', 'Impact', sans-serif" }}
            >
              LET'S WORK TOGETHER
            </h2>
            <p
              className="text-sm md:text-xl lg:text-2xl leading-relaxed"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Always happy to chat about interesting projects, grab a coffee if you're in Valencia, or just talk tech.
            </p>
          </div>

          {/* Email section */}
          <div className="bg-black border-4 md:border-8 border-yellow-400 p-4 md:p-12 harsh-shadow">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="bg-yellow-400 text-black p-3 md:p-4 border-3 md:border-4 border-black">
                <Mail size={32} strokeWidth={3} className="md:w-10 md:h-10" />
              </div>
              <div className="flex-1 w-full">
                <h3
                  className="text-lg md:text-2xl lg:text-3xl font-black text-yellow-400 mb-3 md:mb-4"
                  style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
                >
                  EMAIL ME
                </h3>
                <div className="bg-gray-900 border-3 md:border-4 border-gray-700 p-3 md:p-6 mb-3 md:mb-4">
                  <p
                    className="text-sm md:text-xl lg:text-2xl text-gray-300 break-all font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {email}
                  </p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="bg-yellow-400 text-black border-3 md:border-4 border-black px-4 md:px-6 py-3 md:py-4 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all font-black text-base md:text-lg flex items-center gap-2 md:gap-3 w-full justify-center md:w-auto"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {copied ? (
                    <>
                      <Check size={18} strokeWidth={3} className="md:w-5 md:h-5" />
                      COPIED!
                    </>
                  ) : (
                    <>
                      <Copy size={18} strokeWidth={3} className="md:w-5 md:h-5" />
                      COPY EMAIL
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Info boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-gray-900 border-4 md:border-8 border-gray-700 p-4 md:p-8 harsh-shadow-grey">
              <h4
                className="text-lg md:text-2xl font-black text-yellow-400 mb-3 md:mb-4 border-l-4 md:border-l-8 border-yellow-400 pl-3 md:pl-4"
                style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
              >
                LOCATION
              </h4>
              <div className="bg-black border-3 md:border-4 border-gray-700 p-3 md:p-4">
                <p
                  className="text-sm md:text-lg text-gray-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Valencia, Spain
                </p>
                <p
                  className="text-xs md:text-base text-gray-400 mt-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Open to relocation in Europe
                </p>
              </div>
            </div>

            <div className="bg-gray-900 border-4 md:border-8 border-gray-700 p-4 md:p-8 harsh-shadow-grey">
              <h4
                className="text-lg md:text-2xl font-black text-yellow-400 mb-3 md:mb-4 border-l-4 md:border-l-8 border-yellow-400 pl-3 md:pl-4"
                style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
              >
                RESPONSE TIME
              </h4>
              <div className="bg-black border-3 md:border-4 border-gray-700 p-3 md:p-4">
                <p
                  className="text-sm md:text-lg text-gray-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Usually within 24 hours
                </p>
                <p
                  className="text-xs md:text-base text-gray-400 mt-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  CET timezone (UTC+1)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
