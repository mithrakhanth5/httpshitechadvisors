import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HitechLogo } from '../ui/HitechLogo';
import { gsap, SYM_EASE } from '../../lib/gsap';

interface FooterProps {
  onOpenDiscuss: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDiscuss }) => {
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footer.querySelectorAll('.footer-col-anim'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#020626] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1: Brand & Contact Info */}
          <div className="footer-col-anim lg:col-span-2 space-y-6">
            <Link
              to="/"
              className="inline-flex flex-col items-start gap-1.5 group text-decoration-none"
              aria-label="Hitech Advisors Home"
            >
              <HitechLogo
                variant="reverse"
                className="h-12 sm:h-[52px] w-auto transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] origin-left"
              />
              <span className="text-[11px] font-sans font-semibold text-white/60 uppercase tracking-wider">
                Business &amp; Technology Solutions
              </span>
            </Link>

            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              &ldquo;Meaningful problems deserve meaningful solutions.&rdquo; Clarity in the strategic decision, accountability through production delivery.
            </p>

            <div className="space-y-3 pt-2 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FAC344] flex-shrink-0 mt-0.5" />
                <span>608 State Street South, Kirkland, WA 98033</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FAC344] flex-shrink-0" />
                <a href="tel:4252843315" className="hover:text-white transition-colors">
                  (425) 284-3315
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FAC344] flex-shrink-0" />
                <a href="mailto:hello@hitechadvisors.com" className="hover:text-white transition-colors">
                  hello@hitechadvisors.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/hitech-advisors/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/75 hover:text-white hover:border-[#D22931] hover:bg-[#D22931]/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.65 1.65 0 0 0-1.66-1.66Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@hitechadvisors"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/75 hover:text-white hover:border-[#D22931] hover:bg-[#D22931]/20 transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="footer-col-anim space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#FAC344]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link to="/solutions" className="sym-link-underline hover:text-white transition-colors">
                  AI Adoption &amp; Autonomous Agents
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="sym-link-underline hover:text-white transition-colors">
                  Cloud Architecture &amp; Migration
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="sym-link-underline hover:text-white transition-colors">
                  Cybersecurity &amp; Risk Governance
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="sym-link-underline hover:text-white transition-colors">
                  Data &amp; Customer Intelligence
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="sym-link-underline hover:text-white transition-colors">
                  ERP &amp; CRM Business Applications
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="sym-link-underline hover:text-white transition-colors">
                  Product Modernization &amp; Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities & Methodology */}
          <div className="footer-col-anim space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#FAC344]">
              How We Deliver
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link to="/methodology" className="sym-link-underline hover:text-white transition-colors">
                  Strategic Diagnosis
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="sym-link-underline hover:text-white transition-colors">
                  Target Architecture
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="sym-link-underline hover:text-white transition-colors">
                  Hands-On Delivery
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="sym-link-underline hover:text-white transition-colors">
                  Operational Handover
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="sym-link-underline hover:text-white transition-colors">
                  Senior Embedded Practitioners
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="sym-link-underline hover:text-white transition-colors">
                  Zero Handoff Loss Doctrine
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Executive Community & Connect */}
          <div className="footer-col-anim space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#FAC344]">
              Executive Community
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link
                  to="/events"
                  className="sym-link-underline hover:text-white transition-colors text-left inline-flex items-center gap-1 text-[#FAC344]"
                >
                  <span>Seattle Executive Roundtable</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/events" className="sym-link-underline hover:text-white transition-colors">
                  Perspectives &amp; Insights
                </Link>
              </li>
              <li>
                <Link to="/results" className="sym-link-underline hover:text-white transition-colors">
                  Verified Client Case Studies
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenDiscuss}
                  className="sym-link-underline hover:text-white transition-colors text-left cursor-pointer"
                >
                  Discuss an Enterprise Challenge
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; 2026 Hitech Advisors Inc. All rights reserved. Registered Kirkland, WA.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Security &amp; Compliance Disclosures
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
