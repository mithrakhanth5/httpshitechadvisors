import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { HeroConnectedNetwork } from '../animations/HeroConnectedNetwork';
import { gsap, SYM_EASE, animateMaskedLines } from '../../lib/gsap';

interface HeroSectionProps {
  onOpenDiscuss: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiscuss }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subtextRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const cleanHeading = animateMaskedLines(headlineRef.current, {
      immediate: true,
      delay: 0.14,
      duration: 0.95,
      stagger: 0.12,
    });

    const ctx = gsap.context(() => {
      // 1. Eyebrow badge pop-in (Symmetry overshoot ease)
      gsap.fromTo(
        hero.querySelector('.hero-eyebrow'),
        { opacity: 0, y: -14, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: 0.05, ease: SYM_EASE.pop }
      );

      // 2. Subtext entrance
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.34, ease: SYM_EASE.snappy }
        );
      }

      // 3. CTA buttons entrance
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.78, delay: 0.44, ease: SYM_EASE.snappy }
        );
      }
    }, hero);

    return () => {
      cleanHeading();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative pt-32 pb-12 sm:pb-14 flex flex-col justify-center items-center text-center overflow-hidden bg-white min-h-[90vh]"
    >
      {/* Background Interactive Connected Strategy Network Animation */}
      <HeroConnectedNetwork />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#DCE4EC] shadow-xs mb-8 backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 text-[#D22931]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#020626]">
            Business &amp; Technology Solutions
          </span>
        </div>

        {/* Headline with GSAP SplitText Line Mask Reveal */}
        <h1
          ref={headlineRef}
          className="font-display font-extrabold text-[clamp(2.5rem,6.4vw,5.4rem)] text-[#020626] leading-[1.12] tracking-tight max-w-5xl pb-2"
        >
          <span>Strategy That Connects</span>
          <br className="hidden sm:inline" />{' '}
          <span>
            to <span className="text-[#D22931]">Execution.</span>
          </span>
        </h1>

        {/* Subtext Fade-Up Container */}
        <div ref={subtextRef} className="mt-8 max-w-3xl">
          <p className="text-base sm:text-lg lg:text-xl text-[#556070] leading-relaxed">
            Hitech Advisors helps companies make the right technology decisions and turn them into working results across business applications, data, cybersecurity, IT operations, AI and engineering. One accountable team, from the first conversation to measurable outcomes.
          </p>
        </div>

        {/* Symmetry Tactile CTA Group */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          <button
            type="button"
            onClick={onOpenDiscuss}
            className="sym-btn inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl bg-[#D22931] hover:bg-[#b52027] text-white shadow-lg hover:shadow-2xl cursor-pointer"
          >
            <span>Discuss a Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            to="/solutions"
            className="sym-btn inline-flex items-center gap-2 text-sm font-semibold text-[#020626] hover:text-[#D22931] bg-white border border-[#DCE4EC] hover:border-[#D22931]/40 py-4 px-7 rounded-xl shadow-2xs hover:shadow-md cursor-pointer"
          >
            <span>Explore Our Solutions</span>
          </Link>
        </div>

        {/* Verified Enterprise Proof Points Strip */}
        <div className="mt-14 pt-8 border-t border-[#DCE4EC]/70 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#020626] tracking-tight">
              <AnimatedCounter value={10} suffix="+" duration={1.8} />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D22931] mt-1">
              Years in Industry
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#020626] tracking-tight">
              <AnimatedCounter value={100} suffix="+" duration={2.0} />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D22931] mt-1">
              Completed Projects
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#020626] tracking-tight">
              <AnimatedCounter value={95} suffix="%" duration={2.0} />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D22931] mt-1">
              Client &amp; Talent Retention
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#020626] tracking-tight">
              <AnimatedCounter value={3} suffix="x" duration={1.6} />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D22931] mt-1">
              Faster Delivery Velocity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

