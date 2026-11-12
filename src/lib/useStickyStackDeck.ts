import { useEffect, useLayoutEffect, useRef, type MutableRefObject, type RefObject } from 'react';
import { ScrollTrigger, gsap } from './gsap';

export interface UseStickyStackDeckOptions {
  desktopStickyTop?: number;
  mobileStickyTop?: number;
  desktopOffsetStep?: number;
  mobileOffsetStep?: number;
  desktopScaleStep?: number;
  mobileScaleStep?: number;
  desktopShadeStep?: number;
  mobileShadeStep?: number;
  desktopMinGap?: number;
  mobileMinGap?: number;
  onActiveIndexChange?: (index: number) => void;
}

/**
 * Shared GSAP ScrollTrigger engine for Symmetry-style sticky stacking card decks:
 * - Dynamically measures sticky header heights so docked/rising cards never overlap headers
 * - Scrubs receding scale (`origin: 50% 0%`) and subtle shade darkening as newer cards dock
 * - Optionally reports active front card index across scroll & supports instant sentinel jump helpers
 */
export function useStickyStackDeck(
  refs: {
    sectionRef: RefObject<HTMLElement | null>;
    desktopHeaderRef: RefObject<HTMLElement | null>;
    mobileHeadingRef: RefObject<HTMLElement | null>;
    sentinelRefs: MutableRefObject<(HTMLDivElement | null)[]>;
    slotRefs: MutableRefObject<(HTMLDivElement | null)[]>;
    cardRefs: MutableRefObject<(HTMLElement | null)[]>;
    shadeRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  },
  cardCount: number,
  options: UseStickyStackDeckOptions = {}
) {
  const {
    desktopStickyTop = 72,
    mobileStickyTop = 60,
    desktopOffsetStep = 14,
    mobileOffsetStep = 10,
    desktopScaleStep = 0.036,
    mobileScaleStep = 0.03,
    desktopShadeStep = 0.055,
    mobileShadeStep = 0.05,
    desktopMinGap = 12,
    mobileMinGap = 8,
    onActiveIndexChange,
  } = options;

  const {
    sectionRef,
    desktopHeaderRef,
    mobileHeadingRef,
    sentinelRefs,
    slotRefs,
    cardRefs,
    shadeRefs,
  } = refs;

  const onActiveChangeRef = useRef(onActiveIndexChange);
  useEffect(() => {
    onActiveChangeRef.current = onActiveIndexChange;
  }, [onActiveIndexChange]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || cardCount === 0) return;

    const mm = gsap.matchMedia();

    const computeStackTop = (isDesktop: boolean) => {
      if (isDesktop) {
        const headerEl = desktopHeaderRef.current;
        const measuredHeight = headerEl ? headerEl.getBoundingClientRect().height : 204;
        return Math.round(desktopStickyTop + measuredHeight + desktopMinGap);
      }
      const mobileEl = mobileHeadingRef.current;
      const measuredHeight = mobileEl ? mobileEl.getBoundingClientRect().height : 78;
      return Math.round(mobileStickyTop + measuredHeight + mobileMinGap);
    };

    const ctx = gsap.context(() => {
      const setupDeckScrub = (
        isDesktop: boolean,
        offsetStep: number,
        scaleStep: number,
        shadeStep: number
      ) => {
        const cardsSnapshot = [...cardRefs.current];
        const shadesSnapshot = [...shadeRefs.current];
        const slotsSnapshot = [...slotRefs.current];
        const sentinelsSnapshot = [...sentinelRefs.current];
        const transitionCount = Math.max(0, cardCount - 1);
        const stepProgress = new Array<number>(transitionCount).fill(0);

        let activeStackTop = computeStackTop(isDesktop);

        const syncSlotTops = () => {
          activeStackTop = computeStackTop(isDesktop);
          slotsSnapshot.forEach((slotEl, idx) => {
            if (!slotEl) return;
            slotEl.style.top = `${activeStackTop + idx * offsetStep}px`;
          });
        };

        const applyCardTransforms = () => {
          cardsSnapshot.forEach((cardEl, idx) => {
            if (!cardEl || idx >= cardCount - 1) return;

            let cumulativeDepth = 0;
            for (let stepIdx = idx; stepIdx < stepProgress.length; stepIdx += 1) {
              cumulativeDepth += stepProgress[stepIdx];
            }

            const targetScale = Math.max(0.86, 1 - cumulativeDepth * scaleStep);
            gsap.set(cardEl, {
              scale: targetScale,
              transformOrigin: '50% 0%',
              force3D: true,
            });

            const shadeEl = shadesSnapshot[idx];
            if (shadeEl) {
              gsap.set(shadeEl, {
                opacity: Math.min(0.24, cumulativeDepth * shadeStep),
              });
            }
          });
        };

        syncSlotTops();
        applyCardTransforms();

        ScrollTrigger.addEventListener('refreshInit', syncSlotTops);

        for (let k = 0; k < transitionCount; k += 1) {
          const incomingSentinel = sentinelsSnapshot[k + 1] ?? slotsSnapshot[k + 1];
          if (!incomingSentinel) continue;

          ScrollTrigger.create({
            trigger: incomingSentinel,
            start: 'top 92%',
            end: () => `top ${activeStackTop + (k + 1) * offsetStep}px`,
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              stepProgress[k] = self.progress;
              applyCardTransforms();
            },
            onRefresh: (self) => {
              stepProgress[k] = self.progress;
              applyCardTransforms();
            },
          });
        }

        if (onActiveChangeRef.current) {
          for (let i = 0; i < cardCount; i += 1) {
            const sentinelEl = sentinelsSnapshot[i] ?? slotsSnapshot[i];
            if (!sentinelEl) continue;

            ScrollTrigger.create({
              trigger: sentinelEl,
              start: 'top 60%',
              invalidateOnRefresh: true,
              onEnter: () => onActiveChangeRef.current?.(i),
              onEnterBack: () => onActiveChangeRef.current?.(i),
              onLeaveBack: () => {
                if (i > 0) onActiveChangeRef.current?.(i - 1);
              },
            });
          }
        }

        const lastCard = cardsSnapshot[cardCount - 1];
        if (lastCard) {
          gsap.set(lastCard, { scale: 1, clearProps: 'transform' });
        }

        return () => {
          ScrollTrigger.removeEventListener('refreshInit', syncSlotTops);
          cardsSnapshot.forEach((cardEl) => {
            if (cardEl) gsap.set(cardEl, { clearProps: 'transform' });
          });
          shadesSnapshot.forEach((shadeEl) => {
            if (shadeEl) gsap.set(shadeEl, { clearProps: 'opacity' });
          });
        };
      };

      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () =>
        setupDeckScrub(true, desktopOffsetStep, desktopScaleStep, desktopShadeStep)
      );

      mm.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () =>
        setupDeckScrub(false, mobileOffsetStep, mobileScaleStep, mobileShadeStep)
      );

      mm.add('(prefers-reduced-motion: reduce)', () => {
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;
        const baseTop = computeStackTop(isDesktop);
        const step = isDesktop ? desktopOffsetStep : mobileOffsetStep;
        slotRefs.current.forEach((slotEl, idx) => {
          if (!slotEl) return;
          slotEl.style.top = `${baseTop + idx * step}px`;
        });
        cardRefs.current.forEach((cardEl) => {
          if (cardEl) gsap.set(cardEl, { clearProps: 'transform' });
        });
        shadeRefs.current.forEach((shadeEl) => {
          if (shadeEl) gsap.set(shadeEl, { opacity: 0 });
        });
      });
    }, section);

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });
      if (desktopHeaderRef.current) resizeObserver.observe(desktopHeaderRef.current);
      if (mobileHeadingRef.current) resizeObserver.observe(mobileHeadingRef.current);
    }

    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }
    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 450);

    return () => {
      resizeObserver?.disconnect();
      window.clearTimeout(refreshTimer);
      mm.revert();
      ctx.revert();
    };
  }, [
    cardCount,
    cardRefs,
    desktopHeaderRef,
    desktopMinGap,
    desktopOffsetStep,
    desktopScaleStep,
    desktopShadeStep,
    desktopStickyTop,
    mobileHeadingRef,
    mobileMinGap,
    mobileOffsetStep,
    mobileScaleStep,
    mobileShadeStep,
    mobileStickyTop,
    sectionRef,
    sentinelRefs,
    shadeRefs,
    slotRefs,
  ]);
}
