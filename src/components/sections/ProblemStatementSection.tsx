import React, { useEffect, useRef } from 'react';
import { FileSpreadsheet, Bot, ShieldAlert } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';
import { TiltCard } from '../ui/TiltCard';

export const ProblemStatementSection: React.FC = () => {
  const { problemStatement } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.problem-header'),
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
        section.querySelectorAll('.problem-card'),
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.problem-cards-grid'),
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const cardIcons = [
    <FileSpreadsheet key="sheet" className="w-6 h-6 text-[#D22931]" />,
    <Bot key="bot" className="w-6 h-6 text-[#D22931]" />,
    <ShieldAlert key="shield" className="w-6 h-6 text-[#D22931]" />,
  ];

  return (
    <section
      ref={sectionRef}
      id="problems"
      className="relative py-24 sm:py-32 bg-[#EBF2F7] border-y border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="problem-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span>The Reality of Enterprise Technology</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            {problemStatement.headline}
          </h2>
        </div>

        <div className="problem-cards-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemStatement.cards.map((card, index) => (
            <div key={card.id} className="problem-card h-full">
              <TiltCard
                maxTilt={6}
                scale={1.02}
                showBorderBeam={index === 0}
                borderBeamDuration={10}
                spotlightColor="rgba(210, 41, 49, 0.08)"
                borderColor="rgba(210, 41, 49, 0.45)"
                className="p-8 rounded-2xl bg-white border border-[#DCE4EC] hover:border-[#D22931]/60 shadow-2xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EBF2F7] border border-[#DCE4EC] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {cardIcons[index]}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#020626] leading-snug tracking-tight mb-4 group-hover:text-[#D22931] transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-[#556070] leading-relaxed pt-5 border-t border-[#DCE4EC]">
                  {card.body}
                </p>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
