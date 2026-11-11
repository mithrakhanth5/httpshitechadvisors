import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Compass, GitMerge, Rocket, Award, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { LaserCircuit } from '../ui/LaserCircuit';
import { BorderBeam } from '../ui/BorderBeam';

interface Step {
  step: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
  takeaway: string;
}

const STEPS: Step[] = [
  {
    step: '01',
    name: 'Strategic Diagnosis',
    subtitle: 'Cut through vendor noise to find the root constraint.',
    description: 'We interview stakeholders, audit architecture debt, evaluate cloud unit economics, and benchmark security exposure. No 80-page generic decks: just the 3 decisions that actually move the business.',
    icon: <Compass className="w-6 h-6 text-[#D22931]" />,
    deliverables: ['Executive Constraint Map', 'Architecture Debt Audit', 'Payback & ROI Horizon'],
    takeaway: 'Clarity on what to build, what to kill, and where to invest.',
  },
  {
    step: '02',
    name: 'Target Architecture & Alignment',
    subtitle: 'Design the target state before spending capital.',
    description: 'We architect vendor-neutral systems across cloud, data, and applications. Every integration is mapped with security guardrails, data contracts, and disaster recovery specifications.',
    icon: <GitMerge className="w-6 h-6 text-[#D22931]" />,
    deliverables: ['Production System Blueprints', 'Security & Compliance Threat Model', 'Milestone-Based Execution Roadmap'],
    takeaway: 'Board and executive alignment on budget, scope, and technical direction.',
  },
  {
    step: '03',
    name: 'Hands-On Engineering Delivery',
    subtitle: 'Senior practitioners embedded in production.',
    description: 'Our senior engineers write and deploy code alongside your team. We modernize legacy codebases, integrate ERP and CRM pipelines, ship governed AI agents, and secure endpoints with zero downtime.',
    icon: <Rocket className="w-6 h-6 text-[#D22931]" />,
    deliverables: ['Sprint-Based Production Releases', 'Automated CI/CD & IaC Pipelines', 'Live Data Sync & Migration Validation'],
    takeaway: 'Working systems deployed to production on time and within scope.',
  },
  {
    step: '04',
    name: 'Operational Handover & Scale',
    subtitle: 'Zero handoff loss. Your team owns the outcome.',
    description: 'We don’t create permanent dependencies. We train your engineers, document operational runbooks, configure telemetry alerts, and stay accountable until your team operates with complete independence.',
    icon: <Award className="w-6 h-6 text-[#D22931]" />,
    deliverables: ['Comprehensive Engineering Runbooks', 'Observability & PagerDuty Setup', '30-Day Post-Launch Hypercare'],
    takeaway: 'Self-sufficient internal teams with resilient operational infrastructure.',
  },
];

export const MethodologyShowcase: React.FC = () => {
  const [[activeStep, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const containerRef = useRef<HTMLElement | null>(null);

  const goToStep = useCallback((newStep: number) => {
    setPage(([curr]) => [newStep, newStep > curr ? 1 : -1]);
  }, []);

  const nextStep = useCallback(() => {
    setPage(([curr]) => [(curr + 1) % STEPS.length, 1]);
  }, []);

  const prevStep = useCallback(() => {
    setPage(([curr]) => [(curr - 1 + STEPS.length) % STEPS.length, -1]);
  }, []);

  // Auto-advance presentation timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      nextStep();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, nextStep]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.querySelectorAll('.methodology-header-anim'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: container,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const current = STEPS[activeStep];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      filter: 'blur(4px)',
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="methodology"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      className="py-14 sm:py-18 bg-[#EBF2F7] border-t border-[#DCE4EC] relative overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Header with Slide Control Toggles */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            <div className="methodology-header-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D22931]/10 text-[#D22931] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D22931] animate-ping" />
              How We Work &middot; Delivery Methodology
            </div>
            <h2 className="methodology-header-anim font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#020626] tracking-tight leading-tight">
              Accountable delivery from <span className="text-[#D22931]">diagnosis to go-live</span>.
            </h2>
            <p className="methodology-header-anim text-base sm:text-lg text-[#556070] mt-4 leading-relaxed">
              Our senior partners stay on the work. We combine strategic decision-making with hands-on systems engineering, ensuring zero handoff loss throughout the engagement lifecycle.
            </p>
          </div>

          {/* Interactive Slide Controls */}
          <div className="flex items-center gap-3 self-start md:self-end flex-shrink-0 bg-white p-2 rounded-2xl border border-[#DCE4EC] shadow-2xs">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl hover:bg-[#EBF2F7] text-[#020626] transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
              title={isPlaying ? 'Pause Auto-Slide' : 'Start Auto-Slide'}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-[#D22931]" /> : <Play className="w-4 h-4 text-[#020626]" />}
            </button>
            <div className="h-4 w-[1px] bg-[#DCE4EC]" />
            <button
              onClick={prevStep}
              className="p-2.5 rounded-xl hover:bg-[#EBF2F7] text-[#020626] transition-colors cursor-pointer"
              aria-label="Previous Phase Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs font-bold text-[#020626] px-2">
              0{activeStep + 1} <span className="text-[#556070]">/ 04</span>
            </span>
            <button
              onClick={nextStep}
              className="p-2.5 rounded-xl hover:bg-[#EBF2F7] text-[#020626] transition-colors cursor-pointer"
              aria-label="Next Phase Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Laser Circuit Bar */}
        <div className="max-w-4xl mx-auto mb-6">
          <LaserCircuit
            activeStep={activeStep}
            totalSteps={STEPS.length}
            onSelectStep={(idx) => goToStep(idx)}
          />
        </div>

        {/* 4-Phase Interactive Tabs & Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Step Selector List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5 h-full">
            {STEPS.map((step, idx) => {
              const isSelected = idx === activeStep;
              return (
                <button
                  key={step.step}
                  onClick={() => goToStep(idx)}
                  onMouseEnter={() => goToStep(idx)}
                  className={`relative w-full flex-1 p-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 cursor-pointer border overflow-hidden ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-xl ring-2 ring-[#D22931]/15 -translate-y-1'
                      : 'bg-white/70 hover:bg-white border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs hover:shadow-md'
                  }`}
                >
                  {/* Active Progress Bar for Auto-Slide */}
                  {isSelected && isPlaying && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 6, ease: 'linear' }}
                      style={{ transformOrigin: 'left' }}
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D22931] to-[#FAC344]"
                    />
                  )}

                  <span
                    className={`font-mono font-bold text-sm px-3 py-1.5 rounded-xl flex-shrink-0 transition-all ${
                      isSelected
                        ? 'bg-[#D22931] text-white shadow-xs scale-105'
                        : 'bg-[#DCE4EC] text-[#556070]'
                    }`}
                  >
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#020626] leading-tight">
                      {step.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#556070] mt-1 leading-snug">
                      {step.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Showcase Card with Dynamic Border Beam (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE4EC] shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[460px]">
            <BorderBeam size={260} duration={8} colorFrom="#D22931" colorTo="#FAC344" />

            {/* Soft Ambient Glow Inside Showcase */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D22931]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10 space-y-6 flex flex-col justify-between h-full"
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    initial={{ rotate: -15, scale: 0.9 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="p-3.5 rounded-2xl bg-[#D22931]/10 text-[#D22931] shadow-2xs"
                  >
                    {current.icon}
                  </motion.div>
                  <span className="font-mono text-xs font-bold text-[#D22931] bg-[#D22931]/10 px-3.5 py-1 rounded-full uppercase tracking-wider border border-[#D22931]/20 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#D22931]" />
                    Phase {current.step} of 04
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#020626]">
                    {current.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#D22931] mt-1">
                    {current.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#556070] leading-relaxed">
                  {current.description}
                </p>

                {/* Deliverables Grid with Staggered Cascading Pop */}
                <div className="pt-4 border-t border-[#DCE4EC] space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#020626]">
                    Key Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {current.deliverables.map((item, dIdx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: dIdx * 0.08 + 0.1, duration: 0.35, ease: 'easeOut' }}
                        className="flex items-center gap-2 text-xs text-[#020626] font-medium bg-[#EBF2F7] p-2.5 rounded-xl border border-[#DCE4EC] hover:border-[#D22931]/40 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* What You Get / Takeaway Box */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="p-4 rounded-2xl bg-[#020626] text-white flex items-start gap-3 shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FAC344] mt-0.5 flex-shrink-0">
                    Result:
                  </span>
                  <p className="text-xs sm:text-sm text-white/90 leading-snug font-medium">
                    {current.takeaway}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
