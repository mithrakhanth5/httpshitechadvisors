import React, { useRef, useEffect } from 'react';
import { Calendar, BookOpen, ArrowRight, Sparkles, MapPin, Shield } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';
import { gsap, SYMMETRY_EASE } from '../../lib/gsap';

interface EventsAndInsightsProps {
  onOpenEvent: () => void;
  onOpenArticle: (title: string) => void;
}

export const EventsAndInsights: React.FC<EventsAndInsightsProps> = ({ onOpenEvent, onOpenArticle }) => {
  const { eventsAndInsights } = hitechContent;
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        root.querySelectorAll('.events-header-anim'),
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

      // Featured event card entrance
      gsap.fromTo(
        root.querySelector('.featured-event-anim'),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root.querySelector('.events-grid'),
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Article cards entrance
      gsap.fromTo(
        root.querySelectorAll('.article-card-anim'),
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root.querySelector('.events-grid'),
            start: 'top 82%',
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="roundtable" className="py-24 bg-[#F8FAFC] border-t border-[#EAEDF1] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mb-16">
          <div className="events-header-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D22931]/10 text-[#D22931] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D22931]" />
            Community &amp; Executive Perspectives
          </div>
          <h2 className="events-header-anim font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#020626] tracking-tight leading-tight">
            {eventsAndInsights.headline}
          </h2>
          <p className="events-header-anim text-base text-[#556070] mt-3 leading-relaxed">
            {eventsAndInsights.subhead}
          </p>
        </div>

        <div className="events-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Upcoming Event Card (Left, 5 cols) */}
          <div className="featured-event-anim lg:col-span-5 bg-[#020626] text-white rounded-2xl p-8 lg:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/10 group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D22931]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FAC344]">
                  <Calendar className="w-4 h-4 text-[#FAC344]" />
                  <span>{eventsAndInsights.event.tag}</span>
                </div>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D22931] text-white text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Chatham House Rules
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                {eventsAndInsights.event.title}
              </h3>

              <div className="pt-2 text-xs text-white/80 space-y-2.5 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FAC344]" />
                  <span><strong className="text-white">Format:</strong> {eventsAndInsights.event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#FAC344]" />
                  <span><strong className="text-white">Access:</strong> {eventsAndInsights.event.access}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FAC344]" />
                  <span><strong className="text-white">Timeline:</strong> {eventsAndInsights.event.date}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed pt-1">
                Senior engineering, data, and security leaders gather to dissect production AI architecture blueprints, zero-day risk containment, and measurable enterprise ROI.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
              <button
                onClick={onOpenEvent}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#D22931] hover:bg-[#B71C24] text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>Request an Executive Invitation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Two Latest Article Cards (Right, 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {eventsAndInsights.articles.map((article) => (
              <div
                key={article.title}
                className="article-card-anim p-8 rounded-2xl bg-white border border-[#EAEDF1] flex flex-col justify-between hover:border-[#D22931]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#D22931] uppercase tracking-wider">
                    <span>{article.category}</span>
                    <span className="text-[#556070] flex items-center gap-1.5 font-medium lowercase">
                      <BookOpen className="w-3.5 h-3.5 text-[#556070]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#020626] group-hover:text-[#D22931] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#556070] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAEDF1]">
                  <button
                    onClick={() => onOpenArticle(article.title)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#020626] group-hover:text-[#D22931] transition-colors cursor-pointer"
                  >
                    <span>Read Executive Perspective</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
