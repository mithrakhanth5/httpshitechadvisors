import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { HitechLogo } from '../ui/HitechLogo';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';

interface NavbarProps {
  onOpenDiscuss: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiscuss }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial gentle fade-in on load
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.9, ease: EDITORIAL_EASE }
      );
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Role Focus', href: '#role-selector' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Results', href: '#results' },
    { label: 'Industries', href: '#industries' },
    { label: 'Events & Insights', href: '#roundtable' },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-[#DCE4EC] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
        <div className="w-full px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Brand Logo Monogram */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group text-decoration-none"
            aria-label="Hitech Advisors — Home"
          >
            <HitechLogo className="w-9 h-9 group-hover:scale-105 transition-transform duration-300" />
            <span className="font-display font-extrabold text-lg leading-none tracking-tight text-[#020626] group-hover:text-[#D22931] transition-colors">
              Hitech Advisors
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#3A4A5A] hover:text-[#D22931] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D22931] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <MagneticButton
              variant="primary"
              onClick={onOpenDiscuss}
              className="text-xs font-bold uppercase tracking-wider !py-2.5 !px-5"
            >
              <span>Discuss a Challenge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#020626] hover:bg-[#EBF2F7] transition-colors"
            aria-label="Toggle Navigation"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#DCE4EC] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-base font-semibold text-[#020626] hover:text-[#D22931] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-[#DCE4EC]">
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onOpenDiscuss();
                }}
                className="w-full py-3.5 rounded-full bg-[#D22931] text-white text-sm font-bold uppercase tracking-wider shadow-md"
              >
                Discuss a Challenge
              </button>
            </div>
          </div>
        )}
      </header>
  );
};
