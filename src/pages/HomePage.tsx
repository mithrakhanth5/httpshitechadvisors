import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ProblemStatementSection } from '../components/sections/ProblemStatementSection';
import { PropositionSection } from '../components/sections/PropositionSection';
import { WhyHitechSection } from '../components/sections/WhyHitechSection';
import { HomePathways } from '../components/sections/HomePathways';
import { CtaBanner } from '../components/sections/CtaBanner';

interface HomePageProps {
  onOpenDiscuss: (area?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenDiscuss }) => {
  return (
    <>
      {/* 1. Hero: Positioning & Brand Promise */}
      <HeroSection onOpenDiscuss={() => onOpenDiscuss('not-sure')} />

      {/* 2. Problem Statement: The Enterprise Reality */}
      <ProblemStatementSection />

      {/* 3. The Hitech Model: One Partner from Decision to Delivery */}
      <PropositionSection />

      {/* 4. Why Hitech: Four Differentiators */}
      <WhyHitechSection />

      {/* 5. Practice Directory & Routing Pathways to Dedicated Pages */}
      <HomePathways />

      {/* 6. Conversion CTA Band */}
      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('not-sure')} />
    </>
  );
};
