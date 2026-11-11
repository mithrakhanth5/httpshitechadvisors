import React, { useEffect, useRef, useState } from 'react';
import { Bot, Cloud, Shield, Database, LayoutGrid, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { TiltCard } from '../ui/TiltCard';

interface ServicesGridProps {
  onSelectDiscipline: (key: string) => void;
}

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  tag: string;
  featured?: boolean;
}

const SERVICES: ServiceCard[] = [
  {
    id: 'ai',
    icon: <Bot className="w-7 h-7 text-[#D22931]" />,
    title: 'AI Adoption & Governed Agents',
    tag: 'Flagship Practice',
    description: 'Move AI from experimental proofs-of-concept into high-throughput production with autonomous agents and multi-step workflows that execute real work safely under enterprise governance.',
    deliverables: ['AI Strategy & Readiness Assessment', 'AI Agents & Multi-Step Workflows', 'Enterprise AI Governance & Safety Guardrails', 'Fine-Tuned Retrieval & Vector Workflows'],
    tools: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'LangChain'],
    featured: true,
  },
  {
    id: 'data',
    icon: <Database className="w-6 h-6 text-[#D22931]" />,
    title: 'Data & Customer Intelligence',
    tag: 'Modern Foundations',
    description: 'Bring your fragmented enterprise data together into one trusted view of customers and operations, ready for executive decisions and production AI.',
    deliverables: ['Unified Customer Profiles & CDPs', 'Reliable Multi-Source Data Pipelines', 'AI-Ready Data Quality & Governance'],
    tools: ['Snowflake', 'Databricks', 'BigQuery', 'Microsoft Fabric'],
  },
  {
    id: 'crm-erp',
    icon: <LayoutGrid className="w-6 h-6 text-[#D22931]" />,
    title: 'CRM, ERP & Business Applications',
    tag: 'Core Systems',
    description: 'Choose, implement and connect the mission-critical business systems that run your operations, with rigorous change enablement so your team actually adopts them.',
    deliverables: ['Platform Strategy & Unbiased Selection', 'CRM/ERP Implementation & Optimization', 'Workflow & Process Automation'],
    tools: ['Salesforce', 'NetSuite', 'Microsoft Dynamics', 'HubSpot'],
  },
  {
    id: 'cybersecurity',
    icon: <Shield className="w-6 h-6 text-[#D22931]" />,
    title: 'Cybersecurity & Risk',
    tag: 'Defense & Compliance',
    description: 'Find your real security exposure across cloud endpoints, remediate the vulnerability backlog that matters most, and demonstrate board-level readiness.',
    deliverables: ['Security Posture & Exposure Review', 'Vulnerability Backlog Remediation', 'SOC 2 Type II & HIPAA Readiness'],
    tools: ['CrowdStrike', 'Microsoft Defender', 'Wiz', 'Splunk'],
  },
  {
    id: 'it-operations',
    icon: <Cloud className="w-6 h-6 text-[#D22931]" />,
    title: 'IT Operations & Cloud',
    tag: 'Infrastructure',
    description: 'Run resilient IT infrastructure from the internal service desk to multi-cloud architectures with optimized unit economics and zero critical downtime.',
    deliverables: ['IT Service Management (ITSM)', 'Cloud Architecture & Cost Optimization', 'Automated Operations & 24/7 Monitoring'],
    tools: ['ServiceNow', 'AWS', 'Microsoft Azure', 'Google Cloud'],
  },
];

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectDiscipline }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeServiceId, setActiveServiceId] = useState<string>('ai');

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

      gsap.fromTo(
        section.querySelectorAll('.service-bento-anim'),
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.services-bento-container'),
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const aiService = SERVICES[0];
  const pairedServices = SERVICES.slice(1);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="py-14 sm:py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="services-header-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-mono font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D22931] animate-ping" />
            <span>Targeted Solution Areas</span>
          </div>
          <h2 className="services-header-anim font-display font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] text-[#020626] leading-tight tracking-tight">
            What we <span className="text-[#D22931]">solve</span>.
          </h2>
          <p className="services-header-anim text-base sm:text-lg text-[#556070] mt-4 leading-relaxed">
            Five connected solution practices to modernize your enterprise. Structured for strategic depth, vendor neutrality, and zero handoff loss.
          </p>
        </div>

        {/* Symmetry-Inspired Asymmetric Editorial Bento (No more identical square boxes) */}
        <div className="services-bento-container space-y-8">
          {/* 1. Flagship Hero Solution Card (Wide Landscape Editorial Layout) */}
          <div
            className="service-bento-anim"
            onMouseEnter={() => setActiveServiceId(aiService.id)}
          >
            <TiltCard
              onClick={() => onSelectDiscipline(aiService.id)}
              maxTilt={4}
              scale={1.01}
              showBorderBeam={activeServiceId === aiService.id}
              borderBeamDuration={8}
              spotlightColor="rgba(210, 41, 49, 0.12)"
              borderColor="rgba(210, 41, 49, 0.55)"
              className={`p-8 sm:p-12 rounded-[32px] border transition-all duration-300 cursor-pointer overflow-hidden ${
                activeServiceId === aiService.id
                  ? 'bg-gradient-to-br from-[#020626] to-[#0d163d] text-white border-white/20 shadow-2xl ring-2 ring-[#D22931]/25'
                  : 'bg-[#020626] text-white border-white/10 shadow-xl'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Brand & Copy */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D22931]/20 text-[#FAC344] text-xs font-mono font-bold uppercase tracking-wider border border-[#D22931]/30">
                      <Sparkles className="w-3.5 h-3.5 text-[#FAC344]" />
                      {aiService.tag}
                    </span>
                    <span className="text-xs font-mono text-white/50">High Demand Practice</span>
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
                      {aiService.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/75 mt-3 leading-relaxed max-w-2xl">
                      {aiService.description}
                    </p>
                  </div>

                  {/* Platforms Row */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-white/50 mr-2">Ecosystem:</span>
                    {aiService.tools.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-mono font-medium border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Deliverables & Action Button */}
                <div className="lg:col-span-5 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FAC344]">
                    Canonical Deliverables
                  </div>
                  <div className="space-y-3">
                    {aiService.deliverables.map((del) => (
                      <div key={del} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#D22931] mt-0.5 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#FAC344]">Senior Pod Delivery</span>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#FAC344] transition-colors">
                      <span>Discuss Practice</span>
                      <ArrowRight className="w-4 h-4 text-[#D22931]" />
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* 2. Four Companion Solutions in 2x2 Symmetry-Style Tactile Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pairedServices.map((service, idx) => {
              const isSelected = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  className="service-bento-anim h-full"
                  onMouseEnter={() => setActiveServiceId(service.id)}
                >
                  <TiltCard
                    onClick={() => onSelectDiscipline(service.id)}
                    maxTilt={5}
                    scale={1.015}
                    showBorderBeam={isSelected}
                    borderBeamDuration={9}
                    spotlightColor="rgba(210, 41, 49, 0.1)"
                    borderColor="rgba(210, 41, 49, 0.5)"
                    className={`p-8 sm:p-10 rounded-[28px] border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#D22931] shadow-2xl ring-2 ring-[#D22931]/15 -translate-y-1'
                        : 'bg-[#F8FAFC] border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs hover:shadow-lg hover:bg-white'
                    }`}
                  >
                    <div>
                      {/* Top Meta Bar with Symmetry-Style Category Pill */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-[#DCE4EC] shadow-2xs flex items-center justify-center group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#EBF2F7] text-[#556070] border border-[#DCE4EC]">
                            {service.tag}
                          </span>
                          <span className="text-xs font-mono text-[#D22931] font-bold">
                            0{idx + 2}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display font-extrabold text-2xl text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#556070] mt-3 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="mt-6 space-y-2.5 pt-5 border-t border-[#DCE4EC]">
                        {service.deliverables.map((del) => (
                          <div key={del} className="flex items-start gap-2.5 text-xs text-[#020626] font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] mt-0.5 flex-shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Card Footer */}
                    <div className="mt-8 pt-5 border-t border-[#DCE4EC] flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="text-[11px] font-mono text-[#556070]">
                        <span className="font-semibold text-[#020626]">Stack: </span>
                        <span>{service.tools.join(', ')}</span>
                      </div>
                      <span className="font-bold text-[#D22931] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
