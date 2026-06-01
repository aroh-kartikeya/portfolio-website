import { motion } from "framer-motion";
import { ArrowDown, FileText, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { socials } from "../data/socials";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Subtle Glowing Background Effects - SaaS aesthetic */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "-3s" }} />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Accent Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-semibold text-purple-300 tracking-wide mb-6 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Currently Building: Finance Tracker
          </motion.span>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-outfit font-extrabold tracking-tight text-white mb-4 leading-none"
          >
            {socials.name}
          </motion.h1>

          {/* Role (Static, premium styling) */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-outfit font-semibold bg-gradient-to-r from-purple-400 via-indigo-200 to-blue-400 bg-clip-text text-transparent mb-6"
          >
            {socials.role}
          </motion.h2>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed mb-10"
          >
            Building modern web applications with React, Node.js and JavaScript.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* View Projects */}
            <a
              href="#currently-building"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-200 text-black text-sm font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group"
            >
              View Projects
              <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
            </a>

            {/* Resume Button */}
            <a
              href={socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-200 text-sm font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto hover:bg-neutral-800/50"
            >
              <FileText size={16} />
              Download Resume
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center p-3.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center p-3.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50 text-neutral-400 hover:text-white rounded-xl transition-all duration-300"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Smooth Scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-[10px] uppercase font-semibold tracking-widest text-neutral-500">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-neutral-500" />
        </motion.div>
      </div>
    </section>
  );
}
