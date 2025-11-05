import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const glowRef = useRef(null);
  const orbitRef1 = useRef(null);
  const orbitRef2 = useRef(null);

  useEffect(() => {
    function onMove(e) {
      const { clientX: x, clientY: y } = e;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`;
        glowRef.current.style.opacity = '1';
      }
      // subtle orbiters that chase the cursor
      if (orbitRef1.current) {
        const dx = (x - window.innerWidth * 0.25) * 0.04;
        const dy = (y - window.innerHeight * 0.35) * 0.04;
        orbitRef1.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      }
      if (orbitRef2.current) {
        const dx = (x - window.innerWidth * 0.75) * -0.03;
        const dy = (y - window.innerHeight * 0.6) * -0.03;
        orbitRef2.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      }
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center" id="home">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cursor-reactive glow (doesn't block interaction) */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.22),transparent_60%)] blur-2xl transition-transform duration-100"
        style={{ left: 0, top: 0, opacity: 0 }}
      />

      {/* Soft gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-[#0b0d12]/40 to-transparent pointer-events-none" />

      {/* Floating iridescent orbs that subtly follow the cursor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          ref={orbitRef1}
          className="absolute left-1/4 top-1/3 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/50 via-purple-400/40 to-indigo-400/40 blur-xl mix-blend-screen"
        />
        <div
          ref={orbitRef2}
          className="absolute right-1/5 bottom-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400/40 via-cyan-400/40 to-purple-400/40 blur-xl mix-blend-screen"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
            Minimal. Interactive. Futuristic.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Crafting modern experiences
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"> for the web</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.12 }}
            className="text-white/70 leading-relaxed max-w-xl"
          >
            A developer focused on clarity, performance, and delightful motion. Explore the work and get in touch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.18 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-900/30 transition-transform hover:scale-[1.03] active:scale-[0.98] will-change-transform"
            >
              View Work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition-transform hover:-translate-y-0.5"
            >
              <Code size={18} />
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-cyan-400/30 blur-2xl pointer-events-none" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-1">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop"
                alt="Developer portrait"
                className="object-cover w-full h-[340px] md:h-[520px]"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
