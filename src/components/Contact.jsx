import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight, ExternalLink } from 'lucide-react';
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

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent(form.name ? `Portfolio Message from ${form.name}` : 'Portfolio Inquiry')}&body=${encodeURIComponent(form.message ? `From: ${form.name} (${form.email})\n\nMessage:\n${form.message}` : 'Hi Nandan,\n\nI saw your portfolio and would like to connect.')}`;

  return (
    <section className="py-14 border-b border-zinc-800/80">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Get In Touch
        </h2>
        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Inbox Monitored
        </span>
      </div>
      <p className="text-zinc-400 text-sm mb-8 max-w-xl">
        I am actively seeking AI, Backend, and Software Engineering internships and full-time opportunities. Reach out via email, phone, or submit the form below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Contact Links */}
        <div className="space-y-3.5">
          {/* Email card */}
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/90 flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Email Address</span>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors"
              >
                {personal.email}
              </a>
            </div>
            <div className="flex items-center gap-1">
              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-sky-400 transition-colors"
                title="Open directly in Gmail Web"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Phone card */}
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/90 flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Phone / WhatsApp</span>
              <a
                href={`tel:${personal.phone}`}
                className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors"
              >
                {personal.phone}
              </a>
            </div>
            <button
              onClick={copyPhone}
              className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 pt-1">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/90 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/90 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>

          {/* Direct 1-Click Gmail Button */}
          <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/20 text-xs flex items-center justify-between">
            <div>
              <span className="text-zinc-200 font-semibold block">Open in Gmail Web</span>
              <span className="text-zinc-400 text-[11px]">Compose directly to {personal.email}</span>
            </div>
            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 font-medium text-xs border border-sky-500/30 transition-colors flex items-center gap-1.5"
            >
              <span>Launch</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Direct Email Submission Form */}
        <form
          action={`https://formsubmit.co/${personal.email}`}
          method="POST"
          className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 space-y-4 shadow-xl"
        >
          {/* Formsubmit hidden settings */}
          <input type="hidden" name="_subject" value={`New Portfolio Message from ${form.name || 'Visitor'}`} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Your Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Alex"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Your Email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="alex@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Message *</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about the role, project, or collaboration..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>

            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noreferrer"
              className="py-3 px-4 rounded-lg bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700/80 transition-colors flex items-center justify-center gap-1.5"
              title="Open your pre-filled message directly in Gmail web compose"
            >
              <span>Gmail Web</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </form>

      </div>
    </section>
  );
}
