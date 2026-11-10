import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Quote, ShieldCheck, ShoppingCart, Server, CheckCircle2 } from 'lucide-react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { TiltCard } from '../ui/TiltCard';
import { BorderBeam } from '../ui/BorderBeam';
import { AnimatedCounter } from '../ui/AnimatedCounter';

interface CaseStory {
  id: string;
  stat: string;
  rawNum: number;
  decimals: number;
  suffix: string;
  metric: string;
  title: string;
  industry: string;
  icon: React.ReactNode;
  detail: string;
  outcomes: string[];
}

// Case studies strictly rebuilt from verified figures in Section 8.15 & Section 12 (no unverified claims)
const CASE_STORIES: CaseStory[] = [
  {
    id: 'retail',
    stat: '99.99%',
    rawNum: 99.99,
    decimals: 2,
    suffix: '%',
    metric: 'Uptime at Peak',
    title: 'Keeping a high-volume retailer online through flash-sale traffic',
    industry: 'Retail & E-commerce',
    icon: <ShoppingCart className="w-5 h-5 text-[#D22931]" />,
    detail:
      'High-volume e-commerce retailer: maintained 99.99% uptime with 50% faster page loads at peak and a 40% revenue increase.',
    outcomes: ['99.99% uptime through flash sales', '50% faster page loads at peak', '40% revenue increase'],
  },
  {
    id: 'divestiture',
    stat: '5,000+',
    rawNum: 5000,
    decimals: 0,
    suffix: '+',
    metric: 'Users Migrated',
    title: 'Separating 5,000+ users from a parent company without disruption',
    industry: 'IT Operations & Cloud',
    icon: <Server className="w-5 h-5 text-[#D22931]" />,
    detail:
      'Global SaaS company (divestiture): 5,000+ users migrated with no critical downtime, 30% higher asset utilization, and 25% higher user satisfaction.',
    outcomes: ['5,000+ users migrated', 'No critical downtime', '30% higher asset utilization', '25% higher user satisfaction'],
  },
  {
    id: 'security',
    stat: '60%',
    rawNum: 60,
    decimals: 0,
    suffix: '%',
    metric: 'Remediation Reduction',
    title: 'Cutting time to remediation across a global security estate',
    industry: 'Cybersecurity & Risk',
    icon: <ShieldCheck className="w-5 h-5 text-[#D22931]" />,
    detail:
      'Global enterprise moving to SaaS: achieved 60% reduction in time to remediation and established a 3-year security plan.',
    outcomes: ['60% reduction in time to remediation', '3-year security plan established'],
  },
];

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header reveal with bi-directional scroll
      gsap.fromTo(
        section.querySelector('.cases-header'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Quantified Story Cards reveal with bi-directional scroll
      gsap.fromTo(
        section.querySelectorAll('.case-card'),
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.case-card'),
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );

      // Quote card reveal with bi-directional scroll
      gsap.fromTo(
        section.querySelector('.testimonial-quote-box'),
        { opacity: 0, scale: 0.97, y: 35 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: section.querySelector('.testimonial-quote-box'),
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
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
      className="relative py-14 sm:py-18 bg-white overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="cases-header max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4">
            <span>Client Impact</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Results our clients can <span className="text-[#D22931]">measure</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            Real enterprise transformations delivered by senior practitioners: no theoretical frameworks, just operational proof.
          </p>
        </div>

        {/* 3 Quantified Case Studies Grid with 3D Tilt & Specular Glare */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CASE_STORIES.map((item, index) => (
            <div key={item.id} className="case-card h-full">
              <TiltCard
                maxTilt={6}
                scale={1.02}
                showBorderBeam={index === 0}
                borderBeamDuration={9}
                spotlightColor="rgba(210, 41, 49, 0.08)"
                borderColor="rgba(210, 41, 49, 0.45)"
                className="p-8 rounded-2xl border border-[#DCE4EC] hover:border-[#D22931]/60 bg-white shadow-2xs hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-bold text-[#020626]">
                      {item.icon}
                      <span>{item.industry}</span>
                    </div>
                    <span className="text-xs font-bold text-[#D22931] uppercase tracking-wider font-mono">
                      Case 0{index + 1}
                    </span>
                  </div>

                  <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#020626] tracking-tight mb-1">
                    <AnimatedCounter
                      value={item.rawNum}
                      decimals={item.decimals}
                      suffix={item.suffix}
                      duration={2.0}
                    />
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
                  <div className="space-y-2 border-t border-[#DCE4EC] pt-4 mb-6">
                    {item.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2 text-xs font-medium text-[#020626]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-[#020626] group-hover:text-[#D22931]">
                    <span>Read the story &rarr;</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D22931] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Executive Testimonial Quote Card with Border Beam & Ambient Motion */}
        <div className="testimonial-quote-box relative rounded-3xl bg-[#020626] text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-white/10 group">
          <BorderBeam size={260} duration={14} colorFrom="#FAC344" colorTo="#D22931" />
          <div className="absolute inset-0 bg-cyber-grid-dark opacity-20 pointer-events-none" />
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#FAC344]/15 blur-[90px] pointer-events-none animate-ambient-blob-1" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-[#FAC344] mb-4">
              <Quote className="w-8 h-8 opacity-75" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                Client Perspective &middot; Testimonial
              </span>
            </div>
            <blockquote className="font-display font-medium text-xl sm:text-2xl text-white/95 leading-relaxed">
              &ldquo;**APPROVED QUOTE**&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-mono font-bold text-xs text-white/80">
                **
              </div>
              <div>
                <div className="font-display font-bold text-base text-white">**NAME**</div>
                <div className="text-xs text-white/60 font-mono">
                  **TITLE**, **COMPANY**
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
