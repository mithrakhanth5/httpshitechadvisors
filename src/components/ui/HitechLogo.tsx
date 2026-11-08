import React from 'react';
import hitechLogo from '../../assets/hitech-logo.png';

interface HitechLogoProps {
  className?: string;
  size?: number | string;
  rounded?: boolean;
}

export const HitechLogo: React.FC<HitechLogoProps> = ({
  className = 'w-9 h-9',
  size,
  rounded = true,
}) => {
  return (
    <div
      style={size ? { width: size, height: size } : undefined}
      className={`relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden ${
        rounded ? 'rounded-lg shadow-2xs' : ''
      } ${className}`}
    >
      <img
        src={hitechLogo}
        alt="Hitech Advisors Logo"
        className="w-full h-full object-contain select-none"
        loading="eager"
      />
    </div>
  );
};
