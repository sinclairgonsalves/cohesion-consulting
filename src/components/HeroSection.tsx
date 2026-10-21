import React from 'react';
import { Mail, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#09090b]">
      {/* Subtle monochrome ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[320px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Minimal pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-medium text-zinc-300 mb-6 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>Cohesion Consulting · Dedicated Talent & Workflow Embedding</span>
        </div>

        {/* Primary Display Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
          Our Agents Embedded Into Your Teams and Workflow.
        </h1>

        {/* Subheading / Tagline */}
        <p className="text-lg sm:text-xl text-zinc-200 font-normal leading-relaxed mb-4 max-w-3xl mx-auto font-sans">
          <span className="text-white font-medium italic">"Giving a team member feeling working towards your goal."</span>
        </p>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto font-sans">
          We embed dedicated customer support reps, outbound sales specialists, and account managers directly into your Slack, CRM, and day-to-day operations. Built on pragmatic efficiency: <span className="text-white font-medium">not fixing what isn't broken</span>.
        </p>

        {/* Action Buttons (High-Contrast Black & White) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenContact}
            className="px-7 py-3.5 text-xs sm:text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl shadow-lg shadow-white/5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-black" />
            <span>Contact Us to Discuss Your Team</span>
          </button>

          <a
            href="#services"
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all flex items-center gap-2"
          >
            <span>Explore Services Offered</span>
            <ArrowDown className="w-4 h-4 text-zinc-400" />
          </a>
        </div>

        {/* Minimalist Trust & USP Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Response SLA</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-white block">&lt; 15 min</span>
            <span className="text-xs text-zinc-400 block mt-0.5">Guaranteed client communication speed</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Integration</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-white block">100% Native</span>
            <span className="text-xs text-zinc-400 block mt-0.5">Works in your Slack, HubSpot, CRM</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Turnaround</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-white block">14 Days</span>
            <span className="text-xs text-zinc-400 block mt-0.5">Rapid vetting to active embedding</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Protection</span>
            <span className="text-xl sm:text-2xl font-bold font-display text-white block">100% IP</span>
            <span className="text-xs text-zinc-400 block mt-0.5">Full work-for-hire assignment & NDA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
