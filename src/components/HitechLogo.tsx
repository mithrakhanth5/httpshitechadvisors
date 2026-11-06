import React from 'react';

interface HitechLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' means on light bg, 'dark' means on dark bg
  size?: 'sm' | 'md' | 'lg';
  showDescriptor?: boolean;
}

export const HitechLogo: React.FC<HitechLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showDescriptor = false,
}) => {
  const heights = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-11',
  };

  const logoSrc = variant === 'dark' ? './hitech-logo-dark.png' : './hitech-logo-light.png';

  return (
    <div className={`inline-flex items-center space-x-3 select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Hitech Advisors - Business & Technology Solutions"
        className={`${heights[size]} w-auto object-contain block`}
      />
      {showDescriptor && (
        <span className="hidden xl:inline-block border-l border-slate-300 pl-3 text-[11px] font-mono uppercase tracking-widest text-slate-500 font-medium">
          Business &amp; Technology Solutions
        </span>
      )}
    </div>
  );
};
