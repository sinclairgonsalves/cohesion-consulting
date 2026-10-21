import React, { useState } from 'react';
import { Headphones, Target, HeartHandshake, Briefcase, CheckCircle2, ArrowRight, ShieldCheck, Zap, Laptop, ArrowUpRight, Calendar, Clock, BarChart3, Layers } from 'lucide-react';
import { TalentRoleKey, TalentRoleInfo } from '../types/index.ts';

const ROLES_DATA: TalentRoleInfo[] = [
  {
    key: 'csr',
    code: 'CSR',
    name: 'Customer Support Representative',
    fullTitle: 'White-Glove Customer Support & Client Onboarding',
    badge: 'Support & Retention',
    focus: 'Delivers high-touch customer support, rapid onboarding, SLA preservation, and dedicated retention management directly inside your support ecosystem.',
    deliverables: [
      'Daily: Immediate first-touch response on enterprise tickets with guaranteed Under 15 min SLA',
      'Daily: Active triage, high-empathy conflict resolution, and real-time Slack/Teams escalation',
      'Weekly: Weekly Operations Review covering ticket resolution speed, CSAT scores, and root-cause analysis',
      'Bi-Weekly: Bi-Weekly Strategic Sprint aligning support documentation, onboarding workflows, and adoption health',
      'Quarterly: Formal Quarterly Business Review (QBR) presentation analyzing customer retention trends & churn mitigation',
    ],
    metrics: [
      { label: 'Response SLA Time', value: 'Under 15 min' },
      { label: 'Customer CSAT', value: '98.8%' },
      { label: 'First-Contact Resolution', value: '84.2%' },
    ],
    vettingAssessment: 'Live mock customer crisis simulation, tone evaluation, conflict resolution, and written ticket test evaluating empathy and turnaround SLA compliance.',
    techStack: ['Zendesk', 'HubSpot Service Hub', 'Intercom', 'Salesforce Service Cloud', 'Slack Enterprise'],
    colorHex: 0x881337,
  },
  {
    key: 'bdr',
    code: 'BDR',
    name: 'Business Development Representative',
    fullTitle: 'Outbound Pipeline Expansion & Lead Qualification',
    badge: 'Sales Acceleration',
    focus: 'Drives qualified enterprise pipeline generation through personalized multi-channel prospecting, cold calling, and discovery call scheduling.',
    deliverables: [
      'Daily: Multi-touch outbound prospecting via Apollo.io, ZoomInfo, and LinkedIn Sales Navigator',
      'Daily: Rigorous MEDDPICC qualification so only high-intent buyers reach Account Executives',
      'Weekly: Weekly Pipeline Review auditing outbound conversion pacing, show-up rates, and lead quality',
      'Bi-Weekly: Bi-Weekly Strategic Sprint optimizing messaging copy, ICP targeting, and objection-handling battlecards',
      'Quarterly: Formal Quarterly Business Review (QBR) detailing total qualified pipeline added, conversion ROI, and CAC velocity',
    ],
    metrics: [
      { label: 'Monthly Discovery Calls', value: '30 – 45' },
      { label: 'Pipeline Generated', value: 'High-Tier Qualified' },
      { label: 'Show-Up Rate', value: '89.4%' },
    ],
    vettingAssessment: 'Cold calling simulations, live objection handling evaluations, discovery call structuring, and personalized multi-channel outreach copy crafting.',
    techStack: ['Salesforce', 'HubSpot Sales', 'Apollo.io', 'LinkedIn Sales Navigator', 'ZoomInfo'],
    colorHex: 0x9f1239,
  },
  {
    key: 'am',
    code: 'AM',
    name: 'Strategic Account Manager',
    fullTitle: 'Client Relationship Nurturing & Account Expansion',
    badge: 'Revenue Expansion',
    focus: 'Maintains deep executive relationships, drives customer health checks, executes upselling and cross-selling, and ensures net-negative churn.',
    deliverables: [
      'Daily: Portfolio health monitoring, account pulse tracking, and proactive churn risk detection',
      'Daily: Direct cross-departmental coordination in client Slack/Teams for smooth customer escalations',
      'Weekly: Weekly Operations Review evaluating account health indexes, renewal timelines, and expansion opps',
      'Bi-Weekly: Bi-Weekly Strategic Sprint syncing on executive champion mapping, feature adoption, and contract pacing',
      'Quarterly: Executive-level Quarterly Business Review (QBR) with client C-suite, Net Revenue Retention (NRR) report & annual roadmap',
    ],
    metrics: [
      { label: 'Gross Retention Rate', value: '98.5%' },
      { label: 'Net Revenue Retention', value: '124%' },
      { label: 'Account Health Index', value: '96.2 / 100' },
    ],
    vettingAssessment: 'Portfolio retention scenario analysis, upselling roleplay, customer health check presentation, and churn mitigation strategy defense.',
    techStack: ['Gainsight', 'Salesforce', 'HubSpot', 'Microsoft Teams', 'ChurnZero'],
    colorHex: 0x4a0e17,
  },
  {
    key: 'ae',
    code: 'AE',
    name: 'Enterprise Account Executive',
    fullTitle: 'Enterprise Pipeline Execution & Deal Closing',
    badge: 'Deal Execution',
    focus: 'Navigates complex enterprise buying committees, conducts technical demonstrations, negotiates high-value contracts, and closes high-tier revenue.',
    deliverables: [
      'Daily: High-touch enterprise discovery sessions, product walkthroughs, and Mutual Action Plan progression',
      'Daily: C-suite stakeholder consensus building across security, legal, procurement, and budget champions',
      'Weekly: Weekly Pipeline & Deal Review reviewing active contract stages, procurement blockers, and closing timelines',
      'Bi-Weekly: Bi-Weekly Strategic Sprint calibrating competitive battlecards, pricing proposals, and enterprise concessions',
      'Quarterly: Formal Quarterly Business Review (QBR) evaluating closed-won revenue, average ACV expansion, and sales cycle efficiency',
    ],
    metrics: [
      { label: 'Win Rate on Qualified Opps', value: '38.6%' },
      { label: 'Avg Enterprise Deal Caliber', value: 'Mid-Market & Fortune 500' },
      { label: 'Sales Cycle Reduction', value: '-32% Days' },
    ],
    vettingAssessment: 'End-to-end enterprise mock closing call, complex contract negotiation evaluation, multi-stakeholder pitch defense, and executive presence audit.',
    techStack: ['Salesforce Enterprise', 'DocuSign', 'Gong.io', 'HubSpot Enterprise', 'Slack Connect'],
    colorHex: 0xbe123c,
  },
];

interface TalentRolesSectionProps {
  onOpenContact: (serviceName?: string) => void;
  selectedRoleKey?: TalentRoleKey;
}

export const TalentRolesSection: React.FC<TalentRolesSectionProps> = ({ onOpenContact, selectedRoleKey }) => {
  const [activeRoleKey, setActiveRoleKey] = useState<TalentRoleKey>(selectedRoleKey || 'csr');
  const activeRole = ROLES_DATA.find((r) => r.key === activeRoleKey) || ROLES_DATA[0];

  const getRoleIcon = (key: TalentRoleKey) => {
    switch (key) {
      case 'csr':
        return <Headphones className="w-5 h-5 text-rose-400" />;
      case 'bdr':
        return <Target className="w-5 h-5 text-rose-400" />;
      case 'am':
        return <HeartHandshake className="w-5 h-5 text-rose-400" />;
      case 'ae':
        return <Briefcase className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#121214] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3 font-mono">
            <span>01 · Services Offered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight mb-4">
            Specialized Embedded Services
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            "Our agents embedded into your teams and workflow giving a team member feeling working towards your goal." Placed specialists operate as full-time dedicated contributors within your communication channels, daily standups, and CRM workflows.
          </p>
        </div>

        {/* Global Guaranteed Deliverable Cadence Banner */}
        <div className="mb-12 p-6 rounded-2xl glass-panel border border-rose-500/30 bg-gradient-to-r from-[#4A0E17]/40 via-[#18181b] to-[#121214]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold block mb-1">
                Standard Client Delivery Commitment
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                Contractual Deliverables Included with Every Single Contract
              </h3>
            </div>
            <span className="text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg self-start lg:self-auto font-mono">
              Dedicated Engagement Director Oversight
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 text-xs">
            <div className="p-3.5 bg-black/40 rounded-xl border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-rose-400 font-bold uppercase font-mono text-[11px]">
                <Clock className="w-3.5 h-3.5" />
                <span>Daily Delivery</span>
              </div>
              <p className="text-slate-300 font-medium">8:00 AM AI Standup Brief</p>
              <p className="text-[11px] text-slate-400">Activity logs, ticket triage, and daily standup sync.</p>
            </div>

            <div className="p-3.5 bg-black/40 rounded-xl border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-rose-400 font-bold uppercase font-mono text-[11px]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Weekly Delivery</span>
              </div>
              <p className="text-slate-300 font-medium">Weekly Operations Review</p>
              <p className="text-[11px] text-slate-400">1-on-1 KPI alignment with your Engagement Director.</p>
            </div>

            <div className="p-3.5 bg-black/40 rounded-xl border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-rose-400 font-bold uppercase font-mono text-[11px]">
                <Layers className="w-3.5 h-3.5" />
                <span>Bi-Weekly Delivery</span>
              </div>
              <p className="text-slate-300 font-medium">Bi-Weekly Strategic Sprint</p>
              <p className="text-[11px] text-slate-400">Pipeline health, tooling optimization, and objection calibration.</p>
            </div>

            <div className="p-3.5 bg-black/40 rounded-xl border border-white/5 space-y-1">
              <div className="flex items-center gap-2 text-rose-400 font-bold uppercase font-mono text-[11px]">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Quarterly Delivery</span>
              </div>
              <p className="text-slate-300 font-medium">Quarterly Business Review (QBR)</p>
              <p className="text-[11px] text-slate-400">Formal executive ROI presentation and health audit.</p>
            </div>
          </div>
        </div>

        {/* 4 Role Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {ROLES_DATA.map((role) => (
            <button
              key={role.key}
              onClick={() => setActiveRoleKey(role.key)}
              className={`text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                activeRoleKey === role.key
                  ? 'bg-gradient-to-b from-[#4A0E17]/85 to-[#18181b] border-rose-500/70 shadow-xl shadow-[#4A0E17]/30 ring-1 ring-rose-500/30'
                  : 'glass-panel hover:border-white/20 border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getRoleIcon(role.key)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 font-semibold">
                      &lt; 15 min SLA
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {role.code}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-display mb-0.5">{role.name}</h3>
                <p className="text-xs text-rose-300 font-sans mb-3">{role.badge}</p>

                {/* Key Metric & Deliverables Teaser */}
                <div className="space-y-1.5 p-2.5 rounded-lg bg-black/40 border border-white/5 text-[11px] mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Metric:</span>
                    <span className="font-mono text-white font-semibold">{role.metrics[0].label}: {role.metrics[0].value}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 border-t border-white/5 pt-1">
                    Deliverables: Weekly · Bi-Weekly · Quarterly QBR
                  </div>
                </div>
              </div>

              <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-rose-300 font-medium">
                <span>View Role Specs & SLA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>

        {/* Active Role Detailed Showcase */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] to-[#121214]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Focus, Deliverables & Tech Stack */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider mb-1">
                  <span>Specialized Talent Specification</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeRole.code} Role</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
                  {activeRole.name}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {activeRole.focus}
                </p>
              </div>

              {/* Core Deliverables by Cadence */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
                  Deliverables Cadence (Daily · Weekly · Bi-Weekly · Quarterly)
                </h4>
                <div className="space-y-2.5">
                  {activeRole.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="font-sans leading-relaxed">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatible Client Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 tracking-wider">
                  Native Workflow & Tool Integration ("Not Fixing What Isn't Broken")
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {activeRole.techStack.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenContact(activeRole.name)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#9f1239] to-[#881337] hover:from-[#be123c] hover:to-[#9f1239] rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire About {activeRole.code} Support</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-2 text-xs font-sans">
                  <span className="px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-300 font-mono text-[11px] font-semibold">
                    &lt; 15 min SLA Response
                  </span>
                  <span className="text-slate-400">
                    Contractual guarantee on all client communications
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Verified Metrics & Vetting Assessment */}
            <div className="lg:col-span-5 space-y-4">
              {/* Performance Metrics Card */}
              <div className="p-6 bg-black/40 border border-white/10 rounded-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="font-mono text-slate-400 uppercase">Target SLA Benchmarks</span>
                  <span className="font-mono text-rose-400 font-bold">{activeRole.code} Standards</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeRole.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                      <span className="text-[10px] text-slate-400 block mb-1">{m.label}</span>
                      <span className="font-mono text-white text-base font-bold tabular-nums">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vetting Assessment Box */}
              <div className="p-6 bg-[#4A0E17]/25 border border-rose-500/30 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase font-mono">
                  <ShieldCheck className="w-4 h-4 text-rose-400" />
                  <span>Role-Specific Vetting Evaluation</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeRole.vettingAssessment}
                </p>
                <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-rose-500/20 font-mono">
                  <span>Acceptance Rate: Under 2.8%</span>
                  <span className="text-emerald-400 font-medium">100% Background Checked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
