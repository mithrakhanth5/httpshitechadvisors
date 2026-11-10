import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, EDITORIAL_EASE } from '../lib/gsap';

export interface UseGSAPRevealOptions {
  y?: number;
  yPercent?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function useGSAPReveal({
  y = 30,
  yPercent,
  duration = 0.85,
  delay = 0,
  stagger = 0.08,
  once = true,
}: UseGSAPRevealOptions = {}) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
    };
    if (yPercent !== undefined) fromVars.yPercent = yPercent;
    else fromVars.y = y;

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      yPercent: 0,
      duration,
      delay,
      stagger,
      ease: EDITORIAL_EASE,
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once,
      },
    };

    const tween = gsap.fromTo(el, fromVars, toVars);

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.trigger === el && t.kill());
    };
  }, [y, yPercent, duration, delay, stagger, once]);

  return elementRef;
}
