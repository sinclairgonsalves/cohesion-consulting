import React, { useState } from 'react';
import { Calendar, Clock, FileText, BarChart3, CheckCircle2, Shield, Users, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface ContractualDeliverablesSectionProps {
  onOpenContact: () => void;
}

interface DeliverablePillar {
  id: string;
  cadence: string;
  title: string;
  badge: string;
  timing: string;
  summary: string;
  purpose: string;
  artifacts: string[];
  metrics: string[];
  agenda: string[];
}

const DELIVERABLES: DeliverablePillar[] = [
  {
    id: 'weekly',
    cadence: 'Weekly',
    title: 'Weekly Check-Ins & Operations Review',
    badge: 'Tactical Synchronization',
    timing: 'Every Monday / Friday (30-Minute 1-on-1)',
    summary: 'Direct tactical review between your team leadership and our dedicated Engagement Director to review operational health, resolve bottlenecks, and align sprint goals.',
    purpose: 'Ensure immediate operational feedback loops, preserve high velocity, and clear blockers before they impact key performance indicators.',
    artifacts: [
      'Weekly Operational Scorecard & SLA Report',
      'Action Item & Task Escalation Register',
      'Next 7-Day Priority Objectives Sheet',
      'Recorded Call/Ticket Calibration Audit Notes',
    ],
    metrics: [
      'Weekly Ticket/Call Turnaround Velocity',
      'First-Touch SLA Compliance Rate (< 15 min guarantee)',
      'Escalation Resolution Time',
      'Resource Pacing vs. Targets',
    ],
    agenda: [
      '5 min: Review of previous week accomplishments & SLA adherence',
      '10 min: Metric deep-dive (CSAT, discovery meetings, or account health)',
      '10 min: Active blocker identification & process tuning',
      '5 min: Commitments & sign-off for the upcoming week',
    ],
  },
  {
    id: 'biweekly',
    cadence: 'Bi-Weekly',
    title: 'Bi-Weekly Performance & Sprint Reporting',
    badge: 'Analytical Sprint Review',
    timing: 'Every 14 Days (Formal Written Digest & Sync)',
    summary: 'A comprehensive quantitative report detailing workload throughput, funnel conversion health, and tooling optimization across your tech stack.',
    purpose: 'Provide leadership with verifiable data on operational ROI, calibrate objection battlecards or support macros, and implement ongoing workflow efficiencies.',
    artifacts: [
      'Formal Bi-Weekly Performance Report (PDF / Markdown)',
      'Workflow & Messaging Optimization Recommendations',
      'Quality Assurance (QA) Scoring & Compliance Log',
      'Tooling & Integration Health Summary (HubSpot/Salesforce/Slack)',
    ],
    metrics: [
      'Two-Week Funnel Conversion Pacing',
      'Macro & Workflow Efficiency Gains',
      'Customer Retention / Discovery Booking Yield',
      'Team Member Sentiment & Process Alignment',
    ],
    agenda: [
      'Review formal two-week trendline against target benchmarks',
      'Inspect QA evaluations across calls, chats, and enterprise tickets',
      'Calibrate outreach copy, playbooks, or customer onboarding guides',
      'Plan operational adjustments for the next bi-weekly sprint cycle',
    ],
  },
  {
    id: 'qbr',
    cadence: 'Quarterly',
    title: 'Quarterly Business Reviews (QBRs)',
    badge: 'Executive Strategic Review',
    timing: 'Every 90 Days (60-Minute Executive Session)',
    summary: 'High-level executive presentation delivered to your C-Suite and VPs, evaluating macroeconomic impact, Net Revenue Retention (NRR), and future quarter scaling.',
    purpose: 'Step back from daily execution to analyze long-term strategic value, review annual financial objectives, and roadmap capacity adjustments for the upcoming quarter.',
    artifacts: [
      'Executive QBR Slide Deck & Data Annex',
      'Full-Quarter ROI & Productivity Multiplier Audit',
      'Net Revenue Retention & Churn Mitigation Retrospective',
      'Next Quarter Headcount & Capacity Strategic Roadmap',
    ],
    metrics: [
      'Quarterly Gross & Net Revenue Impact',
      'Annualized Cost Savings vs. In-House Hiring',
      'Long-Term Customer Satisfaction & Net Promoter Trends',
      'Strategic Capacity Readiness for Upcoming Initiatives',
    ],
    agenda: [
      'Executive Summary & 90-Day Key Milestones Achieved',
      'Comprehensive ROI & Productivity Metric Presentation',
      'Market & Competitive Insights Gathered from Field Execution',
      'Collaborative Planning of Goals & Resource Allocation for Next Quarter',
    ],
  },
];

export const ContractualDeliverablesSection: React.FC<ContractualDeliverablesSectionProps> = ({ onOpenContact }) => {
  const [activePillarId, setActivePillarId] = useState<string>('weekly');
  const activePillar = DELIVERABLES.find((d) => d.id === activePillarId) || DELIVERABLES[0];

  return (
    <section id="deliverables" className="py-20 md:py-28 bg-[#09090b] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 font-mono flex items-center gap-2">
            <span>Contractual Deliverables</span>
            <span aria-hidden="true">·</span>
            <span>Standard Across Every Contract</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight mb-4">
            Structured Accountability Guaranteed Across All Engagements
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed font-sans">
            We don't leave performance to chance. Every client engagement contractually includes our three-tier governance cadence: <strong className="text-white font-semibold">weekly operational check-ins</strong>, <strong className="text-white font-semibold">bi-weekly analytics reporting</strong>, and formal <strong className="text-white font-semibold">quarterly business reviews (QBRs)</strong> led by your dedicated Engagement Director.
          </p>
        </div>

        {/* 3 Core Cadence Bento Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {DELIVERABLES.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePillarId(item.id)}
              className={`p-6 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                activePillarId === item.id
                  ? 'bg-white/10 border-white/40 shadow-xl shadow-black/80 ring-1 ring-white/20'
                  : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10 text-zinc-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    {item.id === 'weekly' && <Clock className="w-5 h-5 text-white" />}
                    {item.id === 'biweekly' && <FileText className="w-5 h-5 text-white" />}
                    {item.id === 'qbr' && <BarChart3 className="w-5 h-5 text-white" />}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-white border border-white/15">
                    {item.cadence}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-3 font-mono">
                  {item.timing}
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2 font-sans">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                <span>View Full Specifications</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          ))}
        </div>

        {/* Active Cadence Deep-Dive Panel */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#141416] to-[#0e0e10] border border-white/15 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Purpose & Agenda */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  <span>Cadence Deep Dive</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-white font-semibold">{activePillar.cadence} Commitment</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
                  {activePillar.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-4">
                  Timing: {activePillar.timing}
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {activePillar.purpose}
                </p>
              </div>

              {/* Standard Meeting Agenda */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-3 tracking-wider">
                  Standard Agenda Structure
                </h4>
                <div className="space-y-2.5">
                  {activePillar.agenda.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-300">
                      <span className="font-mono text-zinc-400 font-bold shrink-0">0{idx + 1}</span>
                      <span className="font-sans leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire About Our Deliverable Framework</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </button>
                <span className="text-xs text-zinc-400 font-mono">
                  SLA: &lt; 15 min response window
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Tangible Artifacts & Tracked Metrics */}
            <div className="lg:col-span-5 space-y-5">
              {/* Tangible Artifacts Box */}
              <div className="p-6 rounded-xl bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-white font-semibold uppercase tracking-wider">
                    Tangible Artifacts Delivered
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    Client Owned
                  </span>
                </div>

                <div className="space-y-2">
                  {activePillar.artifacts.map((art, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="font-sans leading-relaxed">{art}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Governance Benchmarks Box */}
              <div className="p-6 rounded-xl bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-white font-semibold uppercase tracking-wider">
                    Quantitative Focus Areas
                  </span>
                  <span className="text-[10px] font-mono text-white bg-white/10 px-2 py-0.5 rounded border border-white/20">
                    Transparent
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePillar.metrics.map((met, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-zinc-300 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-2" />
                      <span>{met}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Foundation Strip: Daily & Real-Time Operational SLA */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <strong className="text-sm font-bold text-white font-display block mb-0.5">
                Daily 8:00 AM Standup Brief
              </strong>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                Activity digests, ticket queues, and priority alignment delivered directly to your Slack or email each morning.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3.5">
            <Shield className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <strong className="text-sm font-bold text-white font-display block mb-0.5">
                Contractual &lt; 15-Min Response SLA
              </strong>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                Real-time rapid communication guarantee on all active client channels during operating business hours.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3.5">
            <Users className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <strong className="text-sm font-bold text-white font-display block mb-0.5">
                Dedicated Engagement Director
              </strong>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                A single senior executive point of contact overseeing talent performance, reviews, and continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
