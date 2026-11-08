import React, { useState, useEffect } from 'react';
import { HitechLogo } from './ui/HitechLogo';

interface NavbarProps {
  onOpenEarlyAccess: () => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEarlyAccess, onOpenDemo }) => {
  const [isStuck, setIsStuck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Executive Announcement Bar */}
      <aside
        role="region"
        aria-label="Executive Announcement"
        className="w-full bg-[#020626] text-white border-b border-white/10 text-xs py-2 px-4 relative z-50 flex items-center justify-center gap-3 tracking-wide"
      >
        <span className="flex items-center gap-1.5 font-semibold text-[#FAC344] uppercase tracking-wider text-[11px]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D22931] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D22931]"></span>
          </span>
          Executive Roundtable
        </span>
        <span className="hidden sm:inline text-white/80">
          Production AI &amp; Governance in the Enterprise &middot; Seattle, WA &middot; Spring 2026
        </span>
        <button
          onClick={onOpenDemo}
          className="inline-flex items-center gap-1 text-[#FAC344] hover:text-white font-medium underline underline-offset-4 decoration-[#D22931] transition-colors ml-1 cursor-pointer"
        >
          Request Invitation &rarr;
        </button>
      </aside>

      <header
        className="Nav_wrap__x7IrQ"
        style={{ '--at': '0.1s' } as React.CSSProperties}
        data-stuck={isStuck ? '' : undefined}
        data-open={isOpen ? '' : undefined}
      >
        <div className="Nav_scrim__C_l6P" aria-hidden="true" onClick={() => setIsOpen(false)} />
        <div className="Nav_sheet__jW9oB" aria-hidden="true" />
        <div className="Nav_container__GxdI0" style={{ maxWidth: '1380px' }}>
          <a href="#top" className="Nav_logo__kjzRQ flex items-center gap-3 group text-decoration-none" aria-label="Hitech Advisors — Home">
            <HitechLogo className="w-9 h-9 group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base leading-tight tracking-tight text-[#020626] group-hover:text-[#D22931] transition-colors">
                Hitech Advisors
              </span>
              <span className="text-[10px] font-sans font-semibold text-[#556070] uppercase tracking-wider">
                Business &amp; Technology Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav Links without underline */}
          <nav className="Nav_links__EDUcS" aria-label="Primary" style={{ left: '270px', gap: '22px' }}>
            <a href="#product" className="Nav_link__ceKep no-underline hover:text-[#D22931] transition-colors" style={{ width: 'auto', textDecoration: 'none', padding: '0 4px' }}>
              Solutions
            </a>
            <a href="#taskList" className="Nav_link__ceKep no-underline hover:text-[#D22931] transition-colors" style={{ width: 'auto', textDecoration: 'none', padding: '0 4px' }}>
              Capabilities
            </a>
            <a href="#doesTheWork" className="Nav_link__ceKep no-underline hover:text-[#D22931] transition-colors" style={{ width: 'auto', textDecoration: 'none', padding: '0 4px' }}>
              How We Work
            </a>
            <a href="#results" className="Nav_link__ceKep no-underline hover:text-[#D22931] transition-colors" style={{ width: 'auto', textDecoration: 'none', padding: '0 4px' }}>
              Client Results
            </a>
            <a href="#integrations" className="Nav_link__ceKep no-underline hover:text-[#D22931] transition-colors" style={{ width: 'auto', textDecoration: 'none', padding: '0 4px' }}>
              Ecosystem
            </a>
            <a href="#roundtable" className="Nav_link__ceKep no-underline hover:text-[#D22931] transition-colors" style={{ width: 'auto', textDecoration: 'none', padding: '0 4px' }}>
              Roundtable
            </a>
            <a href="#security" className="Nav_link__ceKep no-underline hover:text-[#D22931] transition-colors" style={{ width: 'auto', textDecoration: 'none', padding: '0 4px' }}>
              Security
            </a>
          </nav>

          {/* Book Briefing Button */}
          <div className="Nav_demo__kw4TF" style={{ left: '1110px' }}>
            <button
              type="button"
              onClick={onOpenDemo}
              className="Button_base__xcPDI Button_sm__pnQzd Button_quiet__0qDO_ Nav_button__db23R hover:text-[#D22931] transition-colors"
              tabIndex={0}
            >
              <span className="Button_wash__NOE1m" aria-hidden="true" />
              <span className="Button_label__hCLAL font-medium">Book a briefing</span>
            </button>
          </div>

          {/* Discuss a Challenge Button */}
          <div className="Nav_access__dAByA" style={{ left: '1240px' }}>
            <button
              type="button"
              onClick={onOpenEarlyAccess}
              className="Button_base__xcPDI Button_md__ktIWF Button_paper__Rf6vb Nav_button__db23R shadow-sm hover:shadow-md transition-all"
              tabIndex={0}
              style={{ backgroundColor: '#D22931', color: '#FFFFFF', borderColor: '#D22931', width: '164px' }}
            >
              <span className="Button_wash__NOE1m" aria-hidden="true" />
              <span className="Button_label__hCLAL font-semibold tracking-wide">Discuss a Challenge</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="Nav_menu__hGsiS"
            aria-label="Menu"
            aria-expanded={isOpen}
            aria-controls="nav-sheet"
          >
            <span className="Nav_bars__ELmRx" aria-hidden="true">
              <span className="Nav_bar__iZRhu" />
              <span className="Nav_bar__iZRhu" />
            </span>
          </button>
        </div>

        {/* Mobile Drawer Panel */}
        <div
          id="nav-sheet"
          className="Nav_panel__r6Kvw"
          style={{ clipPath: isOpen ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }}
        >
          <nav aria-label="Primary">
            <ul className="Nav_list__dEDIi">
              <li>
                <a href="#product" onClick={() => setIsOpen(false)} className="Nav_item__G6Pss no-underline">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#taskList" onClick={() => setIsOpen(false)} className="Nav_item__G6Pss no-underline">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#doesTheWork" onClick={() => setIsOpen(false)} className="Nav_item__G6Pss no-underline">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#results" onClick={() => setIsOpen(false)} className="Nav_item__G6Pss no-underline">
                  Client Results
                </a>
              </li>
              <li>
                <a href="#integrations" onClick={() => setIsOpen(false)} className="Nav_item__G6Pss no-underline">
                  Ecosystem
                </a>
              </li>
              <li>
                <a href="#roundtable" onClick={() => setIsOpen(false)} className="Nav_item__G6Pss no-underline">
                  Roundtable
                </a>
              </li>
              <li>
                <a href="#security" onClick={() => setIsOpen(false)} className="Nav_item__G6Pss no-underline">
                  Security
                </a>
              </li>
            </ul>
          </nav>
          <div className="Nav_sheetCta__YM_wv">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenDemo();
              }}
              className="Button_base__xcPDI Button_lg__s7W56 Button_quiet__0qDO_ Nav_sheetButton__CEB4p"
              tabIndex={0}
              style={{ width: '100%', marginBottom: '10px' }}
            >
              <span className="Button_wash__NOE1m" aria-hidden="true" />
              <span className="Button_label__hCLAL">Book an Executive Briefing</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenEarlyAccess();
              }}
              className="Button_base__xcPDI Button_lg__s7W56 Button_paper__Rf6vb Nav_sheetButton__CEB4p"
              tabIndex={0}
              style={{ width: '100%', backgroundColor: '#D22931', color: '#FFFFFF' }}
            >
              <span className="Button_wash__NOE1m" aria-hidden="true" />
              <span className="Button_label__hCLAL font-semibold">Discuss a Challenge</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
