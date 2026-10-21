import React, { useState } from 'react';
import { Award, UserCheck, ShieldCheck, CheckCircle2, TrendingUp, Headphones, Target, HeartHandshake, Briefcase, Bot, Calendar, ArrowRight } from 'lucide-react';
import { TalentRoleKey } from '../types/index.ts';

export const VettingQuality: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<TalentRoleKey>('csr');

  // Role-Specific Assessment Scores State
  const [csrScores, setCsrScores] = useState({ crisisHandling: 96, empathyTone: 98, slaTurnaround: 95 });
  const [bdrScores, setBdrScores] = useState({ coldCalling: 94, objectionHandling: 92, discoveryStructure: 97 });
  const [amScores, setAmScores] = useState({ portfolioRetention: 98, upsellingRoleplay: 91, churnDefense: 96 });
  const [aeScores, setAeScores] = useState({ mockClosing: 95, contractNegotiation: 93, executivePresence: 97 });

  const getCompositeScore = () => {
    switch (selectedRole) {
      case 'csr':
        return Math.round((csrScores.crisisHandling + csrScores.empathyTone + csrScores.slaTurnaround) / 3);
      case 'bdr':
        return Math.round((bdrScores.coldCalling + bdrScores.objectionHandling + bdrScores.discoveryStructure) / 3);
      case 'am':
        return Math.round((amScores.portfolioRetention + amScores.upsellingRoleplay + amScores.churnDefense) / 3);
      case 'ae':
        return Math.round((aeScores.mockClosing + aeScores.contractNegotiation + aeScores.executivePresence) / 3);
    }
  };

  const composite = getCompositeScore();

  return (
    <section id="vetting" className="py-24 bg-[#121214] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3">
            <span>05 · Quality Assurance & Rigorous Vetting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight mb-4">
            Role-Specific Practical Vetting Frameworks
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            We reject 97%+ of applicants. Every candidate must pass live practical simulations tailored to their specific discipline before ever interfacing with a client account.
          </p>
        </div>

        {/* 3 Core Trust Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 text-center">
            <span className="text-3xl font-bold text-rose-400 font-mono tabular-nums block mb-1">2.4%</span>
            <span className="text-xs text-white font-semibold uppercase block mb-1">Applicant Acceptance Rate</span>
            <p className="text-[11px] text-slate-400">Strict 4-stage practical evaluation & background verification</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/10 text-center">
            <span className="text-3xl font-bold text-white font-mono tabular-nums block mb-1">100%</span>
            <span className="text-xs text-white font-semibold uppercase block mb-1">Background & Quota Audited</span>
            <p className="text-[11px] text-slate-400">Verified historical performance and enterprise references</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/10 text-center">
            <span className="text-3xl font-bold text-rose-400 font-mono tabular-nums block mb-1">Zero</span>
            <span className="text-xs text-white font-semibold uppercase block mb-1">Pooled / Shared Agents</span>
            <p className="text-[11px] text-slate-400">Each placed professional is 100% dedicated to one client</p>
          </div>
        </div>

        {/* Interactive Vetting Rubric Simulator */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#18181b] to-[#121214] mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                Practical Assessment Rubric by Role
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Select a role to test the exact simulation scenarios our candidates must ace.
              </p>
            </div>

            {/* 4 Role Switcher */}
            <div className="flex items-center gap-1 p-1 bg-black/40 border border-white/10 rounded-xl overflow-x-auto self-start md:self-auto">
              <button
                onClick={() => setSelectedRole('csr')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  selectedRole === 'csr' ? 'bg-[#9f1239] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Headphones className="w-3.5 h-3.5" />
                <span>CSR</span>
              </button>
              <button
                onClick={() => setSelectedRole('bdr')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  selectedRole === 'bdr' ? 'bg-[#9f1239] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>BDR</span>
              </button>
              <button
                onClick={() => setSelectedRole('am')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  selectedRole === 'am' ? 'bg-[#9f1239] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>AM</span>
              </button>
              <button
                onClick={() => setSelectedRole('ae')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  selectedRole === 'ae' ? 'bg-[#9f1239] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>AE</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 Columns: Specific Rubrics */}
            <div className="lg:col-span-7 space-y-4">
              {selectedRole === 'csr' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">1. Live Mock Customer Crisis & Conflict Resolution</span>
                      <span className="font-mono text-rose-400">{csrScores.crisisHandling}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={csrScores.crisisHandling}
                      onChange={(e) => setCsrScores({ ...csrScores, crisisHandling: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Evaluated on de-escalation composure, empathetic phrasing, and immediate mitigation under pressure.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">2. Written Ticket Empathy & Tone Precision</span>
                      <span className="font-mono text-rose-400">{csrScores.empathyTone}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={csrScores.empathyTone}
                      onChange={(e) => setCsrScores({ ...csrScores, empathyTone: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Assesses customer empathy, clarity, brand voice adherence, and actionable troubleshooting steps.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">3. Turnaround SLA Compliance Exercise (&lt;15m)</span>
                      <span className="font-mono text-rose-400">{csrScores.slaTurnaround}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={csrScores.slaTurnaround}
                      onChange={(e) => setCsrScores({ ...csrScores, slaTurnaround: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Timed simulation measuring rapid triage, accurate tagging in Zendesk/HubSpot, and first-contact resolution.
                    </p>
                  </div>
                </div>
              )}

              {selectedRole === 'bdr' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">1. Live Cold-Calling Simulation & Tone Delivery</span>
                      <span className="font-mono text-rose-400">{bdrScores.coldCalling}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={bdrScores.coldCalling}
                      onChange={(e) => setBdrScores({ ...bdrScores, coldCalling: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Evaluated on pattern-interrupt openers, vocal authority, and rapid value hypothesis delivery.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">2. Real-Time Objection Handling & Pivot Mastery</span>
                      <span className="font-mono text-rose-400">{bdrScores.objectionHandling}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={bdrScores.objectionHandling}
                      onChange={(e) => setBdrScores({ ...bdrScores, objectionHandling: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Tested against common enterprise objections: "no budget", "send an email", or incumbent software locks.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">3. Discovery Structuring & MEDDPICC Qualification</span>
                      <span className="font-mono text-rose-400">{bdrScores.discoveryStructure}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={bdrScores.discoveryStructure}
                      onChange={(e) => setBdrScores({ ...bdrScores, discoveryStructure: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Verification that only qualified, budget-authorized buyers are scheduled for Account Executive demos.
                    </p>
                  </div>
                </div>
              )}

              {selectedRole === 'am' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">1. Portfolio Retention & Renewal Risk Defense</span>
                      <span className="font-mono text-rose-400">{amScores.portfolioRetention}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={amScores.portfolioRetention}
                      onChange={(e) => setAmScores({ ...amScores, portfolioRetention: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Simulation defending an endangered $200k account facing executive turnover and budgetary pressure.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">2. Account Expansion & Upselling Roleplay</span>
                      <span className="font-mono text-rose-400">{amScores.upsellingRoleplay}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={amScores.upsellingRoleplay}
                      onChange={(e) => setAmScores({ ...amScores, upsellingRoleplay: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Mapping cross-departmental expansion opportunities and presenting high-ROI product tier upgrades.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">3. Customer Health Check & QBR Executive Presentation</span>
                      <span className="font-mono text-rose-400">{amScores.churnDefense}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={amScores.churnDefense}
                      onChange={(e) => setAmScores({ ...amScores, churnDefense: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Delivering an authoritative Quarterly Business Review to client C-suite with quantitative ROI proof.
                    </p>
                  </div>
                </div>
              )}

              {selectedRole === 'ae' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">1. End-to-End Enterprise Mock Closing Call</span>
                      <span className="font-mono text-rose-400">{aeScores.mockClosing}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={aeScores.mockClosing}
                      onChange={(e) => setAeScores({ ...aeScores, mockClosing: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Live 45-minute closing scenario navigating budget pushback, timeline urgency, and decision criteria.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">2. Complex Procurement & Legal Contract Negotiation</span>
                      <span className="font-mono text-rose-400">{aeScores.contractNegotiation}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={aeScores.contractNegotiation}
                      onChange={(e) => setAeScores({ ...aeScores, contractNegotiation: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Protecting deal gross margins, multi-year payment terms, and liability terms against enterprise procurement.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-200 font-medium">3. Multi-Stakeholder Pitch Defense & Executive Presence</span>
                      <span className="font-mono text-rose-400">{aeScores.executivePresence}/100</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="100"
                      value={aeScores.executivePresence}
                      onChange={(e) => setAeScores({ ...aeScores, executivePresence: Number(e.target.value) })}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-400">
                      Aligning rival internal stakeholders (CFO, VP Sales, CIO) behind a unified purchase agreement.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 Columns: Composite Assessment Scorecard */}
            <div className="lg:col-span-5 p-6 bg-black/60 border border-white/10 rounded-2xl space-y-4 text-center">
              <span className="text-xs font-mono uppercase text-slate-400 block">
                Composite Benchmark Score
              </span>
              <div className="text-5xl font-bold font-mono text-white tabular-nums">
                {composite}
                <span className="text-xl text-slate-500 font-normal">/100</span>
              </div>

              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  composite >= 90
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{composite >= 90 ? 'Certified for Dedicated Placement' : 'Under Review'}</span>
              </div>

              <div className="pt-3 border-t border-white/10 text-left text-xs space-y-2 text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Standard Workstation</span>
                  <span className="text-white font-medium">Apple M-Series 32GB RAM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Security Clearance</span>
                  <span className="text-white font-medium">YubiKey 2FA + FileVault</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Legal Ownership</span>
                  <span className="text-emerald-400 font-medium">100% Client IP Assignment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Operations & Quality Assurance (Section 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Daily AI Analytics</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Automated processing of daily activity metrics, ticket resolution speeds, call sentiment analysis, and deal stage velocity.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Weekly Performance Reviews</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Dedicated internal engagement directors conduct weekly one-on-one coaching using real client metrics to continuously refine output.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Direct Workflow Alignment</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Embedded agents participate directly in client daily standups, sprint reviews, team all-hands, and strategic planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
