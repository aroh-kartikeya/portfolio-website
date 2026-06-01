import { motion } from "framer-motion";

export default function TerminalCard() {
  const terminalData = {
    location: "Noida, India",
    skills: ["React", "JavaScript", "Tailwind", "Node.js", "Express"],
    currently: "Building Finance Tracker",
    goal: "Frontend / Full Stack Internship",
    interests: ["Chess", "Fitness", "UI Design"]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg mx-auto font-mono text-xs md:text-sm bg-neutral-950/80 rounded-xl border border-white/10 shadow-glow-purple overflow-hidden glass-card text-left"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d0d] border-b border-white/5 select-none">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#eab308]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#22c55e]/80 inline-block" />
        </div>
        <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold font-sans">
          aroh-kartikeya.json
        </span>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Terminal Content */}
      <div className="p-6 space-y-4 text-neutral-300 font-mono leading-relaxed">
        {/* Terminal greeting */}
        <div className="text-neutral-500">// Static Profile Metadata</div>
        
        {/* Location */}
        <div>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">aroh</span> = {"{"}
          <div className="pl-6 mt-1">
            <span className="text-neutral-400">location:</span>{" "}
            <span className="text-emerald-400">"{terminalData.location}"</span>,
          </div>
        </div>

        {/* Skills */}
        <div className="pl-6">
          <span className="text-neutral-400">skills:</span>{" "}
          <span className="text-indigo-300">[</span>
          <div className="pl-6 flex flex-wrap gap-1 md:gap-2 my-0.5">
            {terminalData.skills.map((skill, index) => (
              <span key={skill} className="text-emerald-400">
                "{skill}"{index < terminalData.skills.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
          <span className="text-indigo-300">]</span>,
        </div>

        {/* Currently */}
        <div className="pl-6">
          <span className="text-neutral-400">currently:</span>{" "}
          <span className="text-emerald-400">"{terminalData.currently}"</span>,
        </div>

        {/* Goal */}
        <div className="pl-6">
          <span className="text-neutral-400">goal:</span>{" "}
          <span className="text-emerald-400">"{terminalData.goal}"</span>,
        </div>

        {/* Interests */}
        <div className="pl-6">
          <span className="text-neutral-400">interests:</span>{" "}
          <span className="text-indigo-300">[</span>
          <div className="pl-6 flex flex-wrap gap-1 md:gap-2 my-0.5">
            {terminalData.interests.map((interest, index) => (
              <span key={interest} className="text-emerald-400">
                "{interest}"{index < terminalData.interests.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
          <span className="text-indigo-300">]</span>
        </div>

        <div>{"};"}</div>

        {/* Console cursor */}
        <div className="flex items-center gap-1 mt-4">
          <span className="text-purple-500">&gt;</span>
          <span className="text-neutral-400">profileLoaded</span>
          <span className="w-2 h-4 bg-purple-500 animate-pulse inline-block" />
        </div>
      </div>
    </motion.div>
  );
}
