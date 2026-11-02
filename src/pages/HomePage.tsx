import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ClientLogos } from '../components/ClientLogos';
import { NetworkGraphAnimation } from '../components/NetworkGraphAnimation';
import { ServicesBento } from '../components/ServicesBento';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { AiMaturityCalculator } from '../components/AiMaturityCalculator';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { CORE_VALUES } from '../data/siteData';

interface HomePageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero
        onNavigate={(id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenConsultation={() => onOpenConsultation('Executive Consultation')}
      />

      {/* Interactive Network Graph Animation Hub */}
      <section className="py-6 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400 bg-rose-950/60 px-3 py-1 rounded-full">
              Dynamic Advisory Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Connecting Enterprise Needs to Elite Technical Minds
            </h2>
          </div>
          <NetworkGraphAnimation />
        </div>
      </section>

      {/* Enterprise Client Logos */}
      <ClientLogos />

      {/* Services Bento Grid */}
      <ServicesBento onOpenConsultation={onOpenConsultation} />

      {/* Interactive AI Diagnostic Benchmark */}
      <AiMaturityCalculator onOpenConsultation={onOpenConsultation} />

      {/* Case Studies & Proven Proof */}
      <CaseStudiesSection onOpenConsultation={onOpenConsultation} />

      {/* Approach & Heritage Teaser */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Strategy • Expertise • Execution</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Strategic Thinking.{' '}
                <span className="text-rose-500">Practical Execution.</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Technology alone doesn't create competitive advantage—execution does. Every engagement begins with understanding your business objectives, operational challenges, and long-term vision.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Bespoke pods assembled from senior veteran practitioners',
                  'Zero vendor bias; we protect your architectural independence',
                  'Rapid sprint embedding within 14 business days',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs sm:text-sm transition shadow-lg shadow-rose-950/50"
                >
                  <span>Read Our Full Story &amp; Team</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_VALUES.slice(0, 4).map((val, idx) => (
                <div key={idx} className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition">
                  <div className="text-rose-400 font-bold text-base mb-1">{val.title}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
