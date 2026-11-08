import React, { useRef, useEffect } from 'react';
import { ArrowRight, Quote, CheckCircle2 } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';
import { gsap, SYMMETRY_EASE } from '../../lib/gsap';

interface ResultsProps {
  onSelectStory: (helpArea: string) => void;
}

export const Results: React.FC<ResultsProps> = ({ onSelectStory }) => {
  const { results } = hitechContent;
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        root.querySelectorAll('.results-header-anim'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Story Cards entrance
      gsap.fromTo(
        root.querySelectorAll('.story-card-anim'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root.querySelector('.stories-grid'),
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Testimonial card entrance
      gsap.fromTo(
        root.querySelector('.testimonial-card-anim'),
        { opacity: 0, scale: 0.98, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root.querySelector('.testimonial-card-anim'),
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="results" className="py-24 bg-white border-t border-[#EAEDF1] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="results-header-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D22931]/10 text-[#D22931] text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
              Verified Case Stories
            </div>
            <h2 className="results-header-anim font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#020626] tracking-tight leading-tight">
              {results.headline}
            </h2>
            <p className="results-header-anim text-base text-[#556070] mt-3">
              Measurable technical outcomes delivered for Fortune 500 enterprises and high-growth innovators.
            </p>
          </div>
          <button
            onClick={() => onSelectStory('not-sure')}
            className="results-header-anim group inline-flex items-center gap-2 text-sm font-semibold text-[#020626] hover:text-[#D22931] transition-colors cursor-pointer"
          >
            <span>{results.linkText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D22931]" />
          </button>
        </div>

        {/* 3 Story Cards with Quantified Outcome Numbers */}
        <div className="stories-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.stories.map((story) => (
            <div
              key={story.title}
              className="story-card-anim p-8 rounded-2xl bg-[#EBF2F7] border border-[#DCE4EC] flex flex-col justify-between hover:border-[#D22931]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#D22931] uppercase tracking-wider">
                    {story.industry}
                  </span>
                  <span className="text-[11px] font-medium text-[#556070] bg-white px-2.5 py-1 rounded-md border border-[#DCE4EC]">
                    Verified Result
                  </span>
                </div>

                <div className="font-display font-extrabold text-4xl lg:text-5xl text-[#020626] tracking-tight group-hover:text-[#D22931] transition-colors">
                  {story.stat}
                </div>
                <div className="text-xs font-semibold text-[#556070] uppercase tracking-wider mt-1 mb-6">
                  {story.metric}
                </div>
                <h3 className="text-lg font-bold text-[#020626] leading-snug">
                  {story.title}
                </h3>
                <p className="text-sm text-[#556070] mt-3 leading-relaxed">
                  {story.detail}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-[#EAEDF1]">
                <button
                  onClick={() => onSelectStory(story.helpArea)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#020626] group-hover:text-[#D22931] transition-colors cursor-pointer"
                >
                  <span>Explore this transformation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Named Approved Testimonial Card */}
        <div className="testimonial-card-anim mt-14 p-8 lg:p-12 rounded-2xl bg-[#020626] text-white border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-6 right-8 text-[#D22931]/15 pointer-events-none" aria-hidden="true">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium tracking-wide">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FAC344]" />
              <span>Direct Executive Feedback</span>
            </div>

            <p className="font-display italic text-xl sm:text-2xl text-white/95 leading-relaxed font-light">
              &ldquo;{results.testimonial.quote}&rdquo;
            </p>

            <div className="pt-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D22931] to-[#FAC344] flex items-center justify-center font-bold text-white text-lg shadow-sm">
                DV
              </div>
              <div>
                <div className="font-bold text-base text-white">
                  {results.testimonial.author}
                </div>
                <div className="text-xs text-white/70">
                  {results.testimonial.title}, {results.testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
