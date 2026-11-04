import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-12 border-b border-zinc-800/80">
      <h2 className="text-xl font-bold tracking-tight text-white mb-2">
        Get In Touch
      </h2>
      <p className="text-zinc-400 text-sm mb-8 max-w-xl">
        I am currently open to AI, Backend, and Software Engineering internships and opportunities. Feel free to reach out directly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Contact Links */}
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase block">Email</span>
              <a href={`mailto:${personal.email}`} className="text-sm font-medium text-zinc-200 hover:text-white transition-colors">
                {personal.email}
              </a>
            </div>
            <button
              onClick={copyEmail}
              className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase block">Phone / WhatsApp</span>
              <a href={`tel:${personal.phone}`} className="text-sm font-medium text-zinc-200 hover:text-white transition-colors">
                {personal.phone}
              </a>
            </div>
            <button
              onClick={copyPhone}
              className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Simple Note Form */}
        <form onSubmit={handleSubmit} className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 space-y-3">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Alex"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Your Email</label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Message</label>
            <textarea
              required
              rows={3}
              placeholder="Quick note or opportunity details..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Email</span>
          </button>
        </form>

      </div>
    </section>
  );
}
