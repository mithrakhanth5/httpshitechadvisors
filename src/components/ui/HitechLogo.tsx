import React from 'react';
import hitechLogoMark from '../../assets/hitech-logo.png';
import hitechLogoStacked from '../../assets/hitech-logo-stacked.png';
import hitechLogoReverse from '../../assets/hitech-logo-reverse.png';

export type HitechLogoVariant = 'default' | 'reverse' | 'mark';

interface HitechLogoProps {
  className?: string;
  size?: number | string;
  variant?: HitechLogoVariant;
  rounded?: boolean;
}

const LOGO_SRC_MAP: Record<HitechLogoVariant, string> = {
  default: hitechLogoStacked,
  reverse: hitechLogoReverse,
  mark: hitechLogoMark,
};

/**
 * Renders the official Hitech Advisors brand logo (light-ground stacked lockup,
 * dark-ground reverse lockup, or standalone square "H" emblem).
 */
export const HitechLogo: React.FC<HitechLogoProps> = ({
  className = 'h-9 w-auto',
  size,
  variant = 'default',
  rounded,
}) => {
  const isMark = variant === 'mark';
  const shouldRound = rounded ?? isMark;

  return (
    <div
      style={size ? { width: size, height: size } : undefined}
      className={`relative inline-flex items-center justify-center flex-shrink-0 ${
        shouldRound ? 'overflow-hidden rounded-lg shadow-2xs' : ''
      } ${className}`}
    >
      <img
        src={LOGO_SRC_MAP[variant]}
        alt="Hitech Advisors"
        className={`${size || isMark ? 'w-full h-full' : 'h-full w-auto max-w-full'} object-contain select-none`}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};
