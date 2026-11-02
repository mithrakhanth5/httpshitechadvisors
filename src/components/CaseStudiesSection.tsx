import React, { useState } from 'react';
import { 
  Quote, 
  ArrowUpRight, 
  Sparkles, 
  Building2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CASE_STUDIES } from '../data/siteData';

interface CaseStudiesSectionProps {
  onOpenConsultation: (clientName?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenConsultation }) => {
  const [expandedId, setExpandedId] = useState<string | null>(CASE_STUDIES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Enterprise Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Case Studies &amp; Client Testimonials
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Real outcomes delivered for industry titans and high-growth disruptors across North America and global operations.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => {
            const isExpanded = expandedId === study.id;
            return (
              <div
                key={study.id}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl hover:border-slate-700 transition flex flex-col justify-between"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-400 font-bold">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {study.client}
                        </h3>
                        <p className="text-xs text-slate-400 font-mono">
                          {study.sector}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-rose-950/60 border border-rose-900/40 text-rose-400">
                      {study.tag}
                    </span>
                  </div>

                  {/* Quantified Impact Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-2.5 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/60 text-center">
                    {study.impactMetrics.map((metric, idx) => (
                      <div key={idx} className="px-1">
                        <div className="text-lg sm:text-2xl font-black text-white tracking-tight text-rose-400">
                          {metric.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Client Quote */}
                  <div className="mt-6 relative">
                    <Quote className="w-8 h-8 text-rose-500/20 absolute -top-3 -left-2 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed pl-4 border-l-2 border-rose-600/40">
                      "{study.quote}"
                    </p>
                    <div className="mt-3 pl-4 text-[11px] font-mono text-slate-400 font-semibold">
                      — {study.authorTitle}
                    </div>
                  </div>

                  {/* Expandable Challenge & Solution */}
                  {isExpanded && (
                    <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-4 text-xs text-slate-300 leading-relaxed animate-fadeIn">
                      <div>
                        <span className="font-bold text-rose-400 uppercase font-mono tracking-wider block mb-1">
                          The Challenge:
                        </span>
                        <p className="text-slate-300">{study.challenge}</p>
                      </div>
                      <div>
                        <span className="font-bold text-emerald-400 uppercase font-mono tracking-wider block mb-1">
                          Hitech Advisory Solution:
                        </span>
                        <p className="text-slate-300">{study.solution}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => toggleExpand(study.id)}
                    className="flex items-center text-slate-400 hover:text-white transition font-medium"
                  >
                    <span>{isExpanded ? 'Hide Architecture Detail' : 'Read Full Architecture'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5 ml-1" /> : <ChevronDown className="w-3.5 h-3.5 ml-1" />}
                  </button>

                  <button
                    onClick={() => onOpenConsultation(`Case Study Inquiry: ${study.client}`)}
                    className="flex items-center text-rose-400 hover:text-rose-300 font-semibold"
                  >
                    <span>Request Briefing</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
