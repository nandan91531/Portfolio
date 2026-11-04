import React, { useState } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import { personal } from './data/portfolioData';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header / Intro */}
        <Header onOpenResume={() => setIsResumeOpen(true)} />

        {/* Featured Projects */}
        <Projects />

        {/* Technical Skills */}
        <Skills />

        {/* Education & Certifications */}
        <Education />

        {/* Contact */}
        <Contact />

        {/* Minimal Footer */}
        <footer className="py-10 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              LinkedIn
            </a>
            <button onClick={() => setIsResumeOpen(true)} className="hover:text-zinc-300 transition-colors">
              Resume
            </button>
          </div>
        </footer>

      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
