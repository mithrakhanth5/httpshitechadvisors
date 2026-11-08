import React, { useState } from 'react';
import { ArrowRight, UserCheck } from 'lucide-react';
import { hitechContent } from '../../data/hitechContent';

interface RoleSelectorProps {
  onSelectRole: (helpArea: string) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelectRole }) => {
  const { roleSelector } = hitechContent;
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const activeRole = roleSelector.roles[activeRoleIndex];

  return (
    <section id="role-selector" className="section-spacing bg-white border-t border-[#D9E0E6]">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <div className="text-eyebrow mb-3">
            Executive Routing
          </div>
          <h2 className="text-h2">
            {roleSelector.headline}
          </h2>
          <p className="text-body-lg text-[#3A4A5A] mt-3">
            {roleSelector.subhead}
          </p>
        </div>

        {/* 6 Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roleSelector.roles.map((item, index) => {
            const isSelected = activeRoleIndex === index;
            return (
              <button
                key={item.role}
                onClick={() => setActiveRoleIndex(index)}
                className={`p-6 rounded-lg text-left transition-all border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F4F6F8] border-[#0B7A7C] shadow-sm ring-1 ring-[#0B7A7C]'
                    : 'bg-white border-[#D9E0E6] hover:border-[#BAC7D1] hover:bg-[#F4F6F8]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B7A7C]">
                      Role
                    </span>
                    <UserCheck className={`w-4 h-4 ${isSelected ? 'text-[#0B7A7C]' : 'text-[#3A4A5A]/40'}`} />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#0B1F33]">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[#3A4A5A] mt-2 leading-relaxed">
                    {item.focus}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#D9E0E6]/60 flex items-center justify-between text-xs">
                  <span className="font-medium text-[#3A4A5A]">
                    Links to {item.linksTo}
                  </span>
                  <span className={`font-semibold ${isSelected ? 'text-[#0B7A7C]' : 'text-[#3A4A5A]'}`}>
                    {isSelected ? 'Selected' : 'View Focus →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Role Action Banner */}
        <div className="mt-10 p-6 md:p-8 rounded-xl bg-[#0B1F33] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs font-semibold text-[#6CBEE4] uppercase tracking-wider">
              Priority for {activeRole.role}
            </div>
            <h4 className="text-xl font-serif font-bold text-white">
              {activeRole.focus}
            </h4>
            <p className="text-sm text-white/80">
              Connecting strategy and execution through {activeRole.linksTo}.
            </p>
          </div>

          <button
            onClick={() => onSelectRole(activeRole.helpArea)}
            className="btn-primary flex-shrink-0"
          >
            <span>Discuss This Challenge</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
