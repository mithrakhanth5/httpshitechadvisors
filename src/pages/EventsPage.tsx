import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { RoundtableSection } from '../components/sections/RoundtableSection';
import { NextPageBanner } from '../components/ui/NextPageBanner';
import { CtaBanner } from '../components/sections/CtaBanner';

interface EventsPageProps {
  onOpenDiscuss: (area?: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onOpenDiscuss }) => {
  return (
    <div>
      <PageHero
        badge="Executive Community &middot; Thought Leadership"
        title="Convening Technology Leaders on the"
        highlightTitle="Future."
        description="Hitech convenes technology executives, founders, and engineering leaders across the Seattle ecosystem on how AI and emerging technologies reshape industries."
        onOpenDiscuss={() => onOpenDiscuss('roundtable')}
        ctaText="Request Roundtable Invitation"
      />

      <RoundtableSection onOpenDiscuss={() => onOpenDiscuss('roundtable')} />

      <NextPageBanner
        currentStage="Stage 07 of 07"
        nextTitle="Return to Overview &middot; Strategy That Connects"
        nextPath="/"
        description="Explore the full executive overview of Hitech Advisors, our core positioning, and our advise-to-deliver execution model."
      />

      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('roundtable')} />
    </div>
  );
};
