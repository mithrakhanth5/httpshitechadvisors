import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../ui/MagneticButton';
import { AnimatedCounter } from '../ui/AnimatedCounter';
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
      className="relative pt-32 pb-12 sm:pb-14 flex flex-col justify-center items-center text-center overflow-hidden bg-white min-h-[90vh]"
    >
      {/* Background Animated Collaboration Video (Plays continuously in a loop like a GIF) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="./images/hero-video-poster.jpg"
          className="w-full h-full object-cover object-center opacity-95 sm:opacity-100 scale-100"
        >
          <source src="./videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Minimal edge blend: Leaves video 100% visible while smoothly transitioning top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#DCE4EC] shadow-xs mb-8 backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 text-[#D22931]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#020626]">
            Business &amp; Technology Solutions
          </span>
        </div>

        {/* Staggered 3D Text Reveal Headline with Full Descender Clearance for "Strategy" (g & y) */}
        <h1
          ref={headlineRef}
          className="font-display font-extrabold text-[clamp(2.75rem,6.5vw,5.5rem)] text-[#020626] leading-[1.14] tracking-tight max-w-5xl [perspective:1000px] pb-3 drop-shadow-[0_2px_14px_rgba(255,255,255,0.95)]"
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
        <div ref={subtextRef} className="mt-8 max-w-3xl drop-shadow-[0_1px_10px_rgba(255,255,255,0.95)]">
          <p className="text-base sm:text-lg lg:text-xl text-[#020626] font-medium leading-relaxed">
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

