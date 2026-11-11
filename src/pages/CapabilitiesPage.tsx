import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { ExecutiveLeadershipSection } from '../components/sections/ExecutiveLeadershipSection';
import { NextPageBanner } from '../components/ui/NextPageBanner';
import { CtaBanner } from '../components/sections/CtaBanner';

interface CapabilitiesPageProps {
  onOpenDiscuss: (area?: string) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onOpenDiscuss }) => {
  return (
    <div>
      <PageHero
        badge="Delivery Capabilities · Advise to Deliver"
        title="Four Ways We Connect Strategy to"
        highlightTitle="Execution."
        description="From strategic advisory to embedded engineering teams, we provide senior capability that integrates directly into your organization with zero handoff loss."
        onOpenDiscuss={() => onOpenDiscuss('capabilities')}
        ctaText="Discuss Capabilities"
        visual={
          <div className="relative rounded-3xl overflow-hidden border border-[#DCE4EC] shadow-2xl bg-[#020626] group">
            <img
              src="./images/strategy-execution-pod.jpg"
              alt="Hitech Advisors Senior Engineering & Strategic Leadership Pod"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020626]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/95 px-4 py-2 rounded-xl bg-[#020626]/85 backdrop-blur-md border border-white/10">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D22931]" />
                <span className="font-sans font-medium text-white">Strategy &amp; Engineering Pod</span>
              </span>
              <span className="text-[#FAC344] font-bold">Seattle, WA</span>
            </div>
          </div>
        }
      />

      <CapabilitiesSection onSelectCapability={(cap) => onOpenDiscuss(cap)} />

      <ExecutiveLeadershipSection onOpenDiscuss={(area) => onOpenDiscuss(area || 'capabilities')} />

      <NextPageBanner
        currentStage="Stage 03 of 07"
        nextTitle="Delivery Methodology &middot; Four-Phase Framework"
        nextPath="/methodology"
        description="Discover our structured delivery methodology: Strategic Diagnosis, Target Architecture, Hands-On Engineering, and Operational Handover."
      />

      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('capabilities')} />
    </div>
  );
};
