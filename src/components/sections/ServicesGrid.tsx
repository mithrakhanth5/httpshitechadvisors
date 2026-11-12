import React, { useEffect, useRef, useState } from 'react';
import {
  Bot,
  Cloud,
  Shield,
  Database,
  LayoutGrid,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Plus,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, animateMaskedLines } from '../../lib/gsap';
import { BorderBeam } from '../ui/BorderBeam';

interface ServicesGridProps {
  onSelectDiscipline: (key: string) => void;
}

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  tag: string;
  badge: string;
  description: string;
  deliverablesHeader: string;
  deliverables: string[];
  tools: string[];
  leftFooter: string;
  ctaText: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: 'ai',
    icon: <Bot className="w-5 h-5 text-[#D22931]" />,
    title: 'AI Adoption & Governed Agents',
    tag: 'Flagship Practice',
    badge: 'High Demand Practice',
    description:
      'Move AI from experimental proofs-of-concept into high-throughput production with autonomous agents and multi-step workflows that execute real work safely under enterprise governance.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'AI Strategy & Readiness Assessment',
      'AI Agents & Multi-Step Workflows',
      'Enterprise AI Governance & Safety Guardrails',
      'Fine-Tuned Retrieval & Vector Workflows',
    ],
    tools: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'LangChain'],
    leftFooter: 'Senior Pod Delivery',
    ctaText: 'Discuss Practice',
  },
  {
    id: 'data',
    icon: <Database className="w-5 h-5 text-[#D22931]" />,
    title: 'Data & Customer Intelligence',
    tag: 'Modern Foundations',
    badge: 'High-Throughput Pipelines',
    description:
      'Bring your fragmented enterprise data together into one trusted view of customers and operations, ready for executive decisions and production AI.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Unified Customer Profiles & CDPs',
      'Reliable Multi-Source Data Pipelines',
      'AI-Ready Data Quality & Governance',
      'Lakehouse Architecture & Query Optimization',
    ],
    tools: ['Snowflake', 'Databricks', 'BigQuery', 'Microsoft Fabric'],
    leftFooter: 'Zero Data Drift',
    ctaText: 'Discuss Practice',
  },
  {
    id: 'crm-erp',
    icon: <LayoutGrid className="w-5 h-5 text-[#D22931]" />,
    title: 'CRM, ERP & Business Applications',
    tag: 'Core Enterprise Systems',
    badge: 'Mission-Critical Operations',
    description:
      'Choose, implement and connect the mission-critical business systems that run your operations, with rigorous change enablement so your team actually adopts them.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Platform Strategy & Unbiased Selection',
      'CRM/ERP Implementation & Optimization',
      'Cross-Platform Workflow & Process Automation',
      'Enterprise Change Enablement & Training',
    ],
    tools: ['Salesforce', 'NetSuite', 'Microsoft Dynamics', 'HubSpot'],
    leftFooter: 'Proven User Adoption',
    ctaText: 'Discuss Practice',
  },
  {
    id: 'cybersecurity',
    icon: <Shield className="w-5 h-5 text-[#D22931]" />,
    title: 'Cybersecurity & Risk',
    tag: 'Defense & Compliance',
    badge: 'Zero-Trust Readiness',
    description:
      'Find your real security exposure across cloud endpoints, remediate the vulnerability backlog that matters most, and demonstrate board-level readiness.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Security Posture & Exposure Review',
      'Vulnerability Backlog Remediation',
      'SOC 2 Type II & HIPAA Readiness',
      'Continuous Threat Surface Monitoring',
    ],
    tools: ['CrowdStrike', 'Microsoft Defender', 'Wiz', 'Splunk'],
    leftFooter: '60% Faster Remediation',
    ctaText: 'Discuss Practice',
  },
  {
    id: 'it-operations',
    icon: <Cloud className="w-5 h-5 text-[#D22931]" />,
    title: 'IT Operations & Cloud',
    tag: 'Infrastructure & Scale',
    badge: '99.99% Availability',
    description:
      'Run resilient IT infrastructure from the internal service desk to multi-cloud architectures with optimized unit economics and zero critical downtime.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'IT Service Management (ITSM) Workflow Design',
      'Multi-Cloud Architecture & Unit Cost Optimization',
      'Automated CI/CD & Infrastructure as Code',
      '24/7 Resilient Operations & Observability',
    ],
    tools: ['ServiceNow', 'AWS', 'Microsoft Azure', 'Google Cloud'],
    leftFooter: 'Production Reliability',
    ctaText: 'Discuss Practice',
  },
];

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectDiscipline }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const currentService = SERVICES[currentIdx];

  useEffect(() => {
    const cleanHeading = animateMaskedLines(headingRef.current, {
      trigger: sectionRef.current,
      start: 'top 84%',
      duration: 0.85,
      stagger: 0.1,
    });
    return () => cleanHeading();
  }, []);

  // Re-trigger staggered deliverable items when desktop practice swaps
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rows = section.querySelectorAll('.service-deliverable-row');
    if (rows.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rows,
        { opacity: 0, x: 10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.42,
          stagger: 0.05,
          ease: 'power3.out',
        }
      );
    }, section);

    return () => ctx.revert();
  }, [currentIdx]);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="py-14 sm:py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2
            ref={headingRef}
            className="font-display font-extrabold text-[clamp(1.85rem,4.5vw,3.5rem)] text-[#020626] leading-tight tracking-tight"
          >
            Core Solution <span className="text-[#D22931]">Practices.</span>
          </h2>
          <p className="text-sm sm:text-lg text-[#556070] mt-3 leading-relaxed">
            Select a practice below to inspect deliverables and supported platforms.
          </p>
        </div>

        {/* MOBILE: Compact Vertical Symmetry Accordion (< lg) */}
        <div className="lg:hidden space-y-3">
          {SERVICES.map((service, idx) => {
            const isOpen = idx === currentIdx;
            return (
              <div
                key={service.id}
                className={`rounded-2xl border transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                  isOpen
                    ? 'bg-[#F8FAFC] border-[#D22931] shadow-lg'
                    : 'bg-white border-[#DCE4EC] hover:border-[#D22931]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                        isOpen
                          ? 'bg-white border-[#D22931]/30'
                          : 'bg-[#EBF2F7] border-[#DCE4EC]'
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[#D22931]">
                        {service.tag}
                      </span>
                      <h3 className="font-display font-bold text-base text-[#020626] leading-tight truncate">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <Plus
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'rotate-45 text-[#D22931]' : 'text-[#556070]'
                    }`}
                  />
                </button>

                <div className="sym-accordion-panel" data-open={isOpen ? 'true' : 'false'}>
                  <div className="sym-accordion-inner">
                    <div className="px-4 pb-4">
                      <div className="rounded-xl bg-[#020626] text-white p-4 space-y-3.5 border border-white/10">
                        <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-2 pt-2.5 border-t border-white/10">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#FAC344]">
                            {service.deliverablesHeader}
                          </div>
                          {service.deliverables.map((del) => (
                            <div
                              key={del}
                              className="flex items-start gap-2 text-xs text-white/90"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] mt-0.5 flex-shrink-0" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {service.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2.5 py-0.5 rounded-md bg-white/10 text-white/90 text-[11px] border border-white/10"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => onSelectDiscipline(service.id)}
                          className="sym-btn w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#D22931] hover:bg-[#b52027] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                        >
                          <span>{service.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP: Interactive Practice Tabs + Crisp Stage Showcase (>= lg) */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            {SERVICES.map((s, idx) => {
              const isSelected = idx === currentIdx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  onMouseEnter={() => setCurrentIdx(idx)}
                  className={`sym-btn px-4 py-2.5 rounded-2xl text-xs font-sans font-semibold flex items-center gap-2 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#020626] text-white shadow-lg border-white/20'
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

          <div className="relative rounded-[32px] p-10 lg:p-12 bg-gradient-to-br from-[#020626] to-[#0a1133] text-white border border-white/15 shadow-2xl overflow-hidden min-h-[430px] flex flex-col justify-between">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-48 bg-[#D22931]/20 blur-[90px] rounded-full pointer-events-none" />
            <BorderBeam size={280} duration={10} colorFrom="#D22931" colorTo="#FAC344" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 grid grid-cols-12 gap-12 items-center h-full my-auto"
              >
                {/* Left Column */}
                <div className="col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D22931]/20 text-[#FAC344] text-xs font-semibold uppercase tracking-wider border border-[#D22931]/30">
                      <Sparkles className="w-3.5 h-3.5 text-[#FAC344]" />
                      {currentService.tag}
                    </span>
                    <span className="text-xs text-white/60">{currentService.badge}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight leading-snug">
                    {currentService.title}
                  </h3>

                  <p className="text-base text-white/80 leading-relaxed max-w-2xl">
                    {currentService.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-white/50 mr-2">Ecosystem:</span>
                    {currentService.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-span-5 bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6 shadow-inner backdrop-blur-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#FAC344]">
                    {currentService.deliverablesHeader}
                  </div>

                  <div className="space-y-3.5">
                    {currentService.deliverables.map((del) => (
                      <div
                        key={del}
                        className="service-deliverable-row flex items-start gap-2.5 text-sm font-medium text-white/90"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D22931] mt-0.5 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#FAC344]">
                      {currentService.leftFooter}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDiscipline(currentService.id);
                      }}
                      className="sym-link-underline inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#FAC344] hover:text-white transition-colors cursor-pointer group"
                    >
                      <span>{currentService.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#FAC344] group-hover:translate-x-1 transition-transform inline-block" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
