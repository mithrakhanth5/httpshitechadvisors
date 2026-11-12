import React, { useEffect, useRef } from 'react';
import {
  Compass,
  Code2,
  TrendingUp,
  Users2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { gsap, SYM_EASE, animateMaskedLines } from '../../lib/gsap';

interface CapabilitiesSectionProps {
  onSelectCapability: (helpArea: string) => void;
}

interface CapabilityCard {
  id: string;
  icon: React.ReactNode;
  number: string;
  title: string;
  tag: string;
  badge: string;
  description: string;
  deliverablesHeader: string;
  deliverables: string[];
  tools: string[];
  deliveryModel: string;
  ctaText: string;
  helpArea: string;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    id: 'strategy',
    icon: <Compass className="w-6 h-6 text-[#D22931]" />,
    number: '01',
    title: 'Strategy & Advisory',
    tag: 'Strategic Advisory',
    badge: 'Board-Level Alignment',
    description:
      'Platform-neutral technology strategy, enterprise architecture blueprints, and unbiased vendor evaluations that align board priorities with engineering execution.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Enterprise Target Architecture & Cloud Roadmaps',
      'Unbiased Vendor & Platform Due Diligence',
      'Technical Due Diligence for M&A & Private Equity',
      'Cost Governance & Infrastructure Economics',
    ],
    tools: ['AWS', 'Azure', 'Google Cloud', 'Databricks', 'Snowflake'],
    deliveryModel: 'Senior Partner & Principal Pod',
    ctaText: 'DISCUSS STRATEGY →',
    helpArea: 'strategy',
  },
  {
    id: 'product-engineering',
    icon: <Code2 className="w-6 h-6 text-[#D22931]" />,
    number: '02',
    title: 'Product & Engineering',
    tag: 'Full-Stack Delivery',
    badge: 'High-Throughput Engineering',
    description:
      'Modern software engineering, cloud-native application modernization, and resilient microservice architectures built for high availability and rapid feature delivery.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Cloud-Native Application Architecture & APIs',
      'Legacy Modernization & Code Refactoring',
      'Automated CI/CD Pipelines & Quality Engineering',
      'High-Throughput Distributed Microservices',
    ],
    tools: ['TypeScript', 'React', 'Node.js', 'Go', 'Kubernetes', 'Docker'],
    deliveryModel: 'Embedded Senior Engineering Pod',
    ctaText: 'DISCUSS ENGINEERING →',
    helpArea: 'product-engineering',
  },
  {
    id: 'growth',
    icon: <TrendingUp className="w-6 h-6 text-[#D22931]" />,
    number: '03',
    title: 'Growth & Go-to-Market',
    tag: 'Revenue Acceleration',
    badge: 'Predictable Pipeline',
    description:
      'Unifying revenue operations, customer lifecycle intelligence, and marketing technology stacks into an automated growth engine that scales predictably.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'RevOps Stack Integration & Process Automation',
      'Unified Customer Data & Attribution Models',
      'Product-Led Growth (PLG) Telemetry & Analytics',
      'Conversion Funnel Optimization & Experimentation',
    ],
    tools: ['Salesforce', 'HubSpot', 'Segment', 'Mixpanel', 'BigQuery'],
    deliveryModel: 'RevOps & Analytics Pod',
    ctaText: 'DISCUSS GROWTH →',
    helpArea: 'growth',
  },
  {
    id: 'talent',
    icon: <Users2 className="w-6 h-6 text-[#D22931]" />,
    number: '04',
    title: 'Talent & Managed Teams',
    tag: 'Specialist Leadership',
    badge: 'Zero Handoff Loss',
    description:
      'Elite fractional leaders, principal architects, and dedicated engineering pods that embed directly into your organization with zero handoff loss and complete governance.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Fractional CTO, CPO & VP Engineering Leaders',
      'Autonomous Embedded Engineering Pods',
      'Governance, Code Quality & Delivery Sprints',
      'Zero-Loss Knowledge Transfer & Handover',
    ],
    tools: ['Principal Architects', 'Staff Engineers', 'Delivery Leads', 'Agile Pods'],
    deliveryModel: 'Direct Embedded Pod',
    ctaText: 'DISCUSS TALENT →',
    helpArea: 'talent',
  },
];

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectCapability }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cleanupLines = animateMaskedLines(titleRef.current, { trigger: section });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.cap-header-anim'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section,
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.cap-card-anim'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.09,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section.querySelector('.cap-grid'),
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => {
      cleanupLines();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="py-14 sm:py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="cap-header-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-semibold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
            <span>Delivery Engine &middot; Four Connected Capabilities</span>
          </div>
          <h2 ref={titleRef} className="font-display font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] text-[#020626] leading-tight tracking-tight">
            How we <span className="text-[#D22931]">deliver.</span>
          </h2>
          <p className="cap-header-anim text-base sm:text-lg text-[#556070] mt-4 leading-relaxed">
            Our solution areas define what we solve. Our capabilities define how we deliver with senior pods, platform-neutral architecture, and zero handoff loss.
          </p>
        </div>

        {/* The 4 Capabilities Bento Grid (Simple Fade-and-Rise Cards, Zero Tilt/Hover Distortion) */}
        <div className="cap-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap) => {
            return (
              <div key={cap.id} className="cap-card-anim h-full">
                <div className="p-8 sm:p-10 rounded-[30px] bg-gradient-to-br from-[#020626] to-[#0a1133] text-white border border-white/15 hover:border-[#D22931]/40 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden transition-colors duration-300">
                  {/* Subtle Red Specular Glare */}
                  <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#D22931]/15 blur-[70px] rounded-full pointer-events-none" />

                  <div className="relative z-10">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-2xs">
                        {cap.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[#FAC344] border border-white/15">
                        Pillar {cap.number}
                      </span>
                    </div>

                    {/* Tag Eyebrow */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D22931]/20 text-[#FAC344] text-[11px] font-semibold uppercase tracking-wider border border-[#D22931]/30 mb-3">
                      <Sparkles className="w-3 h-3 text-[#FAC344]" />
                      <span>{cap.tag}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-snug mb-3">
                      {cap.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      {cap.description}
                    </p>

                    {/* Nested Frosted Deliverables Panel */}
                    <div className="rounded-2xl p-5 sm:p-6 bg-[#050b1f]/90 border border-white/10 shadow-lg mb-6 space-y-3 backdrop-blur-md">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#FAC344] border-b border-white/10 pb-2">
                        {cap.deliverablesHeader}
                      </div>
                      <ul className="space-y-2.5">
                        {cap.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                            <CheckCircle2 className="w-4 h-4 text-[#D22931] flex-shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ecosystem Chips */}
                    <div className="pt-1 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs text-white/50 mr-1">Ecosystem:</span>
                      {cap.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-lg bg-white/10 text-white/90 text-xs font-medium border border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Row: Delivery Model & Direct CTA */}
                  <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#FAC344] font-medium">
                      {cap.deliveryModel}
                    </span>
                    <button
                      onClick={() => onSelectCapability(cap.helpArea)}
                      className="group/btn inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#FAC344] transition-colors cursor-pointer"
                    >
                      <span><span className="sym-link-underline">{cap.ctaText}</span></span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D22931] transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
