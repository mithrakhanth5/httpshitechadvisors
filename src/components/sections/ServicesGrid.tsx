import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Bot, Cloud, Shield, Database, LayoutGrid, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
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
    icon: <Bot className="w-6 h-6 text-[#D22931]" />,
    title: 'AI Adoption & Governed Agents',
    tag: 'Flagship Practice',
    badge: 'High Demand Practice',
    description: 'Move AI from experimental proofs-of-concept into high-throughput production with autonomous agents and multi-step workflows that execute real work safely under enterprise governance.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'AI Strategy & Readiness Assessment',
      'AI Agents & Multi-Step Workflows',
      'Enterprise AI Governance & Safety Guardrails',
      'Fine-Tuned Retrieval & Vector Workflows',
    ],
    tools: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'LangChain'],
    leftFooter: 'Senior Pod Delivery',
    ctaText: 'DISCUSS PRACTICE →',
  },
  {
    id: 'data',
    icon: <Database className="w-6 h-6 text-[#D22931]" />,
    title: 'Data & Customer Intelligence',
    tag: 'Modern Foundations',
    badge: 'High-Throughput Pipelines',
    description: 'Bring your fragmented enterprise data together into one trusted view of customers and operations, ready for executive decisions and production AI.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Unified Customer Profiles & CDPs',
      'Reliable Multi-Source Data Pipelines',
      'AI-Ready Data Quality & Governance',
      'Lakehouse Architecture & Query Optimization',
    ],
    tools: ['Snowflake', 'Databricks', 'BigQuery', 'Microsoft Fabric'],
    leftFooter: 'Zero Data Drift',
    ctaText: 'DISCUSS PRACTICE →',
  },
  {
    id: 'crm-erp',
    icon: <LayoutGrid className="w-6 h-6 text-[#D22931]" />,
    title: 'CRM, ERP & Business Applications',
    tag: 'Core Enterprise Systems',
    badge: 'Mission-Critical Operations',
    description: 'Choose, implement and connect the mission-critical business systems that run your operations, with rigorous change enablement so your team actually adopts them.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Platform Strategy & Unbiased Selection',
      'CRM/ERP Implementation & Optimization',
      'Cross-Platform Workflow & Process Automation',
      'Enterprise Change Enablement & Training',
    ],
    tools: ['Salesforce', 'NetSuite', 'Microsoft Dynamics', 'HubSpot'],
    leftFooter: 'Proven User Adoption',
    ctaText: 'DISCUSS PRACTICE →',
  },
  {
    id: 'cybersecurity',
    icon: <Shield className="w-6 h-6 text-[#D22931]" />,
    title: 'Cybersecurity & Risk',
    tag: 'Defense & Compliance',
    badge: 'Zero-Trust Readiness',
    description: 'Find your real security exposure across cloud endpoints, remediate the vulnerability backlog that matters most, and demonstrate board-level readiness.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Security Posture & Exposure Review',
      'Vulnerability Backlog Remediation',
      'SOC 2 Type II & HIPAA Readiness',
      'Continuous Threat Surface Monitoring',
    ],
    tools: ['CrowdStrike', 'Microsoft Defender', 'Wiz', 'Splunk'],
    leftFooter: '60% Faster Remediation',
    ctaText: 'DISCUSS PRACTICE →',
  },
  {
    id: 'it-operations',
    icon: <Cloud className="w-6 h-6 text-[#D22931]" />,
    title: 'IT Operations & Cloud',
    tag: 'Infrastructure & Scale',
    badge: '99.99% Availability',
    description: 'Run resilient IT infrastructure from the internal service desk to multi-cloud architectures with optimized unit economics and zero critical downtime.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'IT Service Management (ITSM) Workflow Design',
      'Multi-Cloud Architecture & Unit Cost Optimization',
      'Automated CI/CD & Infrastructure as Code',
      '24/7 Resilient Operations & Observability',
    ],
    tools: ['ServiceNow', 'AWS', 'Microsoft Azure', 'Google Cloud'],
    leftFooter: 'Production Reliability',
    ctaText: 'DISCUSS PRACTICE →',
  },
];

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectDiscipline }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [[currentIdx, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setSlide(([curr]) => [(curr + 1) % SERVICES.length, 1]);
    setProgress(0);
  }, []);

  const goToSlide = useCallback((targetIdx: number) => {
    setSlide(([curr]) => [targetIdx, targetIdx > curr ? 1 : -1]);
    setProgress(0);
  }, []);

  // Medium-speed auto-sliding loop with instant hover-to-hold
  useEffect(() => {
    if (isHovered) return; // Hold right where it was whenever cursor is inside!

    const stepMs = 50;
    const totalMs = 5500; // Medium-speed 5.5s per solution slide
    const increment = (stepMs / totalMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.services-header-anim'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const currentService = SERVICES[currentIdx];

  // Medium motion slide variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65, // Medium motion speed per user instruction
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      filter: 'blur(4px)',
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="py-14 sm:py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="services-header-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-semibold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
            <span>Targeted Solution Areas &middot; 5 Canonical Practices</span>
          </div>
          <h2 className="services-header-anim font-display font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] text-[#020626] leading-tight tracking-tight">
            What we <span className="text-[#D22931]">solve.</span>
          </h2>
          <p className="services-header-anim text-base sm:text-lg text-[#556070] mt-4 leading-relaxed">
            Explore our five connected solution practices. Hover over the showcase to hold on any solution, or let it slide sequentially through each practice.
          </p>
        </div>

        {/* 5-Practice Interactive Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {SERVICES.map((s, idx) => {
            const isSelected = idx === currentIdx;
            return (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                onMouseEnter={() => {
                  goToSlide(idx);
                  setIsHovered(true);
                }}
                className={`relative px-4 py-2.5 rounded-2xl text-xs font-sans font-semibold transition-all cursor-pointer flex items-center gap-2 overflow-hidden ${
                  isSelected
                    ? 'bg-[#020626] text-white shadow-lg border border-white/20 -translate-y-0.5'
                    : 'bg-white hover:bg-[#F8FAFC] text-[#556070] border border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs'
                }`}
              >
                {/* Active Slide Timer Progress Fill */}
                {isSelected && !isHovered && (
                  <motion.div
                    style={{ width: `${progress}%` }}
                    className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#D22931] to-[#FAC344]"
                  />
                )}

                <span
                  className={`w-2 h-2 rounded-full transition-all ${
                    isSelected ? 'bg-[#D22931] shadow-[0_0_8px_#D22931]' : 'bg-[#DCE4EC]'
                  }`}
                />
                <span>{s.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Sequential Sliding Showcase Card (Exact Balanced Layout from Image) */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative rounded-[32px] p-8 sm:p-12 bg-gradient-to-br from-[#020626] to-[#0a1133] text-white border border-white/15 shadow-2xl overflow-hidden min-h-[480px] flex flex-col justify-between">
            {/* Subtle Red Specular Glare in Top Center as in screenshot */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-48 bg-[#D22931]/20 blur-[90px] rounded-full pointer-events-none" />

            {/* Dynamic BorderBeam */}
            <BorderBeam size={280} duration={10} colorFrom="#D22931" colorTo="#FAC344" />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentService.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full my-auto"
              >
                {/* Left Column: Practice Identity, Title, Description, Ecosystem */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D22931]/20 text-[#FAC344] text-xs font-semibold uppercase tracking-wider border border-[#D22931]/30">
                      <Sparkles className="w-3.5 h-3.5 text-[#FAC344]" />
                      {currentService.tag}
                    </span>
                    <span className="text-xs text-white/60">{currentService.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-snug">
                    {currentService.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                    {currentService.description}
                  </p>

                  {/* Ecosystem Row */}
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

                {/* Right Column: Nested Frosted Card */}
                <div className="lg:col-span-5 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 shadow-inner backdrop-blur-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#FAC344]">
                    {currentService.deliverablesHeader}
                  </div>

                  {/* Deliverables Checklist with Staggered Visual Pop */}
                  <div className="space-y-3.5">
                    {currentService.deliverables.map((del) => (
                      <div key={del} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#D22931] mt-0.5 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#FAC344]">
                      {currentService.leftFooter}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDiscipline(currentService.id);
                      }}
                      className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#FAC344] hover:text-white transition-colors cursor-pointer group"
                    >
                      <span>{currentService.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#FAC344] group-hover:translate-x-1 transition-transform" />
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
