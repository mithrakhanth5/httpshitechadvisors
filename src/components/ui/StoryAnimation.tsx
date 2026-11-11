import React, { useState, useEffect, useCallback } from 'react';
import {
  Bot,
  Shield,
  Database,
  CheckCircle2,
  Sparkles,
  Activity,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BorderBeam } from './BorderBeam';

export type StoryType =
  | 'home'
  | 'solutions'
  | 'capabilities'
  | 'methodology'
  | 'roles'
  | 'industries'
  | 'results'
  | 'events';

interface StoryStep {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  metricLabel: string;
  metricValue: string;
  details: string[];
  techPills: string[];
}

interface StoryNarrative {
  type: StoryType;
  title: string;
  tagline: string;
  steps: StoryStep[];
}

const NARRATIVES: Record<StoryType, StoryNarrative> = {
  home: {
    type: 'home',
    title: 'Enterprise AI & Architecture Pipeline',
    tagline: 'From raw data silos to governed, production-grade autonomous agent execution',
    steps: [
      {
        id: 'ingest',
        badge: 'Stage 01 // Ingestion',
        title: 'Multi-Source Data Ingestion',
        subtitle: 'Connecting fragmented ERPs, CRMs, and streaming data lakes with zero schema drift.',
        metricLabel: 'Ingest Throughput',
        metricValue: '1.2 GB/sec',
        details: [
          'Unified Customer & Operational Data Lakehouse',
          'Bi-directional Delta Sync across legacy ERP/CRM',
          'Continuous schema drift detection & alerts',
        ],
        techPills: ['Databricks', 'Snowflake', 'BigQuery', 'Kafka'],
      },
      {
        id: 'guardrails',
        badge: 'Stage 02 // Governance',
        title: 'Zero-Trust AI Guardrails',
        subtitle: 'Enterprise prompt safety, PII redaction, and compliance envelopes before model inference.',
        metricLabel: 'Compliance Pass Rate',
        metricValue: '100% SOC 2',
        details: [
          'Deterministic PII & sensitive IP sanitization',
          'Prompt injection & jailbreak defense barriers',
          'Real-time token cost & rate-limit throttling',
        ],
        techPills: ['SOC 2 Type II', 'HIPAA', 'Guardrails AI', 'OpenTelemetry'],
      },
      {
        id: 'agents',
        badge: 'Stage 03 // Execution',
        title: 'Autonomous Multi-Agent Pods',
        subtitle: 'Task-specialized agent pods collaborating to execute complex, multi-step enterprise tasks.',
        metricLabel: 'Task Execution Speed',
        metricValue: '450ms Avg',
        details: [
          'Multi-model routing (Claude, Gemini, OpenAI)',
          'Vector retrieval with fine-tuned enterprise context',
          'Deterministic verification and human-in-the-loop gates',
        ],
        techPills: ['LangChain', 'Claude 3.5', 'Gemini 1.5 Pro', 'ChromaDB'],
      },
      {
        id: 'production',
        badge: 'Stage 04 // Telemetry',
        title: 'Production Telemetry & Impact',
        subtitle: 'Live board-level observability, real-time ROI telemetry, and resilient failover.',
        metricLabel: 'Production Availability',
        metricValue: '99.99%',
        details: [
          'Zero-loss operational handover to in-house teams',
          'Board-level latency & cost efficiency dashboards',
          'Automated CI/CD rollback & zero downtime deployment',
        ],
        techPills: ['Grafana', 'Prometheus', 'AWS', 'Kubernetes'],
      },
    ],
  },
  solutions: {
    type: 'solutions',
    title: 'Connected 5-Practice Architecture',
    tagline: 'Modernizing enterprise systems as one unified mesh, never isolated silos',
    steps: [
      {
        id: 'ai-practice',
        badge: 'Discipline 01 // AI',
        title: 'AI Adoption & Governed Agents',
        subtitle: 'Autonomous workflows executing real business operations under strict governance.',
        metricLabel: 'Model Latency',
        metricValue: '< 350ms',
        details: ['Multi-Step Agent Workflows', 'Vector Retrieval Pipelines', 'Enterprise Safety Barriers'],
        techPills: ['OpenAI', 'Anthropic Claude', 'Google Gemini'],
      },
      {
        id: 'data-practice',
        badge: 'Discipline 02 // Data',
        title: 'Data & Customer Intelligence',
        subtitle: 'Single source of truth uniting fragmented customer profiles and transaction logs.',
        metricLabel: 'Pipeline Accuracy',
        metricValue: '99.98%',
        details: ['Lakehouse Architecture', 'Unified Customer CDPs', 'AI-Ready Data Cleansing'],
        techPills: ['Snowflake', 'Databricks', 'dbt'],
      },
      {
        id: 'crm-erp-practice',
        badge: 'Discipline 03 // Operations',
        title: 'CRM, ERP & Enterprise Systems',
        subtitle: 'Unbiased platform selection and seamless cross-application synchronization.',
        metricLabel: 'Team Adoption',
        metricValue: '94% Target',
        details: ['Platform-Neutral Evaluation', 'Cross-System Workflow Sync', 'Rigorous Change Enablement'],
        techPills: ['Salesforce', 'NetSuite', 'HubSpot'],
      },
      {
        id: 'cyber-practice',
        badge: 'Discipline 04 // Defense',
        title: 'Cybersecurity & Cloud Resilience',
        subtitle: 'Defending endpoints, remediating vulnerability backlogs, and ensuring compliance.',
        metricLabel: 'Remediation Speed',
        metricValue: '60% Faster',
        details: ['Zero-Trust Architecture', 'SOC 2 & HIPAA Readiness', 'Continuous Attack Surface Defense'],
        techPills: ['CrowdStrike', 'Wiz', 'Microsoft Defender'],
      },
    ],
  },
  capabilities: {
    type: 'capabilities',
    title: 'Senior Pod Delivery Framework',
    tagline: 'Direct engagement from diagnosis to embedded code with zero handoff loss',
    steps: [
      {
        id: 'diagnosis',
        badge: 'Phase 01 // Diagnosis',
        title: 'Strategic Technical Diagnosis',
        subtitle: 'Uncovering architectural bottlenecks, hidden technical debt, and vendor bias.',
        metricLabel: 'Audit Depth',
        metricValue: '100% Stack',
        details: ['Infrastructure Cost Review', 'Architecture Friction Mapping', 'Vendor-Neutral Scorecards'],
        techPills: ['AWS Audit', 'Azure Cost', 'Code Quality'],
      },
      {
        id: 'target-blueprint',
        badge: 'Phase 02 // Architecture',
        title: 'Target Architecture Blueprint',
        subtitle: 'Formulating clear, board-aligned technical specifications before committing code.',
        metricLabel: 'Alignment Score',
        metricValue: '100% Board',
        details: ['Cloud-Native Target Blueprint', 'API & Integration Contracts', 'Security & Compliance Matrix'],
        techPills: ['Microservices', 'GraphQL', 'Event-Driven'],
      },
      {
        id: 'embedded-pod',
        badge: 'Phase 03 // Engineering',
        title: 'Embedded Senior Engineering Pod',
        subtitle: 'Hands-on principal engineers shipping production microservices directly alongside your team.',
        metricLabel: 'Sprint Velocity',
        metricValue: '+85% Speed',
        details: ['Zero Handoff Loss to Juniors', 'Continuous Automated CI/CD', 'Real-World Production Commits'],
        techPills: ['TypeScript', 'Go', 'Kubernetes', 'Docker'],
      },
      {
        id: 'handover',
        badge: 'Phase 04 // Handover',
        title: 'Zero-Loss Operational Handover',
        subtitle: 'Upskilling internal staff and transferring operational runbooks for long-term independence.',
        metricLabel: 'Internal Mastery',
        metricValue: '100% Enabled',
        details: ['Interactive Runbooks & Docs', 'Staff Upskilling & Pair Programming', 'Ongoing Architecture Reviews'],
        techPills: ['Documentation', 'Telemetry', 'Independence'],
      },
    ],
  },
  methodology: {
    type: 'methodology',
    title: 'The 4-Phase Delivery Engine',
    tagline: 'Structured, time-boxed cadence taking strategy to live production in 12 weeks',
    steps: [
      {
        id: 'stage-1',
        badge: 'Weeks 1-2 // Diagnosis',
        title: 'Diagnostic Deep Dive',
        subtitle: 'Uncovering real system friction, tech debt, and immediate ROI opportunities.',
        metricLabel: 'Diagnosis Time',
        metricValue: '14 Days',
        details: ['Stakeholder Interviews', 'Repository & Cloud Audit', 'Executive Delivery Roadmap'],
        techPills: ['Diagnostic', 'Audit', 'Roadmap'],
      },
      {
        id: 'stage-2',
        badge: 'Weeks 3-4 // Target Architecture',
        title: 'Architecture Blueprint',
        subtitle: 'Locking in vendor-neutral component designs, schemas, and security guardrails.',
        metricLabel: 'Contract Accuracy',
        metricValue: '100% Signed',
        details: ['Component Boundary Models', 'Interface Specifications', 'Data Pipeline Schemas'],
        techPills: ['Architecture', 'Contracts', 'Design'],
      },
      {
        id: 'stage-3',
        badge: 'Weeks 5-10 // Engineering Sprints',
        title: 'Hands-On Code Delivery',
        subtitle: 'Senior pods building, testing, and modernizing production software in 2-week sprints.',
        metricLabel: 'Deployment Cadence',
        metricValue: 'Daily Deploys',
        details: ['Automated Unit & E2E Testing', 'Secure Infrastructure as Code', 'Bi-Weekly Stakeholder Demos'],
        techPills: ['Sprint Delivery', 'CI/CD', 'Code Review'],
      },
      {
        id: 'stage-4',
        badge: 'Weeks 11-12 // Operational Handover',
        title: 'Operational Readiness',
        subtitle: 'Full production cutover, observability telemetry, and permanent team enablement.',
        metricLabel: 'Uptime SLA',
        metricValue: '99.99%',
        details: ['Zero Knowledge Loss', 'Runbook Verification', 'Permanent Independence'],
        techPills: ['Production SLA', 'Runbooks', 'Live Handover'],
      },
    ],
  },
  roles: {
    type: 'roles',
    title: 'Executive Mandate Alignment',
    tagline: 'Routing technical capabilities directly to board priorities and executive KPIs',
    steps: [
      {
        id: 'cto',
        badge: 'Role // CTO & VP Engineering',
        title: 'Architectural Speed & Tech Debt Elimination',
        subtitle: 'Freeing engineering teams from maintenance drag and accelerating sprint velocity.',
        metricLabel: 'Velocity Increase',
        metricValue: '+45%',
        details: ['Microservice Decoupling', 'Automated Testing Gates', 'Modern CI/CD Deployment'],
        techPills: ['Developer Velocity', 'Zero Debt', 'Cloud Native'],
      },
      {
        id: 'cio',
        badge: 'Role // CIO & COO',
        title: 'Operational Unit Economics & Reliability',
        subtitle: 'Optimizing multi-cloud spend, connecting CRM/ERP systems, and ensuring 99.99% uptime.',
        metricLabel: 'Cost Optimization',
        metricValue: '28% Savings',
        details: ['Multi-Cloud FinOps', 'ERP/CRM Workflow Automation', 'ITSM Modernization'],
        techPills: ['FinOps', 'ITSM', 'Reliability'],
      },
      {
        id: 'ciso',
        badge: 'Role // CISO & Security',
        title: 'Zero-Trust Defense & Compliance Envelopes',
        subtitle: 'Eliminating critical vulnerabilities and establishing board-level compliance assurance.',
        metricLabel: 'Audit Readiness',
        metricValue: 'SOC 2 Ready',
        details: ['Vulnerability Backlog Remediation', 'Continuous Posture Monitoring', 'Identity Governance'],
        techPills: ['Zero Trust', 'SOC 2', 'Continuous Defense'],
      },
      {
        id: 'ceo',
        badge: 'Role // CEO & Private Equity',
        title: 'Strategic Valuation & M&A Readiness',
        subtitle: 'Accelerating enterprise value, conducting technical due diligence, and derisking exits.',
        metricLabel: 'Valuation Multiple',
        metricValue: 'De-risked',
        details: ['M&A Technical Due Diligence', 'Scalable Growth Engine', 'Board-Level Technology Confidence'],
        techPills: ['M&A Diligence', 'Valuation', 'Board Confidence'],
      },
    ],
  },
  industries: {
    type: 'industries',
    title: 'Enterprise Domain Execution',
    tagline: 'Tailored technology architectures addressing regulated industry requirements',
    steps: [
      {
        id: 'fintech',
        badge: 'Sector // FinTech & Banking',
        title: 'High-Concurrency Transactional Engine',
        subtitle: 'Sub-millisecond latency, immutable ledger integrity, and PCI-DSS compliance.',
        metricLabel: 'Transaction Speed',
        metricValue: '< 50ms',
        details: ['Distributed Event Streaming', 'PCI-DSS Compliant Pipelines', 'Real-Time Fraud Telemetry'],
        techPills: ['Kafka', 'PostgreSQL', 'Zero Drift'],
      },
      {
        id: 'healthcare',
        badge: 'Sector // Healthcare & Life Sciences',
        title: 'HIPAA-Compliant Patient Data Enclave',
        subtitle: 'Encrypted health record pipelines, strict access controls, and zero PHI leakage.',
        metricLabel: 'PHI Redaction',
        metricValue: '100% Automated',
        details: ['HIPAA & HITECH Compliance', 'Encrypted FHIR Integrations', 'De-identified Analytics Vault'],
        techPills: ['HIPAA', 'FHIR', 'Encrypted Vault'],
      },
      {
        id: 'ecommerce',
        badge: 'Sector // Retail & Digital Commerce',
        title: 'Real-Time Omnichannel Inventory Sync',
        subtitle: 'Connecting front-end storefronts with real-time warehouse ERP inventory.',
        metricLabel: 'Cart Throughput',
        metricValue: '15,000/min',
        details: ['Event-Driven Inventory Engine', 'Dynamic Pricing APIs', 'Headless Commerce Modernization'],
        techPills: ['Next.js', 'Stripe', 'NetSuite'],
      },
      {
        id: 'manufacturing',
        badge: 'Sector // Manufacturing & Logistics',
        title: 'IoT Telemetry & Supply Chain Resilience',
        subtitle: 'Live equipment monitoring, predictive maintenance, and supplier integration.',
        metricLabel: 'Downtime Avoidance',
        metricValue: '-72% Incidents',
        details: ['Edge IoT Streaming', 'Predictive Failure Alerts', 'Global Supply Chain Visibility'],
        techPills: ['Edge Computing', 'MQTT', 'Supply Chain'],
      },
    ],
  },
  results: {
    type: 'results',
    title: 'Verified Production Impact',
    tagline: 'Real enterprise metrics achieved by senior practitioners shipping real code',
    steps: [
      {
        id: 'cloud-roi',
        badge: 'Outcome // Infrastructure',
        title: '$4.2M Annualized Cloud Savings',
        subtitle: 'Eliminated idle compute, modernized Kubernetes clusters, and right-sized enterprise licenses.',
        metricLabel: 'Cloud Savings',
        metricValue: '$4.2M / Yr',
        details: ['Multi-Cloud FinOps Audit', 'Spot Instance Automation', 'Database Query Optimization'],
        techPills: ['FinOps', 'AWS', 'Azure'],
      },
      {
        id: 'speed-to-market',
        badge: 'Outcome // Velocity',
        title: '3x Faster Deployment Cadence',
        subtitle: 'Cut deployment cycles from quarterly releases down to daily automated production deployments.',
        metricLabel: 'Release Cycle',
        metricValue: 'Daily',
        details: ['Zero Downtime Deployments', 'Automated E2E Regression Testing', 'Standardized Microservices'],
        techPills: ['CI/CD', 'GitHub Actions', 'Docker'],
      },
      {
        id: 'security-posture',
        badge: 'Outcome // Security',
        title: '60% Vulnerability Backlog Reduction',
        subtitle: 'Systematically remediated high-risk vulnerabilities and secured zero-trust cloud posture.',
        metricLabel: 'Risk Reduction',
        metricValue: '-60% Vulnerabilities',
        details: ['Automated Container Scanning', 'Zero-Trust IAM Governance', 'Clean SOC 2 Type II Audit'],
        techPills: ['CrowdStrike', 'Wiz', 'SOC 2'],
      },
      {
        id: 'ai-adoption',
        badge: 'Outcome // AI in Production',
        title: 'Governed Agents Executing Real Work',
        subtitle: 'Transitioned AI from experimental sandboxes into core operational customer workflows.',
        metricLabel: 'Productivity Lift',
        metricValue: '+42%',
        details: ['Hallucination Rate < 0.1%', 'Enterprise Data Isolation', 'Senior Staff Supervised'],
        techPills: ['Claude 3.5', 'Gemini', 'LangChain'],
      },
    ],
  },
  events: {
    type: 'events',
    title: 'Executive Advisory Briefing Stage',
    tagline: 'Connecting business leaders with battle-tested technology and AI practitioners',
    steps: [
      {
        id: 'briefing-1',
        badge: 'Briefing // Executive AI',
        title: 'AI Adoption for C-Suite Leaders',
        subtitle: 'Pragmatic blueprint for navigating model selection, data safety, and ROI in 2026.',
        metricLabel: 'Attendee Capacity',
        metricValue: '40 Executive Seats',
        details: ['Live Agent Architecture Teardowns', 'Board Risk & Governance Frameworks', 'Peer Round-Table Discussion'],
        techPills: ['Executive Keynote', 'Seattle HQ', 'Closed Door'],
      },
      {
        id: 'briefing-2',
        badge: 'Briefing // Private Equity',
        title: 'Technical Due Diligence & M&A Playbook',
        subtitle: 'How to evaluate technical debt, software margins, and cloud economics prior to acquisition.',
        metricLabel: 'Target Audience',
        metricValue: 'PE Operating Partners',
        details: ['Value Creation Blueprints', 'Tech Stack Evaluation Scorecards', 'Post-Merger Integration Strategies'],
        techPills: ['M&A Playbook', 'Private Equity', 'Due Diligence'],
      },
      {
        id: 'briefing-3',
        badge: 'Briefing // Modern Engineering',
        title: 'Architecting for Zero-Downtime Delivery',
        subtitle: 'Real-world lessons from moving monoliths to distributed cloud-native microservices.',
        metricLabel: 'Technical Level',
        metricValue: 'Principal / CTO',
        details: ['Kubernetes Cluster Optimization', 'Database Sharding & Query Tuning', 'Continuous Incident Resilience'],
        techPills: ['Architecture', 'Kubernetes', 'Resilience'],
      },
      {
        id: 'briefing-4',
        badge: 'Briefing // Direct Access',
        title: 'Senior Practitioner Office Hours',
        subtitle: '1-on-1 strategic architecture diagnostics with Hitech Principal Advisors.',
        metricLabel: 'Format',
        metricValue: 'Direct 1-on-1',
        details: ['Confidential Architecture Reviews', 'Vendor-Neutral Assessments', 'Tailored Action Roadmaps'],
        techPills: ['1-on-1 Advisory', 'Confidential', 'Senior Pod'],
      },
    ],
  },
};

interface StoryAnimationProps {
  type?: StoryType;
  className?: string;
}

export const StoryAnimation: React.FC<StoryAnimationProps> = ({ type = 'home', className = '' }) => {
  const narrative = NARRATIVES[type] || NARRATIVES.home;
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const stepCount = narrative.steps.length;

  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % stepCount);
    setProgress(0);
  }, [stepCount]);

  // Smooth, pleasant looping auto-advance (4.5s per step)
  // Holds right where it is whenever cursor enters, resumes when cursor leaves
  useEffect(() => {
    if (isHovered) return;

    const stepMs = 50;
    const totalMs = 4500; // Pleasant 4.5s pace
    const increment = (stepMs / totalMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextStep();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isHovered, nextStep]);

  const currentStep = narrative.steps[activeStep];

  return (
    <div
      className={`relative w-full max-w-[1200px] mx-auto mt-8 sm:mt-12 text-left ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Dark Glass HUD Container */}
      <div className="relative rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 bg-gradient-to-br from-[#020626] to-[#0a1133] text-white border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Ambient Radial Specular Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-48 bg-[#D22931]/20 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-48 h-48 bg-[#FAC344]/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Dynamic BorderBeam Accent */}
        <BorderBeam size={260} duration={12} colorFrom="#D22931" colorTo="#FAC344" />

        {/* HUD Top Bar: Mac-Style Controls + Live Status Indicator */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-8">
          <div className="flex items-center gap-3">
            {/* 3 Status Nodes */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D22931] shadow-[0_0_6px_#D22931]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FAC344] shadow-[0_0_6px_#FAC344]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#40aa4a] shadow-[0_0_6px_#40aa4a]" />
            </div>

            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white/70">
              {narrative.title}
            </span>
          </div>

          {/* Live Simulator Status Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-mono">
            <span
              className={`w-2 h-2 rounded-full ${
                isHovered ? 'bg-[#D22931]' : 'bg-[#40aa4a] animate-pulse'
              }`}
            />
            <span className="font-bold text-white/90">
              {isHovered ? 'HELD ON HOVER' : 'STORY LOOPING // 60 FPS'}
            </span>
            <span className="text-white/40">|</span>
            <span className="text-[#FAC344] font-bold">
              0{activeStep + 1} / 0{stepCount}
            </span>
          </div>
        </div>

        {/* Narrative Interactive Step Tabs with Progress Fills */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {narrative.steps.map((step, idx) => {
            const isSelected = idx === activeStep;
            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(idx);
                  setProgress(0);
                }}
                className={`relative p-3 rounded-2xl text-left transition-all cursor-pointer border overflow-hidden ${
                  isSelected
                    ? 'bg-white/15 border-white/30 shadow-lg -translate-y-0.5'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white/60'
                }`}
              >
                {/* Active Step Real-Time Progress Bar */}
                {isSelected && !isHovered && (
                  <motion.div
                    style={{ width: `${progress}%` }}
                    className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#D22931] to-[#FAC344]"
                  />
                )}

                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider font-bold ${
                      isSelected ? 'text-[#FAC344]' : 'text-white/50'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  {isSelected && <Sparkles className="w-3 h-3 text-[#FAC344] animate-pulse" />}
                </div>

                <div
                  className={`text-xs font-bold truncate ${
                    isSelected ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {step.title.split('//')[0].trim()}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Stage: Animated Diagram + Explanatory Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column: Visual Story Node & Active Circuit Diagram */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D22931]/20 text-[#FAC344] text-xs font-mono font-bold uppercase tracking-wider border border-[#D22931]/30">
                <Zap className="w-3.5 h-3.5 text-[#FAC344]" />
                <span>{currentStep.badge}</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                  {currentStep.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {currentStep.subtitle}
                </p>
              </div>

              {/* Verified Metric Badge */}
              <div className="p-4 rounded-2xl bg-[#050b1f]/90 border border-white/10 flex items-center justify-between shadow-inner">
                <span className="font-mono text-xs uppercase tracking-wider text-white/60">
                  {currentStep.metricLabel}
                </span>
                <span className="font-mono text-lg font-extrabold text-[#FAC344]">
                  {currentStep.metricValue}
                </span>
              </div>

              {/* Technology & Framework Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-mono text-white/50 mr-1">Stack:</span>
                {currentStep.techPills.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-mono border border-white/10 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Google-Style Vector Circuit Animation Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl p-6 sm:p-8 bg-[#050b1f]/95 border border-white/15 shadow-xl backdrop-blur-md overflow-hidden min-h-[300px] flex flex-col justify-between">
                {/* Animated Background Laser Circuit Lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D22931" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FAC344" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 20 50 Q 150 150 350 80 T 550 200"
                    fill="none"
                    stroke="url(#laserGrad)"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    className="animate-pulse"
                  />
                  <path
                    d="M 50 240 Q 200 180 320 220 T 580 120"
                    fill="none"
                    stroke="#D22931"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.5"
                  />
                </svg>

                {/* Circuit Nodes Visualizer */}
                <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#FAC344] shadow-xs">
                      {activeStep === 0 && <Database className="w-5 h-5 text-[#FAC344]" />}
                      {activeStep === 1 && <Shield className="w-5 h-5 text-[#D22931]" />}
                      {activeStep === 2 && <Bot className="w-5 h-5 text-[#FAC344]" />}
                      {activeStep === 3 && <Activity className="w-5 h-5 text-[#40aa4a]" />}
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-white">
                        {currentStep.title.split(' ')[0]} Engine
                      </div>
                      <div className="font-mono text-[10px] text-white/50">Verified Stream</div>
                    </div>
                  </div>

                  {/* Pulsing Signal Beacon */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#FAC344]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FAC344] animate-ping" />
                    <span>ACTIVE</span>
                  </div>
                </div>

                {/* Step Deliverables Checklist with Crimson Bullets */}
                <div className="relative z-10 space-y-3.5 my-auto">
                  {currentStep.details.map((detail, dIdx) => (
                    <motion.div
                      key={dIdx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: dIdx * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3 text-xs sm:text-sm text-white/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D22931] flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Micro Footnote / Action Row */}
                <div className="relative z-10 pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/50">Hitech Architecture Pod</span>
                  <div className="flex items-center gap-1 text-[#FAC344] font-bold">
                    <span>Step 0{activeStep + 1} of 0{stepCount}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D22931]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
