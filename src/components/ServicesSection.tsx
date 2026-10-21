import React, { useState } from 'react';
import { Headphones, Target, HeartHandshake, Briefcase, Users, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: (serviceName?: string) => void;
}

interface ServiceItem {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  summary: string;
  keyResponsibilities: string[];
  deliverables: string[];
  compatibleTools: string[];
  slaBenchmark: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'csr',
    code: 'CSR',
    name: 'Customer Support Representative',
    subtitle: 'White-Glove Omnichannel Support & Retention',
    icon: <Headphones className="w-5 h-5 text-white" />,
    summary: 'Delivers empathetic, high-velocity customer support and ticket resolution directly inside your helpdesk and internal Slack channels.',
    keyResponsibilities: [
      'Omnichannel ticket triage across email, live chat, and voice',
      'Rapid first-response time with guaranteed < 15 min SLA on priority inquiries',
      'Customer onboarding assistance and adoption tracking',
      'Proactive escalation management and issue root-cause analysis',
    ],
    deliverables: [
      'Daily 8:00 AM Ticket Sync & Triage Report',
      'Weekly Operations & Resolution Velocity Review',
      'Bi-Weekly Workflow & Knowledge Base Sprint',
      'Quarterly CSAT & Churn Mitigation Business Review',
    ],
    compatibleTools: ['Zendesk', 'HubSpot Service Hub', 'Intercom', 'Salesforce Service', 'Slack'],
    slaBenchmark: '< 15 min Response SLA',
  },
  {
    id: 'bdr',
    code: 'BDR',
    name: 'Business Development Representative',
    subtitle: 'Outbound Pipeline Generation & Lead Qualification',
    icon: <Target className="w-5 h-5 text-white" />,
    summary: 'Drives qualified enterprise sales meetings through personalized multi-channel outbound prospecting, cold calling, and discovery booking.',
    keyResponsibilities: [
      'Account-based outbound prospecting across LinkedIn, email, and phone',
      'MEDDPICC qualification to ensure only high-intent buyers reach AEs',
      'Customized outbound messaging and value proposition testing',
      'Seamless CRM pipeline updates and clean attribution data',
    ],
    deliverables: [
      'Daily Outbound Activity & Contact Touchpoint Log',
      'Weekly Pipeline Conversion Pacing Review',
      'Bi-Weekly Messaging Calibration & Battlecard Sprint',
      'Quarterly Qualified Pipeline Added & ROI Audit',
    ],
    compatibleTools: ['Salesforce', 'HubSpot Sales', 'Apollo.io', 'LinkedIn Sales Navigator', 'ZoomInfo'],
    slaBenchmark: '30–45 Qualified Calls/mo',
  },
  {
    id: 'am',
    code: 'AM',
    name: 'Strategic Account Manager',
    subtitle: 'Client Relationship Nurturing & Expansion',
    icon: <HeartHandshake className="w-5 h-5 text-white" />,
    summary: 'Owns post-sale customer relationships, conducts proactive health audits, drives renewals and expansions, and protects net revenue retention.',
    keyResponsibilities: [
      'Regular executive check-ins and client relationship nurturing',
      'Continuous portfolio health monitoring and churn risk detection',
      'Cross-selling and upselling high-value feature tiers',
      'Direct coordination in client Slack and project management boards',
    ],
    deliverables: [
      'Daily Account Pulse & Flagged Health Escalations',
      'Weekly Account Health Index & Renewal Forecast Review',
      'Bi-Weekly Champion Mapping & Feature Adoption Sprint',
      'Quarterly Executive QBR & Net Revenue Retention Audit',
    ],
    compatibleTools: ['Gainsight', 'Salesforce', 'HubSpot', 'ChurnZero', 'Microsoft Teams'],
    slaBenchmark: '98%+ Gross Retention Target',
  },
  {
    id: 'ae',
    code: 'AE',
    name: 'Enterprise Account Executive',
    subtitle: 'Enterprise Pipeline Execution & Deal Closing',
    icon: <Briefcase className="w-5 h-5 text-white" />,
    summary: 'Navigates multi-stakeholder buying committees, conducts technical product walkthroughs, and negotiates contracts to close enterprise revenue.',
    keyResponsibilities: [
      'Discovery sessions, solution demonstrations, and Mutual Action Plans',
      'Security, procurement, and legal review negotiation',
      'Contract proposal presentation and closing execution',
      'Smooth transition of closed-won accounts to onboarding teams',
    ],
    deliverables: [
      'Daily Active Deal Progression & Buyer Stage Updates',
      'Weekly Pipeline Stage Velocity & Procurement Review',
      'Bi-Weekly Objection Handling & Proposal Calibration',
      'Quarterly Closed-Won Revenue & Win-Rate Retrospective',
    ],
    compatibleTools: ['Salesforce Enterprise', 'DocuSign', 'Gong.io', 'HubSpot Enterprise', 'Slack Connect'],
    slaBenchmark: 'Proven Enterprise Closing',
  },
  {
    id: 'pod',
    code: 'POD',
    name: 'Dedicated Cross-Functional Pod',
    subtitle: 'Turnkey Embedded Sales or Support Team',
    icon: <Users className="w-5 h-5 text-white" />,
    summary: 'A unified team pod combining BDRs, Account Executives, or Support Leads working under dedicated Engagement Director oversight.',
    keyResponsibilities: [
      'End-to-end coverage across full customer lifecycle',
      'Synchronized handoff from outbound prospecting to closing to support',
      'Centralized engagement director managing quality and metrics',
      'Scalable staffing capacity adjusted to your seasonal demand',
    ],
    deliverables: [
      'Daily Cross-Functional Sync & Performance Log',
      'Weekly Executive Pod Review with Engagement Director',
      'Bi-Weekly Workflow & Tool Optimization Sprint',
      'Quarterly Full-Funnel Growth & ROI Presentation',
    ],
    compatibleTools: ['Full Enterprise Tech Stack Support'],
    slaBenchmark: 'Turnkey 14-Day Deployment',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('csr');
  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#09090b] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 font-mono">
            <span>Services Offered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight mb-4">
            Specialized Dedicated Roles Embedded in Your Workflow
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed font-sans">
            Every specialist operates as a 100% full-time dedicated team member inside your communication channels, daily standups, and CRM workflows—delivering authentic alignment without vendor isolation.
          </p>
        </div>

        {/* Minimalist Monochrome Service Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {SERVICES.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setSelectedServiceId(srv.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedServiceId === srv.id
                  ? 'bg-white/10 border-white/40 shadow-xl shadow-black/80 ring-1 ring-white/20'
                  : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10 text-zinc-400'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  {srv.icon}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                  {srv.code}
                </span>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white font-display leading-tight mb-1">
                  {srv.name}
                </h3>
                <span className="text-[11px] text-zinc-400 block line-clamp-1">
                  {srv.subtitle}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Service Detail Panel */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#141416] to-[#0e0e10] border border-white/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Details & Responsibilities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  <span>Role Specification</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-white font-semibold">{activeService.code}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-zinc-400">{activeService.slaBenchmark}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-2">
                  {activeService.name}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {activeService.summary}
                </p>
              </div>

              {/* Core Responsibilities */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-3 tracking-wider">
                  Core Responsibilities & Workflow Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.keyResponsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supported Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2.5 tracking-wider">
                  Native Integration ("Not Fixing What Isn't Broken")
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {activeService.compatibleTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-black/50 border border-white/10 rounded-lg text-zinc-300 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Inquire Action (High-Contrast Monochrome) */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenContact(activeService.name)}
                  className="px-6 py-3 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire for {activeService.code} Specialists</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </button>
                <span className="text-xs text-zinc-400 font-sans">
                  Guaranteed consultation response within &lt; 15 minutes
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Contractual Deliverable Schedule */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-black/60 border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-white font-semibold uppercase tracking-wider">
                  Contractual Deliverables
                </span>
                <span className="text-[10px] font-mono text-white bg-white/10 px-2 py-0.5 rounded border border-white/20">
                  Included in Every Engagement
                </span>
              </div>

              <div className="space-y-3">
                {activeService.deliverables.map((del, idx) => {
                  const [cadence, ...rest] = del.split(':');
                  const details = rest.length > 0 ? rest.join(':') : del;
                  return (
                    <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-white font-mono font-medium">
                        <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>{cadence}</span>
                      </div>
                      <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                        {details}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>100% Work-For-Hire IP Transfer</span>
                <span className="text-zinc-300">SOC-2 & NDA Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
