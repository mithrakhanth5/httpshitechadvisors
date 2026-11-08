import React from 'react';
import { TableProperties, Brain, AlertTriangle } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

export const ProblemStatement: React.FC = () => {
  const { problemStatement } = hitechContent;

  const cardIcons = [
    <TableProperties key="table" className="w-5 h-5 text-[#0B7A7C]" />,
    <Brain key="brain" className="w-5 h-5 text-[#0B7A7C]" />,
    <AlertTriangle key="alert" className="w-5 h-5 text-[#0B7A7C]" />,
  ];

  return (
    <section className="section-spacing bg-[#F4F6F8] border-y border-[#D9E0E6]">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <div className="text-eyebrow mb-3">
            The Reality of Enterprise Technology
          </div>
          <h2 className="text-h2">
            {problemStatement.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problemStatement.cards.map((card, index) => (
            <div
              key={card.id}
              className="bg-white rounded-lg border border-[#D9E0E6] p-7 flex flex-col justify-between shadow-2xs hover:border-[#BAC7D1] hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-md bg-[#F4F6F8] border border-[#D9E0E6] flex items-center justify-center">
                  {cardIcons[index]}
                </div>
                <h3 className="text-lg font-semibold text-[#0B1F33] leading-snug">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-[#3A4A5A] leading-relaxed mt-4 pt-4 border-t border-[#F4F6F8]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
