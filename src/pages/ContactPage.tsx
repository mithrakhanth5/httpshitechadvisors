import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock
} from 'lucide-react';
import { OFFICE_CONTACT } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [solutionArea, setSolutionArea] = useState('CRM, ERP & Business Applications');
  const [message, setMessage] = useState('');
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
    <div className="py-12 bg-white min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-500 font-semibold">
          <Link to="/" className="hover:text-[#0B1F33] transition">Home</Link>
          <span>/</span>
          <span className="text-[#D2232A]">Discuss a Challenge</span>
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Intake</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            Discuss a <span className="text-[#D2232A] italic">Challenge.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Share your challenge. A senior consultant will come back to you within 24 hours — with questions worth answering, not a sales pitch.
          </p>
        </motion.div>

        {/* Two-Column Form & What Happens Next */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-xs"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-4"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] font-serif">
                    Challenge Received
                  </h2>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#0B1F33] font-bold">{name}</span>. Our practice lead will review your submission and respond within 24 hours.
                  </p>
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white font-bold text-sm transition shadow-md shadow-red-900/20"
                    >
                      Submit Another Inquiry
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#0B1F33] placeholder-slate-400 focus:outline-none focus:border-[#D2232A] focus:ring-1 focus:ring-[#D2232A] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#0B1F33] placeholder-slate-400 focus:outline-none focus:border-[#D2232A] focus:ring-1 focus:ring-[#D2232A] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Organization name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#0B1F33] placeholder-slate-400 focus:outline-none focus:border-[#D2232A] focus:ring-1 focus:ring-[#D2232A] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Solution Area of Interest
                      </label>
                      <select
                        value={solutionArea}
                        onChange={(e) => setSolutionArea(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#0B1F33] focus:outline-none focus:border-[#D2232A] focus:ring-1 focus:ring-[#D2232A] transition font-medium"
                      >
                        <option value="CRM, ERP & Business Applications">CRM, ERP &amp; Business Applications</option>
                        <option value="Data & Customer Intelligence">Data &amp; Customer Intelligence</option>
                        <option value="Cybersecurity & Risk">Cybersecurity &amp; Risk</option>
                        <option value="IT Operations & Cloud">IT Operations &amp; Cloud</option>
                        <option value="AI Adoption & Agents">AI Adoption &amp; Agents</option>
                        <option value="Strategy & Architecture Advisory">Strategy &amp; Architecture Advisory</option>
                        <option value="Talent & Managed Teams">Talent &amp; Managed Teams</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Describe Your Challenge or Strategic Objective *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What systems, operational drag, or technology decisions are you working to resolve?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#0B1F33] placeholder-slate-400 focus:outline-none focus:border-[#D2232A] focus:ring-1 focus:ring-[#D2232A] transition"
                    ></textarea>
                  </div>

                  {/* Privacy & Guarantee note */}
                  <div className="flex items-center justify-between pt-2 text-xs text-slate-500 font-medium">
                    <div className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Confidential. Strictly vendor-neutral.</span>
                    </div>
                    <div className="flex items-center space-x-1 font-bold text-[#D2232A]">
                      <Clock className="w-4 h-4" />
                      <span>24h Response Guarantee</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-[#D2232A] hover:bg-[#B71C22] shadow-md shadow-red-900/20 text-sm transition"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Submit Challenge to Senior Consultants</span>
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: What Happens Next & Direct Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-[#0B1F33] font-serif">
                What happens next
              </h3>

              <div className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Senior Review',
                    desc: 'Your challenge is reviewed directly by a principal consultant, not a SDR or automated triage queue.',
                  },
                  {
                    step: '02',
                    title: 'Targeted Questions',
                    desc: 'We return within 24 hours with architectural clarification questions, not generic pitch decks.',
                  },
                  {
                    step: '03',
                    title: 'Strategic Briefing',
                    desc: 'A focused 30-minute discovery session to explore technical options, trade-offs, and estimated timelines.',
                  },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 3 }}
                    className="flex items-start space-x-4 transition-transform"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-[#D2232A] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-xs">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0B1F33]">{item.title}</div>
                      <div className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Direct Details */}
              <div className="pt-6 border-t border-slate-200 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Direct Office Contacts
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <a
                    href={OFFICE_CONTACT.phoneRaw}
                    className="flex items-center hover:text-[#D2232A] transition font-bold"
                  >
                    <Phone className="w-4 h-4 mr-2 text-[#D2232A]" />
                    <span>{OFFICE_CONTACT.phone}</span>
                  </a>
                  <a
                    href={`mailto:${OFFICE_CONTACT.email}`}
                    className="flex items-center hover:text-[#D2232A] transition"
                  >
                    <Mail className="w-4 h-4 mr-2 text-[#D2232A]" />
                    <span>{OFFICE_CONTACT.email}</span>
                  </a>
                  <a
                    href={OFFICE_CONTACT.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-[#D2232A] transition"
                  >
                    <MapPin className="w-4 h-4 mr-2 text-[#D2232A] flex-shrink-0 mt-0.5" />
                    <span>{OFFICE_CONTACT.addressLine1}, {OFFICE_CONTACT.addressLine2}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
