import React from 'react';
import { CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

export const Proposition: React.FC = () => {
  const { proposition } = hitechContent;

  const pillarIcons = [
    <CheckCircle2 key="check" className="w-5 h-5 text-[#0B7A7C] flex-shrink-0 mt-1" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-[#0B7A7C] flex-shrink-0 mt-1" />,
    <Users key="users" className="w-5 h-5 text-[#0B7A7C] flex-shrink-0 mt-1" />,
  ];

  return (
    <section id="proposition" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Proposition Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-eyebrow">
              The Hitech Model
            </div>
            <h2 className="text-h2">
              {proposition.headline}
            </h2>
            <p className="text-body leading-relaxed text-[#3A4A5A]">
              {proposition.body}
            </p>
            <div className="pt-2">
              <a
                href="#how-it-works"
                className="link-arrow font-semibold"
              >
                <span>See how an engagement works</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Three Value Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {proposition.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 rounded-lg border border-[#D9E0E6] bg-[#F4F6F8]/60 hover:bg-[#F4F6F8] transition-colors"
              >
                <div className="flex items-start gap-4">
                  {pillarIcons[idx]}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold text-[#0B1F33]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#3A4A5A] leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
