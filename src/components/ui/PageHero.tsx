import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { animateMaskedLines, gsap, SYM_EASE } from '../../lib/gsap';

interface PageHeroProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  description: string;
  onOpenDiscuss?: () => void;
  ctaText?: string;
  visual?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  highlightTitle,
  description,
  onOpenDiscuss,
  ctaText = 'Discuss a Challenge',
  visual,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cleanHeading = animateMaskedLines(headingRef.current, {
      immediate: true,
      delay: 0.1,
      duration: 0.88,
      stagger: 0.1,
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.ph-badge'),
        { opacity: 0, y: -12, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: SYM_EASE.pop }
      );
      gsap.fromTo(
        section.querySelector('.ph-desc'),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.75, delay: 0.22, ease: SYM_EASE.snappy }
      );
      const ctaEl = section.querySelector('.ph-cta');
      if (ctaEl) {
        gsap.fromTo(
          ctaEl,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.72, delay: 0.32, ease: SYM_EASE.snappy }
        );
      }
      const visualEl = section.querySelector('.ph-visual');
      if (visualEl) {
        gsap.fromTo(
          visualEl,
          { opacity: 0, y: 24, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.82, delay: 0.18, ease: SYM_EASE.snappy }
        );
      }
    }, section);

    return () => {
      cleanHeading();
      ctx.revert();
    };
  }, [title, highlightTitle, badge]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-14 sm:pb-18 bg-white border-b border-[#DCE4EC] overflow-hidden"
    >
      {/* Floating Ambient Light Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[25%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#D22931]/8 to-[#FAC344]/8 blur-[120px] animate-ambient-blob-1" />
        <div className="absolute top-[20%] -right-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-[#020626]/5 to-[#D22931]/6 blur-[130px] animate-ambient-blob-2" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-10">
        {visual ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Narrative Content & CTA */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="ph-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#DCE4EC] shadow-2xs text-xs font-semibold uppercase tracking-wider text-[#D22931] mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#D22931]" />
                <span dangerouslySetInnerHTML={{ __html: badge }} />
              </div>

              <h1
                ref={headingRef}
                className="font-display font-extrabold text-[clamp(2.25rem,4.5vw,3.75rem)] text-[#020626] leading-[1.14] tracking-tight pb-3"
              >
                {title}{' '}
                {highlightTitle && (
                  <span className="text-[#D22931] font-display font-extrabold">
                    {highlightTitle}
                  </span>
                )}
              </h1>

              <p className="ph-desc mt-3 text-base sm:text-lg text-[#556070] leading-relaxed max-w-xl">
                {description}
              </p>

              {onOpenDiscuss && (
                <div className="ph-cta mt-8 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={onOpenDiscuss}
                    className="sym-btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider py-3.5 px-7 rounded-xl bg-[#D22931] hover:bg-[#b52027] text-white shadow-md hover:shadow-xl cursor-pointer group"
                  >
                    <span>{ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              )}
            </div>

            <div className="ph-visual lg:col-span-6 w-full flex items-center justify-center lg:justify-end">
              {visual}
            </div>
          </div>
        ) : (
          <div className="text-center flex flex-col items-center max-w-[1240px] mx-auto">
            <div className="ph-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#DCE4EC] shadow-2xs text-xs font-semibold uppercase tracking-wider text-[#D22931] mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D22931]" />
              <span dangerouslySetInnerHTML={{ __html: badge }} />
            </div>

            <h1
              ref={headingRef}
              className="font-display font-extrabold text-[clamp(2.35rem,5.4vw,4.4rem)] text-[#020626] leading-[1.12] tracking-tight max-w-4xl pb-3"
            >
              {title}{' '}
              {highlightTitle && (
                <span className="text-[#D22931] font-display font-extrabold">
                  {highlightTitle}
                </span>
              )}
            </h1>

            <p className="ph-desc mt-4 max-w-2xl text-base sm:text-lg lg:text-xl text-[#556070] leading-relaxed">
              {description}
            </p>

            {onOpenDiscuss && (
              <div className="ph-cta mt-8 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={onOpenDiscuss}
                  className="sym-btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider py-3.5 px-7 rounded-xl bg-[#D22931] hover:bg-[#b52027] text-white shadow-md hover:shadow-xl cursor-pointer group"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};