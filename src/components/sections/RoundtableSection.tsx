import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Lock, ArrowRight, BookOpen, Clock, Building } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { MagneticButton } from '../ui/MagneticButton';
import { TiltCard } from '../ui/TiltCard';
import { hitechContent } from '../../data/hitechContent';

interface RoundtableSectionProps {
  onOpenDiscuss: (area?: string) => void;
}

export const RoundtableSection: React.FC<RoundtableSectionProps> = ({ onOpenDiscuss }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header entrance with bi-directional scroll
      gsap.fromTo(
        section.querySelector('.roundtable-header'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Cards entrance with bi-directional scroll
      gsap.fromTo(
        section.querySelectorAll('.roundtable-card'),
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
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
      id="roundtable"
      className="relative py-14 sm:py-18 bg-[#EBF2F7] border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="roundtable-header max-w-3xl mb-10 sm:mb-12">
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Where technology leaders <span className="text-[#D22931]">compare notes.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            Closed-door executive roundtables under Chatham House Rules, paired with field notes from active client engagements.
          </p>
        </div>

        {/* 2-Column Bento: Featured Event Left, Perspective Articles Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Roundtable Event Card with 3D Tilt and Border Beam */}
          <div className="roundtable-card lg:col-span-7 h-full">
            <TiltCard
              maxTilt={5}
              scale={1.015}
              showBorderBeam={true}
              borderBeamDuration={12}
              spotlightColor="rgba(210, 41, 49, 0.15)"
              borderColor="rgba(250, 195, 68, 0.5)"
              className="bg-[#020626] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-2xl border border-white/10 group h-full"
            >
              {/* Ambient Red Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D22931]/15 blur-[100px] pointer-events-none animate-ambient-blob-1" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FAC344] text-xs font-semibold uppercase tracking-wider border border-white/15 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#D22931]" />
                    Next Executive Roundtable
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60">
                    <Lock className="w-3.5 h-3.5 text-[#FAC344]" />
                    Chatham House Rule
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                  Governed AI Agents &amp; Multi-Step Production Workflows
                </h3>

                <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                  An intimate, closed-door dinner for 16 technology executives navigating the leap from experimental GenAI proofs-of-concept into high-throughput production with strict enterprise safety guardrails. Co-sponsored with J.P. Morgan Private Bank.
                </p>

                {/* Event Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <Calendar className="w-4 h-4 text-[#FAC344]" />
                    <span>Spring 2026</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <MapPin className="w-4 h-4 text-[#FAC344]" />
                    <span>Seattle, WA &middot; In-Person</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/80">
                    <Building className="w-4 h-4 text-[#FAC344]" />
                    <span>Co-Host: J.P. Morgan Private Bank</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 flex flex-wrap items-center justify-between gap-4">
                <MagneticButton
                  variant="primary"
                  onClick={() => onOpenDiscuss('ai')}
                  className="text-xs font-bold uppercase tracking-wider !py-3.5 !px-6 shadow-xl hover:shadow-2xl"
                >
                  <span>Request an Invitation</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <span className="text-xs text-white/50">
                  Limited to VP, CIO, CTO, &amp; CISO roles
                </span>
              </div>
            </TiltCard>
          </div>

          {/* Perspective Articles Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {hitechContent.eventsAndInsights.articles.slice(0, 2).map((art) => (
              <div key={art.title} className="roundtable-card h-full">
                <TiltCard
                  maxTilt={5}
                  scale={1.02}
                  spotlightColor="rgba(210, 41, 49, 0.08)"
                  borderColor="rgba(210, 41, 49, 0.4)"
                  className="bg-white p-7 rounded-2xl border border-[#DCE4EC] hover:border-[#D22931]/60 shadow-2xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer"
                >
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
                      <span>Read Executive Insight</span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
