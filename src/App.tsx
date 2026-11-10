import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './lib/gsap';
import { CursorFollower } from './components/ui/CursorFollower';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { DiscussChallengeModal } from './components/hitech/DiscussChallengeModal';

// Dedicated Route Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { RoleFocusPage } from './pages/RoleFocusPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { ResultsPage } from './pages/ResultsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { EventsPage } from './pages/EventsPage';

function AnimatedAppRoutes({ onOpenDiscuss }: { onOpenDiscuss: (area?: string) => void }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage onOpenDiscuss={onOpenDiscuss} />} />
          <Route path="/solutions" element={<SolutionsPage onOpenDiscuss={onOpenDiscuss} />} />
          <Route path="/role-focus" element={<RoleFocusPage onOpenDiscuss={onOpenDiscuss} />} />
          <Route path="/capabilities" element={<CapabilitiesPage onOpenDiscuss={onOpenDiscuss} />} />
          <Route path="/methodology" element={<MethodologyPage onOpenDiscuss={onOpenDiscuss} />} />
          <Route path="/results" element={<ResultsPage onOpenDiscuss={onOpenDiscuss} />} />
          <Route path="/industries" element={<IndustriesPage onOpenDiscuss={onOpenDiscuss} />} />
          <Route path="/events" element={<EventsPage onOpenDiscuss={onOpenDiscuss} />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage onOpenDiscuss={onOpenDiscuss} />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export function App() {
  const [isDiscussOpen, setIsDiscussOpen] = useState(false);
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
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white text-[#020626] selection:bg-[#D22931] selection:text-white font-sans antialiased overflow-x-hidden">
        {/* Feel-Good Custom Cursor Follower */}
        <CursorFollower />

        {/* 1. Header & Navigation (Blurs on scroll with Sticky Announcement & Red Locked Indicator) */}
        <Navbar onOpenDiscuss={() => handleOpenDiscuss('not-sure')} />

        {/* Animated Routed Pages */}
        <AnimatedAppRoutes onOpenDiscuss={handleOpenDiscuss} />

        {/* Minimal Footer */}
        <Footer onOpenDiscuss={() => handleOpenDiscuss('not-sure')} />

        {/* Interactive Modals */}
        <DiscussChallengeModal
          isOpen={isDiscussOpen}
          onClose={() => setIsDiscussOpen(false)}
          presetHelpArea={selectedHelpArea}
        />
      </div>
    </HashRouter>
  );
}

export default App;
