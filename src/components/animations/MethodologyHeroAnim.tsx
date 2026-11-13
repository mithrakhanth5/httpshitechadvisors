import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, Code2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface StageData {
  id: string;
  step: string;
  name: string;
  focus: string;
  icon: React.ReactNode;
  summary: string;
  deliverable: string;
  accountability: string;
}

const PHASES: StageData[] = [
  {
    id: 'discover',
    step: 'Phase 01',
    name: 'Discover',
    focus: 'Listen First & Systems Audit',
    icon: <Search className="w-5 h-5 text-[#FAC344]" />,
    summary: 'Senior partners inspect technical debt, legacy dependencies, and real organizational constraints directly in your environment.',
    deliverable: 'Current-State Architecture & Risk Audit',
    accountability: 'Led by Senior Practitioners',
  },
  {
    id: 'frame',
    step: 'Phase 02',
    name: 'Frame',
    focus: 'Platform-Neutral Strategy',
    icon: <Compass className="w-5 h-5 text-[#FAC344]" />,
    summary: 'We evaluate unbiased platform options with explicit cost modeling, risk profiles, and realistic implementation trade-offs.',
    deliverable: 'Target Architecture & Phased Roadmap',
    accountability: 'Zero Vendor Default Bias',
  },
  {
    id: 'deliver',
    step: 'Phase 03',
    name: 'Deliver',
    focus: 'Hands-On Production Engineering',
    icon: <Code2 className="w-5 h-5 text-[#FAC344]" />,
    summary: 'The same senior team architects and builds the solution: writing code, connecting integrations, and testing live systems.',
    deliverable: 'Working Production Systems & CI/CD',
    accountability: 'Continuous Accountability',
  },
  {
    id: 'optimize',
    step: 'Phase 04',
    name: 'Optimize',
    focus: 'Adoption & Long-Term Health',
    icon: <ShieldCheck className="w-5 h-5 text-[#FAC344]" />,
    summary: 'Driving actual enterprise user adoption, embedding operating playbooks, and establishing continuous performance monitoring.',
    deliverable: 'Operational Playbooks & Team Handover',
    accountability: 'Measured Business Outcomes',
  },
];

export const MethodologyHeroAnim: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextPhase = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % PHASES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const intervalMs = 50;
    const durationMs = 4200;
    const increment = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextPhase();
          return 0;
        }
        return prev + increment;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isHovered, nextPhase]);

  const current = PHASES[activeIdx];

  return (
    <div
      className="relative w-full max-w-[560px] rounded-3xl bg-gradient-to-br from-[#020626] to-[#0a1133] text-white p-6 sm:p-8 border border-white/15 shadow-2xl overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Red & Amber Atmosphere */}
      <div className="absolute -top-24 right-0 w-72 h-72 bg-[#D22931]/15 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-72 h-72 bg-[#FAC344]/10 blur-[90px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D22931]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
            Delivery Lifecycle
          </span>
        </div>
        <div className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#FAC344] text-xs font-medium">
          Continuous Accountability
        </div>
      </div>

      {/* 4 Interactive Phase Tabs */}
      <div className="relative z-10 grid grid-cols-4 gap-2 mb-6">
        {PHASES.map((p, idx) => {
          const isSelected = idx === activeIdx;

          return (
            <button
              key={p.id}
              onClick={() => {
                setActiveIdx(idx);
                setProgress(0);
              }}
              className={`relative rounded-xl p-2.5 sm:p-3 text-left transition-all duration-300 cursor-pointer overflow-hidden border ${
                isSelected
                  ? 'bg-white/15 border-[#D22931] shadow-lg -translate-y-0.5'
                  : 'bg-white/[0.04] border-white/10 hover:border-white/25 hover:bg-white/[0.08]'
              }`}
            >
              {isSelected && !isHovered && (
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#D22931] to-[#FAC344]"
                />
              )}

              <div className="text-[10px] font-semibold text-[#FAC344] mb-0.5">
                0{idx + 1}
              </div>
              <div className="text-xs font-bold text-white truncate">
                {p.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Active Phase Showcase */}
      <div className="relative z-10 bg-white/[0.06] rounded-2xl p-6 border border-white/15 backdrop-blur-md min-h-[220px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {/* Phase Identity */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  {current.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">
                    {current.step}: {current.name}
                  </h3>
                  <div className="text-xs text-[#FAC344] font-medium">{current.focus}</div>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-white/70 bg-white/10 px-2.5 py-1 rounded-full">
                {current.accountability}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {current.summary}
            </p>

            {/* Canonical Deliverable */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#D22931] flex-shrink-0" />
                <span className="font-medium">{current.deliverable}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Guarantee */}
      <div className="relative z-10 mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
        <span>The senior team who designs the strategy executes the build</span>
        <div className="flex items-center gap-1 text-[#FAC344] font-semibold">
          <span>Explore Phase</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};