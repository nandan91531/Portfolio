import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="py-12 border-b border-zinc-800/80">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Featured Projects
        </h2>
        <span className="text-xs text-zinc-500 font-mono">
          {projects.length} Applications
        </span>
      </div>

      <div className="space-y-8">
        {projects.map((proj, idx) => (
          <article
            key={idx}
            className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
          >
            {/* Title & Timeline */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {proj.title}
                </h3>
                <span className="text-zinc-500 text-sm">—</span>
                <span className="text-zinc-400 text-sm">{proj.subtitle}</span>
              </div>
              <span className="text-xs font-mono text-zinc-500 shrink-0">
                {proj.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-zinc-300 list-disc pl-4 leading-relaxed">
              {proj.points.map((pt, pIdx) => (
                <li key={pIdx}>{pt}</li>
              ))}
            </ul>

            {/* Tech Tags & Repo Link */}
            <div className="mt-5 pt-4 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 font-mono text-[11px] border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
