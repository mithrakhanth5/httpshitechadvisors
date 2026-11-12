import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUpRight, Quote, ShieldCheck, ShoppingCart, Server, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, SYM_EASE, animateMaskedLines } from '../../lib/gsap';
import { BorderBeam } from '../ui/BorderBeam';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { hitechContent } from '../../data/hitechContent';

interface CaseStory {
  id: string;
  stat: string;
  rawNum: number;
  decimals: number;
  suffix: string;
  metric: string;
  title: string;
  industry: string;
  icon: React.ReactNode;
  detail: string;
  outcomes: string[];
}

// Case studies strictly rebuilt from verified figures in Section 8.15 & Section 12 (no unverified claims)
const CASE_STORIES: CaseStory[] = [
  {
    id: 'retail',
    stat: '99.99%',
    rawNum: 99.99,
    decimals: 2,
    suffix: '%',
    metric: 'Uptime at Peak',
    title: 'Keeping a high-volume retailer online through flash-sale traffic',
    industry: 'Retail & E-commerce',
    icon: <ShoppingCart className="w-5 h-5 text-[#D22931]" />,
    detail:
      'High-volume e-commerce retailer: maintained 99.99% uptime with 50% faster page loads at peak and a 40% revenue increase.',
    outcomes: ['99.99% uptime through flash sales', '50% faster page loads at peak', '40% revenue increase'],
  },
  {
    id: 'divestiture',
    stat: '5,000+',
    rawNum: 5000,
    decimals: 0,
    suffix: '+',
    metric: 'Users Migrated',
    title: 'Separating 5,000+ users from a parent company without disruption',
    industry: 'IT Operations & Cloud',
    icon: <Server className="w-5 h-5 text-[#D22931]" />,
    detail:
      'Global SaaS company (divestiture): 5,000+ users migrated with no critical downtime, 30% higher asset utilization, and 25% higher user satisfaction.',
    outcomes: ['5,000+ users migrated', 'No critical downtime', '30% higher asset utilization', '25% higher user satisfaction'],
  },
  {
    id: 'security',
    stat: '60%',
    rawNum: 60,
    decimals: 0,
    suffix: '%',
    metric: 'Remediation Reduction',
    title: 'Cutting time to remediation across a global security estate',
    industry: 'Cybersecurity & Risk',
    icon: <ShieldCheck className="w-5 h-5 text-[#D22931]" />,
    detail:
      'Global enterprise moving to SaaS: achieved 60% reduction in time to remediation and established a 3-year security plan.',
    outcomes: ['60% reduction in time to remediation', '3-year security plan established'],
  },
];

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const glowOrbRef = useRef<HTMLDivElement | null>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [quoteIdx, setQuoteIdx] = useState<number>(0);
  const [isQuoteHovered, setIsQuoteHovered] = useState<boolean>(false);

  const testimonials = hitechContent.verifiedTestimonials || [];

  const nextQuote = useCallback(() => {
    if (testimonials.length > 0) {
      setQuoteIdx((prev) => (prev + 1) % testimonials.length);
    }
  }, [testimonials.length]);

  useEffect(() => {
    if (isQuoteHovered || testimonials.length <= 1) return;
    const timer = setInterval(nextQuote, 6000);
    return () => clearInterval(timer);
  }, [isQuoteHovered, nextQuote, testimonials.length]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cleanupLines = animateMaskedLines(titleRef.current, { trigger: section });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.cases-header-anim'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section,
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.case-card'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section.querySelector('.case-card'),
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        section.querySelector('.testimonial-quote-box'),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: SYM_EASE.snappy,
          scrollTrigger: {
            trigger: section.querySelector('.testimonial-quote-box'),
            start: 'top 86%',
            toggleActions: 'play none none none',
          },
        }
      );

      if (glowOrbRef.current) {
        gsap.to(glowOrbRef.current, {
          y: 12,
          x: -10,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: SYM_EASE.float,
        });
      }
    }, section);

    return () => {
      cleanupLines();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative py-14 sm:py-18 bg-white overflow-hidden"
    >
      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 ref={titleRef} className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-[#020626] leading-tight tracking-tight">
            Client impact by the <span className="text-[#D22931]">numbers.</span>
          </h2>
          <p className="cases-header-anim mt-3 text-base sm:text-lg text-[#556070] leading-relaxed">
            Highlighted production case studies and verified references from our client leadership partners.
          </p>
        </div>

        {/* 3 Quantified Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CASE_STORIES.map((item, index) => {
            const isSelected = activeStoryIndex === index;
            return (
              <div
                key={item.id}
                className="case-card h-full"
                onMouseEnter={() => setActiveStoryIndex(index)}
              >
                <div
                  className={`p-8 rounded-2xl border transition-[transform,border-color,box-shadow,background-color] duration-300 cursor-pointer flex flex-col justify-between h-full group ${
                    isSelected
                      ? 'bg-white border-[#D22931] shadow-xl ring-2 ring-[#D22931]/15 -translate-y-1'
                      : 'border-[#DCE4EC] bg-[#EBF2F7] hover:border-[#D22931]/40 shadow-2xs hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-bold text-[#020626]">
                      {item.icon}
                      <span>{item.industry}</span>
                    </div>
                    <span className="text-xs font-semibold text-[#D22931] uppercase tracking-wider">
                      Verified Impact
                    </span>
                  </div>

                  <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#020626] tracking-tight mb-1">
                    <AnimatedCounter
                      value={item.rawNum}
                      decimals={item.decimals}
                      suffix={item.suffix}
                      duration={2.0}
                    />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D22931] mb-4">
                    {item.metric}
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#020626] leading-snug tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#556070] leading-relaxed mb-6">
                    {item.detail}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 border-t border-[#DCE4EC] pt-4 mb-6">
                    {item.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2 text-xs font-medium text-[#020626]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-[#020626] group-hover:text-[#D22931]">
                    <span className="sym-link-underline">Read the story &rarr;</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D22931] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Executive Testimonial Quote Suite with Border Beam & Verified References */}
        <div
          className="testimonial-quote-box relative rounded-3xl bg-[#020626] text-white p-8 sm:p-12 overflow-hidden shadow-2xl border border-white/10 group"
          onMouseEnter={() => setIsQuoteHovered(true)}
          onMouseLeave={() => setIsQuoteHovered(false)}
        >
          <BorderBeam size={260} duration={14} colorFrom="#FAC344" colorTo="#D22931" />
          <div
            ref={glowOrbRef}
            className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#FAC344]/15 blur-[90px] pointer-events-none"
          />

          {/* Top Row: Category + Verified Client Selector Tabs */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2.5 text-[#FAC344]">
              <Quote className="w-7 h-7 opacity-75" />
              <span className="relative flex h-2 w-2">
                <span className="sym-pulse-ring absolute inset-0 rounded-full bg-[#FAC344]/60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FAC344]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Verified Executive References &middot; Client Perspectives
              </span>
            </div>

            {/* 4 Client Selector Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {testimonials.map((item, idx) => {
                const isSelected = idx === quoteIdx;
                return (
                  <button
                    key={item.company}
                    onClick={() => setQuoteIdx(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#D22931] text-white shadow-md'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <span>{item.company}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Testimonial Content with Smooth Fade Transition */}
          <div className="relative z-10 max-w-3xl min-h-[160px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[quoteIdx]?.company || 'quote'}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <blockquote className="font-display font-medium text-xl sm:text-2xl text-white/95 leading-relaxed">
                  &ldquo;{testimonials[quoteIdx]?.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-sm text-[#FAC344]">
                    {testimonials[quoteIdx]?.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-base text-white">
                      {testimonials[quoteIdx]?.author}
                    </div>
                    <div className="text-xs text-white/70">
                      {testimonials[quoteIdx]?.title}, <span className="text-[#FAC344] font-medium">{testimonials[quoteIdx]?.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
