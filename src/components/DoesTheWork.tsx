import React, { useRef, useEffect } from 'react';
import { gsap, SYMMETRY_EASE } from '../lib/gsap';

export const DoesTheWork: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        root.querySelectorAll('.DoesTheWork_heading__MteEG span span'),
        { yPercent: 108 },
        {
          yPercent: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Body copy fade-up
      gsap.fromTo(
        root.querySelector('.DoesTheWork_body__0A4bs'),
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

      // Stack cards entrance
      const cards = root.querySelectorAll('.Stack_card__4aXZo');
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 + idx * 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: SYMMETRY_EASE,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef as any}>
      <section className="DoesTheWork_root__wULjG" aria-labelledby="dtw-title"><div className="DoesTheWork_head__MclJ0"><h2 id="dtw-title" className="display DoesTheWork_heading__MteEG" style={({"textAlign":"left"} as React.CSSProperties)}><span style={({"display":"block","overflow":"clip","overflowClipMargin":"0.12em"} as React.CSSProperties)}><span style={({"display":"block","willChange":"transform","transform":"translateY(108%)"} as React.CSSProperties)}>Strategy and delivery</span></span> <span style={({"display":"block","overflow":"clip","overflowClipMargin":"0.12em"} as React.CSSProperties)}><span style={({"display":"block","willChange":"transform","transform":"translateY(108%)"} as React.CSSProperties)}>in one team.</span></span></h2><div className="DoesTheWork_body__0A4bs" style={({"opacity":"0","transform":"translateY(24px)"} as React.CSSProperties)}><p className="DoesTheWork_copy__fo_Bs">The people who frame the problem stay with it until the result is real. No hand-off gap, no excuses. We recommend what fits your scale, and deliver with seasoned practitioners.</p></div></div><div className="Stack_stack__AkAxs" style={({"--cards":"3"} as React.CSSProperties)}><div className="Stack_slot__YyNLM" style={({"--k":"0"} as React.CSSProperties)}><article className="Stack_card__4aXZo" style={({"transform":"none"} as React.CSSProperties)}><img className="Stack_floor__htgAA" src="/art/does-the-work/stack-floor.svg" alt="" aria-hidden="true" draggable="false" decoding="async"/><div className="Stack_visual__8vFoU" aria-hidden="true" inert={true}><div className="Graphics_stage__zQsKO" data-graphic="skills" aria-hidden="true"></div></div><div className="Stack_copy__HuGKE"><h3 className="Stack_title__pyZGI">01. Discover &amp; Frame</h3><p className="Stack_body__UWtdo">We listen first. We learn the business problem, the people involved, the systems in place and what success needs to look like. Clarity before code or contract.</p></div><div className="Stack_shade__22rkt" aria-hidden="true" style={({"opacity":"0"} as React.CSSProperties)}></div></article></div><div className="Stack_slot__YyNLM" style={({"--k":"1"} as React.CSSProperties)}><article className="Stack_card__4aXZo" style={({"transform":"translateY(16px)"} as React.CSSProperties)}><img className="Stack_floor__htgAA" src="/art/does-the-work/stack-floor.svg" alt="" aria-hidden="true" draggable="false" decoding="async"/><div className="Stack_visual__8vFoU" aria-hidden="true" inert={true}><div className="Graphics_stage__zQsKO" data-graphic="context" aria-hidden="true"></div></div><div className="Stack_copy__HuGKE"><h3 className="Stack_title__pyZGI">02. Design &amp; Architecture</h3><p className="Stack_body__UWtdo">We map every dependency, security requirement and system integration. Platform-neutral choices that fit your budget, timeline and scale.</p></div><div className="Stack_shade__22rkt" aria-hidden="true" style={({"opacity":"0"} as React.CSSProperties)}></div></article></div><div className="Stack_slot__YyNLM" style={({"--k":"2"} as React.CSSProperties)}><article className="Stack_card__4aXZo" style={({"transform":"translateY(32px)"} as React.CSSProperties)}><img className="Stack_floor__htgAA" src="/art/does-the-work/stack-floor.svg" alt="" aria-hidden="true" draggable="false" decoding="async"/><div className="Stack_visual__8vFoU" aria-hidden="true" inert={true}><div className="Graphics_stage__zQsKO" data-graphic="proactive" aria-hidden="true"></div></div><div className="Stack_copy__HuGKE"><h3 className="Stack_title__pyZGI">03. Deliver &amp; Optimize</h3><p className="Stack_body__UWtdo">Senior consultants lead every engagement, writing the code, deploying the integrations, training your team, and staying accountable for measurable ROI.</p></div><div className="Stack_shade__22rkt" aria-hidden="true" style={({"opacity":"0"} as React.CSSProperties)}></div></article></div><div className="Stack_hold__qUM8X" aria-hidden="true"></div></div></section>
    </div>
  );
};
