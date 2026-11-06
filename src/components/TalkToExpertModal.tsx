import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';

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
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    role: '',
    solutionArea: 'CRM, ERP & Business Applications',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setFormData((prev) => ({
        ...prev,
        solutionArea: initialTopic,
      }));
    }
  }, [initialTopic]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-10 overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-[#0B1F33] hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] tracking-tight font-serif">
              Challenge Received
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#0B1F33] font-bold">{formData.fullName}</span>. A senior Hitech consultant will review your challenge and reach out within 24 hours with questions worth answering.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white font-bold text-sm transition shadow-md shadow-red-900/20"
              >
                Close &amp; Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center space-x-2 text-[#D2232A] text-xs font-mono uppercase tracking-wider font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Intake</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F33] tracking-tight font-serif">
                Discuss a Challenge
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                A senior consultant will respond within 24 hours — with questions worth answering, not a sales pitch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-[#0B1F33] placeholder-slate-400 focus:outline-none focus:border-[#D2232A] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-[#0B1F33] placeholder-slate-400 focus:outline-none focus:border-[#D2232A] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-[#0B1F33] placeholder-slate-400 focus:outline-none focus:border-[#D2232A] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Solution Area of Interest
                  </label>
                  <select
                    value={formData.solutionArea}
                    onChange={(e) => setFormData({ ...formData, solutionArea: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-[#0B1F33] focus:outline-none focus:border-[#D2232A] transition"
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
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Describe Your Challenge or Objective *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What systems, operational bottlenecks, or strategic outcomes are you addressing?"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-[#0B1F33] placeholder-slate-400 focus:outline-none focus:border-[#D2232A] transition"
                ></textarea>
              </div>

              {/* Trust & Response Guarantee Note */}
              <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-medium">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Confidential. We never share your data.</span>
                </div>
                <div className="flex items-center space-x-1 font-bold text-[#D2232A]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Guaranteed 24h Response</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-[#D2232A] hover:bg-[#B71C22] shadow-md shadow-red-900/20 text-sm transition"
                >
                  {loading ? (
                    <span>Submitting Challenge...</span>
                  ) : (
                    <>
                      <span>Submit Challenge to Senior Practice</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
