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
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';
import { TiltCard } from '../ui/TiltCard';

interface IndustriesSectionProps {
  onOpenContact: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenContact }) => {
  const { industries } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header entrance with bi-directional scroll
      gsap.fromTo(
        section.querySelector('.ind-header'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Staggered card grid reveal with bi-directional scroll
      gsap.fromTo(
        section.querySelectorAll('.ind-card'),
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.ind-grid'),
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
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
        <div className="ind-header max-w-3xl mb-10 sm:mb-12">
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Six Core <span className="text-[#D22931]">Verticals.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#556070] leading-relaxed">
            Representative operating challenges and domain contexts across the industries we serve.
          </p>
        </div>

        {/* 6 Industry Tiles Grid with 3D Tilt */}
        <div className="ind-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.items.map((ind, idx) => {
            const isSelected = activeIndustryIndex === idx;
            return (
              <div
                key={ind.name}
                className="ind-card h-full"
                onMouseEnter={() => setActiveIndustryIndex(idx)}
              >
                <TiltCard
                  maxTilt={6}
                  scale={1.02}
                  showBorderBeam={isSelected}
                  borderBeamDuration={10}
                  spotlightColor="rgba(210, 41, 49, 0.12)"
                  borderColor="rgba(210, 41, 49, 0.5)"
                  className={`p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-2xl ring-2 ring-[#D22931]/15 -translate-y-1'
                      : 'border-[#DCE4EC] bg-[#EBF2F7] hover:border-[#D22931]/40 shadow-2xs hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE4EC] flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:bg-[#EBF2F7] transition-all duration-300">
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
                </TiltCard>
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
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#020626] hover:bg-[#D22931] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-lg flex-shrink-0 cursor-pointer group hover:scale-105 active:scale-95 duration-200"
          >
            <span>Discuss a Challenge</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
