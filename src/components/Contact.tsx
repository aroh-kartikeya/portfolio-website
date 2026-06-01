import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { socials } from "../data/socials";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  
  // Form input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // UI status states
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // EMAILJS KEYS - User can replace these or load via Vite env variables: import.meta.env.VITE_EMAILJS_SERVICE_ID
  const SERVICE_ID = ""; // e.g. "service_xxxxxx"
  const TEMPLATE_ID = ""; // e.g. "template_xxxxxx"
  const PUBLIC_KEY = ""; // e.g. "user_xxxxxx"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("sending");

    // EmailJS credentials check. If keys are missing, simulate a successful send for demo purposes.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn("EmailJS credentials not set. Simulating successful form submission.");
      
      // Simulate API lag
      setTimeout(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        // Reset back to idle status after a few seconds
        setTimeout(() => setStatus("idle"), 6000);
      }, 1500);
      return;
    }

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 6000);
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage(err?.text || "An unexpected error occurred. Please try again later.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-2 mb-12 text-center">
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
          <p className="text-neutral-400 font-light text-sm max-w-md mx-auto">
            Have a question or want to work together? Drop a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Social Connections (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl font-outfit font-bold text-white mb-4">
              Let's connect
            </h3>
            <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
              Feel free to reach out regarding projects, opportunities, collaborations, or just to connect.
            </p>

            {/* Direct Connect Buttons */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-purple-500/5 hover:border-purple-500/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-neutral-900 border border-white/5 text-purple-400 group-hover:text-purple-300">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide">
                    Email
                  </div>
                  <div className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                    {socials.email}
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-blue-500/5 hover:border-blue-500/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-neutral-900 border border-white/5 text-blue-400 group-hover:text-blue-300">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide">
                    GitHub
                  </div>
                  <div className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                    github.com/aroh-kartikeya
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-neutral-900 border border-white/5 text-indigo-400 group-hover:text-indigo-300">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide">
                    LinkedIn
                  </div>
                  <div className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                    linkedin.com/in/aroh-kartikeya
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 text-left shadow-glow-blue relative">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="user_name" className="text-xs font-semibold text-neutral-400">
                    Your Name
                  </label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    disabled={status === "sending"}
                    className="w-full px-4 py-3 bg-neutral-950/70 border border-white/5 focus:border-purple-500/50 text-white rounded-xl placeholder:text-neutral-600 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="user_email" className="text-xs font-semibold text-neutral-400">
                    Your Email
                  </label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    disabled={status === "sending"}
                    className="w-full px-4 py-3 bg-neutral-950/70 border border-white/5 focus:border-purple-500/50 text-white rounded-xl placeholder:text-neutral-600 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-neutral-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hey Aroh, let's discuss internship opportunities..."
                    disabled={status === "sending"}
                    className="w-full px-4 py-3 bg-neutral-950/70 border border-white/5 focus:border-purple-500/50 text-white rounded-xl placeholder:text-neutral-600 focus:outline-none transition-colors duration-300 disabled:opacity-50 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending" || !name || !email || !message}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black hover:bg-neutral-200 text-sm font-semibold rounded-xl transition-all duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Status Notifications */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-[#0a0a0a]/95 rounded-2xl flex flex-col items-center justify-center p-6 text-center z-20 border border-purple-500/20"
                  >
                    <CheckCircle2 size={48} className="text-emerald-400 mb-4 animate-bounce" />
                    <h4 className="text-lg font-outfit font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
                      Thank you for reaching out. I'll get back to you as soon as possible!
                    </p>
                    {(!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) && (
                      <span className="text-[9px] text-amber-400 mt-4 font-mono bg-amber-500/5 px-2 py-1 rounded border border-amber-500/10">
                        Sent
                      </span>
                    )}
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-x-6 bottom-6 bg-red-950/90 border border-red-500/20 rounded-xl p-4 flex items-start gap-3 z-20"
                  >
                    <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Submission Error</h4>
                      <p className="text-[10px] text-red-300 mt-1 leading-normal">
                        {errorMessage}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
