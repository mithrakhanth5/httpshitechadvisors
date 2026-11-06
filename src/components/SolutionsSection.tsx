import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SOLUTIONS } from '../data/siteData';
import { 
  Layers, 
  Database, 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  BarChart3,
  Network
} from 'lucide-react';

interface SolutionsSectionProps {
  onOpenConsultation: (solutionName?: string) => void;
  onNavigateSolution?: (slug: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ 
  onOpenConsultation,
  onNavigateSolution 
}) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(SOLUTIONS[0].id);

  const activeSolution = SOLUTIONS.find((s) => s.id === activeSolutionId) || SOLUTIONS[0];

  const getSolutionIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Layers': return <Layers className={className} />;
      case 'Database': return <Database className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Cloud': return <Cloud className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      default: return <Cpu className={className} />;
    }
  };

  return (
    <section id="solutions" className="py-24 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What We Solve</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            Solutions for the problems that{' '}
            <span className="text-[#D2232A] italic">
              cross technology lines.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            A CRM problem is often a data problem. A security problem is often an IT operations problem. An AI ambition is usually all of them. We organize our work across five areas — and connect them whenever your challenge needs it.
          </p>
        </motion.div>

        {/* 5 Solution Switcher Tabs */}
        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-2 p-1.5 bg-slate-200/60 rounded-2xl mb-8 max-w-full pb-2 md:pb-1.5 scrollbar-none">
          {SOLUTIONS.map((solution) => {
            const isSelected = solution.id === activeSolutionId;
            return (
              <button
                key={solution.id}
                onClick={() => setActiveSolutionId(solution.id)}
                className={`relative flex-shrink-0 flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? 'text-white'
                    : 'text-slate-700 hover:text-[#0B1F33] hover:bg-white/60'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSolutionTab"
                    className="absolute inset-0 bg-[#0B1F33] rounded-xl shadow-md z-0"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  {getSolutionIcon(solution.iconName, "w-4 h-4")}
                  <span className="truncate">{solution.shortTitle}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Solution Details Showcase Bento with Smooth AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#D2232A]">
                    {getSolutionIcon(activeSolution.iconName, "w-6 h-6")}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] tracking-tight font-sans">
                      {activeSolution.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D2232A] font-semibold">
                      {activeSolution.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed">
                  {activeSolution.description}
                </p>

                {/* Quantified Outcome Metric */}
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-[#D2232A] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#0B1F33] font-semibold">
                    {activeSolution.metrics}
                  </span>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Core Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeSolution.deliverables.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenConsultation(activeSolution.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white font-bold text-sm transition shadow-md shadow-red-900/20 cursor-pointer"
                  >
                    <span>Discuss a Challenge</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                  {onNavigateSolution && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onNavigateSolution(activeSolution.slug)}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1F33] border border-slate-200 text-xs font-semibold transition cursor-pointer"
                    >
                      <span>View Solution Architecture</span>
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Right Column: Platform-Neutral Architecture Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-5">
                <div className="flex items-center space-x-2 text-xs font-mono text-emerald-700 uppercase tracking-wider font-bold">
                  <Network className="w-4 h-4" />
                  <span>Platform-Neutral Engineering</span>
                </div>

                <h4 className="text-lg font-bold text-[#0B1F33]">
                  Right Technology, Right Scale
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  We are completely vendor-agnostic. We evaluate and integrate the ecosystem that genuinely matches your existing stack, team maturity, and capital efficiency.
                </p>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="text-[11px] font-mono uppercase text-slate-500 font-bold mb-1.5">
                    Ecosystem Depth &amp; Integrations
                  </div>
                  <div className="text-xs text-[#0B1F33] font-medium leading-relaxed">
                    {activeSolution.examples}
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500 flex items-center justify-between border-t border-slate-200">
                  <span>Audience Focus:</span>
                  <span className="font-bold text-[#0B1F33]">{activeSolution.audience}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};