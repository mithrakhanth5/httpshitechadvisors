import React, { useState, useEffect } from 'react';
import { Bot, Cloud, Shield, Database, Activity, Terminal, Server, Radio, CheckCircle2 } from 'lucide-react';
import { BorderBeam } from './BorderBeam';
import { TextScramble } from './TextScramble';

interface ArchitectureMode {
  id: string;
  name: string;
  tag: string;
  icon: React.ReactNode;
  nodes: { label: string; sub: string; status: string }[];
  logs: string[];
}

const MODES: ArchitectureMode[] = [
  {
    id: 'ai',
    name: 'Autonomous AI Agents',
    tag: 'Production RAG & Guardrails',
    icon: <Bot className="w-4 h-4 text-[#D22931]" />,
    nodes: [
      { label: 'Client Ingestion', sub: 'Streaming API / TLS 1.3', status: 'ACTIVE' },
      { label: 'Vector Index & Embeddings', sub: 'pgvector / Pinecone', status: 'SYNCHRONIZED' },
      { label: 'Deterministic Guardrails', sub: 'Content Safety & PII Mask', status: 'ENFORCING' },
      { label: 'Agent Tool Execution', sub: 'Deterministic State Machine', status: 'VERIFIED' },
    ],
    logs: [
      'INIT: Connecting to enterprise model gateway...',
      'RAG: Vector similarity query executed in 14.2ms [cosine: 0.941]',
      'GUARDRAIL: Zero PII leakage detected; output sanitized',
      'DISPATCH: Autonomous agent task finished with 100% test pass rate',
    ],
  },
  {
    id: 'cloud',
    name: 'Multi-Region Resilient Cloud',
    tag: 'Active-Active Failover',
    icon: <Cloud className="w-4 h-4 text-[#D22931]" />,
    nodes: [
      { label: 'Global Edge Anycast', sub: 'Cloudflare / AWS Route 53', status: 'HEALTHY' },
      { label: 'Multi-Region EKS', sub: 'us-west-2 <-> us-east-1', status: '0.0s LAG' },
      { label: 'Distributed Database', sub: 'Aurora Multi-Master / Cockroach', status: 'SYNCHED' },
      { label: 'FinOps Auto-Scaler', sub: 'Target 65% Utilization', status: 'OPTIMIZED' },
    ],
    logs: [
      'HEALTH: us-west-2 latency 1.1ms; us-east-1 latency 1.8ms',
      'AUTOSCALE: Traffic peak detected (+420% req/s); 16 pods spawned',
      'FAILOVER: Zero packet drop simulated during chaos testing',
      'COST: Reserved instance arbitrage saving 38.4% on monthly compute',
    ],
  },
  {
    id: 'security',
    name: 'Zero-Day Cyber Defense',
    tag: 'SOC 2 & Threat Neutralization',
    icon: <Shield className="w-4 h-4 text-[#D22931]" />,
    nodes: [
      { label: 'Perimeter Sensor', sub: 'CrowdStrike Falcon + Wiz', status: 'SHIELDED' },
      { label: 'Risk-Scoring Engine', sub: 'Exploitability CVSS Prioritizer', status: 'ANALYZING' },
      { label: 'Zero Trust IAM', sub: 'Okta / Least Privilege', status: 'STRICT' },
      { label: 'SOC 2 Evidence Stream', sub: 'Automated Continuous Audit', status: 'AUDITED' },
    ],
    logs: [
      'SCAN: 14,200 asset endpoints checked across cloud & SaaS',
      'THREAT: 0 active high-severity vulnerabilities in production',
      'IAM: 3 expired service account keys automatically rotated',
      'COMPLIANCE: SOC 2 Type II controls verified in real-time',
    ],
  },
  {
    id: 'data',
    name: 'Real-Time Data Lakehouse',
    tag: 'Decision Intelligence & Kafka',
    icon: <Database className="w-4 h-4 text-[#D22931]" />,
    nodes: [
      { label: 'Event Streaming Hub', sub: 'Apache Kafka / AWS Kinesis', status: 'STREAMING' },
      { label: 'Modern Lakehouse', sub: 'Snowflake / Databricks Delta', status: 'PARALLEL' },
      { label: 'dbt Transformation Engine', sub: 'Atomic Semantic Models', status: 'COMPILED' },
      { label: 'Executive BI & Dashboards', sub: 'Sub-second Analytics', status: 'CONNECTED' },
    ],
    logs: [
      'INGEST: 250,000 events/sec ingested via distributed Kafka cluster',
      'SNOWFLAKE: Auto-clustering completed in 3.4 seconds',
      'DBT: 140 core business logic models verified without drift',
      'LATENCY: Executive dashboard query response: 320ms',
    ],
  },
];

export const HighTechHud: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [latency, setLatency] = useState(1.4);

  const currentMode = MODES[activeTab];
  const logs = currentMode.logs;

  // Fluctuating cyber telemetry values
  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(+(1.2 + Math.random() * 0.8).toFixed(1));
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-3xl bg-[#020626] border border-white/15 shadow-2xl overflow-hidden text-white font-mono">
      {/* High-Tech Glowing Laser Border Beam */}
      <BorderBeam size={280} duration={7} colorFrom="#D22931" colorTo="#FAC344" />

      {/* Cyber Grid Background inside HUD */}
      <div className="absolute inset-0 bg-cyber-grid-dark opacity-35 pointer-events-none" />

      {/* Moving Neon Scanline */}
      <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#D22931]/15 to-transparent pointer-events-none animate-scanline opacity-60" />

      {/* Top Telemetry Diagnostic Bar */}
      <div className="relative z-10 px-5 sm:px-8 py-3.5 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
            </span>
            <span className="font-bold tracking-wider text-[#10B981] uppercase text-[11px]">
              SYSTEM HEALTH: 100% OPTIMAL
            </span>
          </div>
          <span className="text-white/30 hidden sm:inline">&vert;</span>
          <span className="text-white/60 hidden sm:inline text-[11px]">
            CLUSTER: US-WEST-2 (PRIMARY)
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#FAC344]" />
            <span>LATENCY:</span>
            <span className="font-bold text-[#FAC344]">{latency}ms</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-[#D22931]" />
            <span>SOC 2:</span>
            <span className="font-bold text-[#D22931]">ENFORCED</span>
          </div>
        </div>
      </div>

      {/* Architecture System Selector Tabs */}
      <div className="relative z-10 p-4 sm:p-6 pb-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {MODES.map((mode, index) => {
            const isSelected = activeTab === index;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveTab(index)}
                className={`p-3 rounded-xl border transition-all text-left flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-white/10 border-[#D22931] shadow-lg ring-1 ring-[#D22931]/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#D22931] animate-ping" />
                )}
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1 rounded bg-white/10">{mode.icon}</div>
                  <span className="text-[10px] uppercase font-bold text-[#FAC344] tracking-wider">
                    SYS 0{index + 1}
                  </span>
                </div>
                <div className="text-xs font-bold text-white tracking-tight line-clamp-1">
                  {mode.name}
                </div>
                <div className="text-[10px] text-white/50 tracking-tight mt-0.5">
                  {mode.tag}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive System Pipeline Schematic */}
      <div className="relative z-10 px-4 sm:px-6 py-6">
        <div className="p-6 rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden">
          {/* Subtle Radar Sweep */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/5 opacity-30 animate-radar-sweep pointer-events-none" />

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#FAC344]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                LIVE PRODUCTION FLOW ARCHITECTURE &middot;{' '}
                <TextScramble text={currentMode.name} speed={25} />
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              ● REAL-TIME DISPATCH
            </span>
          </div>

          {/* 4 Connected Pipeline Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {currentMode.nodes.map((node, i) => (
              <div
                key={node.label}
                className="relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D22931]/60 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-white/50 mb-2">
                    <span>STEP 0{i + 1}</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {node.status}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-[#FAC344] transition-colors leading-snug">
                    {node.label}
                  </div>
                  <div className="text-[11px] text-white/60 mt-1 leading-snug">
                    {node.sub}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[9px] text-white/40">
                  <span>TELEMETRY</span>
                  <span className="text-[#FAC344]">0.0% LOSS</span>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Connecting Circuit Data Beam */}
          <div className="hidden lg:flex items-center justify-between mt-4 px-8 text-xs text-white/40">
            <span className="text-white/60 font-mono text-[10px]">INGRESS &rarr;</span>
            <div className="flex-1 mx-4 h-[2px] bg-gradient-to-r from-[#D22931] via-[#FAC344] to-[#10B981] relative overflow-hidden">
              <div className="absolute top-0 bottom-0 w-16 bg-white animate-marquee" />
            </div>
            <span className="text-white/60 font-mono text-[10px]">&rarr; PRODUCTION VALUE</span>
          </div>
        </div>
      </div>

      {/* Terminal Live Stream Logs */}
      <div className="relative z-10 px-4 sm:px-6 pb-6">
        <div className="rounded-xl bg-[#010314] border border-white/10 p-4">
          <div className="flex items-center justify-between text-[10px] text-white/50 mb-2.5 pb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <Terminal className="w-3.5 h-3.5 text-[#D22931]" />
              <span>TERMINAL TELEMETRY FEED (AUTONOMOUS LOGS)</span>
            </div>
            <span className="text-white/40">UTC 2026-11-08</span>
          </div>

          <div className="space-y-1.5 text-[11px] font-mono">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2 text-white/80">
                <span className="text-[#D22931] select-none">&gt;</span>
                <span className="text-white/40 select-none">[{idx + 1}]</span>
                <span className="text-emerald-400 font-medium">
                  {log}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
