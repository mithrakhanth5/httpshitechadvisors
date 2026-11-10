import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface PageHeroProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  description: string;
  onOpenDiscuss?: () => void;
  ctaText?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  highlightTitle,
  description,
  onOpenDiscuss,
  ctaText = 'Discuss a Challenge',
}) => {
  return (
    <section className="relative pt-36 pb-16 sm:pb-20 bg-white border-b border-[#DCE4EC] overflow-hidden">
      {/* Subtle Static Cyber Grid Background Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-35 pointer-events-none" />

      {/* Subtle Warm Gradient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[25%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#D22931]/5 to-[#FAC344]/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-[#020626]/4 to-[#D22931]/4 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE4EC] shadow-2xs text-xs font-mono font-bold uppercase tracking-wider text-[#D22931] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>

        {/* Display Headline */}
        <h1 className="font-display font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] text-[#020626] leading-[1.12] tracking-tight max-w-4xl pb-3">
          {title} {highlightTitle && <span className="text-[#D22931]">{highlightTitle}</span>}
        </h1>

        {/* Narrative Description */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg lg:text-xl text-[#556070] leading-relaxed">
          {description}
        </p>

        {/* Quick Action CTA */}
        {onOpenDiscuss && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <MagneticButton
              variant="primary"
              onClick={onOpenDiscuss}
              className="text-xs font-bold uppercase tracking-wider !py-3.5 !px-7 shadow-md"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
};
