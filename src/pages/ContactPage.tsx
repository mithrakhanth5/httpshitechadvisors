import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Lock,
  Clock
} from 'lucide-react';
import { OFFICE_CONTACT } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Cloud & Security Architecture');
  const [message, setMessage] = useState('');
  const [timeline, setTimeline] = useState('Immediate (< 30 days)');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-12 bg-slate-950">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-rose-400 font-semibold">Contact &amp; Advisory Briefing</span>
        </nav>
      </div>

      {/* Main Page Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Executive Engagement</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Talk to an <span className="text-rose-500">Expert</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Whether you are navigating a corporate spin-off, architecting an AI inference engine, or embedding senior engineering squads, our principal advisors are here to help.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 space-y-6 shadow-2xl">
              <div>
                <span className="text-xs font-mono uppercase text-rose-400 tracking-wider">
                  Pacific Northwest Headquarters
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Kirkland, Washington</h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <a
                  href={OFFICE_CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 transition group"
                >
                  <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white group-hover:text-rose-300 transition">
                      {OFFICE_CONTACT.addressLine1}
                    </div>
                    <div className="text-xs text-slate-400">{OFFICE_CONTACT.addressLine2}</div>
                    <div className="mt-1 text-[11px] text-rose-400 font-mono flex items-center">
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${OFFICE_CONTACT.email}`}
                  className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 transition group"
                >
                  <Mail className="w-5 h-5 text-rose-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <div className="font-semibold text-white group-hover:text-rose-300 transition">
                      {OFFICE_CONTACT.email}
                    </div>
                  </div>
                </a>

                <a
                  href={OFFICE_CONTACT.phoneRaw}
                  className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 transition group"
                >
                  <Phone className="w-5 h-5 text-rose-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400">Telephone</div>
                    <div className="font-semibold text-white group-hover:text-rose-300 transition">
                      {OFFICE_CONTACT.phone}
                    </div>
                  </div>
                </a>
              </div>

              {/* Response Time SLA */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Executive Response Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  All enterprise inquiries are routed directly to a Principal Practice Lead with guaranteed review within 24 business hours.
                </p>
              </div>
            </div>

            {/* Advisory FAQ Pill */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 text-xs text-slate-300 space-y-3">
              <div className="font-bold text-white text-sm">Engagement Quick Facts</div>
              <ul className="space-y-2 text-slate-400">
                <li>• <strong>Initial Strategic Briefing:</strong> Always complimentary with zero obligation.</li>
                <li>• <strong>Confidentiality:</strong> Mutual NDA provided prior to technical review.</li>
                <li>• <strong>Deployment:</strong> Specialists can be embedded within 14 business days.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase text-rose-400">Direct Inquiry</span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Schedule a Strategic Briefing
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Tell us about your organization's current initiatives and objectives.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. David Vance"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="david@enterprise.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Company, Inc."
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5">
                          Primary Practice Area
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-rose-500"
                        >
                          <option value="Cloud & Security Architecture">Cloud &amp; Security Architecture</option>
                          <option value="Product & AI Engineering">Product &amp; AI Engineering</option>
                          <option value="IT Systems & Operations">IT Systems &amp; Autonomous Operations</option>
                          <option value="Talent Solutions & Embedded Teams">Talent Solutions &amp; Embedded Teams</option>
                          <option value="Growth Acceleration">Growth Acceleration &amp; GTM</option>
                          <option value="M&A Divestiture / MDM Spin-Off">M&amp;A Divestiture / MDM Spin-Off</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Initiative Timeline
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Immediate (< 30 days)', 'Next Quarter', 'Exploratory'].map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setTimeline(t)}
                            className={`p-2 rounded-xl text-xs font-medium border text-center transition ${
                              timeline === t
                                ? 'bg-rose-950/60 border-rose-500 text-white'
                                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Project Scope or Architecture Challenge
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly describe systems involved, milestones, or current team bottlenecks..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500"
                      ></textarea>
                    </div>

                    <div className="flex items-center text-[11px] text-slate-400 space-x-1.5 pt-1">
                      <Lock className="w-3.5 h-3.5 text-slate-500" />
                      <span>Protected by standard bilateral NDA &amp; enterprise privacy policies.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 shadow-xl shadow-rose-950/50 flex items-center justify-center transition"
                    >
                      {isSubmitting ? (
                        <span>Connecting to Practice Lead...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>Request Executive Strategic Briefing</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-600/50 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Briefing Request Confirmed
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. A Principal Practice Lead specializing in <strong className="text-rose-400">{service}</strong> will contact you directly within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setCompany('');
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-slate-900 text-xs font-semibold text-white border border-slate-700 hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
