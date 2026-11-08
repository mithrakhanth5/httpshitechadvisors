import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

export const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Fast, smooth quickTo setters
    const xToCursor = gsap.quickTo(cursor, 'x', { duration: 0.5, ease: 'power3.out' });
    const yToCursor = gsap.quickTo(cursor, 'y', { duration: 0.5, ease: 'power3.out' });
    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power2.out' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power2.out' });

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([cursor, dot], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToDot(e.clientX);
      yToDot(e.clientY);
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, dot], { opacity: 1, duration: 0.2 });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, dot], { opacity: 0, duration: 0.3 });
      isVisible = false;
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('a, button, input, select, textarea, [data-interactive]');
      if (isInteractive) {
        gsap.to(cursor, { scale: 1.8, backgroundColor: 'rgba(210, 41, 49, 0.1)', borderColor: '#D22931', duration: 0.3 });
        gsap.to(dot, { scale: 0.5, backgroundColor: '#D22931', duration: 0.2 });
      } else {
        gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(2, 6, 38, 0.2)', duration: 0.3 });
        gsap.to(dot, { scale: 1, backgroundColor: '#020626', duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-[#020626]/20 pointer-events-none z-[9999] opacity-0 will-change-transform"
        style={{ transition: 'border-color 0.2s ease, background-color 0.2s ease' }}
      />
      {/* Inner Precision Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#020626] pointer-events-none z-[10000] opacity-0 will-change-transform"
      />
    </>
  );
};
