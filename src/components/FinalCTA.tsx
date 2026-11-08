import React, { useRef, useEffect } from 'react';
import { gsap, SYMMETRY_EASE } from '../lib/gsap';

interface FinalCTAProps {
  onOpenEarlyAccess: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEarlyAccess }) => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        root.querySelectorAll('.FinalCTA_title__qXtmX span span'),
        { yPercent: 108 },
        {
          yPercent: 0,
          duration: 0.85,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Body copy & Action CTA
      gsap.fromTo(
        root.querySelector('.FinalCTA_body__Py0Ud'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        root.querySelector('.FinalCTA_action__zureE'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.25,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Ground expansion line
      gsap.fromTo(
        root.querySelector('.FinalCTA_ground__huZR4'),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef as any}>
      <section className="FinalCTA_root___qAV_" style={{ '--win-t': '1100', '--win-m': '860', '--win-a': '430' } as React.CSSProperties}>
        <div className="FinalCTA_land__NXPWJ">
          <div className="FinalCTA_frame__h_J5a">
            <div className="FinalCTA_scape__qyYzW" aria-hidden="true">
              <div className="FinalCTA_shape__O8hFR" style={{ left: '402px', top: '360px', width: '313px', height: '304px', transform: 'translateY(6px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(240px)' }}>
                  <img src="/art/cta-footer/left-blue-back.svg" srcSet="/art/cta-footer/left-blue-back.1x.svg 1x, /art/cta-footer/left-blue-back.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '313px', height: '304px', '--bob-a': '3px', '--bob-t': '8.4s', '--bob-d': '6.21s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" style={{ left: '277px', top: '253px', width: '275px', height: '411px', transform: 'translateY(9px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(347px)' }}>
                  <img src="/art/cta-footer/left-green.svg" srcSet="/art/cta-footer/left-green.1x.svg 1x, /art/cta-footer/left-green.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '275px', height: '411px', '--bob-a': '3.5px', '--bob-t': '7.6s', '--bob-d': '9.71s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" style={{ left: '114px', top: '229px', width: '313px', height: '435px', transform: 'translateY(12px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(371px)' }}>
                  <img src="/art/cta-footer/left-blue.svg" srcSet="/art/cta-footer/left-blue.1x.svg 1x, /art/cta-footer/left-blue.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '313px', height: '435px', '--bob-a': '4px', '--bob-t': '9.2s', '--bob-d': '8.92s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" style={{ left: '277px', top: '520px', width: '274px', height: '144px', transform: 'translateY(16px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(80px)' }}>
                  <img src="/art/cta-footer/left-yellow.svg" srcSet="/art/cta-footer/left-yellow.1x.svg 1x, /art/cta-footer/left-yellow.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '274px', height: '144px', '--bob-a': '3px', '--bob-t': '6.8s', '--bob-d': '3.58s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" style={{ left: '776px', top: '386px', width: '275px', height: '192px', transform: 'translateY(6px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(214px)' }}>
                  <img src="/art/cta-footer/mid-yellow.svg" srcSet="/art/cta-footer/mid-yellow.1x.svg 1x, /art/cta-footer/mid-yellow.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '275px', height: '192px', '--bob-a': '2.5px', '--bob-t': '8.8s', '--bob-d': '3.06s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" style={{ left: '613px', top: '362px', width: '313px', height: '302px', transform: 'translateY(12px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(238px)' }}>
                  <img src="/art/cta-footer/mid-green.svg" srcSet="/art/cta-footer/mid-green.1x.svg 1x, /art/cta-footer/mid-green.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '313px', height: '302px', '--bob-a': '4px', '--bob-t': '7.2s', '--bob-d': '7.57s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" style={{ left: '960px', top: '261px', width: '347px', height: '240px', transform: 'translateY(6px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(339px)' }}>
                  <img src="/art/cta-footer/right-green.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '347px', height: '240px', '--bob-a': '2.5px', '--bob-t': '9.6s', '--bob-d': '5.57s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" style={{ left: '833px', top: '286px', width: '312px', height: '378px', transform: 'translateY(10px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(314px)' }}>
                  <img src="/art/cta-footer/right-yellow.svg" srcSet="/art/cta-footer/right-yellow.1x.svg 1x, /art/cta-footer/right-yellow.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '312px', height: '378px', '--bob-a': '3.5px', '--bob-t': '8s', '--bob-d': '7.07s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" style={{ left: '960px', top: '528px', width: '346px', height: '136px', transform: 'translateY(16px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(72px)' }}>
                  <img src="/art/cta-footer/right-blue.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '346px', height: '136px', '--bob-a': '3px', '--bob-t': '7s', '--bob-d': '8.01s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" data-off="below670" style={{ left: '1178px', top: '133px', width: '347px', height: '531px', transform: 'translateY(6px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(467px)' }}>
                  <img src="/art/cta-footer/east-yellow.svg" srcSet="/art/cta-footer/east-yellow.1x.svg 1x, /art/cta-footer/east-yellow.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '347px', height: '531px', '--bob-a': '3px', '--bob-t': '8.6s', '--bob-d': '7.44s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" style={{ left: '1051px', top: '133px', width: '313px', height: '531px', transform: 'translateY(10px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(467px)' }}>
                  <img src="/art/cta-footer/east-blue.svg" srcSet="/art/cta-footer/east-blue.1x.svg 1x, /art/cta-footer/east-blue.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '313px', height: '531px', '--bob-a': '4px', '--bob-t': '9.4s', '--bob-d': '3.29s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" data-off="below670" style={{ left: '1178px', top: '400px', width: '346px', height: '264px', transform: 'translateY(16px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(200px)' }}>
                  <img src="/art/cta-footer/east-green.svg" srcSet="/art/cta-footer/east-green.1x.svg 1x, /art/cta-footer/east-green.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '346px', height: '264px', '--bob-a': '3.5px', '--bob-t': '7.4s', '--bob-d': '8.26s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" data-off="below512" style={{ left: '-30px', top: '305px', width: '313px', height: '359px', transform: 'translateY(10px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(295px)' }}>
                  <img src="/art/cta-footer/west-yellow.svg" srcSet="/art/cta-footer/west-yellow.1x.svg 1x, /art/cta-footer/west-yellow.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '313px', height: '359px', '--bob-a': '3.5px', '--bob-t': '8.2s', '--bob-d': '6.02s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" data-off="flow" style={{ left: '-155px', top: '198px', width: '275px', height: '466px', transform: 'translateY(8px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(402px)' }}>
                  <img src="/art/cta-footer/west-green.svg" srcSet="/art/cta-footer/west-green.1x.svg 1x, /art/cta-footer/west-green.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '275px', height: '466px', '--bob-a': '3px', '--bob-t': '9s', '--bob-d': '1.96s' } as React.CSSProperties} />
                </div>
              </div>
              <div className="FinalCTA_shape__O8hFR" data-off="flow" style={{ left: '-191px', top: '441px', width: '346px', height: '223px', transform: 'translateY(16px)' }}>
                <div className="FinalCTA_rise__JrpWq" style={{ transform: 'translateY(159px)' }}>
                  <img src="/art/cta-footer/west-blue.svg" srcSet="/art/cta-footer/west-blue.1x.svg 1x, /art/cta-footer/west-blue.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async" className="FinalCTA_bob__pe06H" style={{ position: 'absolute', maxWidth: 'none', left: '0', top: '0', width: '346px', height: '223px', '--bob-a': '3px', '--bob-t': '7.8s', '--bob-d': '3.65s' } as React.CSSProperties} />
                </div>
              </div>
            </div>
            <div className="FinalCTA_ground__huZR4" aria-hidden="true" style={{ transform: 'scaleX(0)' }}></div>
            <div className="FinalCTA_sentinel__7kYEg" style={{ top: '133px', height: '467px' }}></div>
            <div className="FinalCTA_sentinel__7kYEg" style={{ top: '560px', height: '40px' }}></div>
          </div>
        </div>
        <div className="FinalCTA_sentinel__7kYEg" style={{ top: '0', height: '1072px' }}></div>
        <div className="FinalCTA_copy__1Q959">
          <h2 className="display FinalCTA_title__qXtmX" style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', overflow: 'clip', overflowClipMargin: '0.02em' }}>
              <span style={{ display: 'block', willChange: 'transform', transform: 'translateY(108%)' }}>
                What are you trying to solve?
              </span>
            </span>
          </h2>
          <p className="FinalCTA_body__Py0Ud" style={{ opacity: 0, transform: 'translateY(24px)' }}>
            Tell us where you are, what&apos;s not working, and where you need to get. A senior consultant will review your note and respond within one business day.
          </p>
          <div className="FinalCTA_action__zureE" style={{ opacity: 0, transform: 'translateY(24px)' }}>
            <button
              type="button"
              onClick={onOpenEarlyAccess}
              className="Button_base__xcPDI Button_lg__s7W56 Button_brand__A7Aaf FinalCTA_button__pxHoG shadow-md hover:shadow-xl transition-all"
              tabIndex={0}
              style={{ backgroundColor: '#D22931', color: '#FFFFFF', borderColor: '#D22931', fontWeight: 600 }}
            >
              <span className="Button_wash__NOE1m" aria-hidden="true"></span>
              <span className="Button_label__hCLAL">Discuss a Challenge &rarr;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
