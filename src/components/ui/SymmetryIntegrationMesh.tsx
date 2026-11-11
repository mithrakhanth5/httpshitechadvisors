import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cloud, Database, Shield, Bot, Server, Layers, ArrowUpRight, Cpu } from 'lucide-react';

interface IntegrationNode {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  coords: { x: number; y: number };
  status: string;
}

const NODES: IntegrationNode[] = [
  { id: 'aws', name: 'AWS & Azure', category: 'Cloud Infrastructure', icon: <Cloud className="w-4 h-4 text-[#D22931]" />, coords: { x: 15, y: 22 }, status: 'Optimized' },
  { id: 'snowflake', name: 'Snowflake & Fabric', category: 'Data Lakehouse', icon: <Database className="w-4 h-4 text-[#D22931]" />, coords: { x: 85, y: 20 }, status: 'Synced' },
  { id: 'salesforce', name: 'Salesforce & Dynamics', category: 'CRM & Apps', icon: <Layers className="w-4 h-4 text-[#D22931]" />, coords: { x: 12, y: 78 }, status: 'Governed' },
  { id: 'gemini', name: 'Gemini & OpenAI', category: 'Enterprise AI Agents', icon: <Bot className="w-4 h-4 text-[#D22931]" />, coords: { x: 88, y: 80 }, status: 'Active' },
  { id: 'crowdstrike', name: 'CrowdStrike & Wiz', category: 'Cyber & Risk', icon: <Shield className="w-4 h-4 text-[#D22931]" />, coords: { x: 50, y: 10 }, status: 'Secured' },
  { id: 'servicenow', name: 'ServiceNow ITSM', category: 'IT Operations', icon: <Server className="w-4 h-4 text-[#D22931]" />, coords: { x: 50, y: 90 }, status: 'Automated' },
];

export const SymmetryIntegrationMesh: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full py-10 px-4 sm:px-8 bg-white rounded-3xl border border-[#DCE4EC] shadow-xl overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F7] border border-[#DCE4EC] text-xs font-mono font-bold uppercase tracking-wider text-[#D22931] mb-2">
          <span>Platform Neutral Connectivity</span>
        </div>
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#020626]">
          Every platform connected. <span className="text-[#D22931]">Zero vendor lock-in</span>.
        </h3>
        <p className="text-xs sm:text-sm text-[#556070] mt-2">
          Hitech engineers unify your fragmented enterprise stack into a single, high-throughput operating foundation.
        </p>
      </div>

      {/* Interactive Circuit Canvas (SVG Beziers + Interactive Nodes) */}
      <div className="relative w-full h-[360px] sm:h-[420px] max-w-3xl mx-auto flex items-center justify-center">
        {/* Animated Connecting SVG Bezier Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D22931" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FAC344" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D22931" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Central hub is at 50%, 50% */}
          {NODES.map((node) => {
            const isHovered = hoveredNode === node.id;
            return (
              <g key={node.id}>
                {/* Background Line */}
                <line
                  x1="50%"
                  y1="50%"
                  x2={`${node.coords.x}%`}
                  y2={`${node.coords.y}%`}
                  stroke={isHovered ? '#D22931' : '#DCE4EC'}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  strokeDasharray={isHovered ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />

                {/* Traveling Laser Pulse along line */}
                <circle r={isHovered ? 4 : 2.5} fill="#D22931">
                  <animateMotion
                    path={`M 500,210 L ${node.coords.x * 10},${node.coords.y * 4.2}`}
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Center Modernization Core */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-20 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#020626] text-white p-4 flex flex-col items-center justify-center text-center shadow-2xl border-2 border-[#D22931]/60"
        >
          <div className="w-8 h-8 rounded-xl bg-[#D22931]/20 border border-[#D22931]/40 flex items-center justify-center mb-1.5 shadow-[0_0_12px_#D22931]">
            <Cpu className="w-4 h-4 text-[#FAC344]" />
          </div>
          <span className="font-display font-extrabold text-xs tracking-tight">Hitech Core</span>
          <span className="text-[9px] font-mono text-[#FAC344] uppercase tracking-wider mt-0.5">
            Architecture
          </span>
        </motion.div>

        {/* Outer Integration Nodes (Symmetry connected card style) */}
        {NODES.map((node) => {
          const isHovered = hoveredNode === node.id;
          return (
            <motion.div
              key={node.id}
              style={{
                position: 'absolute',
                left: `${node.coords.x}%`,
                top: `${node.coords.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              animate={{
                scale: isHovered ? 1.08 : 1,
                y: isHovered ? -4 : 0,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`z-20 p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-2.5 shadow-md ${
                isHovered
                  ? 'bg-white border-[#D22931] shadow-xl ring-2 ring-[#D22931]/15'
                  : 'bg-[#EBF2F7] border-[#DCE4EC] hover:bg-white'
              }`}
            >
              <div className="w-8 h-8 rounded-xl bg-white border border-[#DCE4EC] shadow-2xs flex items-center justify-center flex-shrink-0">
                {node.icon}
              </div>
              <div className="text-left whitespace-nowrap">
                <div className="font-display font-bold text-xs text-[#020626] flex items-center gap-1">
                  <span>{node.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D22931]" />
                </div>
                <div className="text-[10px] font-mono text-[#556070] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#40aa4a]" />
                  <span>{node.status}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
