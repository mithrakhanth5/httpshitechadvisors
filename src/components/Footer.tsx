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
import { OFFICE_CONTACT, SOLUTIONS, CAPABILITIES } from '../data/siteData';
import { HitechLogo } from './HitechLogo';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact-footer" className="bg-[#06121E] border-t border-slate-900 text-slate-400 text-xs relative overflow-hidden">
      {/* Pre-footer Call to Action Banner (Final CTA Band) */}
      <div className="relative border-b border-slate-900 bg-gradient-to-r from-slate-950 via-[#0B1F33] to-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-slate-900/80 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden backdrop-blur-md">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-rose-400 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Steps</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                What are you trying to solve?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Share your challenge. A senior consultant will come back to you within 24 hours — with questions worth answering, not a sales pitch.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 shadow-xl shadow-rose-950/60 text-sm transition text-center"
              >
                Discuss a Challenge
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
            <Link to="/" className="inline-block">
              <HitechLogo size="md" variant="dark" />
            </Link>

            {/* Brand Signature Line from Section 2 */}
            <p className="text-rose-400 text-xs font-serif italic">
              "Meaningful problems deserve meaningful solutions."
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Hitech Advisors is a business and technology solutions firm that connects strategy to execution. Headquartered in Kirkland, WA, we advise, architect and deliver measurable enterprise results.
            </p>

            <div className="pt-2 text-slate-400 text-[11px] font-mono">
              PACIFIC NORTHWEST HEADQUARTERS • KIRKLAND, WA
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Solutions
            </div>
            <ul className="space-y-2">
              {SOLUTIONS.map((sol) => (
                <li key={sol.id}>
                  <Link
                    to={`/what-we-do/${sol.slug}`}
                    className="hover:text-white transition-colors duration-150 flex items-center group text-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-rose-500 mr-2 transition-colors"></span>
                    <span>{sol.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Capabilities
            </div>
            <ul className="space-y-2">
              {CAPABILITIES.map((cap) => (
                <li key={cap.id}>
                  <Link
                    to={`/capabilities/${cap.slug}`}
                    className="hover:text-white transition-colors duration-150 flex items-center group text-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#D2232A] mr-2 transition-colors"></span>
                    <span>{cap.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-assessment"
                  className="hover:text-white transition-colors duration-150 flex items-center group text-xs text-rose-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2"></span>
                  <span>AI Maturity Diagnostic</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-white transition-colors duration-150 flex items-center group text-xs text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#D2232A] mr-2 transition-colors"></span>
                  <span>Executive Events</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-white transition-colors duration-150 flex items-center group text-xs text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#D2232A] mr-2 transition-colors"></span>
                  <span>Blog &amp; Insights</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Headquarters
            </div>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={OFFICE_CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>
                  {OFFICE_CONTACT.addressLine1}<br />
                  {OFFICE_CONTACT.addressLine2}
                </span>
              </a>

              <a
                href={OFFICE_CONTACT.phoneRaw}
                className="flex items-center hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-rose-500 flex-shrink-0" />
                <span>{OFFICE_CONTACT.phone}</span>
              </a>

              <a
                href={`mailto:${OFFICE_CONTACT.email}`}
                className="flex items-center hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-rose-500 flex-shrink-0" />
                <span>{OFFICE_CONTACT.email}</span>
              </a>

              <div className="pt-2">
                <a
                  href={OFFICE_CONTACT.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-rose-400 hover:text-rose-300 transition"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Hitech Advisors. All rights reserved. • Strategy That Connects to Execution.
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors ml-4"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
