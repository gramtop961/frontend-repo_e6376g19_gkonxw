import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400" />
          <span className="font-semibold tracking-wide group-hover:text-white/90 transition-colors">
            JS Full‑Stack Dev
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="Github" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition-colors">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition-colors">
            <Linkedin size={18} />
          </a>
          <a aria-label="Email" href="mailto:hello@example.com" className="p-2 rounded-md hover:bg-white/10 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
