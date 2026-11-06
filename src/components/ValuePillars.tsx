import React from 'react';
import { motion } from 'motion/react';
import { VALUE_PILLARS } from '../data/siteData';
import { ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';

interface ValuePillarsProps {
  onOpenConsultation?: () => void;
}

export const ValuePillars: React.FC<ValuePillarsProps> = ({ onOpenConsultation }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 1:
        return <Zap className="w-5 h-5 text-[#D2232A]" />;
      case 2:
        return <Users className="w-5 h-5 text-sky-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#D2232A]" />;
    }
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider">
              <span>Why Hitech Advisors</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
              One partner from the decision to the delivery.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Most firms either advise or implement. We do both, and we stay accountable for both. We start with your business problem, recommend the right combination of strategy, systems, data, security, engineering and AI, and then deliver it — with the right Hitech team for the work.
            </p>
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white font-bold text-sm transition shadow-md shadow-red-900/20 cursor-pointer"
              >
                <span>Discuss a Challenge</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right 3 Value Pillars with Staggered Motion */}
          <div className="lg:col-span-7 space-y-4">
            {VALUE_PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:bg-white transition-all duration-200 flex items-start space-x-5 cursor-default group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs group-hover:scale-105 transition-transform">
                  {getIcon(idx)}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold text-[#D2232A]">{pillar.number}</span>
                    <h3 className="text-lg font-bold text-[#0B1F33] tracking-tight font-sans group-hover:text-[#D2232A] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};