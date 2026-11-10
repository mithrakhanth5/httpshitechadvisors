import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';
import { TiltCard } from '../ui/TiltCard';

export const PropositionSection: React.FC = () => {
  const { proposition } = hitechContent;
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.prop-narrative'),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.pillar-card'),
        { opacity: 0, x: 30, scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.prop-pillars'),
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const pillarIcons = [
    <CheckCircle2 key="check" className="w-5 h-5 text-[#D22931] flex-shrink-0 mt-0.5" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-[#D22931] flex-shrink-0 mt-0.5" />,
    <Users key="users" className="w-5 h-5 text-[#D22931] flex-shrink-0 mt-0.5" />,
  ];

  return (
    <section
      ref={sectionRef}
      id="proposition"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Proposition Narrative */}
          <div className="prop-narrative lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-2 shadow-2xs">
              <span>The Hitech Model</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
              {proposition.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#556070] leading-relaxed">
              {proposition.body}
            </p>
            <div className="pt-2">
              <Link
                to="/methodology"
                className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#020626] hover:text-[#D22931] transition-colors group cursor-pointer"
              >
                <span>See how an engagement works</span>
                <ArrowRight className="w-4 h-4 text-[#D22931] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Three Value Pillars with 3D Tilt */}
          <div className="prop-pillars lg:col-span-7 space-y-5">
            {proposition.pillars.map((pillar, idx) => (
              <div key={pillar.title} className="pillar-card">
                <TiltCard
                  maxTilt={5}
                  scale={1.015}
                  showBorderBeam={idx === 0}
                  borderBeamDuration={10}
                  spotlightColor="rgba(210, 41, 49, 0.08)"
                  borderColor="rgba(210, 41, 49, 0.45)"
                  className="p-6 sm:p-7 rounded-2xl border border-[#DCE4EC] bg-[#EBF2F7] hover:border-[#D22931]/60 hover:bg-white shadow-2xs hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white border border-[#DCE4EC] shadow-2xs">
                      {pillarIcons[idx]}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h3 className="font-display font-bold text-lg text-[#020626]">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#556070] leading-relaxed">
                        {pillar.body}
                      </p>
                    </div>
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
