import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 pt-20 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10"
      >
        <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-400/20 blur-2xl pointer-events-none" />
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold">
            Let’s collaborate
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"> on your next idea</span>
          </h3>
          <p className="text-white/70 mt-2 max-w-2xl">
            I’m open to freelance, full‑time roles, and interesting collaborations. Tell me about your project and timeline.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-900/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail size={18} />
              Email me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
