import React, { useEffect, useRef, useState } from 'react';
import {
  Compass,
  Code2,
  TrendingUp,
  Users2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { gsap, ScrollTrigger, SYM_EASE, animateMaskedLines } from '../../lib/gsap';

interface CapabilitiesSectionProps {
  onSelectCapability: (helpArea: string) => void;
}

interface CapabilityCard {
  id: string;
  icon: React.ReactNode;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  deliveryModel: string;
  ctaText: string;
  helpArea: string;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    id: 'strategy',
    icon: <Compass className="w-5 h-5 text-[#D22931]" />,
    number: '01',
    title: 'Strategy & Advisory',
    shortTitle: 'Strategy & Advisory',
    description:
      'Vendor-neutral technology roadmaps and architecture due diligence aligning board priorities with engineering reality.',
    deliverables: [
      'Target Architecture & Cloud Roadmaps',
      'M&A & Platform Due Diligence',
      'Cost Governance & Infrastructure Economics',
    ],
    tools: ['AWS', 'Azure', 'Google Cloud', 'Databricks', 'Snowflake'],
    deliveryModel: 'Senior Partner & Principal Pod',
    ctaText: 'Discuss Strategy',
    helpArea: 'strategy',
  },
  {
    id: 'product-engineering',
    icon: <Code2 className="w-5 h-5 text-[#D22931]" />,
    number: '02',
    title: 'Product & Engineering',
    shortTitle: 'Product & Engineering',
    description:
      'Cloud-native software engineering, legacy modernization, and automated delivery pipelines built for production reliability.',
    deliverables: [
      'Cloud-Native Architecture & APIs',
      'Legacy Modernization & Refactoring',
      'Automated CI/CD & Quality Engineering',
    ],
    tools: ['TypeScript', 'React', 'Node.js', 'Go', 'Kubernetes'],
    deliveryModel: 'Embedded Senior Engineering Pod',
    ctaText: 'Discuss Engineering',
    helpArea: 'product-engineering',
  },
  {
    id: 'growth',
    icon: <TrendingUp className="w-5 h-5 text-[#D22931]" />,
    number: '03',
    title: 'Growth & Go-to-Market',
    shortTitle: 'Growth & Go-to-Market',
    description:
      'Unified revenue operations, customer telemetry, and martech automation engineered for predictable pipeline growth.',
    deliverables: [
      'RevOps Integration & Workflow Automation',
      'Unified Customer Data & Attribution',
      'PLG Telemetry & Conversion Experimentation',
    ],
    tools: ['Salesforce', 'HubSpot', 'Segment', 'Mixpanel', 'BigQuery'],
    deliveryModel: 'RevOps & Analytics Pod',
    ctaText: 'Discuss Growth',
    helpArea: 'growth',
  },
  {
    id: 'talent',
    icon: <Users2 className="w-5 h-5 text-[#D22931]" />,
    number: '04',
    title: 'Talent & Managed Teams',
    shortTitle: 'Talent & Teams',
    description:
      'Fractional technical leaders and principal engineering pods embedded directly with zero handoff loss.',
    deliverables: [
      'Fractional CTO, CPO & VP Engineering',
      'Autonomous Embedded Engineering Pods',
      'Governance, Sprints & Clean Handover',
    ],
    tools: ['Principal Architects', 'Staff Engineers', 'Delivery Leads', 'Agile Pods'],
    deliveryModel: 'Direct Embedded Pod',
    ctaText: 'Discuss Talent',
    helpArea: 'talent',
  },
];

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectCapability }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinStageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const mobileTitleRef = useRef<HTMLHeadingElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const cardStageRef = useRef<HTMLDivElement | null>(null);
  const pinTriggerRef = useRef<ScrollTrigger | null>(null);
  const lastStepRef = useRef<number>(0);

  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cleanupDesktopTitle = animateMaskedLines(titleRef.current, { trigger: section });
    const cleanupMobileTitle = animateMaskedLines(mobileTitleRef.current, { trigger: section });

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const stage = pinStageRef.current;
      if (!stage) return;

      const trigger = ScrollTrigger.create({
        trigger: stage,
        start: 'top 76px',
        end: () => '+=1140',
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: 0.35,
        snap: {
          snapTo: 1 / (CAPABILITIES.length - 1),
          duration: { min: 0.18, max: 0.4 },
          delay: 0.04,
          ease: 'power2.out',
        },
        onUpdate: (self) => {
          if (progressBarRef.current) {
            gsap.set(progressBarRef.current, {
              scaleY: Math.max(0.06, self.progress),
            });
          }
          const next = Math.min(
            CAPABILITIES.length - 1,
            Math.round(self.progress * (CAPABILITIES.length - 1))
          );
          if (next !== lastStepRef.current) {
            lastStepRef.current = next;
            setActiveStep(next);
          }
        },
      });

      pinTriggerRef.current = trigger;

      return () => {
        pinTriggerRef.current = null;
        trigger.kill();
      };
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.cap-mobile-card'),
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section.querySelector('.cap-mobile-list'),
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => {
      cleanupDesktopTitle();
      cleanupMobileTitle();
      mm.revert();
      ctx.revert();
    };
  }, []);

  // Plain fade-and-rise per active scroll step on desktop spotlight card (zero 3D tilt)
  useEffect(() => {
    const card = cardStageRef.current;
    if (!card) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, ease: SYM_EASE.snappy }
      );
      const rows = card.querySelectorAll('.cap-step-deliv');
      if (rows.length > 0) {
        gsap.fromTo(
          rows,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: SYM_EASE.snappy,
          }
        );
      }
    }, card);

    return () => ctx.revert();
  }, [activeStep]);

  const handleStepSelect = (idx: number) => {
    lastStepRef.current = idx;
    setActiveStep(idx);

    const trigger = pinTriggerRef.current;
    if (trigger && typeof window !== 'undefined') {
      const targetY =
        trigger.start + (idx / (CAPABILITIES.length - 1)) * (trigger.end - trigger.start);
      window.scrollTo({ top: Math.round(targetY), behavior: 'smooth' });
    }
  };

  const currentCap = CAPABILITIES[activeStep];

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="bg-white relative overflow-x-clip"
    >
      {/* DESKTOP (>= lg): Pinned Full-Viewport Scroll-Step Sequence */}
      <div
        ref={pinStageRef}
        className="hidden lg:flex items-center min-h-[calc(100vh-5rem)] py-10 max-w-[1300px] mx-auto px-10"
      >
        <div className="grid grid-cols-12 gap-12 items-center w-full">
          {/* Left Sticky Navigation & Step Progress Rail */}
          <div className="col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#D22931] mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="sym-pulse-ring absolute inset-0 rounded-full bg-[#D22931]/65" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D22931]" />
                </span>
                <span>Delivery Engine &middot; 0{activeStep + 1} / 0{CAPABILITIES.length}</span>
              </div>

              <h2
                ref={titleRef}
                className="font-display font-extrabold text-[clamp(2.25rem,3.6vw,3.35rem)] text-[#020626] leading-tight tracking-tight"
              >
                How we <span className="text-[#D22931]">deliver.</span>
              </h2>

              <p className="text-sm xl:text-base text-[#556070] mt-3 leading-relaxed max-w-md">
                Scroll to step through our four delivery pillars—senior pods with platform-neutral architecture and zero handoff loss.
              </p>
            </div>

            {/* 4-Step Vertical Progress Rail */}
            <div className="relative pl-5 space-y-2.5">
              <div className="absolute left-1 top-2 bottom-2 w-[2px] rounded-full bg-[#DCE4EC] overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="w-full h-full bg-[#D22931] origin-top"
                  style={{ transform: `scaleY(${Math.max(0.06, activeStep / (CAPABILITIES.length - 1))})` }}
                />
              </div>

              {CAPABILITIES.map((cap, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => handleStepSelect(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between gap-3 cursor-pointer ${
                      isActive
                        ? 'bg-[#EBF2F7] border-[#D22931] shadow-sm'
                        : 'bg-white border-transparent hover:bg-[#F8FAFC] hover:border-[#DCE4EC]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md transition-colors ${
                          isActive
                            ? 'bg-[#D22931] text-white'
                            : 'bg-[#EBF2F7] text-[#556070]'
                        }`}
                      >
                        {cap.number}
                      </span>
                      <span
                        className={`font-display font-bold text-sm truncate ${
                          isActive ? 'text-[#020626]' : 'text-[#556070]'
                        }`}
                      >
                        {cap.shortTitle}
                      </span>
                    </div>
                    <span
                      className={`text-[11px] font-mono transition-opacity ${
                        isActive ? 'text-[#D22931] opacity-100' : 'opacity-0'
                      }`}
                    >
                      Active
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Viewport Spotlight: Single Compact Capability Card per Step */}
          <div className="col-span-7">
            <div
              ref={cardStageRef}
              key={currentCap.id}
              className="p-8 xl:p-10 rounded-[28px] bg-gradient-to-br from-[#020626] to-[#0a1133] text-white border border-white/15 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[420px]"
            >
              <div className="relative z-10 space-y-5">
                {/* Compact Top Row: Icon + Pillar Index (No Sparkles Pill Badge) */}
                <div className="flex items-center justify-between gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                    {currentCap.icon}
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FAC344]">
                    Pillar {currentCap.number} / 0{CAPABILITIES.length}
                  </span>
                </div>

                {/* Title & Reduced 1-2 Line Description */}
                <div>
                  <h3 className="font-display font-extrabold text-3xl xl:text-4xl text-white leading-tight tracking-tight">
                    {currentCap.title}
                  </h3>
                  <p className="text-sm xl:text-base text-white/80 leading-relaxed mt-3 max-w-2xl">
                    {currentCap.description}
                  </p>
                </div>

                {/* Compact 3-Deliverable List */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  {currentCap.deliverables.map((deliv) => (
                    <div
                      key={deliv}
                      className="cap-step-deliv flex items-center gap-2.5 text-sm text-white/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D22931] flex-shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                {/* Compact Stack Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {currentCap.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-white/10 text-white/85 text-xs font-medium border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 pt-5 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs font-medium text-[#FAC344]">
                  {currentCap.deliveryModel}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectCapability(currentCap.helpArea)}
                  className="group/btn inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#FAC344] transition-colors cursor-pointer"
                >
                  <span className="sym-link-underline">{currentCap.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D22931] transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET (< lg): Compact Vertical Fade-and-Rise Stack */}
      <div className="lg:hidden max-w-[1300px] mx-auto px-6 sm:px-10 py-12">
        <div className="max-w-xl mb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#D22931] mb-2">
            Delivery Engine &middot; Four Capabilities
          </div>
          <h2
            ref={mobileTitleRef}
            className="font-display font-extrabold text-[clamp(1.85rem,6vw,2.75rem)] text-[#020626] leading-tight tracking-tight"
          >
            How we <span className="text-[#D22931]">deliver.</span>
          </h2>
          <p className="text-sm text-[#556070] mt-2.5 leading-relaxed">
            Senior pods, platform-neutral architecture, and zero handoff loss.
          </p>
        </div>

        <div className="cap-mobile-list space-y-4">
          {CAPABILITIES.map((cap) => (
            <div key={cap.id} className="cap-mobile-card">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#020626] to-[#0a1133] text-white border border-white/15 shadow-lg space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    {cap.icon}
                  </div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#FAC344]">
                    Pillar {cap.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-xl text-white leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mt-1.5">
                    {cap.description}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-3 border-t border-white/10">
                  {cap.deliverables.map((deliv) => (
                    <li key={deliv} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-[#FAC344] font-medium truncate">
                    {cap.deliveryModel}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectCapability(cap.helpArea)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white hover:text-[#FAC344] transition-colors flex-shrink-0 cursor-pointer"
                  >
                    <span>{cap.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D22931]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
