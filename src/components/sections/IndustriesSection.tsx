import React, { useEffect, useRef, useState } from 'react';
import {
  Building2,
  ShoppingCart,
  Landmark,
  Stethoscope,
  Factory,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { gsap, ScrollTrigger, SYM_EASE, animateMaskedLines } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';

interface IndustriesSectionProps {
  onOpenContact: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenContact }) => {
  const { industries } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cleanupLines = animateMaskedLines(titleRef.current, { trigger: section });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.ind-header-anim'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section,
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>(section.querySelectorAll('.ind-card'));
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.74,
            ease: SYM_EASE.snappy,
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );

        const rule = card.querySelector('.ind-rule');
        if (rule) {
          gsap.fromTo(
            rule,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.65,
              ease: SYM_EASE.snappy,
              scrollTrigger: {
                trigger: card,
                start: 'top 86%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        ScrollTrigger.create({
          trigger: card,
          start: 'top 52%',
          end: 'bottom 52%',
          onEnter: () => setActiveIndustryIndex(idx),
          onEnterBack: () => setActiveIndustryIndex(idx),
        });
      });
    }, section);

    return () => {
      cleanupLines();
      ctx.revert();
    };
  }, []);

  const industryIcons = [
    <Building2 key="tech" className="w-6 h-6 text-[#D22931]" />,
    <ShoppingCart key="retail" className="w-6 h-6 text-[#D22931]" />,
    <Landmark key="fin" className="w-6 h-6 text-[#D22931]" />,
    <Stethoscope key="health" className="w-6 h-6 text-[#D22931]" />,
    <Factory key="mfg" className="w-6 h-6 text-[#D22931]" />,
    <HeartHandshake key="nonprofit" className="w-6 h-6 text-[#D22931]" />,
  ];

  const activeSector = industries.items[activeIndustryIndex] || industries.items[0];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative py-14 sm:py-20 bg-white border-t border-[#DCE4EC] overflow-x-clip"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Symmetry Sticky Split Layout: Sticky Header + Live Scroll Sector Tracker | Scrolling Verticals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <div className="ind-header-anim inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-mono font-bold uppercase tracking-wider text-[#020626]">
              <span className="relative flex h-2 w-2">
                <span className="sym-pulse-ring absolute inset-0 rounded-full bg-[#D22931]/65" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D22931]" />
              </span>
              <span>Sector 0{activeIndustryIndex + 1} / 0{industries.items.length}</span>
            </div>

            <h2
              ref={titleRef}
              className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight"
            >
              Six Core <span className="text-[#D22931]">Verticals.</span>
            </h2>

            <p className="ind-header-anim text-base sm:text-lg text-[#556070] leading-relaxed">
              Representative operating challenges and domain contexts across the industries we serve.
            </p>

            {/* Live Active Vertical Progress Indicator */}
            <div className="ind-header-anim hidden lg:block p-5 rounded-2xl bg-[#020626] text-white border border-white/10 shadow-lg space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#FAC344]">
                <span>Active Domain Lens</span>
                <span>0{activeIndustryIndex + 1} &mdash; 0{industries.items.length}</span>
              </div>
              <div className="font-display font-bold text-lg text-white leading-snug">
                {activeSector.name}
              </div>
              <div className="flex items-center gap-1.5 pt-1">
                {industries.items.map((item, idx) => (
                  <span
                    key={item.name}
                    className={`h-1.5 rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      idx === activeIndustryIndex
                        ? 'w-7 bg-[#D22931]'
                        : idx < activeIndustryIndex
                          ? 'w-3 bg-[#FAC344]'
                          : 'w-3 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="ind-grid lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {industries.items.map((ind, idx) => {
              const isSelected = activeIndustryIndex === idx;
              return (
                <div
                  key={ind.name}
                  className="ind-card"
                  onMouseEnter={() => setActiveIndustryIndex(idx)}
                >
                  <div
                    className={`p-6 sm:p-8 rounded-2xl border transition-[transform,border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#D22931] shadow-xl ring-2 ring-[#D22931]/12 -translate-y-0.5'
                        : 'border-[#DCE4EC] bg-[#EBF2F7] hover:bg-white hover:border-[#D22931]/45 shadow-2xs hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE4EC] flex items-center justify-center shadow-2xs group-hover:bg-[#EBF2F7] transition-colors duration-300 flex-shrink-0">
                          {industryIcons[idx]}
                        </div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug">
                          {ind.name}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#556070] group-hover:text-[#D22931] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="ind-rule h-px w-full bg-[#DCE4EC] origin-left mb-4" />

                    <p className="text-sm text-[#556070] leading-relaxed">
                      <strong className="text-[#020626] font-semibold">Typical challenges:</strong> {ind.challenges}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Prompt Banner */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#EBF2F7] border border-[#DCE4EC] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xs hover:shadow-md transition-shadow">
          <p className="text-base text-[#020626] font-medium m-0 max-w-2xl">
            {industries.closingPrompt}
          </p>
          <button
            onClick={onOpenContact}
            className="sym-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#020626] hover:bg-[#D22931] text-white font-display font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-lg flex-shrink-0 cursor-pointer group"
          >
            <span>Discuss a Challenge</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
