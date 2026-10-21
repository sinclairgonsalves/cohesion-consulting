import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-[#070709] border-t border-white/10 text-xs text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-base font-bold text-white font-display block">
              Cohesion Consulting
            </span>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              "Our agents embedded into your teams and workflow giving a team member feeling working towards your goal." Built on pragmatic efficiency: not fixing what isn't broken.
            </p>
            <div className="pt-2 text-[11px] text-zinc-500 space-y-1 font-mono">
              <p>Corporate: Federal / Provincial Incorporation · B2B Enterprise Ready</p>
              <p>Jurisdiction: Cross-Border Operations (US & Canada)</p>
              <p>Coverage: $2,000,000 E&O Liability & 100% Perpetual IP Assignment</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block font-mono mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#usps" className="hover:text-white transition-colors">
                  Core USPs
                </a>
              </li>
              <li>
                <a href="#deliverables" className="hover:text-white transition-colors">
                  Contractual Deliverables
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Consultation Link */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block font-mono mb-2">
              Get In Touch
            </span>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-white hover:text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>Contact Us & Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </button>
              </li>
              <li className="text-[11px] text-zinc-500 font-mono">
                Contractual SLA: Under 15-Minute Response Window
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Cohesion Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6 font-mono text-[10px]">
            <span>100% Work-For-Hire IP Transfer</span>
            <span>Non-Disruptive Integration</span>
            <span>&lt; 15 min SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
