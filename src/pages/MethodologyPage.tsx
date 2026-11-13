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
        badge="How We Work &middot; End-to-End Delivery"
        title="One Accountable Team from Decision to"
        highlightTitle="Delivery."
        description="The people who frame the problem stay with it until the result is real. We start with your business problem, recommend the right architecture, and deliver it with the right Hitech team for the work."
        onOpenDiscuss={() => onOpenDiscuss('methodology')}
        ctaText="Discuss How We Work"
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