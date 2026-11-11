import React, { useEffect, useRef, useState } from 'react';
import { FileSpreadsheet, Bot, ShieldAlert } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';
import { TiltCard } from '../ui/TiltCard';

export const ProblemStatementSection: React.FC = () => {
  const { problemStatement } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeProblemIndex, setActiveProblemIndex] = useState<number>(0);

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
    <FileSpreadsheet key="sheet" className="w-5 h-5 text-[#FAC344]" />,
    <Bot key="bot" className="w-5 h-5 text-[#D22931]" />,
    <ShieldAlert key="shield" className="w-5 h-5 text-[#FAC344]" />,
  ];

  const problemImages = [
    './images/problem-spreadsheets.jpg',
    './images/problem-ai-pilot.jpg',
    './images/problem-vendor-lockin.jpg',
  ];

  const problemTags = ['Fragmented Data', 'Isolated AI Pilots', 'Vendor Lock-In'];

  return (
    <section
      ref={sectionRef}
      id="problems"
      className="relative py-14 sm:py-18 bg-[#EBF2F7] border-y border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="problem-header max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span>The Reality of Enterprise Technology</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            {problemStatement.headline}
          </h2>
        </div>

        <div className="problem-cards-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemStatement.cards.map((card, index) => {
            const isSelected = activeProblemIndex === index;
            return (
              <div
                key={card.id}
                className="problem-card h-full"
                onMouseEnter={() => setActiveProblemIndex(index)}
              >
                <TiltCard
                  maxTilt={6}
                  scale={1.02}
                  showBorderBeam={isSelected}
                  borderBeamDuration={10}
                  spotlightColor="rgba(210, 41, 49, 0.12)"
                  borderColor="rgba(210, 41, 49, 0.5)"
                  className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-2xl ring-2 ring-[#D22931]/15 -translate-y-1'
                      : 'bg-white border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs hover:shadow-lg'
                  }`}
                >
                  <div>
                    {/* Google-Inspired 3D Isometric Conceptual Image Header */}
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 bg-[#020626] border border-[#DCE4EC] shadow-inner">
                      <img
                        src={problemImages[index]}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020626]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-[#020626]/80 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-xs">
                        {cardIcons[index]}
                      </div>
                      <div className="absolute bottom-2.5 right-3 px-2.5 py-0.5 rounded-full bg-[#020626]/80 backdrop-blur-md border border-white/10 text-[10px] font-sans font-semibold text-[#FAC344] uppercase tracking-wider">
                        {problemTags[index]}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-[#020626] leading-snug tracking-tight mb-3 group-hover:text-[#D22931] transition-colors">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#556070] leading-relaxed pt-4 border-t border-[#DCE4EC]">
                    {card.body}
                  </p>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
