import React from 'react';
import { motion } from 'motion/react';
import { ENGAGEMENT_STEPS } from '../data/siteData';
import { ArrowRight, Search, Layout, Hammer, Rocket } from 'lucide-react';

interface EngagementTimelineProps {
  onOpenConsultation?: () => void;
}

export const EngagementTimeline: React.FC<EngagementTimelineProps> = ({ onOpenConsultation }) => {
  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case '01': return <Search className="w-5 h-5 text-amber-600" />;
      case '02': return <Layout className="w-5 h-5 text-blue-600" />;
      case '03': return <Hammer className="w-5 h-5 text-[#D2232A]" />;
      case '04': return <Rocket className="w-5 h-5 text-emerald-600" />;
      default: return <Search className="w-5 h-5 text-[#D2232A]" />;
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>Our Engagement Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            How an engagement works.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            From first conversation to measurable business outcome, our four-phase delivery methodology ensures architectural clarity, rapid execution, and lasting internal adoption.
          </p>
        </motion.div>

        {/* 4-Step Grid with Connecting Conduit */}
        <div className="relative">
          {/* Animated Connecting Laser Beam (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-amber-400 via-[#D2232A] to-emerald-500 opacity-30 pointer-events-none z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {ENGAGEMENT_STEPS.map((step, idx) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-slate-300 hover:shadow-xl transition-all duration-200 relative group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {getPhaseIcon(step.phase)}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#D2232A] px-2.5 py-1 rounded-md bg-red-50 border border-red-100">
                      Phase {step.phase}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F33] tracking-tight font-sans group-hover:text-[#D2232A] transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs font-bold text-[#D2232A] mt-1 mb-3">
                    {step.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between font-semibold">
                  <span>Accountable Milestone</span>
                  <span className="text-emerald-700 font-bold">100% SLA</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenConsultation}
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#D2232A] hover:text-[#B71C22] transition cursor-pointer"
          >
            <span>Learn how we structure your project kickoff</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};