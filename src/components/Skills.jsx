import React, { useState } from 'react';
import { 
  Brain, 
  Server, 
  Code, 
  Database, 
  Cpu, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles,
  Search
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    Brain: Brain,
    Server: Server,
    Code: Code,
    Database: Database,
    Cpu: Cpu,
    GraduationCap: GraduationCap,
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeCategory !== 'All' && cat.title !== activeCategory) {
      return false;
    }
    if (searchQuery.trim() === '') return true;
    
    // Check if category title or any skill matches query
    const matchCat = cat.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchSkill = cat.skills.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat || matchSkill;
  });

  const allCategoryTitles = ['All', ...skillCategories.map(c => c.title)];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080d18]">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-500/5 via-violet-500/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of the languages, frameworks, AI architectures, and infrastructure I leverage in production.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {allCategoryTitles.map((title) => (
              <button
                key={title}
                onClick={() => setActiveCategory(title)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === title
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-white/5'
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skill (e.g. RAG, FastAPI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-white/10 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Code;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-700 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => {
                      const isHighlighted = searchQuery && skill.name.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <div
                          key={sIdx}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center justify-between gap-2 border transition-all ${
                            isHighlighted
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold'
                              : 'bg-slate-950/60 text-slate-300 border-white/5 hover:border-slate-700 hover:text-white'
                          }`}
                        >
                          <span>{skill.name}</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 uppercase font-sans">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Production & Academic Ready</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Tech Highlights Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0b1324] to-slate-900/90 border border-white/10 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-cyan-400 font-mono font-bold text-lg">Python & C++</div>
            <div className="text-xs text-slate-400">Core Languages & DSA</div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10"></div>
          <div>
            <div className="text-violet-400 font-mono font-bold text-lg">FastAPI & Flask</div>
            <div className="text-xs text-slate-400">REST & Thread-Pooled Services</div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10"></div>
          <div>
            <div className="text-sky-400 font-mono font-bold text-lg">Ollama & Mistral AI</div>
            <div className="text-xs text-slate-400">Local & Cloud LLMs</div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10"></div>
          <div>
            <div className="text-emerald-400 font-mono font-bold text-lg">ChromaDB & Whisper</div>
            <div className="text-xs text-slate-400">Vector Search & Audio Transcripts</div>
          </div>
        </div>

      </div>
    </section>
  );
}
