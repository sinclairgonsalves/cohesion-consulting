import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

interface NavigationProps {
  onOpenContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-white/15 shadow-xl shadow-black/80'
          : 'bg-[#09090b]/70 backdrop-blur-sm border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-white font-display hover:text-zinc-300 transition-colors shrink-0"
        >
          Cohesion Consulting
        </a>

        {/* Minimalist Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-zinc-400 font-sans">
          <a href="#services" className="hover:text-white transition-colors">
            Services Offered
          </a>
          <a href="#usps" className="hover:text-white transition-colors">
            Core USPs
          </a>
          <a href="#deliverables" className="hover:text-white transition-colors">
            Deliverables
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </nav>

        {/* Primary Action Button (High-Contrast Monochrome) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="px-5 py-2 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl shadow-sm transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-lg whitespace-nowrap"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b] border-b border-white/10 px-4 py-4 space-y-3 text-sm">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white py-1 font-medium"
          >
            Services Offered
          </a>
          <a
            href="#usps"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white py-1 font-medium"
          >
            Core USPs
          </a>
          <a
            href="#deliverables"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white py-1 font-medium"
          >
            Contractual Deliverables
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white py-1 font-medium"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};
