import React, { useState } from 'react';
import { Navigation } from './components/Navigation.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { UspsSection } from './components/UspsSection.tsx';
import { ContractualDeliverablesSection } from './components/ContractualDeliverablesSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactUsModal } from './components/ContactUsModal.tsx';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedContactService, setSelectedContactService] = useState<string | undefined>(undefined);

  const handleOpenContact = (serviceName?: string) => {
    setSelectedContactService(serviceName);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-white selection:text-black">
      {/* Minimal Top Bar Navigation */}
      <Navigation onOpenContact={() => handleOpenContact()} />

      <main className="flex-1">
        {/* Minimalist Hero Section */}
        <HeroSection onOpenContact={() => handleOpenContact()} />

        {/* Services Offered Section (CSR, BDR, AM, AE, Dedicated Pods) - No Pricing */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Core USPs Section (Pragmatic Efficiency, Embedded Alignment, < 15 min SLA, Top 1% Vetting) */}
        <UspsSection onOpenContact={() => handleOpenContact()} />

        {/* Contractual Deliverables Section (Weekly Check-ins, Bi-Weekly Reporting, Quarterly QBRs) */}
        <ContractualDeliverablesSection onOpenContact={() => handleOpenContact()} />

        {/* Dedicated Contact Us Form Section */}
        <ContactSection initialService={selectedContactService} />
      </main>

      {/* Minimalist Clean Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Instant Contact Us Modal */}
      <ContactUsModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultService={selectedContactService}
      />
    </div>
  );
}
