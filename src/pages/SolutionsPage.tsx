import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { NextPageBanner } from '../components/ui/NextPageBanner';
import { CtaBanner } from '../components/sections/CtaBanner';

interface SolutionsPageProps {
  onOpenDiscuss: (area?: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenDiscuss }) => {
  return (
    <div>
      <PageHero
        badge="Enterprise Solutions &middot; 5 Canonical Practices"
        title="Targeted Solutions Built on the"
        highlightTitle="Merits."
        description="We recommend the technology that fits your scale, operating model, and budget, not a single vendor we're tied to. Five connected solution practices to modernize your enterprise."
        onOpenDiscuss={() => onOpenDiscuss('solutions')}
        ctaText="Discuss Solutions"
      />

      <ServicesGrid onSelectDiscipline={(area) => onOpenDiscuss(area)} />

      <NextPageBanner
        currentStage="Stage 01 of 07"
        nextTitle="Role Focus &middot; Solutions Framed by Mandate"
        nextPath="/role-focus"
        description="See how Hitech frames business challenges around specific executive mandates for Founders, COOs, CTOs, CISOs, and Heads of Data."
      />

      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('solutions')} />
    </div>
  );
};
