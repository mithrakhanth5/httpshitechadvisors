import React from 'react';
import { Hero } from '../components/Hero';
import { ClientLogos } from '../components/ClientLogos';
import { AiDiagnosticBar } from '../components/AiDiagnosticBar';
import { ValuePillars } from '../components/ValuePillars';
import { SolutionsSection } from '../components/SolutionsSection';
import { RoleSelector } from '../components/RoleSelector';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { EngagementTimeline } from '../components/EngagementTimeline';
import { ExecutiveConsultationBanner } from '../components/ExecutiveConsultationBanner';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'solutions') {
      const el = document.getElementById('solutions');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/what-we-do');
      }
    } else if (sectionId === 'case-studies') {
      const el = document.getElementById('case-studies');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/what-we-do');
      }
    }
  };

  const handleNavigateSolution = (slug: string) => {
    navigate(`/what-we-do/${slug}`);
  };

  return (
    <div className="space-y-0 bg-white">
      {/* 1. Executive Split Hero: Strategy Connected to Execution + Live Matrix */}
      <Hero
        onNavigate={handleNavigate}
        onOpenConsultation={() => onOpenConsultation('Homepage Hero Discuss a Challenge')}
      />

      {/* 2. Enterprise Trust Ribbon: Client & Scale-Up Logo Strip */}
      <ClientLogos />

      {/* 3. Single-Line Interactive AI Readiness Diagnostic */}
      <AiDiagnosticBar />

      {/* 4. The Core Mandate: Why Hitech Advisors (3 Pillars) */}
      <ValuePillars 
        onOpenConsultation={() => onOpenConsultation('Value Proposition Inquiry')}
      />

      {/* 4. The 5 Practice Suites: Interactive Solutions Showcase */}
      <SolutionsSection 
        onOpenConsultation={onOpenConsultation}
        onNavigateSolution={handleNavigateSolution}
      />

      {/* 5. Executive Pathways: Start with your role (CEO, COO, CIO, CISO, Data, GTM) */}
      <RoleSelector 
        onOpenConsultation={onOpenConsultation}
        onNavigateSolution={(link) => navigate(link)}
      />

      {/* 6. Measurable Client Transformations: Audited Case Studies */}
      <CaseStudiesSection onOpenConsultation={onOpenConsultation} />

      {/* 7. Phased Engagement Methodology: How We Work */}
      <EngagementTimeline 
        onOpenConsultation={() => onOpenConsultation('Kickoff Discovery Session')}
      />

      {/* 8. High-Conversion Consultation Portal & 24h SLA */}
      <ExecutiveConsultationBanner 
        onOpenConsultation={() => onOpenConsultation('Executive Consultation Portal')}
      />
    </div>
  );
};
