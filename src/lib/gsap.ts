import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GreenSock plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom GreenSock ease matching Symmetry's signature smooth inertia curve
 */
export const SYMMETRY_EASE = 'power4.out'; // cubic-bezier(0.16, 1, 0.3, 1)

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
  const { delay = 0, duration = 0.9, stagger = 0.1, trigger } = options;

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
      ease: SYMMETRY_EASE,
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
  const { delay = 0, duration = 0.8, y = 30, trigger, stagger = 0.08 } = options;

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
      ease: SYMMETRY_EASE,
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
 * Continuous floating physics on cards
 */
export function animateFloating(
  target: gsap.DOMTarget,
  options: { y?: number; duration?: number; delay?: number } = {}
) {
  const { y = 10, duration = 4, delay = 0 } = options;

  return gsap.to(target, {
    y: `-=${y}`,
    duration,
    delay,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}

export { gsap, ScrollTrigger };
