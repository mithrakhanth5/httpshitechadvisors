import React, { useEffect, useRef } from 'react';
import { gsap, SYMMETRY_EASE } from '../../lib/gsap';
import { TrendingUp, Award, Layers, CheckCircle2 } from 'lucide-react';

interface MetricItem {
  value: number;
  suffix: string;
  label: string;
  subtext: string;
  icon: React.ReactNode;
}

const METRICS: MetricItem[] = [
  {
    value: 50,
    suffix: '+',
    label: 'Enterprise Clients',
    subtext: 'High-growth mid-market to Fortune 500 enterprises across North America.',
    icon: <Award className="w-5 h-5 text-[#D22931]" />,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Domains & Disciplines',
    subtext: 'Cloud, Data, Security, ERP/CRM, GTM, AI Engineering, and Leadership.',
    icon: <Layers className="w-5 h-5 text-[#D22931]" />,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years Delivering Outcomes',
    subtext: 'Founded in Kirkland, WA; guiding technology decisions since 2014.',
    icon: <TrendingUp className="w-5 h-5 text-[#D22931]" />,
  },
  {
    value: 180,
    suffix: '+',
    label: 'Engagements Completed',
    subtext: 'Measured by customer production stability and zero handoff loss.',
    icon: <CheckCircle2 className="w-5 h-5 text-[#D22931]" />,
  },
];

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Fade-up reveal on scroll for section header
      gsap.fromTo(
        section.querySelector('.stats-header'),
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

      // Staggered card reveal + Counter Roll
      gsap.fromTo(
        section.querySelectorAll('.stat-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            onEnter: () => {
              // Roll numbers
              countRefs.current.forEach((el, index) => {
                if (!el) return;
                const target = METRICS[index].value;
                const counter = { val: 0 };
                gsap.to(counter, {
                  val: target,
                  duration: 2,
                  ease: 'power2.out',
                  onUpdate: () => {
                    el.textContent = Math.round(counter.val).toString();
                  },
                });
              });
            },
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#F8FAFC] border-y border-[#EAEDF1] overflow-hidden"
    >
      {/* Subtle ambient blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#D22931]/4 via-[#FAC344]/5 to-transparent blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="stats-header max-w-3xl mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAEDF1] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4">
            <span>Verified Track Record</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Accountability measured in working production results.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            Most consulting firms leave when the slides are finished. We stand behind our advice through deployment, migration, and ongoing operations.
          </p>
        </div>

        {/* 4-Card Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((item, index) => (
            <div
              key={item.label}
              className="stat-card card-hover-feelgood bg-white p-7 rounded-2xl border border-[#EAEDF1] shadow-xs relative flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#EAEDF1] flex items-center justify-center group-hover:scale-110 group-hover:border-[#D22931]/30 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#EAEDF1] group-hover:bg-[#D22931] transition-colors" />
              </div>

              <div>
                <div className="flex items-baseline gap-1 font-display font-extrabold text-4xl sm:text-5xl text-[#020626] tracking-tight">
                  <span
                    ref={(el) => {
                      countRefs.current[index] = el;
                    }}
                  >
                    0
                  </span>
                  <span className="text-[#D22931]">{item.suffix}</span>
                </div>
                <h3 className="font-display font-bold text-base text-[#020626] mt-2 tracking-tight">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#556070] mt-2 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAEDF1]/60 flex items-center justify-between text-[11px] font-bold text-[#556070] uppercase tracking-wider">
                <span>Verified Metric</span>
                <span className="text-[#D22931] group-hover:translate-x-0.5 transition-transform">100% Accountable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
