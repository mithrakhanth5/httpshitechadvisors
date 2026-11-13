import React, { useEffect, useRef, useState } from 'react';
import {
  Bot,
  Cloud,
  Shield,
  Database,
  LayoutGrid,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { animateMaskedLines } from '../../lib/gsap';
import { useStickyStackDeck } from '../../lib/useStickyStackDeck';
import { BorderBeam } from '../ui/BorderBeam';

interface ServicesGridProps {
  onSelectDiscipline: (key: string) => void;
}

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  solutionArea: string;
  focusArea: string;
  description: string;
  deliverablesHeader: string;
  deliverables: string[];
  ctaText: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: 'ai',
    icon: <Bot className="w-5 h-5 text-[#D22931]" />,
    title: 'AI Adoption & Agents',
    solutionArea: 'Solution Practice 01',
    focusArea: 'Production AI & Agents',
    description:
      'Move AI from experimental proofs-of-concept into production — agents and automation that execute real work safely under enterprise governance.',
    deliverablesHeader: 'Key Solution Capabilities',
    deliverables: [
      'AI Strategy & Readiness Assessment',
      'Autonomous Agents & Workflow Automation',
      'Enterprise AI Governance & Safety Guardrails',
      'Production Retrieval & Knowledge Pipelines',
    ],
    ctaText: 'Explore AI Solutions',
  },
  {
    id: 'data',
    icon: <Database className="w-5 h-5 text-[#D22931]" />,
    title: 'Data & Customer Intelligence',
    solutionArea: 'Solution Practice 02',
    focusArea: 'Unified Data Architecture',
    description:
      'Bring your fragmented enterprise data together into one trusted view of customers and operations, ready for executive decisions and production AI.',
    deliverablesHeader: 'Key Solution Capabilities',
    deliverables: [
      'Unified Customer Data Platforms (CDP)',
      'Enterprise Data Foundations & Lakehouse',
      'Data Quality, Governance & Security',
      'Actionable Analytics & Executive Reporting',
    ],
    ctaText: 'Explore Data Solutions',
  },
  {
    id: 'crm-erp',
    icon: <LayoutGrid className="w-5 h-5 text-[#D22931]" />,
    title: 'CRM, ERP & Business Applications',
    solutionArea: 'Solution Practice 03',
    focusArea: 'Business Systems Integration',
    description:
      'Choose, implement and connect the mission-critical systems that run your operations, with rigorous change enablement so your teams actually use them.',
    deliverablesHeader: 'Key Solution Capabilities',
    deliverables: [
      'Platform Evaluation & Unbiased Selection',
      'CRM & ERP Implementation & Optimization',
      'Cross-Platform Workflow & Automation',
      'User Adoption & Change Enablement',
    ],
    ctaText: 'Explore Systems Solutions',
  },
  {
    id: 'cybersecurity',
    icon: <Shield className="w-5 h-5 text-[#D22931]" />,
    title: 'Cybersecurity & Risk',
    solutionArea: 'Solution Practice 04',
    focusArea: 'Exposure Remediation & Governance',
    description:
      'Find your real security exposure across cloud and hybrid environments, prioritize what matters most, and demonstrate board-level control.',
    deliverablesHeader: 'Key Solution Capabilities',
    deliverables: [
      'Security Exposure & Vulnerability Audit',
      'Risk-Prioritized Remediation Roadmaps',
      'Regulatory & Governance Architecture',
      'Continuous Security Program Design',
    ],
    ctaText: 'Explore Security Solutions',
  },
  {
    id: 'it-operations',
    icon: <Cloud className="w-5 h-5 text-[#D22931]" />,
    title: 'IT Operations & Cloud',
    solutionArea: 'Solution Practice 05',
    focusArea: 'Resilient Cloud Infrastructure',
    description:
      'Run resilient IT infrastructure from the internal service desk to multi-cloud architectures with optimized unit economics and dependable uptime.',
    deliverablesHeader: 'Key Solution Capabilities',
    deliverables: [
      'IT Service Management (ITSM) Workflows',
      'Multi-Cloud Architecture & Unit Economics',
      'Automated Infrastructure & CI/CD Pipelines',
      'Operational Resilience & Observability',
    ],
    ctaText: 'Explore Cloud Solutions',
  },
];

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectDiscipline }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const desktopHeaderRef = useRef<HTMLDivElement | null>(null);
  const mobileHeadingRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const shadeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  useEffect(() => {
    const cleanHeading = animateMaskedLines(headingRef.current, {
      trigger: sectionRef.current,
      start: 'top 84%',
      duration: 0.85,
      stagger: 0.1,
    });
    return () => cleanHeading();
  }, []);

  useStickyStackDeck(
    {
      sectionRef,
      desktopHeaderRef,
      mobileHeadingRef,
      sentinelRefs,
      slotRefs,
      cardRefs,
      shadeRefs,
    },
    SERVICES.length,
    {
      desktopOffsetStep: 10,
      mobileOffsetStep: 8,
      desktopScaleStep: 0.028,
      mobileScaleStep: 0.024,
      desktopShadeStep: 0.06,
      mobileShadeStep: 0.05,
      onActiveIndexChange: setCurrentIdx,
    }
  );

  const scrollToPractice = (idx: number) => {
    const sentinel = sentinelRefs.current[idx] ?? slotRefs.current[idx];
    if (!sentinel) return;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const headerEl = isDesktop ? desktopHeaderRef.current : mobileHeadingRef.current;
    const stickyTop = isDesktop ? 72 : 60;
    const offsetStep = isDesktop ? 10 : 8;
    const gap = isDesktop ? 12 : 8;
    const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 170;
    const dockTop = Math.round(stickyTop + headerHeight + gap + idx * offsetStep);
    const sentinelDocTop = sentinel.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: Math.max(0, sentinelDocTop - dockTop + 6),
      behavior: 'smooth',
    });
    setCurrentIdx(idx);
  };

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="py-12 sm:py-16 bg-white relative"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Sticky Header & Practice Filter Bar: z-30 stays strictly above rising cards */}
        <div
          ref={desktopHeaderRef}
          className="contents md:block md:sticky md:top-[72px] md:z-30 md:bg-white md:pt-2 md:pb-4 md:after:pointer-events-none md:after:block md:after:absolute md:after:inset-x-0 md:after:top-full md:after:h-4 md:after:bg-gradient-to-b md:after:from-white md:after:to-transparent"
        >
          <div
            ref={mobileHeadingRef}
            className="sticky top-[60px] z-30 bg-white pt-1.5 pb-2.5 md:static md:bg-transparent md:p-0 after:pointer-events-none after:block md:after:hidden after:absolute after:inset-x-0 after:top-full after:h-3 after:bg-gradient-to-b after:from-white after:to-transparent"
          >
            <h2
              ref={headingRef}
              className="font-display font-extrabold text-[clamp(1.75rem,4vw,3rem)] text-[#020626] leading-tight tracking-tight"
            >
              Core Solution <span className="text-[#D22931]">Practices.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#556070] mt-1.5 leading-relaxed max-w-3xl">
            Scroll through each stacked practice card or select a pillar below to jump directly to its deliverables and ecosystem.
          </p>

          <div className="flex items-center gap-2 sm:gap-2.5 mt-4 flex-wrap">
            {SERVICES.map((s, idx) => {
              const isSelected = idx === currentIdx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToPractice(idx)}
                  className={`sym-btn px-3.5 py-2 rounded-full text-xs font-sans font-semibold flex items-center gap-2 border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#020626] text-white shadow-md border-[#020626]'
                      : 'bg-white hover:bg-[#F8FAFC] text-[#556070] border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                      isSelected
                        ? 'bg-[#D22931] shadow-[0_0_8px_#D22931] scale-125'
                        : 'bg-[#DCE4EC] scale-90'
                    }`}
                  />
                  <span>{s.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky Stacking Solution Practice Deck: isolated in z-10 beneath z-30 header */}
        <div
          className="relative z-10 mt-5 md:mt-6"
          style={{ ['--cards' as string]: SERVICES.length }}
        >
          {SERVICES.map((service, idx) => {
            const isLast = idx === SERVICES.length - 1;
            const isActive = idx === currentIdx;
            const indexLabel = `0${idx + 1}`;

            return (
              <React.Fragment key={service.id}>
                {/* Non-sticky flow sentinel keeps ScrollTrigger scrub & pill jump offsets exact */}
                <div
                  ref={(el) => {
                    sentinelRefs.current[idx] = el;
                  }}
                  aria-hidden="true"
                  className="h-0 w-full pointer-events-none"
                />
                <div
                  ref={(el) => {
                    slotRefs.current[idx] = el;
                  }}
                  style={{ zIndex: idx + 1 }}
                  className="sticky will-change-transform"
                >
                  <article
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    className="relative rounded-2xl md:rounded-[28px] p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#020626] to-[#0a1133] text-white border border-white/15 shadow-2xl overflow-hidden will-change-transform"
                  >
                    {/* Receding dark veil when newer cards dock on top */}
                    <div
                      ref={(el) => {
                        shadeRefs.current[idx] = el;
                      }}
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[#010314] opacity-0 z-20"
                    />

                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-48 bg-[#D22931]/20 blur-[90px] rounded-full pointer-events-none" />
                    {isActive && (
                      <BorderBeam size={260} duration={10} colorFrom="#D22931" colorTo="#FAC344" />
                    )}

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                      {/* Left Column */}
                      <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                        <div className="flex flex-wrap items-center gap-2.5 text-[11px] sm:text-xs font-mono">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/10 border border-white/15 text-white font-bold">
                            {indexLabel}
                          </span>
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/10 border border-white/15">
                            {service.icon}
                          </span>
                          <span className="font-bold uppercase tracking-wider text-[#FAC344]">
                            {service.solutionArea}
                          </span>
                          <span className="text-white/30">&middot;</span>
                          <span className="text-white/65">{service.focusArea}</span>
                        </div>

                        <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight leading-snug">
                          {service.title}
                        </h3>

                        <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed max-w-2xl">
                          {service.description}
                        </p>
                      </div>

                      {/* Right Column: Solution Capabilities */}
                      <div className="lg:col-span-5 bg-white/5 p-5 sm:p-7 rounded-2xl border border-white/10 space-y-4 sm:space-y-5 shadow-inner backdrop-blur-sm">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#FAC344]">
                          {service.deliverablesHeader}
                        </div>

                        <div className="space-y-2.5 sm:space-y-3">
                          {service.deliverables.map((del) => (
                            <div
                              key={del}
                              className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-white/90"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#D22931] mt-0.5 flex-shrink-0" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
                          <span className="font-semibold text-[#FAC344]">
                            Platform-Neutral Recommendation
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectDiscipline(service.id);
                            }}
                            className="sym-link-underline inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-white hover:text-[#FAC344] transition-colors cursor-pointer group"
                          >
                            <span>{service.ctaText}</span>
                            <ArrowRight className="w-4 h-4 text-[#D22931] group-hover:translate-x-1 transition-transform inline-block" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div
                  aria-hidden="true"
                  className={isLast ? 'h-[120px] md:h-[180px]' : 'h-[80px] md:h-[132px]'}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
