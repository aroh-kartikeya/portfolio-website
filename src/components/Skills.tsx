import { motion } from "framer-motion";
import { Monitor, Server, Wrench, ShieldCheck } from "lucide-react";
import { skillCategories } from "../data/skills";

export default function Skills() {
  // Simple mapping of category ID to beautiful Lucide icons
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Monitor className="text-purple-400" size={20} />;
      case "backend":
        return <Server className="text-blue-400" size={20} />;
      case "tools":
        return <Wrench className="text-indigo-400" size={20} />;
      default:
        return <ShieldCheck className="text-neutral-400" size={20} />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-2 mb-12 text-center">
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-white tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-neutral-400 font-light text-sm max-w-md mx-auto">
            Tools, frameworks, and languages I use to bring ideas to life in code.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Card top details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 group-hover:bg-purple-500/5 group-hover:border-purple-500/20 transition-colors">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="font-outfit font-bold text-lg text-white">
                    {category.title}
                  </h3>
                </div>
                
                {/* Divide line */}
                <div className="h-[1px] bg-white/5 w-full" />
              </div>

              {/* Skills list layout */}
              <div className="flex flex-wrap gap-2.5 mt-6">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="cursor-default px-3 py-1.5 text-xs font-medium bg-neutral-900 border border-white/5 text-neutral-300 hover:text-white hover:border-purple-500/30 hover:bg-purple-950/10 rounded-lg transition-all duration-200"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
