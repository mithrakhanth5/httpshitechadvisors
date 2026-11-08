import React from 'react';
import { Scale, Rocket, Award, Network } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

export const WhyHitech: React.FC = () => {
  const { whyHitech } = hitechContent;

  const reasonIcons = [
    <Scale key="scale" className="w-6 h-6 text-[#0B7A7C]" />,
    <Rocket key="rocket" className="w-6 h-6 text-[#0B7A7C]" />,
    <Award key="award" className="w-6 h-6 text-[#0B7A7C]" />,
    <Network key="network" className="w-6 h-6 text-[#0B7A7C]" />,
  ];

  return (
    <section className="section-spacing bg-white border-t border-[#D9E0E6]">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <div className="text-eyebrow mb-3">
            Differentiation
          </div>
          <h2 className="text-h2">
            {whyHitech.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyHitech.reasons.map((item, idx) => (
            <div
              key={item.title}
              className="space-y-3.5 p-6 rounded-lg bg-[#F4F6F8]/40 border border-[#D9E0E6]/60 hover:bg-[#F4F6F8] transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-white border border-[#D9E0E6] flex items-center justify-center shadow-2xs">
                {reasonIcons[idx]}
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#0B1F33]">
                {item.title}
              </h3>
              <p className="text-sm text-[#3A4A5A] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
