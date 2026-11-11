import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Compass, Code2, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { BorderBeam } from '../ui/BorderBeam';

interface StageData {
  id: string;
  step: string;
  name: string;
  role: string;
  icon: React.ReactNode;
  summary: string;
  gate: string;
  deliverable: string;
  metric: string;
}

const STAGES: StageData[] = [
  {
    id: 'discover',
    step: '01',
    name: 'Discover',
    role: 'Listen First & Audit Systems',
    icon: <Search className="w-5 h-5 text-[#FAC344]" />,
    summary: 'Senior partners inspect technical debt, architecture, and actual business constraints.',
    gate: 'Zero-Assumptions Audit',
    deliverable: 'Current-State Architecture & Risk Map',
    metric: '100% Senior Lead',
  },
  {
    id: 'frame',
    step: '02',
    name: 'Frame',
    role: 'Platform-Neutral Strategy',
    icon: <Compass className="w-5 h-5 text-[#FAC344]" />,
    summary: 'Define unbiased platform options with explicit trade-offs, budget impact, and risk profiles.',
    gate: 'Vendor-Neutral Verdict',
    deliverable: 'Target Architecture & Phased Blueprint',
    metric: 'Zero Default Bias',
  },
  {
    id: 'deliver',
    step: '03',
    name: 'Deliver',
    role: 'Hands-on Production Build',
    icon: <Code2 className="w-5 h-5 text-[#FAC344]" />,
    summary: 'The same senior team writes code, integrates platforms, and configures production pipelines.',
    gate: 'Zero-Handoff Execution',
    deliverable: 'Working Production Systems & CI/CD',
    metric: 'Zero Loss Handover',
  },
  {
    id: 'optimize',
    step: '04',
    name: 'Optimize',
    role: 'Adoption & Long-Term Health',
    icon: <ShieldCheck className="w-5 h-5 text-[#FAC344]" />,
    summary: 'Ensure user adoption, embed internal capability, and monitor SLAs for ongoing ROI.',
    gate: 'Measurable Outcome Lock',
    deliverable: 'Operational Playbook & Team Handover',
    metric: '99.99% Reliability',
  },
];

export const MethodologyHeroAnim: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextStage = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % STAGES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const intervalMs = 50;
    const durationMs = 3800; // 3.8s per phase
    const increment = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextStage();
          return 0;
        }
        return prev + increment;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isHovered, nextStage]);

  const current = STAGES[activeIdx];

  return (
    <div
      className="relative w-full max-w-[560px] rounded-3xl bg-gradient-to-br from-[#020626] via-[#050b30] to-[#0a1444] text-white p-6 sm:p-7 border border-white/15 shadow-2xl overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Specular Beam & Glare */}
      <BorderBeam size={260} duration={10} colorFrom="#D22931" colorTo="#FAC344" />
      <div className="absolute -top-24 right-0 w-64 h-64 bg-[#D22931]/15 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-64 h-64 bg-[#FAC344]/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 bg-cyber-grid-dark opacity-20 pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-5 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FAC344] animate-ping" />
          <span className="font-bold tracking-wider text-white/90 uppercase">Delivery Protocol</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#FAC344] text-[11px] font-semibold">
          <Sparkles className="w-3 h-3 text-[#FAC344]" />
          <span>Zero-Handoff Loss</span>
        </div>
      </div>

      {/* 4-Stage Interactive Pipeline Stepper */}
      <div className="relative z-10 grid grid-cols-4 gap-2 mb-6">
        {STAGES.map((s, idx) => {
          const isActive = idx === activeIdx;
          const isPassed = idx < activeIdx;

          return (
            <button
              key={s.id}
              onClick={() => {
                setActiveIdx(idx);
                setProgress(0);
              }}
              className={`relative rounded-xl p-2.5 sm:p-3 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden border ${
                isActive
                  ? 'bg-white/15 border-[#D22931] shadow-lg -translate-y-0.5'
                  : isPassed
                  ? 'bg-white/5 border-white/15 hover:bg-white/10'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/25'
              }`}
            >
              {/* Progress Bar for Active Card */}
              {isActive && !isHovered && (
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#D22931] to-[#FAC344]"
                />
              )}

              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#FAC344]' : 'text-white/40'}`}>
                  {s.step}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? 'bg-[#D22931] shadow-[0_0_8px_#D22931]' : isPassed ? 'bg-white/60' : 'bg-white/20'
                  }`}
                />
              </div>

              <span className={`text-xs font-display font-bold truncate ${isActive ? 'text-white' : 'text-white/70'}`}>
                {s.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Laser Conduit Graphic */}
      <div className="relative z-10 w-full h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D22931] via-[#FAC344] to-[#D22931] rounded-full shadow-[0_0_12px_#D22931]"
          animate={{
            width: `${((activeIdx + 1) / STAGES.length) * 100}%`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        />
      </div>

      {/* Detailed Active Stage Card */}
      <div className="relative z-10 bg-white/[0.06] rounded-2xl p-5 border border-white/15 backdrop-blur-md min-h-[170px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {/* Stage Title & Role */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  {current.icon}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    Phase {current.step}: {current.name}
                  </div>
                  <div className="text-[11px] font-mono text-[#FAC344]">{current.role}</div>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#D22931]/20 border border-[#D22931]/40 text-[#FAC344]">
                {current.metric}
              </span>
            </div>

            {/* Stage Summary */}
            <p className="text-xs text-white/80 leading-relaxed">{current.summary}</p>

            {/* Deliverable Pill */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 text-white/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
                <span className="font-medium truncate">{current.deliverable}</span>
              </div>
              <span className="font-mono text-white/40 text-[10px] uppercase tracking-wider">{current.gate}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Interactive Prompt */}
      <div className="relative z-10 mt-4 flex items-center justify-between text-[11px] font-mono text-white/50">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>{isHovered ? 'Paused on inspection' : 'Continuous senior lifecycle'}</span>
        </span>
        <span className="text-white/40">Step {activeIdx + 1} of 4</span>
      </div>
    </div>
  );
};