import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Users, MapPin, Calendar, ArrowRight, Shield } from 'lucide-react';

interface RoundtableTopic {
  id: string;
  season: string;
  year: string;
  location: string;
  cohort: string;
  title: string;
  synopsis: string;
  seats: string;
  status: string;
}

const ROUNDTABLES: RoundtableTopic[] = [
  {
    id: 'ai-governance',
    season: 'Spring',
    year: '2026',
    location: 'Seattle, WA',
    cohort: 'CIO & CTO Focus',
    title: 'Governed AI Agents & Multi-Step Workflows',
    synopsis: 'How enterprise technology leaders move generative AI from experimental pilots into governed, auditable production architectures.',
    seats: '16 Seats · Invitation Only',
    status: 'Confirmed Cohort',
  },
  {
    id: 'cloud-economics',
    season: 'Summer',
    year: '2026',
    location: 'Kirkland, WA',
    cohort: 'CTO & FinOps Focus',
    title: 'Cloud Unit Economics & Data Mesh Consolidation',
    synopsis: 'Optimizing infrastructure spend, unifying fragmented lakehouses, and ensuring zero data drift across high-throughput pipelines.',
    seats: '16 Seats · C-Suite & VPs',
    status: 'Nominations Open',
  },
  {
    id: 'security-exposure',
    season: 'Fall',
    year: '2026',
    location: 'Bellevue, WA',
    cohort: 'CISO & Risk Focus',
    title: 'Active Exposure Remediation & Board Readiness',
    synopsis: 'Defending hybrid multi-cloud estates, clearing high-priority vulnerability backlogs, and demonstrating verified regulatory and risk compliance.',
    seats: '16 Seats · Security Leaders',
    status: 'Nominations Open',
  },
];

export const EventsHeroAnim: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextRoundtable = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % ROUNDTABLES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const intervalMs = 50;
    const durationMs = 4600;
    const increment = (intervalMs / durationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextRoundtable();
          return 0;
        }
        return prev + increment;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isHovered, nextRoundtable]);

  const current = ROUNDTABLES[activeIdx];

  return (
    <div
      className="relative w-full max-w-[560px] rounded-3xl bg-gradient-to-br from-[#020626] to-[#0a1133] text-white p-6 sm:p-8 border border-white/15 shadow-2xl overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Soft Ambient Warmth */}
      <div className="absolute -top-24 right-0 w-72 h-72 bg-[#D22931]/15 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-72 h-72 bg-[#FAC344]/10 blur-[90px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D22931]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
            Executive Roundtable Series
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#FAC344] text-xs font-medium">
          <Lock className="w-3.5 h-3.5 text-[#FAC344]" />
          <span>Executive Peer Discussion</span>
        </div>
      </div>

      {/* 3 Executive Cohort Selector Tabs */}
      <div className="relative z-10 grid grid-cols-3 gap-2.5 mb-6">
        {ROUNDTABLES.map((item, idx) => {
          const isSelected = idx === activeIdx;

          return (
            <button
              key={item.id}
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

              <div className="text-[11px] font-semibold text-[#FAC344] mb-0.5">
                {item.season} {item.year}
              </div>
              <div className="text-xs font-semibold text-white/90 truncate">
                {item.cohort.split('&')[0].trim()}
              </div>
            </button>
          );
        })}
      </div>

      {/* Featured Roundtable Showcase Card */}
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
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-3 text-white/80">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#FAC344]" />
                  <span>{current.season} {current.year}</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#FAC344]" />
                  <span>{current.location}</span>
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#FAC344] bg-[#FAC344]/10 border border-[#FAC344]/25 px-2.5 py-0.5 rounded-full">
                {current.cohort}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-snug">
              {current.title}
            </h3>

            {/* Synopsis */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {current.synopsis}
            </p>

            {/* Participation Footer */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-white/90">
                <Users className="w-4 h-4 text-[#D22931]" />
                <span className="font-medium">{current.seats}</span>
              </div>
              <span className="text-white/50 text-[11px]">
                Pacific Northwest Executive Forum
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Information Bar */}
      <div className="relative z-10 mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#FAC344]" />
          <span>Strict non-attribution policy &middot; Est. 2018</span>
        </div>
        <div className="flex items-center gap-1 text-[#FAC344] font-semibold">
          <span>Request Seat</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};