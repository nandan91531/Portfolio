import React from 'react';
import { 
  Bot, 
  Server, 
  Terminal, 
  Award, 
  GraduationCap, 
  BrainCircuit, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: BrainCircuit,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
      title: "Generative AI & RAG Engineering",
      desc: "Architecting end-to-end RAG pipelines using ChromaDB vector stores, Hugging Face embeddings, and local/hosted LLMs (Ollama, Mistral) with constrained prompt validation."
    },
    {
      icon: Server,
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
      title: "Scalable Backends & APIs",
      desc: "Developing asynchronous RESTful microservices with FastAPI and Flask, incorporating multi-threading worker pools, chunked audio stream handling, and robust schemas."
    },
    {
      icon: Terminal,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
      title: "Algorithmic Foundations (DSA)",
      desc: "170+ problems solved on LeetCode and 180+ on takeUforward (Striver's SDE Sheet), paired with deep mastery of relational data modeling and LeetCode SQL 50."
    },
    {
      icon: Zap,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
      title: "Automation & Computer Vision",
      desc: "Constructing end-to-end automated scrapers, adaptive OpenCV image pipelines, and Tesseract OCR modules for challenging CAPTCHA resolution and data structuring."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070b14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Profile & Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering at the Intersection of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              AI & Systems
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Electronics & Communication Engineering undergraduate from Bangalore Institute of Technology, building resilient software and practical LLM applications.
          </p>
        </div>

        {/* Narrative & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-5 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                Academic & Practical Background
              </h3>
              <p>
                Currently pursuing a Bachelor of Engineering in Electronics & Communication at <span className="text-cyan-300 font-medium">{personalInfo.college}</span> with an outstanding <span className="text-white font-semibold">8.25 / 10 CGPA</span>. My dual background in hardware-level thinking and modern software engineering enables me to appreciate both compute constraints and scalable application architectures.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Bot className="w-5 h-5 text-violet-400" />
                Applied AI That Solves Developer Problems
              </h3>
              <p>
                Rather than treating AI as a black box, I build solutions that solve concrete engineering workflows—like <span className="text-cyan-300 font-medium">Regression Guard</span>, which autonomously synthesizes tests from Git diffs using local Ollama LLMs with masked pytest traces to prevent answer leakage, or <span className="text-violet-300 font-medium">Lectura AI</span>, turning multi-hour lectures into structured, searchable RAG knowledge hubs.
              </p>
            </div>
          </div>

          {/* Key Metric Highlights */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4 border transition-colors group-hover:scale-105`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h4 className="text-white font-semibold text-base mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
