import React from 'react';
import { Code, Cpu, Terminal, X } from 'lucide-react';

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
              ABOUT
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Philosophy section */}
        <div className="bg-yellow-400 text-black border-4 md:border-8 border-black p-4 md:p-12 harsh-shadow-grey mb-6 md:mb-12">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-8"
            style={{ fontFamily: "'Archivo Black', 'Impact', sans-serif" }}
          >
            WHO I AM
          </h2>
          <div className="space-y-4 md:space-y-6 text-xs md:text-lg lg:text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <p className="leading-relaxed">
              I'm into <span className="font-black underline">automation</span>, <span className="font-black underline">distributed systems</span>, and making things <span className="font-black underline">fast</span>. Most of my work sits somewhere between writing Python code and managing cloud infrastructure—deploying stuff with Kubernetes, setting up CI/CD pipelines, that kind of thing.
            </p>
            <div className="bg-black text-yellow-400 border-3 md:border-4 border-black p-3 md:p-6">
              <p className="leading-relaxed">
                I care a lot about writing code that other people (including future me) can actually maintain. And if I can measure that something works better, even better.
              </p>
            </div>
            <p className="leading-relaxed">
              Right now I'm finishing my <span className="font-black">Master's in Distributed Computing</span> at UPV in Valencia—learning about how to process massive amounts of data without things exploding. It's pretty interesting, especially when you get to apply it to real systems.
            </p>
            <p className="leading-relaxed">
              Long term? I want to build systems that don't fall over when they grow. The kind that are <span className="font-black">efficient</span>, easy to <span className="font-black">monitor</span>, and won't require a complete rewrite in six months.
            </p>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-6 md:mb-12">
          <div className="bg-black border-4 md:border-8 border-yellow-400 p-4 md:p-6 mb-4 md:mb-8 harsh-shadow">
            <h3
              className="text-xl md:text-3xl lg:text-4xl font-black text-yellow-400"
              style={{ fontFamily: "'Anton', 'Impact', sans-serif" }}
            >
              INTERESTS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {interests.map(({ name, icon: Icon, description }) => (
              <div
                key={name}
                className="bg-gray-900 border-4 md:border-8 border-gray-700 p-4 md:p-8 harsh-shadow-grey"
              >
                <div className="mb-4 md:mb-6">
                  <div className="inline-block bg-yellow-400 text-black p-3 md:p-4 border-3 md:border-4 border-black">
                    <Icon size={24} strokeWidth={3} className="md:w-8 md:h-8" />
                  </div>
                </div>
                <h4
                  className="text-lg md:text-2xl font-black text-yellow-400 mb-3 md:mb-4"
                  style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
                >
                  {name}
                </h4>
                <div className="bg-black border-3 md:border-4 border-gray-700 p-3 md:p-4">
                  <p
                    className="text-xs md:text-base text-gray-300 leading-relaxed"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-black border-4 md:border-8 border-yellow-400 p-4 md:p-12 harsh-shadow">
          <h3
            className="text-xl md:text-3xl lg:text-4xl font-black text-yellow-400 mb-4 md:mb-8"
            style={{ fontFamily: "'Anton', 'Impact', sans-serif" }}
          >
            LANGUAGES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {languages.map(({ text, level }) => (
              <div
                key={text}
                className="bg-gray-900 border-3 md:border-4 border-gray-700 p-4 md:p-6"
              >
                <div className="mb-3 md:mb-4">
                  <div className="inline-block bg-yellow-400 text-black border-3 md:border-4 border-black px-3 md:px-4 py-1 md:py-2">
                    <h4
                      className="text-base md:text-xl font-black"
                      style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
                    >
                      {text}
                    </h4>
                  </div>
                </div>
                <p
                  className="text-xs md:text-base text-gray-400"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
