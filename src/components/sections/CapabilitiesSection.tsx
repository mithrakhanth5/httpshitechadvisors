import React, { useEffect, useRef } from 'react';
import { Compass, Code2, TrendingUp, Users2, ArrowRight } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { TiltCard } from '../ui/TiltCard';
import { TextShimmer } from '../ui/TextShimmer';
import { hitechContent } from '../../data/hitechContent';

interface CapabilitiesSectionProps {
  onSelectCapability: (helpArea: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectCapability }) => {
  const { capabilities } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.cap-header'),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.cap-card'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.cap-grid'),
            start: 'top 85%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const capIcons = [
    <Compass key="compass" className="w-6 h-6 text-[#D22931]" />,
    <Code2 key="code" className="w-6 h-6 text-[#D22931]" />,
    <TrendingUp key="trend" className="w-6 h-6 text-[#D22931]" />,
    <Users2 key="users" className="w-6 h-6 text-[#D22931]" />,
  ];

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative py-24 sm:py-32 bg-white border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="cap-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span>Delivery Engine</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            How we <TextShimmer>deliver</TextShimmer>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            {capabilities.subhead}
          </p>
        </div>

        {/* 4 Capability Cards in a 4-Column Grid with 3D Tilt */}
        <div className="cap-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.cards.map((cap, idx) => (
            <div key={cap.title} className="cap-card h-full">
              <TiltCard
                maxTilt={8}
                scale={1.02}
                showBorderBeam={idx === 1} // Engineering & Architecture gets dynamic beam
                borderBeamDuration={10}
                spotlightColor="rgba(210, 41, 49, 0.08)"
                borderColor="rgba(210, 41, 49, 0.45)"
                className="p-8 rounded-2xl border border-[#DCE4EC] bg-[#EBF2F7] hover:border-[#D22931]/60 hover:bg-white shadow-2xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE4EC] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shadow-2xs">
                    {capIcons[idx]}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#556070] leading-relaxed">{cap.line}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DCE4EC]">
                  <button
                    onClick={() => onSelectCapability(cap.helpArea)}
                    className="inline-flex items-center justify-between w-full font-display font-bold text-xs uppercase tracking-wider text-[#020626] group-hover:text-[#D22931] transition-colors cursor-pointer"
                  >
                    <span>Explore capability</span>
                    <ArrowRight className="w-4 h-4 text-[#D22931] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
