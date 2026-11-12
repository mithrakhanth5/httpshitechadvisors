import React, { useEffect, useRef } from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap, SYM_EASE, animateMaskedLines } from '../../lib/gsap';

interface NextPageBannerProps {
  currentStage: string;
  nextTitle: string;
  nextPath: string;
  description: string;
}

export const NextPageBanner: React.FC<NextPageBannerProps> = ({
  currentStage,
  nextTitle,
  nextPath,
  description,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cleanupLines = animateMaskedLines(titleRef.current, {
      trigger: container,
      start: 'top 90%',
      duration: 0.78,
      stagger: 0.08,
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.querySelector('.next-banner-rule'),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: container,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        container.querySelector('.next-banner-card'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: container,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, container);

    return () => {
      cleanupLines();
      ctx.revert();
    };
  }, [nextPath]);

  return (
    <div ref={containerRef} className="py-10 sm:py-12 bg-[#EBF2F7] border-t border-[#DCE4EC] relative">
      <div
        className="next-banner-rule absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D22931]/55 to-transparent origin-left"
      />
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <Link to={nextPath} className="next-banner-card group block">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DCE4EC] hover:border-[#D22931]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-300 relative overflow-hidden">
            {/* Ambient red highlight glow on hover */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D22931]/8 to-transparent rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D22931] mb-2">
                  <Compass className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45" />
                  <span>Next Section &middot; {currentStage}</span>
                </div>
                <h3
                  ref={titleRef}
                  className="font-display font-bold text-2xl sm:text-3xl text-[#020626] group-hover:text-[#D22931] transition-colors leading-tight"
                >
                  {nextTitle}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#556070] max-w-2xl leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="sym-btn inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#020626] text-white text-xs font-bold uppercase tracking-wider group-hover:bg-[#D22931] shadow-sm self-start md:self-center flex-shrink-0">
                <span className="sym-link-underline">Continue Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
