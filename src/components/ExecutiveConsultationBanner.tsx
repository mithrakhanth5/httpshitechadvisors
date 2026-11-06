import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface ExecutiveConsultationBannerProps {
  onOpenConsultation: () => void;
}

export const ExecutiveConsultationBanner: React.FC<ExecutiveConsultationBannerProps> = ({ 
  onOpenConsultation 
}) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-3xl bg-[#0B1F33] text-white p-8 sm:p-14 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Accent Glows with continuous pulse */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#D2232A]/20 blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-rose-300 text-xs font-mono uppercase tracking-wider font-semibold">
                <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                <span>24-Hour Senior Consultant SLA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-white leading-tight">
                Have a technology challenge worth solving?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                A senior consultant will respond within 24 hours — with questions worth answering and an architectural perspective, not a generic sales pitch.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-400">
                <span className="flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-400" />
                  Zero vendor reseller commissions
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5 text-[#D2232A]" />
                  Kirkland, WA Headquarters
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Start the Conversation
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Confidential intake directly with a practice leader.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#D2232A] hover:bg-[#B71C22] rounded-full shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
              >
                <span>Discuss a Challenge</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-3 text-xs text-slate-400">
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-300 font-bold">Email Directly</div>
                  <div className="text-slate-200 font-medium mt-0.5 truncate">info@hitechadvisors.com</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-300 font-bold">Headquarters</div>
                  <div className="text-slate-200 font-medium mt-0.5">Kirkland, WA</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};