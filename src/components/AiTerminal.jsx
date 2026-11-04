import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { personalInfo, projects, stats } from '../data/portfolioData';

export default function AiTerminal() {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "⚡ Welcome to Nandan's Interactive AI Terminal v2.5\nType 'help' to see available commands or click quick-run chips below."
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  const commandChips = ['help', 'whoami', 'skills', 'projects', 'rag-demo', 'contact', 'clear'];

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'user', text: cmdText }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • whoami     - Overview of Nandan Sharma & current studies
  • skills     - Technical competencies & framework strengths
  • projects   - Production projects (Regression Guard, Lectura AI, etc.)
  • rag-demo   - Simulate ChromaDB vector search & Mistral generation
  • contact    - Email, LinkedIn, GitHub, and phone numbers
  • clear      - Clear terminal screen`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `[PROFILE]
Name: ${personalInfo.name}
Role: ${personalInfo.role}
Education: B.E. in Electronics & Communication Engineering
Institution: ${personalInfo.college} (2023 - 2027) | CGPA: ${personalInfo.cgpa}
Location: ${personalInfo.location}
Status: Open for AI & Backend Engineering Roles`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[CORE STACK]
Languages : Python (Expert), C++, SQL, JavaScript
AI & LLMs : RAG, Ollama, OpenAI Whisper, LangChain, Hugging Face, ChromaDB
Backend   : FastAPI, Flask, REST APIs, Thread Pools, Web Scraping
Foundations: Data Structures & Algorithms (170+ LeetCode, 180+ takeUforward), DBMS, OOP`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `[PROJECT HIGHLIGHTS]
1. Regression Guard (2026-Present):
   AI-Assisted Regression Test Generator using local Ollama LLMs & AST validation.
2. Lectura AI (2026):
   YouTube lecture transcription (Whisper) + RAG Q&A (ChromaDB + Mistral AI).
3. Academic Result Automation (2025):
   Multi-threaded Flask scraper with OpenCV/Tesseract CAPTCHA bypass + Power BI.`
        });
        break;

      case 'rag-demo':
        newHistory.push({
          type: 'output',
          text: `[VECTOR SEARCH SIMULATION]
Query: "How does Regression Guard prevent test data leakage?"
ChromaDB Cosine Similarity: 0.941
Retrieved Chunk: "Masked expected values in pytest failure logs before prompting..."
LLM Output (Mistral-7B): Regression Guard systematically scrubs literal output values from pytest tracebacks so the synthesized prompt contains only structure and behavior, ensuring pure generative verification.`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `[CONTACT INFO]
Email    : ${personalInfo.email}
Phone    : ${personalInfo.phone}
LinkedIn : ${personalInfo.linkedin}
GitHub   : ${personalInfo.github}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `bash: command not found: "${trimmed}". Type 'help' to inspect valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  return (
    <section id="terminal" className="py-20 relative overflow-hidden bg-[#060a12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Developer Sandbox</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Interactive AI Terminal
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-xl">
            Test the command interface directly to inspect background, query projects, or simulate RAG retrieval.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" /> Quick run:
          </span>
          {commandChips.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-mono text-xs border border-white/5 transition-all"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-[#090d18] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0c1220] border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 text-xs text-slate-400">nandan@ai-engine: ~</span>
            </div>
            <button
              onClick={() => executeCommand('clear')}
              className="text-slate-500 hover:text-slate-300 text-xs flex items-center gap-1 transition-colors"
              title="Clear terminal"
            >
              <RefreshCw className="w-3 h-3" />
              <span>clear</span>
            </button>
          </div>

          {/* Terminal Screen */}
          <div className="p-5 h-80 overflow-y-auto space-y-3 bg-[#060913]/90">
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'user' && (
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="text-emerald-400 font-bold">visitor@portfolio:~$</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'system' && (
                  <pre className="text-slate-400 whitespace-pre-wrap leading-relaxed font-mono">
                    {item.text}
                  </pre>
                )}
                {item.type === 'output' && (
                  <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-cyan-500/40 font-mono">
                    {item.text}
                  </pre>
                )}
                {item.type === 'error' && (
                  <div className="text-rose-400 pl-2 border-l-2 border-rose-500/40">
                    {item.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0f1d] border-t border-white/5">
            <span className="text-emerald-400 font-bold shrink-0">visitor@portfolio:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'skills', 'projects'..."
              className="w-full bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none text-xs sm:text-sm font-mono"
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

