import { ExternalLink, Github, X } from 'lucide-react';

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
    title: "Optimizing the Cloud",
    company: "Mercadona",
    role: "Backend Engineer",
    description: "Built a FastAPI backend that cut cloud spending by €250k/year and eliminated a major operational bottleneck by giving product teams full control over their resource usage—massively reducing infra team workload.",
    tags: ["FastAPI", "Kubernetes", "Python", "PostgreSQL", "GCP"]
  },
  {
    title: "Solving my own needs",
    company: "Stark",
    role: "Solo developer",
    description: "My first ever personal project: a fitness app to track your progress in the gym. I used to track everything with a spreadsheet my coach would send me, now we use my app. Kinda neat.",
    link: "https://stark-app.com",
    tags: ["React", "Django", "OAuth 2.0", "PostgreSQL", "VPS"]
  },
  {
    title: "Implemeting CI/CD on ASIC silicon",
    company: "MaxLinear",
    role: "Software Engineer",
    description: "Created a solution with CI/CD integration in a team of 4. Learned about backend, frontend and devops engineering. Eventually became the only engineer in the team. Acted as project manager for 6 months, which sounds crazy just to be fresh out of college.",
    tags: ["Jenkins", "Docker", "CI/CD", "Python", "React"]
  }
];

interface WorkProps {
  onClose: () => void;
}

export function Work({ onClose }: WorkProps) {
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
              WORK
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
        <div className="space-y-6 md:space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-900 border-4 md:border-8 border-gray-700 p-4 md:p-10 harsh-shadow-grey"
            >
              {/* Company tag */}
              <div className="mb-4 md:mb-6">
                <div className="inline-block bg-yellow-400 text-black border-3 md:border-4 border-black px-3 md:px-4 py-1 md:py-2">
                  <h3
                    className="text-lg md:text-2xl font-black"
                    style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
                  >
                    {project.company}
                  </h3>
                </div>
              </div>

              {/* Role */}
              <div className="mb-3 md:mb-4">
                <p className="text-gray-400 text-xs md:text-base font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.role}
                </p>
              </div>

              {/* Title */}
              <h4
                className="text-lg md:text-3xl lg:text-4xl font-black text-yellow-400 mb-4 md:mb-6 border-l-4 md:border-l-8 border-yellow-400 pl-3 md:pl-4"
                style={{ fontFamily: "'Archivo Black', 'Impact', sans-serif" }}
              >
                {project.title}
              </h4>

              {/* Description */}
              <div className="bg-black border-3 md:border-4 border-gray-700 p-4 md:p-6 mb-4 md:mb-6">
                <p className="text-xs md:text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-black border-2 md:border-3 border-gray-600 text-gray-300 px-2 md:px-4 py-1 md:py-2 text-xs md:text-base font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.link || project.github) && (
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="bg-yellow-400 text-black border-3 md:border-4 border-black px-4 md:px-6 py-3 md:py-4 flex items-center justify-center gap-2 md:gap-3 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all font-bold text-base md:text-lg"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} strokeWidth={3} className="md:w-5 md:h-5" />
                      VISIT SITE
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="bg-yellow-400 text-black border-3 md:border-4 border-black px-4 md:px-6 py-3 md:py-4 flex items-center justify-center gap-2 md:gap-3 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all font-bold text-base md:text-lg"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} strokeWidth={3} className="md:w-5 md:h-5" />
                      VIEW CODE
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical expertise */}
        <div className="mt-8 md:mt-12 bg-black border-4 md:border-8 border-yellow-400 p-4 md:p-10 harsh-shadow">
          <h3
            className="text-2xl md:text-4xl font-black text-yellow-400 mb-4 md:mb-8"
            style={{ fontFamily: "'Anton', 'Impact', sans-serif" }}
          >
            TECHNICAL EXPERTISE
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {[
              'Python', 'Django', 'FastAPI', 'Kubernetes', 'Docker',
              'Jenkins', 'Grafana', 'PostgreSQL', 'OAuth 2.0', 'Cloud Architecture'
            ].map(tech => (
              <span
                key={tech}
                className="bg-gray-800 border-2 md:border-4 border-gray-600 text-gray-300 px-3 md:px-5 py-2 md:py-3 text-xs md:text-lg font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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
