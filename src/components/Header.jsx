import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Copy, Check, FileText, MapPin, Sparkles, Code2, Bot, Layers } from 'lucide-react';
import { personal, stats } from '../data/portfolioData';
import nandanPhoto from '../assets/nandan.jpg';
import TiltCard from './TiltCard';

export default function Header({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="pt-20 pb-16 border-b border-zinc-800/80 relative">
      
      {/* Top Flex Container: Pitch on left, 3D Photo on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
        
        {/* Left Column: Personal Brand & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-zinc-300 text-xs font-mono mb-6 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to AI & Software Engineering Roles</span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            {personal.name}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 mb-4">
            {personal.title} <span className="text-zinc-600">—</span> {personal.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              {personal.location}
            </span>
            <span>•</span>
            <span className="text-zinc-300 font-medium">
              {personal.college} (CGPA {personal.cgpa})
            </span>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            {personal.summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenResume}
              className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-white/5 hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              <span>View Verified Resume</span>
            </button>

            <button
              onClick={copyEmail}
              className="px-4 py-2.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 text-xs font-mono border border-zinc-700/80 transition-colors flex items-center gap-2"
              title="Copy Email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{personal.email}</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-sky-400 border border-zinc-700/80 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Floating Photo with Orbital Depth Rings */}
        <div className="lg:col-span-5 flex justify-center">
          <TiltCard className="p-2 rounded-full">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              
              {/* Outer 3D Orbital Dashed Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-sky-500/30 animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-zinc-800/80" />
              <div className="absolute -inset-8 rounded-full border border-dashed border-indigo-500/20 animate-[spin_45s_linear_infinite_reverse]" />

              {/* Glowing ambient ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-transparent blur-md -z-10" />

              {/* Actual Profile Photo */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-tr from-zinc-700 via-zinc-500 to-zinc-800 shadow-2xl overflow-hidden group">
                <img
                  src={nandanPhoto}
                  alt="Nandan Sharma"
                  className="w-full h-full object-cover rounded-full filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating 3D Badge 1: Top Right */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-700/90 text-[11px] font-mono text-zinc-200 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                <Bot className="w-3.5 h-3.5 text-sky-400" />
                <span>RAG & LLMs</span>
              </div>

              {/* Floating 3D Badge 2: Bottom Left */}
              <div className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-700/90 text-[11px] font-mono text-zinc-200 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Python & FastAPI</span>
              </div>

            </div>
          </TiltCard>
        </div>

      </div>

      {/* Quick Stats Grid with 3D depth cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-800/80">
        {stats.map((s, idx) => (
          <TiltCard
            key={idx}
            className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/90 backdrop-blur-sm"
          >
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mb-0.5">
              {s.value}
            </div>
            <div className="text-xs font-medium text-zinc-400">{s.label}</div>
          </TiltCard>
        ))}
      </div>

    </header>
  );
}
