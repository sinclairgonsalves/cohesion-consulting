import React from 'react';
import { BadgeCheck, Search, TrendingUp, Star, PhoneCall, ArrowUpRight } from 'lucide-react';

interface AdvertisingServicesSectionProps {
  onOpenContact: (serviceName?: string) => void;
}

const SERVICES = [
  {
    icon: BadgeCheck,
    title: 'Local Services Ads (LSA)',
    service: 'Google Local Services Ads (LSA)',
    description:
      'Get your business into the Google Guaranteed listings at the top of local searches — where homeowners call first. We handle setup, verification, profile, and budget.',
  },
  {
    icon: Search,
    title: 'Google Ads Search Campaigns',
    service: 'Google Ads Management',
    description:
      'Search campaigns built around the jobs you actually want — furnace installs, AC repair, emergency calls — with tight geo-targeting and negative keywords that cut waste.',
  },
  {
    icon: TrendingUp,
    title: 'LSA Ranking & Profile Optimisation',
    service: 'Google Local Services Ads (LSA)',
    description:
      'Ranking in LSA is won on reviews, responsiveness, and profile strength. We work the levers that move you up the list and keep you there.',
  },
  {
    icon: Star,
    title: 'Reviews & Reputation',
    service: 'Google Ads + LSA (Combined)',
    description:
      'A steady flow of genuine Google reviews from real jobs — requested at the right moment, tracked, and answered. Reviews are the fuel for both LSA rank and close rates.',
  },
  {
    icon: PhoneCall,
    title: 'Call Tracking & Lead Reporting',
    service: 'Google Ads + LSA (Combined)',
    description:
      'Every call and lead tracked back to the ad that produced it. A simple weekly report: what you spent, what rang, and what booked. No black box.',
  },
];

export const AdvertisingServicesSection: React.FC<AdvertisingServicesSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="ad-services" className="py-20 md:py-28 bg-[#09090b] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono mb-3">
            <span>Advertising Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight">
            Built for local service businesses that live or die by the phone
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed font-sans mt-4">
            No vanity metrics. Every service below is judged on one thing: qualified calls
            and booked jobs in your service area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#141416] to-[#0e0e10] border border-white/10 hover:border-white/25 transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans flex-1">{s.description}</p>
                <button
                  onClick={() => onOpenContact(s.service)}
                  className="mt-5 text-xs font-semibold text-white hover:text-zinc-300 transition-colors flex items-center gap-1 cursor-pointer self-start"
                >
                  <span>Enquire about this service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}

          {/* CTA card fills the sixth slot */}
          <div className="p-6 rounded-2xl bg-white text-black flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold font-display mb-2">Not sure where to start?</h3>
              <p className="text-sm text-zinc-700 leading-relaxed font-sans">
                Book a free audit. We look at your current ads, your LSA profile, and your
                reviews — and tell you plainly what is working and what is wasting money.
              </p>
            </div>
            <button
              onClick={() => onOpenContact('Advertising Audit / Other')}
              className="mt-5 px-5 py-3 text-xs font-semibold text-white bg-black hover:bg-zinc-800 rounded-xl transition-all cursor-pointer self-start"
            >
              Book a Free Ads Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
