import React from 'react';

interface LaserCircuitProps {
  activeStep: number;
  totalSteps?: number;
  className?: string;
}

export const LaserCircuit: React.FC<LaserCircuitProps> = ({
  activeStep,
  totalSteps = 4,
  className = '',
}) => {
  const stepPercentage = ((activeStep) / (totalSteps - 1)) * 100;

  return (
    <div className={`relative w-full h-12 flex items-center mb-8 px-4 sm:px-8 ${className}`} aria-hidden="true">
      {/* Background Track */}
      <div className="absolute left-4 right-4 sm:left-8 sm:right-8 h-[2px] bg-[#DCE4EC]" />

      {/* Active Glowing Laser Track with Spring Progress */}
      <div
        className="absolute left-4 sm:left-8 h-[3px] bg-gradient-to-r from-[#D22931] via-[#FAC344] to-[#D22931] transition-all duration-700 ease-out shadow-[0_0_12px_rgba(210,41,49,0.7)]"
        style={{ width: `calc(${stepPercentage}% * 0.9 + 16px)` }}
      />

      {/* Step Nodes */}
      <div className="relative w-full flex justify-between items-center z-10">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isActive = index === activeStep;
          const isPassed = index < activeStep;

          return (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isActive
                    ? 'scale-125 bg-[#D22931] shadow-[0_0_16px_rgba(210,41,49,0.8)] ring-4 ring-[#D22931]/20'
                    : isPassed
                    ? 'bg-[#020626] ring-2 ring-[#020626]/20'
                    : 'bg-white border-2 border-[#DCE4EC]'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-[#FAC344] animate-ping' : isPassed ? 'bg-white' : 'bg-transparent'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
