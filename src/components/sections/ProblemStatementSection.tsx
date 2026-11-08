import React, { useEffect, useRef } from 'react';
import { FileSpreadsheet, Bot, ShieldAlert } from 'lucide-react';
import { gsap, SYMMETRY_EASE } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';

export const ProblemStatementSection: React.FC = () => {
  const { problemStatement } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.problem-header'),
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
        section.querySelectorAll('.problem-card'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.problem-cards-grid'),
            start: 'top 85%',
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
            <div
              key={card.id}
              className="problem-card card-hover-feelgood p-8 rounded-2xl bg-white border border-[#DCE4EC] hover:border-[#D22931] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF2F7] border border-[#DCE4EC] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#EBF2F7] transition-all duration-300">
                  {cardIcons[index]}
                </div>
                <h3 className="font-display font-bold text-xl text-[#020626] leading-snug tracking-tight mb-4 group-hover:text-[#D22931] transition-colors">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-[#556070] leading-relaxed pt-5 border-t border-[#DCE4EC]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
