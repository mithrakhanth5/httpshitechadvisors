import React, { useEffect, useRef, useState } from 'react';
import { Compass, Code2, TrendingUp, Users2, ArrowRight } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { TiltCard } from '../ui/TiltCard';
import { hitechContent } from '../../data/hitechContent';

interface CapabilitiesSectionProps {
  onSelectCapability: (helpArea: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectCapability }) => {
  const { capabilities } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeCapIndex, setActiveCapIndex] = useState<number>(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.cap-header'),
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

      gsap.fromTo(
        section.querySelectorAll('.cap-card'),
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.cap-grid'),
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
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
      className="relative py-14 sm:py-18 bg-white border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="cap-header max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span>Delivery Engine</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            How we <span className="text-[#D22931]">deliver</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            {capabilities.subhead}
          </p>
        </div>

        {/* Symmetry-Inspired 2x2 Bento Architecture (Replaces uniform squished boxes) */}
        <div className="cap-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.cards.map((cap, idx) => {
            const isSelected = activeCapIndex === idx;
            return (
              <div
                key={cap.title}
                className="cap-card h-full"
                onMouseEnter={() => setActiveCapIndex(idx)}
              >
                <TiltCard
                  maxTilt={5}
                  scale={1.015}
                  showBorderBeam={isSelected}
                  borderBeamDuration={10}
                  spotlightColor="rgba(210, 41, 49, 0.12)"
                  borderColor="rgba(210, 41, 49, 0.5)"
                  className={`p-8 sm:p-10 rounded-[28px] transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-2xl ring-2 ring-[#D22931]/15 -translate-y-1'
                      : 'border-[#DCE4EC] bg-[#F8FAFC] hover:border-[#D22931]/40 hover:bg-white shadow-2xs hover:shadow-lg'
                  }`}
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-[#DCE4EC] flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                        {capIcons[idx]}
                      </div>
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#EBF2F7] text-[#556070] border border-[#DCE4EC]">
                        Capability 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#556070] leading-relaxed">
                      {cap.line}
                    </p>
                  </div>

                  <div className="pt-6 mt-8 border-t border-[#DCE4EC]">
                    <button
                      onClick={() => onSelectCapability(cap.helpArea)}
                      className="inline-flex items-center justify-between w-full font-display font-bold text-xs uppercase tracking-wider text-[#020626] group-hover:text-[#D22931] transition-colors cursor-pointer"
                    >
                      <span>Explore Delivery Capability</span>
                      <ArrowRight className="w-4 h-4 text-[#D22931] group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
