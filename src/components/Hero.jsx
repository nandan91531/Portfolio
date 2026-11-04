import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  Play, 
  Cpu, 
  Bot, 
  Layers, 
  Code2, 
  ExternalLink,
  Download
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simOutput, setSimOutput] = useState([
    "// Initialized Ollama client with model: qwen2.5-coder",
    "// Ready to analyze git diffs & synthesize regression tests..."
  ]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const runSimulation = () => {
    setIsRunningSim(true);
    setSimOutput([
      "[1/4] Fetching commit diff between HEAD~1 and HEAD...",
      "[2/4] Parsing AST changes: Bug detected in format_number()",
      "[3/4] Prompting Ollama with masked pytest failure logs...",
      "[4/4] SUCCESS: Generated test_regression_mask.py (verified fails on bug, passes on fix)"
    ]);
    setTimeout(() => {
      setIsRunningSim(false);
    }, 1200);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient gradient glow spots */}
      <div className="glow-spot-cyan top-10 -left-40 opacity-40"></div>
      <div className="glow-spot-purple top-32 -right-40 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Pitch & Profile */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md shadow-sm shadow-cyan-900/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to AI & Backend Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                {personalInfo.name}
              </span>
              <br />
              <span className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-bold">
                AI & Backend Engineer
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              Undergraduate at <span className="text-cyan-300 font-medium">{personalInfo.college}</span> with practical expertise building{' '}
              <span className="text-white font-medium">autonomous AI pipelines</span>,{' '}
              <span className="text-white font-medium">RAG systems</span>, and{' '}
              <span className="text-white font-medium">high-performance backend services</span> using Python, FastAPI, and local LLMs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 hover:border-slate-500 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#terminal"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-600 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4 text-violet-400" />
                <span>Interactive Terminal</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white text-sm border border-white/10 transition-all flex items-center justify-center gap-2"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono text-xs">Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-mono">{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <div className="h-4 w-px bg-slate-800"></div>
              <span className="text-xs font-mono text-slate-400">
                📍 {personalInfo.location}
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/30 via-violet-500/20 to-transparent shadow-2xl shadow-cyan-950/40">
              <div className="rounded-2xl bg-[#0b101d] overflow-hidden border border-white/10">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#080d18] border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      regression_guard.py
                    </span>
                  </div>

                  <button
                    onClick={runSimulation}
                    disabled={isRunningSim}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-mono text-[11px] transition-colors"
                  >
                    <Play className={`w-3 h-3 ${isRunningSim ? 'animate-spin' : ''}`} />
                    <span>{isRunningSim ? 'Executing...' : 'Run Simulation'}</span>
                  </button>
                </div>

                {/* Code Window Body */}
                <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-[#070b14]/90 space-y-1">
                  <div><span className="text-purple-400">from</span> <span className="text-sky-300">ollama</span> <span className="text-purple-400">import</span> Client</div>
                  <div><span className="text-purple-400">from</span> <span className="text-sky-300">guard</span> <span className="text-purple-400">import</span> GitDiffAnalyzer, PytestMasker</div>
                  <div className="text-slate-600">// AI-Assisted Regression Test Generation</div>
                  <div>
                    <span className="text-blue-400">async def</span> <span className="text-yellow-300">synthesize_regression_test</span>(repo, commit_hash):
                  </div>
                  <div className="pl-4">
                    diff = <span className="text-sky-300">GitDiffAnalyzer</span>.extract_patch(commit_hash)
                  </div>
                  <div className="pl-4">
                    masked_trace = <span className="text-sky-300">PytestMasker</span>.scrub_expected_values(diff)
                  </div>
                  <div className="pl-4">
                    prompt = <span className="text-emerald-400">f"Generate pytest failing on buggy AST, passing on fixed."</span>
                  </div>
                  <div className="pl-4">
                    test_suite = <span className="text-purple-400">await</span> ollama.chat(model=<span className="text-emerald-400">"qwen2.5-coder"</span>, prompt=prompt)
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> validate_dual_state(test_suite, repo)
                  </div>
                </div>

                {/* Live Console Output Box */}
                <div className="bg-[#05080f] p-3 border-t border-white/5 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-slate-500 mb-1.5 pb-1 border-b border-white/5">
                    <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-cyan-400">
                      <Terminal className="w-3 h-3" /> Console Output
                    </span>
                    <span className="text-[10px] text-slate-500">Ollama v0.5.4 Local</span>
                  </div>
                  <div className="space-y-1 text-slate-300">
                    {simOutput.map((line, idx) => (
                      <div 
                        key={idx} 
                        className={
                          line.startsWith('[4/4]') ? 'text-emerald-400 font-semibold' :
                          line.startsWith('[') ? 'text-cyan-300' : 'text-slate-500'
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Quick feature tags below card */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
                <span className="block text-cyan-400 font-bold text-xs font-mono">Zero Leakage</span>
                <span className="text-[11px] text-slate-400">Masked Pytest Logs</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
                <span className="block text-violet-400 font-bold text-xs font-mono">100% Offline</span>
                <span className="text-[11px] text-slate-400">Local Ollama LLMs</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
                <span className="block text-emerald-400 font-bold text-xs font-mono">Dual Validation</span>
                <span className="text-[11px] text-slate-400">Buggy vs Fixed State</span>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-slate-900/30 border border-white/5 hover:border-cyan-500/20 transition-all">
              <div className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 font-mono mb-1">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-slate-200">{item.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{item.highlight}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
