import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Bot, Database, ShieldCheck } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { ConstellationCanvas } from '../ui/ConstellationCanvas';
import { gsap, animate3DTextReveal } from '../../lib/gsap';

interface HeroSectionProps {
  onOpenDiscuss: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiscuss }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subtextRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const chipsRef = useRef<HTMLDivElement | null>(null);

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

      // 5. Floating Chips Staggered Arrival
      const chips = hero.querySelectorAll('.hero-floating-chip');
      if (chips.length > 0) {
        gsap.fromTo(
          chips,
          { opacity: 0, scale: 0.85, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.1,
            delay: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.4)',
          }
        );

        // Continuous Organic Floating Sine Waves
        chips.forEach((chip, i) => {
          gsap.to(chip, {
            y: i % 2 === 0 ? '-=10' : '+=12',
            rotation: i % 2 === 0 ? 0.8 : -0.8,
            duration: 3 + i * 0.7,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.4,
          });
        });
      }
    }, hero);

    // Mouse Parallax Physics on Floating Chips
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      const chip1 = hero.querySelector('.hero-chip-1');
      const chip2 = hero.querySelector('.hero-chip-2');
      const chip3 = hero.querySelector('.hero-chip-3');

      if (chip1) gsap.to(chip1, { x: relX * 22, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
      if (chip2) gsap.to(chip2, { x: relX * -20, y: relY * -15, duration: 0.7, ease: 'power2.out', overwrite: 'auto' });
      if (chip3) gsap.to(chip3, { x: relX * 16, y: relY * 18, duration: 0.8, ease: 'power2.out', overwrite: 'auto' });
    };

    hero.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-[90vh] pt-36 pb-24 flex flex-col justify-center items-center text-center overflow-hidden bg-white"
    >
      {/* Interactive Constellation Particle Network */}
      <ConstellationCanvas className="opacity-70" particleCount={55} connectDistance={125} />

      {/* Subtle Cyber Grid Background Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-50 pointer-events-none" />

      {/* Soft Ambient Gradient / Blob Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#D22931]/8 to-[#FAC344]/8 blur-[120px] animate-ambient-blob-1" />
        <div className="absolute top-[25%] -right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#020626]/6 to-[#D22931]/6 blur-[130px] animate-ambient-blob-2" />
        <div className="absolute -bottom-[20%] left-[30%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#FAC344]/6 to-[#020626]/4 blur-[110px]" />
      </div>

      {/* Interactive Floating Architecture Badges (Desktop/Tablet) */}
      <div ref={chipsRef} className="absolute inset-0 pointer-events-none max-w-[1400px] mx-auto">
        {/* Chip 1: AI */}
        <div className="hero-floating-chip hero-chip-1 absolute top-[28%] left-[3%] xl:left-[6%] hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCE4EC] shadow-xl pointer-events-auto transition-transform hover:scale-105 cursor-default">
          <div className="w-9 h-9 rounded-xl bg-[#EBF2F7] flex items-center justify-center text-[#D22931] shadow-2xs">
            <Bot className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-[#020626] font-display">Governed AI Systems</div>
            <div className="text-[11px] text-[#556070] font-sans">Enterprise Production Workloads</div>
          </div>
        </div>

        {/* Chip 2: Data Foundations */}
        <div className="hero-floating-chip hero-chip-2 absolute top-[30%] right-[3%] xl:right-[6%] hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCE4EC] shadow-xl pointer-events-auto transition-transform hover:scale-105 cursor-default">
          <div className="w-9 h-9 rounded-xl bg-[#EBF2F7] flex items-center justify-center text-[#D22931] shadow-2xs">
            <Database className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-[#020626] font-display">Unified Data Foundations</div>
            <div className="text-[11px] text-[#556070] font-sans">Snowflake &amp; Databricks Ready</div>
          </div>
        </div>

        {/* Chip 3: Cybersecurity Posture */}
        <div className="hero-floating-chip hero-chip-3 absolute bottom-[14%] left-[6%] xl:left-[10%] hidden xl:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCE4EC] shadow-xl pointer-events-auto transition-transform hover:scale-105 cursor-default">
          <div className="w-9 h-9 rounded-xl bg-[#EBF2F7] flex items-center justify-center text-[#D22931] shadow-2xs">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-[#020626] font-display">Cybersecurity Posture</div>
            <div className="text-[11px] text-[#556070] font-sans">Zero-Trust &amp; Exposure Review</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 flex flex-col items-center">
        {/* Eyebrow Pill - Sleek High-Tech Badge */}
        <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#DCE4EC] shadow-xs mb-8 backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 text-[#D22931]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#020626]">
            Enterprise Systems &amp; AI Engineering &middot; Seattle &amp; Global
          </span>
        </div>

        {/* Staggered 3D Text Reveal Headline */}
        <h1
          ref={headlineRef}
          className="font-display font-extrabold text-[clamp(2.75rem,6.5vw,5.5rem)] text-[#020626] leading-[1.08] tracking-tight max-w-5xl [perspective:1000px]"
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#020626] hover:text-[#D22931] bg-white border border-[#DCE4EC] hover:border-[#D22931]/40 py-4 px-7 rounded-xl transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
          >
            <span>Explore Our Solutions</span>
          </a>
        </div>
      </div>
    </section>
  );
};

