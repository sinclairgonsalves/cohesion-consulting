import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, User, Mail, Building, Phone, MessageSquare } from 'lucide-react';
import { SuccessCheckmark } from './SuccessCheckmark.tsx';

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState('Customer Support Representative (CSR)');
  const [teamSize, setTeamSize] = useState('1 dedicated specialist');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const SERVICE_OPTIONS = [
    'Customer Support Representative (CSR)',
    'Business Development Representative (BDR)',
    'Strategic Account Manager (AM)',
    'Enterprise Account Executive (AE)',
    'Dedicated Cross-Functional Pod',
    'Custom Advisory / Other',
  ];

  const TEAM_SIZE_OPTIONS = [
    '1 dedicated specialist',
    '2–3 specialists (Pod)',
    '4–8 specialists (Department scaling)',
    'Enterprise Custom Team (10+)',
  ];

  useEffect(() => {
    if (defaultService) {
      const match = SERVICE_OPTIONS.find((s) => s.toLowerCase().includes(defaultService.toLowerCase()));
      if (match) setSelectedService(match);
    }
  }, [defaultService, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !workEmail || !companyName) return;

    const ref = `ETC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#141416] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0e0e10]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-0.5">
              <span>Cohesion Consulting</span>
              <span aria-hidden="true">·</span>
              <span>Executive Inquiry</span>
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Contact Our Engagement Team
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <p className="text-zinc-300 leading-relaxed">
                "Our agents embedded into your teams and workflow giving a team member feeling working towards your goal." Tell us what you need—we respond within our <strong>&lt; 15 min response window</strong>.
              </p>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1 flex items-center gap-1">
                    <User className="w-3 h-3 text-zinc-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Jordan Lee"
                    className="w-full px-3 py-2 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-medium mb-1 flex items-center gap-1">
                    <Mail className="w-3 h-3 text-zinc-400" />
                    <span>Work Email *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="jordan@company.com"
                    className="w-full px-3 py-2 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1 flex items-center gap-1">
                    <Building className="w-3 h-3 text-zinc-400" />
                    <span>Company Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. ScaleUp Health"
                    className="w-full px-3 py-2 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-medium mb-1 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-zinc-400" />
                    <span>Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Role / Capability Needed
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 cursor-pointer"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#18181b] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Capacity */}
              <div>
                <label className="block text-zinc-300 font-medium mb-1">
                  Team Size / Scope
                </label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 cursor-pointer"
                >
                  {TEAM_SIZE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#18181b] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Goals */}
              <div>
                <label className="block text-zinc-300 font-medium mb-1 flex items-center gap-1">
                  <MessageSquare className="w-3 h-3 text-zinc-400" />
                  <span>Goals or Current Tool Stack</span>
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your team setup or primary goals..."
                  className="w-full px-3 py-2 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-black" />
                  <span>Send Inquiry to Engagement Director</span>
                </button>
                <span className="text-[10px] text-zinc-400 text-center block mt-1.5 font-mono">
                  &lt; 15 min response SLA · Confidential & NDA-protected
                </span>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4 animate-fade-in">
              <SuccessCheckmark size="md" />
              <div className="pt-1">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Inquiry Received
                </span>
                <h4 className="text-xl font-bold text-white font-display mb-1">
                  Thank You, {fullName}
                </h4>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                  An Engagement Director will review your specifications for <strong>{companyName}</strong> and reply shortly.
                </p>
              </div>

              <div className="p-3 bg-black/60 border border-white/10 rounded-xl text-left font-mono text-[11px] space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Reference:</span>
                  <span className="text-white font-bold">{referenceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Service:</span>
                  <span className="text-white">{selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Target Response:</span>
                  <span className="text-white font-medium">&lt; 15 minutes</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-2.5 px-4 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
