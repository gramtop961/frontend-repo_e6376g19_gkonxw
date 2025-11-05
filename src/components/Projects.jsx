import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    desc: 'Socket.io chat with rooms, presence, and message reactions.',
    stack: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    repo: '#',
  },
  {
    title: 'E‑commerce Platform',
    desc: 'Headless storefront with secure checkout and admin dashboard.',
    stack: ['Next.js', 'Stripe', 'Prisma', 'Postgres'],
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
    url: '#',
    repo: '#',
  },
  {
    title: 'Dev Portfolio Engine',
    desc: 'Schema-driven portfolio renderer with MDX and animations.',
    stack: ['Vite', 'Framer Motion', 'MDX'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
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
          A selection of interfaces and systems focused on performance, accessibility, and delightful motion.
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
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
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
          </motion.article>
        ))}
      </div>
    </section>
  );
}
