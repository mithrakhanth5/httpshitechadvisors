import React from 'react';
import { Layers, Database, ShieldAlert, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface SolutionAreasProps {
  onSelectArea: (areaCode: string) => void;
}

export const SolutionAreas: React.FC<SolutionAreasProps> = ({ onSelectArea }) => {
  const { solutions } = hitechContent;

  const getSolutionIcon = (id: string) => {
    switch (id) {
      case 'crm-erp':
        return <Layers className="w-5 h-5 text-[#0B7A7C]" />;
      case 'data':
        return <Database className="w-5 h-5 text-[#0B7A7C]" />;
      case 'cybersecurity':
        return <ShieldAlert className="w-5 h-5 text-[#0B7A7C]" />;
      case 'it-operations':
        return <Cpu className="w-5 h-5 text-[#0B7A7C]" />;
      case 'ai':
        return <Sparkles className="w-5 h-5 text-[#0B7A7C]" />;
      default:
        return <Layers className="w-5 h-5 text-[#0B7A7C]" />;
    }
  };

  return (
    <section id="solutions" className="section-spacing bg-[#F4F6F8] border-t border-[#D9E0E6]">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <div className="text-eyebrow mb-3">
            Core Solution Areas
          </div>
          <h2 className="text-h2">
            What we solve
          </h2>
          <p className="text-body-lg text-[#3A4A5A] mt-3">
            Five areas where business and technology meet. Most engagements touch more than one.
          </p>
        </div>

        {/* 5 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((sol, index) => {
            const isFullWidthOnLarge = index === 3 || index === 4;
            return (
              <div
                key={sol.id}
                className={`hitech-card p-8 flex flex-col justify-between ${
                  isFullWidthOnLarge && index === 3 ? 'lg:col-span-1' : ''
                } ${isFullWidthOnLarge && index === 4 ? 'lg:col-span-2' : ''}`}
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-md bg-[#F4F6F8] border border-[#D9E0E6] flex items-center justify-center">
                    {getSolutionIcon(sol.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-[#0B1F33]">
                      {sol.title}
                    </h3>
                    <p className="text-sm text-[#3A4A5A] leading-relaxed mt-2.5">
                      {sol.line}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F4F6F8] flex items-center justify-between">
                  <span className="text-xs text-[#3A4A5A]/70 font-mono">
                    {sol.platforms.split(',')[0]} &amp; more
                  </span>
                  <button
                    onClick={() => onSelectArea(sol.helpArea)}
                    className="link-arrow text-sm font-semibold cursor-pointer"
                  >
                    <span>Discuss</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Neutrality Note per Section 4 Rules */}
        <div className="mt-12 p-6 rounded-lg bg-white border border-[#D9E0E6] text-xs text-[#3A4A5A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <span className="font-semibold text-[#0B1F33]">Platform-neutral by design: </span>
            We evaluate and recommend what fits your architecture and budget — whether Salesforce, HubSpot, Microsoft Dynamics, Snowflake, Databricks, BigQuery, ServiceNow, AWS, Azure, Google Cloud, OpenAI, Claude, or custom code.
          </div>
          <span className="text-[#0B7A7C] font-semibold flex-shrink-0">
            No single-vendor agenda
          </span>
        </div>
      </div>
    </section>
  );
};
