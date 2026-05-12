import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, MessageSquare, Terminal } from "lucide-react";
import { resumeData } from "../data/resume";

// ── Animation Variants ──────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// ── Component ───────────────────────────────────────────────
const Hero: React.FC = () => {
  const { name, title, email } = resumeData.personal;

  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_FE_ReactJS_TranThanhVinh.pdf";
    link.download = "CV_FE_ReactJS_TranThanhVinh.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a] px-4 transition-colors duration-500 bg-grid"
    >
      {/* ── Glow Orbs ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 dark:bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-600/10 dark:bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[100px]" />
      </div>

      {/* ── Floating Decoration (Nhân vật hoặc Icon hoạt họa) ── */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-[10%] opacity-20 dark:opacity-40 pointer-events-none hidden lg:block"
      >
        <div className="relative">
          <Terminal size={120} className="text-blue-500" />
          <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-blue-400 animate-ping" />
        </div>
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.span
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-4 py-1.5 text-sm text-gray-500 dark:text-gray-400 backdrop-blur-sm transition-colors duration-500"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.span>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl transition-colors duration-500 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent"
        >
          {name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg font-medium tracking-widest text-gray-500 dark:text-gray-400 uppercase sm:text-xl transition-colors duration-500"
        >
          {title}
        </motion.p>

        {/* About short */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg transition-colors duration-500"
        >
          Building responsive & performant web experiences with{" "}
          <span className="text-blue-500">React</span>,{" "}
          <span className="text-indigo-500">TypeScript</span> &{" "}
          <span className="text-violet-500">Node.js</span>{" "}
          while evolving into a versatile Software Engineer.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* Primary */}
          <button
            id="hero-view-projects-btn"
            onClick={handleViewProjects}
            className="group inline-flex items-center gap-2 rounded-full bg-black dark:bg-white px-7 py-3 text-sm font-semibold text-white dark:text-black shadow-lg transition-all duration-300 hover:bg-gray-800 dark:hover:bg-blue-100 hover:shadow-blue-500/25 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            View Projects
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
          </button>

          {/* Secondary */}
          <button
            id="hero-download-cv-btn"
            onClick={handleDownloadCV}
            className="group inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 px-7 py-3 text-sm font-semibold text-black dark:text-white backdrop-blur-sm transition-all duration-300 hover:border-black/30 dark:hover:border-white/30 hover:bg-black/10 dark:hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            Download CV
            <Download size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* Email hint */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-xs text-gray-400 dark:text-gray-600 transition-colors duration-500"
        >
          or reach me at{" "}
          <a
            href={`mailto:${email}`}
            className="text-gray-500 dark:text-gray-400 underline underline-offset-4 transition-colors hover:text-black dark:hover:text-white"
          >
            {email}
          </a>
        </motion.p>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600 transition-colors duration-500"
      >
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>

      {/* ── Chat Button (Floating) ── */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black shadow-2xl transition-colors duration-500"
      >
        <MessageSquare size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;
