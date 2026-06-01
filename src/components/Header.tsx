import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { socials } from "../data/socials";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Currently Building", href: "#currently-building" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-outfit font-bold tracking-tight bg-gradient-to-r from-purple-400 via-indigo-200 to-blue-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          Aroh<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Social Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-neutral-400 hover:text-neutral-100 transition-colors duration-200 rounded-lg hover:bg-white/5"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-neutral-400 hover:text-neutral-100 transition-colors duration-200 rounded-lg hover:bg-white/5"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={socials.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-950/10 text-xs font-semibold text-purple-200 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
          >
            Resume
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-neutral-400 hover:text-neutral-100 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[69px] left-0 right-0 bottom-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 flex flex-col justify-between p-8 z-40">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-outfit font-medium text-neutral-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex flex-col gap-6">
            <div className="h-[1px] bg-white/5 w-full"></div>
            <div className="flex items-center justify-around">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <GithubIcon size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <LinkedinIcon size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
            <a
              href={socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-purple-500/30 bg-purple-950/10 text-sm font-semibold text-purple-200"
            >
              Download Resume
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
