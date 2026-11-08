import React, { useRef, useEffect } from 'react';
import { gsap } from '../lib/gsap';

interface HeroProps {
  onOpenEarlyAccess: () => void;
  onOpenDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEarlyAccess, onOpenDemo }) => {
  const rootRef = useRef<HTMLElement | null>(null);
  const clusterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const cluster = clusterRef.current;
    if (!root || !cluster) return;

    const layers = cluster.querySelectorAll<HTMLElement>('.Hero_layer__Znr4I');

    const handleMouseMove = (e: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      // 3D perspective cluster tilt
      gsap.to(cluster, {
        rotateY: relX * 5,
        rotateX: -relY * 5,
        transformPerspective: 1200,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      // Individual layer depth parallax
      layers.forEach((layer, i) => {
        const factor = (i % 4 + 1) * 10;
        gsap.to(layer, {
          x: relX * factor,
          y: relY * factor,
          duration: 0.7,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cluster, {
        rotateY: 0,
        rotateX: 0,
        duration: 1.2,
        ease: 'power3.out',
        overwrite: 'auto',
      });

      layers.forEach((layer) => {
        gsap.to(layer, {
          x: 0,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      });
    };

    root.addEventListener('mousemove', handleMouseMove);
    root.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      root.removeEventListener('mousemove', handleMouseMove);
      root.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="Hero_root__ZnY_6"
      aria-labelledby="hero-title"
      data-hero-art=""
      data-deck=""
    >
      <div className="Hero_surface__d1G7e" aria-hidden="true" />

      {/* Shapes Container with 10 exact card layers */}
      <div className="Hero_shapes__8APa0">
        <div className="Hero_shapesZoom__bdFmN">
          <div
            ref={clusterRef}
            className="Hero_cluster__5xtsz"
            style={{ left: '120px', top: '312px', width: '1200px', height: '688px' }}
            aria-hidden="true"
          >
            {/* Layer 1 (Left 1) */}
            <div
              className="Hero_layer__Znr4I"
              style={{ left: '268px', top: '217px', width: '266px', height: '511px', transform: 'none' }}
            >
              <div
                className="Hero_drift__0DgVo"
                style={{ '--period': '8.6s', '--phase': '-2.1s', '--amp': '-4px' } as React.CSSProperties}
              >
                <div
                  className="Hero_fill__vUOga Hero_rise__r6MGG"
                  style={{ '--at': '0.54s', '--dur': '1.686595744680851s', '--rise': '461px' } as React.CSSProperties}
                >
                  <img
                    src="/art/hero-cards/l1-0.svg"
                    srcSet="/art/hero-cards/l1-0@1x.svg 1x, /art/hero-cards/l1-0.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: '70px', width: '256px', height: '441px' }}
                  />
                  <img
                    src="/art/hero-cards/l1-1.svg"
                    srcSet="/art/hero-cards/l1-1@1x.svg 1x, /art/hero-cards/l1-1.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: '135px', top: '70px', width: '121px', height: '441px' }}
                  />
                  <img
                    src="/art/hero-cards/l1-2.svg"
                    srcSet="/art/hero-cards/l1-2@1x.svg 1x, /art/hero-cards/l1-2.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '266px', height: '186px' }}
                  />
                </div>
              </div>
            </div>

            {/* Layer 2 (Left 2) */}
            <div
              className="Hero_layer__Znr4I"
              style={{ left: '134px', top: '142px', width: '293px', height: '586px', transform: 'none' }}
            >
              <div
                className="Hero_drift__0DgVo"
                style={{ '--period': '10.4s', '--phase': '-6.3s', '--amp': '-5px' } as React.CSSProperties}
              >
                <div
                  className="Hero_fill__vUOga Hero_rise__r6MGG"
                  style={{ '--at': '0.42s', '--dur': '1.7982978723404255s', '--rise': '536px' } as React.CSSProperties}
                >
                  <img
                    src="/art/hero-cards/l2-0.svg"
                    srcSet="/art/hero-cards/l2-0@1x.svg 1x, /art/hero-cards/l2-0.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: '38px', top: '89px', width: '216px', height: '497px' }}
                  />
                  <img
                    src="/art/hero-cards/l2-1.svg"
                    srcSet="/art/hero-cards/l2-1@1x.svg 1x, /art/hero-cards/l2-1.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '293px', height: '204px' }}
                  />
                </div>
              </div>
            </div>

            {/* Layer 3 (Left 3) */}
            <div
              className="Hero_layer__Znr4I"
              style={{ left: '28px', top: '88px', width: '265px', height: '640px', transform: 'none' }}
            >
              <div
                className="Hero_drift__0DgVo"
                style={{ '--period': '9.2s', '--phase': '-0.4s', '--amp': '-3.5px' } as React.CSSProperties}
              >
                <div
                  className="Hero_fill__vUOga Hero_rise__r6MGG"
                  style={{ '--at': '0.3s', '--dur': '1.878723404255319s', '--rise': '590px' } as React.CSSProperties}
                >
                  <img
                    src="/art/hero-cards/l3-0.svg"
                    srcSet="/art/hero-cards/l3-0@1x.svg 1x, /art/hero-cards/l3-0.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: '9px', top: '90px', width: '256px', height: '550px' }}
                  />
                  <img
                    src="/art/hero-cards/l3-1.svg"
                    srcSet="/art/hero-cards/l3-1@1x.svg 1x, /art/hero-cards/l3-1.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '265px', height: '186px' }}
                  />
                </div>
              </div>
            </div>

            {/* Layer 4 (Left 4) */}
            <div
              className="Hero_layer__Znr4I"
              style={{ left: '134px', top: '365px', width: '293px', height: '363px', transform: 'none' }}
            >
              <div
                className="Hero_drift__0DgVo"
                style={{ '--period': '9.6s', '--phase': '-4.8s', '--amp': '-3px' } as React.CSSProperties}
              >
                <div
                  className="Hero_fill__vUOga Hero_rise__r6MGG"
                  style={{ '--at': '0.72s', '--dur': '1.4661702127659575s', '--rise': '313px' } as React.CSSProperties}
                >
                  <img
                    src="/art/hero-cards/l4-0.svg"
                    srcSet="/art/hero-cards/l4-0@1x.svg 1x, /art/hero-cards/l4-0.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: '38px', top: '90px', width: '216px', height: '273px' }}
                  />
                  <img
                    src="/art/hero-cards/l4-1.svg"
                    srcSet="/art/hero-cards/l4-1@1x.svg 1x, /art/hero-cards/l4-1.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '293px', height: '204px' }}
                  />
                </div>
              </div>
            </div>

            {/* Layer 5 (Right 1) */}
            <div
              className="Hero_layer__Znr4I"
              style={{ left: '907px', top: '353px', width: '265px', height: '375px', transform: 'none' }}
            >
              <div
                className="Hero_drift__0DgVo"
                style={{ '--period': '9.8s', '--phase': '-7.4s', '--amp': '-4.5px' } as React.CSSProperties}
              >
                <div
                  className="Hero_fill__vUOga Hero_rise__r6MGG"
                  style={{ '--at': '0.66s', '--dur': '1.4825531914893617s', '--rise': '324px' } as React.CSSProperties}
                >
                  <img
                    src="/art/hero-cards/r1-0.svg"
                    srcSet="/art/hero-cards/r1-0@1x.svg 1x, /art/hero-cards/r1-0.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: '71px', width: '256px', height: '304px' }}
                  />
                  <img
                    src="/art/hero-cards/r1-1.svg"
                    srcSet="/art/hero-cards/r1-1@1x.svg 1x, /art/hero-cards/r1-1.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: '135px', top: '71px', width: '121px', height: '304px' }}
                  />
                  <img
                    src="/art/hero-cards/r1-2.svg"
                    srcSet="/art/hero-cards/r1-2@1x.svg 1x, /art/hero-cards/r1-2.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '265px', height: '186px' }}
                  />
                </div>
              </div>
            </div>

            {/* Layer 6 (Right 2) */}
            <div
              className="Hero_layer__Znr4I"
              style={{ left: '800px', top: '177px', width: '293px', height: '551px', transform: 'none' }}
            >
              <div
                className="Hero_drift__0DgVo"
                style={{ '--period': '8.2s', '--phase': '-3.3s', '--amp': '-4px' } as React.CSSProperties}
              >
                <div
                  className="Hero_fill__vUOga Hero_rise__r6MGG"
                  style={{ '--at': '0.36s', '--dur': '1.7446808510638299s', '--rise': '500px' } as React.CSSProperties}
                >
                  <img
                    src="/art/hero-cards/r2-0.svg"
                    srcSet="/art/hero-cards/r2-0@1x.svg 1x, /art/hero-cards/r2-0.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: '38px', top: '89px', width: '216px', height: '462px' }}
                  />
                  <img
                    src="/art/hero-cards/r2-1.svg"
                    srcSet="/art/hero-cards/r2-1@1x.svg 1x, /art/hero-cards/r2-1.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '293px', height: '205px' }}
                  />
                </div>
              </div>
            </div>

            {/* Layer 7 (Right 3) */}
            <div
              className="Hero_layer__Znr4I"
              style={{ left: '666px', top: '286px', width: '266px', height: '442px', transform: 'none' }}
            >
              <div
                className="Hero_drift__0DgVo"
                style={{ '--period': '10.1s', '--phase': '-1.2s', '--amp': '-4px' } as React.CSSProperties}
              >
                <div
                  className="Hero_fill__vUOga Hero_rise__r6MGG"
                  style={{ '--at': '0.48s', '--dur': '1.5838297872340426s', '--rise': '392px' } as React.CSSProperties}
                >
                  <img
                    src="/art/hero-cards/r3-0.svg"
                    srcSet="/art/hero-cards/r3-0@1x.svg 1x, /art/hero-cards/r3-0.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: '10px', top: '91px', width: '256px', height: '351px' }}
                  />
                  <img
                    src="/art/hero-cards/r3-1.svg"
                    srcSet="/art/hero-cards/r3-1@1x.svg 1x, /art/hero-cards/r3-1.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '266px', height: '186px' }}
                  />
                </div>
              </div>
            </div>

            {/* Layer 8 (Right 4) */}
            <div
              className="Hero_layer__Znr4I"
              style={{ left: '839px', top: '365px', width: '293px', height: '363px', transform: 'none' }}
            >
              <div
                className="Hero_drift__0DgVo"
                style={{ '--period': '9.4s', '--phase': '-5.5s', '--amp': '-3.5px' } as React.CSSProperties}
              >
                <div
                  className="Hero_fill__vUOga Hero_rise__r6MGG"
                  style={{ '--at': '0.84s', '--dur': '1.4661702127659575s', '--rise': '313px' } as React.CSSProperties}
                >
                  <img
                    src="/art/hero-cards/r4-0.svg"
                    srcSet="/art/hero-cards/r4-0@1x.svg 1x, /art/hero-cards/r4-0.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: '39px', top: '90px', width: '215px', height: '273px' }}
                  />
                  <img
                    src="/art/hero-cards/r4-1.svg"
                    srcSet="/art/hero-cards/r4-1@1x.svg 1x, /art/hero-cards/r4-1.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '293px', height: '204px' }}
                  />
                </div>
              </div>
            </div>

            {/* Layer 9 (Mid Yellow) */}
            <div
              className="Hero_layer__Znr4I"
              style={{ left: '467px', top: '256px', width: '266px', height: '442px', transform: 'none' }}
            >
              <div
                className="Hero_drift__0DgVo"
                style={{ '--period': '8.9s', '--phase': '-8.1s', '--amp': '-4px' } as React.CSSProperties}
              >
                <div
                  className="Hero_fill__vUOga Hero_rise__r6MGG"
                  style={{ '--at': '0.6s', '--dur': '1.6419148936170211s', '--rise': '431px' } as React.CSSProperties}
                >
                  <img
                    src="/art/hero-cards/m1y-0.svg"
                    srcSet="/art/hero-cards/m1y-0@1x.svg 1x, /art/hero-cards/m1y-0.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: '10px', top: '91px', width: '256px', height: '351px' }}
                  />
                  <img
                    src="/art/hero-cards/m1y-1.svg"
                    srcSet="/art/hero-cards/m1y-1@1x.svg 1x, /art/hero-cards/m1y-1.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '266px', height: '186px' }}
                  />
                </div>
              </div>
            </div>

            {/* Layer 10 (Mid 2) */}
            <div
              className="Hero_layer__Znr4I"
              style={{ left: '407px', top: '354px', width: '293px', height: '374px', transform: 'none' }}
            >
              <div
                className="Hero_drift__0DgVo"
                style={{ '--period': '9.9s', '--phase': '-2.7s', '--amp': '-3px' } as React.CSSProperties}
              >
                <div
                  className="Hero_fill__vUOga Hero_rise__r6MGG"
                  style={{ '--at': '0.78s', '--dur': '1.4825531914893617s', '--rise': '324px' } as React.CSSProperties}
                >
                  <img
                    src="/art/hero-cards/m2-0.svg"
                    srcSet="/art/hero-cards/m2-0@1x.svg 1x, /art/hero-cards/m2-0.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: '38px', top: '88px', width: '216px', height: '286px' }}
                  />
                  <img
                    src="/art/hero-cards/m2-1.svg"
                    srcSet="/art/hero-cards/m2-1@1x.svg 1x, /art/hero-cards/m2-1.svg 2x"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    decoding="async"
                    style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '293px', height: '204px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eyebrow */}
      <div
        style={{
          position: 'absolute',
          top: '128px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 18px',
          borderRadius: '999px',
          background: 'rgba(210, 41, 49, 0.08)',
          border: '1px solid rgba(210, 41, 49, 0.22)',
          color: '#D22931',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          zIndex: 4,
          fontFamily: 'var(--text)',
        }}
      >
        <span className="w-2 h-2 rounded-full bg-[#D22931] animate-pulse" />
        <span>Business &amp; Technology Solutions &middot; Seattle &amp; Global</span>
      </div>

      {/* Main Headline */}
      <h1 id="hero-title" className="display Hero_h1__CAFAB">
        <span className="Hero_line__QaqFB">
          <span
            className="Hero_lineInner__cnj0G"
            style={{ '--at': '0.15s', '--dur': '1.1s' } as React.CSSProperties}
          >
            Strategy That Connects{' '}
          </span>
        </span>
        <span className="Hero_line__QaqFB">
          <span
            className="Hero_lineInner__cnj0G"
            style={{ '--at': '0.24s', '--dur': '1.1s' } as React.CSSProperties}
          >
            to Execution.
          </span>
        </span>
      </h1>

      {/* Subtitle */}
      <div
        className="Hero_sub__uPXYl"
        style={{
          '--at': '0.42s',
          '--dur': '0.9s',
          left: 'calc(50% - 370px)',
          width: '740px',
          top: '315px',
          textAlign: 'center',
        } as React.CSSProperties}
      >
        <p className="font-semibold text-[#020626] text-lg mb-2 tracking-tight">
          &ldquo;We Are Experts At Engaging Experts On Behalf of Our Clients&rdquo;
        </p>
        <p className="text-[#3A4A5A] text-base leading-relaxed">
          Hitech Advisors helps enterprise leaders turn high-stakes technology decisions into working systems — across enterprise business applications, cloud modernization, cybersecurity, and production AI.
        </p>
      </div>

      {/* CTA Button Group */}
      <div
        className="Hero_cta__I_oag"
        style={{
          '--at': '0.54s',
          '--dur': '0.9s',
          left: '50%',
          top: '445px',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'max-content',
        } as React.CSSProperties}
      >
        <button
          type="button"
          onClick={onOpenEarlyAccess}
          className="Button_base__xcPDI Button_lg__s7W56 Button_dark__li0_g Hero_ctaButton__qK2EY shadow-md hover:shadow-lg transition-all"
          style={{ width: 'auto', padding: '0 28px', backgroundColor: '#D22931', color: '#FFFFFF', fontWeight: 600 }}
          tabIndex={0}
        >
          <span className="Button_wash__NOE1m" aria-hidden="true" />
          <span className="Button_label__hCLAL">Discuss a Challenge &rarr;</span>
        </button>
        {onOpenDemo && (
          <button
            type="button"
            onClick={onOpenDemo}
            className="Button_base__xcPDI Button_lg__s7W56"
            style={{
              width: 'auto',
              padding: '0 22px',
              background: '#FFFFFF',
              border: '1px solid #D9E0E6',
              color: '#020626',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '44px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            Book Executive Briefing
          </button>
        )}
        <a
          href="#product"
          className="Button_base__xcPDI Button_lg__s7W56"
          style={{
            width: 'auto',
            padding: '0 20px',
            background: 'rgba(2, 6, 38, 0.04)',
            border: '1px solid #EAEDF1',
            color: '#3A4A5A',
            borderRadius: '999px',
            fontSize: '14px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '44px',
          }}
        >
          Explore Solutions
        </a>
      </div>

      <div className="Deck_stage__eUoID">
        <div className="Deck_frame__vDy6Y" style={{ transform: 'none' }}>
          <div className="Deck_stack__M4lEn">
            <div className="Deck_deck__UnqCN" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};