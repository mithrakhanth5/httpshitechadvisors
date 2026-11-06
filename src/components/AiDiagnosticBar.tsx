import React from 'react';
import { Zap, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

interface AiDiagnosticBarProps {
  onOpenDiagnostic?: () => void;
}

export const AiDiagnosticBar: React.FC<AiDiagnosticBarProps> = ({ onOpenDiagnostic }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onOpenDiagnostic) {
      onOpenDiagnostic();
    } else {
      navigate('/ai-assessment');
    }
  };

  return (
    <div className="bg-[#F8FAFC] border-b border-slate-200/90 py-2 sm:py-2.5 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          onClick={handleClick}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.995 }}
          className="group cursor-pointer rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 px-3.5 sm:px-5 py-2 transition-all duration-200 shadow-xs flex flex-row items-center justify-between gap-3 overflow-hidden"
        >
          {/* Left single-line message (strictly nowrap) */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0 overflow-hidden whitespace-nowrap">
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-red-50 text-[#D2232A] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider shrink-0 border border-red-100">
              <Zap className="w-3 h-3 fill-current" />
              <span>AI Diagnostic</span>
            </span>
            <p className="text-xs sm:text-sm text-slate-700 font-medium truncate whitespace-nowrap">
              <span>Benchmark enterprise AI &amp; data readiness in 3 minutes</span>
              <span className="hidden md:inline text-slate-400 font-normal"> — receive an instant architectural roadmap.</span>
            </p>
          </div>

          {/* Right action button (strictly nowrap) */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0 text-[11px] sm:text-xs font-bold text-[#D2232A] group-hover:text-[#B71C22] bg-slate-50 group-hover:bg-red-50/70 border border-slate-200 group-hover:border-red-200 px-3 py-1 rounded-full transition-colors whitespace-nowrap">
            <Sparkles className="w-3 h-3" />
            <span className="hidden sm:inline">Free Diagnostic</span>
            <span className="sm:hidden">Diagnostic</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};