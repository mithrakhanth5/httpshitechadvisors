import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { TiltCard } from '../ui/TiltCard';
import { BorderBeam } from '../ui/BorderBeam';
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
        section.querySelectorAll('.role-card'),
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.roles-grid'),
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
      id="role-selector"
      className="relative py-14 sm:py-18 bg-[#EBF2F7] border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="role-header max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span>Executive Routing</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Solutions framed by <span className="text-[#D22931]">mandate</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            {roleSelector.subhead}
          </p>
        </div>

        {/* 6 Role Cards Grid with 3D Tilt */}
        <div className="roles-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {roleSelector.roles.map((item, index) => {
            const isSelected = activeRoleIndex === index;
            return (
              <div
                key={item.role}
                className="role-card h-full"
                onMouseEnter={() => setActiveRoleIndex(index)}
              >
                <TiltCard
                  onClick={() => setActiveRoleIndex(index)}
                  maxTilt={6}
                  scale={1.02}
                  showBorderBeam={isSelected}
                  borderBeamDuration={8}
                  spotlightColor={isSelected ? 'rgba(210, 41, 49, 0.12)' : 'rgba(2, 6, 38, 0.05)'}
                  borderColor={isSelected ? 'rgba(210, 41, 49, 0.6)' : 'rgba(210, 41, 49, 0.3)'}
                  className={`p-7 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between bg-white h-full ${
                    isSelected
                      ? 'border-[#D22931] shadow-xl ring-2 ring-[#D22931]/20'
                      : 'border-[#DCE4EC] hover:border-[#D22931]/50 shadow-2xs hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-colors ${
                          isSelected ? 'bg-[#D22931]/10 text-[#D22931]' : 'bg-[#EBF2F7] text-[#556070]'
                        }`}
                      >
                        {isSelected ? 'Active Mandate' : 'Executive Role'}
                      </span>
                      <UserCheck
                        className={`w-4 h-4 transition-colors ${
                          isSelected ? 'text-[#D22931]' : 'text-[#020626]'
                        }`}
                      />
                    </div>
                    <h3
                      className={`font-display font-bold text-xl mb-2 leading-snug transition-colors ${
                        isSelected ? 'text-[#D22931]' : 'text-[#020626]'
                      }`}
                    >
                      {item.role}
                    </h3>
                    <p className="text-sm text-[#556070] leading-relaxed">{item.focus}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DCE4EC] flex items-center justify-between text-xs">
                    <span className="font-medium text-[#556070]">
                      Links to <strong className="text-[#020626]">{item.linksTo}</strong>
                    </span>
                    <span
                      className={`font-bold transition-all flex items-center gap-1 ${
                        isSelected ? 'text-[#D22931]' : 'text-[#020626] group-hover:text-[#D22931]'
                      }`}
                    >
                      {isSelected ? 'Focused ✓' : 'Select →'}
                    </span>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        {/* Selected Role Action Banner with Reactive Motion & Border Beam */}
        <div className="relative p-8 sm:p-10 rounded-3xl bg-[#020626] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl border border-white/10 overflow-hidden">
          <BorderBeam size={220} duration={12} colorFrom="#D22931" colorTo="#FAC344" />
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#D22931]/20 blur-[80px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole.role}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 space-y-2 max-w-2xl"
            >
              <div className="text-xs font-bold text-[#FAC344] uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FAC344] animate-pulse" />
                <span>Priority Focus for {activeRole.role}</span>
              </div>
              <h4 className="font-display font-bold text-2xl text-white">
                {activeRole.focus}
              </h4>
              <p className="text-sm text-white/70">
                Connecting strategic diagnosis with measurable delivery through {activeRole.linksTo}.
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => onSelectRole(activeRole.helpArea)}
            className="relative z-10 w-full sm:w-auto px-7 py-4 rounded-xl bg-[#D22931] hover:bg-[#b52027] text-white font-display font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer hover:scale-105 active:scale-95 duration-200"
          >
            <span>Discuss This Focus Area</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
