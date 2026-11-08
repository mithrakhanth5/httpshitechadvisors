import React, { useRef, useEffect } from 'react';
import { gsap } from '../../lib/gsap';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number;
  textStrength?: number;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.35,
  textStrength = 0.2,
  variant = 'primary',
  style,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current;
    const text = textRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      if (text) {
        gsap.to(text, {
          x: relX * textStrength,
          y: relY * textStrength,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.4)',
        overwrite: 'auto',
      });

      if (text) {
        gsap.to(text, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.4)',
          overwrite: 'auto',
        });
      }
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, textStrength]);

  const baseVariantStyles = {
    primary: 'bg-[#D22931] hover:bg-[#B71C24] text-white shadow-md hover:shadow-xl',
    secondary: 'bg-[#020626] hover:bg-[#0c1647] text-white shadow-md hover:shadow-xl',
    dark: 'bg-white text-[#020626] hover:bg-[#EBF2F7] border border-[#DCE4EC] shadow-sm hover:shadow-md',
    outline: 'border border-[#DCE4EC] hover:border-[#D22931] text-[#020626] bg-white hover:bg-[#EBF2F7]',
  };

  return (
    <button
      ref={btnRef}
      className={`relative inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-200 cursor-pointer overflow-hidden group will-change-transform ${baseVariantStyles[variant]} ${className}`}
      style={style}
      {...props}
    >
      <span
        ref={textRef}
        className="relative z-10 flex items-center gap-2 will-change-transform"
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
    </button>
  );
};
