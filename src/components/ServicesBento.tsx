import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesBentoProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenConsultation }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const getServiceIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Users': return <Users className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      default: return <Cpu className={className} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/40 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities &amp; Advisory Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Solutions for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-400">
              Modern Enterprise
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Hitech Advisors designs and executes end-to-end architectures tailored to each client's strategic milestones. We do not provide cookie-cutter advice; we embed high-caliber expertise directly into execution.
          </p>
        </div>

        {/* Tab Selectors for Services */}
        <div className="mt-12 flex flex-wrap gap-2.5 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-md">
          {SERVICES.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex items-center space-x-2.5 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-950/50 scale-[1.01]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                {getServiceIcon(service.iconName, "w-4 h-4")}
                <span className="truncate">{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Spotlight Showcase */}
        <div className="mt-8 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/80 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-rose-400 font-mono text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>Pillar Overview</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base text-rose-300 font-medium mt-1">
                  {activeService.subtitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>

              {/* Quantified Benchmark Metric Callout */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-rose-900/30 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-rose-950 flex items-center justify-center text-rose-400 flex-shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Advisory Impact Benchmark</div>
                  <div className="text-sm font-bold text-white">{activeService.metrics}</div>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Scope Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation(activeService.title)}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition shadow-lg shadow-rose-950/50 group"
                >
                  <span>Inquire for {activeService.title}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Tech Architecture Visual Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 rounded-2xl p-6 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-800/50 flex items-center justify-center text-rose-400">
                    {getServiceIcon(activeService.iconName, "w-5 h-5")}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Stack &amp; Ecosystem</div>
                    <div className="text-sm font-bold text-white">Production Proven</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-emerald-400">
                  ENTERPRISE CERTIFIED
                </span>
              </div>

              {/* Stack Pills */}
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase mb-3">Technologies &amp; Frameworks</div>
                <div className="flex flex-wrap gap-2">
                  {activeService.examples.split(',').map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-200"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Advisory Benefit Highlights */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="font-semibold text-slate-200 flex items-center">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400 mr-1.5" />
                  Why Hitech Advisory vs. Traditional Agencies
                </div>
                <p className="leading-relaxed">
                  No junior bench handoffs. You work directly with veteran architects who have built and operated systems at Microsoft, Cisco, and global scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Column Compact Grid for Fast Scanning */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelectedServiceId(s.id)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                s.id === selectedServiceId
                  ? 'bg-slate-900 border-rose-500/80 shadow-lg shadow-rose-950/30'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-rose-950/70 flex items-center justify-center text-rose-400 mb-3">
                {getServiceIcon(s.iconName, "w-4 h-4")}
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">{s.title}</h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {s.subtitle}
              </p>
              <div className="mt-3 flex items-center text-xs font-medium text-rose-400">
                <span>View Details</span>
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
