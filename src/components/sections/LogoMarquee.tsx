import React, { useEffect, useRef } from 'react';
import { Building2, Shield, Cloud, Database, ShoppingBag, Globe, Cpu, Smartphone } from 'lucide-react';
import { gsap, SYM_EASE } from '../../lib/gsap';

interface ClientLogo {
  name: string;
  tag: string;
  icon: React.ReactNode;
}

const CLIENT_PARTNERS: ClientLogo[] = [
  {
    name: 'Microsoft',
    tag: 'Enterprise Cloud & AI',
    icon: <Cpu className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'Nintendo',
    tag: 'Global Consumer Tech',
    icon: <Globe className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'Bank of America',
    tag: 'Financial Systems',
    icon: <Building2 className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'Cisco',
    tag: 'Enterprise Networks',
    icon: <Shield className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'Qualtrics',
    tag: 'Experience Platform',
    icon: <Cloud className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'Bill & Melinda Gates Foundation',
    tag: 'Global Philanthropy',
    icon: <Globe className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'Costco Wholesale',
    tag: 'Global Retail & Logistics',
    icon: <ShoppingBag className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'T-Mobile',
    tag: 'Telecom & 5G',
    icon: <Smartphone className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'Flipkart',
    tag: 'E-Commerce Platform',
    icon: <ShoppingBag className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'Providence Health',
    tag: 'Healthcare Systems',
    icon: <Building2 className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'InQbrands',
    tag: 'Commerce & Tech',
    icon: <Globe className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'Genesys',
    tag: 'Customer Experience',
    icon: <Cloud className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'Snowflake',
    tag: 'Data Cloud',
    icon: <Database className="w-4 h-4 text-[#D22931]" />,
  },
  {
    name: 'BuyWander',
    tag: 'Marketplace Tech',
    icon: <ShoppingBag className="w-4 h-4 text-[#D22931]" />,
  },
];

export const LogoMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const marqueeItems = [...CLIENT_PARTNERS, ...CLIENT_PARTNERS];

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Symmetry Section 5 Conveyor Drop Entrance
        gsap.fromTo(
          track.querySelectorAll('.marquee-tile'),
          { y: -24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.025,
            duration: 0.8,
            ease: SYM_EASE.snappy,
            scrollTrigger: {
              trigger: container,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Seamless GSAP Infinite Track Conveyor (slows down smoothly on hover)
        tweenRef.current = gsap.to(track, {
          xPercent: -50,
          duration: 32,
          ease: 'none',
          repeat: -1,
        });
      });
    }, container);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#EBF2F7] py-12 border-y border-[#DCE4EC] overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 mb-7 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#556070] flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
          <span>Trusted by enterprise leaders &amp; high-growth technology companies</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
        </p>
      </div>

      <div
        onMouseEnter={() => tweenRef.current?.timeScale(0.22)}
        onMouseLeave={() => tweenRef.current?.timeScale(1)}
        className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]"
      >
        <div ref={trackRef} className="py-2 flex w-max items-center gap-5">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="marquee-tile flex items-center gap-3.5 px-5 py-3 rounded-xl bg-white border border-[#DCE4EC] shadow-2xs hover:border-[#D22931]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0 group cursor-default"
            >
              <div className="w-7 h-7 rounded-lg bg-[#EBF2F7] border border-[#DCE4EC] flex items-center justify-center text-[#020626] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {item.icon}
              </div>

              <span className="font-display font-bold text-sm text-[#020626] group-hover:text-[#D22931] transition-colors whitespace-nowrap">
                {item.name}
              </span>

              <span className="text-[11px] font-semibold text-[#556070] bg-[#EBF2F7] px-2.5 py-0.5 rounded-full border border-[#DCE4EC] whitespace-nowrap">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};