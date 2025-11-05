import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10"
      >
        <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-400/20 blur-2xl pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles size={14} className="text-cyan-300" />
            About me
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold">
            Minimal, interactive, and thoughtfully crafted
          </h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            I’m a full‑stack web developer who loves building crisp, performant experiences. My work blends clean UI, subtle
            motion, and scalable architecture—so interfaces feel alive while staying reliable under real‑world traffic.
          </p>
          <p className="mt-3 text-white/70 leading-relaxed">
            When I’m not shipping features, I explore new design systems, experiment with 3D visuals, and refine developer
            workflows to keep teams moving fast without breaking quality.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
