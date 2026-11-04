import React from 'react';
import { education, certifications, achievements, leadership } from '../data/portfolioData';
import TiltCard from './TiltCard';

// 1. Small Micro-Illustration for Project Team Leader (Central Node + Team Satellites)
function TeamLeaderIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-sky-950/40 border border-sky-500/30 flex items-center justify-center p-2 shadow-sm shadow-sky-950/40">
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pulsing Outer Orbit */}
        <circle cx="20" cy="20" r="14" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" className="animate-[spin_12s_linear_infinite]" />
        {/* Connection Lines */}
        <line x1="20" y1="20" x2="10" y2="12" stroke="#38bdf8" strokeWidth="1.2" opacity="0.6" />
        <line x1="20" y1="20" x2="30" y2="12" stroke="#38bdf8" strokeWidth="1.2" opacity="0.6" />
        <line x1="20" y1="20" x2="20" y2="32" stroke="#38bdf8" strokeWidth="1.2" opacity="0.6" />
        {/* Central Leader Node */}
        <circle cx="20" cy="20" r="4.5" fill="#38bdf8" />
        <circle cx="20" cy="20" r="7" stroke="#38bdf8" strokeWidth="1" opacity="0.5" className="animate-ping" />
        {/* Satellites */}
        <circle cx="10" cy="12" r="3" fill="#818cf8" />
        <circle cx="30" cy="12" r="3" fill="#818cf8" />
        <circle cx="20" cy="32" r="3" fill="#818cf8" />
      </svg>
    </div>
  );
}

// 2. Small Micro-Illustration for Peer Mentoring (Two Peers + Knowledge Share)
function PeerMentorIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-center p-2 shadow-sm shadow-indigo-950/40">
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Peer 1 (Mentor) */}
        <circle cx="12" cy="14" r="3.5" fill="#818cf8" />
        <path d="M6 26C6 22.5 8.5 20.5 12 20.5C15.5 20.5 18 22.5 18 26" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Peer 2 (Junior Student) */}
        <circle cx="28" cy="14" r="3.5" fill="#38bdf8" />
        <path d="M22 26C22 22.5 24.5 20.5 28 20.5C31.5 20.5 34 22.5 34 26" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Shared Code Spark / Knowledge Bridge */}
        <path d="M16 12C18 9 22 9 24 12" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" className="animate-pulse" />
        <circle cx="20" cy="10" r="1.5" fill="#fbbf24" />
        <text x="20" y="32" textAnchor="middle" fill="#a5b4fc" fontSize="7" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
      </svg>
    </div>
  );
}

// 3. Small Micro-Illustration for Sports & Chess (Chess Knight + Racing & Cricket Star)
function SportsChessIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center p-2 shadow-sm shadow-amber-950/40">
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Chess Knight Silhouette */}
        <path
          d="M14 30H26M15 30V26C15 26 13 24 13 20C13 16 17 11 21 10C24 10 26 12 26 14C24 14 23 15 23 17C26 16.5 28 18 27 21C26.5 22.5 25 24 25 26V30"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#f59e0b"
          fillOpacity="0.2"
        />
        {/* Running / Motion speed lines */}
        <line x1="8" y1="16" x2="11" y2="16" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <line x1="6" y1="20" x2="10" y2="20" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        <line x1="7" y1="24" x2="11" y2="24" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        {/* Victory Star / Cricket Ball Accent */}
        <circle cx="27" cy="12" r="2" fill="#ef4444" />
      </svg>
    </div>
  );
}

export default function Education() {
  const getMicroIcon = (type) => {
    switch (type) {
      case 'team': return <TeamLeaderIcon />;
      case 'peer': return <PeerMentorIcon />;
      case 'sports': return <SportsChessIcon />;
      default: return <TeamLeaderIcon />;
    }
  };

  return (
    <section className="py-12 border-b border-zinc-800/80">
      
      {/* Education */}
      <div className="mb-12">
        <h2 className="text-xl font-bold tracking-tight text-white mb-6">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <TiltCard
              key={idx}
              className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                {edu.logo && (
                  <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-md border border-zinc-700/50">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-zinc-300 mt-0.5">
                    {edu.degree}
                  </p>
                  <span className="text-xs text-zinc-400 font-mono">
                    {edu.location}
                  </span>
                </div>
              </div>

              <div className="sm:text-right font-mono text-xs shrink-0 pl-16 sm:pl-0">
                <div className="text-zinc-400">{edu.period}</div>
                <div className="text-zinc-100 font-bold mt-0.5 text-sm">{edu.score}</div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Leadership & Extracurricular Activities */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">
              Leadership & Extracurriculars
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Team direction, peer mentorship, and competitive sports & chess.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {leadership.map((item, idx) => (
            <TiltCard
              key={idx}
              className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/90 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-md"
            >
              <div>
                {/* Header: Small Micro-Graphic on Left, Compact Tag on Right */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {getMicroIcon(item.type)}
                  <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 text-[11px] font-mono text-zinc-400 border border-zinc-800">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-2">
                  {item.role}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Certifications & Problem Solving Split */}
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
