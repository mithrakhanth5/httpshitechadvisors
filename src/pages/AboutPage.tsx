import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  ExternalLink, 
  Play, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Compass, 
  CheckCircle2, 
  Heart 
} from 'lucide-react';
import { SITE_STATS, CORE_VALUES, TEAM_MEMBERS } from '../data/siteData';

interface AboutPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-rose-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-rose-400" />;
      case 'Users': return <Users className="w-5 h-5 text-rose-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-rose-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-rose-400" />;
      default: return <Heart className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <div className="py-12 bg-slate-950">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-rose-400 font-semibold">About Us</span>
        </nav>
      </div>

      {/* Main Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pacific Northwest Technology Advisory</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Strategy. <span className="text-rose-500">Expertise.</span> Execution.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
            Hitech Advisors is a Seattle-based strategy, technology, and AI advisory firm that helps organizations solve complex business challenges and execute their most important initiatives.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            We partner with enterprise organizations and high-growth companies to accelerate transformation across product, engineering, cloud, cybersecurity, operations, customer experience, and artificial intelligence. Whether clients need executive guidance, specialized expertise, or hands-on delivery, we bring the right people and capabilities together to move initiatives forward with confidence.
          </p>
        </div>

        {/* Stats Band */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 glass-panel rounded-3xl border border-slate-800 text-center">
          {SITE_STATS.map((stat, idx) => (
            <div key={idx} className="px-2">
              <div className="text-3xl sm:text-5xl font-black text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-rose-400 mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-rose-400">Our Methodology</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Strategic Thinking. Practical Execution.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Technology alone doesn’t create competitive advantage—<strong className="text-white">execution does</strong>. Every engagement begins with understanding our clients’ business objectives, operational challenges, and long-term vision.
                </p>
                <p>
                  Artificial intelligence is reshaping every industry, but successful adoption requires more than implementing the latest tools. We help organizations identify where AI creates real business value, modernize technology foundations, and integrate intelligent solutions that improve productivity, decision-making, and customer experiences.
                </p>
                <p>
                  Whether we’re advising executive leadership, embedding specialized experts, or delivering end-to-end initiatives, our focus remains the same: helping organizations move faster, innovate confidently, and build capabilities that create lasting value.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('About Page Strategic Briefing')}
                  className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs sm:text-sm transition shadow-lg shadow-rose-950/50"
                >
                  Schedule an Executive Briefing
                </button>
              </div>
            </div>

            {/* Video Showcase Card */}
            <div className="lg:col-span-6">
              <div className="glass-panel rounded-3xl p-6 border border-slate-800 shadow-2xl relative">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                    alt="Hitech Advisors Strategy Session"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center">
                    <a
                      href="https://www.youtube.com/watch?v=3HriPbG3tXY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-2xl shadow-rose-950 hover:scale-110 transition border border-white/20"
                      aria-label="Play video"
                    >
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-white bg-slate-950/80 p-2.5 rounded-xl backdrop-blur-md">
                    Featured: Hitech Advisory Team &amp; Pacific NW Culture
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400">Guiding Principles</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Our Core Values
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            The foundational standards that define every interaction with our clients, our consultants, and our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-800/40 flex items-center justify-center">
                {getValueIcon(val.icon)}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">{val.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Expert Team */}
      <section id="team" className="py-24 bg-slate-900/50 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400">Leadership &amp; Practice Leads</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Meet The Team
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Veteran practitioners, technology executives, and engagement partners dedicated to driving measurable digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-rose-500/50 transition group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-square w-full overflow-hidden bg-slate-900 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-900/90 text-slate-300 hover:text-white hover:bg-rose-600 transition border border-slate-700"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-white text-base tracking-tight">{member.name}</h3>
                    <div className="text-xs font-mono text-rose-400 mt-0.5">{member.role}</div>
                    {member.bio && (
                      <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office & Heritage CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-mono uppercase mb-2">
              <MapPin className="w-4 h-4" />
              <span>Kirkland Innovation Corridor</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Based in Kirkland, WA • Serving Global Clients
            </h3>
            <p className="text-slate-300 text-sm mt-2 max-w-xl">
              Connect with our team to discuss your engineering roadmap, AI pilot scaling, or embedded talent needs.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => onOpenConsultation('Kirkland HQ Advisory Briefing')}
              className="px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition shadow-lg shadow-rose-950/50"
            >
              Connect with Leadership
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
