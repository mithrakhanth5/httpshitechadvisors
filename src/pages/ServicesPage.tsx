import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Database,
  Cloud,
  Compass,
  Code,
  Network
} from 'lucide-react';
import { SOLUTIONS, CAPABILITIES } from '../data/siteData';

interface ServicesPageProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const { serviceId } = useParams();
  const location = useLocation();

  const isInitialCapability = 
    location.pathname.startsWith('/capabilities') ||
    Boolean(serviceId && CAPABILITIES.some((c) => c.id === serviceId || c.slug === serviceId));

  const [activeTab, setActiveTab] = useState<'solutions' | 'capabilities'>(
    isInitialCapability ? 'capabilities' : 'solutions'
  );
  
  const initialSolId = serviceId || SOLUTIONS[0].id;
  const [activeSolId, setActiveSolId] = useState<string>(
    SOLUTIONS.some((s) => s.id === initialSolId || s.slug === initialSolId) 
      ? (SOLUTIONS.find((s) => s.id === initialSolId || s.slug === initialSolId)?.id || SOLUTIONS[0].id)
      : SOLUTIONS[0].id
  );

  useEffect(() => {
    if (location.pathname.startsWith('/capabilities') || (serviceId && CAPABILITIES.some((c) => c.id === serviceId || c.slug === serviceId))) {
      setActiveTab('capabilities');
      if (serviceId) {
        setTimeout(() => {
          const el = document.getElementById(serviceId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 150);
      }
    } else if (serviceId) {
      const match = SOLUTIONS.find((s) => s.id === serviceId || s.slug === serviceId);
      if (match) {
        setActiveSolId(match.id);
        setActiveTab('solutions');
      }
    } else if (location.pathname.startsWith('/solutions')) {
      setActiveTab('solutions');
    }
  }, [serviceId, location.pathname]);

  const activeSolution = SOLUTIONS.find((s) => s.id === activeSolId) || SOLUTIONS[0];

  const getIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case 'Layers': return <Layers className={className} />;
      case 'Database': return <Database className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Cloud': return <Cloud className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'Code': return <Code className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'Users': return <Users className={className} />;
      default: return <Cpu className={className} />;
    }
  };

  return (
    <div className="py-12 bg-[#F9FBFB] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-500 font-semibold">
          <Link to="/" className="hover:text-[#0B1F33] transition">Home</Link>
          <span>/</span>
          <span className="text-[#D2232A]">Solutions &amp; Capabilities</span>
        </nav>
      </div>

      {/* Main Page Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cross-Category Enterprise Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            Solutions That Connect{' '}
            <span className="text-[#D2232A] italic">
              Strategy to Delivery.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We operate one level above individual software vendors. We start with the business problem, recommend the right architecture across strategy, systems, data, security, engineering, and AI, and stay accountable until the result is real.
          </p>
        </motion.div>

        {/* Tab Toggle: Solutions vs Capabilities */}
        <div className="mt-10 flex space-x-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('solutions')}
            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              activeTab === 'solutions'
                ? 'text-[#0B1F33]'
                : 'text-slate-500 hover:text-[#0B1F33]'
            }`}
          >
            {activeTab === 'solutions' && (
              <motion.span
                layoutId="servicesMainTab"
                className="absolute inset-0 bg-white border border-slate-200 shadow-xs rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            5 Core Solution Areas
          </button>
          <button
            onClick={() => setActiveTab('capabilities')}
            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              activeTab === 'capabilities'
                ? 'text-[#0B1F33]'
                : 'text-slate-500 hover:text-[#0B1F33]'
            }`}
          >
            {activeTab === 'capabilities' && (
              <motion.span
                layoutId="servicesMainTab"
                className="absolute inset-0 bg-white border border-slate-200 shadow-xs rounded-full -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            4 Delivery Capabilities
          </button>
        </div>

        {activeTab === 'solutions' ? (
          <div>
            {/* Practice Area Selector Bar */}
            <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-slate-100/90 border border-slate-200 rounded-2xl">
              {SOLUTIONS.map((s) => {
                const isSelected = s.id === activeSolId;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSolId(s.id)}
                    className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                      isSelected
                        ? 'text-white'
                        : 'text-slate-600 hover:text-[#0B1F33]'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="activeSolHighlight"
                        className="absolute inset-0 bg-[#0B1F33] rounded-xl shadow-xs -z-10"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className={isSelected ? 'text-red-400' : 'text-slate-500'}>
                      {getIcon(s.iconName, "w-4 h-4")}
                    </span>
                    <span>{s.shortTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Solution Deep Dive Showcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 rounded-3xl p-6 sm:p-10 bg-white border border-slate-200 shadow-sm relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Narrative Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center space-x-2 text-[#D2232A] font-mono text-xs uppercase font-bold tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#D2232A] animate-pulse"></span>
                      <span>Active Practice Focus</span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-4xl font-semibold text-[#0B1F33] tracking-tight font-serif">
                        {activeSolution.title}
                      </h2>
                      <p className="text-sm sm:text-base text-[#D2232A] font-semibold mt-1">
                        {activeSolution.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-700 text-base leading-relaxed">
                      {activeSolution.description}
                    </p>

                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                      <div className="text-xs font-mono uppercase text-[#D2232A] font-bold mb-1">
                        Quantified Business Outcome
                      </div>
                      <div className="text-sm text-[#0B1F33] font-semibold">
                        {activeSolution.metrics}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                        Core Engineering Deliverables
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeSolution.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onOpenConsultation(`Inquiry regarding ${activeSolution.title}`)}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white bg-[#D2232A] hover:bg-[#B71C22] text-sm shadow-md transition"
                      >
                        <span>Discuss a Challenge</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Right Column: Platform-Neutral Architecture */}
                  <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0B1F33] text-white border border-slate-800 space-y-5 shadow-lg">
                    <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                      <Network className="w-4 h-4" />
                      <span>Vendor-Neutral Range</span>
                    </div>

                    <h3 className="text-xl font-serif font-semibold text-white">
                      Built for Your Exact Scale
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      We hold no single-vendor quota. We evaluate and implement across the modern software and cloud spectrum based strictly on performance, total cost of ownership, and team adoption.
                    </p>

                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-[11px] font-mono uppercase text-slate-400 mb-2 font-bold">
                        Typical Platform Ecosystems
                      </div>
                      <div className="text-xs text-slate-200 font-mono leading-relaxed">
                        {activeSolution.examples}
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-slate-400 flex items-center justify-between border-t border-slate-800/80">
                      <span>Executive Target:</span>
                      <span className="font-semibold text-white">{activeSolution.audience}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Capabilities Grid */
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITIES.map((cap, idx) => {
              const isTargeted = Boolean(serviceId && (serviceId === cap.id || serviceId === cap.slug));
              return (
                <motion.div
                  key={cap.id}
                  id={cap.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`p-8 rounded-3xl bg-white border transition-all flex flex-col justify-between scroll-mt-28 ${
                    isTargeted 
                      ? 'border-[#D2232A] ring-2 ring-[#D2232A]/20 shadow-lg bg-red-50/10' 
                      : 'border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#D2232A]">
                      {getIcon(cap.iconName, "w-6 h-6")}
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#0B1F33] tracking-tight">
                      {cap.title}
                    </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cap.line}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {cap.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                  <div className="pt-6">
                    <button
                      onClick={() => onOpenConsultation(`Engagement for ${cap.title}`)}
                      className="inline-flex items-center space-x-2 text-xs font-semibold text-[#D2232A] hover:text-[#B71C22] transition"
                    >
                      <span>Discuss engagement model</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
