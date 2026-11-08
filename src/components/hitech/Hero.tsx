import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { hero } = hitechContent;

  return (
    <section id="top" className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-white overflow-hidden">
      {/* Background subtle grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40" 
        style={{
          backgroundImage: 'radial-gradient(#D9E0E6 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0B7A7C]" />
              <span className="text-eyebrow font-semibold">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="text-h1">
              {hero.h1}
            </h1>

            <p className="text-body-lg text-[#3A4A5A] font-normal leading-relaxed">
              {hero.supporting}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenContact}
                className="btn-primary"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href="#solutions"
                className="btn-secondary group"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick Proof Strip */}
            <div className="pt-6 border-t border-[#D9E0E6] flex flex-wrap items-center gap-y-2 gap-x-8 text-xs text-[#3A4A5A]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#0B1F33]">Headquartered in Kirkland, WA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#0B7A7C]">●</span>
                <span>Platform-Neutral</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#0B7A7C]">●</span>
                <span>Advise &amp; Deliver</span>
              </div>
            </div>
          </div>

          {/* Right Column: Monoline Connecting-Lines Motif (Problems Connected to Solutions) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-[#F4F6F8] rounded-2xl border border-[#D9E0E6] p-8 shadow-sm flex flex-col justify-between overflow-hidden">
              {/* Motif SVG Network Graph */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connecting Lines */}
                <path d="M70 90 L200 160 L330 110" stroke="#0B1F33" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 4" />
                <path d="M70 230 L200 160 L310 280" stroke="#0B7A7C" strokeWidth="1.5" strokeOpacity="0.4" />
                <path d="M200 160 L200 320" stroke="#0B1F33" strokeWidth="1.5" strokeOpacity="0.25" />
                <path d="M120 310 L200 320 L280 310" stroke="#0B7A7C" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="3 3" />
                
                {/* Node Circles */}
                <circle cx="200" cy="160" r="18" fill="#FFFFFF" stroke="#0B7A7C" strokeWidth="2.5" />
                <circle cx="200" cy="160" r="6" fill="#0B7A7C" />

                <circle cx="70" cy="90" r="8" fill="#FFFFFF" stroke="#0B1F33" strokeWidth="1.5" />
                <circle cx="330" cy="110" r="8" fill="#FFFFFF" stroke="#0B1F33" strokeWidth="1.5" />
                <circle cx="70" cy="230" r="8" fill="#FFFFFF" stroke="#0B7A7C" strokeWidth="1.5" />
                <circle cx="310" cy="280" r="8" fill="#FFFFFF" stroke="#0B7A7C" strokeWidth="1.5" />
                <circle cx="200" cy="320" r="10" fill="#FFFFFF" stroke="#0B1F33" strokeWidth="2" />
              </svg>

              {/* Foreground Node Labels - Architectural & Editorial */}
              <div className="relative z-10 flex justify-between items-start text-[11px] font-semibold text-[#0B1F33]">
                <div className="px-2.5 py-1 rounded bg-white border border-[#D9E0E6] shadow-2xs">
                  Strategy &amp; Roadmap
                </div>
                <div className="px-2.5 py-1 rounded bg-white border border-[#D9E0E6] shadow-2xs">
                  Enterprise Data
                </div>
              </div>

              {/* Central Hub Node */}
              <div className="relative z-10 self-center text-center my-auto">
                <div className="inline-block px-3 py-1.5 rounded-md bg-[#0B1F33] text-white text-xs font-semibold shadow-md">
                  Single Accountable Team
                </div>
                <div className="text-[11px] font-medium text-[#3A4A5A] mt-1.5">
                  Problems Connected to Working Results
                </div>
              </div>

              {/* Bottom Nodes */}
              <div className="relative z-10 flex justify-between items-end text-[11px] font-semibold text-[#0B1F33]">
                <div className="px-2.5 py-1 rounded bg-white border border-[#0B7A7C]/40 text-[#0B7A7C] shadow-2xs">
                  Cloud &amp; Security
                </div>
                <div className="px-2.5 py-1 rounded bg-white border border-[#0B7A7C]/40 text-[#0B7A7C] shadow-2xs">
                  AI in Production
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
