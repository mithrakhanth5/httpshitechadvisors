import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { MethodologyShowcase } from '../components/sections/MethodologyShowcase';
import { NextPageBanner } from '../components/ui/NextPageBanner';
import { CtaBanner } from '../components/sections/CtaBanner';

interface MethodologyPageProps {
  onOpenDiscuss: (area?: string) => void;
}

export const MethodologyPage: React.FC<MethodologyPageProps> = ({ onOpenDiscuss }) => {
  return (
    <div>
      <PageHero
        badge="Methodology &middot; Zero Handoff Loss"
        title="Accountable Delivery from Diagnosis to"
        highlightTitle="Go-Live."
        description="Our senior partners stay on the work. We combine strategic decision-making with hands-on systems engineering, ensuring zero handoff loss throughout the engagement lifecycle."
        onOpenDiscuss={() => onOpenDiscuss('methodology')}
        ctaText="Discuss Methodology"
      />

      <MethodologyShowcase />

      <NextPageBanner
        currentStage="Stage 04 of 07"
        nextTitle="Proven Results &middot; Verified Production Metrics"
        nextPath="/results"
        description="See measurable outcomes from real client engagements across cloud migrations, enterprise integrations, and mission-critical systems."
      />

      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('methodology')} />
    </div>
  );
};