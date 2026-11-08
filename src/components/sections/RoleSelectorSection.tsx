import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';
import { gsap, SYMMETRY_EASE } from '../../lib/gsap';
import { hitechContent } from '../../data/hitechContent';

interface RoleSelectorSectionProps {
  onSelectRole: (helpArea: string) => void;
}

export const RoleSelectorSection: React.FC<RoleSelectorSectionProps> = ({ onSelectRole }) => {
  const { roleSelector } = hitechContent;
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const activeRole = roleSelector.roles[activeRoleIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.role-header'),
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
        section.querySelectorAll('.role-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.roles-grid'),
            start: 'top 85%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="role-selector"
      className="relative py-24 sm:py-32 bg-[#F8FAFC] border-t border-[#EAEDF1] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="role-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAEDF1] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span>Executive Routing</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            {roleSelector.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            {roleSelector.subhead}
          </p>
        </div>

        {/* 6 Role Cards Grid */}
        <div className="roles-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {roleSelector.roles.map((item, index) => {
            const isSelected = activeRoleIndex === index;
            return (
              <div
                key={item.role}
                onClick={() => setActiveRoleIndex(index)}
                className={`role-card card-hover-feelgood p-7 rounded-2xl text-left transition-all duration-300 border border-[#EAEDF1] hover:border-[#D22931] cursor-pointer flex flex-col justify-between bg-white ${
                  isSelected ? 'shadow-md' : 'shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#556070]">
                      Role
                    </span>
                    <UserCheck className="w-4 h-4 text-[#020626] group-hover:text-[#D22931] transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#020626] mb-2 leading-snug group-hover:text-[#D22931] transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[#556070] leading-relaxed">
                    {item.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAEDF1] flex items-center justify-between text-xs">
                  <span className="font-medium text-[#556070]">
                    Links to <strong className="text-[#020626]">{item.linksTo}</strong>
                  </span>
                  <span className="font-bold text-[#020626] group-hover:text-[#D22931] transition-colors">
                    {isSelected ? 'Active Focus' : 'Select →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Role Action Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#020626] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl border border-white/10">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold text-[#FAC344] uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FAC344]" />
              <span>Priority Focus for {activeRole.role}</span>
            </div>
            <h4 className="font-display font-bold text-2xl text-white">
              {activeRole.focus}
            </h4>
            <p className="text-sm text-white/70">
              Connecting strategic diagnosis with measurable delivery through {activeRole.linksTo}.
            </p>
          </div>

          <button
            onClick={() => onSelectRole(activeRole.helpArea)}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#D22931] hover:bg-[#b52027] text-white font-display font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>Discuss This Focus Area</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
