import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';

// Register GreenSock plugins once in browser context
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
  CustomEase.create('symSnappy', 'M0,0 C0.16,1 0.3,1 1,1');
  CustomEase.create('symSmooth', 'M0,0 C0.22,1 0.36,1 1,1');
  CustomEase.create('symPop', 'M0,0 C0.34,1.56 0.64,1 1,1');
  CustomEase.create('symFloat', 'M0,0 C0.37,0 0.63,1 1,1');
}

/**
 * Symmetry-trained GSAP easing tokens mapped from CustomEase curves
 */
export const SYM_EASE = {
  snappy: 'symSnappy',
  smooth: 'symSmooth',
  pop: 'symPop',
  float: 'symFloat',
} as const;

export const EDITORIAL_EASE = SYM_EASE.snappy;
export const SMOOTH_SPRING_EASE = SYM_EASE.smooth;

export const BIDIRECTIONAL_SCROLL_CONFIG = {
  start: 'top 88%',
  end: 'bottom 12%',
  toggleActions: 'play reverse play reverse',
};

/**
 * Symmetry-style masked line reveal using GSAP 3.15 SplitText (`mask: "lines"`).
 * Automatically respects prefers-reduced-motion via gsap.matchMedia().
 */
export function animateMaskedLines(
  target: HTMLElement | null,
  options: {
    trigger?: HTMLElement | null;
    start?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    immediate?: boolean;
  } = {}
): () => void {
  if (!target) return () => {};

  const {
    trigger = target,
    start = 'top 84%',
    delay = 0,
    duration = 0.88,
    stagger = 0.1,
    immediate = false,
  } = options;

  let splitInstance: SplitText | null = null;
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    splitInstance = SplitText.create(target, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self) => {
        gsap.fromTo(
          self.lines,
          { yPercent: 108 },
          {
            yPercent: 0,
            duration,
            delay,
            stagger,
            ease: SYM_EASE.snappy,
            scrollTrigger: immediate
              ? undefined
              : {
                  trigger: trigger || target,
                  start,
                  toggleActions: 'play none none none',
                },
          }
        );
      },
    });
  });

  return () => {
    splitInstance?.revert();
    mm.revert();
  };
}

/**
 * High-end 3D kinetic text reveal preserved for backward compatibility
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
  const { delay = 0, duration = 0.95, stagger = 0.08, trigger } = options;

  return gsap.fromTo(
    targets,
    {
      y: 32,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: SYM_EASE.snappy,
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
 * Calm fade-and-rise entrance using Symmetry's snappy bezier deceleration
 */
export function animateFadeUp(
  targets: gsap.DOMTarget,
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    trigger?: gsap.DOMTarget;
    stagger?: number;
    once?: boolean;
  } = {}
) {
  const {
    delay = 0,
    duration = 0.72,
    y = 24,
    trigger,
    stagger = 0.08,
    once = false,
  } = options;

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
      ease: SYM_EASE.snappy,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 88%',
            end: 'bottom 12%',
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
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
  const { duration = 1.6, decimals = 0, prefix = '', suffix = '', trigger } = options;
  const obj = { val: 0 };

  return gsap.to(obj, {
    val: targetValue,
    duration,
    ease: SYM_EASE.snappy,
    scrollTrigger: trigger
      ? {
          trigger,
          start: 'top 88%',
          toggleActions: 'play none none none',
        }
      : undefined,
    onUpdate: () => {
      target.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
    },
  });
}

export { gsap, ScrollTrigger, SplitText, CustomEase };
