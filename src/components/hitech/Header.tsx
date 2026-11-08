import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface HeaderProps {
  onOpenContact: (presetArea?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D9E0E6] py-3'
          : 'bg-white border-b border-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo & Descriptor */}
        <a href="#top" className="flex items-center gap-3 group text-decoration-none">
          <div className="flex items-center justify-center w-9 h-9 rounded-md bg-[#0B1F33] text-white font-serif font-bold text-xl group-hover:bg-[#0B7A7C] transition-colors">
            H
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-tight tracking-tight text-[#0B1F33] group-hover:text-[#0B7A7C] transition-colors">
              Hitech Advisors
            </span>
            <span className="text-[11px] font-sans font-medium text-[#3A4A5A] uppercase tracking-wider">
              Business &amp; Technology Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav ref={navRef} aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('solutions')}
              onMouseEnter={() => setActiveDropdown('solutions')}
              className="flex items-center gap-1.5 text-sm font-medium text-[#0B1F33] hover:text-[#0B7A7C] transition-colors py-2 cursor-pointer"
              aria-expanded={activeDropdown === 'solutions'}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'solutions' && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full left-0 w-96 p-4 bg-white rounded-lg shadow-xl border border-[#D9E0E6] animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#3A4A5A]/70 mb-3 px-3">
                  Solution Areas
                </div>
                <div className="space-y-1">
                  {hitechContent.solutions.map((sol) => (
                    <a
                      key={sol.id}
                      href="#solutions"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-3 rounded-md hover:bg-[#F4F6F8] transition-colors group"
                    >
                      <div className="text-sm font-semibold text-[#0B1F33] group-hover:text-[#0B7A7C] transition-colors">
                        {sol.title}
                      </div>
                      <div className="text-xs text-[#3A4A5A] line-clamp-1 mt-0.5">
                        {sol.line}
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-[#D9E0E6] px-3">
                  <a
                    href="#solutions"
                    onClick={() => setActiveDropdown(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B7A7C] hover:underline"
                  >
                    <span>All Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Capabilities Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('capabilities')}
              onMouseEnter={() => setActiveDropdown('capabilities')}
              className="flex items-center gap-1.5 text-sm font-medium text-[#0B1F33] hover:text-[#0B7A7C] transition-colors py-2 cursor-pointer"
              aria-expanded={activeDropdown === 'capabilities'}
            >
              <span>Capabilities</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'capabilities' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'capabilities' && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full left-0 w-80 p-4 bg-white rounded-lg shadow-xl border border-[#D9E0E6] animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#3A4A5A]/70 mb-3 px-3">
                  How We Deliver
                </div>
                <div className="space-y-1">
                  {hitechContent.capabilities.cards.map((cap) => (
                    <a
                      key={cap.title}
                      href="#capabilities"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-3 rounded-md hover:bg-[#F4F6F8] transition-colors group"
                    >
                      <div className="text-sm font-semibold text-[#0B1F33] group-hover:text-[#0B7A7C] transition-colors">
                        {cap.title}
                      </div>
                      <div className="text-xs text-[#3A4A5A] line-clamp-1 mt-0.5">
                        {cap.line}
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-[#D9E0E6] flex items-center justify-between px-3 text-xs font-semibold">
                  <a
                    href="#capabilities"
                    onClick={() => setActiveDropdown(null)}
                    className="text-[#0B7A7C] hover:underline"
                  >
                    All Capabilities
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={() => setActiveDropdown(null)}
                    className="text-[#0B1F33] hover:text-[#0B7A7C]"
                  >
                    How We Work
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Standard Navigation Links */}
          <a
            href="#industries"
            className="text-sm font-medium text-[#0B1F33] hover:text-[#0B7A7C] transition-colors"
          >
            Industries
          </a>

          <a
            href="#results"
            className="text-sm font-medium text-[#0B1F33] hover:text-[#0B7A7C] transition-colors"
          >
            Results
          </a>

          {/* Insights Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('insights')}
              onMouseEnter={() => setActiveDropdown('insights')}
              className="flex items-center gap-1.5 text-sm font-medium text-[#0B1F33] hover:text-[#0B7A7C] transition-colors py-2 cursor-pointer"
              aria-expanded={activeDropdown === 'insights'}
            >
              <span>Insights</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'insights' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'insights' && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full left-0 w-64 p-3 bg-white rounded-lg shadow-xl border border-[#D9E0E6] animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <a
                  href="#events-and-insights"
                  onClick={() => setActiveDropdown(null)}
                  className="block p-2.5 rounded-md hover:bg-[#F4F6F8] transition-colors"
                >
                  <div className="text-sm font-semibold text-[#0B1F33]">Articles</div>
                  <div className="text-xs text-[#3A4A5A]">Thought leadership &amp; AI insights</div>
                </a>
                <a
                  href="#events-and-insights"
                  onClick={() => setActiveDropdown(null)}
                  className="block p-2.5 rounded-md hover:bg-[#F4F6F8] transition-colors"
                >
                  <div className="text-sm font-semibold text-[#0B1F33]">Events</div>
                  <div className="text-xs text-[#3A4A5A]">Executive roundtables &amp; panels</div>
                </a>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('about')}
              onMouseEnter={() => setActiveDropdown('about')}
              className="flex items-center gap-1.5 text-sm font-medium text-[#0B1F33] hover:text-[#0B7A7C] transition-colors py-2 cursor-pointer"
              aria-expanded={activeDropdown === 'about'}
            >
              <span>About</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'about' && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full right-0 w-64 p-3 bg-white rounded-lg shadow-xl border border-[#D9E0E6] animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <a
                  href="#proposition"
                  onClick={() => setActiveDropdown(null)}
                  className="block p-2.5 rounded-md hover:bg-[#F4F6F8] transition-colors"
                >
                  <div className="text-sm font-semibold text-[#0B1F33]">About Hitech</div>
                  <div className="text-xs text-[#3A4A5A]">Our mission, values &amp; story</div>
                </a>
                <a
                  href="#how-it-works"
                  onClick={() => setActiveDropdown(null)}
                  className="block p-2.5 rounded-md hover:bg-[#F4F6F8] transition-colors"
                >
                  <div className="text-sm font-semibold text-[#0B1F33]">How We Work</div>
                  <div className="text-xs text-[#3A4A5A]">Engagement model &amp; delivery</div>
                </a>
                <a
                  href="#footer"
                  onClick={() => setActiveDropdown(null)}
                  className="block p-2.5 rounded-md hover:bg-[#F4F6F8] transition-colors"
                >
                  <div className="text-sm font-semibold text-[#0B1F33]">Kirkland HQ</div>
                  <div className="text-xs text-[#3A4A5A]">Washington headquarters</div>
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Primary Desktop Action Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => onOpenContact()}
            className="btn-primary"
          >
            Discuss a Challenge
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0B1F33] hover:text-[#0B7A7C] transition-colors rounded-md"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#D9E0E6] px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#3A4A5A]/60 mb-2">
                Navigation
              </div>
              <div className="grid grid-cols-1 gap-2">
                <a
                  href="#solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-[#0B1F33] hover:text-[#0B7A7C]"
                >
                  Solutions
                </a>
                <a
                  href="#capabilities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-[#0B1F33] hover:text-[#0B7A7C]"
                >
                  Capabilities
                </a>
                <a
                  href="#role-selector"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-[#0B1F33] hover:text-[#0B7A7C]"
                >
                  Start With Your Role
                </a>
                <a
                  href="#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-[#0B1F33] hover:text-[#0B7A7C]"
                >
                  How We Work
                </a>
                <a
                  href="#results"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-[#0B1F33] hover:text-[#0B7A7C]"
                >
                  Client Results
                </a>
                <a
                  href="#industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-[#0B1F33] hover:text-[#0B7A7C]"
                >
                  Industries
                </a>
                <a
                  href="#events-and-insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base font-semibold text-[#0B1F33] hover:text-[#0B7A7C]"
                >
                  Events &amp; Insights
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9E0E6]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full btn-primary"
              >
                Discuss a Challenge
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
