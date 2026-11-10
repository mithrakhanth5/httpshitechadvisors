import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Lock, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { MagneticButton } from '../ui/MagneticButton';

interface RoundtableSectionProps {
  onOpenDiscuss: (area?: string) => void;
}

export const RoundtableSection: React.FC<RoundtableSectionProps> = ({ onOpenDiscuss }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
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
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.roundtable-card'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
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
      className="relative py-24 sm:py-32 bg-[#EBF2F7] border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="roundtable-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4">
            <span>Executive Community &middot; Since **FIRST EVENT YEAR**</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Where technology leaders compare notes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            Since **FIRST EVENT YEAR**, our closed-door executive roundtables have brought Pacific Northwest CIOs, CTOs, and CISOs together to discuss real enterprise outcomes under Chatham House Rules.
          </p>
        </div>

        {/* 2-Column Bento: Featured Event Left, Perspective Articles Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Roundtable Event Card */}
          <div className="roundtable-card lg:col-span-7 bg-[#020626] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl border border-white/10 group">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-cyber-grid-dark opacity-35 pointer-events-none" />

            {/* Ambient Red Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D22931]/20 blur-[100px] pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FAC344] text-xs font-bold uppercase tracking-wider border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#D22931] animate-ping" />
                  Next Executive Roundtable
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60">
                  <Lock className="w-3.5 h-3.5 text-[#FAC344]" />
                  Chatham House Rule
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                Production AI &amp; Governance in the Enterprise
              </h3>

              <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                An intimate, peer-to-peer dinner for 16 technology executives navigating the leap from experimental GenAI proofs-of-concept to governed, high-ROI enterprise production workloads.
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
                  <Lock className="w-4 h-4 text-[#FAC344]" />
                  <span>Invitation Only</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 flex flex-wrap items-center justify-between gap-4">
              <MagneticButton
                variant="primary"
                onClick={() => onOpenDiscuss('ai')}
                className="text-xs font-bold uppercase tracking-wider !py-3.5 !px-6"
              >
                <span>Request an Invitation</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <span className="text-xs text-white/50">
                Limited to VP, CIO, CTO, &amp; CISO roles
              </span>
            </div>
          </div>

          {/* Perspective Articles Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Article 1 */}
            <div className="roundtable-card card-hover-feelgood bg-white p-7 rounded-2xl border border-[#DCE4EC] shadow-2xs flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between text-xs text-[#556070] mb-3">
                  <span className="font-bold uppercase tracking-wider text-[#D22931]">
                    AI &amp; Automation
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    6 min read
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug">
                  What is an AI agent — and what should it do in your business?
                </h4>
                <p className="mt-2.5 text-xs sm:text-sm text-[#556070] leading-relaxed">
                  How enterprise leadership teams separate generative AI marketing hype from durable, governed workflow automation that actually delivers ROI.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#DCE4EC] flex items-center justify-between text-xs font-bold text-[#020626] group-hover:text-[#D22931]">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#D22931]" />
                  Read Executive Perspective
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Article 2 */}
            <div className="roundtable-card card-hover-feelgood bg-white p-7 rounded-2xl border border-[#DCE4EC] shadow-2xs flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between text-xs text-[#556070] mb-3">
                  <span className="font-bold uppercase tracking-wider text-[#D22931]">
                    Data &amp; Intelligence
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    7 min read
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug">
                  Customer data platform or data warehouse? How to decide
                </h4>
                <p className="mt-2.5 text-xs sm:text-sm text-[#556070] leading-relaxed">
                  Why CDPs and lakehouses solve distinct operational jobs, and how to architect the simplest data foundation that doesn&rsquo;t blow out your cloud budget.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#DCE4EC] flex items-center justify-between text-xs font-bold text-[#020626] group-hover:text-[#D22931]">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#D22931]" />
                  Read Executive Perspective
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
