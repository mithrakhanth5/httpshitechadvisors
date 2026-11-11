import React, { useState } from 'react';
import { ArrowRight, Layers, Users, Zap, Compass, CheckCircle2, Building2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TiltCard } from '../ui/TiltCard';

export const HomePathways: React.FC = () => {
  const [activePathwayIndex, setActivePathwayIndex] = useState<number>(0);
  const pathways = [
    {
      title: 'Enterprise Solutions',
      tag: 'Practice Areas',
      icon: <Layers className="w-5 h-5 text-[#D22931]" />,
      desc: 'CRM & ERP, Data Foundations, Cybersecurity, Cloud Infrastructure, and Governed AI Systems.',
      path: '/solutions',
      cta: 'Explore Solutions',
      featured: true,
    },
    {
      title: 'Executive Role Focus',
      tag: 'Leadership Mandates',
      icon: <Users className="w-5 h-5 text-[#D22931]" />,
      desc: 'Technology decisions framed around specific mandates for Founders, COOs, CTOs, and CISOs.',
      path: '/role-focus',
      cta: 'Explore by Role',
    },
    {
      title: 'Delivery Capabilities',
      tag: 'Advisory & Build',
      icon: <Zap className="w-5 h-5 text-[#D22931]" />,
      desc: 'Strategy & Advisory, Product & Engineering, Growth Operations, and Embedded Specialist Talent.',
      path: '/capabilities',
      cta: 'View Capabilities',
    },
    {
      title: 'How We Work',
      tag: 'Delivery Framework',
      icon: <Compass className="w-5 h-5 text-[#D22931]" />,
      desc: 'A structured 4-phase delivery framework where senior practitioners stay on the work to go-live.',
      path: '/methodology',
      cta: 'See Methodology',
    },
    {
      title: 'Verified Results',
      tag: 'Client Outcomes',
      icon: <CheckCircle2 className="w-5 h-5 text-[#D22931]" />,
      desc: '99.99% peak availability, 5,000+ safe migrations, and 60% faster security remediation.',
      path: '/results',
      cta: 'Review Proof',
    },
    {
      title: 'Sector Experience',
      tag: 'Industry Depth',
      icon: <Building2 className="w-5 h-5 text-[#D22931]" />,
      desc: 'Specialized architectures across SaaS, Retail, Financial Services, Healthcare, and Manufacturing.',
      path: '/industries',
      cta: 'Explore Sectors',
    },
    {
      title: 'Executive Roundtable',
      tag: 'Executive Forum',
      icon: <Calendar className="w-5 h-5 text-[#D22931]" />,
      desc: 'Convening senior tech leaders and founders across the Seattle ecosystem on AI and emerging systems.',
      path: '/events',
      cta: 'Join Community',
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#EBF2F7] border-t border-[#DCE4EC] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCE4EC] text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
            <span>Explore Hitech Advisors</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Dedicated Practices.{' '}
            <span className="text-[#D22931] font-display font-extrabold inline-block">
              One Accountable Partner.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556070] leading-relaxed">
            Choose the area most relevant to your current mandate, or explore how our advisory, architecture, and engineering practices connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pathways.map((item, idx) => {
            const isSelected = activePathwayIndex === idx;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="group block h-full"
                onMouseEnter={() => setActivePathwayIndex(idx)}
              >
                <TiltCard
                  maxTilt={6}
                  scale={1.02}
                  showBorderBeam={isSelected}
                  borderBeamDuration={10}
                  spotlightColor="rgba(210, 41, 49, 0.1)"
                  borderColor="rgba(210, 41, 49, 0.5)"
                  className={`h-full p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-2xl ring-2 ring-[#D22931]/15 -translate-y-1'
                      : 'bg-white border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs hover:shadow-lg'
                  }`}
                >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#EBF2F7] border border-[#DCE4EC] flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-[#020626] bg-[#EBF2F7] border border-[#DCE4EC] px-3 py-1 rounded-full group-hover:border-[#D22931]/30 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#556070] leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DCE4EC] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#020626] group-hover:text-[#D22931] transition-colors">
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </TiltCard>
            </Link>
          );
        })}
        </div>
      </div>
    </section>
  );
};
