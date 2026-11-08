import React, { useEffect, useRef } from 'react';
import { 
  Building2, 
  ShoppingCart, 
  Landmark, 
  Stethoscope, 
  Factory, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import { gsap, SYMMETRY_EASE } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';

interface IndustriesSectionProps {
  onOpenContact: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenContact }) => {
  const { industries } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.ind-header'),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.ind-card'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.ind-grid'),
            start: 'top 85%',
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
      className="relative py-24 sm:py-32 bg-white border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="ind-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span>Sector Relevance</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            {industries.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            Technology problems look similar on paper and very different in practice. We bring cross-industry experience and people who know your sector's systems, regulations and customers.
          </p>
        </div>

        {/* 6 Industry Tiles Grid */}
        <div className="ind-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.items.map((ind, idx) => (
            <div
              key={ind.name}
              className="ind-card card-hover-feelgood p-8 rounded-2xl bg-[#EBF2F7] border border-[#DCE4EC] hover:border-[#D22931] hover:bg-white shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
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
            </div>
          ))}
        </div>

        {/* Closing Prompt Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#EBF2F7] border border-[#DCE4EC] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xs">
          <p className="text-base text-[#020626] font-medium m-0 max-w-2xl">
            {industries.closingPrompt}
          </p>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#020626] hover:bg-[#D22931] text-white font-display font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex-shrink-0 cursor-pointer group"
          >
            <span>Discuss a Challenge</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
