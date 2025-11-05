import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Cloud } from 'lucide-react';

function TiltCard({ children }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (+15 * py).toFixed(2);
    const ry = (-15 * px).toFixed(2);
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  }

  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="transition-transform duration-150 will-change-transform"
    >
      {children}
    </div>
  );
}

export default function Skills() {
  const items = [
    {
      icon: <Monitor size={20} />, title: 'Frontend', accent: 'from-indigo-500/30 to-cyan-400/30',
      points: ['React / Next.js', 'TypeScript', 'Tailwind / Radix', 'Framer Motion / Accessibility']
    },
    {
      icon: <Server size={20} />, title: 'Backend', accent: 'from-purple-500/30 to-pink-400/30',
      points: ['Node.js / FastAPI', 'REST / GraphQL', 'Postgres / MongoDB', 'Auth, caching, testing']
    },
    {
      icon: <Cloud size={20} />, title: 'DevOps', accent: 'from-teal-500/30 to-emerald-400/30',
      points: ['Docker / CI', 'Vercel / Fly.io', 'CDN / Edge', 'Observability & metrics']
    }
  ];

  return (
    <section id="skills" className="relative max-w-6xl mx-auto px-6 pt-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Capabilities
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"> & Craft</span>
        </h2>
        <p className="text-white/60 mt-2 max-w-2xl">Hover the cards to explore the stack I use to build smooth, reliable products.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <TiltCard>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-tr ${it.accent} blur-2xl pointer-events-none`} />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white/80">
                    {it.icon}
                    {it.title}
                  </div>
                  <ul className="mt-4 space-y-2 text-white/70 text-sm">
                    {it.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
