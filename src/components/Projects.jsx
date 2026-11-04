import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Play, 
  X,
  FileCode,
  ShieldAlert,
  HelpCircle,
  Database,
  BarChart3,
  Bot
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [filterTag, setFilterTag] = useState('All');

  const tags = ['All', 'AI & GenAI', 'Backend & Automation', 'RAG & LLMs'];

  const filterMapping = (proj, tag) => {
    if (tag === 'All') return true;
    if (tag === 'AI & GenAI') return proj.tech.includes('Ollama') || proj.tech.includes('LangChain') || proj.tech.includes('OpenAI Whisper');
    if (tag === 'Backend & Automation') return proj.tech.includes('FastAPI') || proj.tech.includes('Flask') || proj.tech.includes('Automation');
    if (tag === 'RAG & LLMs') return proj.tech.includes('ChromaDB') || proj.tech.includes('Ollama') || proj.tech.includes('Mistral AI');
    return true;
  };

  const filteredProjects = projects.filter(p => filterMapping(p, filterTag));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#070b14]">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production & AI Systems
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Practical applications built with rigorous testing, generative intelligence, and high-performance backend pipelines.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  filterTag === tag
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl p-7 bg-gradient-to-b from-slate-900/70 to-[#0c1220]/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all"></div>

              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mb-4">
                  {project.subtitle}
                </p>

                {/* Tagline / Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {project.tagline}
                </p>

                {/* Highlights list */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950/80 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-semibold border border-white/10 transition-all flex items-center gap-1.5"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 hover:border-cyan-500/30 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Architecture Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b101e] border border-white/10 p-6 sm:p-8 shadow-2xl text-left">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {activeProjectModal.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {activeProjectModal.year}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {activeProjectModal.title}
            </h3>
            <p className="text-sm font-mono text-cyan-400 mb-6">
              {activeProjectModal.subtitle}
            </p>

            {/* Deep Description */}
            <div className="mb-6 p-4 rounded-2xl bg-slate-900/60 border border-white/5 text-slate-300 text-sm leading-relaxed">
              {activeProjectModal.summary}
            </div>

            {/* Key Engineering Innovations */}
            <div className="mb-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-mono mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Key Engineering Innovations
              </h4>
              <div className="space-y-2.5">
                {activeProjectModal.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Simulation / Tech Preview */}
            {activeProjectModal.interactiveDemo && (
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-mono mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-violet-400" />
                  Live Workflow Simulation
                </h4>
                
                {activeProjectModal.interactiveDemo.type === 'terminal' && (
                  <div className="rounded-xl bg-[#060911] border border-white/10 p-4 font-mono text-xs text-slate-300">
                    <div className="text-cyan-400 mb-2">
                      $ {activeProjectModal.interactiveDemo.sampleInput}
                    </div>
                    <pre className="text-slate-400 whitespace-pre-wrap leading-relaxed">
                      {activeProjectModal.interactiveDemo.sampleOutput}
                    </pre>
                  </div>
                )}

                {activeProjectModal.interactiveDemo.type === 'rag-preview' && (
                  <div className="rounded-xl bg-[#060911] border border-white/10 p-4 text-xs font-mono space-y-3">
                    <div>
                      <span className="text-slate-500 font-bold block mb-1">USER QUERY:</span>
                      <span className="text-cyan-300 bg-slate-900 px-3 py-1.5 rounded-lg block border border-cyan-500/20">
                        {activeProjectModal.interactiveDemo.sampleQuery}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-bold block mb-1">MISTRAL AI + CHROMADB CONTEXT ANSWER:</span>
                      <span className="text-emerald-300 bg-emerald-950/30 px-3 py-2 rounded-lg block border border-emerald-500/20">
                        {activeProjectModal.interactiveDemo.sampleAnswer}
                      </span>
                    </div>
                  </div>
                )}

                {activeProjectModal.interactiveDemo.type === 'stats-preview' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeProjectModal.interactiveDemo.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-center">
                        <div className="text-xs text-slate-400 mb-1">{m.label}</div>
                        <div className="text-xs font-bold font-mono text-cyan-400">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Modal Tech Stack Footer */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeProjectModal.tech.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={activeProjectModal.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
