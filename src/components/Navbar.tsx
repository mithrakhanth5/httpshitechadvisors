import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  ExternalLink,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import { OFFICE_CONTACT, SERVICES } from '../data/siteData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { 
      path: '/what-we-do', 
      label: 'Services',
      hasDropdown: true,
    },
    { path: '/ai-assessment', label: 'AI Diagnostic' },
    { path: '/events', label: 'Events' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isCurrent = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Advisory Utility Bar */}
      <div className="hidden lg:block bg-slate-950 border-b border-slate-800/80 text-xs py-2 px-6 tracking-wide text-slate-400">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={OFFICE_CONTACT.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors duration-200"
            >
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-rose-500" />
              <span>{OFFICE_CONTACT.addressLine1}, {OFFICE_CONTACT.addressLine2}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`mailto:${OFFICE_CONTACT.email}`}
              className="flex items-center hover:text-white transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-rose-500" />
              <span>{OFFICE_CONTACT.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-5">
            <a 
              href={OFFICE_CONTACT.phoneRaw} 
              className="flex items-center font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-rose-500" />
              <span>{OFFICE_CONTACT.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={OFFICE_CONTACT.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white flex items-center transition-colors duration-200"
            >
              LinkedIn <ExternalLink className="w-2.5 h-2.5 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3.5' 
            : 'bg-slate-950/70 backdrop-blur-md py-4 border-b border-slate-900/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/"
              className="flex items-center space-x-3 text-left focus:outline-none group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-black border border-slate-700/80 flex items-center justify-center shadow-lg relative overflow-hidden group-hover:border-rose-500/50 transition-all">
                <span className="text-white font-black text-xl tracking-tighter">H</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 absolute bottom-2 right-2"></span>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-xl font-bold tracking-tight text-white group-hover:text-slate-100 transition">
                    HITECH
                  </span>
                  <span className="text-xl font-light tracking-widest text-rose-500 ml-1.5">
                    ADVISORS
                  </span>
                </div>
                <div className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                  AI &amp; Tech Consulting
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-slate-900/70 border border-slate-800/80 p-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => {
                const active = isCurrent(link.path);

                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.path} 
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        to="/what-we-do"
                        className={`flex items-center space-x-1 px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                          active 
                            ? 'bg-rose-600 text-white shadow-md shadow-rose-950/50' 
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 p-2 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl space-y-1 animate-fadeIn">
                          <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                            Practice Areas
                          </div>
                          {SERVICES.map((s) => (
                            <Link
                              key={s.id}
                              to={`/what-we-do/${s.id}`}
                              className="flex flex-col px-3 py-2 rounded-xl text-left hover:bg-slate-900 transition text-xs group"
                            >
                              <span className="font-semibold text-white group-hover:text-rose-400 transition">
                                {s.title}
                              </span>
                              <span className="text-[11px] text-slate-400 truncate">
                                {s.subtitle}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                      active 
                        ? 'bg-rose-600 text-white shadow-md shadow-rose-950/50' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Primary Action Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={onOpenConsultation}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs xl:text-sm font-semibold text-white transition-all bg-gradient-to-r from-rose-600 via-rose-700 to-red-800 rounded-full hover:from-rose-500 hover:to-red-700 shadow-lg shadow-rose-900/40 hover:shadow-rose-700/50 hover:scale-[1.02] active:scale-[0.98] border border-rose-400/30 group"
              >
                <span>Talk to an Expert</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={onOpenConsultation}
                className="px-3 py-1.5 text-xs font-semibold bg-rose-600 text-white rounded-lg"
              >
                Book Call
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-slate-800/80 px-4 pt-3 pb-6 space-y-2 mt-3 backdrop-blur-2xl">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-left text-sm font-medium transition ${
                      isCurrent(link.path)
                        ? 'bg-rose-950/40 text-rose-400 border border-rose-900/50'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 pr-2 py-1 space-y-1">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          to={`/what-we-do/${s.id}`}
                          className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white rounded-md"
                        >
                          • {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 mt-2 space-y-3">
              <button
                onClick={onOpenConsultation}
                className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-rose-600 to-red-700 text-white font-semibold rounded-xl shadow-lg"
              >
                <span>Talk to an Expert</span>
              </button>
              <div className="text-center text-xs text-slate-400 flex flex-col space-y-1">
                <span>{OFFICE_CONTACT.phone}</span>
                <span>{OFFICE_CONTACT.email}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
