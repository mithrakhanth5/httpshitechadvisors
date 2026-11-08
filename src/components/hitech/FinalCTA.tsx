import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  const { finalCta, contactInfo } = hitechContent;

  return (
    <section className="section-spacing bg-[#0B1F33] text-white relative overflow-hidden border-t border-[#0B1F33]">
      {/* Background subtle radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #0B7A7C 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          {finalCta.headline}
        </h2>

        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          {finalCta.line}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="btn-primary text-base px-8 h-12 shadow-lg"
          >
            <span>{finalCta.button}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-white/60">
          <Clock className="w-3.5 h-3.5 text-[#0B7A7C]" />
          <span>Typical response time: within {contactInfo.responseTime}</span>
        </div>
      </div>
    </section>
  );
};
