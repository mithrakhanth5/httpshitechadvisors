import React, { useRef, useEffect, useState } from 'react';
import { gsap, SYMMETRY_EASE } from '../lib/gsap';

export const MeetSym: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [isParted, setIsParted] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const card = cardRef.current;
    if (!root || !card) return;

    const ctx = gsap.context(() => {
      // Reveal timeline triggered on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 80%',
          once: true,
        },
      });

      tl.fromTo(
        card,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, ease: SYMMETRY_EASE }
      )
        .fromTo(
          card.querySelectorAll('.MeetSym_title___2Qq6 span span, .MeetSym_headline__7Si5P span span'),
          { yPercent: 108 },
          { yPercent: 0, duration: 0.8, stagger: 0.08, ease: SYMMETRY_EASE },
          '-=0.6'
        )
        .fromTo(
          card.querySelector('.Integrations_chip__1zeoZ'),
          { opacity: 0, scale: 0.82 },
          { opacity: 1, scale: 1, duration: 0.7, ease: SYMMETRY_EASE },
          '-=0.7'
        )
        .fromTo(
          card.querySelectorAll('.Integrations_leaf__QcULq'),
          { opacity: 0 },
          { opacity: 1, duration: 0.6, stagger: 0.05, ease: SYMMETRY_EASE },
          '-=0.5'
        )
        .fromTo(
          card.querySelector('.MeetSym_body__R6V5H'),
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, ease: SYMMETRY_EASE },
          '-=0.5'
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="MeetSym_root__nYXqL" aria-labelledby="meet-sym-title">
      <div
        ref={cardRef}
        className="MeetSym_card__PTiwb"
        onMouseEnter={() => setIsParted(true)}
        onMouseLeave={() => setIsParted(false)}
      >
        <div className="MeetSym_copy__W_C9Y">
          <h2 id="meet-sym-title" className="MeetSym_title___2Qq6">
            <span className="MeetSym_first__YJPBX">
              <span className="MeetSym_meet__0Ov3x">
                <span style={{ display: 'block', willChange: 'transform' }}>Meet</span>
              </span>{' '}
              <span className="Integrations_chip__1zeoZ">
                <span
                  className="Integrations_leaf__QcULq"
                  aria-hidden="true"
                  style={{ transform: isParted ? 'translateX(-4px) translateY(-4px)' : 'none', transition: 'transform 0.4s ease' }}
                >
                  <span className="Integrations_leaf__QcULq">
                    <img
                      src="/art/integrations/mark-leaf-tl.svg"
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      decoding="async"
                      style={{ position: 'absolute', maxWidth: 'none', left: '8px', top: '6px', width: '24px', height: '24px' }}
                    />
                  </span>
                </span>
                <span
                  className="Integrations_leaf__QcULq"
                  aria-hidden="true"
                  style={{ transform: isParted ? 'translateX(-4px) translateY(4px)' : 'none', transition: 'transform 0.4s ease' }}
                >
                  <span className="Integrations_leaf__QcULq">
                    <img
                      src="/art/integrations/mark-dot-bl.svg"
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      decoding="async"
                      style={{ position: 'absolute', maxWidth: 'none', left: '8px', top: '23px', width: '23px', height: '23px' }}
                    />
                  </span>
                </span>
                <span
                  className="Integrations_leaf__QcULq"
                  aria-hidden="true"
                  style={{ transform: isParted ? 'translateX(4px) translateY(-4px)' : 'none', transition: 'transform 0.4s ease' }}
                >
                  <span className="Integrations_leaf__QcULq">
                    <img
                      src="/art/integrations/mark-dot-tr.svg"
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      decoding="async"
                      style={{ position: 'absolute', maxWidth: 'none', left: '25px', top: '6px', width: '23px', height: '23px' }}
                    />
                  </span>
                </span>
                <span
                  className="Integrations_leaf__QcULq"
                  aria-hidden="true"
                  style={{ transform: isParted ? 'translateX(4px) translateY(4px)' : 'none', transition: 'transform 0.4s ease' }}
                >
                  <span className="Integrations_leaf__QcULq">
                    <img
                      src="/art/integrations/mark-leaf-br.svg"
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      decoding="async"
                      style={{ position: 'absolute', maxWidth: 'none', left: '24px', top: '22px', width: '24px', height: '24px' }}
                    />
                  </span>
                </span>
                <span className="Integrations_lineClip__By_fn Integrations_sym__qDjJ_">
                  <span style={{ display: 'block', willChange: 'transform' }}>Hitech</span>
                </span>
              </span>
            </span>
          </h2>

          <div className="MeetSym_headline__7Si5P" style={{ textAlign: 'left', marginTop: '16px', marginBottom: '14px' }}>
            <span style={{ display: 'block', overflow: 'clip', overflowClipMargin: '0.12em' }}>
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#020626] leading-tight" style={{ display: 'block', willChange: 'transform' }}>
                AI Provides the Baseline.{' '}
                <span className="relative inline-block text-[#D22931]">
                  We Provide the Delta.
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#D22931]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </span>
            </span>
          </div>

          <p className="font-medium text-[#020626] text-base mb-3">
            One partner from decision to delivery.
          </p>

          <p className="MeetSym_body__R6V5H" style={{ color: '#3A4A5A', fontSize: '16px', lineHeight: '1.6' }}>
            Most firms either advise or implement. We do both, and we stay accountable for both. We start with your business problem, recommend the right combination of strategy, systems, data, security, engineering and AI, and then deliver it — with senior leaders directly on the work.
          </p>
        </div>

        {/* 4 Quadrant Interactive Sym Mark */}
        <div
          ref={stageRef}
          className="MeetSym_stage__0hnvm"
          aria-hidden="true"
          data-parted={isParted ? '' : undefined}
        >
          <div className="MeetSym_mark__V9if1">
            {/* Top-Left Piece */}
            <div
              className="MeetSym_piece__o26uF"
              style={{
                left: '-12px',
                top: '-12px',
                width: '244px',
                height: '244px',
                zIndex: 3,
                '--dx': -1,
                '--dy': -1,
                transform: isParted ? 'translate(-8px, -8px)' : 'none',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              } as React.CSSProperties}
            >
              <div className="MeetSym_fill__2_pcU" style={{ transformOrigin: '122px 122px', opacity: 1, transform: 'none' }}>
                <div className="MeetSym_fill__2_pcU" data-breath="true">
                  <img
                    src="/art/meet-sym/mark-tl.svg"
                    srcSet="/art/meet-sym/mark-tl.1x.svg 1x, /art/meet-sym/mark-tl.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '244px', height: '244px' }}
                  />
                </div>
              </div>
            </div>

            {/* Top-Right Piece */}
            <div
              className="MeetSym_piece__o26uF"
              style={{
                left: '223px',
                top: '-12px',
                width: '230px',
                height: '229px',
                zIndex: 4,
                '--dx': 1,
                '--dy': -1,
                transform: isParted ? 'translate(8px, -8px)' : 'none',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              } as React.CSSProperties}
            >
              <div className="MeetSym_fill__2_pcU" style={{ transformOrigin: '114.86px 114.14px', opacity: 1, transform: 'none' }}>
                <div className="MeetSym_fill__2_pcU" data-breath="true">
                  <img
                    src="/art/meet-sym/mark-tr.svg"
                    srcSet="/art/meet-sym/mark-tr.1x.svg 1x, /art/meet-sym/mark-tr.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '230px', height: '229px' }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom-Right Piece */}
            <div
              className="MeetSym_piece__o26uF"
              style={{
                left: '208px',
                top: '208px',
                width: '244px',
                height: '244px',
                zIndex: 2,
                '--dx': 1,
                '--dy': 1,
                transform: isParted ? 'translate(8px, 8px)' : 'none',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              } as React.CSSProperties}
            >
              <div className="MeetSym_fill__2_pcU" style={{ transformOrigin: '122px 122px', opacity: 1, transform: 'none' }}>
                <div className="MeetSym_fill__2_pcU" data-breath="true">
                  <img
                    src="/art/meet-sym/mark-br.svg"
                    srcSet="/art/meet-sym/mark-br.1x.svg 1x, /art/meet-sym/mark-br.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '244px', height: '244px' }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom-Left Piece */}
            <div
              className="MeetSym_piece__o26uF"
              style={{
                left: '-12px',
                top: '223px',
                width: '229px',
                height: '229px',
                zIndex: 1,
                '--dx': -1,
                '--dy': 1,
                transform: isParted ? 'translate(-8px, 8px)' : 'none',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              } as React.CSSProperties}
            >
              <div className="MeetSym_fill__2_pcU" style={{ transformOrigin: '114.14px 114.86px', opacity: 1, transform: 'none' }}>
                <div className="MeetSym_fill__2_pcU" data-breath="true">
                  <img
                    src="/art/meet-sym/mark-bl.svg"
                    srcSet="/art/meet-sym/mark-bl.1x.svg 1x, /art/meet-sym/mark-bl.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '229px', height: '229px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
