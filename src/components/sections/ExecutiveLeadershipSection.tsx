import React, { useEffect, useRef, useState } from 'react';
import { Award, ArrowUpRight, ChevronRight, UserCheck } from 'lucide-react';
import { gsap, SYM_EASE, animateMaskedLines } from '../../lib/gsap';
import { hitechContent, type LeaderItem } from '../../data/hitechContent';

interface ExecutiveLeadershipSectionProps {
  onOpenDiscuss?: (area?: string) => void;
}

export const ExecutiveLeadershipSection: React.FC<ExecutiveLeadershipSectionProps> = ({
  onOpenDiscuss,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const leaders: LeaderItem[] = hitechContent.leadershipTeam || [];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cleanupLines = animateMaskedLines(titleRef.current, { trigger: section });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.lead-header-anim'),
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
        section.querySelectorAll('.lead-card'),
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.07,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section.querySelector('.lead-grid'),
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Symmetry portrait curtain wipe + settle reveal
      gsap.fromTo(
        section.querySelectorAll('.lead-portrait-curtain'),
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.85,
          stagger: 0.075,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section.querySelector('.lead-grid'),
            start: 'top 84%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.lead-portrait-img'),
        { scale: 1.09, y: 12 },
        {
          scale: 1,
          y: 0,
          duration: 0.92,
          stagger: 0.075,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section.querySelector('.lead-grid'),
            start: 'top 84%',
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

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="relative py-14 sm:py-20 bg-white border-t border-[#DCE4EC] overflow-x-clip"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="lead-header-anim inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D22931] mb-3">
            <UserCheck className="w-3.5 h-3.5 text-[#D22931]" />
            <span>Senior Leadership &middot; Hands-on Practitioners</span>
          </div>
          <h2
            ref={titleRef}
            className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] text-[#020626] leading-tight tracking-tight"
          >
            The partners who frame the strategy{' '}
            <span className="text-[#D22931]">execute the build.</span>
          </h2>
          <p className="lead-header-anim mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            Our firm was founded on a simple premise: enterprise clients deserve seasoned
            practitioners who stay accountable from diagnosis through production delivery—not
            theoretical slide decks or junior staffing handoffs.
          </p>
        </div>

        {/* 8 Executive Leadership Studio Portrait Cards */}
        <div className="lead-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {leaders.map((leader, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <div
                key={leader.name}
                className="lead-card h-full"
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <div
                  className={`group rounded-2xl bg-white border overflow-hidden transition-[transform,border-color,box-shadow] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between h-full ${
                    isSelected
                      ? 'border-[#D22931] shadow-xl -translate-y-1.5 ring-1 ring-[#D22931]/15'
                      : 'border-[#DCE4EC] hover:border-[#D22931]/55 shadow-2xs hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Architectural Portrait Studio Stage */}
                    <div className="relative h-60 w-full bg-gradient-to-b from-[#EBF2F7] via-[#F4F7FA] to-[#FFFFFF] overflow-hidden border-b border-[#DCE4EC]/80">
                      {/* Soft Studio Rim Spotlight on Hover/Active */}
                      <div
                        className={`absolute inset-x-6 bottom-0 h-44 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isSelected
                            ? 'bg-gradient-to-t from-[#D22931]/18 via-[#020626]/8 to-transparent opacity-100'
                            : 'bg-gradient-to-t from-[#020626]/10 to-transparent opacity-40 group-hover:opacity-100'
                        }`}
                      />

                      {/* Role Monospace Marker Top Left */}
                      <span className="absolute top-3.5 left-3.5 z-10 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/90 text-[#D22931] border border-[#DCE4EC] shadow-2xs">
                        {leader.badge}
                      </span>

                      {/* Optional LinkedIn Link Pill Top Right */}
                      {leader.linkedin && (
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} LinkedIn Profile`}
                          className={`absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#020626] hover:bg-[#D22931] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isSelected
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-90 lg:opacity-0 lg:translate-y-1 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'
                          }`}
                        >
                          <span>in</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}

                      {/* Curtain-Wiped Studio Cutout Portrait */}
                      <div className="lead-portrait-curtain relative z-[1] h-full w-full flex items-end justify-center pt-6 px-4">
                        <img
                          src={leader.image}
                          alt={`${leader.name}, ${leader.role} at Hitech Advisors`}
                          loading="lazy"
                          className="lead-portrait-img max-h-full w-auto object-contain object-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045] drop-shadow-[0_12px_18px_rgba(2,6,38,0.14)]"
                        />
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="p-5 sm:p-6">
                      <h3 className="font-display font-bold text-lg text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug">
                        {leader.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#D22931] mt-1">
                        {leader.role}
                      </div>
                      {leader.background && (
                        <p className="text-xs text-[#556070] leading-relaxed mt-3">
                          {leader.background}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Crisp Footer Credential + Symmetry Underline Sweep */}
                  <div className="px-5 sm:px-6 pb-5">
                    <div className="h-[1px] w-full bg-[#DCE4EC] relative overflow-hidden mb-3">
                      <span
                        className={`block h-full w-full bg-[#D22931] origin-left transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isSelected ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </div>
                    <div className="text-[11px] font-medium text-[#556070] truncate">
                      {leader.credentials}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Leadership Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#EBF2F7] border border-[#DCE4EC] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xs">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D22931] mb-1">
              <Award className="w-4 h-4 text-[#D22931]" />
              <span>Direct Practitioner Access</span>
            </div>
            <p className="text-sm sm:text-base text-[#020626] font-medium m-0">
              Every Hitech engagement is architected and led by senior practitioners with 15+ years
              of production experience.
            </p>
          </div>
          {onOpenDiscuss && (
            <button
              onClick={() => onOpenDiscuss('strategy')}
              className="sym-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#020626] hover:bg-[#D22931] text-white font-display font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-lg flex-shrink-0 cursor-pointer"
            >
              <span>Speak with a Partner</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
