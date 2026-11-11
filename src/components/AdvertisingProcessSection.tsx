import React from 'react';

const STEPS = [
  {
    step: '01',
    title: 'Free Audit',
    description:
      'We review your current ads, LSA profile, reviews, and tracking — and tell you plainly what is working and what is wasting money.',
  },
  {
    step: '02',
    title: 'Setup & Launch',
    description:
      'LSA verification and profile, Google Ads campaigns, call tracking, and conversion tracking — set up properly before a dollar is spent.',
  },
  {
    step: '03',
    title: 'Optimise Weekly',
    description:
      'Bids, keywords, budgets, and review requests adjusted every week based on which calls actually turned into booked jobs.',
  },
  {
    step: '04',
    title: 'Report & Scale',
    description:
      'A simple weekly report: spend, calls, leads, and bookings. When something works, we put more behind it. When it does not, we cut it.',
  },
];

export const AdvertisingProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#09090b] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono mb-3">
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight">
            Four steps. No long contracts, no black box.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#141416] to-[#0e0e10] border border-white/10"
            >
              <span className="text-2xl font-bold text-white/25 font-display block mb-3">{s.step}</span>
              <h3 className="text-lg font-bold text-white font-display mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
