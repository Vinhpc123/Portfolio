import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Terminal,
  Server,
  PenTool,
  GitBranch,
  Wrench,
  Layout,
  Globe,
  Settings,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { resumeData } from "../data/resume";

// ── Icon Mapping Helper ────────────────────────────────────
// Lucide doesn't have brand icons (like React or Node logo),
// so we use representative technical icons for each skill.
const getIconForSkill = (skillName: string): LucideIcon => {
  const name = skillName.toLowerCase();
  if (name.includes("react") || name.includes("html") || name.includes("css") || name.includes("tailwind")) return Layout;
  if (name.includes("typescript") || name.includes("javascript")) return Code2;
  if (name.includes("node") || name.includes("express") || name.includes("php")) return Server;
  if (name.includes("mongo") || name.includes("sql")) return Database;
  if (name.includes("git")) return GitBranch;
  if (name.includes("ui/ux") || name.includes("figma")) return PenTool;
  if (name.includes("api") || name.includes("postman")) return Globe;
  if (name.includes("jwt") || name.includes("auth")) return Settings;
  if (name.includes("cloud") || name.includes("aws")) return Cloud;
  return Wrench; // Default fallback
};

// ── Animation Variants ─────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ── Component ──────────────────────────────────────────────
const Skills: React.FC = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="w-full bg-white dark:bg-[#0a0a0a] py-24 px-6 transition-colors duration-500">
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
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-500">
            The tools and technologies I use to build modern applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              {/* Group Title */}
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold text-black/80 dark:text-white/90 border-b border-black/10 dark:border-white/10 pb-3 transition-colors duration-500"
              >
                {group.category}
              </motion.h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const IconComponent = getIconForSkill(skill);

                  return (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#151515] border border-black/5 dark:border-white/5 rounded-full cursor-pointer transition-colors duration-300 hover:bg-blue-500/10 hover:border-blue-500/30"
                    >
                      <IconComponent
                        size={16}
                        className="text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors"
                      />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
