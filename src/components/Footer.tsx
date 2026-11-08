import React, { useRef, useEffect } from 'react';
import { HitechLogo } from './ui/HitechLogo';
import { gsap, SYMMETRY_EASE } from '../lib/gsap';

export const Footer: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Logo and legal
      gsap.fromTo(
        root.querySelector('.Footer_logo__xTMON'),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        root.querySelector('.Footer_legal__TXXDf'),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Links columns
      gsap.fromTo(
        root.querySelectorAll('.Footer_head__AI5jX, .Footer_list__pM3wM li'),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.8,
          delay: 0.15,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Giant Typography letters strip
      gsap.fromTo(
        root.querySelectorAll('.Footer_letters__TsG6I .letter-block, .Footer_letters__TsG6I img'),
        { y: 192 },
        {
          y: 0,
          stagger: 0.05,
          duration: 1.1,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root.querySelector('.Footer_strip__anWrT'),
            start: 'top 92%',
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef as any}>
      <footer className="Footer_root__OhOLU">
        <div className="Footer_block__KZhr3">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <a
              href="#top"
              className="Footer_logo__xTMON"
              aria-label="Hitech Advisors — Home"
              style={{
                opacity: 0,
                transform: 'translateY(16px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <HitechLogo className="w-8 h-8" />
              <span
                style={{
                  fontFamily: 'Google Sans, var(--font-display), sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  letterSpacing: '-0.02em',
                  color: '#020626',
                }}
              >
                Hitech Advisors
              </span>
            </a>
            <p
              style={{
                margin: '4px 0 0',
                fontSize: '13px',
                lineHeight: 1.5,
                color: '#3A4A5A',
                fontStyle: 'italic',
                maxWidth: '300px',
              }}
            >
              Meaningful problems deserve meaningful solutions.
            </p>
          </div>

          <p className="Footer_legal__TXXDf" style={{ opacity: 0, transform: 'translateY(16px)' }}>
            &copy; 2026 Hitech Advisors LLC. Kirkland, WA 98033. All rights reserved.
          </p>

          <nav className="Footer_columns__bByM_" aria-label="Footer">
            <div className="Footer_column__c_FW9">
              <p
                id="footer-solutions"
                className="Footer_head__AI5jX"
                style={{ opacity: 0, transform: 'translateY(16px)' }}
              >
                Solutions
              </p>
              <ul className="Footer_list__pM3wM" aria-labelledby="footer-solutions">
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="#product" className="Footer_link__vN2uz">Enterprise Architecture</a>
                </li>
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="#taskList" className="Footer_link__vN2uz">Capabilities &amp; Disciplines</a>
                </li>
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="#results" className="Footer_link__vN2uz">Client Case Results</a>
                </li>
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="#roundtable" className="Footer_link__vN2uz">Executive Roundtable</a>
                </li>
              </ul>
            </div>

            <div className="Footer_column__c_FW9">
              <p
                id="footer-capabilities"
                className="Footer_head__AI5jX"
                style={{ opacity: 0, transform: 'translateY(16px)' }}
              >
                Capabilities
              </p>
              <ul className="Footer_list__pM3wM" aria-labelledby="footer-capabilities">
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="#product" className="Footer_link__vN2uz">Platform Architecture</a>
                </li>
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="#integrations" className="Footer_link__vN2uz">Tool Integrations</a>
                </li>
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="#security" className="Footer_link__vN2uz">SOC 2 &amp; Compliance</a>
                </li>
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="#methodology" className="Footer_link__vN2uz">Engagement Model</a>
                </li>
              </ul>
            </div>

            <div className="Footer_column__c_FW9">
              <p
                id="footer-contact"
                className="Footer_head__AI5jX"
                style={{ opacity: 0, transform: 'translateY(16px)' }}
              >
                Headquarters
              </p>
              <ul className="Footer_list__pM3wM" aria-labelledby="footer-contact">
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <span className="Footer_link__vN2uz" style={{ cursor: 'default' }}>Kirkland, WA 98033</span>
                </li>
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="mailto:info@hitechadvisors.com" className="Footer_link__vN2uz">info@hitechadvisors.com</a>
                </li>
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="Footer_link__vN2uz">LinkedIn</a>
                </li>
                <li style={{ opacity: 0, transform: 'translateY(16px)' }}>
                  <a href="/legal/privacy-policy" className="Footer_link__vN2uz">Privacy &amp; Terms</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="Footer_strip__anWrT" aria-hidden="true" style={{ '--strip-x': '-44px', '--strip-y': '276px' } as React.CSSProperties}>
          <div
            className="Footer_letters__TsG6I"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
              maxWidth: '1440px',
              padding: '0 32px',
              margin: '0 auto',
            }}
          >
            {['H', 'I', 'T', 'E', 'C', 'H'].map((char, i) => (
              <span
                key={i}
                className="letter-block"
                style={{
                  fontFamily: 'Google Sans, var(--font-display), sans-serif',
                  fontSize: 'clamp(96px, 15vw, 210px)',
                  fontWeight: 800,
                  lineHeight: 0.88,
                  color: '#D9E0E6',
                  letterSpacing: '-0.04em',
                  display: 'inline-block',
                  willChange: 'transform',
                  transform: 'translateY(192px)',
                  userSelect: 'none',
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
