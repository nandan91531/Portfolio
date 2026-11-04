import React from 'react';
import { education, certifications, achievements } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="py-12 border-b border-zinc-800/80">
      
      {/* Education */}
      <div className="mb-10">
        <h2 className="text-xl font-bold tracking-tight text-white mb-6">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <div>
                <h3 className="text-base font-semibold text-white">
                  {edu.institution}
                </h3>
                <p className="text-sm text-zinc-400 mt-0.5">
                  {edu.degree}
                </p>
                <span className="text-xs text-zinc-500 font-mono">
                  {edu.location}
                </span>
              </div>
              <div className="sm:text-right font-mono text-xs shrink-0">
                <div className="text-zinc-400">{edu.period}</div>
                <div className="text-zinc-100 font-bold mt-0.5">{edu.score}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Achievements Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Certifications */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider font-mono mb-4">
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c, idx) => (
              <li
                key={idx}
                className="p-3.5 rounded-lg bg-zinc-900/30 border border-zinc-800/80 flex items-start justify-between gap-2 text-xs"
              >
                <span className="font-medium text-zinc-200">{c.title}</span>
                <span className="text-zinc-500 font-mono shrink-0">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Problem Solving Milestones */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider font-mono mb-4">
            Problem Solving Milestones
          </h3>
          <ul className="space-y-3">
            {achievements.map((ach, idx) => (
              <li
                key={idx}
                className="p-3.5 rounded-lg bg-zinc-900/30 border border-zinc-800/80 text-xs text-zinc-300 leading-relaxed font-mono"
              >
                • {ach}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </section>
  );
}

