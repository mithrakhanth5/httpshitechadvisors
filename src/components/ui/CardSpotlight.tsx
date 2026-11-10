import React, { useRef, useState, useCallback } from 'react';

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(210, 41, 49, 0.06)',
  borderColor = 'rgba(210, 41, 49, 0.35)',
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group overflow-hidden ${className}`}
      {...props}
    >
      {/* Dynamic Border Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Surface Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
