import React from 'react';
import { X, Printer, Download, Sparkles, CheckCircle2, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { personalInfo, projects, skillCategories, education, certifications, achievements } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0d1322] border border-white/10 shadow-2xl p-6 sm:p-10 text-slate-200">
        
        {/* Actions Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
              Verified Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 flex items-center gap-1.5 border border-white/5 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div id="printable-resume" className="space-y-8 text-left">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-white/10">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm text-cyan-400 font-mono mt-1">
              {personalInfo.location} • {personalInfo.phone} • {personalInfo.email}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 mt-2">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 underline">
                LinkedIn: nandan-sharma-b4a472288
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 underline">
                GitHub: nandan91531
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 mb-2 border-b border-cyan-500/30 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 mb-2 border-b border-cyan-500/30 pb-1">
              Technical Skills
            </h2>
            <div className="text-xs sm:text-sm space-y-1.5 text-slate-300">
              <div><strong className="text-white">Programming:</strong> Python, C++, SQL</div>
              <div><strong className="text-white">AI & Generative AI:</strong> LLMs, RAG, Prompt Engineering, Ollama, OpenAI Whisper, Hugging Face, LangChain</div>
              <div><strong className="text-white">Machine Learning & Data:</strong> Scikit-learn, Pandas, NumPy, Text Embeddings, Semantic Search, Matplotlib</div>
              <div><strong className="text-white">Backend & APIs:</strong> FastAPI, Flask, REST APIs</div>
              <div><strong className="text-white">Testing & Automation:</strong> pytest, Regression Testing, Requests, Web Scraping, BeautifulSoup</div>
              <div><strong className="text-white">Deployment & Tools:</strong> Git, GitHub, Docker (Basics), Railway, Vercel, VS Code, Jupyter Notebook</div>
              <div><strong className="text-white">Databases & Storage:</strong> MySQL, ChromaDB, SQLite</div>
              <div><strong className="text-white">Core Computer Science:</strong> Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks</div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 mb-3 border-b border-cyan-500/30 pb-1">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex flex-wrap items-center justify-between font-bold text-white mb-0.5">
                    <span>{proj.title} – {proj.subtitle}</span>
                    <span className="font-mono text-xs text-slate-400">{proj.year}</span>
                  </div>
                  <div className="italic text-xs font-mono text-cyan-400/90 mb-1.5">
                    {proj.tech.join(', ')}
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-slate-300">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 mb-2 border-b border-cyan-500/30 pb-1">
              Education
            </h2>
            <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-white">{education[0].institution}</span>, {education[0].location}
                <div className="italic text-slate-300">{education[0].degree}</div>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="text-slate-400">{education[0].period}</span>
                <div className="font-bold text-emerald-400">{education[0].score}</div>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 mb-2 border-b border-cyan-500/30 pb-1">
                Certifications
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                {certifications.map((c, idx) => (
                  <li key={idx}>
                    <span className="text-white font-medium">{c.title}</span> – {c.issuer}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-cyan-400 mb-2 border-b border-cyan-500/30 pb-1">
                Achievements & DSA
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                {achievements.map((a, idx) => (
                  <li key={idx}>
                    <span className="text-white font-medium">{a.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
