import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Server, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface MetricCase {
  id: string;
  category: string;
  stat: string;
  statLabel: string;
  client: string;
  icon: React.ReactNode;
  narrative: string;
  outcomes: string[];
}

const CASES: MetricCase[] = [
  {
    id: 'retail',
    category: 'Retail & E-Commerce',
    stat: '99.99%',
    statLabel: 'Peak Availability',
    client: 'High-Volume Online Retailer',
    icon: <ShoppingCart className="w-5 h-5 text-[#FAC344]" />,
    narrative: 'Maintained 99.99% uptime through flash-sale traffic surges with 50% faster page loads and a 40% revenue increase.',
    outcomes: ['99.99% uptime at peak volume', '50% faster page load times', '40% verified revenue growth'],
  },
  {
    id: 'divestiture',
    category: 'Cloud & Infrastructure',
    stat: '5,000+',
    statLabel: 'Users Migrated',
    client: 'Global SaaS Enterprise Divestiture',
    icon: <Server className="w-5 h-5 text-[#FAC344]" />,
    narrative: 'Carved out global workforce infrastructure from parent company with zero critical downtime and 30% higher asset efficiency.',
    outcomes: ['5,000+ users migrated safely', 'Zero business-critical downtime', '25% higher user satisfaction'],
  },
  {
    id: 'security',
    category: 'Cybersecurity & Risk',
    stat: '60%',
    statLabel: 'Faster Remediation',
    client: 'Global Enterprise Moving to SaaS',
    icon: <ShieldCheck className="w-5 h-5 text-[#FAC344]" />,
    narrative: 'Streamlined vulnerability backlogs across international endpoints and established an active 3-year board-approved security roadmap.',
    outcomes: ['60% cut in time to remediation', 'Regulatory compliance readiness achieved', 'Continuous exposure defense'],
  },
];

export const ResultsHeroAnim: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextCase = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % CASES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const intervalMs = 50;
    const durationMs = 4500;
    const increment = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextCase();
          return 0;
        }
        return prev + increment;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isHovered, nextCase]);

  const current = CASES[activeIdx];

  return (
    <div
      className="relative w-full max-w-[560px] rounded-3xl bg-gradient-to-br from-[#020626] to-[#0a1133] text-white p-6 sm:p-8 border border-white/15 shadow-2xl overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Soft Ambient Glow */}
      <div className="absolute -top-24 right-0 w-72 h-72 bg-[#D22931]/15 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-72 h-72 bg-[#FAC344]/10 blur-[90px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D22931]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
            Verified Production Track Record
          </span>
        </div>
        <div className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#FAC344] text-xs font-medium">
          Audited Client Results
        </div>
      </div>

      {/* 3 Metric Selector Cards */}
      <div className="relative z-10 grid grid-cols-3 gap-2.5 mb-6">
        {CASES.map((c, idx) => {
          const isSelected = idx === activeIdx;

          return (
            <button
              key={c.id}
              onClick={() => {
                setActiveIdx(idx);
                setProgress(0);
              }}
              className={`relative rounded-xl p-3 text-left transition-all duration-300 cursor-pointer overflow-hidden border ${
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

              <div className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                {c.stat}
              </div>
              <div className="text-[11px] font-semibold text-[#FAC344] truncate mt-0.5">
                {c.statLabel}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Case Study Card */}
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
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  {current.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">
                    {current.client}
                  </h3>
                  <div className="text-xs text-[#FAC344] font-medium">{current.category}</div>
                </div>
              </div>
              <span className="text-base font-display font-bold text-white bg-white/10 px-3 py-1 rounded-xl">
                {current.stat}
              </span>
            </div>

            {/* Narrative */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {current.narrative}
            </p>

            {/* Outcomes Checklist */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              {current.outcomes.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-white/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Guarantee */}
      <div className="relative z-10 mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
        <span>Verified outcomes delivered in live client production</span>
        <div className="flex items-center gap-1 text-[#FAC344] font-semibold">
          <span>Read Cases</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};