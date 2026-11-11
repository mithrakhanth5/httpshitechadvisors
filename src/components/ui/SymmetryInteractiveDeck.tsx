import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Play, Pause, Sparkles, Layers, Shield, Database, Bot } from 'lucide-react';

interface TaskCard {
  id: string;
  tag: string;
  shortcut: string;
  title: string;
  status: 'completed' | 'in_progress' | 'queued';
  steps: { label: string; done: boolean }[];
  result: string;
  platform: string;
  icon: React.ReactNode;
}

const CARDS: TaskCard[] = [
  {
    id: 'ai-agents',
    tag: 'Enterprise AI & Automation',
    shortcut: 'A',
    title: 'Deploy Governed Multi-Agent Pipeline',
    status: 'in_progress',
    steps: [
      { label: 'Map Slack & Jira decision threads to data schema', done: true },
      { label: 'Establish LLM safety & SOC 2 guardrails', done: true },
      { label: 'Deploy autonomous triage pod to production', done: false },
    ],
    result: '40% reduction in manual escalation cycles',
    platform: 'Gemini + LangChain',
    icon: <Bot className="w-4 h-4 text-[#D22931]" />,
  },
  {
    id: 'cloud-data',
    tag: 'Data Architecture',
    shortcut: 'D',
    title: 'Multi-Source Data Pipeline & Warehouse Sync',
    status: 'completed',
    steps: [
      { label: 'Audit legacy ETL scripts & schema bottlenecks', done: true },
      { label: 'Architect unified lakehouse data contracts', done: true },
      { label: 'Deploy automated Snowflake data sync', done: true },
    ],
    result: 'Zero data drift across Salesforce & ERP',
    platform: 'Snowflake + Databricks',
    icon: <Database className="w-4 h-4 text-[#D22931]" />,
  },
  {
    id: 'sec-risk',
    tag: 'Cybersecurity & Risk',
    shortcut: 'S',
    title: 'Vulnerability Backlog Remediation',
    status: 'completed',
    steps: [
      { label: 'Surface critical exposed endpoints & API keys', done: true },
      { label: 'Remediate cloud IAM permissions & posture', done: true },
      { label: 'Validate SOC 2 Type II audit readiness', done: true },
    ],
    result: '60% faster time to security remediation',
    platform: 'CrowdStrike + Wiz',
    icon: <Shield className="w-4 h-4 text-[#D22931]" />,
  },
  {
    id: 'apps-erp',
    tag: 'Core Applications',
    shortcut: 'R',
    title: 'ERP & CRM System Modernization',
    status: 'queued',
    steps: [
      { label: 'Evaluate business workflow friction points', done: true },
      { label: 'Migrate 5,000+ users without system outage', done: true },
      { label: 'Hands-on operational handover to client team', done: false },
    ],
    result: '99.99% availability sustained through transition',
    platform: 'Salesforce + NetSuite',
    icon: <Layers className="w-4 h-4 text-[#D22931]" />,
  },
];

export const SymmetryInteractiveDeck: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextCard = useCallback(() => {
    setActiveCardIndex((prev) => (prev + 1) % CARDS.length);
    setProgress(0);
  }, []);

  // Auto-cycling timer inspired by Symmetry deck progress
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // Update every 50ms
    const totalDuration = 4500; // 4.5s per card
    const stepIncrement = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextCard();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, nextCard]);

  const active = CARDS[activeCardIndex];

  return (
    <div
      className="relative w-full max-w-2xl mx-auto my-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Symmetry-style ambient drifting background badges */}
      <motion.div
        animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -top-5 -left-8 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-[#DCE4EC] shadow-md text-[11px] font-mono text-[#020626] z-20 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-[#40aa4a] animate-pulse" />
        <span>Hitech Pod Embedded</span>
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5], rotate: [1, -1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden sm:flex absolute -bottom-5 -right-6 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-[#DCE4EC] shadow-md text-[11px] font-mono text-[#020626] z-20 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-[#D22931] shadow-[0_0_8px_#D22931]" />
        <span>Zero Handoff Loss</span>
      </motion.div>

      {/* Main Interactive Deck Frame */}
      <div className="relative rounded-3xl bg-[#020626] text-white p-6 sm:p-8 shadow-2xl border border-white/10 overflow-hidden">
        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 bg-cyber-grid-dark opacity-25 pointer-events-none" />

        {/* Dynamic Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#D22931]/15 blur-3xl pointer-events-none" />

        {/* Top Header: Shortcut Selectors & Pause/Play Control */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
          {/* Symmetry Shortcut Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {CARDS.map((card, idx) => {
              const isSelected = idx === activeCardIndex;
              return (
                <button
                  key={card.id}
                  onClick={() => {
                    setActiveCardIndex(idx);
                    setProgress(0);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#D22931] text-white shadow-xs'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                  aria-label={`Select ${card.title}`}
                >
                  <span className="w-4 h-4 rounded-md bg-white/20 flex items-center justify-center text-[10px]">
                    {card.shortcut}
                  </span>
                  <span className="hidden md:inline">{card.tag.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Pause / Resume Pill */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white/80 transition-colors cursor-pointer"
          >
            {isPaused ? <Play className="w-3 h-3 text-[#FAC344]" /> : <Pause className="w-3 h-3 text-[#D22931]" />}
            <span>{isPaused ? 'Resume' : 'Pause'}</span>
          </button>
        </div>

        {/* Active Task Card with 3D Pop Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16, rotateX: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, rotateX: -6, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 space-y-5"
          >
            {/* Task Tag & Platform */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FAC344] text-xs font-mono font-bold uppercase tracking-wider border border-white/15">
                <Sparkles className="w-3 h-3 text-[#FAC344]" />
                {active.tag}
              </span>
              <span className="text-xs font-mono text-white/50">{active.platform}</span>
            </div>

            {/* Task Title */}
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug">
              {active.title}
            </h3>

            {/* Sequential Steps List (Symmetry style checkmarks & progress) */}
            <div className="space-y-2.5 pt-2">
              {active.steps.map((st, i) => (
                <motion.div
                  key={st.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                    st.done
                      ? 'bg-white/10 border-white/15 text-white'
                      : 'bg-[#D22931]/15 border-[#D22931]/30 text-white shadow-2xs'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      st.done ? 'bg-[#40aa4a] text-white' : 'bg-[#D22931] text-white animate-pulse'
                    }`}
                  >
                    {st.done ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="flex-1">{st.label}</span>
                  {!st.done && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FAC344] bg-[#FAC344]/15 px-2 py-0.5 rounded-md">
                      Executing
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Symmetry Result Banner */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <span className="text-white/70">Verified Outcome:</span>
              <strong className="text-[#FAC344] font-semibold">{active.result}</strong>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Card Progress Bar (Symmetry Deck_dk-progress) */}
        <div className="relative mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-[#D22931] via-[#FAC344] to-[#D22931] shadow-[0_0_10px_#D22931]"
            />
          </div>
          <span className="text-[11px] font-mono text-white/50 pl-4 whitespace-nowrap">
            0{activeCardIndex + 1} / 0{CARDS.length}
          </span>
        </div>
      </div>
    </div>
  );
};
