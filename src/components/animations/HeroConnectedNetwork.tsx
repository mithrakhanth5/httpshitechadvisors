import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulseVal: number;
}

interface PulsePacket {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

const BRAND_COLORS = [
  '#D22931', // Crimson Red
  '#FAC344', // Warm Amber Gold
  '#020626', // Midnight Navy
  '#D22931', // Crimson Red (weighted)
];

export const HeroConnectedNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const isMobile = width < 768;
    const particleCount = isMobile ? 32 : 65;
    const maxDistance = isMobile ? 120 : 160;

    let mouseX = -9999;
    let mouseY = -9999;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const color = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
      const baseRadius = Math.random() * 2.5 + 2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: baseRadius,
        baseRadius,
        color,
        alpha: Math.random() * 0.4 + 0.35,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseVal: Math.random() * Math.PI * 2,
      });
    }

    // Packets that travel along connected lines
    const packets: PulsePacket[] = [];
    const spawnPacket = () => {
      if (packets.length > (isMobile ? 4 : 8)) return;
      const i = Math.floor(Math.random() * particles.length);
      // Find a near neighbor
      let nearestNeighbor = -1;
      let minDist = maxDistance;
      for (let j = 0; j < particles.length; j++) {
        if (i === j) continue;
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          minDist = dist;
          nearestNeighbor = j;
        }
      }
      if (nearestNeighbor !== -1) {
        packets.push({
          fromIndex: i,
          toIndex: nearestNeighbor,
          progress: 0,
          speed: Math.random() * 0.015 + 0.012,
          color: Math.random() > 0.5 ? '#D22931' : '#FAC344',
        });
      }
    };

    const packetInterval = setInterval(spawnPacket, 600);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundary
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse gentle interaction
        const mdx = mouseX - p.x;
        const mdy = mouseY - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          const force = (140 - mdist) / 140;
          p.x -= (mdx / mdist) * force * 1.5;
          p.y -= (mdy / mdist) * force * 1.5;
        }

        // Pulse size
        p.pulseVal += p.pulseSpeed;
        p.radius = p.baseRadius + Math.sin(p.pulseVal) * 0.8;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Node subtle halo glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.18;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Gradient line
            const grad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            grad.addColorStop(0, p.color);
            grad.addColorStop(1, p2.color);
            ctx.strokeStyle = grad;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Update and draw traveling pulse packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const pFrom = particles[pkt.fromIndex];
        const pTo = particles[pkt.toIndex];
        if (!pFrom || !pTo) {
          packets.splice(k, 1);
          continue;
        }

        const curX = pFrom.x + (pTo.x - pFrom.x) * pkt.progress;
        const curY = pFrom.y + (pTo.y - pFrom.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 3, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.globalAlpha = 0.85;
        ctx.fill();

        // Packet glow
        ctx.beginPath();
        ctx.arc(curX, curY, 7, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.globalAlpha = 0.35;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      clearInterval(packetInterval);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Soft Ambient Colorful Atmosphere Glowing Blobs */}
      <div className="absolute -top-[15%] left-[20%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#D22931]/8 to-[#FAC344]/8 blur-[130px] pointer-events-none" />
      <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#020626]/6 to-[#D22931]/6 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-[15%] left-[25%] w-[520px] h-[520px] rounded-full bg-gradient-to-r from-[#FAC344]/6 to-[#020626]/4 blur-[120px] pointer-events-none" />

      {/* Interactive Kinetic Network Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />

      {/* Smooth Edge Fades */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </div>
  );
};
