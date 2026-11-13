import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  UserCheck,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Plus,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, animateMaskedLines } from '../../lib/gsap';
import { BorderBeam } from '../ui/BorderBeam';
import { hitechContent } from '../../data/hitechContent';

interface RoleSelectorSectionProps {
  onSelectRole: (helpArea: string) => void;
}

export const RoleSelectorSection: React.FC<RoleSelectorSectionProps> = ({ onSelectRole }) => {
  const { roleSelector } = hitechContent;
  const [activeRoleIndex, setActiveRoleIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const activeRole = roleSelector.roles[activeRoleIndex];

  useEffect(() => {
    const cleanHeading = animateMaskedLines(headingRef.current, {
      trigger: sectionRef.current,
      start: 'top 84%',
      duration: 0.85,
      stagger: 0.1,
    });
    return () => cleanHeading();
  }, []);

  // Re-trigger staggered bullet reveal on desktop panel change using GSAP
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const bullets = section.querySelectorAll('.role-stage-bullet');
    if (bullets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bullets,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: 'power3.out',
        }
      );
    }, section);

    return () => ctx.revert();
  }, [activeRoleIndex]);

  return (
    <section
      ref={sectionRef}
      id="role-focus"
      className="relative py-14 sm:py-20 bg-[#EBF2F7] border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="role-header max-w-3xl mb-8 sm:mb-12">
          <h2
            ref={headingRef}
            className="font-display font-extrabold text-[clamp(1.85rem,4.5vw,3.5rem)] text-[#020626] leading-tight tracking-tight"
          >
            Start with your <span className="text-[#D22931]">role.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-lg text-[#556070] leading-relaxed">
            {roleSelector.subhead}
          </p>
        </div>

        {/* MOBILE: Symmetry-Style Compact Inline 6-Role Accordion (< lg) */}
        <div className="lg:hidden space-y-2.5">
          {roleSelector.roles.map((item, index) => {
            const isOpen = activeRoleIndex === index;
            return (
              <div
                key={item.role}
                className={`rounded-2xl border transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#D22931] shadow-lg'
                    : 'bg-white/85 border-[#DCE4EC] hover:border-[#D22931]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveRoleIndex(index)}
                  aria-expanded={isOpen}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-[#D22931] text-white' : 'bg-[#EBF2F7] text-[#556070]'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className={`font-display font-bold text-base leading-tight truncate transition-colors ${
                          isOpen ? 'text-[#D22931]' : 'text-[#020626]'
                        }`}
                      >
                        {item.role}
                      </h3>
                      <p className="text-[11px] text-[#556070] truncate mt-0.5">
                        {item.linksTo}
                      </p>
                    </div>
                  </div>
                  <Plus
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'rotate-45 text-[#D22931]' : 'text-[#556070]'
                    }`}
                  />
                </button>

                <div className="sym-accordion-panel" data-open={isOpen ? 'true' : 'false'}>
                  <div className="sym-accordion-inner">
                    <div className="px-4 pb-4 pt-1">
                      <div className="rounded-xl bg-[#020626] text-white p-4 space-y-3 border border-white/10">
                        <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                          {item.focus}
                        </p>
                        <div className="grid grid-cols-1 gap-1.5 pt-2 border-t border-white/10 text-[11px] text-white/90">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
                            <span>Direct Senior Partner engagement</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#FAC344] flex-shrink-0" />
                            <span>Vendor-neutral selection &amp; delivery</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectRole(item.helpArea)}
                          className="sym-btn w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#D22931] hover:bg-[#b52027] text-white font-display font-bold text-xs uppercase tracking-wider cursor-pointer"
                        >
                          <span>Discuss This Mandate</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP: Symmetry Section 6 Accordion List (Left) + Live Mandate Stage (Right) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5 h-full">
            {roleSelector.roles.map((item, index) => {
              const isSelected = activeRoleIndex === index;
              return (
                <div
                  key={item.role}
                  className={`rounded-2xl border transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-xl -translate-y-0.5'
                      : 'bg-white/75 hover:bg-white border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveRoleIndex(index)}
                    onMouseEnter={() => setActiveRoleIndex(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-label={`Select ${item.role}`}
                    aria-expanded={isSelected}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`font-mono font-bold text-xs px-2.5 py-1.5 rounded-xl flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#D22931] text-white shadow-xs'
                            : 'bg-[#EBF2F7] text-[#556070] border border-[#DCE4EC]'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3
                          className={`font-display font-bold text-base leading-tight truncate transition-colors ${
                            isSelected ? 'text-[#D22931]' : 'text-[#020626]'
                          }`}
                        >
                          {item.role}
                        </h3>
                        <p className="text-xs text-[#556070] mt-0.5 truncate">
                          Connects to {item.linksTo}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                        isSelected
                          ? 'bg-[#D22931] shadow-[0_0_8px_#D22931] scale-110'
                          : 'bg-[#DCE4EC] scale-75'
                      }`}
                    />
                  </button>

                  {/* Symmetry Grid 0fr -> 1fr inline expandable focus preview */}
                  <div className="sym-accordion-panel" data-open={isSelected ? 'true' : 'false'}>
                    <div className="sym-accordion-inner">
                      <div className="px-5 pb-4 pt-0 text-xs text-[#3A4A5A] border-t border-[#DCE4EC]/70 mt-1 pt-2.5 leading-relaxed">
                        {item.focus}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-[#020626] text-white rounded-[32px] p-10 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between h-full min-h-[480px]">
            <BorderBeam size={280} duration={10} colorFrom="#D22931" colorTo="#FAC344" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D22931]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole.role}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 space-y-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FAC344]">
                      Executive Mandate &middot; 0{activeRoleIndex + 1}
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs font-mono text-white/60">
                      <span className="relative flex h-2 w-2">
                        <span className="sym-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#40aa4a] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#40aa4a]" />
                      </span>
                      Senior Advisory Pod Ready
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-3xl lg:text-4xl text-white tracking-tight leading-snug">
                    {activeRole.role}
                  </h3>

                  <p className="mt-4 text-base lg:text-lg text-white/80 leading-relaxed">
                    {activeRole.focus}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FAC344]">
                    How Hitech Executes for this Mandate
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="role-stage-bullet flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#D22931] mt-0.5 flex-shrink-0" />
                      <span>Direct Senior Partner engagement from day one</span>
                    </div>
                    <div className="role-stage-bullet flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90">
                      <ShieldCheck className="w-4 h-4 text-[#FAC344] mt-0.5 flex-shrink-0" />
                      <span>Objective vendor-neutral technology selection</span>
                    </div>
                    <div className="role-stage-bullet flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90">
                      <Compass className="w-4 h-4 text-[#D22931] mt-0.5 flex-shrink-0" />
                      <span>Production engineering with continuous accountability</span>
                    </div>
                    <div className="role-stage-bullet flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90">
                      <UserCheck className="w-4 h-4 text-[#FAC344] mt-0.5 flex-shrink-0" />
                      <span>Knowledge transfer so internal teams own the system</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-mono text-white/60">
                    <span>Practice: </span>
                    <strong className="text-white font-semibold">{activeRole.linksTo}</strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectRole(activeRole.helpArea)}
                    className="sym-btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D22931] hover:bg-[#b52027] text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-2xl cursor-pointer"
                  >
                    <span>Discuss This Mandate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
