import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger, animateMaskedLines, gsap } from '../../lib/gsap';

export interface StackCardItem {
  id: string;
  indexLabel: string;
  eyebrow?: string;
  title: string;
  description: string;
  renderVisual: () => React.ReactNode;
}

export interface SymmetryStackTransitionProps {
  id?: string;
  eyebrow?: string;
  headingLines: [string, string];
  highlightSecondLine?: boolean;
  subtitle: string;
  headerAction?: React.ReactNode;
  cards: StackCardItem[];
  className?: string;
}

/**
 * GSAP ScrollTrigger + SplitText recreation of Symmetry's sticky stacking deck transition.
 *
 * Choreography & Layout Guarantees:
 * 1. Reuses shared `animateMaskedLines` (with serif descender clearance) + subtitle fade-rise.
 * 2. Measures the sticky header dynamically (`headerStickyTop + headerHeight + gap`) on init
 *    and `refreshInit` so docked cards NEVER overlap the heading/subtitle at any breakpoint.
 * 3. Isolates stacking cards inside a `z-10` deck container strictly beneath the `z-30` sticky
 *    header curtain so incoming cards never paint over header content while rising.
 */
export const SymmetryStackTransition: React.FC<SymmetryStackTransitionProps> = ({
  id,
  eyebrow,
  headingLines,
  highlightSecondLine = false,
  subtitle,
  headerAction,
  cards,
  className = '',
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const desktopHeaderRef = useRef<HTMLDivElement | null>(null);
  const mobileHeadingRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const shadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const subtitleEl = subtitleRef.current;
    if (!section || !heading || cards.length === 0) return;

    const cleanHeading = animateMaskedLines(heading, {
      trigger: section,
      start: 'top 80%',
      duration: 0.9,
      stagger: 0.11,
    });

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        if (subtitleEl) {
          gsap.fromTo(
            subtitleEl,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              delay: 0.16,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      const computeStackTop = (isDesktop: boolean) => {
        if (isDesktop) {
          const headerEl = desktopHeaderRef.current;
          const stickyTop = 72;
          const measuredHeight = headerEl ? headerEl.getBoundingClientRect().height : 204;
          return Math.round(stickyTop + measuredHeight + 12);
        }
        const mobileEl = mobileHeadingRef.current;
        const stickyTop = 60;
        const measuredHeight = mobileEl ? mobileEl.getBoundingClientRect().height : 78;
        return Math.round(stickyTop + measuredHeight + 8);
      };

      // Helper to set up receding card depth & shade per responsive breakpoint
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
        const transitionCount = Math.max(0, cards.length - 1);
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
            if (!cardEl || idx >= cards.length - 1) return;

            let cumulativeDepth = 0;
            for (let stepIdx = idx; stepIdx < stepProgress.length; stepIdx += 1) {
              cumulativeDepth += stepProgress[stepIdx];
            }

            const targetScale = Math.max(0.88, 1 - cumulativeDepth * scaleStep);
            gsap.set(cardEl, {
              scale: targetScale,
              transformOrigin: '50% 0%',
              force3D: true,
            });

            const shadeEl = shadesSnapshot[idx];
            if (shadeEl) {
              gsap.set(shadeEl, {
                opacity: Math.min(0.16, cumulativeDepth * shadeStep),
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

        // Keep final front card crisply at scale 1
        const lastCard = cardsSnapshot[cards.length - 1];
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
        setupDeckScrub(true, 14, 0.036, 0.055)
      );

      mm.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () =>
        setupDeckScrub(false, 10, 0.03, 0.05)
      );

      mm.add('(prefers-reduced-motion: reduce)', () => {
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;
        const baseTop = computeStackTop(isDesktop);
        slotRefs.current.forEach((slotEl, idx) => {
          if (!slotEl) return;
          slotEl.style.top = `${baseTop + idx * (isDesktop ? 14 : 10)}px`;
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
    }, 500);

    return () => {
      resizeObserver?.disconnect();
      window.clearTimeout(refreshTimer);
      cleanHeading();
      mm.revert();
      ctx.revert();
    };
  }, [cards.length]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative bg-white text-[#020626] pt-14 pb-20 md:pt-18 md:pb-24 ${className}`}
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Sticky Header Block: stays z-30 above the z-10 card deck so rising slides never cover text */}
        <div
          ref={desktopHeaderRef}
          className="contents md:block md:sticky md:top-[72px] md:z-30 md:bg-white md:pt-2 md:pb-4 md:after:pointer-events-none md:after:block md:after:absolute md:after:inset-x-0 md:after:top-full md:after:h-4 md:after:bg-gradient-to-b md:after:from-white md:after:to-transparent"
        >
          {(eyebrow || headerAction) && (
            <div className="mb-2.5 flex flex-wrap items-center justify-between gap-3">
              {eyebrow ? (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-[10px] font-bold uppercase tracking-[0.18em] text-[#D22931]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
                  <span>{eyebrow}</span>
                </div>
              ) : (
                <span />
              )}
              {headerAction && <div className="flex-shrink-0">{headerAction}</div>}
            </div>
          )}

          <div
            ref={mobileHeadingRef}
            className="sticky top-[60px] z-30 bg-white pt-1.5 pb-2.5 md:static md:bg-transparent md:p-0 after:pointer-events-none after:block md:after:hidden after:absolute after:inset-x-0 after:top-full after:h-3 after:bg-gradient-to-b after:from-white after:to-transparent"
          >
            <h2
              ref={headingRef}
              className="font-display font-extrabold text-[26px] leading-[1.12] sm:text-4xl md:text-[40px] md:leading-[1.08] tracking-tight text-[#020626]"
            >
              <span className="block">{headingLines[0]}</span>
              <span className={`block ${highlightSecondLine ? 'text-[#D22931]' : 'text-[#020626]'}`}>
                {headingLines[1]}
              </span>
            </h2>
          </div>

          <p
            ref={subtitleRef}
            className="mt-2 md:mt-2.5 max-w-3xl text-sm sm:text-base text-[#556070] leading-relaxed"
          >
            {subtitle}
          </p>
        </div>

        {/* Sticky Stacking Card Deck: isolated in z-10 beneath z-30 header */}
        <div
          className="relative z-10 mt-5 md:mt-6"
          style={{ ['--cards' as string]: cards.length }}
        >
          {cards.map((card, index) => {
            const isFirst = index === 0;
            const isLast = index === cards.length - 1;

            return (
              <React.Fragment key={card.id}>
                {/* Non-sticky flow sentinel keeps ScrollTrigger scrub range invariant across resizes */}
                <div
                  ref={(el) => {
                    sentinelRefs.current[index] = el;
                  }}
                  aria-hidden="true"
                  className="h-0 w-full pointer-events-none"
                />
                <div
                  ref={(el) => {
                    slotRefs.current[index] = el;
                  }}
                  style={{ zIndex: index + 1 }}
                  className="sticky will-change-transform"
                >
                <article
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`relative overflow-hidden rounded-2xl md:rounded-[24px] bg-[#F5F8FB] border border-[#DCE4EC] will-change-transform ${
                    isFirst
                      ? 'shadow-[0_12px_36px_-18px_rgba(2,6,38,0.12)]'
                      : 'shadow-[0_-1px_0_rgba(2,6,38,0.06),0_-16px_38px_-18px_rgba(2,6,38,0.18)]'
                  }`}
                >
                  {/* Subtle darkening veil controlled by ScrollTrigger as newer cards stack on top */}
                  <div
                    ref={(el) => {
                      shadeRefs.current[index] = el;
                    }}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#020626] opacity-0 z-20"
                  />

                  {/* Subtle architectural isometric floor pattern */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.42]"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 82% 50%, rgba(210,41,49,0.04) 0%, transparent 56%), linear-gradient(to right, rgba(2,6,38,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,38,0.035) 1px, transparent 1px)',
                      backgroundSize: '100% 100%, 36px 36px, 36px 36px',
                    }}
                  />

                  {/* Card Inner Grid: compact vertical layout on mobile, 2-column split on desktop */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-stretch min-h-0 md:min-h-[370px]">
                    {/* Editorial Copy */}
                    <div className="md:col-span-5 p-5 sm:p-7 md:p-10 flex flex-col justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2.5 mb-3 md:mb-4">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#020626] text-white font-mono text-[11px] font-bold">
                            {card.indexLabel}
                          </span>
                          {card.eyebrow && (
                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#D22931]">
                              {card.eyebrow}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display font-bold text-xl sm:text-2xl md:text-[28px] leading-[1.16] text-[#020626] mb-2.5 md:mb-3">
                          {card.title}
                        </h3>

                        <p className="text-[13px] sm:text-sm md:text-[15px] text-[#3A4A5A] leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      <div className="hidden md:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#556070]">
                        <span className="w-4 h-px bg-[#D22931]" />
                        <span>
                          Card {index + 1} of {cards.length}
                        </span>
                      </div>
                    </div>

                    {/* Visual Stage */}
                    <div className="md:col-span-7 p-4 pt-0 sm:px-7 sm:pb-6 md:p-8 flex items-center justify-center">
                      <div className="w-full min-h-[248px] sm:min-h-[268px] md:h-[312px] rounded-xl md:rounded-2xl bg-white border border-[#DCE4EC] shadow-xs overflow-hidden relative flex items-center justify-center p-2.5 sm:p-3">
                        {card.renderVisual()}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div
                aria-hidden="true"
                className={isLast ? 'h-[120px] md:h-[180px]' : 'h-[88px] md:h-[148px]'}
              />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
