import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Cpu, Terminal } from 'lucide-react';
import { projects } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Projects() {
  return (
    <section id="projects" className="py-14 border-b border-zinc-800/80 relative">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Production & AI Systems
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Real-world systems built with LLM prompt validation, RAG architectures, and multithreaded backend pipelines.
          </p>
        </div>
        <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
          {projects.length} Applications
        </span>
      </div>

      <div className="space-y-8">
        {projects.map((proj, idx) => (
          <TiltCard
            key={idx}
            className="rounded-2xl p-6 sm:p-7 bg-zinc-900/50 border border-zinc-800/90 hover:border-zinc-600/90 transition-all shadow-xl backdrop-blur-md"
          >
            {/* Title & Timeline */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {proj.title}
                </h3>
                <span className="text-zinc-600 text-sm hidden sm:inline">—</span>
                <span className="text-sky-400/90 font-mono text-xs sm:text-sm">{proj.subtitle}</span>
              </div>
              <span className="text-xs font-mono text-zinc-400 shrink-0">
                {proj.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-300 list-disc pl-4 leading-relaxed">
              {proj.points.map((pt, pIdx) => (
                <li key={pIdx}>{pt}</li>
              ))}
            </ul>

            {/* Tech Tags & Repo Link */}
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-zinc-950/80 text-zinc-300 font-mono text-[11px] border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-xs font-medium text-zinc-200 hover:text-white border border-zinc-700/60 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
