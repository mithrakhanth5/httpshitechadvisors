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
    <>
      <HeroSection onOpenDiscuss={() => onOpenDiscuss('not-sure')} />
      <ProblemStatementSection />
      <PropositionSection />
      <ServicesGrid onSelectDiscipline={(area) => onOpenDiscuss(area)} />
      <RoleSelectorSection onSelectRole={(role) => onOpenDiscuss(role)} />
      <CapabilitiesSection onSelectCapability={(cap) => onOpenDiscuss(cap)} />
      <WhyHitechSection />
      <MethodologyShowcase />
      <TestimonialsSection />
      <IndustriesSection onOpenContact={() => onOpenDiscuss('not-sure')} />
      <RoundtableSection onOpenDiscuss={(area) => onOpenDiscuss(area || 'roundtable')} />
      <CtaBanner onOpenDiscuss={() => onOpenDiscuss('not-sure')} />
    </>
  );
};
