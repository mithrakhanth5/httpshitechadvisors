import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Play, 
  ExternalLink
} from 'lucide-react';
import { EVENTS } from '../data/siteData';

interface EventsPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="py-12 bg-slate-950">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-rose-400 font-semibold">Events</span>
        </nav>
      </div>

      {/* Main Page Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Calendar className="w-3.5 h-3.5 text-rose-500" />
            <span>Community &amp; Executive Panels</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Hitech Advisor <span className="text-rose-500">Events &amp; Roundtables</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            We host our panel discussions and innovation roundtables to give back to the community and help leaders navigate the evolving AI landscape. Through expert-led panels (like our "2030" series), executive strategy roundtables, and collaborative networking, we provide a space for forward-thinking peers to share insights, adapt their vision, and shape the future of business.
          </p>
        </div>

        {/* Featured Video Header Banner */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80"
                alt="2030 Series Panel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/watch?v=nSYfXoNSRRg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-2xl shadow-rose-950 hover:scale-110 transition border border-white/20"
                  aria-label="Play Event Recording"
                >
                  <Play className="w-6 h-6 fill-white ml-1" />
                </a>
              </div>
              <div className="absolute top-4 left-4 bg-rose-950/90 text-rose-300 border border-rose-800/60 px-3 py-1 rounded-full text-[11px] font-mono">
                RECORDED LIVE IN KIRKLAND, WA
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase text-rose-400">Featured Session</span>
              <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                AI Provides the Baseline, Humans Provide the Delta
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Watch our keynote panel featuring Pacific Northwest technology executives exploring the architectural and team realignments required to move AI from experimental demos into reliable production engines.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.youtube.com/@hitechadvisors1160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-white"
                >
                  <span>Explore full YouTube archives</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Schedule Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
          <h2 className="text-2xl font-bold text-white">Upcoming &amp; On-Demand Sessions</h2>
          <span className="text-xs font-mono text-slate-400">EXECUTIVE "2030" ROSTER</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-rose-400">
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

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  {event.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 mb-1.5">Featured Speakers:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {event.speakers.map((spk, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {spk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">{event.format}</span>
                {event.status === 'Upcoming' ? (
                  <button
                    onClick={() => onOpenConsultation(`Event Registration: ${event.title}`)}
                    className="px-4 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-md shadow-rose-950/50 transition"
                  >
                    Reserve Seat
                  </button>
                ) : (
                  <a
                    href={event.recordingUrl || 'https://www.youtube.com/@hitechadvisors1160'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-400 hover:text-white font-semibold text-xs flex items-center"
                  >
                    <span>Watch Recording</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
