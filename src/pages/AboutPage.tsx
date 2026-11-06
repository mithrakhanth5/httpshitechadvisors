import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Compass, 
  CheckCircle2, 
  Heart,
  ArrowRight
} from 'lucide-react';
import { SITE_STATS, CORE_VALUES, TEAM_MEMBERS, OFFICE_CONTACT } from '../data/siteData';

interface AboutPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#D2232A]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#D2232A]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#D2232A]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#D2232A]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#D2232A]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#D2232A]" />;
      default: return <Heart className="w-5 h-5 text-[#D2232A]" />;
    }
  };

  return (
    <div className="py-12 bg-white min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-500 font-semibold">
          <Link to="/" className="hover:text-[#0B1F33] transition">Home</Link>
          <span>/</span>
          <span className="text-[#D2232A]">About Hitech Advisors</span>
        </nav>
      </div>

      {/* Main Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pacific Northwest Technology Advisory</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            Strategy That Connects <span className="text-[#D2232A] italic">to Execution.</span>
          </h1>
          <p className="mt-4 text-[#D2232A] text-lg sm:text-xl font-serif italic">
            "Meaningful problems deserve meaningful solutions."
          </p>
          <p className="mt-6 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Hitech Advisors is a business and technology solutions firm headquartered in Kirkland, Washington. Its senior consultants and specialists help organizations make the right technology decisions and carry them through to working results — across business applications, data, cybersecurity, IT operations, AI, product engineering, go-to-market, and talent.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            We operate one level above individual technology platforms. We start with the business problem, recommend the right combination of strategy, systems, data, security, engineering, and AI to solve it, and stay accountable until the result is real.
          </p>
        </motion.div>

        {/* Stats Band */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#F8FAFC] rounded-3xl border border-slate-200 text-center shadow-xs"
        >
          {SITE_STATS.map((stat, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="px-2"
            >
              <div className="text-3xl sm:text-5xl font-extrabold text-[#0B1F33] font-serif">{stat.value}</div>
              <div className="text-xs sm:text-sm font-bold text-[#D2232A] mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{stat.detail}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* The Values */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D2232A] font-bold">What We Believe</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1F33] tracking-tight font-serif mt-2">
              Core Principles Guiding Every Client Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                  {getValueIcon(val.icon)}
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#0B1F33] mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D2232A] font-bold">Senior Team</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1F33] tracking-tight font-serif mt-2">
              Practitioners and Strategic Advisors
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Senior consultants who remain directly engaged in the architecture, client relationships, and execution of every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-[#F8FAFC] border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition group"
              >
                <div className="overflow-hidden h-60 bg-gradient-to-b from-slate-50 to-slate-200/70 flex items-end justify-center p-3 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-h-full max-w-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-serif font-semibold text-[#0B1F33]">{member.name}</h3>
                  <div className="text-xs font-bold text-[#D2232A]">{member.role}</div>
                  {member.bio && (
                    <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                      {member.bio}
                    </p>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[11px] font-bold text-slate-600 hover:text-[#D2232A] pt-2"
                    >
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kirkland Office & Contact Strip */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase text-[#D2232A] font-bold">Pacific Northwest Headquarters</div>
            <div className="text-xl font-semibold text-[#0B1F33] mt-1 font-serif">
              {OFFICE_CONTACT.addressLine1}, {OFFICE_CONTACT.addressLine2}
            </div>
            <div className="text-sm text-slate-600 mt-1">Direct Phone: {OFFICE_CONTACT.phone}</div>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenConsultation('About Page Discuss a Challenge')}
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white font-bold text-sm transition shadow-md shadow-red-900/20"
            >
              <span>Discuss a Challenge</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};
