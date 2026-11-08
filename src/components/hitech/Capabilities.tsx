import React from 'react';
import { Compass, Code2, TrendingUp, Users2, ArrowRight } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface CapabilitiesProps {
  onSelectCapability: (helpArea: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCapability }) => {
  const { capabilities } = hitechContent;

  const capIcons = [
    <Compass key="compass" className="w-5 h-5 text-[#0B7A7C]" />,
    <Code2 key="code" className="w-5 h-5 text-[#0B7A7C]" />,
    <TrendingUp key="trend" className="w-5 h-5 text-[#0B7A7C]" />,
    <Users2 key="users" className="w-5 h-5 text-[#0B7A7C]" />,
  ];

  return (
    <section id="capabilities" className="section-spacing bg-[#F4F6F8] border-t border-[#D9E0E6]">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <div className="text-eyebrow mb-3">
            Delivery Engine
          </div>
          <h2 className="text-h2">
            {capabilities.headline}
          </h2>
          <p className="text-body-lg text-[#3A4A5A] mt-3">
            {capabilities.subhead}
          </p>
        </div>

        {/* 4 Capability Cards in a 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.cards.map((cap, idx) => (
            <div
              key={cap.title}
              className="hitech-card p-6 flex flex-col justify-between bg-white"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-md bg-[#F4F6F8] border border-[#D9E0E6] flex items-center justify-center">
                  {capIcons[idx]}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#0B1F33]">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#3A4A5A] leading-relaxed mt-2.5">
                    {cap.line}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F4F6F8]">
                <button
                  onClick={() => onSelectCapability(cap.helpArea)}
                  className="link-arrow text-sm font-semibold cursor-pointer w-full justify-between"
                >
                  <span>Explore capability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
