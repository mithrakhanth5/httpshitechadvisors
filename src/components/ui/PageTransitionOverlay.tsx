import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { gsap, ScrollTrigger, SYM_EASE } from '../../lib/gsap';

const ROUTE_LABELS: Record<string, { title: string; subtitle: string; code: string }> = {
  '/': { title: 'EXECUTIVE OVERVIEW', subtitle: 'Strategy That Connects to Execution', code: 'SYS // 00' },
  '/solutions': { title: 'ENTERPRISE SOLUTIONS', subtitle: '5 Canonical Modernization Practices', code: 'SYS // 01' },
  '/role-focus': { title: 'EXECUTIVE ROLE FOCUS', subtitle: '6 Leadership Mandates Framed Around Delivery', code: 'SYS // 02' },
  '/capabilities': { title: 'DELIVERY CAPABILITIES', subtitle: 'Four Ways We Connect Strategy to Code', code: 'SYS // 03' },
  '/methodology': { title: 'DELIVERY METHODOLOGY', subtitle: 'Accountable Diagnosis to Production Go-Live', code: 'SYS // 04' },
  '/results': { title: 'PRODUCTION PROOF', subtitle: 'Verified Outcomes & Quantitative Metrics', code: 'SYS // 05' },
  '/industries': { title: 'SECTOR ARCHITECTURES', subtitle: 'Domain Depth Built for Real-World Systems', code: 'SYS // 06' },
  '/events': { title: 'EXECUTIVE ROUNDTABLE', subtitle: 'Peer Insights & Chatham House AI Forums', code: 'SYS // 07' },
};

export const PageTransitionOverlay: React.FC = () => {
  const location = useLocation();
  const lenis = useLenis();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isFirstRender = useRef(true);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const veilRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const routeInfo = ROUTE_LABELS[location.pathname] || {
    title: 'HITECH ADVISORS',
    subtitle: 'Connecting Strategy to Measurable Delivery',
    code: 'SYS // SEC',
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsTransitioning(true);

    const scrollTimer = window.setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      ScrollTrigger.refresh();
    }, 280);

    return () => {
      window.clearTimeout(scrollTimer);
    };
  }, [location.pathname, lenis]);

  useEffect(() => {
    if (!isTransitioning || !overlayRef.current) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      const quickTimer = window.setTimeout(() => {
        setIsTransitioning(false);
        ScrollTrigger.refresh();
      }, 80);
      return () => window.clearTimeout(quickTimer);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsTransitioning(false);
          ScrollTrigger.refresh();
        },
      });

      gsap.set(veilRef.current, { yPercent: 100 });
      gsap.set(badgeRef.current, { opacity: 0, scale: 0.9, y: 10 });
      gsap.set(titleRef.current, { yPercent: 108 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 12 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left center' });

      tl.to(veilRef.current, {
        yPercent: 0,
        duration: 0.34,
        ease: SYM_EASE.snappy,
      })
        .to(
          badgeRef.current,
          { opacity: 1, scale: 1, y: 0, duration: 0.28, ease: SYM_EASE.pop },
          '-=0.14'
        )
        .to(
          titleRef.current,
          { yPercent: 0, duration: 0.42, ease: SYM_EASE.snappy },
          '-=0.22'
        )
        .to(
          subtitleRef.current,
          { opacity: 1, y: 0, duration: 0.32, ease: SYM_EASE.smooth },
          '-=0.3'
        )
        .to(
          lineRef.current,
          { scaleX: 1, duration: 0.34, ease: SYM_EASE.snappy },
          '-=0.32'
        )
        .to(lineRef.current, {
          scaleX: 0,
          transformOrigin: 'right center',
          duration: 0.24,
          ease: SYM_EASE.smooth,
        })
        .to(
          [titleRef.current, badgeRef.current, subtitleRef.current],
          {
            yPercent: -108,
            opacity: 0,
            duration: 0.24,
            ease: SYM_EASE.smooth,
          },
          '<'
        )
        .to(
          veilRef.current,
          {
            yPercent: -100,
            duration: 0.36,
            ease: SYM_EASE.snappy,
          },
          '-=0.12'
        );
    }, overlayRef);

    return () => ctx.revert();
  }, [isTransitioning, location.pathname]);

  if (!isTransitioning) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Symmetry-Trained Single-Sheet Architectural Veil */}
      <div
        ref={veilRef}
        className="absolute inset-0 bg-[#020626] flex items-center justify-center px-6"
      >
        {/* Top Crimson Razor Edge */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D22931] via-[#FAC344] to-[#D22931]" />
        {/* Bottom Gold Razor Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FAC344] via-[#D22931] to-[#FAC344]" />

        {/* Center Stage Masked Typography */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl">
          <span
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono font-bold tracking-widest text-[#FAC344] mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
            <span>{routeInfo.code}</span>
          </span>

          <div className="overflow-hidden">
            <h2
              ref={titleRef}
              className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight will-change-transform"
            >
              {routeInfo.title}
            </h2>
          </div>

          <p
            ref={subtitleRef}
            className="text-xs sm:text-sm text-white/75 font-mono tracking-wide mt-3"
          >
            {routeInfo.subtitle}
          </p>

          {/* Symmetry ScaleX Hairline Sweep */}
          <div className="w-48 sm:w-64 h-[2px] bg-white/15 rounded-full mt-6 overflow-hidden">
            <div
              ref={lineRef}
              className="w-full h-full bg-gradient-to-r from-[#D22931] via-[#FAC344] to-[#D22931]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
