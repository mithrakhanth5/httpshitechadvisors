import React, { useState } from 'react';

interface SymmetryMarkProps {
  size?: number;
  interactive?: boolean;
  className?: string;
}

export const SymmetryMark: React.FC<SymmetryMarkProps> = ({
  size = 28,
  interactive = false,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const offset = isHovered && interactive ? 4 : 0;

  return (
    <div
      className={`relative inline-flex items-center justify-center cursor-pointer select-none ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      {/* 2x2 Geometric Grid */}
      <div className="relative w-full h-full grid grid-cols-2 grid-rows-2 gap-[10%] p-[4%]">
        {/* Top-Left: Blue Leaf (curved top-left) */}
        <div
          className="w-full h-full bg-[#6CBEE4] rounded-tl-[90%] rounded-tr-[20%] rounded-bl-[20%] rounded-br-[90%] transition-transform duration-300 ease-out shadow-sm"
          style={{
            transform: isHovered && interactive ? `translate(-${offset}px, -${offset}px)` : 'translate(0,0)',
          }}
        />

        {/* Top-Right: Yellow Dot */}
        <div
          className="w-full h-full bg-[#FAC344] rounded-full transition-transform duration-300 ease-out shadow-sm"
          style={{
            transform: isHovered && interactive ? `translate(${offset}px, -${offset}px)` : 'translate(0,0)',
          }}
        />

        {/* Bottom-Left: Green Dot */}
        <div
          className="w-full h-full bg-[#40AA4A] rounded-full transition-transform duration-300 ease-out shadow-sm"
          style={{
            transform: isHovered && interactive ? `translate(-${offset}px, ${offset}px)` : 'translate(0,0)',
          }}
        />

        {/* Bottom-Right: Blue Leaf (curved bottom-right) */}
        <div
          className="w-full h-full bg-[#6CBEE4] rounded-tl-[90%] rounded-tr-[20%] rounded-bl-[20%] rounded-br-[90%] transition-transform duration-300 ease-out shadow-sm"
          style={{
            transform: isHovered && interactive ? `translate(${offset}px, ${offset}px)` : 'translate(0,0)',
          }}
        />
      </div>
    </div>
  );
};
