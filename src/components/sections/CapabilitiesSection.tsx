import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Compass,
  Code2,
  TrendingUp,
  Users2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  LayoutGrid,
  SlidersHorizontal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, EDITORIAL_EASE } from '../../lib/gsap';
import { BorderBeam } from '../ui/BorderBeam';
import { TiltCard } from '../ui/TiltCard';

interface CapabilitiesSectionProps {
  onSelectCapability: (helpArea: string) => void;
}

interface CapabilityCard {
  id: string;
  icon: React.ReactNode;
  number: string;
  title: string;
  tag: string;
  badge: string;
  description: string;
  deliverablesHeader: string;
  deliverables: string[];
  tools: string[];
  deliveryModel: string;
  ctaText: string;
  helpArea: string;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    id: 'strategy',
    icon: <Compass className="w-6 h-6 text-[#D22931]" />,
    number: '01',
    title: 'Strategy & Advisory',
    tag: 'Strategic Advisory',
    badge: 'Board-Level Alignment',
    description:
      'Platform-neutral technology strategy, enterprise architecture blueprints, and unbiased vendor evaluations that align board priorities with engineering execution.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Enterprise Target Architecture & Cloud Roadmaps',
      'Unbiased Vendor & Platform Due Diligence',
      'Technical Due Diligence for M&A & Private Equity',
      'Cost Governance & Infrastructure Economics',
    ],
    tools: ['AWS', 'Azure', 'Google Cloud', 'Databricks', 'Snowflake'],
    deliveryModel: 'Senior Partner & Principal Pod',
    ctaText: 'DISCUSS STRATEGY →',
    helpArea: 'strategy',
  },
  {
    id: 'product-engineering',
    icon: <Code2 className="w-6 h-6 text-[#D22931]" />,
    number: '02',
    title: 'Product & Engineering',
    tag: 'Full-Stack Delivery',
    badge: 'High-Throughput Engineering',
    description:
      'Modern software engineering, cloud-native application modernization, and resilient microservice architectures built for high availability and rapid feature delivery.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Cloud-Native Application Architecture & APIs',
      'Legacy Modernization & Code Refactoring',
      'Automated CI/CD Pipelines & Quality Engineering',
      'High-Throughput Distributed Microservices',
    ],
    tools: ['TypeScript', 'React', 'Node.js', 'Go', 'Kubernetes', 'Docker'],
    deliveryModel: 'Embedded Senior Engineering Pod',
    ctaText: 'DISCUSS ENGINEERING →',
    helpArea: 'product-engineering',
  },
  {
    id: 'growth',
    icon: <TrendingUp className="w-6 h-6 text-[#D22931]" />,
    number: '03',
    title: 'Growth & Go-to-Market',
    tag: 'Revenue Acceleration',
    badge: 'Predictable Pipeline',
    description:
      'Unifying revenue operations, customer lifecycle intelligence, and marketing technology stacks into an automated growth engine that scales predictably.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'RevOps Stack Integration & Process Automation',
      'Unified Customer Data & Attribution Models',
      'Product-Led Growth (PLG) Telemetry & Analytics',
      'Conversion Funnel Optimization & Experimentation',
    ],
    tools: ['Salesforce', 'HubSpot', 'Segment', 'Mixpanel', 'BigQuery'],
    deliveryModel: 'RevOps & Analytics Pod',
    ctaText: 'DISCUSS GROWTH →',
    helpArea: 'growth',
  },
  {
    id: 'talent',
    icon: <Users2 className="w-6 h-6 text-[#D22931]" />,
    number: '04',
    title: 'Talent & Managed Teams',
    tag: 'Specialist Leadership',
    badge: 'Zero Handoff Loss',
    description:
      'Elite fractional leaders, principal architects, and dedicated engineering pods that embed directly into your organization with zero handoff loss and complete governance.',
    deliverablesHeader: 'CANONICAL DELIVERABLES',
    deliverables: [
      'Fractional CTO, CPO & VP Engineering Leaders',
      'Autonomous Embedded Engineering Pods',
      'Governance, Code Quality & Delivery Sprints',
      'Zero-Loss Knowledge Transfer & Handover',
    ],
    tools: ['Principal Architects', 'Staff Engineers', 'Delivery Leads', 'Agile Pods'],
    deliveryModel: 'Direct Embedded Pod',
    ctaText: 'DISCUSS TALENT →',
    helpArea: 'talent',
  },
];

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onSelectCapability }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [[currentIdx, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');

  const goToSlide = useCallback(
    (newIdx: number) => {
      setSlide(([prevIdx]) => [newIdx, newIdx > prevIdx ? 1 : -1]);
      setProgress(0);
    },
    []
  );

  const nextSlide = useCallback(() => {
    setSlide(([prevIdx]) => [(prevIdx + 1) % CAPABILITIES.length, 1]);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setSlide(([prevIdx]) => [(prevIdx - 1 + CAPABILITIES.length) % CAPABILITIES.length, -1]);
    setProgress(0);
  }, []);

  // Medium-speed sequential auto-advance loop (5.5s interval)
  // Holds immediately when cursor enters the card, resumes when cursor leaves
  useEffect(() => {
    if (isHovered || viewMode === 'grid') return;

    const stepMs = 50;
    const totalMs = 5500; // Medium-speed 5.5s per capability slide
    const increment = (stepMs / totalMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide, viewMode]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll('.cap-header-anim'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: EDITORIAL_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const currentCap = CAPABILITIES[currentIdx];

  // Medium motion slide variants matching the exact physics requested
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      filter: 'blur(4px)',
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="py-14 sm:py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
        {/* Section Header with Controls & View Mode Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            <div className="cap-header-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-mono font-bold uppercase tracking-wider text-[#D22931] mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D22931] animate-ping" />
              <span>Delivery Engine &middot; Four Connected Capabilities</span>
            </div>
            <h2 className="cap-header-anim font-display font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] text-[#020626] leading-tight tracking-tight">
              How we <span className="text-[#D22931]">deliver</span>.
            </h2>
            <p className="cap-header-anim text-base sm:text-lg text-[#556070] mt-4 leading-relaxed">
              Our solution areas define what we solve. Our capabilities define how we deliver with senior pods, platform-neutral architecture, and zero handoff loss.
            </p>
          </div>

          {/* Interactive Slide Controls, View Switcher & Status */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-end flex-shrink-0 bg-[#EBF2F7] p-2 rounded-2xl border border-[#DCE4EC] shadow-2xs">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-white rounded-xl border border-[#DCE4EC] p-0.5">
              <button
                onClick={() => setViewMode('slider')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-[#020626] text-white shadow-xs'
                    : 'text-[#556070] hover:text-[#020626]'
                }`}
                title="Sequential Sliding Showcase"
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span className="hidden sm:inline">Slider</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#020626] text-white shadow-xs'
                    : 'text-[#556070] hover:text-[#020626]'
                }`}
                title="All 4 Bento Boxes"
              >
                <LayoutGrid className="w-3 h-3" />
                <span className="hidden sm:inline">All 4 Cards</span>
              </button>
            </div>

            {viewMode === 'slider' && (
              <>
                <div className="h-4 w-[1px] bg-[#DCE4EC]" />

                {/* Live Hover/Loop Status Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#DCE4EC] text-[11px] font-mono font-bold text-[#020626]">
                  {isHovered ? (
                    <>
                      <Pause className="w-3 h-3 text-[#D22931]" />
                      <span>Held on 0{currentIdx + 1}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#40aa4a] animate-pulse" />
                      <span>Looping 0{currentIdx + 1}</span>
                    </>
                  )}
                </div>

                <div className="h-4 w-[1px] bg-[#DCE4EC]" />

                {/* Arrows & Counter */}
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-xl bg-white hover:bg-[#D22931] hover:text-white text-[#020626] border border-[#DCE4EC] transition-all cursor-pointer shadow-2xs"
                  aria-label="Previous Capability Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-mono text-xs font-bold text-[#020626] px-1">
                  0{currentIdx + 1} <span className="text-[#556070]">/ 04</span>
                </span>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-xl bg-white hover:bg-[#D22931] hover:text-white text-[#020626] border border-[#DCE4EC] transition-all cursor-pointer shadow-2xs"
                  aria-label="Next Capability Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* 4 Interactive Capability Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {CAPABILITIES.map((cap, idx) => {
            const isSelected = idx === currentIdx;
            return (
              <button
                key={cap.id}
                onClick={() => {
                  goToSlide(idx);
                  if (viewMode === 'grid') setViewMode('slider');
                }}
                onMouseEnter={() => {
                  goToSlide(idx);
                  setIsHovered(true);
                }}
                className={`relative px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 overflow-hidden ${
                  isSelected && viewMode === 'slider'
                    ? 'bg-[#020626] text-white shadow-lg border border-white/20 -translate-y-0.5'
                    : 'bg-white hover:bg-[#F8FAFC] text-[#556070] border border-[#DCE4EC] hover:border-[#D22931]/40 shadow-2xs'
                }`}
              >
                {/* Active Slide Timer Progress Fill */}
                {isSelected && !isHovered && viewMode === 'slider' && (
                  <motion.div
                    style={{ width: `${progress}%` }}
                    className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#D22931] to-[#FAC344]"
                  />
                )}

                <span
                  className={`w-2 h-2 rounded-full transition-all ${
                    isSelected ? 'bg-[#D22931] shadow-[0_0_8px_#D22931]' : 'bg-[#DCE4EC]'
                  }`}
                />
                <span>
                  {cap.number}. {cap.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* VIEW MODE 1: Sequential Sliding Showcase (Dark Blue Screenshot Aesthetic) */}
        {viewMode === 'slider' ? (
          <div
            className="relative w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-[32px] p-8 sm:p-12 bg-gradient-to-br from-[#020626] to-[#0a1133] text-white border border-white/15 shadow-2xl overflow-hidden min-h-[480px] flex flex-col justify-between">
              {/* Subtle Red Specular Glare in Top Center as in screenshot */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-48 bg-[#D22931]/20 blur-[90px] rounded-full pointer-events-none" />

              {/* Dynamic BorderBeam */}
              <BorderBeam size={280} duration={10} colorFrom="#D22931" colorTo="#FAC344" />

              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentCap.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full my-auto"
                >
                  {/* Left Column: Capability Identity, Title, Description, Ecosystem */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D22931]/20 text-[#FAC344] text-xs font-mono font-bold uppercase tracking-wider border border-[#D22931]/30">
                        <Sparkles className="w-3.5 h-3.5 text-[#FAC344]" />
                        {currentCap.tag}
                      </span>
                      <span className="text-xs font-mono text-white/50">{currentCap.badge}</span>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <div className="font-mono text-xs uppercase tracking-widest text-[#FAC344]/80">
                        Capability {currentCap.number}
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-snug">
                        {currentCap.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                      {currentCap.description}
                    </p>

                    {/* Ecosystem / Technologies Row */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-white/50 mr-2">Ecosystem:</span>
                      {currentCap.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-mono font-medium border border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Frosted Canonical Deliverables Card from screenshot */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl p-6 sm:p-8 bg-[#050b1f]/90 border border-white/10 shadow-xl backdrop-blur-md space-y-6">
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FAC344]">
                          {currentCap.deliverablesHeader}
                        </h4>
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          {currentCap.icon}
                        </div>
                      </div>

                      {/* Deliverables Checklist with Red Check Icons */}
                      <ul className="space-y-3.5">
                        {currentCap.deliverables.map((deliv, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                            <CheckCircle2 className="w-4 h-4 text-[#D22931] flex-shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Footer Row: Delivery Model & Action CTA */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="font-mono text-xs text-[#FAC344] font-medium">
                          {currentCap.deliveryModel}
                        </span>

                        <button
                          onClick={() => onSelectCapability(currentCap.helpArea)}
                          className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-white hover:text-[#FAC344] transition-colors cursor-pointer"
                        >
                          <span>{currentCap.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D22931] group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* VIEW MODE 2: All 4 Bento Boxes (Each Styled with the Exact Dark Blue Theme) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap, idx) => (
              <div key={cap.id} className="h-full">
                <TiltCard
                  maxTilt={5}
                  scale={1.015}
                  showBorderBeam={idx === currentIdx}
                  borderBeamDuration={10}
                  spotlightColor="rgba(210, 41, 49, 0.2)"
                  borderColor="rgba(210, 41, 49, 0.5)"
                  className="p-8 sm:p-10 rounded-[28px] bg-gradient-to-br from-[#020626] to-[#0a1133] text-white border border-white/15 shadow-xl flex flex-col justify-between group h-full cursor-pointer relative overflow-hidden"
                >
                  {/* Subtle Red Glare */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#D22931]/15 blur-[60px] rounded-full pointer-events-none" />

                  <div className="relative z-10">
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                        {cap.icon}
                      </div>
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-[#FAC344] border border-white/15">
                        Capability {cap.number}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D22931]/20 text-[#FAC344] text-[11px] font-mono font-bold uppercase tracking-wider border border-[#D22931]/30 mb-3">
                      <Sparkles className="w-3 h-3 text-[#FAC344]" />
                      <span>{cap.tag}</span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-[#FAC344] transition-colors leading-snug mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      {cap.description}
                    </p>

                    {/* Nested Frosted Deliverables Preview */}
                    <div className="rounded-xl p-4 bg-[#050b1f]/90 border border-white/10 mb-6 space-y-2.5">
                      <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FAC344]">
                        {cap.deliverablesHeader}
                      </div>
                      <ul className="space-y-2">
                        {cap.deliverables.slice(0, 3).map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-white/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D22931] flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ecosystem Pills */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {cap.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-0.5 rounded-md bg-white/10 text-white/90 text-[11px] font-mono border border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#FAC344]">
                      {cap.deliveryModel}
                    </span>
                    <button
                      onClick={() => onSelectCapability(cap.helpArea)}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white group-hover:text-[#FAC344] transition-colors cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 text-[#D22931] group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
