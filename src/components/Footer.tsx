import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  ArrowUp, 
  Sparkles
} from 'lucide-react';
import { OFFICE_CONTACT, SERVICES } from '../data/siteData';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact-footer" className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs relative overflow-hidden">
      {/* Pre-footer Call to Action Banner */}
      <div className="relative border-b border-slate-900 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-rose-400 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Modernize Your Systems?</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Transform Complex Tech Investments Into Measurable Business Value
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect with our senior architects to evaluate your architecture, scale cloud performance, or embed senior technical teams.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 shadow-xl shadow-rose-950/60 text-sm transition text-center"
              >
                Schedule Strategic Briefing
              </button>
              <a
                href={OFFICE_CONTACT.phoneRaw}
                className="w-full sm:w-auto px-6 py-4 rounded-full font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:text-white text-sm transition text-center"
              >
                Call (425) 284-3315
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-black border border-slate-700/80 flex items-center justify-center">
                <span className="text-white font-black text-lg tracking-tighter">H</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 absolute bottom-1.5 right-1.5"></span>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold tracking-tight text-white">HITECH</span>
                <span className="text-lg font-light tracking-widest text-rose-500 ml-1.5">ADVISORS</span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We are experts at engaging experts on behalf of our clients. A premier Seattle-area technology and talent advisory firm embedding world-class expertise to accelerate digital transformation.
            </p>

            <div className="pt-2 text-slate-400 text-[11px] font-mono">
              PACIFIC NORTHWEST HEADQUARTERS • KIRKLAND, WA
            </div>
          </div>

          {/* Core Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Hitech' },
                { path: '/what-we-do', label: 'Advisory Services' },
                { path: '/ai-assessment', label: 'AI Diagnostic' },
                { path: '/events', label: 'Executive 2030 Events' },
                { path: '/blog', label: 'Research & Blog' },
                { path: '/contact', label: 'Contact Office' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-rose-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Pillar Directory */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Practice Areas
            </div>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/what-we-do/${s.id}`}
                    className="hover:text-rose-400 transition text-left block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/what-we-do"
                  className="hover:text-rose-400 transition text-left block"
                >
                  M&amp;A Divestiture &amp; MDM Separations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Contact &amp; Location
            </div>
            <div className="space-y-2.5">
              <a
                href={OFFICE_CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-white transition"
              >
                <MapPin className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  {OFFICE_CONTACT.addressLine1}
                  <br />
                  {OFFICE_CONTACT.addressLine2}
                </span>
              </a>

              <a
                href={`mailto:${OFFICE_CONTACT.email}`}
                className="flex items-center hover:text-white transition"
              >
                <Mail className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" />
                <span>{OFFICE_CONTACT.email}</span>
              </a>

              <a
                href={OFFICE_CONTACT.phoneRaw}
                className="flex items-center hover:text-white transition"
              >
                <Phone className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0" />
                <span>{OFFICE_CONTACT.phone}</span>
              </a>
            </div>

            <div className="pt-3 flex space-x-3">
              <a
                href={OFFICE_CONTACT.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition"
                aria-label="LinkedIn"
              >
                LinkedIn <ExternalLink className="w-3 h-3 inline ml-1" />
              </a>

              <a
                href={OFFICE_CONTACT.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition"
                aria-label="YouTube"
              >
                YouTube <ExternalLink className="w-3 h-3 inline ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            Copyright © {new Date().getFullYear()} Hitech Advisors. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span>Enterprise Cloud &amp; AI Advisory</span>
            <span>•</span>
            <span>Zero Vendor Lock-In</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center hover:text-white text-rose-400 font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
