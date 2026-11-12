import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap, SYM_EASE, animateMaskedLines } from '../../lib/gsap';
import { BorderBeam } from '../ui/BorderBeam';

interface CtaBannerProps {
  onOpenDiscuss: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDiscuss }) => {
  const bannerRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const cleanHeading = animateMaskedLines(headingRef.current, {
      trigger: banner,
      start: 'top 82%',
      delay: 0.08,
      duration: 0.85,
      stagger: 0.1,
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        banner.querySelector('.cta-inner'),
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.82,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: banner,
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Symmetry Section 9 geometric float on subtle background spheres
      gsap.to(banner.querySelectorAll('.cta-float-orb'), {
        y: -12,
        duration: 3.4,
        stagger: 0.6,
        repeat: -1,
        yoyo: true,
        ease: SYM_EASE.float,
      });
    }, banner);

    return () => {
      cleanHeading();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      id="cta"
      className="relative py-14 sm:py-18 bg-white overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="cta-inner relative rounded-3xl bg-gradient-to-br from-[#020626] via-[#040C38] to-[#020626] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/10 text-center flex flex-col items-center">
          {/* Border Beam */}
          <BorderBeam size={280} duration={14} colorFrom="#D22931" colorTo="#FAC344" />

          {/* Ambient Floating Orbs */}
          <div className="cta-float-orb absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#D22931]/22 blur-[120px] pointer-events-none" />
          <div className="cta-float-orb absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FAC344]/18 blur-[120px] pointer-events-none" />

          {/* Eyebrow */}
          <div className="relative z-10 text-xs font-mono font-bold uppercase tracking-widest text-[#FAC344] mb-5">
            Start the Conversation
          </div>

          {/* Headline */}
          <h2
            ref={headingRef}
            className="relative z-10 font-display font-extrabold text-[clamp(2rem,5vw,3.75rem)] text-white leading-[1.12] tracking-tight max-w-4xl"
          >
            What are you trying to solve?
          </h2>

          {/* Subtext */}
          <p className="relative z-10 mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            Share the challenge. A senior consultant will come back to you within one business day, with questions worth answering, not a sales pitch.
          </p>

          {/* CTA Buttons */}
          <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={onOpenDiscuss}
              className="sym-btn inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl bg-[#D22931] hover:bg-[#b52027] text-white shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <span>Discuss a Challenge</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/solutions"
              className="sym-btn inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 cursor-pointer"
            >
              <span>Explore All Solutions</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
