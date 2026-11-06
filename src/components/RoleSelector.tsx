import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BUYER_ROLES } from '../data/siteData';
import { 
  Briefcase, 
  Settings, 
  Cpu, 
  ShieldCheck, 
  Database, 
  TrendingUp, 
  ArrowRight, 
  AlertCircle,
  Target
} from 'lucide-react';

interface RoleSelectorProps {
  onOpenConsultation: (roleTitle?: string) => void;
  onNavigateSolution?: (link: string) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ 
  onOpenConsultation,
  onNavigateSolution 
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(BUYER_ROLES[0].id);

  const activeRole = BUYER_ROLES.find((r) => r.id === selectedRoleId) || BUYER_ROLES[0];

  const getRoleIcon = (id: string, className = "w-5 h-5") => {
    switch (id) {
      case 'ceo': return <Briefcase className={className} />;
      case 'coo': return <Settings className={className} />;
      case 'cto': return <Cpu className={className} />;
      case 'ciso': return <ShieldCheck className={className} />;
      case 'data': return <Database className={className} />;
      case 'gtm': return <TrendingUp className={className} />;
      default: return <Briefcase className={className} />;
    }
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>Executive Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            Start with your role.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Every leadership role experiences technology friction differently. Select your seat to see how Hitech translates strategic priorities into working architecture and accountable execution.
          </p>
        </motion.div>

        {/* Role Selector Tabs with Sliding Motion Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-2 bg-[#F8FAFC] border border-slate-200 rounded-2xl mb-8">
          {BUYER_ROLES.map((role) => {
            const isSelected = role.id === selectedRoleId;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRoleId(role.id)}
                className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl text-center transition-colors cursor-pointer ${
                  isSelected
                    ? 'text-white'
                    : 'text-slate-600 hover:text-[#0B1F33] hover:bg-white/80'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeRoleTab"
                    className="absolute inset-0 bg-[#0B1F33] rounded-xl shadow-md z-0"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <div className={`relative z-10 mb-2 ${isSelected ? 'text-[#D2232A]' : 'text-slate-500'}`}>
                  {getRoleIcon(role.id, "w-5 h-5")}
                </div>
                <span className="relative z-10 text-xs font-bold tracking-tight">{role.role}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Role Interactive Card with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Problem & Mandate */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#D2232A] shadow-xs">
                    {getRoleIcon(activeRole.id)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F33] tracking-tight">
                      {activeRole.title}
                    </h3>
                    <span className="text-xs font-mono text-[#D2232A] font-bold">Tailored Executive Pathway</span>
                  </div>
                </div>

                {/* What keeps them up (pain) */}
                <div className="p-4 rounded-xl bg-white border border-amber-200/80 flex items-start space-x-3 shadow-xs">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono uppercase text-amber-800 font-bold mb-1">
                      What Keeps You Up
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      "{activeRole.pain}"
                    </p>
                  </div>
                </div>

                {/* How Hitech Solves It (focus) */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Executive Focus &amp; Solution
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeRole.focus}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onOpenConsultation(`Executive Briefing: ${activeRole.title}`)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white font-bold text-sm transition shadow-md shadow-red-900/20 cursor-pointer"
                  >
                    <span>Discuss Your Mandate</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                  {onNavigateSolution && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onNavigateSolution(activeRole.recommendedLink)}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0B1F33] border border-slate-200 text-xs font-semibold transition cursor-pointer"
                    >
                      <span>{activeRole.recommendedLabel}</span>
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Right Deliverables Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                  <Target className="w-4 h-4 text-[#D2232A]" />
                  <span>Strategic Roadmap</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-[#0B1F33]">Target Engagement Focus</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{activeRole.focus}</p>
                </div>
                <div className="pt-2 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100">
                  <span>Recommended Practice:</span>
                  <span className="font-bold text-[#D2232A]">{activeRole.recommendedLabel}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};