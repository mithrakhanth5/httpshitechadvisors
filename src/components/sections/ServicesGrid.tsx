import React, { useEffect, useRef } from 'react';
import { Bot, Cloud, Shield, Database, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { gsap, SYMMETRY_EASE } from '../../lib/gsap';
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
}

const SERVICES: ServiceCard[] = [
  {
    id: 'crm-erp',
    icon: <LayoutGrid className="w-6 h-6 text-[#D22931]" />,
    title: 'CRM, ERP & Business Applications',
    description: 'Choose, implement and connect the systems that run your business — and make sure people use them.',
    deliverables: ['Platform Strategy & Unbiased Selection', 'CRM/ERP Implementation & Optimization', 'Workflow & Process Automation'],
    tools: ['Salesforce', 'NetSuite', 'Microsoft Dynamics', 'HubSpot'],
  },
  {
    id: 'data',
    icon: <Database className="w-6 h-6 text-[#D22931]" />,
    title: 'Data & Customer Intelligence',
    description: 'Bring your data together into one trusted view of customers and operations, ready for decisions and AI.',
    deliverables: ['Unified Customer Profiles & CDPs', 'Reliable Multi-Source Data Pipelines', 'AI-Ready Data Quality & Governance'],
    tools: ['Snowflake', 'Databricks', 'BigQuery', 'Microsoft Fabric'],
  },
  {
    id: 'cybersecurity',
    icon: <Shield className="w-6 h-6 text-[#D22931]" />,
    title: 'Cybersecurity & Risk',
    description: "Find your real exposure, fix what matters most, and show the board it's handled.",
    deliverables: ['Security Posture & Exposure Review', 'Vulnerability Backlog Remediation', 'SOC 2 Type II & HIPAA Readiness'],
    tools: ['CrowdStrike', 'Microsoft Defender', 'Wiz', 'Splunk'],
  },
  {
    id: 'it-operations',
    icon: <Cloud className="w-6 h-6 text-[#D22931]" />,
    title: 'IT Operations & Cloud',
    description: "Run IT that's reliable, efficient and ready to scale — from the service desk to the cloud.",
    deliverables: ['IT Service Management (ITSM)', 'Cloud Architecture & Cost Optimization', 'Automated Operations & Monitoring'],
    tools: ['ServiceNow', 'AWS', 'Microsoft Azure', 'Google Cloud'],
  },
  {
    id: 'ai',
    icon: <Bot className="w-6 h-6 text-[#D22931]" />,
    title: 'AI Adoption & Agents',
    description: 'Move AI from pilots to production — agents and automation that do real work, safely.',
    deliverables: ['AI Strategy & Readiness Assessment', 'AI Agents & Multi-Step Workflows', 'Enterprise AI Governance & Safety'],
    tools: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'LangChain'],
  },
];

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectDiscipline }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        section.querySelectorAll('.services-header-anim'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Staggered card grid reveal
      gsap.fromTo(
        section.querySelectorAll('.service-card-anim'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: section.querySelector('.services-grid'),
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="services-header-anim inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#EAEDF1] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span>Solution Areas</span>
          </div>
          <h2 className="services-header-anim font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            What we solve
          </h2>
          <p className="services-header-anim text-base sm:text-lg text-[#556070] mt-4 leading-relaxed">
            Five areas where business and technology meet. Most engagements touch more than one.
          </p>
        </div>

        {/* 6-Card Services Bento Grid with 3D Tilt Perspective & Border Beam */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <TiltCard
              key={service.id}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              className="service-card-anim rounded-2xl"
            >
              <div
                onClick={() => onSelectDiscipline(service.id)}
                className="relative h-full p-8 rounded-2xl bg-[#F8FAFC] border border-[#EAEDF1] hover:border-[#D22931] flex flex-col justify-between group cursor-pointer overflow-hidden transition-all duration-300 shadow-2xs hover:shadow-xl"
              >
                <div>
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#EAEDF1] shadow-2xs flex items-center justify-center group-hover:scale-110 group-hover:border-gray-300 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#556070] mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-5 space-y-2 border-t border-[#EAEDF1] pt-4">
                    {service.deliverables.map((del) => (
                      <div key={del} className="flex items-start gap-2 text-xs text-[#020626] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] mt-0.5 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-7 pt-4 border-t border-[#EAEDF1] flex items-center justify-between">
                  <div className="text-[11px] text-[#556070] pr-2">
                    <span className="font-semibold text-[#020626]">Platforms: </span>
                    <span>{service.tools.join(', ')}</span>
                  </div>
                  <span className="text-xs font-bold text-[#D22931] flex items-center gap-1 group-hover:translate-x-1 transition-transform flex-shrink-0">
                    Discuss &rarr;
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
