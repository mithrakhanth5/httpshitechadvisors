import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ProblemStatementSection } from '../components/sections/ProblemStatementSection';
import { PropositionSection } from '../components/sections/PropositionSection';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { RoleSelectorSection } from '../components/sections/RoleSelectorSection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { WhyHitechSection } from '../components/sections/WhyHitechSection';
import { MethodologyShowcase } from '../components/sections/MethodologyShowcase';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { RoundtableSection } from '../components/sections/RoundtableSection';
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

      {/* 4. Solution Areas: Five Canonical Practices */}
      <ServicesGrid onSelectDiscipline={(area) => onOpenDiscuss(area)} />

      {/* 5. Role Focus: Solutions Framed by Mandate */}
      <RoleSelectorSection onSelectRole={(role) => onOpenDiscuss(role)} />

      {/* 6. Capabilities: Strategy, Engineering, Growth, Talent */}
      <CapabilitiesSection onSelectCapability={(cap) => onOpenDiscuss(cap)} />

      {/* 7. Why Hitech: Four Differentiators */}
      <WhyHitechSection />

      {/* 8. Methodology: Accountable Delivery from Diagnosis to Go-Live */}
      <MethodologyShowcase />

      {/* 9. Verified Results: Measured Client Proof */}
      <TestimonialsSection />

      {/* 10. Industry Reality: Sector Relevance */}
      <IndustriesSection onOpenContact={() => onOpenDiscuss('not-sure')} />

      {/* 11. Events & Insights: Executive Community */}
      <RoundtableSection onOpenDiscuss={(area) => onOpenDiscuss(area)} />

      {/* 12. Conversion CTA Band */}
      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('not-sure')} />
    </div>
  );
};
