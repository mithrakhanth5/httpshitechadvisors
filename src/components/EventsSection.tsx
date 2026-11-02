import React from 'react';
import { 
  Calendar, 
  ExternalLink, 
  Play, 
  ArrowRight
} from 'lucide-react';
import { EVENTS } from '../data/siteData';

interface EventsSectionProps {
  onOpenRsvp: (eventTitle: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenRsvp }) => {


  return (
    <section id="events" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <Calendar className="w-3.5 h-3.5 text-rose-500" />
              <span>Thought Leadership Community</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              The "2030" Executive Series &amp; Roundtables
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              We host invite-only panel discussions and executive roundtables to give back to the technology community and help leaders navigate the evolving AI landscape.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex-shrink-0">
            <button
              onClick={() => onOpenRsvp('General Event Series Inquiry')}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-rose-500 text-xs font-semibold transition"
            >
              <span>Join Executive Attendee Waitlist</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>

        {/* Video Feature & Event Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Spotlight Video Showcase */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-slate-800 shadow-2xl space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group">
              {/* Thumbnail / Embed */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10 flex flex-col justify-end p-5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded w-max mb-1">
                  On-Demand Recording
                </span>
                <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                  AI Provides the Baseline, Humans Provide the Delta
                </h4>
                <p className="text-xs text-slate-300 mt-1">Live from Kirkland Innovation Center</p>
              </div>

              {/* Play Button Overlay */}
              <a
                href="https://www.youtube.com/watch?v=nSYfXoNSRRg"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 flex items-center justify-center group-hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-rose-600/90 group-hover:bg-rose-500 text-white flex items-center justify-center shadow-2xl shadow-rose-950 border border-white/20 transition">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
              </a>
            </div>

            <div className="p-2 space-y-3">
              <div className="text-xs text-slate-400 leading-relaxed">
                Watch our featured panel with Seattle tech leaders examining why 70% of enterprise generative AI pilots fail to reach scale, and the foundational steps needed for lasting ROI.
              </div>
              <a
                href="https://www.youtube.com/@hitechadvisors1160"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-rose-300"
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
                className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-rose-400 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-rose-500 mr-2 animate-pulse"></span>
                      {event.date}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      event.status === 'Upcoming' 
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50' 
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {event.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400">Speakers:</span>
                    {event.speakers.map((spk, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-300"
                      >
                        {spk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">{event.format}</span>
                  {event.status === 'Upcoming' ? (
                    <button
                      onClick={() => onOpenRsvp(event.title)}
                      className="px-4 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold shadow-md shadow-rose-950/40 transition"
                    >
                      Reserve Seat
                    </button>
                  ) : (
                    <a
                      href={event.recordingUrl || 'https://www.youtube.com/@hitechadvisors1160'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-400 hover:text-rose-300 font-semibold flex items-center"
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
