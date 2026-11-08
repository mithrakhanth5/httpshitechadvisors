import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Clock, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface DiscussChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetHelpArea?: string;
}

export const DiscussChallengeModal: React.FC<DiscussChallengeModalProps> = ({
  isOpen,
  onClose,
  presetHelpArea,
}) => {
  const { helpAreaOptions, contactInfo } = hitechContent;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    jobTitle: '',
    phone: '',
    helpArea: presetHelpArea || 'not-sure',
    challenge: '',
    companySize: '',
    hearAbout: '',
    consent: false,
    marketing: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.workEmail || !formData.company || !formData.challenge || !formData.consent) {
      setErrorMsg('Please complete all required fields and accept the Privacy Policy.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#D9E0E6] overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#3A4A5A] hover:text-[#0B1F33] hover:bg-[#F4F6F8] transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Submission Confirmation Screen (Section 8.23) */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#E6F2F2] text-[#0B7A7C] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F33]">
                Thanks — we&rsquo;ve got it.
              </h3>
              <p className="text-body max-w-lg mx-auto">
                A senior consultant will review your note and reply within <strong>{contactInfo.responseTime}</strong>.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#F4F6F8] border border-[#D9E0E6] max-w-md mx-auto text-left text-xs text-[#3A4A5A] space-y-2">
              <div className="font-semibold text-[#0B1F33]">Next Steps:</div>
              <p>1. We review your challenge details in our Kirkland office.</p>
              <p>2. We reach out with questions worth answering to schedule a 30-minute conversation.</p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="btn-primary"
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          /* Standard Modal Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[#D9E0E6] max-h-[85vh] overflow-y-auto">
              <div className="mb-6 space-y-2">
                <div className="text-eyebrow">
                  Direct Inquiries
                </div>
                <h2 id="modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1F33]">
                  Tell us what you&rsquo;re trying to solve
                </h2>
                <p className="text-xs sm:text-sm text-[#3A4A5A]">
                  Share a few details and a senior consultant will reply within {contactInfo.responseTime}. No sales sequence — just a real conversation about your problem.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-md bg-red-50 border border-red-200 text-xs text-red-700">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Jane"
                      className="w-full px-3 py-2 rounded-md border border-[#D9E0E6] focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] focus:outline-none bg-white text-[#0B1F33]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full px-3 py-2 rounded-md border border-[#D9E0E6] focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] focus:outline-none bg-white text-[#0B1F33]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2 rounded-md border border-[#D9E0E6] focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] focus:outline-none bg-white text-[#0B1F33]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-3 py-2 rounded-md border border-[#D9E0E6] focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] focus:outline-none bg-white text-[#0B1F33]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      placeholder="VP of Engineering"
                      className="w-full px-3 py-2 rounded-md border border-[#D9E0E6] focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] focus:outline-none bg-white text-[#0B1F33]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-3 py-2 rounded-md border border-[#D9E0E6] focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] focus:outline-none bg-white text-[#0B1F33]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1F33] mb-1">
                    What can we help with? <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.helpArea}
                    onChange={(e) => setFormData({ ...formData, helpArea: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-[#D9E0E6] focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] focus:outline-none bg-white text-[#0B1F33]"
                  >
                    {helpAreaOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-[#0B1F33]">
                      Tell us about the challenge <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-[#3A4A5A]/60">
                      {formData.challenge.length} / 1000
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    maxLength={1000}
                    required
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    placeholder="Describe your current systems, constraints, team, or timeline..."
                    className="w-full px-3 py-2 rounded-md border border-[#D9E0E6] focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] focus:outline-none bg-white text-[#020626]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#020626] mb-1">
                      Company Size
                    </label>
                    <select
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border border-[#D9E0E6] focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] focus:outline-none bg-white text-[#020626]"
                    >
                      <option value="">Select size...</option>
                      <option value="1-50">1–50</option>
                      <option value="51-200">51–200</option>
                      <option value="201-1000">201–1,000</option>
                      <option value="1001-5000">1,001–5,000</option>
                      <option value="5000+">5,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#020626] mb-1">
                      How did you hear about us?
                    </label>
                    <select
                      value={formData.hearAbout}
                      onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border border-[#D9E0E6] focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] focus:outline-none bg-white text-[#020626]"
                    >
                      <option value="">Select source...</option>
                      <option value="Search">Search</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Event">Executive Event</option>
                      <option value="Referral">Referral</option>
                      <option value="Hitech Contact">Someone from Hitech contacted me</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded text-[#D22931] focus:ring-[#D22931]"
                    />
                    <span className="text-xs text-[#3A4A5A]">
                      I agree to the <a href="#privacy" className="text-[#D22931] underline">Privacy Policy</a>. <span className="text-red-500">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.marketing}
                      onChange={(e) => setFormData({ ...formData, marketing: e.target.checked })}
                      className="mt-0.5 rounded text-[#D22931] focus:ring-[#D22931]"
                    />
                    <span className="text-xs text-[#3A4A5A]">
                      Send me insights and executive event invitations.
                    </span>
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#D22931] hover:bg-[#B71C24] text-white font-semibold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Challenge</span>
                  </button>
                  <p className="text-[11px] text-[#3A4A5A]/70 text-center mt-2">
                    We&rsquo;ll only use your details to respond to your inquiry, as described in our Privacy Policy.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar Column: What Happens Next (5 cols) */}
            <div className="lg:col-span-5 bg-[#F4F6F8] p-6 sm:p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D22931] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>What Happens Next</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#020626]">
                    No sales runaround.
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#3A4A5A]">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-[#D9E0E6] flex items-center justify-center font-bold text-[#D22931] text-xs">
                      1
                    </span>
                    <p className="m-0 leading-relaxed">
                      A senior consultant reads your note and replies within <strong>{contactInfo.responseTime}</strong>.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-[#D9E0E6] flex items-center justify-center font-bold text-[#D22931] text-xs">
                      2
                    </span>
                    <p className="m-0 leading-relaxed">
                      We schedule a short 30-minute conversation focused on the problem, not a sales pitch.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-[#D9E0E6] flex items-center justify-center font-bold text-[#D22931] text-xs">
                      3
                    </span>
                    <p className="m-0 leading-relaxed">
                      If we&rsquo;re a fit, we provide a short written perspective on the recommended approach.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white border border-[#D9E0E6] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#020626]">
                    <ShieldCheck className="w-4 h-4 text-[#D22931]" />
                    <span>Our Engagement Guarantee</span>
                  </div>
                  <p className="text-xs text-[#3A4A5A] leading-relaxed">
                    We start with your business problem, stay vendor-neutral, and remain accountable through working delivery.
                  </p>
                </div>
              </div>

              {/* Direct Contact Info */}
              <div className="pt-6 border-t border-[#D9E0E6] space-y-2 text-xs text-[#3A4A5A]">
                <div className="font-semibold text-[#020626] mb-1">
                  Prefer direct contact?
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D22931]" />
                  <a href={`mailto:${contactInfo.email}`} className="text-[#D22931] hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D22931]" />
                  <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="text-[#D22931] hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D22931] mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
