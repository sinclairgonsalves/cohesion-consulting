import React from 'react';
import { Star, Quote } from 'lucide-react';

// ---------------------------------------------------------------------------
// PLACEHOLDER TESTIMONIALS — draft copy only.
// These quotes are illustrative placeholders written for layout and review.
// They are NOT verified words from real clients. Replace each one with a
// genuine client quote (and the client's real name / company, with their
// permission) before treating this section as genuine social proof.
// ---------------------------------------------------------------------------
const TESTIMONIALS = [
  {
    quote:
      'Cohesion rebuilt our Local Services Ads from scratch. The phone started ringing within the first week — and the leads were actual homeowners in our service area, not tyre-kickers.',
    attribution: 'Owner — HVAC Company, Toronto, ON',
  },
  {
    quote:
      "We'd burned money on Google Ads for a year before this. They cut the waste, fixed our tracking, and our cost per booked job dropped by almost half.",
    attribution: 'Owner — HVAC & Plumbing Company, Mississauga, ON',
  },
  {
    quote:
      'The weekly reporting is what sold me. I can see every call, every lead, and exactly what my ad spend is doing. No black box.',
    attribution: 'General Manager — Heating & Cooling Company, Brampton, ON',
  },
  {
    quote:
      'Our LSA ranking went from buried to top three in our area. We stopped chasing leads and started turning some away.',
    attribution: 'Owner — Air Conditioning Company, Scarborough, ON',
  },
  {
    quote:
      "They treat our ad budget like it's their own money. Straight answers, fast changes, and the phone keeps ringing.",
    attribution: 'Owner — Furnace & AC Company, Vaughan, ON',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#09090b] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono mb-3">
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight">
            What HVAC owners say about working with us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.attribution}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#141416] to-[#0e0e10] border border-white/10 flex flex-col"
            >
              <Quote className="w-5 h-5 text-white/30 mb-4" />
              <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-white fill-white" />
                ))}
              </div>
              <blockquote className="text-sm text-zinc-300 leading-relaxed font-sans flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-white/5 text-xs text-zinc-400 font-mono">
                {t.attribution}
              </figcaption>
            </figure>
          ))}

          {/* Sixth slot: invitation to become the next story */}
          <div className="p-6 rounded-2xl bg-white text-black flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold font-display mb-2">Your company could be next</h3>
              <p className="text-sm text-zinc-700 leading-relaxed font-sans">
                Book a free ads audit and find out what your Google Ads and Local Services
                Ads should be doing for you.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-5 px-5 py-3 text-xs font-semibold text-white bg-black hover:bg-zinc-800 rounded-xl transition-all self-start"
            >
              Book a Free Ads Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
