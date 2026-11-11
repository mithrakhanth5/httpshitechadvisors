import React, { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, ChevronRight, UserCheck } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { TiltCard } from '../ui/TiltCard';
import { hitechContent, type LeaderItem } from '../../data/hitechContent';

interface ExecutiveLeadershipSectionProps {
  onOpenDiscuss?: (area?: string) => void;
}

export const ExecutiveLeadershipSection: React.FC<ExecutiveLeadershipSectionProps> = ({ onOpenDiscuss }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeLeaderIdx, setActiveLeaderIdx] = useState<number>(0);
  const leaders: LeaderItem[] = hitechContent.leadershipTeam || [];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.lead-header'),
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
        section.querySelectorAll('.lead-card'),
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.lead-grid'),
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="relative py-14 sm:py-20 bg-white border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="lead-header max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-semibold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <UserCheck className="w-3.5 h-3.5 text-[#D22931]" />
            <span>Senior Leadership &middot; Hands-on Practitioners</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] text-[#020626] leading-tight tracking-tight">
            The partners who frame the strategy <span className="text-[#D22931]">execute the build.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            Our firm was founded on a simple premise: enterprise clients deserve seasoned practitioners who have built and scaled systems at Amazon, AT&amp;T, and leading technology organizations—not theoretical slide decks or junior staffing handoffs.
          </p>
        </div>

        {/* 8 Executive Leadership Cards Grid */}
        <div className="lead-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {leaders.map((leader, idx) => {
            const isSelected = activeLeaderIdx === idx;

            return (
              <div
                key={leader.name}
                className="lead-card h-full"
                onMouseEnter={() => setActiveLeaderIdx(idx)}
              >
                <TiltCard
                  maxTilt={5}
                  scale={1.015}
                  showBorderBeam={isSelected}
                  borderBeamDuration={10}
                  spotlightColor="rgba(210, 41, 49, 0.12)"
                  borderColor="rgba(210, 41, 49, 0.45)"
                  className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-xl ring-2 ring-[#D22931]/15 -translate-y-1'
                      : 'bg-white border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Top Initials / Role Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#020626] text-white flex items-center justify-center font-display font-bold text-base shadow-sm group-hover:bg-[#D22931] transition-colors duration-300">
                        {leader.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                      <span className="text-[10px] font-semibold text-[#D22931] bg-[#D22931]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {idx === 0 ? 'Founder' : 'Senior Lead'}
                      </span>
                    </div>

                    {/* Name & Title */}
                    <h3 className="font-display font-bold text-lg text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug mb-1">
                      {leader.name}
                    </h3>
                    <div className="text-xs font-medium text-[#D22931] mb-3">
                      {leader.role}
                    </div>

                    {/* Background Summary */}
                    <p className="text-xs text-[#556070] leading-relaxed mb-4">
                      {leader.background}
                    </p>
                  </div>

                  {/* Credentials Footer */}
                  <div className="pt-3 border-t border-[#DCE4EC] flex items-center justify-between text-[11px] text-[#556070]">
                    <span className="flex items-center gap-1.5 font-medium truncate">
                      <Briefcase className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
                      <span className="truncate">{leader.credentials}</span>
                    </span>
                  </div>
                </TiltCard>
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
              Every Hitech engagement is architected and led by senior practitioners with 15+ years of production experience.
            </p>
          </div>
          {onOpenDiscuss && (
            <button
              onClick={() => onOpenDiscuss('strategy')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#020626] hover:bg-[#D22931] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-lg flex-shrink-0 cursor-pointer"
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