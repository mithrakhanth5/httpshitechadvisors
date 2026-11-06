import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Play, 
  ExternalLink,
  Sparkles,
  MapPin,
  Building2,
  Users,
  Video
} from 'lucide-react';
import { EVENTS } from '../data/siteData';

interface EventsPageProps {
  onOpenConsultation: (topic?: string) => void;
}

type FilterCategory = 'all' | 'upcoming' | 'roundtable' | 'series2030' | 'ondemand';

export const EventsPage: React.FC<EventsPageProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredEvents = EVENTS.filter((event) => {
    if (activeFilter === 'upcoming') return event.status === 'Upcoming';
    if (activeFilter === 'ondemand') return event.status === 'On Demand';
    if (activeFilter === 'roundtable') return event.series.includes('Roundtable');
    if (activeFilter === 'series2030') return event.series.includes('2030');
    return true;
  });

  const filterTabs: { key: FilterCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Sessions', count: EVENTS.length },
    { key: 'upcoming', label: 'Upcoming', count: EVENTS.filter(e => e.status === 'Upcoming').length },
    { key: 'series2030', label: 'Executive 2030 Series', count: EVENTS.filter(e => e.series.includes('2030')).length },
    { key: 'roundtable', label: 'Innovation Roundtables', count: EVENTS.filter(e => e.series.includes('Roundtable')).length },
    { key: 'ondemand', label: 'On-Demand Replays', count: EVENTS.filter(e => e.status === 'On Demand').length },
  ];

  return (
    <div className="py-12 bg-[#F9FBFB] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-500 font-semibold">
          <Link to="/" className="hover:text-[#0B1F33] transition">Home</Link>
          <span>/</span>
          <span className="text-[#D2232A]">Executive Events &amp; Roundtables</span>
        </nav>
      </div>

      {/* Main Page Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#D2232A]" />
            <span>Executive Community &amp; Leadership Roundtables</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            Hitech Advisor <span className="text-[#D2232A] italic">Events &amp; Roundtables</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We host peer panels and invitation-only innovation roundtables to give back to the Pacific Northwest technology ecosystem and help leaders navigate the evolving AI landscape. Through our landmark <strong>Executive "2030" Series</strong> and collaborative forums with <strong>JPMorgan Private Bank</strong> and <strong>Ashurst Perkins Coie</strong>, we provide dedicated space for forward-thinking CTOs, CIOs, and business leaders.
          </p>
        </motion.div>

        {/* Featured Keynote Video Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 rounded-3xl p-6 sm:p-10 bg-white border border-slate-200 shadow-sm relative overflow-hidden group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md">
              <img
                src="./images/events/speaker-cover.jpg"
                alt="AI Keynote Session Live Recording"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-[#0B1F33]/40 to-transparent flex items-center justify-center backdrop-blur-2xs">
                <motion.a
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.youtube.com/watch?v=nSYfXoNSRRg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-[#D2232A] text-white flex items-center justify-center shadow-2xl hover:bg-[#B71C22] transition border-2 border-white/50"
                  aria-label="Play Event Recording"
                >
                  <Play className="w-6 h-6 fill-white ml-1" />
                </motion.a>
              </div>
              <div className="absolute top-4 left-4 bg-white/95 text-[#0B1F33] font-bold border border-slate-200 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider shadow-xs">
                RECORDED LIVE IN KIRKLAND, WA
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs font-mono">
                <span className="flex items-center gap-1.5"><Video className="w-3.5 h-3.5 text-[#D2232A]" /> Keynote Panel Archive</span>
                <span>Full Broadcast Available</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase text-[#D2232A] font-bold tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Executive Session</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0B1F33] tracking-tight leading-snug">
                AI Provides the Baseline, Humans Provide the Delta
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Watch our premier keynote panel featuring Pacific Northwest technology executives exploring the architectural and team realignments required to move enterprise AI from experimental demos into reliable, production-grade engines.
              </p>
              
              <div className="pt-1 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px]">
                  <MapPin className="w-3 h-3 text-[#D2232A]" /> Kirkland, WA
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px]">
                  <Building2 className="w-3 h-3 text-[#D2232A]" /> Executive 2030 Series
                </span>
              </div>

              <div className="pt-3 flex items-center space-x-4">
                <a
                  href="https://www.youtube.com/watch?v=nSYfXoNSRRg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white text-xs font-bold transition shadow-xs group"
                >
                  <Play className="w-3.5 h-3.5 fill-white mr-1.5" />
                  <span>Watch Keynote</span>
                </a>
                <a
                  href="https://www.youtube.com/@hitechadvisors1160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-slate-700 hover:text-[#D2232A] transition group"
                >
                  <span>YouTube Channel</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter Tabs & Event Schedule Grid */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0B1F33]">
              Leadership Briefings &amp; Roundtables
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Curated discussions on sovereign architectures, AI governance, and strategic transformations
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                  activeFilter === tab.key
                    ? 'bg-[#0B1F33] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#0B1F33]'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  activeFilter === tab.key ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Event Thumbnail Banner */}
                  <div className="relative aspect-16/9 overflow-hidden bg-slate-100 border-b border-slate-100">
                    {event.image ? (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                        <Calendar className="w-8 h-8 stroke-1" />
                      </div>
                    )}
                    
                    {/* Status Pill Over Image */}
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold shadow-xs backdrop-blur-md ${
                        event.status === 'Upcoming' 
                          ? 'bg-emerald-600 text-white border border-emerald-500' 
                          : 'bg-[#0B1F33]/80 text-white border border-white/20'
                      }`}>
                        {event.status}
                      </span>
                    </div>

                    {/* Location Pill Over Image */}
                    {event.location && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/95 text-[#0B1F33] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-slate-200 shadow-xs backdrop-blur-md">
                        <MapPin className="w-2.5 h-2.5 text-[#D2232A]" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Series & Date meta */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2.5">
                      <span className="text-[#D2232A] font-bold uppercase tracking-wider text-[11px]">
                        {event.series}
                      </span>
                      <span className="font-medium text-slate-600">
                        {event.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-semibold text-[#0B1F33] tracking-tight leading-snug group-hover:text-[#D2232A] transition-colors">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal line-clamp-3">
                      {event.description}
                    </p>

                    {/* Collaborator / Host Tag */}
                    {event.collaborators && event.collaborators.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                        <Building2 className="w-3 h-3 text-[#D2232A] shrink-0" />
                        <span className="truncate">Co-hosted with {event.collaborators.join(' & ')}</span>
                      </div>
                    )}

                    {/* Featured Speakers / Orgs */}
                    {event.speakers && event.speakers.length > 0 && (
                      <div className="mt-3">
                        <div className="text-[10px] font-mono text-slate-400 mb-1.5 uppercase font-bold tracking-wider flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>Panelists &amp; Organizations</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {event.speakers.map((spk, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700 font-medium"
                            >
                              {spk}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold truncate max-w-[50%]">
                    {event.format}
                  </span>

                  {event.status === 'Upcoming' ? (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onOpenConsultation(`Event Registration: ${event.title}`)}
                      className="px-4 py-1.5 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white font-bold text-xs shadow-xs transition cursor-pointer"
                    >
                      Reserve Seat
                    </motion.button>
                  ) : (
                    <a
                      href={event.recordingUrl || 'https://www.youtube.com/@hitechadvisors1160'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#D2232A] hover:text-[#B71C22] font-bold text-xs group/link"
                    >
                      <span>Watch Replay</span>
                      <ExternalLink className="w-3 h-3 ml-1 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Host a Roundtable CTA */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B1F33] text-white p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D2232A] font-bold">
              Private Executive Salons
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-semibold mt-2 tracking-tight">
              Host a Confidential Roundtable for Your Executive Team
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              We design and moderate custom strategy sessions for Fortune 500 leadership teams and portfolio company executives on AI roadmapping, vendor evaluation, and cognitive operating models.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenConsultation('Private Executive Roundtable Request')}
                className="px-6 py-2.5 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white font-bold text-xs uppercase tracking-wider transition shadow-lg cursor-pointer"
              >
                Inquire About a Private Salon
              </button>
              <a
                href="https://hitechadvisors.com/events/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition border border-white/20 inline-flex items-center gap-1.5"
              >
                <span>View Original Hitech Archives</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-red-500/10 to-transparent pointer-events-none" />
        </div>
      </section>
    </div>
  );
};
