import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-black dark:text-white tracking-widest transition-colors duration-500"
        >
          Vinh<span className="text-blue-500">.</span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Theme Toggle + Let's Talk */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute text-yellow-400"
                >
                  <Sun size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute text-indigo-600"
                >
                  <Moon size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Let's Talk */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 text-sm font-medium text-black dark:text-white bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 rounded-full transition-colors border border-black/5 dark:border-white/5"
          >
            Let's Talk
          </a>

          {/* Hamburger (mobile) */}
          <button className="md:hidden text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;