import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Lock, ArrowRight, BookOpen, Clock, Building } from 'lucide-react';
import { gsap, SYM_EASE, animateMaskedLines } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';

interface RoundtableSectionProps {
  onOpenDiscuss: (area?: string) => void;
}

export const RoundtableSection: React.FC<RoundtableSectionProps> = ({ onOpenDiscuss }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const glowOrbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cleanupLines = animateMaskedLines(titleRef.current, { trigger: section });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.roundtable-header-anim'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section,
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.roundtable-card'),
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.78,
          stagger: 0.12,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section,
            start: 'top 84%',
            toggleActions: 'play none none none',
          },
        }
      );

      if (glowOrbRef.current) {
        gsap.to(glowOrbRef.current, {
          y: 12,
          x: -10,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: SYM_EASE.float,
        });
      }
    }, section);

    return () => {
      cleanupLines();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="roundtable"
      className="relative py-14 sm:py-18 bg-[#EBF2F7] border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 ref={titleRef} className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Where technology leaders <span className="text-[#D22931]">compare notes.</span>
          </h2>
          <p className="roundtable-header-anim mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            Since <span className="font-semibold text-[#020626] underline decoration-[#D22931]/40 underline-offset-4">FIRST EVENT YEAR</span>, our executive roundtables and panels have brought Seattle-area leaders together to talk honestly about what AI and technology are changing in their industries.
          </p>
        </div>

        {/* 2-Column Bento: Featured Event Left, Perspective Articles Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Roundtable Event Card */}
          <div className="roundtable-card lg:col-span-7 h-full">
            <div className="bg-[#020626] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-2xl border border-white/10 hover:border-white/25 transition-[border-color,box-shadow] duration-300 group h-full">
              {/* Ambient Red Glow */}
              <div
                ref={glowOrbRef}
                className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D22931]/15 blur-[100px] pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                  <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FAC344] text-xs font-semibold uppercase tracking-wider border border-white/15 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="sym-pulse-ring absolute inset-0 rounded-full bg-[#D22931]/65" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D22931]" />
                    </span>
                    <span>Executive Roundtable Series</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60">
                    <Lock className="w-3.5 h-3.5 text-[#FAC344]" />
                    Executive Peer Discussion
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                  Why Your Company Needs an AI Brain, and What Goes in It
                </h3>

                <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                  A curated peer conversation for senior technology leaders navigating how AI transitions from experimental software into a trusted, governed layer of organizational intelligence and production capability.
                </p>

                {/* Event Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <Calendar className="w-4 h-4 text-[#FAC344]" />
                    <span className="font-semibold text-[#FAC344]">[DATE PENDING CONFIRMATION]</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <MapPin className="w-4 h-4 text-[#FAC344]" />
                    <span>Seattle, WA &middot; In-Person</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <Building className="w-4 h-4 text-[#FAC344]" />
                    <span>Seattle Tech Ecosystem</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-10 pt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onOpenDiscuss('ai')}
                  className="sym-btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D22931] hover:bg-[#b52229] text-white font-display font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl cursor-pointer group/btn"
                >
                  <span>Request an Invitation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
                <span className="text-xs text-white/50">
                  Executive Invitation Series
                </span>
              </div>
            </div>
          </div>

          {/* Perspective Articles Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {hitechContent.eventsAndInsights.articles.slice(0, 2).map((art) => (
              <div key={art.title} className="roundtable-card h-full">
                <div className="bg-white p-7 rounded-2xl border border-[#DCE4EC] hover:border-[#D22931]/55 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-300 flex flex-col justify-between group h-full cursor-pointer">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#556070] mb-3">
                      <span className="font-semibold uppercase tracking-wider text-[#D22931]">
                        {art.category}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {art.readTime}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug">
                      {art.title}
                    </h4>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#556070] leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#DCE4EC] flex items-center justify-between text-xs font-semibold text-[#020626] group-hover:text-[#D22931]">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#D22931]" />
                      <span className="sym-link-underline">Read Executive Insight</span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
