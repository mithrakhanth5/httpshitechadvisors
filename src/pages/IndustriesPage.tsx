import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { NextPageBanner } from '../components/ui/NextPageBanner';
import { CtaBanner } from '../components/sections/CtaBanner';

interface IndustriesPageProps {
  onOpenDiscuss: (area?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenDiscuss }) => {
  return (
    <div>
      <PageHero
        badge="Sector Relevance &middot; Cross-Industry Experience"
        title="Deep Sector Context for Complex"
        highlightTitle="Enterprises."
        description="We bring cross-industry perspective combined with senior specialists who know your sector's systems, regulatory guardrails, and customer demands."
        onOpenDiscuss={() => onOpenDiscuss('industries')}
        ctaText="Discuss Your Industry"
      />

      <IndustriesSection onOpenContact={() => onOpenDiscuss('industries')} />

      <NextPageBanner
        currentStage="Stage 06 of 07"
        nextTitle="Executive Roundtables &middot; Thought Leadership"
        nextPath="/events"
        description="Hitech convenes senior technology executives across the Seattle ecosystem to debate the real-world operational challenges of AI, cloud, and engineering."
      />

      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('industries')} />
    </div>
  );
};
