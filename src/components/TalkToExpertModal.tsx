import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Phone, 
  Mail, 
  Lock
} from 'lucide-react';
import { OFFICE_CONTACT } from '../data/siteData';

interface TalkToExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const TalkToExpertModal: React.FC<TalkToExpertModalProps> = ({
  isOpen,
  onClose,
  initialTopic = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Cloud & Security Architecture');
  const [timeline, setTimeline] = useState('Immediate (< 30 days)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setNotes((prev) => prev ? prev : `Referenced Topic: ${initialTopic}`);
    }
  }, [initialTopic]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous enterprise submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-rose-400 uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>Executive Advisory Consultation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Talk to a Hitech Advisor
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                Connect directly with a Senior Practice Leader. Confidential, NDA-protected strategic assessment of your architecture and talent objectives.
              </p>
            </div>

            {/* Form */}
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
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500 transition"
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Primary Service Area
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-rose-500 transition"
                  >
                    <option value="Cloud & Security Architecture">Cloud &amp; Security Architecture</option>
                    <option value="Product & AI Engineering">Product &amp; AI Engineering</option>
                    <option value="IT Systems & Autonomous Operations">IT Systems &amp; Autonomous Operations</option>
                    <option value="Talent Solutions & Embedded Teams">Talent Solutions &amp; Embedded Teams</option>
                    <option value="Growth Acceleration & Market Strategy">Growth Acceleration &amp; GTM</option>
                    <option value="M&A Tech Carve-Out & Separation">M&amp;A Tech Carve-Out &amp; Separation</option>
                    <option value="Executive Advisory & Strategy">Executive Advisory / Fractional CTO</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Deployment Timeline
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    'Immediate (< 30 days)',
                    'Within 60-90 days',
                    'Exploratory / Planning',
                  ].map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setTimeline(time)}
                      className={`px-3 py-2 rounded-xl text-[11px] font-medium border text-center transition ${
                        timeline === time
                          ? 'bg-rose-950/60 border-rose-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Scope Overview or Key Objectives
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Outline key systems, challenges, or goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-rose-500 transition"
                ></textarea>
              </div>

              {/* Privacy / Security Notice */}
              <div className="flex items-center text-[11px] text-slate-400 space-x-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <span>Information is strictly confidential and protected by mutual NDA.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 shadow-xl shadow-rose-950/50 flex items-center justify-center transition"
              >
                {isSubmitting ? (
                  <span>Securing Calendar Slot...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    <span>Request Executive Consultation</span>
                  </>
                )}
              </button>
            </form>

            {/* Direct Contact Bar */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1 text-rose-500" />
                <span>{OFFICE_CONTACT.phone}</span>
              </span>
              <span className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1 text-rose-500" />
                <span>{OFFICE_CONTACT.email}</span>
              </span>
            </div>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/50 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Briefing Request Received
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name}</strong>. A Hitech Principal Advisor specializing in <strong className="text-rose-400">{service}</strong> will contact you at <strong className="text-white">{email}</strong> within 1 business day.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 max-w-sm mx-auto text-left space-y-1.5 font-mono">
              <div>• Reference: HTA-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div>• Organization: {company}</div>
              <div>• Priority Level: Executive Expedited</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
