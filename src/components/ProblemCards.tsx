import React from 'react';
import { PROBLEM_CARDS } from '../data/siteData';
import { ArrowRight, FileSpreadsheet, Bot, AlertTriangle } from 'lucide-react';

interface ProblemCardsProps {
  onSelectProblem?: (tag: string) => void;
}

export const ProblemCards: React.FC<ProblemCardsProps> = ({ onSelectProblem }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'spreadsheets':
        return <FileSpreadsheet className="w-5 h-5 text-amber-600" />;
      case 'ai-stall':
        return <Bot className="w-5 h-5 text-[#D2232A]" />;
      case 'risk-backlog':
        return <AlertTriangle className="w-5 h-5 text-rose-600" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-[#D2232A]" />;
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>Sound Familiar?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            The hardest business problems don't fit inside one technology category.
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            When systems fracture, friction compounds across the business. Most firms either hand you strategy slide decks or sell you their single preferred platform. We solve the disconnect across strategy, systems, data, security and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEM_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectProblem && onSelectProblem(card.tag)}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getIcon(card.id)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold px-2.5 py-1 rounded-md bg-slate-100">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1F33] tracking-tight group-hover:text-[#D2232A] transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#D2232A] group-hover:text-[#B71C22] transition-colors">
                <span>See how we solve this</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
