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
    }, 620);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(endTimer);
    };
  }, [location.pathname, lenis]);

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <div
          className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-end"
          aria-hidden="true"
        >
          {/* Top Layer - Crimson Red Primary Lead (#D22931) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{
              duration: 0.6,
              times: [0, 0.45, 0.55, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ transformOrigin: 'bottom' }}
            className="fixed inset-0 bg-[#D22931]"
          />

          {/* Secondary Shutter - Deep Navy Brand Accent (#020626) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              times: [0, 0.45, 0.55, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ transformOrigin: 'bottom' }}
            className="fixed inset-0 bg-[#020626] flex items-center justify-center shadow-2xl"
          >
            {/* Center Brand Monogram Flash */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.95] }}
              transition={{ duration: 0.5, times: [0, 0.35, 0.65, 1] }}
              className="flex items-center gap-3 text-white font-display font-extrabold text-2xl tracking-tight"
            >
              <span className="w-3 h-3 rounded-full bg-[#D22931] shadow-[0_0_12px_#D22931]" />
              <span>Hitech Advisors</span>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
