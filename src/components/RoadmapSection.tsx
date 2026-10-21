import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Target, Calendar, Clock, Layers, BarChart3, ArrowUpRight } from 'lucide-react';
import { RoadmapPhase } from '../types/index.ts';

const CLIENT_PHASES: RoadmapPhase[] = [
  {
    phase: '01',
    title: 'Rapid Onboarding, Alignment & Pipeline Activation',
    timeline: 'Weeks 1 – 4',
    primaryObjective: 'Embed dedicated sales execution or customer support talent into your team, integrate CRM and communication channels, and establish immediate operational velocity.',
    keyActivities: [
      'Comprehensive discovery session to review target ICP, sales collateral, customer support ticket queues, and workflows',
      'Deploy dedicated senior CSRs, BDRs, AMs, or AEs with 32GB+ M-Series workstations and noise-canceling headsets',
      'Integrate Apollo.io, LinkedIn Sales Navigator, and HubSpot/Salesforce outbound sequences with zero schema alterations',
      'Configure AI operations console for automated 8:00 AM daily standup and progress digests',
      'Standard Deliverables: Weekly Operations Review, Bi-Weekly Strategic Sprint, and Daily AI Standups active immediately',
    ],
    kpis: [
      { label: 'Time-to-First Outreach / Ticket', target: 'Under 5 Business Days' },
      { label: 'Outbound Discovery Calls', target: '25 – 40 Qualified Calls / mo' },
      { label: 'SLA Response Adherence', target: '100% (< 15 min SLA Response)' },
      { label: 'Contract Milestone Delivery', target: '100% On-Schedule' },
    ],
    status: 'active',
  },
  {
    phase: '02',
    title: 'Pragmatic Workflow Optimization & Strategic Cadence',
    timeline: 'Months 2 – 4',
    primaryObjective: 'Solidify recurring deliverable cadences, optimize messaging and resolution playbooks, and scale pipeline velocity with zero workflow disruption.',
    keyActivities: [
      'Weekly Operations Reviews with your dedicated Engagement Director auditing conversion pacing and ticket resolution',
      'Bi-Weekly Strategic Sprints calibrating objection battlecards, ICP targeting, and customer onboarding documentation',
      'Continuous bidirectional data sync between legacy CRM/ticketing and automated AI operations summaries',
      'First Quarterly Business Review (QBR) presentation analyzing customer retention trends and qualified pipeline ROI',
    ],
    kpis: [
      { label: 'Review Adherence Cadence', target: '100% Weekly & Bi-Weekly Sync' },
      { label: 'Workflow Disruption Rate', target: '0% ("Not Fixing What Isn\'t Broken")' },
      { label: 'Pipeline Acceleration', target: '2.8x Faster Stage Velocity' },
      { label: 'First QBR Delivery', target: 'Formal Executive Audit Complete' },
    ],
    status: 'upcoming',
  },
  {
    phase: '03',
    title: 'Multi-Squad Enterprise Scale & Long-Term Expansion',
    timeline: 'Months 5+',
    primaryObjective: 'Scale managed pods across multiple product lines or regional territories while maintaining 24/7 dedicated white-glove support and executive QBR governance.',
    keyActivities: [
      'Scale dedicated pods with specialized vertical sales closers, senior account managers, and customer support specialists',
      'Expand outbound market penetration into Tier-1 enterprise and strategic mid-market accounts',
      'Executive Quarterly Business Reviews (QBRs) delivering board-ready ROI presentations and Net Revenue Retention (NRR) reports',
      'Ongoing 24/7 white-glove coverage backed by contractually guaranteed < 15 min SLA response times',
    ],
    kpis: [
      { label: 'Enterprise Pipeline Added', target: '$3.5M+ Qualified Pipeline' },
      { label: 'Dedicated Talent Pods', target: 'Custom Multi-Squad Capacity' },
      { label: 'SLA Response Guarantee', target: '< 15 min Across All Channels' },
      { label: 'Client Retention & CSAT', target: '99.4% Executive Satisfaction' },
    ],
    status: 'planned',
  },
];

interface RoadmapSectionProps {
  onOpenContact: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onOpenContact }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const currentPhase = CLIENT_PHASES[activePhaseIndex];

  return (
    <section id="roadmap" className="py-24 bg-[#121214] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3 font-mono">
            <span>06 · Partnership Scaling Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight mb-4">
            Structured Client Onboarding & Scaling Journey
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            "Our agents embedded into your teams and workflow giving a team member feeling working towards your goal." A predictable roadmap from Day 1 kickoff to enterprise multi-squad scale—backed by weekly reviews, bi-weekly sprints, and quarterly business reviews (QBR) on every single contract.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {CLIENT_PHASES.map((p, idx) => (
            <button
              key={p.phase}
              onClick={() => setActivePhaseIndex(idx)}
              className={`text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                activePhaseIndex === idx
                  ? 'bg-gradient-to-b from-[#4A0E17]/80 to-[#18181b] border-rose-500/70 shadow-xl shadow-[#4A0E17]/30 ring-1 ring-rose-500/30'
                  : 'glass-panel hover:bg-white/[0.04] border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-rose-400 font-bold uppercase">
                  Stage {p.phase} · {p.timeline}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    p.status === 'active'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : p.status === 'upcoming'
                      ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                      : 'bg-white/5 text-slate-400 border border-white/10'
                  }`}
                >
                  {p.status === 'active' ? 'Phase 1 Launch' : p.status === 'upcoming' ? 'Phase 2 Cadence' : 'Phase 3 Scale'}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white font-display line-clamp-1">{p.title}</h3>
            </button>
          ))}
        </div>

        {/* Active Phase Deep Dive */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] to-[#121214]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block mb-1">
                  Stage {currentPhase.phase} Deliverables · {currentPhase.timeline}
                </span>
                <h3 className="text-2xl font-bold text-white font-display mb-3">
                  {currentPhase.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {currentPhase.primaryObjective}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
                  Key Deliverables & Action Items
                </h4>
                <div className="space-y-2.5 font-sans">
                  {currentPhase.keyActivities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#9f1239] to-[#881337] hover:from-[#be123c] rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Contact Us to Begin Onboarding</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-2 text-xs font-sans">
                  <span className="px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-300 font-mono text-[11px] font-semibold">
                    &lt; 15 min SLA Response
                  </span>
                  <span className="text-slate-400">
                    Included on every single contract
                  </span>
                </div>
              </div>
            </div>

            {/* Contract Deliverables & KPI Box */}
            <div className="lg:col-span-5 space-y-4">
              {/* Contract Deliverables Pill */}
              <div className="p-4 bg-black/60 border border-rose-500/30 rounded-xl space-y-2 font-sans text-xs">
                <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">
                  Contractual Deliverables (Included on Every Contract)
                </span>
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span><strong>Daily:</strong> 8:00 AM AI Standup Brief</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span><strong>Weekly:</strong> Weekly Operations Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span><strong>Bi-Weekly:</strong> Bi-Weekly Strategic Sprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span><strong>Quarterly:</strong> Quarterly Business Review (QBR)</span>
                  </div>
                </div>
              </div>

              {/* KPI Metric Box */}
              <div className="p-6 bg-black/40 border border-white/10 rounded-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="font-mono text-slate-400 uppercase">Contractual Target Benchmarks</span>
                  <span className="font-mono text-rose-400 font-bold">Stage {currentPhase.phase}</span>
                </div>

                <div className="space-y-2.5 font-sans">
                  {currentPhase.kpis.map((kpi, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">{kpi.label}</span>
                      <span className="font-mono text-white text-xs sm:text-sm font-bold tabular-nums">
                        {kpi.target}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
