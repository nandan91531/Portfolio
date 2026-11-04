import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Download, 
  FileText 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sentStatus, setSentStatus] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Compose mailto link
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSentStatus('Message prepared in your default email client!');
    setTimeout(() => setSentStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#060912]">
      {/* Decorative ambient elements */}
      <div className="glow-spot-cyan -bottom-20 -left-20 opacity-30"></div>
      <div className="glow-spot-purple -top-20 -right-20 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            I'm currently seeking AI, Backend, and Software Engineering internships and full-time opportunities. Feel free to reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 rounded-3xl p-8 bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you want to discuss AI pipelines, RAG implementations, or potential roles, my inbox is always open.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email item */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 block">EMAIL ADDRESS</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 block">PHONE / WHATSAPP</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-slate-200 hover:text-violet-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">LOCATION</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                Social Profiles & Repositories
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 text-xs font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 text-xs font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-7 rounded-3xl p-8 bg-slate-900/60 border border-white/10 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Drop a note below and it will immediately open a draft to my personal inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. AI / Backend Internship Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about the role, project, or collaboration..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                />
              </div>

              {sentStatus && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>{sentStatus}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
