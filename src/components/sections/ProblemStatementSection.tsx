import React, { useEffect, useRef, useState } from 'react';
import { FileSpreadsheet, Bot, ShieldAlert } from 'lucide-react';
import { gsap, SYM_EASE, animateMaskedLines } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';

export const ProblemStatementSection: React.FC = () => {
  const { problemStatement } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [activeProblemIndex, setActiveProblemIndex] = useState<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cleanHeading = animateMaskedLines(headingRef.current, {
      trigger: section,
      start: 'top 84%',
      duration: 0.85,
      stagger: 0.1,
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.problem-card'),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.78,
          stagger: 0.1,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section.querySelector('.problem-cards-grid'),
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => {
      cleanHeading();
      ctx.revert();
    };
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
          <h2
            ref={headingRef}
            className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight"
          >
            {problemStatement.headline}
          </h2>
        </div>

        <div className="problem-cards-grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problemStatement.cards.map((card, index) => {
            const isSelected = activeProblemIndex === index;
            return (
              <div
                key={card.id}
                className="problem-card h-full"
                onMouseEnter={() => setActiveProblemIndex(index)}
              >
                <div
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between group h-full cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-xl -translate-y-1.5'
                      : 'bg-white border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* 3D Conceptual Cube Image (Preserved) */}
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 bg-[#020626] border border-[#DCE4EC] shadow-inner">
                      <img
                        src={problemImages[index]}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
