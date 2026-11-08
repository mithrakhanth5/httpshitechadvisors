import React, { useRef, useEffect } from 'react';
import { Award, Layers, Calendar, CheckCircle2 } from 'lucide-react';
import { gsap, SYMMETRY_EASE } from '../../lib/gsap';

interface MetricItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const metrics: MetricItem[] = [
  {
    value: 50,
    suffix: '+',
    label: 'Enterprise Clients',
    sublabel: 'Fortune 500 & scale-ups',
    icon: <Award className="w-5 h-5 text-[#D22931]" />,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Specialized Domains',
    sublabel: 'Cloud, AI, SecOps, ERP, Data',
    icon: <Layers className="w-5 h-5 text-[#D22931]" />,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years of Excellence',
    sublabel: 'Founded in Kirkland, WA',
    icon: <Calendar className="w-5 h-5 text-[#D22931]" />,
  },
  {
    value: 180,
    suffix: '+',
    label: 'Engagements Delivered',
    sublabel: 'Zero handoff loss to go-live',
    icon: <CheckCircle2 className="w-5 h-5 text-[#D22931]" />,
  },
];

export const VerifiedMetricsStrip: React.FC = () => {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const ctx = gsap.context(() => {
      // Reveal the strip container
      gsap.fromTo(
        strip,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: strip,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Kinetic number counters count up
      metrics.forEach((metric, index) => {
        const el = countRefs.current[index];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: metric.value,
          duration: 1.8,
          delay: 0.2 + index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: strip,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            el.innerText = `${Math.floor(obj.val)}${metric.suffix}`;
          },
        });
      });
    }, strip);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-white relative z-20 py-8 border-y border-[#EAEDF1]">
      <div
        ref={stripRef}
        className="max-w-[1300px] mx-auto px-6 sm:px-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#EAEDF1]">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col items-start ${i > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''} group`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-[#D22931]/8 group-hover:bg-[#D22931]/15 transition-colors">
                  {m.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#556070]">
                  Verified Metric
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span
                  ref={(el) => {
                    countRefs.current[i] = el;
                  }}
                  className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#020626] tracking-tight group-hover:text-[#D22931] transition-colors"
                >
                  0{m.suffix}
                </span>
              </div>

              <div className="font-bold text-sm sm:text-base text-[#020626] mt-1">
                {m.label}
              </div>
              <div className="text-xs text-[#556070] mt-0.5">
                {m.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
