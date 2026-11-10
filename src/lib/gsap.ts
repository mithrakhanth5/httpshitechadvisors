import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GreenSock plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Editorial ease per Section 6: Subtle and purposeful (fade-and-rise on scroll)
 */
export const EDITORIAL_EASE = 'power3.out';
export const SMOOTH_SPRING_EASE = 'expo.out';

/**
 * Continuous bi-directional scroll entrance config (plays on scroll down and re-engages on scroll up)
 */
export const BIDIRECTIONAL_SCROLL_CONFIG = {
  start: 'top 88%',
  end: 'bottom 12%',
  toggleActions: 'play reverse play reverse',
};

/**
 * High-end 3D kinetic text reveal: words rotate and rise with power4 deceleration
 */
export function animate3DTextReveal(
  targets: gsap.DOMTarget,
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
    trigger?: gsap.DOMTarget;
  } = {}
) {
  const { delay = 0, duration = 1.05, stagger = 0.07, trigger } = options;

  return gsap.fromTo(
    targets,
    {
      y: 35,
      rotateX: 18,
      opacity: 0,
      transformOrigin: 'bottom center',
    },
    {
      y: 0,
      rotateX: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: trigger
        ? {
            trigger,
            ...BIDIRECTIONAL_SCROLL_CONFIG,
          }
        : undefined,
    }
  );
}

/**
 * Smooth fade-and-rise entrance for cards, paragraphs, or containers
 */
export function animateFadeUp(
  targets: gsap.DOMTarget,
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    trigger?: gsap.DOMTarget;
    stagger?: number;
  } = {}
) {
  const { delay = 0, duration = 0.75, y = 28, trigger, stagger = 0.08 } = options;

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y,
      scale: 0.98,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: EDITORIAL_EASE,
      scrollTrigger: trigger
        ? {
            trigger,
            ...BIDIRECTIONAL_SCROLL_CONFIG,
          }
        : undefined,
    }
  );
}

/**
 * Rolling odometer counter animation for metrics with bi-directional replay
 */
export function animateCounterRoll(
  target: HTMLElement,
  targetValue: number,
  options: {
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    trigger?: gsap.DOMTarget;
  } = {}
) {
  const { duration = 1.8, decimals = 0, prefix = '', suffix = '', trigger } = options;
  const obj = { val: 0 };

  return gsap.to(obj, {
    val: targetValue,
    duration,
    ease: 'power3.out',
    scrollTrigger: trigger
      ? {
          trigger,
          start: 'top 88%',
          toggleActions: 'restart none none reverse',
        }
      : undefined,
    onUpdate: () => {
      target.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
    },
  });
}

export { gsap, ScrollTrigger };
