import React from 'react';
import { 
  Compass, 
  MapPin, 
  Target, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Compass className="w-32 h-32 text-rose-500" />
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-rose-400 uppercase tracking-widest mb-4">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Pacific Northwest Tech Hub</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Headquartered in Kirkland, WA
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Operating in the epicenter of cloud computing and AI innovation—alongside the engineering headquarters of Microsoft, Amazon, and frontier research labs.
              </p>

              <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-lg bg-rose-950 flex items-center justify-center text-rose-400 mt-0.5 flex-shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Pragmatic Over Theoretical</div>
                    <div className="text-xs text-slate-400 mt-0.5">We don't sell 200-page slide decks. We engineer working production code.</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 mt-0.5 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Vendor-Agnostic Objectivity</div>
                    <div className="text-xs text-slate-400 mt-0.5">We represent your balance sheet, selecting tools that fit your architecture—not vendor kickbacks.</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-lg bg-purple-950 flex items-center justify-center text-purple-400 mt-0.5 flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Top 1% Senior Network</div>
                    <div className="text-xs text-slate-400 mt-0.5">Principal architects with 15+ years average tenure across Fortune 500 stacks.</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>OFFICE LOCATION</span>
                <span className="text-white font-semibold">608 State St S, Kirkland</span>
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Mission &amp; Methodology</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              We Embed World-Class Tech Leadership{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-400">
                Directly Within Your Team
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              In an era where generative AI models are freely available to everyone, algorithms have become the commodity baseline. Competitive differentiation no longer comes from buying an AI tool—it comes from the human delta: knowing how to integrate models into secure enterprise workflows, migrate legacy infrastructure without downtime, and scale reliable distributed systems.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Hitech Advisors was founded on a singular premise: <strong className="text-white">We are experts at engaging experts on behalf of our clients.</strong> We assemble bespoke teams of vetted technology specialists who fit, flex, and grow with your world. We collaborate shoulder-to-shoulder with your in-house teams to deliver maximum velocity, institutional knowledge transfer, and rapid time to market.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-rose-400 font-bold text-sm mb-1">Human-in-the-Loop AI</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Combining automated intelligence with senior verification gates to eliminate hallucinations and architectural drift.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-rose-400 font-bold text-sm mb-1">Rapid Squad Deployment</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Autonomous pods of senior architects and lead engineers operational inside your sprint cadence within 14 days.
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition shadow-lg shadow-rose-950/50 group"
              >
                <span>Schedule an Executive Briefing</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
