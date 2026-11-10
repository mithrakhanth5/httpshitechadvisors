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
    <Component
      className={`inline-block bg-[linear-gradient(110deg,#020626,40%,#D22931,55%,#020626,70%)] [background-size:200%_100%] bg-clip-text text-transparent animate-text-shimmer ${className}`}
    >
      {children}
    </Component>
  );
};
