import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, ShieldAlert, BookOpen } from "lucide-react";
import { resumeData } from "../data/resume";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About: React.FC = () => {
  const { personal, education } = resumeData;

  return (
    <section
      id="about"
      className="w-full bg-gray-50 dark:bg-[#0a0a0a] py-24 px-6 relative transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4 transition-colors duration-500">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-500">
            A glimpse into my background and what drives me.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Khối 1: Summary (8 cols) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 flex flex-col justify-center rounded-3xl bg-white dark:bg-[#151515] border border-black/5 dark:border-white/5 p-8 transition-all duration-300 hover:border-black/10 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-[#1a1a1a]"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 transition-colors duration-500">
              Who I Am
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base md:text-lg transition-colors duration-500">
              {personal.about}
            </p>
          </motion.div>

          {/* Khối 2: Location (4 cols) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 flex flex-col items-center justify-center text-center rounded-3xl bg-white dark:bg-[#151515] border border-black/5 dark:border-white/5 p-8 transition-all duration-300 hover:border-black/10 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-[#1a1a1a]"
          >
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2 transition-colors duration-500">Location</h3>
            <p className="text-gray-500 dark:text-gray-400 transition-colors duration-500">{personal.location}</p>
          </motion.div>

          {/* Khối 3: Education (6 cols) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-6 flex flex-col justify-center rounded-3xl bg-white dark:bg-[#151515] border border-black/5 dark:border-white/5 p-8 transition-all duration-300 hover:border-black/10 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-[#1a1a1a]"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2 transition-colors duration-500">Education</h3>
            <div className="mt-2 space-y-2">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 transition-colors duration-500">
                {education.school}
              </p>
              <p className="text-gray-500 dark:text-gray-400 transition-colors duration-500">{education.major}</p>
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <span className="inline-flex items-center rounded-full bg-black/5 dark:bg-white/5 px-3 py-1 text-sm text-gray-600 dark:text-gray-300 transition-colors duration-500">
                  {education.period}
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-500">
                  GPA: {education.gpa}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Khối 4: Extra/Passion (6 cols) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-6 flex flex-col justify-center rounded-3xl bg-white dark:bg-[#151515] border border-black/5 dark:border-white/5 p-8 transition-all duration-300 hover:border-black/10 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-[#1a1a1a]"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-3 transition-colors duration-500">
              Beyond Frontend
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-500">
              While my primary focus is creating beautiful and performant web
              interfaces, I hold a deep passion for{" "}
              <strong className="text-black dark:text-white font-medium transition-colors duration-500">Cybersecurity</strong>{" "}
              and{" "}
              <strong className="text-black dark:text-white font-medium transition-colors duration-500">
                Ethical Hacking
              </strong>
              . I believe that a great application isn't just about UI/UX—it
              must be secure by design from the ground up.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
