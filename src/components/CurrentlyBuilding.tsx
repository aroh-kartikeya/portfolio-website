import { motion } from "framer-motion";
import { Hammer, CircleAlert, TrendingUp, CreditCard, PieChart } from "lucide-react";
import { currentlyBuildingProject } from "../data/projects";

export default function CurrentlyBuilding() {
  const p = currentlyBuildingProject;

  return (
    <section id="currently-building" className="py-20 border-t border-white/5 relative bg-gradient-to-b from-[#0a0a0a] via-purple-950/[0.02] to-[#0a0a0a]">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="space-y-2 mb-12 text-center md:text-left">
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest inline-flex items-center gap-1.5 justify-center">
            <Hammer size={12} className="animate-bounce" />
            Active Development
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-white tracking-tight">
            Currently Building
          </h2>
          <p className="text-neutral-400 font-light text-sm max-w-md">
            My primary active project representing current tech stack integration.
          </p>
        </div>

        {/* Prominent Showcase Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-10 rounded-2xl border border-purple-500/20 bg-neutral-900/40 backdrop-blur-sm relative overflow-hidden shadow-glow-purple"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Column: Project Meta & Info (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-300">
                  {p.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center gap-1">
                  <CircleAlert size={12} />
                  Status: {p.status}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl md:text-3xl font-outfit font-bold text-white leading-snug">
                Building a Personal Finance Dashboard
              </h3>
              <p className="text-neutral-300 font-light leading-relaxed text-sm md:text-base">
                {p.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {p.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-neutral-950/60 border border-white/5 text-neutral-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Planned Features List */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">
                Planned Features
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-light">
                {p.plannedFeatures?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center relative">
            <div className="p-5 bg-neutral-950/90 rounded-xl border border-white/5 space-y-4 font-mono shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-neutral-500">
                <span>finance-tracker-dev</span>
                <span className="text-purple-400">localhost:3000</span>
              </div>

              {/* Mock Dashboard Widgets */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3 bg-neutral-900/60 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[9px] text-neutral-500 uppercase">
                    <span>Balance</span>
                    <TrendingUp size={10} className="text-emerald-400" />
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">$4,850.20</div>
                  <div className="text-[8px] text-emerald-400 font-sans mt-0.5">+12.4% this month</div>
                </div>
                <div className="p-3 bg-neutral-900/60 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[9px] text-neutral-500 uppercase">
                    <span>Expenses</span>
                    <CreditCard size={10} className="text-red-400" />
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">$1,230.40</div>
                  <div className="text-[8px] text-red-400 font-sans mt-0.5">4 categories tracked</div>
                </div>
              </div>

              {/* Mini Chart Mock */}
              <div className="p-3 bg-neutral-900/60 rounded-lg border border-white/5 text-left space-y-2">
                <div className="flex items-center justify-between text-[9px] text-neutral-500 uppercase">
                  <span>Analytics Overview</span>
                  <PieChart size={10} className="text-purple-400" />
                </div>
                {/* Visual Chart Bars */}
                <div className="flex items-end gap-2.5 h-16 pt-2">
                  <div className="w-full bg-neutral-800 rounded-t-sm h-[30%] relative group">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-purple-500 text-[8px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-1">$300</div>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-t-sm h-[60%]" />
                  <div className="w-full bg-neutral-800 rounded-t-sm h-[45%]" />
                  <div className="w-full bg-purple-500/80 rounded-t-sm h-[85%] animate-pulse" />
                  <div className="w-full bg-neutral-800 rounded-t-sm h-[50%]" />
                  <div className="w-full bg-neutral-800 rounded-t-sm h-[70%]" />
                </div>
                <div className="flex justify-between text-[7px] text-neutral-600 font-sans uppercase">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>

              {/* Code Status Indicator */}
              <div className="flex items-center justify-between text-[9px] text-neutral-400 font-sans pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
                  <span>Compiling database models...</span>
                </div>
                <span className="text-[9px] text-purple-400">98% coverage</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
