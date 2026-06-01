import { ArrowUp } from "lucide-react";
import { socials } from "../data/socials";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-[#080808] relative select-none">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Copyright */}
        <div className="text-left">
          <p className="text-sm font-outfit font-bold text-white tracking-tight">
            {socials.name}
          </p>
          <p className="text-xs text-neutral-500 font-light mt-1">
            &copy; {currentYear} Aroh Kartikeya. All rights reserved.
          </p>
        </div>

        {/* Info */}
        <p className="text-xs text-neutral-600 font-light font-sans">
          Designed & Built with React & Tailwind CSS
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-2.5 rounded-xl border border-white/5 bg-neutral-900 text-neutral-400 hover:text-white hover:border-purple-500/20 transition-all duration-300 shadow-lg"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
