import React from 'react';
import { CLIENT_LOGOS } from '../data/siteData';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-12 bg-slate-950 border-b border-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between text-xs uppercase tracking-widest text-slate-400 font-mono">
          <span className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2"></span>
            Trusted by Enterprise Leaders &amp; Scale-Up Innovators
          </span>
          <span className="hidden md:inline text-slate-400">
            Across 180+ Mission-Critical Engagements
          </span>
        </div>
      </div>

      {/* Marquee Container with Gradient Fade Overlays */}
      <div className="relative w-full overflow-hidden">
        {/* Left and right fade gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex items-center space-x-6 py-2">
          {/* First set */}
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-rose-500/40 hover:bg-slate-900 transition-all duration-300 group flex items-center space-x-3 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-rose-500 transition-colors"></div>
              <div>
                <div className="text-sm font-bold text-slate-200 group-hover:text-white transition tracking-wide">
                  {client.name}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {client.category}
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless infinite scroll */}
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-rose-500/40 hover:bg-slate-900 transition-all duration-300 group flex items-center space-x-3 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-rose-500 transition-colors"></div>
              <div>
                <div className="text-sm font-bold text-slate-200 group-hover:text-white transition tracking-wide">
                  {client.name}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {client.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
