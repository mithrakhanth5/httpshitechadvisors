import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap
} from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesPageProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const { serviceId } = useParams();
  const initialId = serviceId || SERVICES[0].id;
  const [activeId, setActiveId] = useState<string>(
    SERVICES.some((s) => s.id === initialId) ? initialId : SERVICES[0].id
  );

  const activeService = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

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
    <div className="py-12 bg-slate-950">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-rose-400 font-semibold">What We Do</span>
        </nav>
      </div>

      {/* Main Page Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practice Areas &amp; Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            AI Solutions &amp; <span className="text-rose-500">Technology Services</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We combine deep technical expertise with practical execution to modernize your systems, scale your cloud, and accelerate business growth.
          </p>
        </div>

        {/* Practice Area Selector Bar */}
        <div className="mt-10 flex flex-wrap gap-2.5 p-2 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-md">
          {SERVICES.map((s) => {
            const isSelected = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-950/60'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {getServiceIcon(s.iconName, "w-4 h-4")}
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Practice Deep Dive Showcase */}
        <div className="mt-8 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-rose-400 font-mono text-xs uppercase">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>Active Practice Focus</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {activeService.title}
                </h2>
                <p className="text-sm sm:text-base text-rose-300 font-medium mt-1">
                  {activeService.subtitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>

              {/* Quantified Benchmark */}
              <div className="p-4 rounded-xl bg-slate-900 border border-rose-900/40 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-rose-950 flex items-center justify-center text-rose-400 flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Quantified Advisory Impact</div>
                  <div className="text-sm font-bold text-white">{activeService.metrics}</div>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Engagement Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation(`Service Practice: ${activeService.title}`)}
                  className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs sm:text-sm transition shadow-lg shadow-rose-950/50 flex items-center"
                >
                  <span>Inquire for {activeService.title}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Tech Stack & Topology Column */}
            <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-rose-950 flex items-center justify-center text-rose-400">
                  {getServiceIcon(activeService.iconName, "w-5 h-5")}
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Enterprise Stack</div>
                  <div className="text-sm font-bold text-white">Production Proven</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 uppercase mb-3">
                  Technologies, Tooling &amp; Protocols
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeService.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="font-semibold text-slate-200 flex items-center">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400 mr-1.5" />
                  Our Engagement Delivery Models
                </div>
                <ul className="space-y-1.5 text-[11px] list-disc pl-4 text-slate-300">
                  <li><strong>Embedded Pods:</strong> Full-stack senior pods integrated into your sprints.</li>
                  <li><strong>Fractional Leadership:</strong> Executive CTO/CISO guidance on a dedicated cadence.</li>
                  <li><strong>Fixed-Scope Migrations:</strong> Turnkey delivery with guaranteed SLAs and zero downtime.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Methodology */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400">Execution Framework</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">How We Engage With Clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Deep Discovery', desc: 'Comprehensive technical audit of architecture, codebases, compliance, and team bottlenecks.' },
              { step: '02', title: 'Topology & Roadmap', desc: 'Blueprint designed for scalability, zero-trust security, and cost efficiency.' },
              { step: '03', title: 'Embedded Execution', desc: 'Senior advisors work alongside in-house squads, shipping production code and automated CI/CD.' },
              { step: '04', title: 'Knowledge Transfer', desc: 'Upskilling in-house teams to maintain and evolve capabilities independently.' },
            ].map((m, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800">
                <div className="text-2xl font-black font-mono text-rose-500 mb-2">{m.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
