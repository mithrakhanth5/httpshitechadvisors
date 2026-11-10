import React, { useEffect, useRef, useState } from 'react';
import { Compass, GitMerge, Rocket, Award, CheckCircle2 } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';

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
    description: 'We interview stakeholders, audit architecture debt, evaluate cloud unit economics, and benchmark security exposure. No 80-page generic decks — just the 3 decisions that actually move the business.',
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
    description: 'We don&rsquo;t create permanent dependencies. We train your engineers, document operational runbooks, configure telemetry alerts, and stay accountable until your team operates with complete independence.',
    icon: <Award className="w-6 h-6 text-[#D22931]" />,
    deliverables: ['Comprehensive Engineering Runbooks', 'Observability & PagerDuty Setup', '30-Day Post-Launch Hypercare'],
    takeaway: 'Self-sufficient internal teams with resilient operational infrastructure.',
  },
];

export const MethodologyShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);
  const imagePanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        container.querySelectorAll('.methodology-header-anim'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Mask reveal for showcase preview panel
      if (imagePanelRef.current) {
        gsap.fromTo(
          imagePanelRef.current,
          { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', opacity: 0 },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imagePanelRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const current = STEPS[activeStep];

  return (
    <section
      ref={containerRef}
      id="methodology"
      className="py-28 bg-[#EBF2F7] border-t border-[#DCE4EC] relative overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="methodology-header-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D22931]/10 text-[#D22931] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
            How We Work &middot; Delivery Methodology
          </div>
          <h2 className="methodology-header-anim font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#020626] tracking-tight leading-tight">
            Accountable delivery from first diagnosis to go-live.
          </h2>
          <p className="methodology-header-anim text-base sm:text-lg text-[#556070] mt-4 leading-relaxed">
            Our senior partners stay on the work. We combine strategic decision-making with hands-on systems engineering, ensuring zero handoff loss throughout the engagement lifecycle.
          </p>
        </div>

        {/* 4-Phase Interactive Tabs & Showcase Layout - Equal Height & Symmetrical Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Step Selector List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5 h-full">
            {STEPS.map((step, idx) => {
              const isSelected = idx === activeStep;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full flex-1 p-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 cursor-pointer border border-[#DCE4EC] hover:border-[#D22931] ${
                    isSelected
                      ? 'bg-white shadow-md'
                      : 'bg-white/70 hover:bg-white shadow-2xs'
                  }`}
                >
                  <span
                    className={`font-mono font-bold text-sm px-3 py-1.5 rounded-xl flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#020626] text-white shadow-xs'
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

          {/* Deep-Dive Showcase Card with Mask Reveal (7 cols) */}
          <div
            ref={imagePanelRef}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE4EC] shadow-xl relative overflow-hidden flex flex-col justify-between h-full"
          >
            {/* Soft Ambient Blob Inside Showcase */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D22931]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div
              key={activeStep}
              className="relative z-10 space-y-6 flex flex-col justify-between h-full animate-smooth-fade-in"
            >
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-[#D22931]/10 text-[#D22931]">
                  {current.icon}
                </div>
                <span className="font-mono text-xs font-bold text-[#D22931] bg-[#D22931]/8 px-3 py-1 rounded-full uppercase tracking-wider">
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

              {/* Deliverables Grid */}
              <div className="pt-4 border-t border-[#DCE4EC] space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#020626]">
                  Key Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#020626] font-medium bg-[#EBF2F7] p-2.5 rounded-xl border border-[#DCE4EC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Get / Takeaway Box */}
              <div className="p-4 rounded-2xl bg-[#020626] text-white flex items-start gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FAC344] mt-0.5">
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
