import React from 'react';

const FAQS = [
  {
    q: 'What is the difference between Local Services Ads and Google Ads?',
    a: 'Local Services Ads (LSA) put your business in the Google Guaranteed listings at the very top of local searches, and you pay per lead — a call or message from a real customer. Google Ads are pay-per-click search ads that appear just below. Most HVAC companies do best with both: LSA for high-intent local calls, Google Ads for jobs and areas LSA does not cover as well.',
  },
  {
    q: 'How much should I budget for ads?',
    a: 'It depends on your service area and how many jobs you want. Many local HVAC companies start around $2,500 a month in ad spend. We will tell you honestly what your market needs before you commit — if the numbers do not work, we will say so.',
  },
  {
    q: 'How fast will I see results?',
    a: 'LSA can produce calls within the first week once verification and setup are complete. Google Ads typically need 2–4 weeks of data before optimisation really bites. We report weekly, so you are never guessing.',
  },
  {
    q: 'Do I need a long-term contract?',
    a: 'No. Engagements are month-to-month after the initial setup. If the leads stop being worth it, you can walk away — we would rather earn the renewal than lock you in.',
  },
  {
    q: 'Which businesses is this for?',
    a: 'Home-service companies that win work by phone: HVAC, plumbing, electrical, appliance repair, and similar trades across Toronto and the GTA. If your customers search Google when something breaks, this is built for you.',
  },
];

export const AdvertisingFaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-[#09090b] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono mb-3">
            <span>Frequently Asked</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight">
            Straight answers, before you book a call
          </h2>
        </div>

        <div className="max-w-3xl space-y-4">
          {FAQS.map((f) => (
            <div
              key={f.q}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#141416] to-[#0e0e10] border border-white/10"
            >
              <h3 className="text-base font-bold text-white font-display mb-2">{f.q}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
