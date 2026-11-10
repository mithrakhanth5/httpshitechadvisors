import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { RoleSelectorSection } from '../components/sections/RoleSelectorSection';
import { NextPageBanner } from '../components/ui/NextPageBanner';
import { CtaBanner } from '../components/sections/CtaBanner';

interface RoleFocusPageProps {
  onOpenDiscuss: (area?: string) => void;
}

export const RoleFocusPage: React.FC<RoleFocusPageProps> = ({ onOpenDiscuss }) => {
  return (
    <div>
      <PageHero
        badge="Executive Focus &middot; 6 Leadership Mandates"
        title="Technology Decisions Framed Around Your"
        highlightTitle="Mandate."
        description="Whether you are a Founder managing capital efficiency, a CTO untangling legacy systems, or a CISO balancing exposure against speed — Hitech speaks your language."
        onOpenDiscuss={() => onOpenDiscuss('role-focus')}
        ctaText="Discuss Your Mandate"
      />

      <RoleSelectorSection onSelectRole={(role) => onOpenDiscuss(role)} />

      <NextPageBanner
        currentStage="Stage 02 of 07"
        nextTitle="Delivery Capabilities &middot; Four Engagement Ways"
        nextPath="/capabilities"
        description="From strategic advisory to embedded engineering pods, explore the four ways Hitech connects strategy to execution."
      />

      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('role-focus')} />
    </div>
  );
};
