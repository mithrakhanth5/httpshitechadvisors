import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  Sparkles, 
  Building2,
  ChevronDown,
  ChevronUp,
  ArrowRight
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
    <section id="case-studies" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Enterprise Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0B1F33] tracking-tight font-serif">
            Results our clients can measure.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Real outcomes delivered for enterprise leaders and high-growth innovators across North America and global operations.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, idx) => {
            const isExpanded = expandedId === study.id;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="rounded-3xl p-6 sm:p-8 bg-[#F8FAFC] border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-xl hover:bg-white transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#D2232A] font-bold shadow-xs">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0B1F33] tracking-tight font-sans">
                          {study.client}
                        </h3>
                        <p className="text-xs text-slate-500 font-mono">
                          {study.sector}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[#0B1F33]">
                      {study.tag}
                    </span>
                  </div>

                  {/* Quantified Impact Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-2.5 bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-xs">
                    {study.impactMetrics.map((metric, mIdx) => (
                      <div key={mIdx} className="px-1">
                        <div className="text-xl sm:text-2xl font-black text-[#D2232A] tracking-tight font-serif">
                          {metric.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500 font-bold mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Client Quote */}
                  <div className="mt-6 relative">
                    <Quote className="w-8 h-8 text-[#D2232A]/10 absolute -top-3 -left-2 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed pl-4 border-l-2 border-[#D2232A]">
                      "{study.quote}"
                    </p>
                    <div className="mt-3 pl-4 text-[11px] font-mono text-slate-500 font-bold">
                      — {study.authorTitle}
                    </div>
                  </div>

                  {/* Expandable Challenge & Solution with AnimatePresence */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-5 border-t border-slate-200 space-y-4 text-xs text-slate-600 leading-relaxed">
                          <div>
                            <span className="font-bold text-[#0B1F33] uppercase font-mono tracking-wider block mb-1">
                              The Challenge:
                            </span>
                            <p>{study.challenge}</p>
                          </div>
                          <div>
                            <span className="font-bold text-[#D2232A] uppercase font-mono tracking-wider block mb-1">
                              The Delivered Solution:
                            </span>
                            <p>{study.solution}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Controls */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(study.id)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-700 hover:text-[#0B1F33] transition cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Architecture Detail' : 'Read Full Architecture'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenConsultation(`Case Study: ${study.client}`)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#D2232A] hover:text-[#B71C22] transition cursor-pointer"
                  >
                    <span>Discuss Similar Case</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};