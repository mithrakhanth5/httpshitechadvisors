import React, { useRef, useEffect, useState } from 'react';
import { gsap, SYMMETRY_EASE } from '../lib/gsap';

interface RoleData {
  id: string;
  name: string;
  tint: 'blue' | 'green' | 'yellow';
  items: { title: string; desc: string; hue: string }[];
}

const ROLES: RoleData[] = [
  {
    id: 'roles-ceo',
    name: 'CEO / Founder',
    tint: 'blue',
    items: [
      { title: 'Capital allocation & payback', desc: 'Every technology dollar tied to a clear business return.', hue: '#D22931' },
      { title: 'Board & leadership alignment', desc: 'A shared technology thesis across the executive team.', hue: '#40AA4A' },
      { title: 'Modernization velocity', desc: 'Unblocking stalled initiatives with accountable senior leadership.', hue: '#FAC344' },
      { title: 'Operating leverage', desc: 'Scale revenue faster than headcount through system automation.', hue: '#D22931' },
    ],
  },
  {
    id: 'roles-coo',
    name: 'COO',
    tint: 'green',
    items: [
      { title: 'Eliminating manual friction', desc: 'Replacing spreadsheet workarounds with connected systems.', hue: '#D22931' },
      { title: 'Core ERP & CRM adoption', desc: 'Ensuring your teams actually adopt the platforms you paid for.', hue: '#40AA4A' },
      { title: 'Cross-functional workflow', desc: 'Hand-offs between sales, ops and finance that do not drop context.', hue: '#FAC344' },
      { title: 'Service delivery uptime', desc: 'Predictable operations backed by solid SLAs and clear ownership.', hue: '#D22931' },
    ],
  },
  {
    id: 'roles-cto',
    name: 'CIO / CTO',
    tint: 'yellow',
    items: [
      { title: 'Production-ready AI', desc: 'Moving from endless pilots to secure, governed AI agents.', hue: '#D22931' },
      { title: 'Legacy modernization', desc: 'Pragmatic roadmap from technical debt to modern cloud services.', hue: '#40AA4A' },
      { title: 'Scalable infrastructure', desc: 'AWS, Azure, and Google Cloud environments built to scale.', hue: '#FAC344' },
      { title: 'Delivery acceleration', desc: 'Senior engineering teams embedded to deliver critical milestones.', hue: '#D22931' },
    ],
  },
  {
    id: 'roles-ciso',
    name: 'CISO',
    tint: 'blue',
    items: [
      { title: 'Real exposure assessment', desc: 'Cutting through alert noise to what actually threatens the business.', hue: '#D22931' },
      { title: 'Remediation backlog closure', desc: 'Senior engineers who do not just report findings, but fix them.', hue: '#40AA4A' },
      { title: 'Board-level compliance', desc: 'SOC 2, ISO 27001, and HIPAA readiness with audit proof.', hue: '#FAC344' },
      { title: 'Incident readiness', desc: 'Clear playbooks, vendor risk oversight and resilient posture.', hue: '#D22931' },
    ],
  },
  {
    id: 'roles-data',
    name: 'Head of Data',
    tint: 'green',
    items: [
      { title: 'Single customer view', desc: 'Connecting siloed data across Snowflake, Databricks, and CDP.', hue: '#D22931' },
      { title: 'Trusted data pipelines', desc: 'High-integrity pipelines ready for executive decisions and AI.', hue: '#40AA4A' },
      { title: 'Operational intelligence', desc: 'Real-time dashboards that leaders actually look at every morning.', hue: '#FAC344' },
      { title: 'Data governance & lineage', desc: 'Clear definitions, privacy compliance and accessible data assets.', hue: '#D22931' },
    ],
  },
  {
    id: 'roles-growth',
    name: 'Growth & Revenue Leader',
    tint: 'yellow',
    items: [
      { title: 'Pipeline velocity', desc: 'RevOps infrastructure that connects lead generation to revenue.', hue: '#D22931' },
      { title: 'CRM & tech stack alignment', desc: 'Salesforce, HubSpot and Outreach configured for high conversion.', hue: '#40AA4A' },
      { title: 'Customer retention signals', desc: 'Predictive customer churn indicators surfaced in real time.', hue: '#FAC344' },
      { title: 'Go-to-market expansion', desc: 'Systems and processes ready to support new market entries.', hue: '#D22931' },
    ],
  },
];

export const Roles: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-advance dwell timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % ROLES.length);
    }, 4600);
    return () => clearInterval(timer);
  }, [activeIdx]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.querySelectorAll('.Roles_title__CAXox span span'),
        { yPercent: 108 },
        {
          yPercent: 0,
          stagger: 0.1,
          duration: 0.85,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        root.querySelector('.Roles_copy__XBOJa'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        root.querySelectorAll('.Roles_role__GTzAv'),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.8,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root.querySelector('.Roles_list__j07tw'),
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        root.querySelector('.Roles_visual__LPldr'),
        { opacity: 0, y: 28, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: 0.2,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  const currentRole = ROLES[activeIdx];

  return (
    <div ref={rootRef as any}>
      <section className="Roles_root__WCDqI" aria-labelledby="roles-title">
        <h2 className="display Roles_title__CAXox" style={{ textAlign: 'left' }}>
          <span style={{ display: 'block', overflow: 'clip', overflowClipMargin: '0.12em' }}>
            <span style={{ display: 'block', willChange: 'transform' }}>
              <span id="roles-title">Start with</span>
            </span>
          </span>{' '}
          <span style={{ display: 'block', overflow: 'clip', overflowClipMargin: '0.12em' }}>
            <span style={{ display: 'block', willChange: 'transform' }}>your role.</span>
          </span>
        </h2>

        <div className="Roles_copy__XBOJa">
          <p className="Roles_body__9oXDD">
            Every executive faces distinct delivery pressures. Route directly to the solutions, architectural decisions and delivery pods built for your strategic objectives.
          </p>
        </div>

        <div className="Roles_block__lhiq8" data-turned="">
          <ul className="Roles_list__j07tw">
            {ROLES.map((role, idx) => {
              const isOpen = idx === activeIdx;
              return (
                <li
                  key={role.id}
                  className="Roles_role__GTzAv"
                  data-open={isOpen ? '' : undefined}
                >
                  <h3 className="Roles_heading__dhQrM">
                    <button
                      type="button"
                      id={`${role.id}-head`}
                      className="Roles_head__vU_eP"
                      aria-expanded={isOpen}
                      aria-controls={role.id}
                      onClick={() => setActiveIdx(idx)}
                    >
                      <span>{role.name}</span>
                      <span className="Roles_sign__UR2aV" aria-hidden="true">
                        <i />
                        <i />
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div className="Roles_wait__rbOQu" key={`dwell-${idx}`}>
                      <i data-run="" style={{ '--dwell': '4.6s' } as React.CSSProperties} />
                    </div>
                  )}

                  <div
                    id={role.id}
                    className="Roles_panel__rGljh"
                    role="region"
                    aria-labelledby={`${role.id}-head`}
                  >
                    <div className="Roles_inner__rUBlN">
                      <ul className="Roles_items__Pp6zR">
                        {role.items.map((item, itemIdx) => (
                          <li
                            key={item.title}
                            className="Roles_item__8Nw8B"
                            style={{ '--i': itemIdx, '--hue': item.hue } as React.CSSProperties}
                          >
                            <i className="Roles_dot__pV57F" aria-hidden="true" />
                            <span className="Roles_itemTitle__IyqD1">{item.title}</span>
                            <span className="Roles_itemLine__gm2U_">{item.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right Visual Stage with Tint Transition */}
          <div
            className="Roles_visual__LPldr"
            data-tint={currentRole.tint}
            aria-hidden="true"
          >
            <div className="Roles_stage__6elmt">
              <div className="Roles_floor__bDxbC">
                <img
                  src="/art/task-list/c1-grid-y.svg"
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  decoding="async"
                  style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '640px', height: '640px' }}
                />
                <img
                  src="/art/task-list/c1-grid-x.svg"
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  decoding="async"
                  style={{ position: 'absolute', maxWidth: 'none', left: 0, top: 0, width: '640px', height: '640px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
