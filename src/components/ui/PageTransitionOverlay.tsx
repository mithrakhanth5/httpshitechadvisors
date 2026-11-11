import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLenis } from 'lenis/react';

export const PageTransitionOverlay: React.FC = () => {
  const location = useLocation();
  const lenis = useLenis();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip animation on initial page load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsTransitioning(true);

    // Reset scroll at the midpoint of transition
    const scrollTimer = setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }, 280);

    const endTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 640);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(endTimer);
    };
  }, [location.pathname, lenis]);

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Top Layer - Crimson Red Primary Lead (#D22931) */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: ['100%', '0%', '0%', '-100%'] }}
            transition={{
              duration: 0.62,
              times: [0, 0.42, 0.58, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 bg-[#D22931] z-[9998]"
          />

          {/* Secondary Shutter - Deep Navy Brand Accent (#020626) */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: ['100%', '0%', '0%', '-100%'] }}
            transition={{
              duration: 0.62,
              delay: 0.05,
              times: [0, 0.42, 0.58, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 bg-[#020626] flex items-center justify-center shadow-2xl z-[9999]"
          >
            {/* Center Brand Monogram Flash */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.95] }}
              transition={{ duration: 0.5, times: [0, 0.35, 0.65, 1] }}
              className="flex items-center gap-3 text-white font-display font-extrabold text-2xl tracking-tight"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-[#D22931] shadow-[0_0_16px_#D22931]" />
              <span>Hitech Advisors</span>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
