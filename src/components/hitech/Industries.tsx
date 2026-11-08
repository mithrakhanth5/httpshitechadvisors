import React from 'react';
import { 
  Building2, 
  ShoppingCart, 
  Landmark, 
  Stethoscope, 
  Factory, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface IndustriesProps {
  onOpenContact: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenContact }) => {
  const { industries } = hitechContent;

  const industryIcons = [
    <Building2 key="tech" className="w-5 h-5 text-[#0B7A7C]" />,
    <ShoppingCart key="retail" className="w-5 h-5 text-[#0B7A7C]" />,
    <Landmark key="fin" className="w-5 h-5 text-[#0B7A7C]" />,
    <Stethoscope key="health" className="w-5 h-5 text-[#0B7A7C]" />,
    <Factory key="mfg" className="w-5 h-5 text-[#0B7A7C]" />,
    <HeartHandshake key="nonprofit" className="w-5 h-5 text-[#0B7A7C]" />,
  ];

  return (
    <section id="industries" className="section-spacing bg-[#F4F6F8] border-t border-[#D9E0E6]">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <div className="text-eyebrow mb-3">
            Industry Depth
          </div>
          <h2 className="text-h2">
            {industries.headline}
          </h2>
          <p className="text-body-lg text-[#3A4A5A] mt-3">
            Technology problems look similar on paper and very different in practice. We bring cross-industry experience and people who know your sector's systems, regulations and customers.
          </p>
        </div>

        {/* 6 Industry Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.items.map((ind, idx) => (
            <div
              key={ind.name}
              className="bg-white rounded-lg border border-[#D9E0E6] p-6 flex flex-col justify-between hover:border-[#BAC7D1] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#F4F6F8] border border-[#D9E0E6] flex items-center justify-center">
                    {industryIcons[idx]}
                  </div>
                  <h3 className="text-base font-serif font-semibold text-[#0B1F33]">
                    {ind.name}
                  </h3>
                </div>
                <p className="text-xs text-[#3A4A5A] leading-relaxed pt-2 border-t border-[#F4F6F8]">
                  <strong className="text-[#0B1F33]">Typical challenges:</strong> {ind.challenges}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Prompt */}
        <div className="mt-10 p-6 rounded-lg bg-white border border-[#D9E0E6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-[#3A4A5A] m-0">
            {industries.closingPrompt}
          </p>
          <button
            onClick={onOpenContact}
            className="link-arrow text-sm font-semibold cursor-pointer flex-shrink-0"
          >
            <span>Discuss a Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
