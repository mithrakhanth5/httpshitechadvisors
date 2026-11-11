import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Users, MapPin, Calendar } from 'lucide-react';
import { BorderBeam } from '../ui/BorderBeam';

interface RoundtableTopic {
  id: string;
  role: string;
  title: string;
  focus: string;
  attendees: string;
  date: string;
  location: string;
}

const TOPICS: RoundtableTopic[] = [
  {
    id: 'ai-gov',
    role: 'CIO & CTO Cohort',
    title: 'Governed AI Agents & Multi-Step Workflows',
    focus: 'Transitioning from experimental GenAI proofs-of-concept into high-throughput production with strict enterprise safety guardrails.',
    attendees: '16 Seats · Invitation Only',
    date: 'Spring 2026',
    location: 'Seattle, WA',
  },
  {
    id: 'cloud-econ',
    role: 'CTO & FinOps Cohort',
    title: 'Cloud Unit Economics & Lakehouse Architecture',
    focus: 'Cutting runaway compute spend, eliminating data drift across multi-source pipelines, and modernizing core database foundations.',
    attendees: '16 Seats · VP & C-Suite',
    date: 'Summer 2026',
    location: 'Kirkland, WA',
  },
  {
    id: 'cyber-risk',
    role: 'CISO & Risk Cohort',
    title: 'Active Exposure Remediation & Board Reporting',
    focus: 'Prioritizing the vulnerability backlog that matters, achieving audit readiness (SOC 2, HIPAA), and zero-trust verification.',
    attendees: '16 Seats · Security Leaders',
    date: 'Fall 2026',
    location: 'Bellevue, WA',
  },
];

export const EventsHeroAnim: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextTopic = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % TOPICS.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const intervalMs = 50;
    const durationMs = 4200; // 4.2s per roundtable theme
    const increment = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextTopic();
          return 0;
        }
        return prev + increment;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isHovered, nextTopic]);

  const current = TOPICS[activeIdx];

  // 6 Executive seats positioned on an orbit
  const seats = [
    { role: 'CIO', angle: 0 },
    { role: 'CTO', angle: 60 },
    { role: 'CISO', angle: 120 },
    { role: 'VP AI', angle: 180 },
    { role: 'PE Partner', angle: 240 },
    { role: 'Data Chief', angle: 300 },
  ];

  return (
    <div
      className="relative w-full max-w-[560px] rounded-3xl bg-gradient-to-br from-[#020626] via-[#050c33] to-[#0a1444] text-white p-6 sm:p-7 border border-white/15 shadow-2xl overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Specular Beam & Amber Ambient Halo */}
      <BorderBeam size={270} duration={12} colorFrom="#FAC344" colorTo="#D22931" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FAC344]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 bg-cyber-grid-dark opacity-20 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-5 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FAC344] animate-ping" />
          <span className="font-bold tracking-wider text-white/90 uppercase">Executive Exchange</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#FAC344] text-[11px] font-semibold">
          <Lock className="w-3 h-3 text-[#FAC344]" />
          <span>Chatham House Rule</span>
        </div>
      </div>

      {/* Interactive Orbital Nexus Visualization */}
      <div className="relative z-10 w-full h-44 rounded-2xl bg-white/[0.04] border border-white/10 mb-5 flex items-center justify-center overflow-hidden">
        {/* Orbital SVG Ring & Connecting Rays */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180">
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FAC344" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#D22931" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central ambient glow */}
          <circle cx="200" cy="90" r="60" fill="url(#centerGlow)" />

          {/* Elliptical Table Orbit */}
          <ellipse
            cx="200"
            cy="90"
            rx="140"
            ry="60"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Inner ring */}
          <ellipse
            cx="200"
            cy="90"
            rx="90"
            ry="38"
            fill="rgba(2,6,38,0.7)"
            stroke="rgba(210,41,49,0.3)"
            strokeWidth="1"
          />

          {/* Radiating Rays connecting seats to table center */}
          {seats.map((seat, i) => {
            const rad = (seat.angle * Math.PI) / 180;
            const x = 200 + 140 * Math.cos(rad);
            const y = 90 + 60 * Math.sin(rad);
            return (
              <line
                key={i}
                x1="200"
                y1="90"
                x2={x}
                y2={y}
                stroke="rgba(250,195,68,0.25)"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
            );
          })}
        </svg>

        {/* Center Hub: Chatham House Shield */}
        <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#020626] border border-[#FAC344]/50 shadow-[0_0_24px_rgba(250,195,68,0.35)] flex flex-col items-center justify-center p-2 text-center">
          <Lock className="w-5 h-5 text-[#FAC344] mb-0.5" />
          <span className="text-[8px] font-mono font-bold text-white uppercase tracking-tighter">Est. 2018</span>
        </div>

        {/* 6 Executive Seat Nodes positioned on the perimeter */}
        {seats.map((seat, i) => {
          const rad = (seat.angle * Math.PI) / 180;
          // Scale to percentage for CSS absolute positioning
          const leftPct = 50 + (140 / 400) * 100 * Math.cos(rad);
          const topPct = 50 + (60 / 180) * 100 * Math.sin(rad);
          const isHighlighted = i === activeIdx || i === (activeIdx + 3) % seats.length;

          return (
            <motion.div
              key={seat.role}
              style={{ left: `${leftPct}%`, top: `${topPct}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold border transition-all duration-300 ${
                isHighlighted
                  ? 'bg-[#D22931] border-[#FAC344] text-white shadow-[0_0_12px_#D22931] scale-110'
                  : 'bg-[#020626]/90 border-white/20 text-white/70 hover:border-white/50'
              }`}
            >
              {seat.role}
            </motion.div>
          );
        })}
      </div>

      {/* 3 Interactive Cohort Tabs */}
      <div className="relative z-10 grid grid-cols-3 gap-2 mb-4">
        {TOPICS.map((t, idx) => {
          const isActive = idx === activeIdx;

          return (
            <button
              key={t.id}
              onClick={() => {
                setActiveIdx(idx);
                setProgress(0);
              }}
              className={`relative rounded-xl p-2.5 text-left transition-all duration-300 cursor-pointer overflow-hidden border ${
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
              <div className="text-[10px] font-mono text-[#FAC344] truncate">{t.date}</div>
              <div className="text-xs font-display font-bold text-white truncate mt-0.5">{t.role}</div>
            </button>
          );
        })}
      </div>

      {/* Active Agenda Detail Card */}
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
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FAC344]">
                Next Roundtable Focus
              </span>
              <div className="flex items-center gap-3 text-[11px] text-white/70">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#FAC344]" />
                  {current.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FAC344]" />
                  {current.location}
                </span>
              </div>
            </div>

            <h4 className="font-display font-bold text-sm sm:text-base text-white leading-snug">
              {current.title}
            </h4>

            <p className="text-xs text-white/80 leading-relaxed">{current.focus}</p>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/90">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#D22931]" />
                <span className="font-medium">{current.attendees}</span>
              </div>
              <span className="text-white/40 font-mono text-[10px]">Chatham House Rule</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-4 flex items-center justify-between text-[11px] font-mono text-white/50">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>{isHovered ? 'Paused on inspection' : 'Continuous peer exchange'}</span>
        </span>
        <span className="text-white/40">Cohort 0{activeIdx + 1} / 03</span>
      </div>
    </div>
  );
};