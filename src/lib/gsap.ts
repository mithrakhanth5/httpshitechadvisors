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
      yPercent: 120,
      rotateX: 25,
      opacity: 0,
      transformOrigin: 'bottom center',
    },
    {
      yPercent: 0,
      rotateX: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: 'power4.out',
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
            once: true,
          }
        : undefined,
    }
  );
}

/**
 * Creates a masked text reveal animation on an element when scrolled into view
 */
export function animateMaskedText(
  targets: gsap.DOMTarget,
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
    trigger?: gsap.DOMTarget;
  } = {}
) {
  const { delay = 0, duration = 0.8, stagger = 0.08, trigger } = options;

  return gsap.fromTo(
    targets,
    {
      yPercent: 110,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: EDITORIAL_EASE,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
            once: true,
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
  const { delay = 0, duration = 0.7, y = 24, trigger, stagger = 0.08 } = options;

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: EDITORIAL_EASE,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
          }
        : undefined,
    }
  );
}

/**
 * Rolling odometer counter animation for metrics
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
          start: 'top 85%',
          once: true,
        }
      : undefined,
    onUpdate: () => {
      target.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
    },
  });
}

export { gsap, ScrollTrigger };
