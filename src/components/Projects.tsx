import { motion } from "framer-motion";
import { ExternalLink, BookOpen, FileText, QrCode, Gamepad2 } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { completedProjects } from "../data/projects";

export default function Projects() {
  // Map project ID to a corresponding aesthetic icon
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "book-tracking":
        return <BookOpen size={36} className="text-blue-400" />;
      case "blog-app":
        return <FileText size={36} className="text-purple-400" />;
      case "qr-studio":
        return <QrCode size={36} className="text-cyan-400" />;
      case "simon-game":
        return <Gamepad2 size={36} className="text-orange-400" />;
      default:
        return <BookOpen size={36} className="text-purple-400" />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-2 mb-12 text-center md:text-left">
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-white tracking-tight">
            Completed Projects
          </h2>
          <p className="text-neutral-400 font-light text-sm max-w-md">
            A curated list of applications I've developed, showing frontend and backend integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {completedProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="glass-card flex flex-col justify-between rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 relative group"
            >
              {/* Card visual showcase area */}
              <div className="relative">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  // Gradient Placeholder Card
                  <div
                    className={`w-full h-44 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center p-6`}
                  >
                    {/* Visual pattern overlay for high-end SaaS details */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    
                    {/* Animated central icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-4 rounded-full bg-neutral-900/60 border border-white/10 backdrop-blur-sm shadow-2xl relative"
                    >
                      {getProjectIcon(project.id)}
                    </motion.div>

                    {/* Accent glowing dot */}
                    <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/30 animate-pulse" />
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-6 text-left">
                <div className="space-y-3">
                  <h3 className="text-xl font-outfit font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/5 text-neutral-400 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions (divide line) */}
                  <div className="h-[1px] bg-white/5 w-full" />

                  {/* Action links */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-neutral-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <GithubIcon size={14} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-white text-purple-400 transition-colors ml-auto"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
