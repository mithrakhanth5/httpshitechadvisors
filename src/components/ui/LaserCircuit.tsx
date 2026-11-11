import React from 'react';
import { motion } from 'motion/react';

interface LaserCircuitProps {
  activeStep: number;
  totalSteps?: number;
  onSelectStep?: (index: number) => void;
  className?: string;
}

export const LaserCircuit: React.FC<LaserCircuitProps> = ({
  activeStep,
  totalSteps = 4,
  onSelectStep,
  className = '',
}) => {
  const stepPercentage = (activeStep / (totalSteps - 1)) * 100;

  return (
    <div className={`relative w-full h-14 flex items-center mb-8 px-4 sm:px-8 select-none ${className}`} aria-hidden="true">
      {/* Background Track with Subtle Neon Pulse */}
      <div className="absolute left-6 right-6 sm:left-10 sm:right-10 h-[2.5px] bg-[#DCE4EC] rounded-full overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#D22931]/10 to-transparent animate-laser-scan" />
      </div>

      {/* Active Glowing Laser Track */}
      <motion.div
        className="absolute left-6 sm:left-10 h-[3.5px] bg-gradient-to-r from-[#D22931] via-[#FAC344] to-[#D22931] rounded-full shadow-[0_0_16px_rgba(210,41,49,0.85)] z-0"
        initial={false}
        animate={{ width: `calc(${stepPercentage}% * 0.94 + 8px)` }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
      />

      {/* Step Nodes */}
      <div className="relative w-full flex justify-between items-center z-10">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isActive = index === activeStep;
          const isPassed = index < activeStep;

          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelectStep?.(index)}
              onMouseEnter={() => onSelectStep?.(index)}
              className="flex flex-col items-center group cursor-pointer focus:outline-hidden"
              aria-label={`Jump to Phase 0${index + 1}`}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.3 : isPassed ? 1.05 : 0.95,
                  boxShadow: isActive ? '0 0 20px rgba(210, 41, 49, 0.9)' : '0 1px 3px rgba(0,0,0,0.08)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isActive
                    ? 'bg-[#D22931] ring-4 ring-[#D22931]/25'
                    : isPassed
                    ? 'bg-[#020626] ring-2 ring-[#020626]/20'
                    : 'bg-white border-2 border-[#DCE4EC] group-hover:border-[#D22931]/60'
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-[#FAC344]' : isPassed ? 'bg-white' : 'bg-transparent'
                  }`}
                />
              </motion.div>
              <span
                className={`text-[10px] font-mono font-bold mt-1.5 transition-colors uppercase ${
                  isActive ? 'text-[#D22931]' : 'text-[#556070] group-hover:text-[#020626]'
                }`}
              >
                0{index + 1}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
