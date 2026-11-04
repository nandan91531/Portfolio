import React from 'react';
import { X, Printer } from 'lucide-react';
import { personal, projects, skills, education, certifications, achievements } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-10 text-zinc-200 shadow-2xl">
        
        {/* Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6 print:hidden">
          <span className="text-xs font-mono text-zinc-400">Curriculum Vitae</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-6 text-left text-xs sm:text-sm">
          
          {/* Header */}
          <div className="text-center pb-4 border-b border-zinc-800">
            <h1 className="text-2xl font-bold text-white tracking-tight">{personal.name}</h1>
            <p className="text-xs text-zinc-400 mt-1 font-mono">
              {personal.location} | {personal.phone} | {personal.email}
            </p>
            <p className="text-xs text-zinc-400 mt-0.5 font-mono">
              linkedin.com/in/nandan-sharma-b4a472288 | github.com/nandan91531
            </p>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-zinc-300 leading-relaxed text-xs">
              {personal.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-1 mb-2 font-mono">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-zinc-300">
              {Object.entries(skills).map(([cat, list], idx) => (
                <div key={idx}>
                  <strong className="text-zinc-100">{cat}:</strong> {list.join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-1 mb-2 font-mono">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-semibold text-zinc-100">
                    <span>{proj.title} – {proj.subtitle}</span>
                    <span className="font-mono text-zinc-400 text-xs">{proj.period}</span>
                  </div>
                  <div className="text-[11px] font-mono italic text-zinc-400 mb-1">
                    {proj.tech.join(', ')}
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-300">
                    {proj.points.map((p, pIdx) => (
                      <li key={pIdx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div className="flex items-center gap-2">
                    {edu.logo && (
                      <img src={edu.logo} alt="logo" className="w-5 h-5 object-contain rounded bg-white p-[1px] shrink-0" />
                    )}
                    <div>
                      <strong className="text-zinc-100">{edu.institution}</strong>, {edu.location}
                      <div className="italic text-zinc-400">{edu.degree}</div>
                    </div>
                  </div>
                  <div className="text-right font-mono text-zinc-400 shrink-0">
                    <div>{edu.period}</div>
                    <div className="font-bold text-zinc-200">{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-1 mb-2 font-mono">
                Certifications
              </h2>
              <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-300">
                {certifications.map((c, idx) => (
                  <li key={idx}><span className="text-zinc-100">{c.title}</span> – {c.issuer}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-1 mb-2 font-mono">
                Achievements
              </h2>
              <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-300">
                {achievements.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
