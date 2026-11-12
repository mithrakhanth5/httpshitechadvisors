import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HitechLogo } from '../ui/HitechLogo';

interface NavbarProps {
  onOpenDiscuss: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiscuss }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobilePath, setOpenMobilePath] = useState<string | null>(null);
  const [openSolutionsPath, setOpenSolutionsPath] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const isMobileOpen = openMobilePath === location.pathname;
  const isSolutionsOpen = openSolutionsPath === location.pathname;

  const solutionsSubLinks = [
    { label: 'Core Solution Practices', path: '/solutions' },
    { label: 'Solutions by Role', path: '/role-focus' },
    { label: 'Industries Served', path: '/industries' },
  ];

  const isSolutionsGroupActive = ['/solutions', '/role-focus', '/industries'].includes(
    location.pathname
  );

  const primaryLinks = [
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Methodology', path: '/methodology' },
    { label: 'Results', path: '/results' },
    { label: 'Events', path: '/events' },
  ];

  const mobileLinks = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Role Focus', path: '/role-focus' },
    { label: 'Industries', path: '/industries' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Methodology', path: '/methodology' },
    { label: 'Results', path: '/results' },
    { label: 'Events', path: '/events' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenSolutionsPath(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      data-stuck={isScrolled ? 'true' : 'false'}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? 'bg-white/78 backdrop-blur-[14px] backdrop-saturate-[160%] shadow-xs border-b border-[#DCE4EC] py-3'
          : 'bg-white/95 border-b border-[#DCE4EC]/70 py-4'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-6">
        {/* Brand Logo & Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group flex-shrink-0"
          aria-label="Hitech Advisors Home"
        >
          <HitechLogo className="w-8 h-8" />
          <span className="font-display font-extrabold text-lg leading-none tracking-tight text-[#020626] group-hover:text-[#D22931] transition-colors">
            Hitech Advisors
          </span>
        </Link>

        {/* Simplified Desktop Navigation (Mirrors Original Top-Bar Cadence) */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary Navigation">
          <Link
            to="/"
            className={`sym-link-underline text-sm transition-colors py-1.5 ${
              location.pathname === '/'
                ? 'text-[#D22931] font-semibold'
                : 'text-[#3A4A5A] hover:text-[#020626] font-medium'
            }`}
          >
            Home
          </Link>

          {/* Solutions Dropdown (Includes Solutions, Role Focus & Industries) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setOpenSolutionsPath(location.pathname)}
            onMouseLeave={() => setOpenSolutionsPath(null)}
          >
            <div className="flex items-center gap-1 py-1.5">
              <Link
                to="/solutions"
                onClick={() => setOpenSolutionsPath(null)}
                className={`sym-link-underline text-sm transition-colors ${
                  isSolutionsGroupActive
                    ? 'text-[#D22931] font-semibold'
                    : 'text-[#3A4A5A] hover:text-[#020626] font-medium'
                }`}
              >
                Solutions
              </Link>
              <button
                type="button"
                onClick={() =>
                  setOpenSolutionsPath((prev) =>
                    prev === location.pathname ? null : location.pathname
                  )
                }
                className={`p-0.5 transition-colors cursor-pointer ${
                  isSolutionsGroupActive ? 'text-[#D22931]' : 'text-[#556070] hover:text-[#020626]'
                }`}
                aria-label="Toggle Solutions submenu"
                aria-expanded={isSolutionsOpen}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isSolutionsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {isSolutionsOpen && (
              <div className="absolute left-0 top-full pt-2 w-56 z-50">
                <div className="bg-white rounded-xl border border-[#DCE4EC] shadow-xl py-2 overflow-hidden">
                  {solutionsSubLinks.map((sub) => {
                    const isSubActive = location.pathname === sub.path;
                    return (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setOpenSolutionsPath(null)}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isSubActive
                            ? 'bg-[#EBF2F7] text-[#D22931] font-semibold'
                            : 'text-[#3A4A5A] hover:bg-[#F8FAFC] hover:text-[#020626]'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {primaryLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`sym-link-underline text-sm transition-colors py-1.5 ${
                  isActive
                    ? 'text-[#D22931] font-semibold'
                    : 'text-[#3A4A5A] hover:text-[#020626] font-medium'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Primary CTA */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={onOpenDiscuss}
            className="sym-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#020626] hover:bg-[#D22931] text-white text-xs font-bold uppercase tracking-wider shadow-xs cursor-pointer"
          >
            <span>Discuss a Challenge</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Symmetry-Style 2-Bar Morphing Mobile Menu Button */}
        <button
          type="button"
          onClick={() =>
            setOpenMobilePath((prev) =>
              prev === location.pathname ? null : location.pathname
            )
          }
          className="lg:hidden w-10 h-10 rounded-full border border-[#DCE4EC] bg-white/80 hover:bg-[#EBF2F7] active:scale-[0.88] flex flex-col items-center justify-center gap-[5px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
          aria-label="Toggle Navigation"
          aria-expanded={isMobileOpen}
        >
          <span
            className={`block w-3.5 h-[1.5px] bg-[#020626] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMobileOpen ? 'translate-y-[3.25px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-3.5 h-[1.5px] bg-[#020626] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isMobileOpen ? '-translate-y-[3.25px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Smooth Mobile Dropdown Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white/96 backdrop-blur-[14px] border-t border-[#DCE4EC] px-6 py-5 space-y-4 shadow-lg animate-smooth-fade-in">
          <nav className="flex flex-col space-y-1">
            {mobileLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpenMobilePath(null)}
                  className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#EBF2F7] text-[#D22931] font-semibold'
                      : 'text-[#020626] hover:bg-[#F8FAFC] hover:text-[#D22931]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-[#DCE4EC]">
            <button
              type="button"
              onClick={() => {
                setOpenMobilePath(null);
                onOpenDiscuss();
              }}
              className="w-full py-3 rounded-lg bg-[#020626] hover:bg-[#D22931] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Discuss a Challenge
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
