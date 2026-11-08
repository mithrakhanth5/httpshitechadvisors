import { Mail, Phone, MapPin } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface FooterProps {
  onOpenContact: () => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { meta, contactInfo, solutions, capabilities } = hitechContent;

  return (
    <footer id="footer" className="bg-white border-t border-[#D9E0E6] pt-16 pb-12 text-[#3A4A5A]">
      <div className="container-custom">
        {/* Top Section: Brand Line & Description */}
        <div className="pb-12 border-b border-[#D9E0E6] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#0B1F33] text-white font-serif font-bold text-lg">
                H
              </div>
              <span className="font-serif font-bold text-xl text-[#0B1F33]">
                {meta.name}
              </span>
            </div>
            <p className="font-serif italic text-base text-[#0B1F33]">
              &ldquo;{meta.brandLine}&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#D9E0E6] flex items-center justify-center text-[#0B1F33] hover:text-[#0B7A7C] hover:border-[#0B7A7C] transition-colors"
              aria-label="Hitech Advisors LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.47a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
            </a>
            <a
              href={contactInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#D9E0E6] flex items-center justify-center text-[#0B1F33] hover:text-[#0B7A7C] hover:border-[#0B7A7C] transition-colors"
              aria-label="Hitech Advisors YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Section: Columns & Contact Information */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Solutions */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
              Solutions
            </div>
            <ul className="space-y-2.5 text-sm">
              {solutions.map((sol) => (
                <li key={sol.id}>
                  <a href="#solutions" className="hover:text-[#0B7A7C] transition-colors">
                    {sol.title}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a href="#solutions" className="font-semibold text-[#0B7A7C] hover:underline">
                  All Solutions →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Capabilities */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-sm">
              {capabilities.cards.map((cap) => (
                <li key={cap.title}>
                  <a href="#capabilities" className="hover:text-[#0B7A7C] transition-colors">
                    {cap.title}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a href="#how-it-works" className="font-semibold text-[#0B7A7C] hover:underline">
                  How We Work →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
              Company
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#proposition" className="hover:text-[#0B7A7C] transition-colors">
                  About Hitech
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#0B7A7C] transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-[#0B7A7C] transition-colors">
                  Client Results
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#0B7A7C] transition-colors">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#events-and-insights" className="hover:text-[#0B7A7C] transition-colors">
                  Insights &amp; Articles
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#0B7A7C] transition-colors cursor-pointer text-left font-semibold text-[#0B7A7C]"
                >
                  Discuss a Challenge →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
              Headquarters
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0B7A7C] flex-shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0B7A7C] flex-shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[#0B7A7C] transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0B7A7C] flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-[#0B7A7C] transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 border-t border-[#D9E0E6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3A4A5A]/80">
          <div>
            &copy; {CURRENT_YEAR} Hitech Advisors. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#top" className="hover:text-[#0B7A7C] transition-colors">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-[#0B7A7C] transition-colors">
              Terms of Use
            </a>
            <a href="#top" className="hover:text-[#0B7A7C] transition-colors">
              Cookie Policy
            </a>
            <a href="#top" className="hover:text-[#0B7A7C] transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
