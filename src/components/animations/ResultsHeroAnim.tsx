import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Server, ShieldCheck, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { BorderBeam } from '../ui/BorderBeam';

interface MetricCase {
  id: string;
  badge: string;
  stat: string;
  label: string;
  client: string;
  icon: React.ReactNode;
  detail: string;
  telemetryText: string;
  benchmark: string;
}

const CASES: MetricCase[] = [
  {
    id: 'uptime',
    badge: 'Retail Flash Traffic',
    stat: '99.99%',
    label: 'Uptime at Peak',
    client: 'High-Volume E-Commerce',
    icon: <Activity className="w-5 h-5 text-[#FAC344]" />,
    detail: 'Zero downtime through surge events. 50% faster page loads and 40% revenue boost.',
    telemetryText: 'SLA: 99.99% · 0 Critical Incidents',
    benchmark: '+40% Revenue Lift',
  },
  {
    id: 'divestiture',
    badge: 'Enterprise Separation',
    stat: '5,000+',
    label: 'Users Migrated',
    client: 'Global SaaS Divestiture',
    icon: <Server className="w-5 h-5 text-[#FAC344]" />,
    detail: 'Full carve-out from parent infrastructure with zero downtime and 30% higher asset efficiency.',
    telemetryText: 'Cutover Time: On-Schedule · 0 Downtime',
    benchmark: '25% Higher Satisfaction',
  },
  {
    id: 'remediation',
    badge: 'Threat Surface',
    stat: '60%',
    label: 'Faster Remediation',
    client: 'Global Enterprise to SaaS',
    icon: <ShieldCheck className="w-5 h-5 text-[#FAC344]" />,
    detail: 'Vulnerability backlog cleared across global endpoints with automated 3-year security roadmap.',
    telemetryText: 'Audit Status: SOC 2 & HIPAA Ready',
    benchmark: 'Zero Exploited CVEs',
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
    const durationMs = 4000; // 4s per case
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
      className="relative w-full max-w-[560px] rounded-3xl bg-gradient-to-br from-[#020626] via-[#050c33] to-[#0a1548] text-white p-6 sm:p-7 border border-white/15 shadow-2xl overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Specular Beam & Amber/Red Glow */}
      <BorderBeam size={270} duration={11} colorFrom="#FAC344" colorTo="#D22931" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#D22931]/15 blur-[90px] rounded-full pointer-events-none" />

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 bg-cyber-grid-dark opacity-20 pointer-events-none" />

      {/* Top Live Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-5 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold tracking-wider text-white/90 uppercase">Live Verification Telemetry</span>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#FAC344] text-[11px] font-semibold">
          <Sparkles className="w-3 h-3 text-[#FAC344]" />
          <span>Audited in Production</span>
        </div>
      </div>

      {/* 3 Interactive Metric Selector Cards */}
      <div className="relative z-10 grid grid-cols-3 gap-2.5 mb-5">
        {CASES.map((c, idx) => {
          const isActive = idx === activeIdx;

          return (
            <button
              key={c.id}
              onClick={() => {
                setActiveIdx(idx);
                setProgress(0);
              }}
              className={`relative rounded-xl p-3 text-left transition-all duration-300 cursor-pointer overflow-hidden border ${
                isActive
                  ? 'bg-white/15 border-[#D22931] shadow-lg -translate-y-0.5'
                  : 'bg-white/[0.04] border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
              }`}
            >
              {isActive && !isHovered && (
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#FAC344] to-[#D22931]"
                />
              )}

              <div className="text-[10px] font-mono text-white/50 truncate mb-1">
                {c.badge}
              </div>
              <div className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight">
                {c.stat}
              </div>
              <div className="text-[10px] font-mono font-medium text-[#FAC344] truncate mt-0.5">
                {c.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Animated Waveform / Signal Display */}
      <div className="relative z-10 bg-white/[0.04] rounded-2xl p-4 border border-white/10 mb-5 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mb-2">
          <span className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#FAC344]" />
            <span>Signal Waveform · {current.client}</span>
          </span>
          <span className="text-[#FAC344] font-bold">{current.benchmark}</span>
        </div>

        {/* Live SVG Waveform Canvas */}
        <div className="w-full h-14 relative flex items-center justify-center">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 50">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D22931" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FAC344" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#D22931" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Subtle background grid lines */}
            <line x1="0" y1="25" x2="300" y2="25" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
            <line x1="0" y1="12" x2="300" y2="12" stroke="rgba(255,255,255,0.05)" />
            <line x1="0" y1="38" x2="300" y2="38" stroke="rgba(255,255,255,0.05)" />

            {/* Animated primary wave */}
            <motion.path
              d={
                activeIdx === 0
                  ? "M 0 25 Q 35 5, 75 25 T 150 25 T 225 25 T 300 25"
                  : activeIdx === 1
                  ? "M 0 25 Q 50 40, 100 25 T 200 25 T 300 25"
                  : "M 0 35 Q 40 10, 80 30 T 160 15 T 240 30 T 300 20"
              }
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={false}
              animate={{
                d:
                  activeIdx === 0
                    ? [
                        "M 0 25 Q 35 5, 75 25 T 150 25 T 225 25 T 300 25",
                        "M 0 25 Q 35 45, 75 25 T 150 25 T 225 25 T 300 25",
                        "M 0 25 Q 35 5, 75 25 T 150 25 T 225 25 T 300 25",
                      ]
                    : activeIdx === 1
                    ? [
                        "M 0 25 Q 50 40, 100 25 T 200 25 T 300 25",
                        "M 0 25 Q 50 10, 100 25 T 200 25 T 300 25",
                        "M 0 25 Q 50 40, 100 25 T 200 25 T 300 25",
                      ]
                    : [
                        "M 0 35 Q 40 10, 80 30 T 160 15 T 240 30 T 300 20",
                        "M 0 20 Q 40 35, 80 15 T 160 30 T 240 15 T 300 25",
                        "M 0 35 Q 40 10, 80 30 T 160 15 T 240 30 T 300 20",
                      ],
              }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            />

            {/* Glowing signal node */}
            <motion.circle
              r="4"
              fill="#FAC344"
              className="drop-shadow-[0_0_8px_#FAC344]"
              animate={{
                cx: [20, 150, 280, 150, 20],
                cy: [25, 20, 25, 30, 25],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
          </svg>
        </div>
      </div>

      {/* Active Case Narrative */}
      <div className="relative z-10 bg-white/[0.06] rounded-2xl p-5 border border-white/15 backdrop-blur-md min-h-[140px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  {current.icon}
                </div>
                <div className="font-display font-bold text-sm text-white">{current.client}</div>
              </div>
              <span className="text-[10px] font-mono text-[#FAC344]">{current.telemetryText}</span>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">{current.detail}</p>

            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[11px] text-white/90">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
              <span className="font-medium">Strictly audited against production telemetry benchmarks</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Status */}
      <div className="relative z-10 mt-4 flex items-center justify-between text-[11px] font-mono text-white/50">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>{isHovered ? 'Paused on inspection' : 'Continuous production audit'}</span>
        </span>
        <span className="text-white/40">Case 0{activeIdx + 1} / 03</span>
      </div>
    </div>
  );
};