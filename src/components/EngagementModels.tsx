import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Zap, Clock, ShieldCheck, Layers, Users, Headphones, Target, HeartHandshake, Briefcase } from 'lucide-react';

interface EngagementModelsProps {
  onOpenContact: () => void;
}

export const EngagementModels: React.FC<EngagementModelsProps> = ({ onOpenContact }) => {
  return (
    <section id="engagement" className="py-24 bg-[#121214] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3">
            <span>04 · Embedded Engagement Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight mb-4">
            Flexible Pods Tailored to Your Growth Lifecycle
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            "Our agents embedded into your teams and workflow giving a team member feeling working towards your goal." Select a focused pod or deploy a turnkey multi-role squad.
          </p>
        </div>

        {/* 3 Core Engagement Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Tier 1: Outbound Pipeline Pod (BDR + AE) */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-rose-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider">
                  Model 01 · Pipeline Growth
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  BDR & AE Pod
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Sales Execution Pod
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-5 font-sans">
                Dedicated outbound prospectors and enterprise closers focused on pipeline generation, MEDDPICC qualification, and contract closing.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300 mb-6 font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Dedicated BDRs prospecting through Apollo.io & LinkedIn Sales Nav</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Senior Account Executives executing discovery calls and contract closing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Native integration into your HubSpot Sales Hub or Salesforce CRM</span>
                </div>
              </div>

              {/* Standard Contract Deliverables Included with Every Contract */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-rose-500/20 mb-6 space-y-1.5 font-sans">
                <div className="flex items-center justify-between text-[10px] font-mono text-rose-400 uppercase font-semibold pb-1 border-b border-white/10">
                  <span>Deliverables (Every Contract)</span>
                  <span>&lt; 15 min SLA</span>
                </div>
                <div className="text-[11px] space-y-1 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Weekly:</span>
                    <span className="text-white font-medium">Weekly Operations Review</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Bi-Weekly:</span>
                    <span className="text-white font-medium">Bi-Weekly Strategic Sprint</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Quarterly:</span>
                    <span className="text-rose-300 font-medium">Quarterly Business Review (QBR)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Daily:</span>
                    <span className="text-slate-300">8:00 AM Standup Brief</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-2.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rose-400/50 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Contact Us Regarding Sales Pod</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tier 2: Customer Retention & Support Pod (CSR + AM) */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-rose-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider">
                  Model 02 · Support & Retention
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  CSR & AM Pod
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                White-Glove Support Pod
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-5 font-sans">
                Dedicated customer support representatives and account managers preserving SLAs, nurturing accounts, and minimizing churn.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300 mb-6 font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>White-glove CSRs guaranteeing contractual &lt;15-minute response SLAs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Account Managers running quarterly business reviews (QBRs) and upselling</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Native integration into Zendesk, Intercom, and HubSpot Service Hub</span>
                </div>
              </div>

              {/* Standard Contract Deliverables Included with Every Contract */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-rose-500/20 mb-6 space-y-1.5 font-sans">
                <div className="flex items-center justify-between text-[10px] font-mono text-rose-400 uppercase font-semibold pb-1 border-b border-white/10">
                  <span>Deliverables (Every Contract)</span>
                  <span>&lt; 15 min SLA</span>
                </div>
                <div className="text-[11px] space-y-1 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Weekly:</span>
                    <span className="text-white font-medium">Weekly Operations Review</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Bi-Weekly:</span>
                    <span className="text-white font-medium">Bi-Weekly Strategic Sprint</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Quarterly:</span>
                    <span className="text-rose-300 font-medium">Quarterly Business Review (QBR)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Daily:</span>
                    <span className="text-slate-300">8:00 AM Standup Brief</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-2.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rose-400/50 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Contact Us Regarding Support Pod</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tier 3: Turnkey Multi-Role Enterprise Pod (Featured) */}
          <div className="relative glass-panel p-8 rounded-2xl border border-rose-500/60 bg-gradient-to-b from-[#4A0E17]/60 to-[#18181b] shadow-2xl shadow-[#4A0E17]/30 flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-[#9f1239] rounded-full border border-rose-400/40">
              Full Lifecycle Squad
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-1">
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider">
                  Model 03 · Enterprise Turnkey
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  CSR + BDR + AM + AE
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Turnkey Enterprise Pod
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5 font-sans">
                Comprehensive managed squad uniting all four specialized roles, creating a seamless revenue and retention engine embedded inside your workflow.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300 mb-6 font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Full coverage: Prospecting (BDR), Closing (AE), Support (CSR), Expansion (AM)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>Continuous AI operations: 8:00 AM daily standup digests & predictive risk radar</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>$2,000,000 E&O Policy + 100% Perpetual IP Assignment</span>
                </div>
              </div>

              {/* Standard Contract Deliverables Included with Every Contract */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-rose-500/40 mb-6 space-y-1.5 font-sans">
                <div className="flex items-center justify-between text-[10px] font-mono text-rose-400 uppercase font-semibold pb-1 border-b border-white/10">
                  <span>Deliverables (Every Contract)</span>
                  <span>&lt; 15 min SLA</span>
                </div>
                <div className="text-[11px] space-y-1 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Weekly:</span>
                    <span className="text-white font-medium">Weekly Operations Review</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Bi-Weekly:</span>
                    <span className="text-white font-medium">Bi-Weekly Strategic Sprint</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Quarterly:</span>
                    <span className="text-rose-300 font-medium">Quarterly Business Review (QBR)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Daily:</span>
                    <span className="text-slate-300">8:00 AM Standup Brief</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#9f1239] to-[#881337] hover:from-[#be123c] rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
            >
              <span>Contact Us Regarding Turnkey Pod</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Operational Impact Strip */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-[#18181b] to-[#121214]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-400 uppercase">Onboarding Speed</span>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">7 – 14 Days</div>
              <p className="text-[11px] text-slate-400 font-sans">
                Immediate embedded kickoff vs 6–9 months standard internal recruiting cycles.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-400 uppercase">SLA Adherence</span>
              <div className="text-2xl font-bold font-mono text-rose-400 tabular-nums">&lt;15 min Response</div>
              <p className="text-[11px] text-slate-400 font-sans">
                Guaranteed contractual SLA on all incoming client requests and customer tickets.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-400 uppercase">Workflow Friction</span>
              <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">0% Disruption</div>
              <p className="text-[11px] text-slate-400 font-sans">
                "Not fixing what isn't broken" — we overlay your existing HubSpot, Salesforce, and Slack.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-400 uppercase">Proprietary Protection</span>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">100% IP Vested</div>
              <p className="text-[11px] text-slate-400 font-sans">
                Strict Non-Disclosure Agreements and work-for-hire Intellectual Property assignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
