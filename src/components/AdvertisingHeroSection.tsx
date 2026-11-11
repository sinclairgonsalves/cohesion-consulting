import React from 'react';
import { Megaphone, PhoneCall, BadgeCheck, ArrowRight } from 'lucide-react';

interface AdvertisingHeroSectionProps {
  onOpenContact: (serviceName?: string) => void;
}

export const AdvertisingHeroSection: React.FC<AdvertisingHeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-[#09090b] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-wider text-zinc-300">
            <Megaphone className="w-3.5 h-3.5 text-white" />
            <span>Google Ads &amp; Local Services Ads</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display tracking-tight leading-[1.05]">
            More calls. More booked jobs. Less wasted ad spend.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans max-w-2xl">
            Cohesion Consulting runs Google Ads and Local Services Ads for HVAC, plumbing,
            electrical, and other home-service companies across Canada and the United States —
            so the phone rings with real customers in your service area, not tyre-kickers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => onOpenContact('Advertising Audit / Other')}
              className="px-6 py-3.5 text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Free Ads Audit</span>
            </button>
            <a
              href="#ad-services"
              className="px-6 py-3.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>See Advertising Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 text-[11px] font-mono text-zinc-400">
            <span className="px-3 py-1.5 rounded-full bg-black/60 border border-white/10 flex items-center gap-1.5">
              <BadgeCheck className="w-3.5 h-3.5 text-white" />
              Google Guaranteed / LSA
            </span>
            <span className="px-3 py-1.5 rounded-full bg-black/60 border border-white/10">Pay per lead on LSA</span>
            <span className="px-3 py-1.5 rounded-full bg-black/60 border border-white/10">Canada &amp; United States</span>
            <span className="px-3 py-1.5 rounded-full bg-black/60 border border-white/10">Weekly reporting</span>
          </div>
        </div>
      </div>
    </section>
  );
};
