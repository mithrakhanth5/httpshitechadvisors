import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hitechContent } from '../../data/hitechContent';
import {
  SymmetryStackTransition,
  type StackCardItem,
} from '../gsap/SymmetryStackTransition';
import {
  ObjectiveArchitectureVisual,
  ContinuousOwnershipVisual,
  FlexibleEngagementVisual,
} from '../gsap/PropositionDeckVisuals';

/**
 * Home Proposition section powered by the Symmetry-trained GSAP ScrollTrigger Sticky Deck:
 * - SplitText line-masked headline ("One partner from the / decision to the delivery.")
 * - Sticky header + 3-tier stacking deck with bespoke GSAP animated slide visuals
 */
export const PropositionSection: React.FC = () => {
  const { proposition } = hitechContent;

  const cards: StackCardItem[] = [
    {
      id: 'vendor-neutral',
      indexLabel: '01',
      eyebrow: 'Objective Architecture',
      title: proposition.pillars[0].title,
      description: proposition.pillars[0].body,
      renderVisual: () => <ObjectiveArchitectureVisual />,
    },
    {
      id: 'one-team',
      indexLabel: '02',
      eyebrow: 'Continuous Ownership',
      title: proposition.pillars[1].title,
      description: proposition.pillars[1].body,
      renderVisual: () => <ContinuousOwnershipVisual />,
    },
    {
      id: 'senior-expertise',
      indexLabel: '03',
      eyebrow: 'Flexible Engagement',
      title: proposition.pillars[2].title,
      description: proposition.pillars[2].body,
      renderVisual: () => <FlexibleEngagementVisual />,
    },
  ];

  return (
    <SymmetryStackTransition
      id="proposition"
      eyebrow="The Hitech Model"
      headingLines={['One partner from the', 'decision to the delivery.']}
      highlightSecondLine
      subtitle={proposition.body}
      headerAction={
        <Link
          to="/methodology"
          className="sym-link-underline inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#020626] hover:text-[#D22931] transition-colors group"
        >
          <span>See how an engagement works</span>
          <ArrowRight className="w-4 h-4 text-[#D22931] group-hover:translate-x-1 transition-transform inline-block" />
        </Link>
      }
      cards={cards}
    />
  );
};
