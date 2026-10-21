import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Clock, Calendar, Mail, Building, User, Phone, MessageSquare } from 'lucide-react';
import { SuccessCheckmark } from './SuccessCheckmark.tsx';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || 'Customer Support Representative (CSR)');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !workEmail || !companyName) return;

    const ref = `ETC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setReferenceId(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setWorkEmail('');
    setCompanyName('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#09090b] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 Cols: Contact Context & USPs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight">
              Let's Discuss Embedding Cohesion Consulting Into Your Team
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed font-sans">
              <span className="text-white font-medium italic">"Giving a team member feeling working towards your goal."</span>
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              Fill out this brief inquiry form to connect with our Engagement Directors. We review your workflow and team requirements, and provide a tailored scope within our guaranteed response window.
            </p>

            {/* Direct Commitments (Monochrome Cards) */}
            <div className="space-y-3 pt-2 text-xs text-zinc-300 font-sans">
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3">
                <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">&lt; 15-Minute Response SLA</strong>
                  <span className="text-zinc-400">Guaranteed rapid response on all client inquiries during business hours.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3">
                <Calendar className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Standard Contractual Deliverables</strong>
                  <span className="text-zinc-400">Structured daily standup syncs, weekly reviews, and quarterly business reviews.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">100% Work-for-Hire & IP Security</strong>
                  <span className="text-zinc-400">Complete proprietary data protection with $2.0M liability coverage.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Minimalist Monochrome Contact Us Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#141416] to-[#0e0e10] border border-white/15 shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white font-display mb-1">
                      Contact Us Form
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Tell us what roles you need and our team will get back to you immediately.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Alex Vance"
                        className="w-full px-3.5 py-2.5 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Work Email *</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Company / Organization *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Acme Tech"
                        className="w-full px-3.5 py-2.5 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Phone Number (Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Services Needed Selection */}
                  <div>
                    <label className="block text-zinc-300 font-medium mb-1.5">
                      Primary Service / Role Needed
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#18181b] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Team Size */}
                  <div>
                    <label className="block text-zinc-300 font-medium mb-1.5">
                      Target Capacity / Scope
                    </label>
                    <select
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 cursor-pointer"
                    >
                      {TEAM_SIZE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#18181b] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-zinc-300 font-medium mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Project Details, Tech Stack & Ideal Start Date</span>
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share any specific tools (e.g. HubSpot, Slack, Zendesk), coverage hours, or requirements..."
                      className="w-full px-3.5 py-2.5 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 resize-none"
                    />
                  </div>

                  {/* Submit Button (White on Black) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-black" />
                      <span>Submit Inquiry to Engagement Director</span>
                    </button>
                    <p className="text-[11px] text-center text-zinc-400 mt-2 font-mono">
                      Guaranteed response within &lt; 15 minutes · No obligations or upfront fees
                    </p>
                  </div>
                </form>
              ) : (
                /* Success View (Monochrome Clean with Animated Checkmark) */
                <div className="py-8 text-center space-y-5 animate-fade-in">
                  <SuccessCheckmark size="md" />

                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Inquiry Received
                    </span>
                    <h3 className="text-2xl font-bold text-white font-display">
                      Thank You, {fullName}
                    </h3>
                    <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed pt-1">
                      Your inquiry has been routed to our Senior Engagement Director. We will review your requirements for <strong>{companyName}</strong> and reply directly to <strong>{workEmail}</strong>.
                    </p>
                  </div>

                  {/* Reference Ticket Card */}
                  <div className="max-w-md mx-auto p-4 bg-black/60 border border-white/10 rounded-xl text-left font-mono text-xs space-y-2">
                    <div className="flex justify-between pb-1.5 border-b border-white/5">
                      <span className="text-zinc-400">Reference ID:</span>
                      <span className="text-white font-bold">{referenceId}</span>
                    </div>
                    <div className="flex justify-between pb-1.5 border-b border-white/5">
                      <span className="text-zinc-400">Selected Service:</span>
                      <span className="text-white">{selectedService}</span>
                    </div>
                    <div className="flex justify-between pb-1.5 border-b border-white/5">
                      <span className="text-zinc-400">Capacity:</span>
                      <span className="text-white">{teamSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Response SLA:</span>
                      <span className="text-white font-semibold">&lt; 15 min Guaranteed</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
