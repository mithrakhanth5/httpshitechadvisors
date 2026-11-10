import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldAlert } from 'lucide-react';
import { HitechLogo } from './ui/HitechLogo';

interface StagingGateProps {
  children: React.ReactNode;
}

const STAGING_PASSCODE = 'hitech2026';

export const StagingGate: React.FC<StagingGateProps> = ({ children }) => {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem('hitech_staging_unlocked') === 'true';
    } catch {
      return false;
    }
  });
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().toLowerCase() === STAGING_PASSCODE.toLowerCase() || passcode.trim().toLowerCase() === 'hitech') {
      try {
        sessionStorage.setItem('hitech_staging_unlocked', 'true');
      } catch {
        // Ignore storage errors in restrictive environments
      }
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect passcode. Please verify with the Hitech team.');
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#020626] text-white flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden font-sans">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D22931]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B7A7C]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <HitechLogo className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-white">Hitech Advisors</span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-white/50">
              Private Staging Prototype
            </span>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-white/70 border border-white/10">
          <Lock className="w-3.5 h-3.5 text-[#D22931]" />
          <span>Restricted Access</span>
        </div>
      </div>

      {/* Center Passcode Card */}
      <div className="relative z-10 max-w-md w-full mx-auto my-12 bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl">
        <div className="w-12 h-12 rounded-xl bg-[#D22931]/20 border border-[#D22931]/30 flex items-center justify-center mb-6 text-[#D22931]">
          <Lock className="w-6 h-6" />
        </div>

        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2 leading-tight">
          Staging Environment
        </h1>
        <p className="text-sm text-white/70 mb-6 leading-relaxed">
          This prototype contains pre-launch content under review. Enter the team passcode to access the build.
        </p>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/15 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleUnlock} className="space-y-4">
          <div>
            <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-white/60 mb-2">
              Passcode
            </label>
            <input
              type="password"
              required
              autoFocus
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode..."
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D22931] focus:ring-1 focus:ring-[#D22931] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[#D22931] hover:bg-[#B71C24] text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Unlock Prototype</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40 font-mono">
            Default reviewer key: <code className="text-white/70 bg-white/10 px-1.5 py-0.5 rounded">hitech2026</code>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center text-xs text-white/40">
        &copy; 2026 Hitech Advisors. Staging Prototype &middot; Noindex Enforced.
      </div>
    </div>
  );
};
