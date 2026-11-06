import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Database, 
  Lock, 
  RefreshCw, 
  Clock, 
  Award,
  Activity
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenConsultation }) => {
  const [architectureView, setArchitectureView] = useState<'unified' | 'fragmented'>('unified');

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-200">
      {/* Subtle Architectural Grid Motif */}
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none opacity-50"></div>

      {/* Ambient Animated Light Pools */}
      <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-red-500/5 blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-start gap-3 mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-[#D2232A] animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
              Business &amp; Technology Solutions
            </span>
          </div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#D2232A]" />
            <span>Kirkland, Washington</span>
          </div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Independent &amp; Platform-Neutral</span>
          </div>
        </motion.div>

        {/* Dual-Column Executive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Editorial Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl lg:text-[64px] font-semibold tracking-tight text-[#0B1F33] leading-[1.08] font-serif"
            >
              Strategy That Connects{' '}
              <span className="text-[#D2232A] italic">
                to Execution.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-xl sm:text-2xl font-serif text-[#0B1F33]/85 leading-snug"
            >
              Clarity in the decision.{' '}
              <span className="text-[#D2232A] font-semibold underline decoration-rose-300 decoration-2 underline-offset-4">
                Accountability in the delivery.
              </span>
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl"
            >
              We help enterprise leaders make the right technology bets and turn them into resilient, working systems — across enterprise business applications, applied AI &amp; data, cloud infrastructure, product engineering, and cybersecurity. One senior team from boardroom strategy to production release.
            </motion.p>

            {/* CTAs with Micro-Hover Physics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#D2232A] hover:bg-[#B71C22] rounded-full shadow-lg shadow-red-900/20 hover:shadow-red-900/35 transition-all duration-200 group cursor-pointer"
              >
                <span>Discuss a Challenge</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('solutions')}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-[#0B1F33] bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-full transition-all duration-200 shadow-xs cursor-pointer"
              >
                <span>Explore Solutions</span>
              </motion.button>
            </motion.div>

            {/* Trust Reassurance Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium"
            >
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5 text-[#D2232A]" />
                24h Senior Consultant Response
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
                Zero Reseller Commissions
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1.5 text-blue-600" />
                Fortune 500 &amp; Growth Enterprise Track Record
              </span>
            </motion.div>
          </div>

          {/* Right Column: Live Interactive 2D Architecture Engine */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-slate-300">
              {/* Subtle Animated Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-[#D2232A] to-teal-500"></div>

              {/* Matrix Card Header */}
              <div className="flex flex-wrap items-center justify-between pb-5 border-b border-slate-100 gap-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-[#D2232A]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Architecture Engine
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F33] mt-0.5">
                    Enterprise Operating Model
                  </h3>
                </div>

                {/* View Switcher Toggle */}
                <div className="flex items-center p-1 bg-slate-100 rounded-xl">
                  <button
                    onClick={() => setArchitectureView('unified')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center space-x-1 ${
                      architectureView === 'unified'
                        ? 'bg-white text-[#0B1F33] shadow-xs font-bold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Hitech Unified</span>
                  </button>
                  <button
                    onClick={() => setArchitectureView('fragmented')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center space-x-1 ${
                      architectureView === 'fragmented'
                        ? 'bg-white text-rose-700 shadow-xs font-bold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-rose-500" />
                    <span>Fragmented</span>
                  </button>
                </div>
              </div>

              {/* Dynamic View Body with AnimatePresence */}
              <div className="py-5">
                <AnimatePresence mode="wait">
                  {architectureView === 'unified' ? (
                    <motion.div
                      key="unified"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="space-y-3.5"
                    >
                      {/* Unified Node 1 */}
                      <motion.div 
                        whileHover={{ x: 4 }}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3 transition-colors hover:bg-white hover:border-slate-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                              Executive Decision Layer
                            </h4>
                            <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
                              Connected
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            Platform-neutral technology roadmap tied to EBITDA, capital efficiency, and board KPIs.
                          </p>
                        </div>
                      </motion.div>

                      {/* Animated Connecting Data Conduit */}
                      <div className="flex justify-center -my-1">
                        <div className="w-0.5 h-3 bg-gradient-to-b from-emerald-500 to-blue-500 animate-pulse"></div>
                      </div>

                      {/* Unified Node 2 */}
                      <motion.div 
                        whileHover={{ x: 4 }}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3 transition-colors hover:bg-white hover:border-slate-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Database className="w-4 h-4 text-blue-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                              Unified Data &amp; Systems Fabric
                            </h4>
                            <span className="text-[11px] font-mono text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1 animate-pulse"></span>
                              Real-Time
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            CRM, ERP, and warehouse pipelines harmonized with governed AI agent workflows.
                          </p>
                        </div>
                      </motion.div>

                      {/* Animated Connecting Data Conduit */}
                      <div className="flex justify-center -my-1">
                        <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse"></div>
                      </div>

                      {/* Unified Node 3 */}
                      <motion.div 
                        whileHover={{ x: 4 }}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3 transition-colors hover:bg-white hover:border-slate-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Lock className="w-4 h-4 text-purple-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F33]">
                              Zero-Trust &amp; Cloud Scale
                            </h4>
                            <span className="text-[11px] font-mono text-purple-700 font-semibold bg-purple-50 px-2 py-0.5 rounded flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1 animate-pulse"></span>
                              Automated
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            Built-in security governance, automated CI/CD pipelines, and 99.99% operational uptime.
                          </p>
                        </div>
                      </motion.div>

                      {/* Bottom Result Metric */}
                      <div className="pt-3 flex items-center justify-between text-xs border-t border-slate-100 font-medium">
                        <span className="text-slate-500 flex items-center">
                          <Activity className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                          Business Velocity:
                        </span>
                        <span className="text-emerald-700 font-bold font-mono">
                          +42% Cycle Acceleration
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="fragmented"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="space-y-3.5"
                    >
                      <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                          <RefreshCw className="w-4 h-4 text-rose-600 animate-spin" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900">
                              Disconnected Strategy
                            </h4>
                            <span className="text-[11px] font-mono text-rose-700 font-semibold bg-rose-100 px-2 py-0.5 rounded">
                              Siloed
                            </span>
                          </div>
                          <p className="text-xs text-rose-800/80 mt-1">
                            Advisors hand over slide decks; implementation left to junior staff or disconnected contractors.
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Database className="w-4 h-4 text-rose-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900">
                              Spreadsheet Glue &amp; Data Debt
                            </h4>
                            <span className="text-[11px] font-mono text-rose-700 font-semibold bg-rose-100 px-2 py-0.5 rounded">
                              Friction
                            </span>
                          </div>
                          <p className="text-xs text-rose-800/80 mt-1">
                            Manual reconciliation between CRM, ERP, and ops; AI projects stalled in endless POC phase.
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Lock className="w-4 h-4 text-rose-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900">
                              Vendor Lock-in &amp; Escalating Risk
                            </h4>
                            <span className="text-[11px] font-mono text-rose-700 font-semibold bg-rose-100 px-2 py-0.5 rounded">
                              Exposed
                            </span>
                          </div>
                          <p className="text-xs text-rose-800/80 mt-1">
                            Advisors recommending tech based on partner reseller commissions rather than client fit.
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 flex items-center justify-between text-xs border-t border-slate-100 font-medium">
                        <span className="text-slate-500">Compounding Cost:</span>
                        <span className="text-rose-700 font-bold font-mono">
                          Over-budget &amp; Missed Deadlines
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Card Footer Call to Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Ready to audit your tech stack?
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-[#D2232A] hover:text-[#B71C22] inline-flex items-center group cursor-pointer"
                >
                  <span>Request Stack Review</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Metric & Proof Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
        >
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F33]">
              1 Team
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Boardroom strategy to code execution
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F33]">
              94%
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              On-time delivery without junior bench bloat
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F33]">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Platform-neutral &amp; fiduciary advice
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D2232A]">
              &lt; 24h
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Senior consultant response SLA
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};