import React, { useState, useEffect, useCallback } from 'react';
import { Navigation, type SitePage } from './components/Navigation.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { UspsSection } from './components/UspsSection.tsx';
import { ContractualDeliverablesSection } from './components/ContractualDeliverablesSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { AdvertisingHeroSection } from './components/AdvertisingHeroSection.tsx';
import { AdvertisingServicesSection } from './components/AdvertisingServicesSection.tsx';
import { AdvertisingProcessSection } from './components/AdvertisingProcessSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { AdvertisingFaqSection } from './components/AdvertisingFaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactUsModal } from './components/ContactUsModal.tsx';

function pageFromPath(): SitePage {
  return window.location.pathname.startsWith('/advertising') ? 'advertising' : 'consulting';
}

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedContactService, setSelectedContactService] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<SitePage>(() => pageFromPath());

  const navigate = useCallback((next: SitePage) => {
    const path = next === 'advertising' ? '/advertising' : '/';
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setPage(next);
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setPage(pageFromPath());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleOpenContact = (serviceName?: string) => {
    setSelectedContactService(serviceName);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-white selection:text-black">
      {/* Minimal Top Bar Navigation */}
      <Navigation page={page} onNavigate={navigate} onOpenContact={() => handleOpenContact()} />

      <main className="flex-1">
        {page === 'advertising' ? (
          <>
            {/* Advertising Hero Section */}
            <AdvertisingHeroSection onOpenContact={handleOpenContact} />

            {/* Google Ads & LSA Services */}
            <AdvertisingServicesSection onOpenContact={handleOpenContact} />

            {/* How It Works */}
            <AdvertisingProcessSection />

            {/* Client Testimonials (placeholder copy — see TestimonialsSection.tsx) */}
            <TestimonialsSection />

            {/* FAQ */}
            <AdvertisingFaqSection />

            {/* Advertising Contact Form (same inquiry pipeline, tagged advertising) */}
            <ContactSection
              initialService="Google Local Services Ads (LSA)"
              source="website-advertising-page"
              heading="Let's Talk About Your Ads"
              intro="Tell us about your business and your current advertising. We will review your ads, LSA profile, and reviews — and give you a straight answer on what is working and what is wasting money."
              formSubtitle="Tell us about your business and ad goals and our team will get back to you immediately."
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </main>

      {/* Minimalist Clean Footer */}
      <Footer page={page} onNavigate={navigate} onOpenContact={() => handleOpenContact()} />

      {/* Instant Contact Us Modal */}
      <ContactUsModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultService={selectedContactService}
      />
    </div>
  );
}
