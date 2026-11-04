import React from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="py-12 border-b border-zinc-800/80">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Technical Skills
        </h2>
        <span className="text-xs text-zinc-500 font-mono">
          Core Competencies
        </span>
      </div>

      <div className="space-y-4">
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-2.5 border-b border-zinc-900 last:border-none"
          >
            <span className="w-48 text-xs font-semibold text-zinc-400 font-mono shrink-0 uppercase tracking-wider">
              {category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item, iIdx) => (
                <span
                  key={iIdx}
                  className="px-2.5 py-1 rounded bg-zinc-900/80 text-zinc-200 text-xs border border-zinc-800/80 hover:border-zinc-700 transition-colors font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
