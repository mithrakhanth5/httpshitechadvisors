import React, { useEffect, useRef } from 'react';
import { ShieldAlert, ShieldCheck, KeyRound, Lock, CheckCircle2, FileCheck, ArrowRight } from 'lucide-react';
import { gsap, SYMMETRY_EASE } from '../../lib/gsap';
import { MagneticButton } from '../ui/MagneticButton';
import { TiltCard } from '../ui/TiltCard';

interface SecuritySectionProps {
  onOpenDiscuss: () => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ onOpenDiscuss }) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.security-header'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll('.security-card'),
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#D22931]" />,
      title: 'Risk-Based Vulnerability Remediation',
      description:
        'Stop drowning in 10,000 generic CVSS alert tickets. We score vulnerabilities by actual exploitable business risk and execute prioritized patching across your cloud and SaaS estate.',
      specs: ['60% faster Mean Time to Remediate', 'Exploitability & blast radius scoring', 'Continuous automated patch pipeline'],
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#FAC344]" />,
      title: 'Audit-Ready SOC 2 & HIPAA Governance',
      description:
        'Transform compliance from an annual scramble into continuous living evidence. We prepare your infrastructure, IAM controls, and data encryption to pass rigorous audits on first review.',
      specs: ['SOC 2 Type II & HIPAA certified architectures', 'Automated evidence gathering', '3-year executive security roadmap'],
    },
    {
      icon: <KeyRound className="w-6 h-6 text-[#D22931]" />,
      title: 'Zero Trust Identity & Access Architecture',
      description:
        'Establish granular, least-privilege identity access management across Okta, Microsoft Entra ID, and cloud service accounts with automated lifecycle offboarding.',
      specs: ['Least-privilege role-based access', 'Privileged Access Management (PAM)', 'Multi-cloud perimeter enforcement'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="security"
      className="relative py-24 sm:py-32 bg-[#020626] text-white overflow-hidden"
    >
      {/* High-Tech Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid-dark opacity-30 pointer-events-none" />

      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#D22931]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#FAC344]/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10 z-10">
        {/* Section Header */}
        <div className="security-header max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold uppercase tracking-wider text-[#FAC344] border border-white/15 mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Cybersecurity &amp; Risk Governance</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,4vw,3.25rem)] text-white leading-tight tracking-tight">
            The risk keeps growing faster than the fixes. We close the gap.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Finding vulnerabilities is easy. Fixing them without breaking production requires senior security practitioners who understand business systems.
          </p>
        </div>

        {/* 3 Security Pillars with 3D Tilt and Border Beam */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar) => (
            <TiltCard
              key={pillar.title}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              className="security-card rounded-2xl"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#D22931]/50 transition-all duration-300 flex flex-col justify-between group overflow-hidden">

                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#D22931]/50 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white tracking-tight leading-snug mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  {pillar.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-white/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FAC344] flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom Security Compliance Strip */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FAC344]/10 border border-[#FAC344]/30 flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-6 h-6 text-[#FAC344]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                Independent Audit &amp; Threat Verification
              </h4>
              <p className="text-xs sm:text-sm text-white/60">
                Verified compliance with SOC 2 Type II, HIPAA, PCI-DSS, and NIST CSF standards.
              </p>
            </div>
          </div>

          <MagneticButton
            variant="primary"
            onClick={onOpenDiscuss}
            className="text-xs font-bold uppercase tracking-wider !py-3.5 !px-6 flex-shrink-0"
          >
            <span>Request Security Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
