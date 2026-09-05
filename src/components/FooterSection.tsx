import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Sparkles, Github, Linkedin, MapPin, GraduationCap } from 'lucide-react';
import ContactButton from './ContactButton';

export const FooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'vadlavishal@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-white/10 pt-20 sm:pt-28 pb-12 px-6 sm:px-10 md:px-16 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col justify-between">
        {/* Top CTA Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 sm:mb-24">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/80 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to AI/ML Roles & Collaborations
            </div>
            <h2
              className="hero-heading font-black uppercase leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Let&apos;s Build Intelligent Systems
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-light text-[#D7E2EA]/70 leading-relaxed italic mb-2">
              &ldquo;Learning, building, and improving—one commit at a time.&rdquo;
            </p>
            <p className="text-sm sm:text-base font-light text-[#D7E2EA]/60 leading-relaxed">
              Interested in discussing Machine Learning models, Deep Learning architectures, RAG systems, or Generative AI projects? Connect with me.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <button
              onClick={copyToClipboard}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-white/40 text-sm font-medium uppercase tracking-wider transition-colors duration-200 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
            </button>
            <a href="https://www.linkedin.com/in/vishal-vishu-69b67a355/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <ContactButton label="Connect on LinkedIn" />
            </a>
          </div>
        </div>

        {/* GitHub Stats Cards Embed */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-6">
            <Github className="w-5 h-5 text-purple-400" />
            <h3 className="text-base sm:text-lg font-medium uppercase tracking-wider text-[#D7E2EA]">
              GitHub Activity & Statistics
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center bg-black/40 p-4 rounded-2xl border border-white/5 overflow-hidden">
              <img
                src="https://github-readme-stats.vercel.app/api?username=VADLAVISHAL&show_icons=true&theme=default&hide_border=true"
                alt="Vishal's GitHub Stats"
                className="max-w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center bg-black/40 p-4 rounded-2xl border border-white/5 overflow-hidden">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=VADLAVISHAL&layout=compact&theme=default&hide_border=true"
                alt="Top Languages"
                className="max-w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Links & Details Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/10 text-sm sm:text-base">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 block mb-3 font-semibold">
              Navigation
            </span>
            <ul className="space-y-2">
              {['About', 'Services', 'Projects'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {item === 'Services' ? 'Skills & Services' : item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 block mb-3 font-semibold">
              Connect
            </span>
            <ul className="space-y-2">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vishal-vishu-69b67a355/', icon: Linkedin },
                { name: 'GitHub', url: 'https://github.com/VADLAVISHAL', icon: Github },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <social.icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    {social.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 block mb-3 font-semibold">
              Education & Base
            </span>
            <div className="space-y-2 text-xs sm:text-sm font-light text-[#D7E2EA]/80 leading-relaxed">
              <p className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Anurag College of Engg. (B.Tech 3rd Year)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 block mb-3 font-semibold">
              Back to Top
            </span>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-white flex items-center justify-center transition-colors cursor-pointer group"
              title="Scroll to top"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform text-[#D7E2EA]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs sm:text-sm text-[#D7E2EA]/50">
          <p>© {new Date().getFullYear()} Vadla Vishal. All rights reserved. AI & ML Engineer.</p>
          <p className="mt-2 sm:mt-0 font-light">Built with React, Framer Motion & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
