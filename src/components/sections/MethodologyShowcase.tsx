import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Compass,
  GitMerge,
  Rocket,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { gsap, SYM_EASE, animateMaskedLines } from '../../lib/gsap';
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
    name: 'Discover',
    subtitle: 'We learn the business problem, not just the technical request.',
    description:
      'We listen first. We learn the business problem, the stakeholders involved, the systems in place, and what working success needs to look like in practice.',
    icon: <Compass className="w-6 h-6 text-[#D22931]" />,
    deliverables: ['Business Context Framing', 'System & Process Audit', 'Value & Risk Assessment'],
    takeaway: 'A shared understanding of the problem and its true business value.',
  },
  {
    step: '02',
    name: 'Frame',
    subtitle: 'We define the outcome, the options and the right approach.',
    description:
      'We evaluate options on merit, budget, and scale without vendor bias. We align architecture, roadmap milestones, and team structure before building.',
    icon: <GitMerge className="w-6 h-6 text-[#D22931]" />,
    deliverables: ['Platform & Architecture Recommendations', 'Scope & Budget Options', 'Milestone Execution Plan'],
    takeaway: 'Clear decisions, agreed scope, and a roadmap you can stand behind.',
  },
  {
    step: '03',
    name: 'Deliver',
    subtitle: 'We build, implement and integrate, with the right team for the work.',
    description:
      'We assemble the right combination of consultants and specialists to deliver the solution — whether as advisors, embedded experts, or complete delivery teams.',
    icon: <Rocket className="w-6 h-6 text-[#D22931]" />,
    deliverables: ['Production Systems Implementation', 'End-to-End Integrations', 'Rigorous Quality Engineering'],
    takeaway: 'Working software, connected data, and systems in production.',
  },
  {
    step: '04',
    name: 'Optimize',
    subtitle: 'We drive adoption, measure the result and improve it.',
    description:
      'We ensure user adoption, verify outcomes against business benchmarks, and enable your internal team so the results endure long after go-live.',
    icon: <Award className="w-6 h-6 text-[#D22931]" />,
    deliverables: ['User Adoption & Training', 'Outcome Verification', 'Team Enablement & Handover'],
    takeaway: 'Measurable client outcomes and internal independence.',
  },
];

export const MethodologyShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goToStep = useCallback((newStep: number) => {
    setActiveStep(newStep);
  }, []);

  const nextStep = useCallback(() => {
    setActiveStep((curr) => (curr + 1) % STEPS.length);
  }, []);

  const prevStep = useCallback(() => {
    setActiveStep((curr) => (curr - 1 + STEPS.length) % STEPS.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextStep();
      else prevStep();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const cleanHeading = animateMaskedLines(headingRef.current, {
      trigger: containerRef.current,
      start: 'top 84%',
      duration: 0.85,
      stagger: 0.1,
    });
    return () => cleanHeading();
  }, []);

  // Symmetry-trained GSAP transition cleanly on step change
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const stageTitle = container.querySelector('.method-stage-title');
      if (stageTitle) {
        gsap.fromTo(
          stageTitle,
          { yPercent: 106 },
          { yPercent: 0, duration: 0.48, ease: SYM_EASE.snappy }
        );
      }

      const stageBody = container.querySelector('.method-stage-body');
      if (stageBody) {
        gsap.fromTo(
          stageBody,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.44, delay: 0.05, ease: SYM_EASE.snappy }
        );
      }

      const chips = container.querySelectorAll('.method-deliverable-chip');
      if (chips.length > 0) {
        gsap.fromTo(
          chips,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.42,
            stagger: 0.05,
            ease: SYM_EASE.snappy,
          }
        );
      }

      const progressBar = container.querySelector('.method-step-progress');
      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: (activeStep + 1) / STEPS.length,
          duration: 0.52,
          ease: SYM_EASE.snappy,
        });
      }
    }, container);

    return () => ctx.revert();
  }, [activeStep]);

  const current = STEPS[activeStep];

  return (
    <section
      ref={containerRef}
      id="methodology"
      className="py-14 sm:py-18 bg-[#EBF2F7] border-t border-[#DCE4EC] relative overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Header with Manual Phase Controls (Play button remains removed) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <h2
              ref={headingRef}
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#020626] tracking-tight leading-tight"
            >
              How an engagement <span className="text-[#D22931]">works.</span>
            </h2>
            <p className="text-sm sm:text-lg text-[#556070] mt-3 leading-relaxed">
              From problem framing through delivery and ongoing optimization — one accountable team from end to end.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 self-start md:self-end flex-shrink-0 bg-white p-2 rounded-2xl border border-[#DCE4EC] shadow-2xs">
            <button
              type="button"
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
              type="button"
              onClick={nextStep}
              className="p-2.5 rounded-xl hover:bg-[#EBF2F7] text-[#020626] transition-colors cursor-pointer"
              aria-label="Next Phase Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Laser Circuit Bar (Desktop) */}
        <div className="hidden sm:block max-w-4xl mx-auto mb-6">
          <LaserCircuit
            activeStep={activeStep}
            totalSteps={STEPS.length}
            onSelectStep={(idx) => goToStep(idx)}
          />
        </div>

        {/* MOBILE: Compact 2x2 Phase Selector Grid (No sideways scroll clutter on 390px) */}
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#556070]">
              Phase 0{activeStep + 1} of 04
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevStep}
                className="p-1.5 rounded-lg bg-white border border-[#DCE4EC] hover:border-[#D22931]/40 text-[#020626] transition-colors cursor-pointer"
                aria-label="Previous Phase"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="p-1.5 rounded-lg bg-white border border-[#DCE4EC] hover:border-[#D22931]/40 text-[#020626] transition-colors cursor-pointer"
                aria-label="Next Phase"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {STEPS.map((step, idx) => {
              const isSelected = idx === activeStep;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => goToStep(idx)}
                  className={`p-2.5 rounded-xl text-left transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#020626] text-white border-[#020626] shadow-md'
                      : 'bg-white text-[#556070] border-[#DCE4EC] hover:border-[#D22931]/40'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-md font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-[#D22931] text-white' : 'bg-[#EBF2F7] text-[#556070]'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold leading-tight line-clamp-1">
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Phase Interactive Tabs (Desktop Left) & Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between gap-3.5 h-full">
            {STEPS.map((step, idx) => {
              const isSelected = idx === activeStep;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => goToStep(idx)}
                  onMouseEnter={() => goToStep(idx)}
                  className={`relative w-full flex-1 p-5 rounded-2xl text-left transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-4 cursor-pointer border overflow-hidden ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-xl -translate-y-0.5'
                      : 'bg-white/75 hover:bg-white border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs hover:shadow-md'
                  }`}
                >
                  <span
                    className={`font-mono font-bold text-sm px-3 py-1.5 rounded-xl flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
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

          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-[#DCE4EC] shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-0 lg:min-h-[450px]"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#EBF2F7]">
              <div
                className="method-step-progress h-full bg-gradient-to-r from-[#D22931] to-[#FAC344] origin-left"
                style={{ transform: `scaleX(${(activeStep + 1) / STEPS.length})` }}
              />
            </div>
            <BorderBeam size={260} duration={8} colorFrom="#D22931" colorTo="#FAC344" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D22931]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div
              key={activeStep}
              className="relative z-10 space-y-4 sm:space-y-6 flex flex-col justify-between h-full"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#D22931]/10 text-[#D22931] shadow-2xs">
                  {current.icon}
                </div>
                <span className="font-mono text-xs font-bold text-[#D22931] uppercase tracking-widest">
                  Phase {current.step} &mdash; 04
                </span>
              </div>

              <div>
                <div className="overflow-hidden pb-[0.22em] -mb-[0.22em]">
                  <h3 className="method-stage-title font-display font-extrabold text-xl sm:text-3xl text-[#020626] will-change-transform">
                    {current.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#D22931] mt-1">
                  {current.subtitle}
                </p>
              </div>

              <p className="method-stage-body text-xs sm:text-base text-[#556070] leading-relaxed">
                {current.description}
              </p>

              <div className="pt-3 sm:pt-4 border-t border-[#DCE4EC] space-y-2.5">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#020626]">
                  Key Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.deliverables.map((item) => (
                    <div
                      key={item}
                      className="method-deliverable-chip flex items-center gap-2 text-xs text-[#020626] font-medium bg-[#EBF2F7] p-2.5 rounded-xl border border-[#DCE4EC] hover:border-[#D22931]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#020626] text-white flex items-start gap-2.5 sm:gap-3 shadow-md">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FAC344] mt-0.5 flex-shrink-0">
                  Result:
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-snug font-medium">
                  {current.takeaway}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
