import { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowLeft, Lock, Eye } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  role: string;
  description: string;
  link?: string;
  github?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Automating Infrastructure at Scale",
    company: "Mercadona",
    role: "Backend Engineer",
    description: "Built a FastAPI backend that automates Kubernetes deployments and wired up monitoring with Prometheus and Grafana. The best part? Saved the company €250k/year by optimizing how we run things. Also created some internal Python libraries that made our deployment process way more consistent—now other teams can actually understand what's going on.",
    tags: ["FastAPI", "Kubernetes", "Prometheus", "Grafana", "Python"]
  },
  {
    title: "Fitness App That Actually Works",
    company: "Stark",
    role: "Full Stack Engineer / Project Manager",
    description: "Led development of a fitness app that runs on web, iOS, and Android from one React codebase. Spent a lot of time making it fast—like 50x faster API responses and way smaller payloads. Built the whole auth system with OAuth 2.0 so trainers and athletes can securely share workout data. It's live now and people actually use it, which is cool.",
    link: "https://stark-app.com",
    github: "https://github.com/jmarcoz1",
    tags: ["React", "Django", "OAuth 2.0", "PostgreSQL", "AWS"]
  },
  {
    title: "Making CI/CD Not Suck",
    company: "MaxLinear",
    role: "Software Test and Development Engineer",
    description: "Took over our Jenkins pipelines and made them actually reliable. Cut down build times and got everything running in Docker containers so we could deploy the same way everywhere. Worked with teams across three continents (Israel, India, California) to help them make better architectural decisions.",
    tags: ["Jenkins", "Docker", "CI/CD", "Python", "Automation"]
  }
];

interface WorkProps {
  onClose: () => void;
}

export function Work({ onClose }: WorkProps) {
  const [revealedProjects, setRevealedProjects] = useState<number[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, Math.random() * 6000 + 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleProjectClick = (index: number) => {
    if (!revealedProjects.includes(index)) {
      setRevealedProjects(prev => [...prev, index]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black p-6 md:p-8 overflow-y-auto z-[100]">
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

        <div className="border-2 border-white bg-black p-4 md:p-6 lg:p-8 mb-6 md:mb-8 mt-16 md:mt-24">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-white break-words"
              style={{ letterSpacing: '2px' }}>
            WORK<span className="text-gray-600">_</span>EXPERIENCE
          </h2>
          <div className="mt-4 text-gray-500 text-xs md:text-sm uppercase tracking-widest">
            [ {revealedProjects.length}/{projects.length} PROJECTS DECRYPTED ]
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const isRevealed = revealedProjects.includes(index);
            return (
              <div
                key={project.title}
                className="border-2 border-white bg-black p-4 md:p-6 lg:p-8 transition-all duration-500 cursor-pointer relative overflow-hidden"
                onClick={() => handleProjectClick(index)}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  filter: isRevealed ? 'none' : 'blur(4px)',
                  opacity: isRevealed ? 1 : 0.5
                }}
              >
                {!isRevealed && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-4">
                    <Lock size={40} color="#fff" strokeWidth={2} />
                    <span className="text-white text-xs md:text-sm uppercase tracking-widest">
                      Click to decrypt
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="mb-3">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase mb-1 break-words"
                          style={{ letterSpacing: '1px' }}>
                        {isRevealed ? project.company : '█'.repeat(project.company.length)}
                      </h3>
                      <p className="text-xs md:text-sm lg:text-base text-gray-400 break-words"
                         style={{ fontFamily: "'IBM Plex Mono', 'Space Mono', 'Courier New', monospace" }}>
                        {isRevealed ? project.role : '█'.repeat(project.role.length)}
                      </p>
                    </div>

                    <h4 className="text-sm md:text-base lg:text-lg font-bold mb-3 text-white border-l-4 border-white pl-3 break-words"
                        style={{ letterSpacing: '1px' }}>
                      {isRevealed ? project.title : '█'.repeat(Math.min(project.title.length, 40))}
                    </h4>

                    <p className="text-xs md:text-sm lg:text-base mb-4 md:mb-6 text-gray-300 leading-relaxed break-words"
                       style={{ fontFamily: "'IBM Plex Mono', 'Space Mono', 'Courier New', monospace" }}>
                      {isRevealed ? project.description : '█'.repeat(Math.min(project.description.length, 200)) + '...'}
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="border border-white text-white px-2 md:px-3 py-1 text-xs md:text-sm font-bold uppercase break-words"
                          style={{
                            fontFamily: "'JetBrains Mono', 'Space Mono', 'Courier New', monospace",
                            opacity: isRevealed ? 1 : 0
                          }}
                        >
                          {isRevealed ? tag : '████'}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(project.link || project.github) && (
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full">
                      {project.link && (
                        <a
                          href={project.link}
                          className={`border-2 border-white bg-black text-white p-3 md:p-4 flex-1 flex items-center justify-center gap-2 transition-all text-center uppercase font-bold ${
                            isRevealed ? 'hover:bg-white hover:text-black' : 'pointer-events-none opacity-0'
                          }`}
                          onClick={(e) => !isRevealed && e.preventDefault()}
                        >
                          <ExternalLink size={16} className="md:w-5 md:h-5" />
                          <span className="text-xs md:text-sm">Visit</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          className={`border-2 border-white bg-black text-white p-3 md:p-4 flex-1 flex items-center justify-center gap-2 transition-all uppercase font-bold ${
                            isRevealed ? 'hover:bg-white hover:text-black' : 'pointer-events-none opacity-0'
                          }`}
                          onClick={(e) => !isRevealed && e.preventDefault()}
                        >
                          <Github size={16} className="md:w-5 md:h-5" />
                          <span className="text-xs md:text-sm">CODE</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {isRevealed && hoveredProject === index && (
                  <div className="absolute top-2 right-2">
                    <Eye size={24} color="#fff" strokeWidth={2} className="animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Technical expertise summary */}
        <div className="border-2 border-white bg-black p-4 md:p-6 lg:p-8 mt-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase mb-4 text-white break-words"
              style={{ letterSpacing: '1px' }}>
            TECHNICAL<span className="text-gray-600">_</span>EXPERTISE
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              'Python', 'Django', 'FastAPI', 'Kubernetes', 'Docker',
              'Jenkins', 'Grafana', 'PostgreSQL', 'OAuth 2.0', 'Cloud Architecture'
            ].map(tech => (
              <span
                key={tech}
                className="border border-gray-500 text-gray-300 px-2 md:px-3 py-1 text-xs md:text-sm uppercase break-words"
                style={{ fontFamily: "'JetBrains Mono', 'Space Mono', 'Courier New', monospace" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}