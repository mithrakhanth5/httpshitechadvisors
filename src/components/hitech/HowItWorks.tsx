import { Check } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface HowItWorksProps {
  onOpenContact: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenContact }) => {
  const { howItWorks } = hitechContent;

  return (
    <section id="how-it-works" className="section-spacing bg-[#F4F6F8] border-t border-[#D9E0E6]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-eyebrow mb-3">
              Delivery Methodology
            </div>
            <h2 className="text-h2">
              {howItWorks.headline}
            </h2>
          </div>
          <button
            onClick={onOpenContact}
            className="link-arrow text-sm font-semibold cursor-pointer"
          >
            <span>{howItWorks.linkText}</span>
          </button>
        </div>

        {/* 4-Step Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorks.phases.map((phase) => (
            <div
              key={phase.step}
              className="bg-white rounded-lg border border-[#D9E0E6] p-6 flex flex-col justify-between shadow-2xs relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0B7A7C] px-2 py-0.5 rounded bg-[#E6F2F2]">
                    Step {phase.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#0B7A7C]" />
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#0B1F33]">
                  {phase.name}
                </h3>

                <p className="text-sm text-[#3A4A5A] leading-relaxed">
                  {phase.line}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4F6F8] bg-[#F4F6F8]/60 p-3 rounded-md">
                <div className="flex items-start gap-2 text-xs font-medium text-[#0B1F33]">
                  <Check className="w-3.5 h-3.5 text-[#0B7A7C] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B7A7C]">You get:</strong> {phase.takeaway}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Four Ways to Engage Banner per Section 8.8 / 8.16 */}
        <div className="mt-12 p-6 md:p-8 rounded-xl bg-white border border-[#D9E0E6] shadow-2xs">
          <div className="text-xs font-bold uppercase tracking-wider text-[#3A4A5A]/70 mb-4">
            Four Flexible Ways to Engage
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="p-3.5 rounded-lg bg-[#F4F6F8]/60 border border-[#D9E0E6]/50">
              <span className="font-semibold text-[#0B1F33] block">Advisory</span>
              <span className="text-xs text-[#3A4A5A] mt-1 block">Clear decisions, roadmaps, and architecture before committing.</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#F4F6F8]/60 border border-[#D9E0E6]/50">
              <span className="font-semibold text-[#0B1F33] block">Project Delivery</span>
              <span className="text-xs text-[#3A4A5A] mt-1 block">A defined outcome delivered on time for a defined scope.</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#F4F6F8]/60 border border-[#D9E0E6]/50">
              <span className="font-semibold text-[#0B1F33] block">Embedded Experts</span>
              <span className="text-xs text-[#3A4A5A] mt-1 block">Senior specialists who join your in-house team from day one.</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#F4F6F8]/60 border border-[#D9E0E6]/50">
              <span className="font-semibold text-[#0B1F33] block">Managed Teams</span>
              <span className="text-xs text-[#3A4A5A] mt-1 block">A complete team with its own leadership owning an area of work.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
