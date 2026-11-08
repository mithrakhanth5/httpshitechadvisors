import React, { useState } from 'react';
import { HitechLogo } from './ui/HitechLogo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [selectedSlot, setSelectedSlot] = useState<string>('Tomorrow, 10:00 AM PST (1:00 PM EST)');
  const [email, setEmail] = useState('');
  const [teamSize, setTeamSize] = useState('20-100');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const slots = [
    'Tomorrow, 10:00 AM PST (1:00 PM EST)',
    'Tomorrow, 2:30 PM PST (5:30 PM EST)',
    'Thursday, 11:00 AM PST (2:00 PM EST)',
    'Thursday, 3:00 PM PST (6:00 PM EST)',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1f33]/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#d9e0e6] p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f4f6f8] hover:bg-[#d9e0e6] text-[#0b1f33] flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
          aria-label="Close"
        >
          &times;
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HitechLogo className="w-8 h-8" />
              <span className="font-display font-semibold text-lg text-[#020626]">
                Schedule an Executive Briefing
              </span>
            </div>

            <p className="text-sm text-[#3a4a5a] leading-relaxed mb-6">
              Connect with a senior Hitech partner to review your architecture, discuss delivery challenges, and map actionable next steps.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#3a4a5a] uppercase tracking-wider mb-1.5">
                  Select a Discussion Window
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                        selectedSlot === slot
                          ? 'border-[#D22931] bg-[#D22931]/8 font-semibold text-[#020626] shadow-xs'
                          : 'border-[#DCE4EC] text-[#3a4a5a] hover:border-[#D22931]/40'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3a4a5a] uppercase tracking-wider mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="executive@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EBF2F7] border border-[#DCE4EC] text-[#020626] text-sm focus:outline-none focus:ring-2 focus:ring-[#D22931]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3a4a5a] uppercase tracking-wider mb-1.5">
                  Company / Organization Size
                </label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#EBF2F7] border border-[#DCE4EC] text-[#020626] text-sm focus:outline-none focus:ring-2 focus:ring-[#D22931]"
                >
                  <option value="1-50">1 - 50 employees</option>
                  <option value="51-200">51 - 200 employees</option>
                  <option value="201-1000">201 - 1,000 employees</option>
                  <option value="1000+">1,000+ employees (Enterprise)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#D22931] hover:bg-[#b71c24] text-white font-semibold text-sm transition-all duration-200 shadow-md cursor-pointer active:scale-98"
                >
                  Confirm Executive Briefing
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#D22931]/10 border border-[#D22931]/30 flex items-center justify-center mx-auto mb-4 text-[#D22931] text-2xl font-bold">
              &check;
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#020626]">
              Briefing Requested!
            </h3>
            <p className="text-sm text-[#3a4a5a] mt-2 max-w-sm mx-auto leading-relaxed">
              We&apos;ve placed a calendar hold for <strong>{selectedSlot}</strong>. A confirmation note and calendar invite have been sent to <strong>{email}</strong> from our Kirkland, WA team.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#020626] hover:bg-[#020626]/85 text-white text-xs font-semibold cursor-pointer transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
