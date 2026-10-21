import React, { useState } from 'react';
import { Layers, ShieldCheck, Bot, CheckCircle2, ArrowRight, ArrowUpRight, Workflow, Users, Sparkles } from 'lucide-react';

interface PillarsSectionProps {
  onOpenAiConsole: () => void;
  onOpenContact: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenAiConsole, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'pragmatic' | 'embedded' | 'ai-ops'>('pragmatic');

  return (
    <section id="core-pillars" className="py-24 bg-[#121214] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3">
            <span>03 · Three Core Strategic Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight text-balance leading-tight mb-4">
            Engineered for Authentic Alignment & Zero Workflow Disruption
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            "Our agents embedded into your teams and workflow giving a team member feeling working towards your goal." Built on three non-negotiable operational principles.
          </p>
        </div>

        {/* 3 Core Pillar Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {/* Pillar 1: Pragmatic Integration */}
          <div
            onClick={() => setActiveTab('pragmatic')}
            className={`cursor-pointer rounded-2xl p-7 transition-all border flex flex-col justify-between ${
              activeTab === 'pragmatic'
                ? 'bg-gradient-to-b from-[#4A0E17]/60 to-[#18181b] border-rose-500/60 shadow-xl shadow-[#4A0E17]/25'
                : 'glass-panel glass-panel-hover border-white/10'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-5">
                <Workflow className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1">
                Pillar 01 · Architecture
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Pragmatic Integration
              </h3>
              <p className="text-xs font-medium text-rose-300 italic mb-4">
                "Not fixing what isn't broken."
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                We overlay existing client tech stacks and communication workflows (HubSpot, Salesforce, Slack, Microsoft Teams, Jira) without disrupting proven operational foundations.
              </p>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Zero disruption to client HubSpot/Salesforce setups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Immediate deployment into Slack Enterprise & Teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>No costly software migrations or downtime</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 text-xs text-rose-300 flex items-center justify-between border-t border-white/5">
              <span>Inspect Integration Model</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 2: Premium Outsourcing & High Support Quality */}
          <div
            onClick={() => setActiveTab('embedded')}
            className={`cursor-pointer rounded-2xl p-7 transition-all border flex flex-col justify-between ${
              activeTab === 'embedded'
                ? 'bg-gradient-to-b from-[#4A0E17]/60 to-[#18181b] border-rose-500/60 shadow-xl shadow-[#4A0E17]/25'
                : 'glass-panel glass-panel-hover border-white/10'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-5">
                <Users className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1">
                Pillar 02 · Embedded Talent
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Premium Embedded Quality
              </h3>
              <p className="text-xs font-medium text-rose-300 italic mb-4">
                Full-time dedicated team members aligned with your vision.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                Embedded professionals operate as full-time dedicated team members fully aligned with client KPIs, participating in daily standups, sprint reviews, and strategic planning.
              </p>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Contractual &lt;15-minute response SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Authentic cultural & communication alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Apple M-Series 32GB hardware & Jabra ANC gear</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 text-xs text-rose-300 flex items-center justify-between border-t border-white/5">
              <span>Inspect Embedded SLA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 3: End-to-End AI-Driven Operations */}
          <div
            onClick={() => setActiveTab('ai-ops')}
            className={`cursor-pointer rounded-2xl p-7 transition-all border flex flex-col justify-between ${
              activeTab === 'ai-ops'
                ? 'bg-gradient-to-b from-[#4A0E17]/60 to-[#18181b] border-rose-500/60 shadow-xl shadow-[#4A0E17]/25'
                : 'glass-panel glass-panel-hover border-white/10'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-5">
                <Bot className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1">
                Pillar 03 · Operational Intelligence
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                End-to-End AI Operations
              </h3>
              <p className="text-xs font-medium text-rose-300 italic mb-4">
                Real-time visibility across all talent roles.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                Continuous AI deployment providing automated daily activity reports, performance diagnostics, predictive pipeline analytics, and real-time status visibility across CSRs, BDRs, AMs, and AEs.
              </p>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Automated 8:00 AM daily standup summaries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Predictive pipeline tracking & SLA monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Weekly sentiment & call performance scoring</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 text-xs text-rose-300 flex items-center justify-between border-t border-white/5">
              <span>Inspect AI Engine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Detailed Inspection Showcase */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] to-[#121214]">
          {activeTab === 'pragmatic' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-rose-400 uppercase">
                  Pillar 01 · Non-Disruptive Workflow Integration
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  "Not Fixing What Isn't Broken"
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Unlike traditional staffing agencies that demand separate project tools or disruptive consulting overhauls, Cohesion Consulting consultants enter your existing stack on Day 1:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white block">CRM & Sales Tech</span>
                    <p className="text-xs text-slate-400">
                      We operate inside your existing HubSpot or Salesforce instance without requesting custom object migrations or database rewrites.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white block">Team Collaboration</span>
                    <p className="text-xs text-slate-400">
                      Agents join your Slack Enterprise channels or Microsoft Teams workspaces with native company email addresses (@yourcompany.com).
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex items-center gap-4">
                  <button
                    onClick={onOpenContact}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#9f1239] hover:bg-[#881337] rounded-lg transition-colors cursor-pointer"
                  >
                    Contact Integration Team
                  </button>
                  <a
                    href="#services"
                    className="text-xs text-rose-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Visual System Card */}
              <div className="lg:col-span-5 p-6 bg-black/60 border border-white/10 rounded-xl space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                  <span className="text-slate-400 uppercase">Workflow Invariants</span>
                  <span className="text-emerald-400">100% Intact</span>
                </div>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Client Database Outages</span>
                    <span className="text-emerald-400 font-bold">0.00%</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Onboarding Friction</span>
                    <span className="text-white">Zero Custom Tooling</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Security Key (YubiKey)</span>
                    <span className="text-rose-400 font-bold">Enforced</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Slack Standup Sync</span>
                    <span className="text-white font-bold">Native Daily</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'embedded' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-rose-400 uppercase">
                  Pillar 02 · Authentic Team Member Feeling
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Dedicated Talent Working Towards Your Goal
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  We don't pool agents across dozens of anonymous clients. Each placed professional is 100% dedicated to your company, attending team all-hands, aligning with your culture, and measured on your exact KPIs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl text-center">
                    <span className="text-2xl font-bold text-rose-400 font-mono tabular-nums block">&lt;15m</span>
                    <span className="text-[11px] text-slate-400">Response SLA Guarantee</span>
                  </div>
                  <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl text-center">
                    <span className="text-2xl font-bold text-white font-mono tabular-nums block">100%</span>
                    <span className="text-[11px] text-slate-400">Dedicated Full-Time</span>
                  </div>
                  <div className="p-3.5 bg-black/40 border border-white/10 rounded-xl text-center">
                    <span className="text-2xl font-bold text-white font-mono tabular-nums block">$2.0M</span>
                    <span className="text-[11px] text-slate-400">E&O Underwriting</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={onOpenContact}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#9f1239] hover:bg-[#881337] rounded-xl transition-colors cursor-pointer flex items-center gap-2 shadow-md"
                  >
                    <span>Contact Our Team</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Hardware & Security Specs */}
              <div className="lg:col-span-5 p-6 bg-black/60 border border-white/10 rounded-xl space-y-3 font-mono text-xs">
                <span className="text-[11px] font-mono text-rose-400 uppercase block mb-1">
                  Embedded Specialist Standard
                </span>
                <div className="space-y-2 text-slate-300 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Workstation</span>
                    <span className="text-white">Apple MacBook Pro (M-Series 32GB)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Audio Acoustics</span>
                    <span className="text-white">Jabra / Sennheiser ANC Headsets</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Hardware Keys</span>
                    <span className="text-rose-400 font-bold">Mandatory YubiKey 2FA</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Endpoint Protection</span>
                    <span className="text-emerald-400">Hardware FileVault Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai-ops' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-rose-400 uppercase">
                  Pillar 03 · Continuous Operational Intelligence
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Automated Daily Reporting & Performance Diagnostics
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Never wonder what your embedded team accomplished today. Our AI operations assistant generates structured morning briefings, call sentiment analysis, and pipeline velocity forecasts delivered directly to your executive Slack channels.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Daily Activity Summaries:</strong> 8:00 AM delivery covering outreach calls, ticket resolutions, and blocker mitigations.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Predictive Pipeline Diagnostics:</strong> Flags deal stagnation or customer churn risks before they impact monthly revenue.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Real-Time SLA Radar:</strong> Continuous monitoring ensuring all customer support inquiries maintain the &lt;15m response threshold.</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={onOpenAiConsole}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#9f1239] hover:bg-[#881337] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Simulate Daily AI Report Now</span>
                  </button>
                </div>
              </div>

              {/* Sample Digest Preview */}
              <div className="lg:col-span-5 p-5 bg-black/60 border border-rose-500/20 rounded-xl space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-rose-300 font-bold">Daily AI Operations Feed</span>
                  </div>
                  <span className="text-slate-400">08:00 AM EST</span>
                </div>
                <div className="text-slate-300 space-y-1.5 leading-relaxed text-[11px]">
                  <p className="text-rose-400 font-bold">» CSR Support Metrics:</p>
                  <p className="text-slate-400 pl-3">48 tickets resolved · 4.2m avg response time (SLA: &lt;15m) · 99.1% CSAT</p>
                  <p className="text-rose-400 font-bold">» BDR Outbound Velocity:</p>
                  <p className="text-slate-400 pl-3">138 touches · 4 discovery calls scheduled with enterprise ICPs</p>
                  <p className="text-rose-400 font-bold">» AM Retention Radar:</p>
                  <p className="text-slate-400 pl-3">2 QBRs delivered · 0 accounts flagged as churn risk</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
