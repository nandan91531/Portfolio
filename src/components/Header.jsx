import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Copy, Check, FileText, MapPin } from 'lucide-react';
import { personal, stats } from '../data/portfolioData';

export default function Header({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="pt-16 pb-12 border-b border-zinc-800/80">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {personal.name}
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg font-normal">
            {personal.title} <span className="text-zinc-600">—</span> {personal.subtitle}
          </p>
          <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2 font-mono">
            <MapPin className="w-3.5 h-3.5" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium border border-zinc-800 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium border border-zinc-800 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-sky-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-900 text-xs font-semibold transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>
      </div>

      {/* Professional Summary */}
      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
        {personal.summary}
      </p>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-800/60">
        {stats.map((s, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
            <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-100">{s.value}</div>
            <div className="text-xs text-zinc-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
