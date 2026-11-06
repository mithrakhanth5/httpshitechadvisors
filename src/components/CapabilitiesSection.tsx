import React from 'react';
import { CAPABILITIES } from '../data/siteData';
import { Compass, Code, TrendingUp, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CapabilitiesSectionProps {
  onOpenConsultation: (capabilityTitle?: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenConsultation }) => {
  const getIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case 'Compass': return <Compass className={className} />;
      case 'Code': return <Code className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'Users': return <Users className={className} />;
      default: return <Code className={className} />;
    }
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>How We Deliver</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            Four core capabilities behind every solution.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Whether you need strategic platform selection, hands-on production engineering, GTM revenue alignment, or embedded senior squads, our delivery models flex to meet your milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#D2232A] mb-6 shadow-xs group-hover:border-[#D2232A]/30 transition-colors">
                  {getIcon(cap.iconName)}
                </div>
                <h3 className="text-xl font-bold text-[#0B1F33] tracking-tight group-hover:text-[#D2232A] transition-colors font-sans">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                  {cap.line}
                </p>

                <div className="mt-6 space-y-2 pt-4 border-t border-slate-200/80">
                  {cap.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => onOpenConsultation(cap.title)}
                  className="w-full inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-white hover:bg-[#D2232A] hover:text-white text-[#0B1F33] text-xs font-bold transition-all border border-slate-200 shadow-xs"
                >
                  <span>Discuss Engagement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
