import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface AnnouncementBarProps {
  onOpenEvent: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenEvent }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const { announcement } = hitechContent;

  return (
    <aside 
      aria-label="Upcoming Event"
      className="bg-[#0B1F33] text-white text-xs sm:text-sm py-2.5 px-4 border-b border-[#0B7A7C]/30 relative z-50 transition-all duration-300"
    >
      <div className="container-custom flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#0B7A7C] text-white uppercase tracking-wider">
            Event
          </span>
          <span className="text-white/90 font-medium">
            {announcement.eventTitle} — {announcement.city}, {announcement.date}.
          </span>
          <button
            onClick={onOpenEvent}
            className="inline-flex items-center gap-1 text-[#6CBEE4] hover:text-white font-semibold underline underline-offset-4 decoration-[#6CBEE4]/50 hover:decoration-white transition-colors cursor-pointer ml-1"
          >
            {announcement.action}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-white/60 hover:text-white p-1 rounded transition-colors cursor-pointer flex-shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
