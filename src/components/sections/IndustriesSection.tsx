import React, { useEffect, useRef, useState } from 'react';
import { 
  Building2, 
  ShoppingCart, 
  Landmark, 
  Stethoscope, 
  Factory, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import { gsap, SYM_EASE, animateMaskedLines } from '../../lib/gsap';
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

      gsap.fromTo(
        section.querySelectorAll('.ind-card'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section.querySelector('.ind-grid'),
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );
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

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative py-14 sm:py-18 bg-white border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 ref={titleRef} className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Six Core <span className="text-[#D22931]">Verticals.</span>
          </h2>
          <p className="ind-header-anim mt-3 text-base sm:text-lg text-[#556070] leading-relaxed">
            Representative operating challenges and domain contexts across the industries we serve.
          </p>
        </div>

        {/* 6 Industry Tiles Grid with Symmetry Crisp Elevation */}
        <div className="ind-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.items.map((ind, idx) => {
            const isSelected = activeIndustryIndex === idx;
            return (
              <div
                key={ind.name}
                className="ind-card h-full"
                onMouseEnter={() => setActiveIndustryIndex(idx)}
              >
                <div
                  className={`p-8 rounded-2xl border transition-[transform,border-color,box-shadow,background-color] duration-300 flex flex-col justify-between group h-full cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-xl ring-2 ring-[#D22931]/15 -translate-y-1'
                      : 'border-[#DCE4EC] bg-[#EBF2F7] hover:border-[#D22931]/40 shadow-2xs hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE4EC] flex items-center justify-center shadow-2xs group-hover:bg-[#EBF2F7] transition-colors duration-300">
                        {industryIcons[idx]}
                      </div>
                      <h3 className="font-display font-bold text-xl text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug">
                        {ind.name}
                      </h3>
                    </div>
                    <p className="text-sm text-[#556070] leading-relaxed pt-4 border-t border-[#DCE4EC]">
                      <strong className="text-[#020626] font-semibold">Typical challenges:</strong> {ind.challenges}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Prompt Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#EBF2F7] border border-[#DCE4EC] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xs hover:shadow-md transition-shadow">
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
