import React from 'react';
import { 
  Calendar, 
  ExternalLink, 
  Play, 
  ArrowRight
} from 'lucide-react';
import { EVENTS } from '../data/siteData';

interface EventsSectionProps {
  onOpenRsvp?: (eventTitle: string) => void;
  onOpenConsultation?: (eventTitle?: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenRsvp, onOpenConsultation }) => {
  const handleRsvp = (title: string) => {
    if (onOpenRsvp) onOpenRsvp(title);
    else if (onOpenConsultation) onOpenConsultation(`RSVP for ${title}`);
  };

  return (
    <section id="events" className="py-24 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#D2232A]" />
              <span>Where Technology Leaders Compare Notes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#0B1F33] tracking-tight font-serif">
              The "2030" Executive Series &amp; Roundtables
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              Our executive roundtables and panels convene technology leaders across the Seattle ecosystem to talk honestly about how AI and modern architecture are reshaping industries.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex-shrink-0">
            <button
              onClick={() => handleRsvp('General Event Series Inquiry')}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-slate-300 text-[#0B1F33] hover:border-[#D2232A] hover:text-[#D2232A] text-xs font-bold transition shadow-xs"
            >
              <span>Join Executive Attendee Waitlist</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>

        {/* Video Feature & Event Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Spotlight Video Showcase */}
          <div className="lg:col-span-5 rounded-3xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 flex flex-col justify-end p-5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-white bg-[#D2232A] px-2 py-0.5 rounded w-max mb-1 font-bold">
                  On-Demand Recording
                </span>
                <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                  AI Provides the Baseline, Humans Provide the Delta
                </h4>
                <p className="text-xs text-slate-300 mt-1">Recorded Live in Kirkland, WA</p>
              </div>

              {/* Play Button Overlay */}
              <a
                href="https://www.youtube.com/watch?v=nSYfXoNSRRg"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 flex items-center justify-center group-hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-[#D2232A] group-hover:bg-[#B71C22] text-white flex items-center justify-center shadow-xl border border-white/30 transition">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
              </a>
            </div>

            <div className="p-2 space-y-3">
              <div className="text-xs text-slate-600 leading-relaxed font-normal">
                Watch our featured panel with Seattle tech leaders examining why 70% of enterprise generative AI pilots stall before production, and the practical cultural and architectural shifts needed for lasting ROI.
              </div>
              <a
                href="https://www.youtube.com/@hitechadvisors1160"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-[#D2232A] hover:text-[#B71C22]"
              >
                <span>Visit Hitech Advisors YouTube Channel</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Upcoming Sessions List */}
          <div className="lg:col-span-7 space-y-4">
            {EVENTS.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl p-6 bg-white border border-slate-200 hover:border-slate-300 transition flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#D2232A] font-bold flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#D2232A] mr-2"></span>
                      {event.date}
                    </span>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded font-bold ${
                      event.status === 'Upcoming' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1F33] tracking-tight font-sans">
                    {event.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 font-bold">Speakers:</span>
                    {event.speakers.map((spk, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium"
                      >
                        {spk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono text-[11px] font-medium">{event.format}</span>
                  {event.status === 'Upcoming' ? (
                    <button
                      onClick={() => handleRsvp(event.title)}
                      className="px-5 py-2 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white font-bold shadow-xs transition"
                    >
                      Reserve Seat
                    </button>
                  ) : (
                    <a
                      href={event.recordingUrl || 'https://www.youtube.com/@hitechadvisors1160'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D2232A] hover:text-[#B71C22] font-bold flex items-center"
                    >
                      <span>Watch Stream</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
