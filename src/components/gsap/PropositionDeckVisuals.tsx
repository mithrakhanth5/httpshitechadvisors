import React, { useLayoutEffect, useRef, useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Layers, Cpu, Users } from 'lucide-react';
import { gsap, SYM_EASE } from '../../lib/gsap';

/**
 * Slide 01 Animated Visual: Platform-Neutral Architecture & ROI Evaluator
 * Replaces static isometric wireframe with a GSAP-driven evaluation telemetry scene.
 */
export const ObjectiveArchitectureVisual: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const bars = root.querySelectorAll<HTMLElement>('.eval-bar-fill');
        const rows = root.querySelectorAll<HTMLElement>('.eval-row');
        const chips = root.querySelectorAll<HTMLElement>('.criteria-chip');
        const scanLine = root.querySelector<HTMLElement>('.eval-scan-beam');
        const winnerBadge = root.querySelector<HTMLElement>('.winner-badge');

        const introTl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        introTl
          .fromTo(
            rows,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: SYM_EASE.snappy }
          )
          .fromTo(
            bars,
            { scaleX: 0 },
            {
              scaleX: 1,
              transformOrigin: '0% 50%',
              duration: 0.9,
              stagger: 0.1,
              ease: 'power3.out',
            },
            '-=0.35'
          )
          .fromTo(
            winnerBadge,
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.7)' },
            '-=0.4'
          );

        if (scanLine) {
          gsap.fromTo(
            scanLine,
            { xPercent: -120 },
            {
              xPercent: 240,
              duration: 2.6,
              repeat: -1,
              repeatDelay: 1.4,
              ease: 'power2.inOut',
            }
          );
        }

        if (chips.length > 0) {
          const cycleTl = gsap.timeline({ repeat: -1 });
          chips.forEach((chip) => {
            cycleTl
              .to(chip, {
                backgroundColor: '#020626',
                color: '#FFFFFF',
                borderColor: '#020626',
                y: -2,
                duration: 0.35,
                ease: SYM_EASE.snappy,
              })
              .to(chip, {
                backgroundColor: '#FFFFFF',
                color: '#3A4A5A',
                borderColor: '#DCE4EC',
                y: 0,
                duration: 0.35,
                delay: 1.15,
                ease: SYM_EASE.snappy,
              });
          });
        }
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  const candidates = [
    {
      name: 'Target Composable Architecture',
      meta: 'Best Fit · Low TCO · Zero Lock-In',
      score: 96,
      barClass: 'bg-gradient-to-r from-[#0B7A7C] to-[#40AA4A]',
      winner: true,
    },
    {
      name: 'Legacy Monolith Expansion',
      meta: 'High License Overhead · Slow Release',
      score: 58,
      barClass: 'bg-[#94A3B8]',
      winner: false,
    },
    {
      name: 'Single-Vendor Default Suite',
      meta: 'Proprietary Lock-In Risk',
      score: 44,
      barClass: 'bg-[#D22931]/65',
      winner: false,
    },
  ];

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full flex flex-col justify-between bg-[#F8FAFC] rounded-lg p-2.5 sm:p-3 md:p-3.5 overflow-hidden"
    >
      {/* Top Status Telemetry */}
      <div className="flex items-center justify-between gap-2 pb-1.5 sm:pb-2 border-b border-[#DCE4EC] flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40AA4A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#40AA4A]" />
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#020626] truncate">
            Platform-Neutral Fit Matrix
          </span>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#020626] text-white text-[9px] sm:text-[10px] font-semibold flex-shrink-0">
          <ShieldCheck className="w-3 h-3 text-[#40AA4A]" />
          <span>Merits &amp; ROI Only</span>
        </span>
      </div>

      {/* Evaluated Architecture Bars */}
      <div className="space-y-1.5 sm:space-y-2 my-auto py-1">
        {candidates.map((item) => (
          <div
            key={item.name}
            className={`eval-row relative rounded-lg px-2.5 py-1.5 sm:py-2 border transition-colors ${
              item.winner
                ? 'bg-white border-[#0B7A7C]/40 shadow-xs overflow-hidden'
                : 'bg-white/70 border-[#DCE4EC]'
            }`}
          >
            {item.winner && (
              <div
                aria-hidden="true"
                className="eval-scan-beam pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#40AA4A]/10 to-transparent skew-x-[-20deg]"
              />
            )}
            <div className="relative z-10 flex items-center justify-between gap-2 mb-0.5 sm:mb-1">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-[11px] sm:text-xs font-bold text-[#020626] truncate">
                  {item.name}
                </span>
                {item.winner && (
                  <span className="winner-badge inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#E6F4EA] text-[#137333] text-[9px] font-bold uppercase tracking-wide flex-shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    Selected
                  </span>
                )}
              </div>
              <span
                className={`font-mono text-[11px] sm:text-xs font-bold flex-shrink-0 ${
                  item.winner ? 'text-[#0B7A7C]' : 'text-[#556070]'
                }`}
              >
                {item.score}%
              </span>
            </div>
            <div className="relative z-10 h-1.5 w-full rounded-full bg-[#EBF2F7] overflow-hidden">
              <div
                className={`eval-bar-fill h-full rounded-full ${item.barClass}`}
                style={{ width: `${item.score}%` }}
              />
            </div>
            <div className="relative z-10 mt-0.5 sm:mt-1 text-[9.5px] sm:text-[10px] text-[#556070] truncate">{item.meta}</div>
          </div>
        ))}
      </div>

      {/* Animated Criteria Sequence */}
      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-1.5 sm:pt-2 border-t border-[#DCE4EC] flex-shrink-0">
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#556070] mr-1 flex-shrink-0">
          Scored On:
        </span>
        {['Capital ROI', 'Architecture Fit', 'Zero Vendor Kickback'].map((tag) => (
          <span
            key={tag}
            className="criteria-chip px-2 py-0.5 rounded-md bg-white border border-[#DCE4EC] text-[9.5px] sm:text-[10px] font-semibold text-[#3A4A5A] whitespace-nowrap flex-shrink-0"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const POD_NODES = [
  {
    label: 'Strategy & Audit',
    stage: '01 Frame',
    dot: '#D22931',
    posClass: 'top-2.5 left-2.5 sm:top-3.5 sm:left-4',
  },
  {
    label: 'Cloud & Data',
    stage: '02 Foundation',
    dot: '#40AA4A',
    posClass: 'top-2.5 right-2.5 sm:top-3.5 sm:right-4',
  },
  {
    label: 'CRM / ERP Core',
    stage: '03 Integrate',
    dot: '#FAC344',
    posClass: 'bottom-9 left-2.5 sm:bottom-10 sm:left-4',
  },
  {
    label: 'Governed AI',
    stage: '04 Production',
    dot: '#D22931',
    posClass: 'bottom-9 right-2.5 sm:bottom-10 sm:right-4',
  },
] as const;

/**
 * Slide 02 Animated Visual: Continuous Ownership — One Hitech Pod Signal Loop
 * Replaces static box wireframe with an animated signal flow across Strategy, Cloud & Data,
 * CRM / ERP, and Governed AI converging on one accountable delivery core.
 */
export const ContinuousOwnershipVisual: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [activeNode, setActiveNode] = useState(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Rotate outer pod orbit ring continuously
        gsap.to(root.querySelector('.pod-orbit-ring'), {
          rotation: 360,
          duration: 18,
          repeat: -1,
          ease: 'none',
          transformOrigin: '50% 50%',
        });

        // Subtle sonar ripple around the One Hitech Pod core
        gsap.fromTo(
          root.querySelector('.pod-halo'),
          { scale: 0.92, opacity: 0.6 },
          {
            scale: 1.35,
            opacity: 0,
            duration: 2.1,
            repeat: -1,
            ease: 'power2.out',
            transformOrigin: '50% 50%',
          }
        );

        // Animate dashed SVG connector flow smoothly into the central hub
        root.querySelectorAll<SVGLineElement>('.pod-connector-flow').forEach((line, idx) => {
          gsap.fromTo(
            line,
            { strokeDashoffset: 24 },
            {
              strokeDashoffset: 0,
              duration: 1.15,
              repeat: -1,
              ease: 'none',
              delay: idx * 0.18,
            }
          );
        });

        // Cycle active pillar spotlight cleanly across the 4 disciplines
        const stateProxy = { step: 0 };
        const cycleTl = gsap.timeline({ repeat: -1 });
        POD_NODES.forEach((_, idx) => {
          cycleTl.to(stateProxy, {
            step: idx,
            duration: 1.7,
            onStart: () => setActiveNode(idx),
          });
        });
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full min-h-[224px] flex-1 bg-[#F8FAFC] rounded-lg overflow-hidden select-none"
    >
      {/* Background SVG Connector Matrix + Orbiting Core */}
      <svg
        viewBox="0 0 400 220"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <g stroke="#CBD5E1" strokeWidth="1.5" fill="none">
          <line x1="92" y1="48" x2="200" y2="104" />
          <line x1="308" y1="48" x2="200" y2="104" />
          <line x1="92" y1="156" x2="200" y2="104" />
          <line x1="308" y1="156" x2="200" y2="104" />
        </g>
        <g strokeWidth="2" strokeDasharray="6 6" fill="none">
          <line
            className="pod-connector-flow"
            x1="92"
            y1="48"
            x2="200"
            y2="104"
            stroke={activeNode === 0 ? '#D22931' : 'transparent'}
          />
          <line
            className="pod-connector-flow"
            x1="308"
            y1="48"
            x2="200"
            y2="104"
            stroke={activeNode === 1 ? '#40AA4A' : 'transparent'}
          />
          <line
            className="pod-connector-flow"
            x1="92"
            y1="156"
            x2="200"
            y2="104"
            stroke={activeNode === 2 ? '#FAC344' : 'transparent'}
          />
          <line
            className="pod-connector-flow"
            x1="308"
            y1="156"
            x2="200"
            y2="104"
            stroke={activeNode === 3 ? '#D22931' : 'transparent'}
          />
        </g>
        <circle
          className="pod-halo"
          cx="200"
          cy="104"
          r="34"
          fill="none"
          stroke="#D22931"
          strokeWidth="1.5"
        />
        <circle
          className="pod-orbit-ring"
          cx="200"
          cy="104"
          r="46"
          fill="none"
          stroke="#020626"
          strokeOpacity="0.16"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </svg>

      {/* Center Unified Pod Core */}
      <div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 z-10 px-3.5 py-2.5 rounded-xl bg-[#020626] text-white shadow-lg border border-white/15 flex items-center gap-2">
        <Cpu className="w-3.5 h-3.5 text-[#FAC344] flex-shrink-0" />
        <div className="leading-tight">
          <div className="text-[11px] font-bold tracking-tight whitespace-nowrap">One Hitech Pod</div>
          <div className="text-[9px] text-white/65 font-mono whitespace-nowrap">
            Accountable Delivery
          </div>
        </div>
      </div>

      {/* 4 Synchronized Discipline Nodes */}
      {POD_NODES.map((node, idx) => {
        const isActive = idx === activeNode;
        return (
          <div
            key={node.label}
            className={`absolute ${node.posClass} z-10 px-2.5 py-1.5 rounded-lg bg-white border transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xs ${
              isActive
                ? 'border-[#020626] shadow-md scale-[1.04]'
                : 'border-[#DCE4EC] opacity-85'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300 ${
                  isActive ? 'scale-125' : ''
                }`}
                style={{ backgroundColor: node.dot }}
              />
              <span className="text-[10px] sm:text-[11px] font-bold text-[#020626] whitespace-nowrap">
                {node.label}
              </span>
            </div>
            <div className="text-[9px] font-mono text-[#556070] pl-3.5">{node.stage}</div>
          </div>
        );
      })}

      {/* Bottom Live Pipeline Status */}
      <div className="absolute bottom-2 inset-x-2.5 sm:inset-x-4 z-10 flex items-center justify-between px-2.5 py-1 rounded-md bg-white/90 border border-[#DCE4EC] text-[10px]">
        <span className="font-semibold text-[#020626] truncate">
          Active Ownership: <span className="text-[#D22931]">{POD_NODES[activeNode].label}</span>
        </span>
        <span className="font-mono text-[9px] text-[#556070] flex-shrink-0 ml-2">
          1 Team · End-to-End
        </span>
      </div>
    </div>
  );
};

const ENGAGEMENT_TIERS = [
  {
    model: 'Advisory Partner Pod',
    badge: 'Strategy',
    detail: 'Architecture audit, vendor selection & capital roadmap',
    capacity: 42,
    dot: 'bg-[#D22931]',
    chips: ['Principal Partner', 'Target Architect'],
  },
  {
    model: 'Embedded Practitioners',
    badge: 'Co-Delivery',
    detail: 'Principals integrated directly inside your engineering sprints',
    capacity: 74,
    dot: 'bg-[#FAC344]',
    chips: ['Principal Partner', 'Cloud Lead', 'Data / AI Eng'],
  },
  {
    model: 'End-to-End Delivery Team',
    badge: 'Full Outcome',
    detail: 'Turnkey cloud, data, ERP, security & AI launch with clean handover',
    capacity: 100,
    dot: 'bg-[#40AA4A]',
    chips: ['Principal Partner', 'Cloud Lead', 'Data / AI Eng', 'Delivery Pod'],
  },
] as const;

/**
 * Slide 03 Animated Visual: Flexible Engagement — Adaptive Senior Bench Switcher
 * Cycles smoothly across Advisory, Co-Delivery, and Turnkey Launch with animated GSAP
 * capacity meters and specialist chip staggers.
 */
export const FlexibleEngagementVisual: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [activeTier, setActiveTier] = useState(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const proxy = { tier: 0 };
        const loopTl = gsap.timeline({ repeat: -1 });
        ENGAGEMENT_TIERS.forEach((_, idx) => {
          loopTl.to(proxy, {
            tier: idx,
            duration: 2.2,
            onStart: () => setActiveTier(idx),
          });
        });
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const chips = root.querySelectorAll('.bench-chip');
    const meter = root.querySelector('.capacity-meter-fill');

    const ctx = gsap.context(() => {
      if (chips.length > 0) {
        gsap.fromTo(
          chips,
          { opacity: 0, y: 6, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.05, ease: SYM_EASE.snappy }
        );
      }
      if (meter) {
        gsap.to(meter, {
          width: `${ENGAGEMENT_TIERS[activeTier].capacity}%`,
          duration: 0.6,
          ease: 'power3.out',
        });
      }
    }, root);

    return () => ctx.revert();
  }, [activeTier]);

  return (
    <div
      ref={rootRef}
      className="w-full h-full flex flex-col justify-between gap-1.5 bg-[#F8FAFC] rounded-lg p-2.5 sm:p-3.5 overflow-hidden"
    >
      {/* Engagement Tier Selector Cards */}
      <div className="space-y-1.5">
        {ENGAGEMENT_TIERS.map((row, idx) => {
          const isActive = idx === activeTier;
          return (
            <button
              key={row.model}
              type="button"
              onClick={() => setActiveTier(idx)}
              className={`w-full text-left flex items-start gap-2 px-2.5 py-1.5 rounded-lg border transition-colors duration-200 cursor-pointer ${
                isActive
                  ? 'bg-white border-[#020626] shadow-2xs'
                  : 'bg-white/60 border-[#DCE4EC] opacity-75 hover:opacity-100'
              }`}
            >
              <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${row.dot}`} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-[#020626] truncate">
                    {row.model}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded flex-shrink-0 ${
                      isActive
                        ? 'bg-[#020626] text-white'
                        : 'bg-[#EBF2F7] text-[#556070]'
                    }`}
                  >
                    {row.badge}
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#3A4A5A] truncate">
                  {row.detail}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Live Animated Capacity & Bench Allocation Footer */}
      <div className="pt-1.5 border-t border-[#DCE4EC] space-y-1">
        <div className="flex items-center justify-between text-[10px]">
          <span className="inline-flex items-center gap-1 font-semibold text-[#020626]">
            <Users className="w-3 h-3 text-[#D22931]" />
            <span>Active Bench Allocation</span>
          </span>
          <span className="font-mono font-bold text-[#020626]">
            {ENGAGEMENT_TIERS[activeTier].capacity}% Scope
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-[#DCE4EC] overflow-hidden">
          <div
            className="capacity-meter-fill h-full rounded-full bg-gradient-to-r from-[#020626] to-[#D22931]"
            style={{ width: `${ENGAGEMENT_TIERS[activeTier].capacity}%` }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-1 pt-0.5">
          <Layers className="w-3 h-3 text-[#556070] mr-0.5 flex-shrink-0" />
          {ENGAGEMENT_TIERS[activeTier].chips.map((chip) => (
            <span
              key={chip}
              className="bench-chip inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white border border-[#DCE4EC] text-[9px] font-semibold text-[#020626]"
            >
              <Sparkles className="w-2.5 h-2.5 text-[#D22931]" />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
