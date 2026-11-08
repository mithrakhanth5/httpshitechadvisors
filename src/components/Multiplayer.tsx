import React, { useRef, useEffect } from 'react';
import { gsap, SYMMETRY_EASE } from '../lib/gsap';

export const Multiplayer: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Coming soon tag
      gsap.fromTo(
        root.querySelector('.Multiplayer_soon__zb1cW'),
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Headline
      gsap.fromTo(
        root.querySelectorAll('.Multiplayer_title__9Cts4 span span'),
        { yPercent: 108 },
        {
          yPercent: 0,
          stagger: 0.1,
          duration: 0.85,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Body copy
      gsap.fromTo(
        root.querySelector('.Multiplayer_lede__eJ_mj'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Isometric plane and teammates
      gsap.fromTo(
        root.querySelector('.Multiplayer_plane__UKLd8'),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.3,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root.querySelector('.Multiplayer_card__E44r4'),
            start: 'top 80%',
            once: true,
          },
        }
      );

      // SVG lines
      gsap.fromTo(
        root.querySelectorAll('.Multiplayer_link__fQysi'),
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: root.querySelector('.Multiplayer_card__E44r4'),
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Points below
      gsap.fromTo(
        root.querySelectorAll('.Multiplayer_point__RLkgu'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          delay: 0.3,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root.querySelector('.Multiplayer_points__7IUd8'),
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef as any}>
      <section className="Multiplayer_root__1_jI_" aria-labelledby="multiplayer-title">
        <div className="Multiplayer_soon__zb1cW" style={{ opacity: 0, transform: 'translateY(10px)' }}>
          <span className="Multiplayer_tag__oAOUg">
            <i aria-hidden="true"></i>Flexible Engagement
          </span>
        </div>
        <h2 id="multiplayer-title" className="display Multiplayer_title__9Cts4" style={{ textAlign: 'left' }}>
          <span style={{ display: 'block', overflow: 'clip', overflowClipMargin: '0.12em' }}>
            <span style={{ display: 'block', willChange: 'transform', transform: 'translateY(108%)' }}>
              Senior consultants and
            </span>
          </span>{' '}
          <span style={{ display: 'block', overflow: 'clip', overflowClipMargin: '0.12em' }}>
            <span style={{ display: 'block', willChange: 'transform', transform: 'translateY(108%)' }}>
              specialists, embedded or managed.
            </span>
          </span>
        </h2>
        <div className="Multiplayer_lede__eJ_mj" style={{ opacity: 0, transform: 'translateY(24px)' }}>
          <p className="Multiplayer_body__3guCM">
            Experienced consultants and specialists — as advisors, embedded leaders or complete delivery teams. We integrate directly into your organization, sharing context and delivering with no hand-off gap.
          </p>
        </div>
        <div className="Multiplayer_card__E44r4">
          <div className="Multiplayer_view__4_CXM">
            <div className="Multiplayer_plane__UKLd8" aria-hidden="true" style={{ opacity: 0, transform: 'translateY(28px)' }}>
              <svg className="Multiplayer_links__Nb_2b" viewBox="0 0 1300 900" width="1300" height="900">
                <g transform="matrix(0.83205 -0.5547 0.830139 0.557556 650.44 517.46)">
                  <line className="Multiplayer_link__fQysi" opacity="0" x1="-32.09607179501904" y1="-32.39274803732192" x2="139.22225788812972" y2="-139.19945897713313" />
                  <line className="Multiplayer_link__fQysi" opacity="0" x1="-32.09607179501904" y1="-32.39274803732192" x2="-139.22315592541838" y2="139.2003590817253" />
                  <line className="Multiplayer_link__fQysi" opacity="0" x1="139.22225788812972" y1="-139.19945897713313" x2="32.09667495434357" y2="32.39334810705003" />
                  <line className="Multiplayer_link__fQysi" opacity="0" x1="-139.22315592541838" y1="139.2003590817253" x2="32.09667495434357" y2="32.39334810705003" />
                </g>
              </svg>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '299px', top: '388px', width: '402px', height: '477px', opacity: 1, transform: 'none' }}>
                <img src="/art/multiplayer/tile-you.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '402px', height: '477px' }} />
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '600px', top: '416px', width: '400px', height: '469px', opacity: 1, transform: 'none' }}>
                <img src="/art/multiplayer/tile-jacob.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '400px', height: '469px' }} />
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '473px', top: '303px', width: '353px', height: '437px', opacity: 1, transform: 'none' }}>
                <img src="/art/multiplayer/tile-sam.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '353px', height: '437px' }} />
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '475px', top: '541px', width: '353px', height: '437px', opacity: 1, transform: 'none' }}>
                <img src="/art/multiplayer/tile-dana.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '353px', height: '437px' }} />
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '352px', top: '533px', width: '97px', height: '71px', opacity: 1, transform: 'none' }}>
                <div className="Multiplayer_float__vXr8Y" style={{ '--float': '-2px', '--loop': '9.02s', '--phase': '0s' } as React.CSSProperties}>
                  <img src="/art/multiplayer/name-you.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '97px', height: '71px' }} />
                </div>
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '843px', top: '423px', width: '114px', height: '83px', opacity: 1, transform: 'none' }}>
                <div className="Multiplayer_float__vXr8Y" style={{ '--float': '-2px', '--loop': '9.02s', '--phase': '-4.51s' } as React.CSSProperties}>
                  <img src="/art/multiplayer/name-jacob.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '114px', height: '83px' }} />
                </div>
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '683px', top: '304px', width: '106px', height: '77px', opacity: 1, transform: 'none' }}>
                <div className="Multiplayer_float__vXr8Y" style={{ '--float': '-2px', '--loop': '9.02s', '--phase': '-2.255s' } as React.CSSProperties}>
                  <img src="/art/multiplayer/name-sam.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '106px', height: '77px' }} />
                </div>
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '525px', top: '650px', width: '109px', height: '80px', opacity: 1, transform: 'none' }}>
                <div className="Multiplayer_float__vXr8Y" style={{ '--float': '-2px', '--loop': '9.02s', '--phase': '-6.765s' } as React.CSSProperties}>
                  <img src="/art/multiplayer/name-dana.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '109px', height: '80px' }} />
                </div>
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '385px', top: '389px', width: '157px', height: '110px', opacity: 0, transform: 'translateX(122.7695px) translateY(22.8125px)' }}>
                <img src="/art/multiplayer/tags/tag-q4.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '157px', height: '110px' }} />
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '101.828px', top: '30.857px', '--hue': '#6CBEE4', '--at': '0s' } as React.CSSProperties}><i></i></span>
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '113.477px', top: '23.092px', '--hue': '#40AA4A', '--at': '-0.16s' } as React.CSSProperties}><i></i></span>
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '375px', top: '533px', width: '184px', height: '128px', opacity: 0, transform: 'translateX(122.8285px) translateY(-22.555px)' }}>
                <img src="/art/multiplayer/tags/tag-renewals.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '184px', height: '128px' }} />
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '128.453px', top: '30.873px', '--hue': '#FAC344', '--at': '-0.45s' } as React.CSSProperties}><i></i></span>
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '140.102px', top: '23.107px', '--hue': '#6CBEE4', '--at': '-0.61s' } as React.CSSProperties}><i></i></span>
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '752px', top: '385px', width: '172px', height: '120px', opacity: 0, transform: 'translateX(-122.828px) translateY(22.5555px)' }}>
                <img src="/art/multiplayer/tags/tag-launch.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '172px', height: '120px' }} />
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '116.805px', top: '30.873px', '--hue': '#40AA4A', '--at': '-0.9s' } as React.CSSProperties}><i></i></span>
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '128.453px', top: '23.107px', '--hue': '#6CBEE4', '--at': '-1.06s' } as React.CSSProperties}><i></i></span>
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '763px', top: '547px', width: '142px', height: '100px', opacity: 0, transform: 'translateX(-122.769px) translateY(-22.812px)' }}>
                <img src="/art/multiplayer/tags/tag-board.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '142px', height: '100px' }} />
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '86.852px', top: '30.608px', '--hue': '#6CBEE4', '--at': '-1.35s' } as React.CSSProperties}><i></i></span>
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '98.5px', top: '22.842px', '--hue': '#FAC344', '--at': '-1.51s' } as React.CSSProperties}><i></i></span>
              </div>
              <div className="Multiplayer_moving__4jgZ9" style={{ left: '398px', top: '340px', width: '535px', height: '598px', opacity: 1, transform: 'none' }}>
                <img src="/art/multiplayer/tags/tag-team.svg" alt="" aria-hidden="true" draggable="false" decoding="async" className="Multiplayer_art__AYrtA" style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '535px', height: '598px' }} />
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '297.633px', top: '145.62px', '--hue': '#6CBEE4', '--at': '-0.2s' } as React.CSSProperties}><i></i></span>
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '309.281px', top: '137.854px', '--hue': '#FAC344', '--at': '-0.36s' } as React.CSSProperties}><i></i></span>
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '320.93px', top: '130.088px', '--hue': '#6CBEE4', '--at': '-0.52s' } as React.CSSProperties}><i></i></span>
                <span className="Multiplayer_symDot__yN2ny" style={{ left: '332.578px', top: '122.322px', '--hue': '#40AA4A', '--at': '-0.68s' } as React.CSSProperties}><i></i></span>
              </div>
              <div className="Multiplayer_hit__EBKW3"></div>
            </div>
          </div>
          <div className="Multiplayer_points__7IUd8">
            <div className="Multiplayer_point__RLkgu" style={{ opacity: 0, transform: 'translateY(24px)' }}>
              <i className="Multiplayer_icon__2TKJe Multiplayer_leafL__SjzVz" aria-hidden="true"></i>
              <h3 className="Multiplayer_pointTitle__K2YQh">Strategy & Advisory</h3>
              <p className="Multiplayer_pointBody__tj1nd">
                Advisory partners who shape <br />platform decisions and roadmaps.
              </p>
            </div>
            <div className="Multiplayer_point__RLkgu" style={{ opacity: 0, transform: 'translateY(24px)' }}>
              <i className="Multiplayer_icon__2TKJe Multiplayer_yellow__5113y" aria-hidden="true"></i>
              <h3 className="Multiplayer_pointTitle__K2YQh">Embedded Leaders</h3>
              <p className="Multiplayer_pointBody__tj1nd">
                Fractional or interim leaders <br />who drive execution inside teams.
              </p>
            </div>
            <div className="Multiplayer_point__RLkgu" style={{ opacity: 0, transform: 'translateY(24px)' }}>
              <i className="Multiplayer_icon__2TKJe Multiplayer_green__VoeDX" aria-hidden="true"></i>
              <h3 className="Multiplayer_pointTitle__K2YQh">Dedicated Delivery</h3>
              <p className="Multiplayer_pointBody__tj1nd">
                Cross-functional pods of engineers, <br />architects and data specialists.
              </p>
            </div>
            <div className="Multiplayer_point__RLkgu" style={{ opacity: 0, transform: 'translateY(24px)' }}>
              <i className="Multiplayer_icon__2TKJe Multiplayer_leafR__tN0ur" aria-hidden="true"></i>
              <h3 className="Multiplayer_pointTitle__K2YQh">Managed Outcomes</h3>
              <p className="Multiplayer_pointBody__tj1nd">
                Accountable teams measured on <br />business results, not just hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
