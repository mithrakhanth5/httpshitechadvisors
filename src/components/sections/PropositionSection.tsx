import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hitechContent } from '../../data/hitechContent';
import {
  SymmetryStackTransition,
  type StackCardItem,
} from '../gsap/SymmetryStackTransition';

/**
 * Home Proposition section powered by the Symmetry-trained GSAP ScrollTrigger Sticky Deck:
 * - SplitText line-masked headline ("One partner from the / decision to the delivery.")
 * - Sticky header + 3-tier stacking deck for Hitech Advisors' core operating pillars
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
      renderVisual: () => (
        <div className="relative w-full h-full flex items-center justify-center bg-[#F8FAFC] rounded-lg overflow-hidden p-3">
          <svg
            viewBox="0 0 360 190"
            className="w-full h-full max-w-[360px]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="propTileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EBF2F7" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <g stroke="#CFD8E3" strokeWidth="1" fill="url(#propTileGrad)">
              <polygon points="180,26 246,60 180,94 114,60" />
              <polygon points="114,60 180,94 114,128 48,94" />
              <polygon points="246,60 312,94 246,128 180,94" />
              <polygon
                points="180,94 246,128 180,162 114,128"
                fill="#FFFFFF"
                stroke="#D22931"
                strokeWidth="1.5"
              />
            </g>
            <path
              d="M114 60 L180 94 L246 60 M180 94 L180 128"
              fill="none"
              stroke="#D22931"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle cx="180" cy="94" r="4.5" fill="#D22931" />
            <circle cx="180" cy="128" r="3.5" fill="#020626" />
          </svg>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-auto bg-[#020626] text-white px-3.5 py-2 rounded-lg shadow-lg flex items-center gap-2.5 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#40AA4A] flex-shrink-0" />
            <span className="font-medium truncate">
              100% Platform-Neutral · Selected on Merits &amp; ROI
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'one-team',
      indexLabel: '02',
      eyebrow: 'Continuous Ownership',
      title: proposition.pillars[1].title,
      description: proposition.pillars[1].body,
      renderVisual: () => (
        <div className="relative w-full h-full flex items-center justify-center bg-[#F8FAFC] rounded-lg overflow-hidden p-3">
          <svg
            viewBox="0 0 360 190"
            className="w-full h-full max-w-[360px]"
            aria-hidden="true"
          >
            <g stroke="#CFD8E3" strokeWidth="1.5">
              <line x1="180" y1="95" x2="74" y2="48" />
              <line x1="180" y1="95" x2="286" y2="48" />
              <line x1="180" y1="95" x2="74" y2="142" />
              <line x1="180" y1="95" x2="286" y2="142" />
              <line x1="74" y1="48" x2="74" y2="142" strokeDasharray="3 3" />
              <line x1="286" y1="48" x2="286" y2="142" strokeDasharray="3 3" />
            </g>
            <rect x="130" y="75" width="100" height="40" rx="10" fill="#020626" />
            <text
              x="180"
              y="99"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
            >
              One Hitech Pod
            </text>
            {[
              { x: 30, y: 32, label: 'Strategy', dot: '#D22931' },
              { x: 242, y: 32, label: 'Cloud & Data', dot: '#40AA4A' },
              { x: 30, y: 128, label: 'CRM / ERP', dot: '#FAC344' },
              { x: 242, y: 128, label: 'Governed AI', dot: '#D22931' },
            ].map((node) => (
              <g key={node.label}>
                <rect
                  x={node.x}
                  y={node.y}
                  width="88"
                  height="30"
                  rx="8"
                  fill="#FFFFFF"
                  stroke="#DCE4EC"
                />
                <circle cx={node.x + 14} cy={node.y + 15} r="3.5" fill={node.dot} />
                <text
                  x={node.x + 24}
                  y={node.y + 19}
                  fill="#020626"
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="Inter, sans-serif"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      ),
    },
    {
      id: 'senior-expertise',
      indexLabel: '03',
      eyebrow: 'Flexible Engagement',
      title: proposition.pillars[2].title,
      description: proposition.pillars[2].body,
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-center gap-2.5 px-1 sm:px-3">
          {[
            {
              model: 'Advisory Partner Pod',
              badge: 'Strategy',
              detail: 'Architecture audit, vendor selection & capital roadmap',
              dot: 'bg-[#D22931]',
            },
            {
              model: 'Embedded Senior Practitioners',
              badge: 'Co-Delivery',
              detail: 'Principals integrated directly inside internal engineering sprints',
              dot: 'bg-[#FAC344]',
            },
            {
              model: 'End-to-End Delivery Team',
              badge: 'Full Outcome',
              detail: 'Turnkey cloud, data, ERP, security & AI launch with clean handover',
              dot: 'bg-[#40AA4A]',
            },
          ].map((row) => (
            <div
              key={row.model}
              className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#F8FAFC] border border-[#DCE4EC]"
            >
              <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${row.dot}`} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#020626]">
                    {row.model}
                  </span>
                  <span className="text-[10px] font-mono text-[#556070]">{row.badge}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#3A4A5A] truncate mt-0.5">{row.detail}</p>
              </div>
            </div>
          ))}
        </div>
      ),
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
