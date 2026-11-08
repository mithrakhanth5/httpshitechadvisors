import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './lib/gsap';
import { CursorFollower } from './components/ui/CursorFollower';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemStatementSection } from './components/sections/ProblemStatementSection';
import { PropositionSection } from './components/sections/PropositionSection';
import { ServicesGrid } from './components/sections/ServicesGrid';
import { RoleSelectorSection } from './components/sections/RoleSelectorSection';
import { CapabilitiesSection } from './components/sections/CapabilitiesSection';
import { WhyHitechSection } from './components/sections/WhyHitechSection';
import { MethodologyShowcase } from './components/sections/MethodologyShowcase';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { RoundtableSection } from './components/sections/RoundtableSection';
import { CtaBanner } from './components/sections/CtaBanner';
import { Footer } from './components/layout/Footer';
import { DiscussChallengeModal } from './components/hitech/DiscussChallengeModal';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [isDiscussOpen, setIsDiscussOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedHelpArea, setSelectedHelpArea] = useState<string>('not-sure');

  // Initialize Lenis Smooth Inertia Scrolling & sync with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  const handleOpenDiscuss = (area?: string) => {
    setSelectedHelpArea(area || 'not-sure');
    setIsDiscussOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#020626] selection:bg-[#D22931] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Feel-Good Custom Cursor Follower */}
      <CursorFollower />

      {/* 1. Header & Navigation (Blurs on scroll with Sticky Announcement) */}
      <Navbar
        onOpenDiscuss={() => handleOpenDiscuss('not-sure')}
        onOpenBriefing={() => setIsDemoOpen(true)}
      />

      {/* Main Page Flow (Feel-Good End-to-End Animation) */}
      <main className="relative w-full">
        {/* 2. Hero Section (Staggered Word Reveal, Ambient Blobs, Magnetic CTAs) */}
        <HeroSection
          onOpenDiscuss={() => handleOpenDiscuss('not-sure')}
          onOpenBriefing={() => setIsDemoOpen(true)}
        />

        {/* 4. Problem Statement (The hardest business problems don't fit inside one technology category) */}
        <ProblemStatementSection />

        {/* 5. Proposition (One partner from the decision to the delivery + 3 Value Pillars) */}
        <PropositionSection />

        {/* 6. Solution Areas (Five canonical solutions: CRM/ERP, Data, Cyber, IT/Cloud, AI) */}
        <ServicesGrid
          onSelectDiscipline={(area) => handleOpenDiscuss(area)}
        />

        {/* 7. Role Selector ("Start with your role" - 6 Executive roles) */}
        <RoleSelectorSection
          onSelectRole={(area) => handleOpenDiscuss(area)}
        />

        {/* 8. Capabilities (How we deliver - Strategy, Product, Growth, Talent) */}
        <CapabilitiesSection
          onSelectCapability={(area) => handleOpenDiscuss(area)}
        />

        {/* 9. Why Hitech (Why clients work with us - 4 differentiator reasons) */}
        <WhyHitechSection />

        {/* 10. How It Works (Engagement timeline: Discover, Frame, Deliver, Optimize) */}
        <MethodologyShowcase />

        {/* 11. Results & Testimonial (99.99%, 5,000+, 60% + David Vance quote) */}
        <TestimonialsSection />

        {/* 12. Industries (Across the industries we serve - 6 sectors) */}
        <IndustriesSection
          onOpenContact={() => handleOpenDiscuss('not-sure')}
        />

        {/* 13. Events & Insights (Executive Roundtable Seattle + 2 Latest Articles) */}
        <RoundtableSection
          onOpenBriefing={() => setIsDemoOpen(true)}
        />

        {/* 14. Final CTA Band (What are you trying to solve? + 1-day response commitment) */}
        <CtaBanner
          onOpenDiscuss={() => handleOpenDiscuss('not-sure')}
        />
      </main>

      {/* 11. Minimal Footer (Kirkland WA Headquarters, Contact, Verified Links) */}
      <Footer
        onOpenDiscuss={() => handleOpenDiscuss('not-sure')}
        onOpenBriefing={() => setIsDemoOpen(true)}
      />

      {/* Interactive Modals */}
      <DiscussChallengeModal
        isOpen={isDiscussOpen}
        onClose={() => setIsDiscussOpen(false)}
        presetHelpArea={selectedHelpArea}
      />
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}

export default App;

