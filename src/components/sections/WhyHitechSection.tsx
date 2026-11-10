import React, { useEffect, useRef } from 'react';
import { Scale, Rocket, Award, Network } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';
import { TiltCard } from '../ui/TiltCard';

export const WhyHitechSection: React.FC = () => {
  const { whyHitech } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.why-header'),
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
        section.querySelectorAll('.why-card'),
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.why-grid'),
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const reasonIcons = [
    <Scale key="scale" className="w-6 h-6 text-[#D22931]" />,
    <Rocket key="rocket" className="w-6 h-6 text-[#D22931]" />,
    <Award key="award" className="w-6 h-6 text-[#D22931]" />,
    <Network key="network" className="w-6 h-6 text-[#D22931]" />,
  ];

  return (
    <section
      ref={sectionRef}
      id="why-hitech"
      className="relative py-24 sm:py-32 bg-[#EBF2F7] border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="why-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span>Differentiation</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            {whyHitech.headline}
          </h2>
        </div>

        <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyHitech.reasons.map((item, idx) => (
            <div key={item.title} className="why-card h-full">
              <TiltCard
                maxTilt={6}
                scale={1.02}
                showBorderBeam={idx === 1}
                borderBeamDuration={10}
                spotlightColor="rgba(210, 41, 49, 0.08)"
                borderColor="rgba(210, 41, 49, 0.45)"
                className="p-8 rounded-2xl bg-white border border-[#DCE4EC] hover:border-[#D22931]/60 shadow-2xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EBF2F7] border border-[#DCE4EC] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {reasonIcons[idx]}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#556070] leading-relaxed">{item.body}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
