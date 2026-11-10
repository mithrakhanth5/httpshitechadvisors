import React from 'react';

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'div';
}

export const TextShimmer: React.FC<TextShimmerProps> = ({
  children,
  className = '',
  as: Component = 'span',
}) => {
  return (
    <Component className={`inline-block text-[#D22931] font-display ${className}`}>
      {children}
    </Component>
  );
};
