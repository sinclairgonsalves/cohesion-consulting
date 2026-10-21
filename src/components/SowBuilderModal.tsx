import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Download, ArrowRight, ShieldCheck, Sparkles, Building2, Headphones, Target, HeartHandshake, Briefcase } from 'lucide-react';
import { TalentRoleKey } from '../types/index.ts';

interface SowBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SowBuilderModal: React.FC<SowBuilderModalProps> = ({ isOpen, onClose }) => {
  const [clientCompany, setClientCompany] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<Record<TalentRoleKey, boolean>>({
    csr: true,
    bdr: true,
    am: false,
    ae: false,
  });
  const [slaLevel, setSlaLevel] = useState<'standard' | 'white-glove'>('white-glove');
  const [existingTools, setExistingTools] = useState<string[]>(['HubSpot', 'Slack Enterprise']);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleRole = (key: TalentRoleKey) => {
    setSelectedRoles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleTool = (tool: string) => {
    setExistingTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  const activeRoleCount = Object.values(selectedRoles).filter(Boolean).length || 1;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientCompany || !contactEmail) return;
    setIsSubmitted(true);
  };

  const handleDownloadSow = () => {
    const rolesList = Object.entries(selectedRoles)
      .filter(([_, active]) => active)
      .map(([key]) => key.toUpperCase())
      .join(', ');

    const content = `# STATEMENT OF WORK (SOW) SUMMARY
Entity: Cohesion Consulting
Client: ${clientCompany}
Contact: ${contactEmail}
Date: ${new Date().toLocaleDateString()}
Core Philosophy: "Our agents embedded into your teams and workflow giving a team member feeling working towards your goal"

1. ENGAGEMENT SCOPE & EMBEDDED TALENT
- Dedicated Placed Roles: ${rolesList || 'CSR, BDR'}
- Total Embedded Capacity: ${activeRoleCount} Dedicated Specialist(s)
- Support Tier: ${slaLevel === 'white-glove' ? 'White-Glove Dedicated with <15-minute response SLA' : 'Standard Business Hours (1-hour SLA)'}
- Workstation Standard: Apple MacBook Pro (M-Series 32GB RAM), Dual 4K Displays, Jabra/Sennheiser ANC, Mandatory YubiKey 2FA

2. CONTRACTUAL DELIVERABLES (INCLUDED WITH EVERY SINGLE CONTRACT)
- Daily Delivery: 8:00 AM AI Standup Brief, activity logs, ticket triage, and daily Slack/Teams standup presence.
- Weekly Delivery: Weekly Operations Review (1-on-1 KPI alignment with dedicated Engagement Director).
- Bi-Weekly Delivery: Bi-Weekly Strategic Sprint (messaging calibration, ICP targeting, and tooling optimization).
- Quarterly Delivery: Formal Quarterly Business Review (QBR) executive presentation analyzing retention trends, qualified pipeline added, conversion ROI, and annual roadmap.
- Guaranteed Response SLA: < 15 min SLA Response on all incoming client requests and tickets.

3. WORKFLOW & TOOL PRESERVATION ("NOT FIXING WHAT ISN'T BROKEN")
- Target Ecosystems: ${existingTools.join(', ') || 'HubSpot, Salesforce, Slack'}
- Integration Protocol: Non-disruptive overlay directly inside client communication and CRM channels. Zero migrations required.

4. LEGAL GOVERNANCE & COMPLIANCE
- IP Ownership: 100% intellectual property ownership transfers perpetually to Client upon milestone payment (work-for-hire).
- Insurance Protection: $2,000,000 Commercial General Liability (CGL) + Errors & Omissions (E&O) / Cyber liability underwriting.
- Confidentiality: Comprehensive bilateral Non-Disclosure Agreement (NDA).

5. SPECIAL NOTES
${additionalNotes || 'Standard dedicated enterprise placement.'}`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SOW-${clientCompany.toLowerCase().replace(/\s+/g, '-')}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#18181b] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#121214]">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-rose-400" />
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Statement of Work (SOW) Configurator
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                "Our agents embedded into your teams and workflow giving a team member feeling working towards your goal"
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Corporate Client Entity Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    placeholder="e.g. Acme Health Enterprise"
                    className="w-full px-3 py-2 text-xs bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="vp.operations@acme.com"
                    className="w-full px-3 py-2 text-xs bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>

              {/* Select Embedded Roles */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Select Embedded Talent Roles (Multi-Select)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div
                    onClick={() => toggleRole('csr')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedRoles.csr
                        ? 'bg-[#4A0E17]/60 border-rose-500 text-white'
                        : 'bg-black/30 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-1">
                      <Headphones className="w-3.5 h-3.5 text-rose-400" />
                      <span>CSR</span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Customer Support & Retention</p>
                  </div>

                  <div
                    onClick={() => toggleRole('bdr')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedRoles.bdr
                        ? 'bg-[#4A0E17]/60 border-rose-500 text-white'
                        : 'bg-black/30 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-1">
                      <Target className="w-3.5 h-3.5 text-rose-400" />
                      <span>BDR</span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Outbound Sales Prospecting</p>
                  </div>

                  <div
                    onClick={() => toggleRole('am')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedRoles.am
                        ? 'bg-[#4A0E17]/60 border-rose-500 text-white'
                        : 'bg-black/30 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-1">
                      <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
                      <span>AM</span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Account Growth & QBRs</p>
                  </div>

                  <div
                    onClick={() => toggleRole('ae')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedRoles.ae
                        ? 'bg-[#4A0E17]/60 border-rose-500 text-white'
                        : 'bg-black/30 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-1">
                      <Briefcase className="w-3.5 h-3.5 text-rose-400" />
                      <span>AE</span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">Enterprise Deal Closing</p>
                  </div>
                </div>
              </div>

              {/* Existing Tools to Overlay ("Not Fixing What Isn't Broken") */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Existing Platforms to Preserve ("Not Fixing What Isn't Broken")
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Salesforce', 'HubSpot', 'Slack Enterprise', 'Microsoft Teams', 'Zendesk', 'Jira'].map((tool) => (
                    <button
                      type="button"
                      key={tool}
                      onClick={() => toggleTool(tool)}
                      className={`px-3 py-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                        existingTools.includes(tool)
                          ? 'bg-rose-500/20 border-rose-400 text-white font-medium'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
              </div>

              {/* Support SLA Tier */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Support Quality & SLA Tier
                </label>
                <select
                  value={slaLevel}
                  onChange={(e) => setSlaLevel(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-400"
                >
                  <option value="white-glove">White-Glove Dedicated (&lt;15 min Response SLA Guarantee, 24/7)</option>
                  <option value="standard">Standard Business Hours (1-hour SLA)</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Specific Client Goals & Objectives
                </label>
                <textarea
                  rows={2}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="e.g. Need 2 BDRs to scale outbound sales alongside 1 dedicated CSR for support..."
                  className="w-full px-3 py-2 text-xs bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-400"
                />
              </div>

              {/* Highlights strip */}
              <div className="p-3.5 bg-black/50 border border-white/10 rounded-xl flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-rose-400" />
                  <span>$2,000,000 E&O Policy + 100% Perpetual IP Transfer</span>
                </div>
                <span className="text-emerald-400 font-mono">SOC-2 & YubiKey Compliant</span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#9f1239] to-[#881337] hover:from-[#be123c] rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Generate Executive SOW Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="space-y-4 font-sans text-xs">
              <div className="p-5 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                <div className="flex items-center gap-2 text-rose-400 mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-bold">Statement of Work Configured</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your custom SOW for <strong className="text-white">{clientCompany}</strong> has been configured with <strong className="text-rose-400">{activeRoleCount} Dedicated Specialist(s)</strong> under our contractual &lt;15-minute response SLA guarantee.
                </p>
              </div>

              <div className="p-4 bg-black/60 border border-white/10 rounded-xl font-mono text-xs text-slate-300 space-y-2">
                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span className="text-slate-400">Client Organization:</span>
                  <span className="text-white">{clientCompany}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span className="text-slate-400">Embedded Roles:</span>
                  <span className="text-rose-400 font-bold">
                    {Object.entries(selectedRoles)
                      .filter(([_, active]) => active)
                      .map(([k]) => k.toUpperCase())
                      .join(' + ') || 'CSR'}
                  </span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span className="text-slate-400">Response SLA:</span>
                  <span className="text-rose-300 font-bold">&lt; 15 min SLA Response Guaranteed</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span className="text-slate-400">Preserved Workflows:</span>
                  <span className="text-white">{existingTools.join(', ')}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-white/5">
                  <span className="text-slate-400">Hardware Standard:</span>
                  <span className="text-white">Apple MacBook Pro 32GB RAM + Jabra ANC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Underwriting Guarantee:</span>
                  <span className="text-emerald-400 font-bold">$2,000,000 E&O Policy Included</span>
                </div>
              </div>

              {/* Explicit Contract Deliverables Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#4A0E17]/40 to-black/60 border border-rose-500/30 space-y-2">
                <span className="text-[11px] font-mono uppercase text-rose-400 font-bold block">
                  Contractual Deliverables (Guaranteed on Every Contract)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    <span><strong>Daily:</strong> 8:00 AM AI Standup Brief</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    <span><strong>Weekly:</strong> Operations & KPI Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    <span><strong>Bi-Weekly:</strong> Strategic Sprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    <span><strong>Quarterly:</strong> Quarterly Business Review (QBR)</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleDownloadSow}
                  className="flex-1 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#9f1239] to-[#881337] hover:from-[#be123c] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Formal SOW (.md)</span>
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2.5 text-xs text-slate-400 hover:text-white bg-white/5 rounded-lg border border-white/10 cursor-pointer"
                >
                  Reconfigure
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
