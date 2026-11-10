import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../ui/MagneticButton';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { CardSpotlight } from '../ui/CardSpotlight';
import { BorderBeam } from '../ui/BorderBeam';

interface CtaBannerProps {
  onOpenDiscuss: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDiscuss }) => {
  const bannerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        banner.querySelector('.cta-inner'),
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: banner,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, banner);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      id="cta"
      className="relative py-14 sm:py-18 bg-white overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <CardSpotlight
          spotlightColor="rgba(210, 41, 49, 0.15)"
          borderColor="rgba(250, 195, 68, 0.4)"
          className="cta-inner relative rounded-3xl bg-gradient-to-br from-[#020626] via-[#040C38] to-[#020626] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/10 text-center flex flex-col items-center"
        >
          {/* Border Beam */}
          <BorderBeam size={280} duration={14} colorFrom="#D22931" colorTo="#FAC344" />

          {/* Cyber Grid Background */}
          <div className="absolute inset-0 bg-cyber-grid-dark opacity-35 pointer-events-none" />

          {/* Ambient Blob Gradients */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#D22931]/25 blur-[120px] pointer-events-none animate-ambient-blob-1" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FAC344]/20 blur-[120px] pointer-events-none animate-ambient-blob-2" />

          {/* Eyebrow */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#FAC344] border border-white/15 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D22931] animate-pulse" />
            <span>Start the Conversation</span>
          </div>

          {/* Headline */}
          <h2 className="relative z-10 font-display font-extrabold text-[clamp(2rem,5vw,3.75rem)] text-white leading-[1.12] tracking-tight max-w-4xl">
            What are you trying to solve?
          </h2>

          {/* Subtext */}
          <p className="relative z-10 mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            Share the challenge. A senior consultant will come back to you within **RESPONSE TIME**, with questions worth answering, not a sales pitch.
          </p>

          {/* CTA Buttons */}
          <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <MagneticButton
              variant="primary"
              onClick={onOpenDiscuss}
              className="text-sm font-bold uppercase tracking-wider !py-4 !px-8 shadow-xl hover:shadow-2xl"
            >
              <span>Discuss a Challenge</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span>Explore All Solutions</span>
            </Link>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
};
