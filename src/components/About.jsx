import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function About() {
  const layerRef = useRef(null);

  function onMove(e) {
    const el = layerRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const tx = (px * 20).toFixed(2);
    const ty = (py * 20).toFixed(2);
    el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
  }
  function onLeave() {
    const el = layerRef.current; if (el) el.style.transform = 'translate3d(0,0,0)';
  }

  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10"
      >
        {/* Reactive iridescent blob */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            ref={layerRef}
            className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-[conic-gradient(from_0deg,rgba(99,102,241,0.35),rgba(168,85,247,0.35),rgba(34,211,238,0.35),rgba(99,102,241,0.35))] blur-3xl mix-blend-screen"
          />
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles size={14} className="text-cyan-300" />
            About me
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Minimal, interactive</span> and thoughtfully crafted
          </h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-3 space-y-3 text-white/70 leading-relaxed"
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              I’m a full‑stack web developer who loves building crisp, performant experiences. My work blends clean UI,
              subtle motion, and scalable architecture—so interfaces feel alive while staying reliable under real‑world
              traffic.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              When I’m not shipping features, I explore new design systems, experiment with 3D visuals, and refine
              developer workflows to keep teams moving fast without breaking quality.
            </motion.p>
          </motion.div>

          {/* underline accent with shimmer */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative overflow-hidden">
            <span className="absolute -left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-[shimmer_2.8s_linear_infinite]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
