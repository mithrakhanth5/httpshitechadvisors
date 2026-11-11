import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';
import { StoryAnimation, type StoryType } from './StoryAnimation';

interface PageHeroProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  description: string;
  onOpenDiscuss?: () => void;
  ctaText?: string;
  storyType?: StoryType;
  showStory?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  highlightTitle,
  description,
  onOpenDiscuss,
  ctaText = 'Discuss a Challenge',
  storyType: customStoryType,
  showStory = true,
}) => {
  const location = useLocation();

  // Deduce story type from route pathname if not provided
  let deducedStoryType: StoryType = 'home';
  const path = location.pathname;
  if (path.includes('/solutions')) deducedStoryType = 'solutions';
  else if (path.includes('/capabilities')) deducedStoryType = 'capabilities';
  else if (path.includes('/methodology')) deducedStoryType = 'methodology';
  else if (path.includes('/role-focus')) deducedStoryType = 'roles';
  else if (path.includes('/industries')) deducedStoryType = 'industries';
  else if (path.includes('/results')) deducedStoryType = 'results';
  else if (path.includes('/events')) deducedStoryType = 'events';

  const activeStoryType = customStoryType || deducedStoryType;

  return (
    <section className="relative pt-32 pb-14 sm:pb-20 bg-white border-b border-[#DCE4EC] overflow-hidden">
      {/* Subtle Static Cyber Grid Background Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-35 pointer-events-none" />

      {/* Floating Ambient Light Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[25%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#D22931]/8 to-[#FAC344]/8 blur-[120px] animate-ambient-blob-1" />
        <div className="absolute top-[20%] -right-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-[#020626]/5 to-[#D22931]/6 blur-[130px] animate-ambient-blob-2" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
        {/* Eyebrow Badge with Spring Float */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#DCE4EC] shadow-2xs text-xs font-mono font-bold uppercase tracking-wider text-[#D22931] mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#D22931]" />
          <span>{badge}</span>
        </motion.div>

        {/* Display Headline with Stagger */}
        <motion.h1
          initial={{ opacity: 0, y: 26, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] text-[#020626] leading-[1.12] tracking-tight max-w-4xl pb-3"
        >
          {title}{' '}
          {highlightTitle && (
            <span className="text-[#D22931] font-display font-extrabold inline-block">
              {highlightTitle}
            </span>
          )}
        </motion.h1>

        {/* Narrative Description Fade Up */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-2xl text-base sm:text-lg lg:text-xl text-[#556070] leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Quick Action CTA with Magnetic Spring */}
        {onOpenDiscuss && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <MagneticButton
              variant="primary"
              onClick={onOpenDiscuss}
              className="text-xs font-bold uppercase tracking-wider !py-3.5 !px-7 shadow-md hover:shadow-xl transition-shadow"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>
        )}

        {/* Pleasant Looping Storytelling Micro-Animation Simulator */}
        {showStory && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <StoryAnimation type={activeStoryType} />
          </motion.div>
        )}
      </div>
    </section>
  );
};
