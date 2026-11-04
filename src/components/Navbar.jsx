import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#080c14]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-violet-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#080c14] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 text-base">
                  NS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors text-base flex items-center gap-1.5">
                Nandan Sharma
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">AI & Backend Engineer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-br from-cyan-500 to-violet-600 group-hover:from-cyan-500 group-hover:to-violet-600 hover:text-white text-white shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0a0f1d] rounded-full group-hover:bg-opacity-0 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white" />
                Let's Connect
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#0d1424] border border-white/10 shadow-2xl backdrop-blur-xl animate-fadeIn">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 flex flex-col gap-2 mt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-800 text-slate-200 font-medium text-sm text-center flex items-center justify-center gap-2 border border-white/5"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>View / Print Resume</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium text-sm text-center shadow-lg shadow-cyan-500/20"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
