import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { NextPageBanner } from '../components/ui/NextPageBanner';
import { CtaBanner } from '../components/sections/CtaBanner';
import { ResultsHeroAnim } from '../components/animations/ResultsHeroAnim';

interface ResultsPageProps {
  onOpenDiscuss: (area?: string) => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onOpenDiscuss }) => {
  return (
    <div>
      <PageHero
        badge="Track Record &middot; Verified Proof"
        title="Measurable Outcomes Delivered in"
        highlightTitle="Production."
        description="Authentic case study metrics and executive references from complex enterprise modernization engagements across North America."
        onOpenDiscuss={() => onOpenDiscuss('results')}
        ctaText="Discuss Your Results"
        visual={<ResultsHeroAnim />}
      />

      <TestimonialsSection />

      <NextPageBanner
        currentStage="Stage 05 of 07"
        nextTitle="Industry Sector Experience &middot; Domain Depth"
        nextPath="/industries"
        description="Technology problems look similar on paper but very different in practice. Explore our sector-specific architectures and regulatory experience."
      />

      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('results')} />
    </div>
  );
};