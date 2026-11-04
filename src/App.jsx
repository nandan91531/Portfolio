import React, { useState } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
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
    <div className="relative min-h-screen bg-[#07090e] text-zinc-100 font-sans selection:bg-sky-500 selection:text-black overflow-x-hidden">
      {/* 3D Interactive Three.js Constellation Background */}
      <ThreeCanvas />

      {/* Main Foreground Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <Header onOpenResume={() => setIsResumeOpen(true)} />
        <Projects />
        <Skills />
        <Education />
        <Contact />

        {/* Minimal Footer */}
        <footer className="py-12 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800/60">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 font-mono">
            <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
              LinkedIn
            </a>
            <a
              href="/Nandan_Sharma_Resume.pdf"
              download="Nandan_Sharma_Resume.pdf"
              className="hover:text-zinc-300 transition-colors"
            >
              Resume (PDF)
            </a>
          </div>
        </footer>
      </div>

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
