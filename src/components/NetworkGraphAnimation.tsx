import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Activity, Zap } from 'lucide-react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  type: 'client' | 'expert' | 'ai' | 'cloud';
  color: string;
}

export const NetworkGraphAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNodesCount, setActiveNodesCount] = useState(24);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 420);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 420;
      }
    };
    window.addEventListener('resize', handleResize);

    // Initial labels for specialized nodes
    const nodeConfigs = [
      { label: 'Enterprise Core', type: 'client', color: '#FFFFFF' },
      { label: 'Azure / AWS Cloud', type: 'cloud', color: '#38BDF8' },
      { label: 'Principal AI Architect', type: 'expert', color: '#D22931' },
      { label: 'Sovereign LLM Engine', type: 'ai', color: '#F43F5E' },
      { label: 'DevOps / FinOps Pod', type: 'expert', color: '#D22931' },
      { label: 'Data Lakehouse', type: 'cloud', color: '#38BDF8' },
      { label: 'Zero-Trust Gateway', type: 'cloud', color: '#10B981' },
      { label: 'Fractional CISO', type: 'expert', color: '#D22931' },
      { label: 'Product Lead Squad', type: 'expert', color: '#FB923C' },
      { label: 'Edge Diagnostics', type: 'ai', color: '#A855F7' },
      { label: 'MDM Identity Bridge', type: 'cloud', color: '#10B981' },
      { label: 'Kirkland WA Hub', type: 'expert', color: '#D22931' },
    ];

    const nodes: Node[] = [];
    const totalNodes = 28;

    for (let i = 0; i < totalNodes; i++) {
      const config = nodeConfigs[i % nodeConfigs.length];
      nodes.push({
        x: Math.random() * (width - 60) + 30,
        y: Math.random() * (height - 60) + 30,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: config.type === 'expert' ? 5.5 : config.type === 'client' ? 7 : 4,
        label: config.label,
        type: config.type as any,
        color: config.color,
      });
    }

    setActiveNodesCount(nodes.length);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      let found: string | null = null;
      for (const node of nodes) {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        if (Math.sqrt(dx * dx + dy * dy) < 25) {
          found = `${node.label} (${node.type.toUpperCase()})`;
          break;
        }
      }
      setHoveredNode(found);
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      setHoveredNode(null);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Render loop
    let tick = 0;
    const render = () => {
      tick += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(210, 41, 49, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Pulsating data packet packet animation along lines
            if (dist < 100 && (i + j) % 3 === 0) {
              const progress = (Math.sin(tick * 3 + i) + 1) / 2;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * progress;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * progress;

              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fillStyle = '#FFFFFF';
              ctx.shadowColor = '#D22931';
              ctx.shadowBlur = 6;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // Update and draw nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        if (node.x <= node.radius || node.x >= width - node.radius) node.vx *= -1;
        if (node.y <= node.radius || node.y >= height - node.radius) node.vy *= -1;

        // Mouse repelling interaction
        const mdx = node.x - mouseX;
        const mdy = node.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 80) {
          const force = (80 - mdist) / 80;
          node.x += (mdx / mdist) * force * 3;
          node.y += (mdy / mdist) * force * 3;
        }

        // Draw node glow aura
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = node.color === '#D22931' ? 'rgba(210, 41, 49, 0.2)' : 'rgba(255, 255, 255, 0.08)';
        ctx.fill();

        // Draw core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw small label for key nodes
        if (node.type === 'expert' || node.type === 'client') {
          ctx.font = '10px monospace';
          ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
          ctx.fillText(node.label, node.x + 9, node.y + 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-panel border border-slate-800 shadow-2xl bg-slate-950/80 my-8">
      {/* Top HUD Status Bar */}
      <div className="flex flex-wrap items-center justify-between px-6 py-3 border-b border-slate-800/80 text-xs font-mono text-slate-400">
        <div className="flex items-center space-x-3">
          <span className="flex h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping"></span>
          <span className="font-bold text-white tracking-wide flex items-center">
            <Zap className="w-3.5 h-3.5 mr-1 text-rose-500" />
            HITECH EXPERT ENGAGEMENT TOPOLOGY
          </span>
        </div>

        <div className="flex items-center space-x-4 text-[11px]">
          <span className="text-emerald-400 flex items-center">
            <Activity className="w-3.5 h-3.5 mr-1" />
            SYNAPSES ACTIVE: {activeNodesCount} PODS
          </span>
          <span className="hidden sm:inline text-slate-500">
            LATENCY: 12ms (REAL-TIME)
          </span>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="relative w-full h-[380px] sm:h-[420px]">
        <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

        {/* Hovered node status tooltip */}
        {hoveredNode && (
          <div className="absolute bottom-4 left-6 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-rose-500/50 text-xs text-white font-mono shadow-xl backdrop-blur-md">
            Node: <span className="text-rose-400 font-bold">{hoveredNode}</span>
          </div>
        )}

        {/* Floating Narrative Badge */}
        <div className="absolute top-4 right-4 max-w-xs p-3.5 rounded-xl bg-slate-900/85 border border-slate-800 backdrop-blur-md text-xs text-slate-300 hidden sm:block">
          <div className="flex items-center space-x-1.5 text-rose-400 font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engaging Experts on Your Behalf</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Interactive visualization showing enterprise stacks dynamically connecting to specialized talent pods, sovereign AI models, and cloud systems.
          </p>
        </div>
      </div>

      {/* Bottom Key */}
      <div className="flex flex-wrap items-center justify-center gap-6 py-2.5 px-6 border-t border-slate-800/80 bg-slate-950 text-[11px] font-mono text-slate-400">
        <span className="flex items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-600 mr-2 shadow-sm shadow-rose-600"></span>
          Senior Technical Advisor / Squad
        </span>
        <span className="flex items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 mr-2 shadow-sm shadow-sky-400"></span>
          Cloud &amp; Data Backbone
        </span>
        <span className="flex items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-2 shadow-sm shadow-emerald-400"></span>
          Zero-Trust Security &amp; Identity
        </span>
        <span className="flex items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-white mr-2"></span>
          Enterprise Client Core
        </span>
      </div>
    </div>
  );
};
