import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLenis } from 'lenis/react';

const ROUTE_LABELS: Record<string, { title: string; subtitle: string; code: string }> = {
  '/': { title: 'EXECUTIVE OVERVIEW', subtitle: 'Strategy That Connects to Execution', code: 'SYS // 00' },
  '/solutions': { title: 'ENTERPRISE SOLUTIONS', subtitle: '5 Canonical Modernization Practices', code: 'SYS // 01' },
  '/role-focus': { title: 'EXECUTIVE ROLE FOCUS', subtitle: '6 Leadership Mandates Framed Around Delivery', code: 'SYS // 02' },
  '/capabilities': { title: 'DELIVERY CAPABILITIES', subtitle: 'Four Ways We Connect Strategy to Code', code: 'SYS // 03' },
  '/methodology': { title: 'DELIVERY METHODOLOGY', subtitle: 'Accountable Diagnosis to Production Go-Live', code: 'SYS // 04' },
  '/results': { title: 'PRODUCTION PROOF', subtitle: 'Verified Outcomes & Quantitative Metrics', code: 'SYS // 05' },
  '/industries': { title: 'SECTOR ARCHITECTURES', subtitle: 'Domain Depth Built for Real-World Systems', code: 'SYS // 06' },
  '/events': { title: 'EXECUTIVE ROUNDTABLE', subtitle: 'Peer Insights & Chatham House AI Forums', code: 'SYS // 07' },
};

export const PageTransitionOverlay: React.FC = () => {
  const location = useLocation();
  const lenis = useLenis();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isFirstRender = useRef(true);

  const routeInfo = ROUTE_LABELS[location.pathname] || {
    title: 'HITECH ADVISORS',
    subtitle: 'Connecting Strategy to Measurable Delivery',
    code: 'SYS // SEC',
  };

  useEffect(() => {
    // Skip animation on initial page load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsTransitioning(true);

    // Instant Lenis scroll reset at transition midpoint
    const scrollTimer = setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }, 320);

    // Conclude transition and unveil new page
    const endTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 720);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(endTimer);
    };
  }, [location.pathname, lenis]);

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none flex flex-col justify-between overflow-hidden"
          aria-hidden="true"
        >
          {/* 5-Column Staggered Venetian Wave Curtain */}
          <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
            {[0, 1, 2, 3, 4].map((colIndex) => (
              <motion.div
                key={colIndex}
                initial={{ y: '-100%' }}
                animate={{ y: ['-100%', '0%', '0%', '100%'] }}
                transition={{
                  duration: 0.7,
                  delay: colIndex * 0.04,
                  times: [0, 0.42, 0.58, 1],
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="relative h-full w-full bg-[#020626] border-r border-white/5 overflow-hidden"
              >
                {/* Leading Crimson Razor Edge */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D22931] via-[#FAC344] to-[#D22931]" />
              </motion.div>
            ))}
          </div>

          {/* Center Stage Brand Transition Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.98] }}
            transition={{
              duration: 0.55,
              times: [0, 0.35, 0.65, 1],
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 m-auto flex flex-col items-center justify-center text-center p-6 sm:p-10 max-w-xl"
          >
            {/* Destination Headline */}
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              {routeInfo.title}
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-white/70 font-mono tracking-wide mt-2">
              {routeInfo.subtitle}
            </p>

            {/* Glowing Laser Progress Line */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/15 rounded-full mt-6 overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#D22931] to-[#FAC344] shadow-[0_0_12px_#D22931]"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
