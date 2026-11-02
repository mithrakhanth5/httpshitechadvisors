import React from 'react';
import { Link } from 'react-router-dom';
import { AiMaturityCalculator } from '../components/AiMaturityCalculator';
import { Zap } from 'lucide-react';

interface AiAssessmentPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const AiAssessmentPage: React.FC<AiAssessmentPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="py-12 bg-slate-950">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-rose-400 font-semibold">AI &amp; Cloud Diagnostic</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Zap className="w-3.5 h-3.5 text-rose-500" />
            <span>Interactive Diagnostic Engine</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Enterprise AI &amp; Cloud <span className="text-rose-500">Maturity Benchmark</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Assess where your technical infrastructure stands today. Identify hidden operational bottlenecks and receive immediate, actionable architecture recommendations.
          </p>
        </div>
      </div>

      {/* Diagnostic Calculator Component */}
      <AiMaturityCalculator onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
