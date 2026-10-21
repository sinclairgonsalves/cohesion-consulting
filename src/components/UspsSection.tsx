import React from 'react';
import { Users, Workflow, Clock, ShieldCheck, Zap, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface UspsSectionProps {
  onOpenContact: () => void;
}

interface UspItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

const USPS: UspItem[] = [
  {
    number: '01',
    icon: <Users className="w-5 h-5 text-white" />,
    title: 'Authentic Team Embedding',
    subtitle: '"Giving a team member feeling working towards your goal."',
    description: 'Our specialists are not an outsourced ticket queue. They attend your daily standups, communicate natively in your Slack/Teams channels, and align directly with your internal goals and culture.',
    points: [
      '100% dedicated to your company (no multi-client sharing)',
      'Direct participation in your team standups and planning',
      'Unified team member mindset focused on your primary KPIs',
    ],
  },
  {
    number: '02',
    icon: <Workflow className="w-5 h-5 text-white" />,
    title: 'Pragmatic Efficiency',
    subtitle: '"Not fixing what isn\'t broken."',
    description: 'We adapt seamlessly to your existing workflows. No disruptive software migrations, no new proprietary portals to learn—we plug directly into HubSpot, Salesforce, Zendesk, and Jira.',
    points: [
      'Zero downtime or operational interruption',
      'Native integration with your current tool stack',
      'Respect for your proven operational processes',
    ],
  },
  {
    number: '03',
    icon: <Clock className="w-5 h-5 text-white" />,
    title: '< 15-Minute Response SLA',
    subtitle: 'Contractual speed commitment on all communications.',
    description: 'We eliminate the communication delays typical of traditional outsourcing. Our teams adhere to strict, contractually guaranteed response windows during your operating hours.',
    points: [
      'Under 15-minute response SLA on client communications',
      'Direct executive escalation channel with Engagement Directors',
      'Transparent daily activity and turnaround tracking',
    ],
  },
  {
    number: '04',
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    title: 'Top 1% Rigorous Vetting',
    subtitle: 'Under 2.8% candidate acceptance rate.',
    description: 'Every placed specialist passes live crisis simulations, technical assessments, deep cultural alignment evaluations, and complete background checks before touching client workflows.',
    points: [
      'Practical scenario testing & live mock customer interactions',
      'Comprehensive criminal & professional credential audits',
      'Pre-vetted for domain fluency and written clarity',
    ],
  },
  {
    number: '05',
    icon: <Zap className="w-5 h-5 text-white" />,
    title: 'Turnkey 14-Day Deployment',
    subtitle: 'Eliminate 3-month hiring and onboarding cycles.',
    description: 'Scale your team capacity up or down rapidly without recruitment overhead, agency retainers, or long-term employment liability.',
    points: [
      'Vetted specialists ready to begin in 7 to 14 business days',
      'Pre-provisioned enterprise hardware and security tools',
      'Flexible month-to-month or multi-quarter agility',
    ],
  },
  {
    number: '06',
    icon: <Layers className="w-5 h-5 text-white" />,
    title: 'Contractual Deliverable Cadence',
    subtitle: 'Structured accountability included in every contract.',
    description: 'Every engagement includes a predictable governance framework with daily standup briefs, weekly operations reviews, bi-weekly strategic sprints, and executive quarterly business reviews.',
    points: [
      'Daily 8:00 AM Standup Brief & ticket logs',
      'Weekly 1-on-1 KPI alignment with Engagement Director',
      'Formal Quarterly Business Review (QBR) tracking ROI',
    ],
  },
];

export const UspsSection: React.FC<UspsSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="usps" className="py-20 md:py-28 bg-[#09090b] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 font-mono">
            <span>Why Cohesion Consulting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight mb-4">
            Our Core Unique Selling Propositions
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed font-sans">
            Built from the ground up for modern high-growth companies that demand elite execution, seamless collaboration, and zero workflow friction.
          </p>
        </div>

        {/* 6 Core USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {USPS.map((usp) => (
            <div
              key={usp.number}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#141416] to-[#0e0e10] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    {usp.icon}
                  </div>
                  <span className="font-mono text-xs text-white font-bold">
                    {usp.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-1.5">
                  {usp.title}
                </h3>
                <p className="text-xs text-zinc-300 font-medium italic mb-3 font-sans">
                  {usp.subtitle}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-5 font-sans">
                  {usp.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-zinc-300 font-sans">
                  {usp.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action (Black & White Minimalist) */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#141416] via-[#18181b] to-[#0e0e10] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold text-white font-display mb-1">
              Ready to elevate your team with dedicated specialists?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans">
              Schedule a direct consultation with our Engagement Directors to discuss your requirements.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};
