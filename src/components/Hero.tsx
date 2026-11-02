import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Layers
} from 'lucide-react';
import { SITE_STATS } from '../data/siteData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-radial-glow">
      {/* Background Grid Pattern and Ambient Ambient Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-rose-600/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Floating Pill Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-lg shadow-black/40">
            <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Pacific Northwest AI &amp; Enterprise Advisory
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-rose-400 font-mono">Kirkland, WA</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            We Are Experts{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-red-400">
              At Engaging Experts
            </span>
            <br />
            <span className="text-slate-200">On Behalf of Our Clients</span>
          </h1>

          {/* Subtitle / Philosophy */}
          <div className="mt-6 flex items-center justify-center space-x-2 text-rose-400 font-medium text-lg sm:text-xl">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <p className="tracking-wide">AI Provides the Baseline. <span className="text-white font-semibold underline decoration-rose-500 decoration-2 underline-offset-4">We Provide the Delta.</span></p>
          </div>

          {/* Value Proposition Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Hitech Advisors designs and executes tailored enterprise architectures, autonomous IT systems, and embedded technical leadership. We bridge the critical gap between raw AI potential and production business impact.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-700 to-red-800 rounded-full hover:from-rose-500 hover:to-red-700 shadow-xl shadow-rose-950/50 hover:shadow-rose-600/40 hover:-translate-y-0.5 transition-all duration-200 group border border-rose-400/30"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('assessment')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-rose-500/50 rounded-full hover:bg-slate-800/90 hover:text-white transition-all duration-200 shadow-lg"
            >
              <Zap className="w-4 h-4 mr-2 text-rose-400" />
              <span>Interactive AI Diagnostic</span>
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-base font-medium text-slate-400 hover:text-white transition-colors"
            >
              <span>Explore Capabilities</span>
            </button>
          </div>

          {/* Quick Credibility Checklist */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero-Downtime Migration Track Record</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Embedded Senior Squads &amp; Fractional CTO</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>SOC2, HIPAA &amp; FedRAMP Alignment</span>
            </div>
          </div>
        </div>

        {/* Floating High-Tech Architecture Preview Card */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Top terminal-style bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 font-mono text-slate-400">hitech-advisory-framework.ai</span>
              </div>
              <div className="flex items-center space-x-4 font-mono text-[11px]">
                <span className="text-emerald-400 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  SYSTEM HEALTH: 100%
                </span>
                <span className="hidden sm:inline text-slate-500">REGION: US-WEST-2 (KIRKLAND)</span>
              </div>
            </div>

            {/* Architecture Grid Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800/70 hover:border-slate-700 transition">
                <div className="w-9 h-9 rounded-lg bg-rose-950/60 border border-rose-800/50 flex items-center justify-center text-rose-400 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-sm">Resilient Cloud &amp; Security</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Enterprise zero-trust guardrails, multi-cloud FinOps optimization, and disaster recovery.
                </p>
                <div className="mt-3 text-[11px] font-mono text-rose-400 bg-rose-950/30 px-2.5 py-1 rounded inline-block">
                  Metric: 99.999% SLA
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800/70 hover:border-slate-700 transition">
                <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-3">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-sm">Production AI &amp; Software</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  From RAG architectures to custom edge algorithms deployed without server bottlenecks.
                </p>
                <div className="mt-3 text-[11px] font-mono text-blue-400 bg-blue-950/30 px-2.5 py-1 rounded inline-block">
                  Metric: 3x Velocity Scale
                </div>
              </div>

              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800/70 hover:border-slate-700 transition">
                <div className="w-9 h-9 rounded-lg bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-purple-400 mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold text-sm">Embedded Elite Talent</h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Specialized senior engineers and advisors embedded directly inside your team.
                </p>
                <div className="mt-3 text-[11px] font-mono text-purple-400 bg-purple-950/30 px-2.5 py-1 rounded inline-block">
                  Metric: 94% Retention
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Band */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-y border-slate-800/80 py-10">
          {SITE_STATS.map((stat, idx) => (
            <div key={idx} className="px-3">
              <div className="text-3xl sm:text-5xl font-black text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm font-semibold text-rose-400">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-400 max-w-[200px] mx-auto hidden sm:block">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
