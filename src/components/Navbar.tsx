import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown,
  ArrowRight,
  Layers,
  Database,
  ShieldCheck,
  Cloud,
  Cpu,
  Compass,
  Code,
  TrendingUp,
  Users
} from 'lucide-react';
import { OFFICE_CONTACT, SOLUTIONS, CAPABILITIES } from '../data/siteData';
import { HitechLogo } from './HitechLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setCapabilitiesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-4 h-4 text-[#D2232A]" />;
      case 'Database': return <Database className="w-4 h-4 text-sky-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-indigo-600" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-purple-600" />;
      default: return <Cpu className="w-4 h-4 text-[#D2232A]" />;
    }
  };

  const getCapIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-4 h-4 text-amber-600" />;
      case 'Code': return <Code className="w-4 h-4 text-blue-600" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case 'Users': return <Users className="w-4 h-4 text-[#D2232A]" />;
      default: return <Code className="w-4 h-4 text-[#D2232A]" />;
    }
  };

  return (
    <>
      {/* Top Advisory Utility Bar */}
      <div className="hidden lg:block bg-[#0B1F33] text-slate-300 text-xs py-2 px-6 tracking-wide border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={OFFICE_CONTACT.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors duration-150"
            >
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#D2232A]" />
              <span>{OFFICE_CONTACT.addressLine1}, {OFFICE_CONTACT.addressLine2}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${OFFICE_CONTACT.email}`}
              className="flex items-center hover:text-white transition-colors duration-150"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-[#D2232A]" />
              <span>{OFFICE_CONTACT.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-5">
            <a 
              href={OFFICE_CONTACT.phoneRaw} 
              className="flex items-center font-medium text-white hover:text-rose-200 transition-colors duration-150"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#D2232A]" />
              <span>{OFFICE_CONTACT.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              Response within 24h
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar (Clean White / Editorial Glass) */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3' 
            : 'bg-white border-b border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center">
            <HitechLogo size="md" variant="light" showDescriptor={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/' 
                  ? 'text-[#0B1F33] bg-slate-100 font-bold' 
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <Link
                to="/what-we-do"
                className="flex items-center space-x-1 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50 transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 ml-0.5 text-slate-400" />
              </Link>

              {solutionsOpen && (
                <div className="absolute left-0 mt-1 w-96 rounded-2xl bg-white border border-slate-200 shadow-xl p-3 z-50">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1 font-bold border-b border-slate-100 mb-1">
                    5 Connected Solution Areas
                  </div>
                  <div className="space-y-1 mt-1">
                    {SOLUTIONS.map((sol) => (
                      <Link
                        key={sol.id}
                        to={`/what-we-do/${sol.slug}`}
                        className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                      >
                        <div className="mt-0.5 p-1.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-[#D2232A]/30">
                          {getSolutionIcon(sol.iconName)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0B1F33] group-hover:text-[#D2232A] transition-colors">
                            {sol.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {sol.subtitle}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Capabilities Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCapabilitiesOpen(true)}
              onMouseLeave={() => setCapabilitiesOpen(false)}
            >
              <Link
                to="/capabilities"
                className={`flex items-center space-x-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname.startsWith('/capabilities')
                    ? 'text-[#0B1F33] bg-slate-100 font-bold'
                    : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
                }`}
              >
                <span>Capabilities</span>
                <ChevronDown className="w-4 h-4 ml-0.5 text-slate-400" />
              </Link>

              {capabilitiesOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl p-3 z-50">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1 font-bold border-b border-slate-100 mb-1">
                    4 Delivery Capabilities
                  </div>
                  <div className="space-y-1 mt-1">
                    {CAPABILITIES.map((cap) => (
                      <Link
                        key={cap.id}
                        to={`/capabilities/${cap.slug}`}
                        onClick={() => setCapabilitiesOpen(false)}
                        className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                      >
                        <div className="mt-0.5 p-1.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-[#D2232A]/30">
                          {getCapIcon(cap.iconName)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0B1F33] group-hover:text-[#D2232A] transition-colors">
                            {cap.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {cap.line}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/ai-assessment"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname.startsWith('/ai-assessment') 
                  ? 'text-[#0B1F33] bg-slate-100 font-bold' 
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              AI Diagnostic
            </Link>

            <Link
              to="/events"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname.startsWith('/events') 
                  ? 'text-[#0B1F33] bg-slate-100 font-bold' 
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              Events
            </Link>

            <Link
              to="/blog"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname.startsWith('/blog') 
                  ? 'text-[#0B1F33] bg-slate-100 font-bold' 
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/about"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname.startsWith('/about') 
                  ? 'text-[#0B1F33] bg-slate-100 font-bold' 
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname.startsWith('/contact') 
                  ? 'text-[#0B1F33] bg-slate-100 font-bold' 
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#D2232A] hover:bg-[#B71C22] shadow-md shadow-red-900/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Discuss a Challenge</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0B1F33] hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6 bg-white border-b border-slate-200 space-y-2 shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-semibold text-[#0B1F33] hover:bg-slate-100"
            >
              Home
            </Link>
            <Link
              to="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-100"
            >
              Solutions
            </Link>
            <Link
              to="/capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-100"
            >
              Capabilities
            </Link>
            <Link
              to="/ai-assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-100"
            >
              AI Diagnostic
            </Link>
            <Link
              to="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-100"
            >
              Executive 2030 Events
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-100"
            >
              Blog &amp; Insights
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-100"
            >
              About Hitech
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-100"
            >
              Contact
            </Link>
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-full font-bold text-white bg-[#D2232A] hover:bg-[#B71C22] text-center text-sm shadow-md"
              >
                Discuss a Challenge
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
