import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white antialiased">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1b2140] via-[#0b0d12] to-[#0b0d12] opacity-70 pointer-events-none" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-indigo-600/20 blur-3xl pointer-events-none" />
      </div>

      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
          <span className="text-white/40">Built with React + Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
