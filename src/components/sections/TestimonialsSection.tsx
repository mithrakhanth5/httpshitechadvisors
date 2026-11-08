import React, { useEffect, useRef } from 'react';
import { gsap, SYMMETRY_EASE } from '../../lib/gsap';
import { ArrowUpRight, Quote, ShieldCheck, ShoppingCart, Server, CheckCircle2 } from 'lucide-react';

interface CaseStory {
  id: string;
  stat: string;
  metric: string;
  title: string;
  industry: string;
  icon: React.ReactNode;
  detail: string;
  outcomes: string[];
}

const CASE_STORIES: CaseStory[] = [
  {
    id: 'retail',
    stat: '99.99%',
    metric: 'Uptime Through Peak Flash Sales',
    title: 'Zero downtime during 10x traffic surges for high-volume retail',
    industry: 'Retail & E-commerce',
    icon: <ShoppingCart className="w-5 h-5 text-[#D22931]" />,
    detail:
      'Engineered an auto-scaling cloud microservices architecture with multi-region failover. Cut peak page load times by 50% and unlocked a 40% year-over-year revenue surge during Black Friday traffic.',
    outcomes: ['50% faster checkout latency', '40% surge revenue secured', 'Auto-scaling Kubernetes cluster'],
  },
  {
    id: 'divestiture',
    stat: '5,000+',
    metric: 'Users Migrated Without Disruption',
    title: 'Separating 5,000+ corporate users from parent enterprise in 90 days',
    industry: 'Technology & Cloud',
    icon: <Server className="w-5 h-5 text-[#D22931]" />,
    detail:
      'Orchestrated clean carve-out of Active Directory, Microsoft 365, NetSuite ERP, and cloud infrastructure following an M&A divestiture. Zero business downtime with 30% higher asset utilization.',
    outcomes: ['30% higher asset utilization', '25% increase in user CSAT', 'Zero data loss across systems'],
  },
  {
    id: 'security',
    stat: '60%',
    metric: 'Faster Remediation Time',
    title: 'Prioritizing vulnerability backlogs by business risk for financial services',
    industry: 'Financial Services & Risk',
    icon: <ShieldCheck className="w-5 h-5 text-[#D22931]" />,
    detail:
      'Shifted security operations from drowning in 12,000 unranked alerts to automated risk scoring. Established an actionable 3-year security roadmap passing SOC 2 Type II audit on first review.',
    outcomes: ['60% faster Mean Time to Remediate', 'SOC 2 Type II certified', 'Audited threat governance'],
  },
];

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        section.querySelector('.cases-header'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );

      // Staggered cards reveal
      gsap.fromTo(
        section.querySelectorAll('.case-card'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );

      // Testimonial quote reveal
      gsap.fromTo(
        section.querySelector('.testimonial-quote-box'),
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.testimonial-quote-box'),
            start: 'top 85%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="cases-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#EAEDF1] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4">
            <span>Client Impact</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Results our clients can measure in revenue and uptime.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            Real enterprise transformations delivered by senior practitioners — no theoretical frameworks, just operational proof.
          </p>
        </div>

        {/* 3 Quantified Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CASE_STORIES.map((item, index) => (
            <div
              key={item.id}
              className="case-card card-hover-feelgood p-8 rounded-2xl border border-[#EAEDF1] hover:border-[#D22931] bg-white shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAEDF1] text-xs font-bold text-[#020626]">
                    {item.icon}
                    <span>{item.industry}</span>
                  </div>
                  <span className="text-xs font-bold text-[#D22931] uppercase tracking-wider">
                    Case 0{index + 1}
                  </span>
                </div>

                <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#020626] tracking-tight mb-1">
                  {item.stat}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4">
                  {item.metric}
                </div>

                <h3 className="font-display font-bold text-lg text-[#020626] leading-snug tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#556070] leading-relaxed mb-6">
                  {item.detail}
                </p>
              </div>

              <div>
                <div className="space-y-2 border-t border-[#EAEDF1] pt-4 mb-6">
                  {item.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-xs font-medium text-[#020626]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-[#020626] group-hover:text-[#D22931]">
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D22931]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Testimonial Quote Card */}
        <div className="testimonial-quote-box relative rounded-3xl bg-[#020626] text-white p-8 sm:p-12 overflow-hidden shadow-xl border border-white/10">

          {/* Subtle Ambient Background Blob */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#D22931]/20 blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#FAC344]/15 blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[#FAC344] mb-4">
                <Quote className="w-8 h-8 opacity-75" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Client Perspective &middot; VP Technology Operations
                </span>
              </div>
              <blockquote className="font-display font-medium text-xl sm:text-2xl text-white/95 leading-relaxed">
                &ldquo;Hitech framed our architecture options with absolute clarity, chose the right stack on the merits, and stayed with our engineering team until the new platform delivered in production.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#D22931] to-[#FAC344] flex items-center justify-center font-display font-bold text-white shadow-sm">
                  DV
                </div>
                <div>
                  <div className="font-display font-bold text-base text-white">David Vance</div>
                  <div className="text-xs text-white/60">
                    VP of Technology Operations &middot; Omnichannel Retail Group
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-white/15 pt-6 md:pt-0 md:pl-10 flex flex-col gap-3 flex-shrink-0">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FAC344]">
                Engagement Scope
              </div>
              <div className="text-sm text-white/80 space-y-1">
                <div>&bull; Multi-Cloud Architecture</div>
                <div>&bull; E-commerce Peak Traffic</div>
                <div>&bull; Production Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
