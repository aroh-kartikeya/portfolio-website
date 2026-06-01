import { motion } from "framer-motion";
import { Code2, GraduationCap, Flame, Sparkles } from "lucide-react";
import TerminalCard from "./TerminalCard";

export default function About() {
  const points = [
    {
      title: "Frontend Expertise",
      desc: "Creating polished responsive user interfaces using modern React and Tailwind CSS.",
      icon: <Code2 className="text-purple-400" size={20} />,
    },
    {
      title: "Full Stack Learning",
      desc: "Expanding knowledge into robust server-side engineering with Node.js and Express.",
      icon: <GraduationCap className="text-indigo-400" size={20} />,
    },
    {
      title: "Practical Problem Solving",
      desc: "Writing clean, standard-compliant semantic code and debugged components.",
      icon: <Flame className="text-blue-400" size={20} />,
    },
    {
      title: "Building Real Projects",
      desc: "Focusing on tangible, production-ready web apps rather than theoretical mockups.",
      icon: <Sparkles className="text-pink-400" size={20} />,
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
                Background
              </span>
              <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-white tracking-tight">
                About Me
              </h2>
            </div>

            <p className="text-neutral-300 font-light leading-relaxed text-base md:text-lg">
              I am a passionate <strong className="text-white font-medium">Full Stack Developer</strong> dedicated to building beautiful, responsive, and performance-driven web applications. My development focus rests heavily on crafting premium frontend user experiences while actively mastering robust backend systems.
            </p>
            
            <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base">
              I believe in learning by doing. I dedicate my time to creating real-world projects, solving structural code problems, and keeping pace with modern design systems. I'm actively seeking opportunities to contribute and learn through frontend or full stack developer internships.
            </p>

            {/* Structured Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                >
                  <div className="mt-0.5 shrink-0">{point.icon}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-200">
                      {point.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 font-light leading-normal">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High Fidelity Terminal Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <TerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
}
