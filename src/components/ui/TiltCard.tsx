import React, { useRef, useState, useCallback } from 'react';
import { BorderBeam } from './BorderBeam';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt in degrees (default: 8)
  scale?: number; // hover scale (default: 1.02)
  glareOpacity?: number; // max opacity of specular reflection (default: 0.15)
  showBorderBeam?: boolean;
  borderBeamDuration?: number;
  spotlightColor?: string;
  borderColor?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 7,
  scale = 1.015,
  glareOpacity = 0.12,
  showBorderBeam = false,
  borderBeamDuration = 8,
  spotlightColor = 'rgba(210, 41, 49, 0.08)',
  borderColor = 'rgba(210, 41, 49, 0.4)',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; active: boolean }>({
    x: 50,
    y: 50,
    active: false,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width) * 2 - 1; // -1 to 1
      const normY = (y / rect.height) * 2 - 1; // -1 to 1

      const rotateX = -normY * maxTilt;
      const rotateY = normX * maxTilt;

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.08s ease-out',
      });

      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        active: true,
      });
    },
    [maxTilt, scale]
  );

  const handleMouseEnter = useCallback(() => {
    setGlarePos((prev) => ({ ...prev, active: true }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setGlarePos((prev) => ({ ...prev, active: false }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative group rounded-2xl overflow-hidden will-change-transform transform-gpu ${className}`}
      {...props}
    >
      {/* Dynamic Specular Glare Reflection */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
        style={{
          opacity: glarePos.active ? glareOpacity : 0,
          background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.95), transparent 75%)`,
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />

      {/* Dynamic Radial Border Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10"
        style={{
          opacity: glarePos.active ? 1 : 0,
          background: `radial-gradient(350px circle at ${glarePos.x}% ${glarePos.y}%, ${borderColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Surface Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-10"
        style={{
          opacity: glarePos.active ? 1 : 0,
          background: `radial-gradient(400px circle at ${glarePos.x}% ${glarePos.y}%, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Optional Trending Border Beam */}
      {showBorderBeam && (
        <BorderBeam
          size={180}
          duration={borderBeamDuration}
          colorFrom="#D22931"
          colorTo="#FAC344"
        />
      )}

      {/* Card Content with 3D Depth */}
      <div className="relative z-20 h-full [transform:translateZ(10px)]">{children}</div>
    </div>
  );
};
