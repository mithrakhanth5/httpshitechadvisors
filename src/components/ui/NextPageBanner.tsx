import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TiltCard } from './TiltCard';

interface NextPageBannerProps {
  currentStage: string;
  nextTitle: string;
  nextPath: string;
  description: string;
}

export const NextPageBanner: React.FC<NextPageBannerProps> = ({
  currentStage,
  nextTitle,
  nextPath,
  description,
}) => {
  return (
    <div className="py-10 sm:py-12 bg-[#EBF2F7] border-t border-[#DCE4EC]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <Link to={nextPath} className="group block">
          <TiltCard
            maxTilt={4}
            scale={1.01}
            showBorderBeam={true}
            borderBeamDuration={10}
            spotlightColor="rgba(210, 41, 49, 0.08)"
            borderColor="rgba(210, 41, 49, 0.45)"
            className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DCE4EC] hover:border-[#D22931]/60 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Ambient red highlight glow on hover */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D22931]/8 to-transparent rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D22931] mb-2">
                  <Compass className="w-4 h-4 animate-spin-slow" />
                  <span>Next Section &middot; {currentStage}</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#020626] group-hover:text-[#D22931] transition-colors leading-tight">
                  {nextTitle}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#556070] max-w-2xl leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#020626] text-white text-xs font-bold uppercase tracking-wider group-hover:bg-[#D22931] transition-colors shadow-sm self-start md:self-center flex-shrink-0 group-hover:scale-105 duration-200">
                <span>Continue Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </TiltCard>
        </Link>
      </div>
    </div>
  );
};
