import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { MagneticButton } from '../ui/MagneticButton';
import { HitechLogo } from '../ui/HitechLogo';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';

interface NavbarProps {
  onOpenDiscuss: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiscuss }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
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
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Role Focus', path: '/role-focus' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Methodology', path: '/methodology' },
    { label: 'Results', path: '/results' },
    { label: 'Industries', path: '/industries' },
    { label: 'Events & Insights', path: '/events' },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md shadow-sm border-b border-[#DCE4EC] py-3.5'
          : 'bg-white/85 backdrop-blur-sm py-5'
      }`}
    >
      {/* Interactive Global Scroll Reading Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-transparent overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#D22931] via-[#FAC344] to-[#D22931] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Brand Logo Monogram */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group text-decoration-none"
          aria-label="Hitech Advisors — Home"
        >
          <HitechLogo className="w-9 h-9 group-hover:scale-105 transition-transform duration-300" />
          <span className="font-display font-extrabold text-lg leading-none tracking-tight text-[#020626] group-hover:text-[#D22931] transition-colors">
            Hitech Advisors
          </span>
        </Link>

        {/* Desktop Nav Links with Synchronized Red Locked Indicator */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium transition-colors relative py-2 px-1 ${
                  isActive ? 'text-[#020626] font-bold' : 'text-[#3A4A5A] hover:text-[#D22931]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-red-locked-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D22931] rounded-full shadow-[0_2px_8px_rgba(210,41,49,0.5)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            );
          })}
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
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`text-base font-semibold transition-colors py-2 px-3 rounded-xl flex items-center justify-between ${
                    isActive
                      ? 'bg-[#D22931]/10 text-[#D22931] border-l-4 border-[#D22931]'
                      : 'text-[#020626] hover:text-[#D22931] hover:bg-[#EBF2F7]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#D22931]" />}
                </Link>
              );
            })}
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
