import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiTerminal from './components/AiTerminal';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { FileText, ArrowUp } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Top Fixed Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <AiTerminal />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Resume Quick Button (bottom right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        <button
          onClick={() => setIsResumeOpen(true)}
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-xs shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          <FileText className="w-4 h-4" />
          <span>View Resume</span>
        </button>
      </div>

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
