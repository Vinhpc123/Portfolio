import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
} from "lucide-react";
import { resumeData } from "../data/resume";

const Contact: React.FC = () => {
  const { personal } = resumeData;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full bg-white dark:bg-[#0a0a0a] pt-24 relative flex flex-col transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 w-full flex-grow">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4 transition-colors duration-500">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-500">
            Have a project in mind? Let's build something awesome together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* ── Left: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <h3 className="text-3xl font-semibold text-black dark:text-white transition-colors duration-500">
              Let's work together
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-500">
              I'm currently available for freelance projects and full-time
              opportunities. Feel free to reach out if you want to collaborate!
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {/* Email (with Copy) */}
              <div
                onClick={handleCopyEmail}
                className="group flex items-center gap-4 cursor-pointer p-4 rounded-2xl bg-gray-100 dark:bg-[#151515] border border-black/5 dark:border-white/5 transition-all hover:bg-blue-50 dark:hover:bg-[#1a1a1a] hover:border-blue-500/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                  {isCopied ? <CheckCircle2 size={20} /> : <Mail size={20} />}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                    Email
                  </span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium transition-colors duration-500">
                    {isCopied ? "Copied to clipboard!" : personal.email}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100 dark:bg-[#151515] border border-black/5 dark:border-white/5 transition-colors duration-500">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                    Phone
                  </span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium transition-colors duration-500">
                    {personal.phone}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100 dark:bg-[#151515] border border-black/5 dark:border-white/5 transition-colors duration-500">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                    Location
                  </span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium transition-colors duration-500">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl bg-white dark:bg-[#151515] border border-black/5 dark:border-white/5 p-8 shadow-2xl transition-colors duration-500"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="w-full border-t border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#0a0a0a] py-8 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left transition-colors duration-500">
            &copy; 2026 Tran Thanh Vinh. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
