import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

export const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const clickWaveRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const glow = glowRef.current;
    const clickWave = clickWaveRef.current;
    if (!cursor || !dot || !glow) return;

    // Fast, smooth quickTo setters with spring inertia
    const xToCursor = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' });
    const yToCursor = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' });
    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power2.out' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power2.out' });
    const xToGlow = gsap.quickTo(glow, 'x', { duration: 0.75, ease: 'power2.out' });
    const yToGlow = gsap.quickTo(glow, 'y', { duration: 0.75, ease: 'power2.out' });

    // Staggered setters for trailing physics
    const trailSetters = trailRefs.current.map((trailEl, idx) => {
      if (!trailEl) return null;
      return {
        x: gsap.quickTo(trailEl, 'x', { duration: 0.2 + idx * 0.08, ease: 'power2.out' }),
        y: gsap.quickTo(trailEl, 'y', { duration: 0.2 + idx * 0.08, ease: 'power2.out' }),
      };
    });

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([cursor, dot, glow, ...trailRefs.current.filter(Boolean)], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToGlow(e.clientX);
      yToGlow(e.clientY);

      trailSetters.forEach((setter) => {
        if (setter) {
          setter.x(e.clientX);
          setter.y(e.clientY);
        }
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, dot, glow, ...trailRefs.current.filter(Boolean)], { opacity: 1, duration: 0.2 });
      isVisible = true;
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, dot, glow, ...trailRefs.current.filter(Boolean)], { opacity: 0, duration: 0.3 });
      isVisible = false;
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!clickWave) return;
      gsap.killTweensOf(clickWave);
      gsap.set(clickWave, {
        x: e.clientX,
        y: e.clientY,
        scale: 0.5,
        opacity: 0.8,
        borderColor: '#D22931',
      });
      gsap.to(clickWave, {
        scale: 2.6,
        opacity: 0,
        duration: 0.55,
        ease: 'power2.out',
      });
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isButton = target.closest('a, button, input, select, textarea, [data-interactive]');
      const isCard = target.closest('.card-hover-feelgood, [data-spotlight], .pillar-card, .ind-card, .why-card, .service-card-anim, .cap-card, .case-card, .role-card, .problem-card');

      if (isButton) {
        gsap.to(cursor, {
          scale: 2.2,
          backgroundColor: 'rgba(210, 41, 49, 0.12)',
          borderColor: '#D22931',
          duration: 0.25,
        });
        gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2 });
        gsap.to(glow, { scale: 1.25, opacity: 1, duration: 0.3 });
      } else if (isCard) {
        gsap.to(cursor, {
          scale: 1.6,
          backgroundColor: 'rgba(2, 6, 38, 0.04)',
          borderColor: 'rgba(210, 41, 49, 0.5)',
          duration: 0.25,
        });
        gsap.to(dot, { scale: 0.8, backgroundColor: '#D22931', opacity: 1, duration: 0.2 });
        gsap.to(glow, { scale: 1.15, opacity: 0.85, duration: 0.3 });
      } else {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(2, 6, 38, 0.25)',
          duration: 0.25,
        });
        gsap.to(dot, { scale: 1, backgroundColor: '#020626', opacity: 1, duration: 0.2 });
        gsap.to(glow, { scale: 1, opacity: 0.65, duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  return (
    <>
      {/* 1. Large Ambient Cursor Aura Light (Reacts to every mouse move across the page) */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-[420px] h-[420px] -ml-[210px] -mt-[210px] rounded-full pointer-events-none z-10 opacity-0 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(210, 41, 49, 0.055) 0%, rgba(250, 195, 68, 0.02) 40%, transparent 70%)',
          filter: 'blur(16px)',
        }}
      />

      {/* 2. Trailing Stagger Particles (Velocity-Matched comet trail) */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          aria-hidden="true"
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] opacity-0 will-change-transform"
          style={{
            width: `${4 - i * 0.8}px`,
            height: `${4 - i * 0.8}px`,
            marginLeft: `-${(4 - i * 0.8) / 2}px`,
            marginTop: `-${(4 - i * 0.8) / 2}px`,
            backgroundColor: i === 0 ? 'rgba(210, 41, 49, 0.45)' : 'rgba(2, 6, 38, 0.25)',
          }}
        />
      ))}

      {/* 3. Click Ripple Wave */}
      <div
        ref={clickWaveRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-[#D22931] pointer-events-none z-[9997] opacity-0 will-change-transform"
      />

      {/* 4. Outer Interactive Ring */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-[#020626]/25 pointer-events-none z-[9999] opacity-0 will-change-transform"
        style={{ transition: 'border-color 0.2s ease, background-color 0.2s ease' }}
      />

      {/* 5. Inner Precision Pointer Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#020626] pointer-events-none z-[10000] opacity-0 will-change-transform"
      />
    </>
  );
};