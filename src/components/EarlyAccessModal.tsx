import React, { useState } from 'react';
import { SymmetryMark } from './SymmetryMark';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Founder');
  const [tools, setTools] = useState<string[]>(['Slack', 'Gmail']);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleTool = (tool: string) => {
    setTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2e2926]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#2e2926]/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f5f3f2] hover:bg-[#edecea] text-[#2e2926] flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
        >
          &times;
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <SymmetryMark size={28} interactive />
              <span className="font-display font-semibold text-lg text-[#2e2926]">
                Get Early Access to Sym
              </span>
            </div>

            <p className="text-sm text-[#2e2926]/70 leading-relaxed mb-6">
              Join teams from Stripe, Figma, and Notion testing Sym’s autonomous workplace coordination.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#2e2926]/70 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f2] border border-[#2e2926]/12 text-[#2e2926] text-sm focus:outline-none focus:ring-2 focus:ring-[#6cbee4]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2e2926]/70 uppercase tracking-wider mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f2] border border-[#2e2926]/12 text-[#2e2926] text-sm focus:outline-none focus:ring-2 focus:ring-[#6cbee4]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2e2926]/70 uppercase tracking-wider mb-1.5">
                  Primary Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f2] border border-[#2e2926]/12 text-[#2e2926] text-sm focus:outline-none focus:ring-2 focus:ring-[#6cbee4]"
                >
                  <option value="Founder">Founder / CEO</option>
                  <option value="Product">Product Manager</option>
                  <option value="Operations">Operations / BizOps</option>
                  <option value="Sales">Sales / Account Exec</option>
                  <option value="Client Services">Client Services / Support</option>
                  <option value="Recruiting">Recruiting / Talent</option>
                  <option value="Engineering">Engineering Lead</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2e2926]/70 uppercase tracking-wider mb-2">
                  Tools you use daily
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Slack', 'Gmail', 'Notion', 'Linear', 'Google Drive', 'HubSpot', 'Figma', 'Asana'].map(
                    (tool) => {
                      const active = tools.includes(tool);
                      return (
                        <button
                          key={tool}
                          type="button"
                          onClick={() => toggleTool(tool)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer border ${
                            active
                              ? 'bg-[#2e2926] text-white border-[#2e2926]'
                              : 'bg-[#f5f3f2] text-[#2e2926]/70 border-transparent hover:border-[#2e2926]/20'
                          }`}
                        >
                          {tool}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#2e2926] hover:bg-[#3d3632] text-white font-semibold text-sm transition-all duration-200 shadow-md cursor-pointer active:scale-98"
                >
                  Request Early Access Invite
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#e2f9e9] border border-[#40aa4a]/30 flex items-center justify-center mx-auto mb-4 text-[#216828] text-2xl font-bold">
              &check;
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#2e2926]">
              You're on the priority list!
            </h3>
            <p className="text-sm text-[#2e2926]/70 mt-2 max-w-sm mx-auto leading-relaxed">
              Thanks {name || 'there'}! We have registered your invite request for {email}. We’ll reach out as the next cohort opens.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#2e2926] text-white text-xs font-semibold cursor-pointer"
            >
              Back to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
