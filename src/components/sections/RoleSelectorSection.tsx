import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, UserCheck, Sparkles, CheckCircle2, ShieldCheck, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { BorderBeam } from '../ui/BorderBeam';
import { hitechContent } from '../../data/hitechContent';

interface RoleSelectorSectionProps {
  onSelectRole: (helpArea: string) => void;
}

export const RoleSelectorSection: React.FC<RoleSelectorSectionProps> = ({ onSelectRole }) => {
  const { roleSelector } = hitechContent;
  const [[activeRoleIndex, direction], setRole] = useState<[number, number]>([0, 1]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const activeRole = roleSelector.roles[activeRoleIndex];

  const goToRole = useCallback((newIndex: number) => {
    setRole(([curr]) => [newIndex, newIndex > curr ? 1 : -1]);
  }, []);

  const nextRole = useCallback(() => {
    setRole(([curr]) => [(curr + 1) % roleSelector.roles.length, 1]);
  }, [roleSelector.roles.length]);

  const prevRole = useCallback(() => {
    setRole(([curr]) => [(curr - 1 + roleSelector.roles.length) % roleSelector.roles.length, -1]);
  }, [roleSelector.roles.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextRole();
      else prevRole();
    }
    touchStartX.current = null;
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      filter: 'blur(4px)',
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="role-focus"
      className="relative py-14 sm:py-20 bg-[#EBF2F7] border-t border-[#DCE4EC] overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="role-header max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE4EC] text-xs font-semibold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
            <span>Executive Routing &middot; 6 Leadership Mandates</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] text-[#020626] leading-tight tracking-tight">
            Solutions framed by <span className="text-[#D22931]">mandate.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            {roleSelector.subhead}
          </p>
        </div>

        {/* Mobile Horizontal Pill Rail with Auto-Swipe & Indicator (< lg) */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#556070]">
              Select Mandate ({activeRoleIndex + 1}/6)
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevRole}
                className="p-1.5 rounded-lg bg-white border border-[#DCE4EC] hover:border-[#D22931]/40 text-[#020626] transition-colors"
                aria-label="Previous Mandate"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextRole}
                className="p-1.5 rounded-lg bg-white border border-[#DCE4EC] hover:border-[#D22931]/40 text-[#020626] transition-colors"
                aria-label="Next Mandate"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory -mx-6 px-6 sm:-mx-10 sm:px-10">
            {roleSelector.roles.map((item, index) => {
              const isSelected = activeRoleIndex === index;
              return (
                <button
                  key={item.role}
                  onClick={() => goToRole(index)}
                  className={`snap-start flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-sans font-semibold transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#020626] text-white border-white/20 shadow-md ring-2 ring-[#D22931]/30 scale-[1.02]'
                      : 'bg-white text-[#556070] border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-md font-mono text-[10px] font-bold flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#D22931] text-white' : 'bg-[#EBF2F7] text-[#556070]'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span className="whitespace-nowrap">{item.role}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Symmetry-Inspired Split-Screen Persona Showcase (Replaces 3x3 square boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Interactive Role Selector Stack (Hidden on mobile, 5 cols on desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between gap-3 h-full">
            {roleSelector.roles.map((item, index) => {
              const isSelected = activeRoleIndex === index;
              return (
                <button
                  key={item.role}
                  onClick={() => goToRole(index)}
                  onMouseEnter={() => goToRole(index)}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer border ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-xl ring-2 ring-[#D22931]/15 -translate-y-0.5'
                      : 'bg-white/70 hover:bg-white border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs hover:shadow-md'
                  }`}
                  aria-label={`Select ${item.role}`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Tactile Keycap Badge */}
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

                  {/* Active Indicator Pip */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        isSelected ? 'bg-[#D22931] shadow-[0_0_8px_#D22931] scale-125' : 'bg-[#DCE4EC]'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Responsive Tactile Showcase Card (7 cols on desktop, full width on mobile) */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="lg:col-span-7 bg-[#020626] text-white rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between h-full min-h-0 sm:min-h-[460px] lg:min-h-[480px]"
          >
            <BorderBeam size={280} duration={10} colorFrom="#D22931" colorTo="#FAC344" />

            {/* Ambient Red Glow in Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D22931]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeRole.role}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10 space-y-6 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Status Banner */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5 sm:mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 text-[#FAC344] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider border border-white/15 backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#FAC344]" />
                      Executive Mandate 0{activeRoleIndex + 1}
                    </span>
                    <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono text-white/60">
                      <span className="w-2 h-2 rounded-full bg-[#40aa4a] animate-pulse" />
                      Senior Advisory Pod Ready
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
                    {activeRole.role}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                    {activeRole.focus}
                  </p>
                </div>

                {/* Hitech Engagement Framework Pillars */}
                <div className="space-y-3 pt-5 sm:pt-6 border-t border-white/10">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FAC344]">
                    How Hitech Executes for this Mandate
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#D22931] mt-0.5 flex-shrink-0" />
                      <span>Direct Senior Partner engagement from day one</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90">
                      <ShieldCheck className="w-4 h-4 text-[#FAC344] mt-0.5 flex-shrink-0" />
                      <span>Objective vendor-neutral technology selection</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90">
                      <Compass className="w-4 h-4 text-[#D22931] mt-0.5 flex-shrink-0" />
                      <span>Production engineering with zero handoff loss</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90">
                      <UserCheck className="w-4 h-4 text-[#FAC344] mt-0.5 flex-shrink-0" />
                      <span>Knowledge transfer so internal teams own the system</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-5 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-mono text-white/60">
                    <span>Practice: </span>
                    <strong className="text-white font-semibold">{activeRole.linksTo}</strong>
                  </div>

                  <button
                    onClick={() => onSelectRole(activeRole.helpArea)}
                    className="inline-flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#D22931] hover:bg-[#b52027] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-2xl cursor-pointer hover:scale-105 active:scale-95 duration-200"
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
