import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ProblemStatementSection } from '../components/sections/ProblemStatementSection';
import { PropositionSection } from '../components/sections/PropositionSection';
import { HomePathways } from '../components/sections/HomePathways';
import { CtaBanner } from '../components/sections/CtaBanner';

interface HomePageProps {
  onOpenDiscuss: (area?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenDiscuss }) => {
  return (
    <div className="relative w-full">
      {/* 1. Hero: Positioning & Brand Promise */}
      <HeroSection onOpenDiscuss={() => onOpenDiscuss('not-sure')} />

      {/* 2. Problem Statement: The Enterprise Reality */}
      <ProblemStatementSection />

      {/* 3. The Hitech Model: One Partner from Decision to Delivery */}
      <PropositionSection />

      {/* 4. Practice Directory & Routing Pathways to Dedicated Pages */}
      <HomePathways />

      {/* 5. Conversion CTA Band */}
      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('not-sure')} />
    </div>
  );
};
