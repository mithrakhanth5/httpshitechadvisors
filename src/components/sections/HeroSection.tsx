import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { gsap } from '../../lib/gsap';
import { CyberCanvas } from '../ui/CyberCanvas';

interface HeroSectionProps {
  onOpenDiscuss: () => void;
  onOpenBriefing?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiscuss }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subtextRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      // 1. Eyebrow badge entrance
      gsap.fromTo(
        hero.querySelector('.hero-eyebrow'),
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' }
      );

      // 2. Headline staggered word/line reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.hero-word');
        gsap.fromTo(
          words,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
            delay: 0.2,
            ease: 'power3.out',
          }
        );
      }

      // 3. Subtext fade-up reveal
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.85, delay: 0.5, ease: 'power3.out' }
        );
      }

      // 4. CTA buttons gently float up
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.65, ease: 'power3.out' }
        );
      }
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-[88vh] pt-36 pb-20 flex flex-col justify-center items-center text-center overflow-hidden bg-white"
    >
      {/* Interactive High-Tech Cyber Particle Matrix Canvas */}
      <CyberCanvas className="opacity-80" particleCount={60} connectDistance={125} />

      {/* Subtle Cyber Grid Background Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60 pointer-events-none" />

      {/* Soft Ambient Gradient / Blob Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#D22931]/8 to-[#FAC344]/8 blur-[120px] animate-ambient-blob-1" />
        <div className="absolute top-[25%] -right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#020626]/6 to-[#D22931]/6 blur-[130px] animate-ambient-blob-2" />
        <div className="absolute -bottom-[20%] left-[30%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#FAC344]/6 to-[#020626]/4 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 flex flex-col items-center">
        {/* Eyebrow Pill - Sleek High-Tech Badge */}
        <div className="hero-eyebrow inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-[#EAEDF1] shadow-xs mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D22931] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D22931]"></span>
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#020626] flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-[#D22931]" />
            Enterprise Systems &amp; AI Engineering &middot; Seattle &amp; Global
          </span>
        </div>

        {/* Staggered Text Reveal Headline */}
        <h1
          ref={headlineRef}
          className="font-display font-extrabold text-[clamp(2.75rem,6.5vw,5.5rem)] text-[#020626] leading-[1.08] tracking-tight max-w-5xl"
        >
          <span className="inline-block overflow-hidden mr-3">
            <span className="hero-word inline-block will-change-transform">Strategy</span>
          </span>
          <span className="inline-block overflow-hidden mr-3">
            <span className="hero-word inline-block will-change-transform">That</span>
          </span>
          <span className="inline-block overflow-hidden mr-3">
            <span className="hero-word inline-block will-change-transform">Connects</span>
          </span>
          <br className="hidden sm:inline" />
          <span className="inline-block overflow-hidden mr-3">
            <span className="hero-word inline-block will-change-transform">to</span>
          </span>
          <span className="inline-block overflow-hidden mr-3">
            <span className="hero-word inline-block text-[#D22931] will-change-transform">
              Execution.
            </span>
          </span>
        </h1>

        {/* Subtext Fade-Up Container */}
        <div ref={subtextRef} className="mt-8 max-w-3xl">
          <p className="text-base sm:text-lg lg:text-xl text-[#556070] leading-relaxed">
            Hitech Advisors helps companies make the right technology decisions and turn them into working results &mdash; across business applications, data, cybersecurity, IT operations, AI and engineering. One accountable team, from the first conversation to measurable outcomes.
          </p>
        </div>

        {/* Magnetic CTA Group */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          <MagneticButton
            variant="primary"
            onClick={onOpenDiscuss}
            className="text-sm font-bold uppercase tracking-wider !py-4 !px-8 shadow-lg hover:shadow-2xl"
          >
            <span>Discuss a Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <a
            href="#solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#020626] hover:text-[#D22931] bg-white border border-[#EAEDF1] hover:border-[#D22931]/40 py-4 px-7 rounded-xl transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
          >
            <span>Explore Our Solutions</span>
          </a>
        </div>
      </div>
    </section>
  );
};

