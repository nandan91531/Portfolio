import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  CheckCircle2, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Star,
  Target,
  Database
} from 'lucide-react';
import { education, certifications, achievements } from '../data/portfolioData';

export default function EducationCertifications() {
  const achievementIcons = {
    Trophy: Trophy,
    Target: Target,
    Database: Database
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#070b14]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-violet-400" />
            <span>Academic Rigor & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Certifications & Milestones
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            A solid academic foundation reinforced by competitive programming rigor and industry-recognized certifications.
          </p>
        </div>

        {/* Top Split: Education & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Education Card */}
          <div className="lg:col-span-6 rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 via-[#0e1526]/70 to-slate-900/90 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-bold">
                  {education[0].score}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {education[0].institution}
              </h3>
              <p className="text-cyan-400 font-mono text-sm mb-4">
                {education[0].degree}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  {education[0].period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  {education[0].location}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {education[0].description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Consistently top tier academic performance with 8.25 CGPA</span>
            </div>
          </div>

          {/* Achievements / DSA Rigor Card */}
          <div className="lg:col-span-6 rounded-3xl p-8 bg-gradient-to-br from-slate-900/80 via-[#0e1526]/70 to-slate-900/90 border border-white/10 hover:border-violet-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 font-mono text-xs font-bold">
                  400+ Total Problems Solved
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Problem Solving & DSA Milestones
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Dedicated practice on optimal algorithmic time & space complexities.
              </p>

              <div className="space-y-4">
                {achievements.map((item, idx) => {
                  const Icon = achievementIcons[item.icon] || Trophy;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>LeetCode & TakeUForward Verified</span>
              <span className="text-cyan-400 font-bold">Striver's SDE Sheet Ready</span>
            </div>
          </div>

        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            Industry Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      {cert.issuer}
                    </span>
                  </div>

                  <h4 className="font-bold text-white text-sm mb-2 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Verified Credential</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
