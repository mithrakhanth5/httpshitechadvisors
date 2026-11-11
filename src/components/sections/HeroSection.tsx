import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../ui/MagneticButton';
import { StoryAnimation } from '../ui/StoryAnimation';
import { gsap, animate3DTextReveal } from '../../lib/gsap';

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

    const ctx = gsap.context(() => {
      // 1. Eyebrow badge entrance
      gsap.fromTo(
        hero.querySelector('.hero-eyebrow'),
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.85, delay: 0.1, ease: 'power3.out' }
      );

      // 2. Kinetic 3D Text Reveal for Headline
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.hero-word');
        animate3DTextReveal(words, { delay: 0.2, duration: 1.05, stagger: 0.07 });
      }

      // 3. Subtext fade-up reveal
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, delay: 0.5, ease: 'power3.out' }
        );
      }

      // 4. CTA buttons gently float up
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.85, delay: 0.7, ease: 'power3.out' }
        );
      }
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative pt-32 pb-12 sm:pb-14 flex flex-col justify-center items-center text-center overflow-hidden bg-white"
    >
      {/* Subtle Static Cyber Grid Background Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none" />

      {/* Soft Static Ambient Gradient Highlights (No moving background animation) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#D22931]/6 to-[#FAC344]/6 blur-[120px]" />
        <div className="absolute top-[25%] -right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#020626]/5 to-[#D22931]/5 blur-[130px]" />
        <div className="absolute -bottom-[20%] left-[30%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#FAC344]/5 to-[#020626]/3 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 flex flex-col items-center">
        {/* Eyebrow Pill - Sleek High-Tech Badge per Section 8.1 */}
        <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#DCE4EC] shadow-xs mb-8 backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 text-[#D22931]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#020626]">
            Business &amp; Technology Solutions
          </span>
        </div>

        {/* Staggered 3D Text Reveal Headline with Full Descender Clearance for "Strategy" (g & y) */}
        <h1
          ref={headlineRef}
          className="font-display font-extrabold text-[clamp(2.75rem,6.5vw,5.5rem)] text-[#020626] leading-[1.14] tracking-tight max-w-5xl [perspective:1000px] pb-3"
        >
          <span className="hero-word inline-block mr-3 sm:mr-4 will-change-transform">Strategy</span>
          <span className="hero-word inline-block mr-3 sm:mr-4 will-change-transform">That</span>
          <span className="hero-word inline-block will-change-transform">Connects</span>
          <br className="hidden sm:inline" />
          <span className="hero-word inline-block mr-3 sm:mr-4 will-change-transform">to</span>
          <span className="hero-word inline-block text-[#D22931] will-change-transform">
            Execution.
          </span>
        </h1>

        {/* Subtext Fade-Up Container */}
        <div ref={subtextRef} className="mt-8 max-w-3xl">
          <p className="text-base sm:text-lg lg:text-xl text-[#556070] leading-relaxed">
            Hitech Advisors helps companies make the right technology decisions and turn them into working results across business applications, data, cybersecurity, IT operations, AI and engineering. One accountable team, from the first conversation to measurable outcomes.
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

          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#020626] hover:text-[#D22931] bg-white border border-[#DCE4EC] hover:border-[#D22931]/40 py-4 px-7 rounded-xl transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer hover:scale-105"
          >
            <span>Explore Our Solutions</span>
          </Link>
        </div>

        {/* Flagship Enterprise AI & Architecture Storytelling Simulator */}
        <div className="w-full mt-6">
          <StoryAnimation type="home" />
        </div>
      </div>
    </section>
  );
};

