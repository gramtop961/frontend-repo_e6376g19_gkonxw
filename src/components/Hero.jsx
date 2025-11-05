import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-[#0b0d12]/40 to-transparent pointer-events-none" />

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
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-900/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View Work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition-colors"
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
