import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { NextPageBanner } from '../components/ui/NextPageBanner';
import { CtaBanner } from '../components/sections/CtaBanner';

interface CapabilitiesPageProps {
  onOpenDiscuss: (area?: string) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onOpenDiscuss }) => {
  return (
    <div>
      <PageHero
        badge="Delivery Capabilities &middot; Advise to Deliver"
        title="Four Ways We Connect Strategy to"
        highlightTitle="Execution."
        description="From strategic advisory to embedded engineering teams, we provide senior capability that integrates directly into your organization with zero handoff loss."
        onOpenDiscuss={() => onOpenDiscuss('capabilities')}
        ctaText="Discuss Capabilities"
      />

      <CapabilitiesSection onSelectCapability={(cap) => onOpenDiscuss(cap)} />

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
