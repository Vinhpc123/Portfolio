import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, User } from "lucide-react";
import { getIconForSkill, getColorForSkill } from "../data/icons";
import { resumeData } from "../data/resume";

// ── Animation Variants ──────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ── Component ───────────────────────────────────────────────
const Projects: React.FC = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="w-full bg-gray-50 dark:bg-[#0a0a0a] py-24 px-6 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4 transition-colors duration-500">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-500">
            Real-world applications I have built from the ground up.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-[#151515] border border-black/5 dark:border-white/5 p-8 transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden h-full"
            >
              {/* Subtle hover overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-500 z-0 pointer-events-none" />

              <div className="relative z-10">
                {/* Project Header */}
                <div className="flex flex-col gap-2 mb-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-blue-500 transition-colors duration-500">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500">
                    <span className="flex items-center gap-1.5">
                      <User size={14} className="text-blue-500" />
                      {project.role}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-purple-500" />
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 transition-colors duration-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => {
                    const IconComponent = getIconForSkill(tech);
                    const brandColor = getColorForSkill(tech);

                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full transition-all duration-300 hover:bg-white dark:hover:bg-[#1a1a1a]"
                      >
                        <IconComponent size={12} style={{ color: brandColor }} />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black bg-white rounded-full transition-transform hover:scale-105 active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  View Code
                </a>

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-white bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

