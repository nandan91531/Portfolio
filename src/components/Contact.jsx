import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight, ExternalLink, Loader2, Sparkles } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

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

  const openGmailCompose = () => {
    const subject = encodeURIComponent(form.name ? `Portfolio Message from ${form.name}` : 'Portfolio Inquiry');
    const body = encodeURIComponent(
      form.message
        ? `From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`
        : `Hi Nandan,\n\nI saw your portfolio and would like to connect regarding...`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${subject}&body=${body}`,
      '_blank'
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus({ state: 'sending', msg: 'Sending message...' });

    try {
      // 1. Submit directly to inbox via free Formsubmit endpoint
      const res = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Message from ${form.name}`
        })
      });

      if (res.ok) {
        setStatus({
          state: 'success',
          msg: '✓ Message sent successfully! I will get back to you shortly.'
        });
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Service fallback');
      }
    } catch (err) {
      // 2. Reliable Fallback: Open Gmail Web Compose tab directly in browser
      openGmailCompose();
      setStatus({
        state: 'success',
        msg: '✓ Opened Gmail Web Compose tab with your message pre-filled!'
      });
    }
  };

  const copyFormattedMessage = () => {
    if (!form.name && !form.message) return;
    const text = `From: ${form.name} (${form.email})\nMessage: ${form.message}`;
    navigator.clipboard.writeText(text);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2000);
  };

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
        I am actively seeking AI, Backend, and Software Engineering internships and full-time opportunities. Reach out via email, phone, or send a note below.
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
              <button
                onClick={openGmailCompose}
                className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-sky-400 transition-colors"
                title="Open directly in Gmail Web"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
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

          {/* Quick Direct Compose Helper */}
          <div className="p-3.5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 text-xs text-zinc-400 flex items-center justify-between">
            <span>Prefer Gmail directly?</span>
            <button
              onClick={openGmailCompose}
              className="px-2.5 py-1 rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 font-mono text-xs border border-sky-500/30 transition-colors flex items-center gap-1"
            >
              <span>Open in Gmail</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 space-y-4 shadow-xl">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Your Name *</label>
            <input
              type="text"
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
              required
              rows={4}
              placeholder="Tell me about the role, project, or collaboration..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
            />
          </div>

          {/* Status Message */}
          {status.state === 'success' && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>{status.msg}</span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <button
              type="submit"
              disabled={status.state === 'sending'}
              className="flex-1 py-3 px-4 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01] disabled:opacity-50"
            >
              {status.state === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={openGmailCompose}
              className="py-3 px-3.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 text-xs font-medium border border-zinc-700/80 transition-colors flex items-center justify-center gap-1.5"
              title="Open message directly in Gmail web compose"
            >
              <span>Gmail Web</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
