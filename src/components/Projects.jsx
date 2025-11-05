import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

function Tilt({ children }) {
  const ref = useRef(null);
  function onMove(e) {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const rx = (+10 * py).toFixed(2);
    const ry = (-10 * px).toFixed(2);
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }
  function onLeave() {
    const el = ref.current; if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="transition-transform duration-200 will-change-transform">
      {children}
    </div>
  );
}

const projects = [
  {
    title: 'Realtime Chat App',
    desc: 'Socket rooms, presence, reactions, and graceful offline states.',
    stack: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    repo: '#',
  },
  {
    title: 'E‑commerce Platform',
    desc: 'Headless storefront with secure checkout and analytics.',
    stack: ['Next.js', 'Stripe', 'Prisma', 'Postgres'],
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Engine',
    desc: 'Schema‑driven portfolio with MDX, themes, and animations.',
    stack: ['Vite', 'Framer Motion', 'MDX'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    repo: '#',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Realtime metrics, role‑based access, dark mode and charts.',
    stack: ['Next.js', 'tRPC', 'ClickHouse', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbmFseXRpY3MlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MjMyOTE4OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    url: '#',
    repo: '#',
  },
  {
    title: '3D Product Teaser',
    desc: 'Interactive 3D teaser with Spline and motion‑driven hotspots.',
    stack: ['React', 'Spline', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 pt-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Featured
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"> Projects</span>
        </h2>
        <p className="text-white/60 mt-2 max-w-2xl">
          Five projects that balance speed, usability, and motion. Hover to tilt—each card has a subtle 3D response.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.05 }}
          >
            <Tilt>
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-white/70">{p.desc}</p>
                  <ul className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li key={s} className="text-[11px] rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/70">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={p.url}
                      className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                    <a
                      href={p.repo}
                      className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
