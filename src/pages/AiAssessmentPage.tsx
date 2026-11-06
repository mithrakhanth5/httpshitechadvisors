import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AiMaturityCalculator } from '../components/AiMaturityCalculator';
import { Zap } from 'lucide-react';

interface AiAssessmentPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const AiAssessmentPage: React.FC<AiAssessmentPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="py-12 bg-[#F9FBFB] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-500 font-semibold">
          <Link to="/" className="hover:text-[#0B1F33] transition">Home</Link>
          <span>/</span>
          <span className="text-[#D2232A]">AI &amp; Cloud Diagnostic</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#D2232A]" />
            <span>Interactive Diagnostic Engine</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            Enterprise AI &amp; Cloud{' '}
            <span className="text-[#D2232A] italic">Maturity Benchmark</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Assess where your technical infrastructure stands today. Identify hidden operational bottlenecks and receive immediate, actionable architecture recommendations.
          </p>
        </motion.div>
      </div>

      {/* Diagnostic Calculator Component */}
      <AiMaturityCalculator onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

