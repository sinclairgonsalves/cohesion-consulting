import React, { useState } from 'react';
import { ShieldCheck, Scale, Briefcase, Laptop, CheckCircle2, Building2, Calendar, Clock, Layers, BarChart3, ArrowUpRight } from 'lucide-react';

interface LegalInfrastructureProps {
  onOpenContact: () => void;
}

export const LegalInfrastructure: React.FC<LegalInfrastructureProps> = ({ onOpenContact }) => {
  const [selectedTopic, setSelectedTopic] = useState<'governance' | 'contracts' | 'insurance' | 'deliverables' | 'hardware'>('deliverables');

  return (
    <section id="compliance" className="py-24 bg-[#121214] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3 font-mono">
            <span>05 · Enterprise Governance & Procurement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight mb-4">
            Institutional Compliance & Contractual Guarantees
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            A frictionless corporate foundation designed for immediate procurement approval with Tier-1 enterprise clients across the United States, Canada, and global markets.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <button
            onClick={() => setSelectedTopic('deliverables')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedTopic === 'deliverables'
                ? 'bg-gradient-to-r from-[#9f1239] to-[#881337] text-white shadow-md shadow-[#4A0E17]/40 border border-rose-400/30'
                : 'glass-panel text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Calendar className="w-4 h-4 text-rose-400" />
            <span>Contract Deliverables (Every Contract)</span>
          </button>
          <button
            onClick={() => setSelectedTopic('governance')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedTopic === 'governance'
                ? 'bg-gradient-to-r from-[#9f1239] to-[#881337] text-white shadow-md shadow-[#4A0E17]/40 border border-rose-400/30'
                : 'glass-panel text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Building2 className="w-4 h-4 text-rose-400" />
            <span>Enterprise Procurement & Vendor Clearance</span>
          </button>
          <button
            onClick={() => setSelectedTopic('contracts')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedTopic === 'contracts'
                ? 'bg-gradient-to-r from-[#9f1239] to-[#881337] text-white shadow-md shadow-[#4A0E17]/40 border border-rose-400/30'
                : 'glass-panel text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Scale className="w-4 h-4 text-rose-400" />
            <span>Commercial MSAs & 100% IP Vesting</span>
          </button>
          <button
            onClick={() => setSelectedTopic('insurance')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedTopic === 'insurance'
                ? 'bg-gradient-to-r from-[#9f1239] to-[#881337] text-white shadow-md shadow-[#4A0E17]/40 border border-rose-400/30'
                : 'glass-panel text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-rose-400" />
            <span>$2.0M E&O & Cyber Underwriting</span>
          </button>
          <button
            onClick={() => setSelectedTopic('hardware')}
            className={`px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              selectedTopic === 'hardware'
                ? 'bg-gradient-to-r from-[#9f1239] to-[#881337] text-white shadow-md shadow-[#4A0E17]/40 border border-rose-400/30'
                : 'glass-panel text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Laptop className="w-4 h-4 text-rose-400" />
            <span>Dedicated Hardware & Security Suite</span>
          </button>
        </div>

        {/* Content Panel */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] to-[#121214]">
          {/* Tab 1: Contract Deliverables (Standard on Every Single Contract) */}
          {selectedTopic === 'deliverables' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-mono text-rose-400 uppercase tracking-wider block">
                  Core Contractual Commitment · Guaranteed Cadence
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Deliverables Included With Every Single Contract
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Whether you engage a single BDR, a white-glove CSR pod, or a full turnkey enterprise squad, every single contract we execute includes our comprehensive recurring delivery and governance rhythm:
                </p>

                <div className="space-y-3 pt-2 text-xs text-slate-300 font-sans">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium mb-0.5">Daily: 8:00 AM AI Standup Brief & Ticket Triage</strong>
                      <span className="text-slate-400">Automated morning activity digests, ticket triage status, and daily standup presence in your Slack/Teams. Backed by guaranteed &lt; 15 min SLA response.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium mb-0.5">Weekly: Weekly Operations Review</strong>
                      <span className="text-slate-400">Direct 1-on-1 operational alignment with your dedicated Engagement Director reviewing ticket resolution times, CSAT, pipeline velocity, and active sprints.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
                    <Layers className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium mb-0.5">Bi-Weekly: Bi-Weekly Strategic Sprint</strong>
                      <span className="text-slate-400">Collaborative strategy session optimizing messaging copy, ICP targeting, objection-handling battlecards, and tooling enhancements.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-rose-500/30 bg-[#4A0E17]/20 flex items-start gap-3">
                    <BarChart3 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium mb-0.5">Quarterly: Quarterly Business Review (QBR)</strong>
                      <span className="text-slate-300">Formal executive-level presentation to client C-suite analyzing customer retention trends, qualified pipeline added, conversion ROI, and strategic roadmap alignment.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenContact}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#9f1239] to-[#881337] hover:from-[#be123c] rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Contact Us to Schedule Deliverables</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Status checklist box */}
              <div className="lg:col-span-5 p-6 bg-black/60 border border-white/10 rounded-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="font-mono text-slate-400 uppercase">SLA & Governance Matrix</span>
                  <span className="font-mono text-rose-400 font-bold">Contractual Standard</span>
                </div>
                <div className="space-y-3 text-xs text-slate-300 font-sans">
                  <div className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5">
                    <span>Response SLA Commitment</span>
                    <span className="font-mono text-rose-400 font-bold">&lt; 15 min SLA Response</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5">
                    <span>Weekly Review Cadence</span>
                    <span className="font-mono text-white">Guaranteed on Every Contract</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5">
                    <span>Bi-Weekly Strategic Sprint</span>
                    <span className="font-mono text-white">Included on Every Contract</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5">
                    <span>Quarterly Business Review (QBR)</span>
                    <span className="font-mono text-emerald-400 font-bold">Standard on Every Contract</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5">
                    <span>Engagement Director Oversight</span>
                    <span className="font-mono text-white">Dedicated 1-on-1 Assigned</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Enterprise Procurement & Vendor Clearance */}
          {selectedTopic === 'governance' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-rose-400 uppercase">
                  Procurement Compliance · Rapid Onboarding
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Friction-Free Enterprise Vendor Clearance
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Cohesion Consulting satisfies standard corporate procurement and vendor risk assessments, allowing Fortune 500 and mid-market legal teams to clear agreements rapidly.
                </p>

                <div className="space-y-3 pt-2 text-xs text-slate-300 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Institutional Corporate Standing:</strong> Verified corporate entity providing limited liability protection, institutional continuity, and strict vendor vetting compliance.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Cross-Border Procurement Readiness:</strong> Frictionless cross-border B2B contracting across the United States, Canada, and global jurisdictions with W-8BEN-E and W-9 tax documentation pre-verified.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Multi-Currency Commercial Billing:</strong> Commercial settlement in USD and CAD via automated Wire, ACH, and EFT with Tier-1 chartered institutions.
                    </div>
                  </div>
                </div>
              </div>

              {/* Status checklist box */}
              <div className="p-6 bg-black/50 border border-white/10 rounded-xl space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="font-mono text-slate-400 uppercase">Procurement Checklist</span>
                  <span className="font-mono text-emerald-400">Vendor Ready</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                    <span>Vendor Onboarding Time</span>
                    <span className="text-white font-bold">Fast-Track 24–48 Hours</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                    <span>Cross-Border Tax Docs</span>
                    <span className="text-emerald-400">W-8BEN-E & W-9 Pre-Cleared</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                    <span>Currency Routing</span>
                    <span className="text-rose-300">USD & CAD Commercial Wire/ACH</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                    <span>Security Clearance</span>
                    <span className="text-emerald-400">SOC-2 & YubiKey Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Commercial MSAs & IP Assignment */}
          {selectedTopic === 'contracts' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-rose-400 uppercase">
                  Contractual Framework · Work-For-Hire
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Enterprise MSAs, SOWs & 100% IP Assignment
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Attorney-drafted B2B commercial agreements safeguarding client confidentiality, trade secrets, and ensuring 100% intellectual property ownership transfers perpetually to the client upon milestone payment.
                </p>

                <div className="space-y-3 pt-2 text-xs text-slate-300 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Master Services Agreement (MSA):</strong> Establishes global commercial terms, mutual indemnities, warranties, liability caps, and dispute resolution mechanisms.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Role-Specific Statements of Work (SOW):</strong> Explicit deliverable scopes, acceptance criteria, recurring reviews, and transparent payment triggers.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Subcontractor IP Assignments & NDAs:</strong> All consultants sign unbreakable perpetual IP transfer clauses and strict Non-Disclosure covenants prior to receiving workspace credentials.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenContact}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#9f1239] hover:bg-[#881337] rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Request MSA & Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Sample Contract Clause Preview */}
              <div className="p-6 bg-black/60 border border-white/10 rounded-xl space-y-3 font-mono text-[11px] text-slate-300">
                <div className="text-rose-400 font-bold uppercase pb-2 border-b border-white/10">
                  Standard Clause § 8.1 · Perpetual IP Vesting
                </div>
                <p className="text-slate-300 leading-relaxed">
                  "All deliverables, software code, outbound lists, customer conversations, and technical artifacts created by Consultant hereunder shall constitute 'work made for hire' and all right, title, and interest in and to such deliverables shall vest exclusively and perpetually in Client."
                </p>
                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Enforceable in US Federal & Canadian Courts</span>
                  <span className="text-emerald-400 font-semibold">100% Client Ownership</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Insurance Underwriting */}
          {selectedTopic === 'insurance' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-rose-400 uppercase">
                  Institutional Risk Mitigation · Underwriting
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  $2.0M Errors & Omissions and Cyber Liability
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Enterprise consulting requires rigorous insurance protection. Our comprehensive policy eliminates third-party delivery liabilities and safeguards your enterprise environment.
                </p>

                <div className="space-y-3 pt-2 text-xs text-slate-300 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Errors & Omissions (E&O):</strong> $2,000,000 aggregate policy covering professional service performance, technical consulting, and advisory execution.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Commercial General Liability (CGL):</strong> $2,000,000 commercial policy protecting corporate operations and international talent engagements.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Certificate of Insurance (COI):</strong> Directly names client corporations as additional insured parties within 24 hours of MSA execution.
                    </div>
                  </div>
                </div>
              </div>

              {/* Policy Certificate Badge */}
              <div className="p-6 bg-[#4A0E17]/30 border border-rose-500/30 rounded-xl space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-rose-400" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Underwritten Corporate Policy</h4>
                    <span className="text-xs text-slate-400 font-mono">Policy # ELO-2026-COI-001</span>
                  </div>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                    <span className="text-slate-400">Total Aggregate Limit</span>
                    <span className="text-rose-300 font-bold">$2,000,000 USD</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                    <span className="text-slate-400">Each Occurrence</span>
                    <span className="text-white">$1,000,000 USD</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Cyber Incident Endorsement</span>
                    <span className="text-emerald-400 font-bold">Included</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Dedicated Hardware & Security Suite */}
          {selectedTopic === 'hardware' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-rose-400 uppercase">
                  Hardware Standards & Physical Security
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Workstation Infrastructure for Cohesion Consulting
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  High performance demands uncompromising hardware. Every consultant is equipped with enterprise-grade Apple M-Series workstations and dual 4K monitors, ensuring zero hardware-induced latency or call quality issues at no additional cost to clients.
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 font-sans">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>M-Series Apple MacBook Pro (32GB+ RAM):</strong> Unthrottled local execution, compilation speed, and instant CRM/browser response.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Dual 4K Monitor Setups:</strong> Optimal screen real estate for simultaneous CRM execution, debuggers, and customer ticket streams.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Jabra / Sennheiser Noise-Canceling Headsets:</strong> Studio-quality microphone acoustics for high-stakes enterprise discovery calls.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Mandatory YubiKey 2FA & FileVault Encryption:</strong> Eliminates credential theft risk and preserves strict SOC-2 client data hygiene.</span>
                  </div>
                </div>
              </div>

              {/* Hardware Spec Visual */}
              <div className="p-6 bg-black/60 border border-white/10 rounded-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="text-slate-400 font-mono">Kit Deployment Spec</span>
                  <span className="text-rose-400 font-mono">Tier-1 Standard</span>
                </div>
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Memory Baseline</span>
                    <span className="text-white font-bold">32 GB Unified RAM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Display Resolution</span>
                    <span className="text-white">Dual 3840 x 2160 (4K)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Audio Mic Isolation</span>
                    <span className="text-emerald-400">-32dB Active Noise Cancellation</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Endpoint Authentication</span>
                    <span className="text-rose-300 font-bold">Physical YubiKey Hardware 2FA</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
