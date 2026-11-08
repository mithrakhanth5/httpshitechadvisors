import React from 'react';

interface BrandLogo {
  name: string;
  tag: string;
  svg: React.ReactNode;
}

const BRAND_LOGOS: BrandLogo[] = [
  {
    name: 'Amazon Web Services',
    tag: 'AWS Cloud',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12.75 16.5c-2.4 1.3-5.3 1.5-7.8.4-.3-.1-.6.1-.5.4.6 1 1.9 2.2 4 2.7 2.6.6 5.5.1 7.7-1.1.4-.2.2-.7-.2-.6-.7.2-2.1.2-3.2-.2zm5.7-1.7c-.3-.4-1.8-.2-2.5-.1-.2 0-.3-.2-.1-.3.9-.9 2.4-.6 2.7-.3.3.3.3 1.8-.5 2.6-.2.2-.3.1-.2-.1.4-.6.9-1.4.6-1.8zM8.3 11.2c0-.9.5-1.4 1.4-1.4.8 0 1.3.5 1.3 1.4 0 .9-.5 1.4-1.3 1.4-.9 0-1.4-.5-1.4-1.4zm5.8 0c0-.9.5-1.4 1.4-1.4.8 0 1.3.5 1.3 1.4 0 .9-.5 1.4-1.3 1.4-.9 0-1.4-.5-1.4-1.4zM3.4 12c0-4.7 3.8-8.6 8.6-8.6s8.6 3.8 8.6 8.6c0 1.3-.3 2.5-.8 3.6-.3-.3-.7-.5-1.1-.5-.6 0-1.2.3-1.6.8-.7-.4-1.6-.7-2.6-.8-.1-.4-.3-.7-.6-.9-.6-.4-1.4-.6-2.3-.6s-1.7.2-2.3.6c-.3.2-.5.5-.6.9-1 .1-1.9.4-2.6.8-.4-.5-1-.8-1.6-.8-.4 0-.8.2-1.1.5-.5-1.1-.9-2.3-.9-3.6z" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Azure',
    tag: 'Azure Cloud',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M13.05 2.15a.75.75 0 0 0-.67.42L3.18 19.46a.75.75 0 0 0 .66 1.08h6.14a.75.75 0 0 0 .67-.42l1.9-3.69 3.2 3.73a.75.75 0 0 0 .57.26h4.5a.75.75 0 0 0 .56-1.25L14.4 9.17l3.77-6.6a.75.75 0 0 0-.65-1.12h-4.47zM12.3 5.4l2.84 5-3.32 5.8-2.66-4.97L12.3 5.4z" />
      </svg>
    ),
  },
  {
    name: 'Google Cloud Platform',
    tag: 'GCP',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
      </svg>
    ),
  },
  {
    name: 'Snowflake',
    tag: 'Data Cloud',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2a.75.75 0 0 1 .75.75v3.22l2.28-1.32a.75.75 0 0 1 .75 1.3l-2.28 1.32 2.28 1.32a.75.75 0 0 1-.75 1.3L12.75 8.57V11h2.43l1.32-2.28a.75.75 0 1 1 1.3.75l-1.32 2.28 1.32 2.28a.75.75 0 1 1-1.3.75L15.18 12.5H12.75v2.43l2.28 1.32a.75.75 0 1 1-.75 1.3l-2.28-1.32-2.28 1.32a.75.75 0 0 1-.75-1.3l2.28-1.32V12.5H8.82l-1.32 2.28a.75.75 0 0 1-1.3-.75l1.32-2.28-1.32-2.28a.75.75 0 0 1 1.3-.75l1.32 2.28h2.43V8.57L8.97 7.25a.75.75 0 1 1 .75-1.3l2.28 1.32V2.75A.75.75 0 0 1 12 2zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      </svg>
    ),
  },
  {
    name: 'Databricks',
    tag: 'Lakehouse AI',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2 1.5 8l3.75 2.14L12 6.28l6.75 3.86L22.5 8 12 2zm0 6.57L5.25 12.43 1.5 10.29l10.5 6 10.5-6-3.75-2.14L12 8.57zm0 6.57L5.25 19 1.5 16.86l10.5 6 10.5-6-3.75-2.14-6.75 4.43z" />
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    tag: 'CRM & Data',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M10.2 6.1c1.2-1.5 3-2.4 5-2.4 2.8 0 5.2 1.9 5.9 4.6 1.7.5 2.9 2.1 2.9 3.9 0 2.3-1.9 4.2-4.2 4.2H5.7c-2.4 0-4.3-1.9-4.3-4.3 0-2.1 1.5-3.8 3.5-4.2.7-2.6 3.1-4.5 5.9-4.5.6 0 1.2.1 1.7.3l.2.1-.2.4-.8 1.5-.4.4z" />
      </svg>
    ),
  },
  {
    name: 'NetSuite',
    tag: 'Enterprise ERP',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M3 4h5.5l5.5 8V4H19v16h-5.5L8 12v8H3V4zm6.5 4H5v10h2V9.8l2-1.8zm6 10H19V8h-2v8.2l-2 1.8z" />
      </svg>
    ),
  },
  {
    name: 'CrowdStrike',
    tag: 'Falcon SecOps',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M21.5 4.5 13.2 12l8.3 7.5L18 21l-7.5-6.5L3 21l3.5-9L3 3l7.5 6.5L18 3l3.5 1.5z" />
      </svg>
    ),
  },
  {
    name: 'ServiceNow',
    tag: 'ITSM & Workflows',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </svg>
    ),
  },
  {
    name: 'Workday',
    tag: 'HCM & Financials',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 8c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5z" />
      </svg>
    ),
  },
  {
    name: 'Splunk',
    tag: 'Security Observability',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="m8.5 6.5 5.5 5.5-5.5 5.5-1.4-1.4 4.1-4.1-4.1-4.1L8.5 6.5zM15 17.5h6v2h-6v-2z" />
      </svg>
    ),
  },
  {
    name: 'Wiz',
    tag: 'Cloud Security',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="m12 2 9 4.5v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12v-6L12 2zm0 3.3L5 8.8v3.7c0 4.24 2.87 8.23 7 9.38 4.13-1.15 7-5.14 7-9.38V8.8l-7-3.5z" />
      </svg>
    ),
  },
];

export const LogoMarquee: React.FC = () => {
  // Duplicate for endless seamless marquee
  const marqueeItems = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className="w-full bg-[#F8FAFC] py-12 border-y border-[#EAEDF1] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 mb-7 text-center">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#556070] flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
          Integrated across modern enterprise systems &amp; cloud ecosystems
          <span className="w-1.5 h-1.5 rounded-full bg-[#D22931]" />
        </p>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="animate-marquee py-2 flex items-center gap-6">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3.5 px-5 py-3 rounded-xl bg-white border border-[#EAEDF1] shadow-2xs hover:border-[#D22931]/40 hover:shadow-sm transition-all duration-300 flex-shrink-0 group cursor-default"
            >
              {/* Single-Theme Logo Icon Container */}
              <div className="w-7 h-7 rounded-lg bg-[#020626]/5 border border-[#020626]/10 flex items-center justify-center text-[#020626] group-hover:text-[#D22931] group-hover:bg-[#D22931]/10 group-hover:border-[#D22931]/30 transition-all duration-300 flex-shrink-0">
                {item.svg}
              </div>

              {/* Brand Name */}
              <span className="font-display font-bold text-sm text-[#020626] group-hover:text-[#D22931] transition-colors whitespace-nowrap">
                {item.name}
              </span>

              {/* Capability Tag */}
              <span className="text-[10px] font-mono font-semibold text-[#556070] bg-[#F8FAFC] px-2 py-0.5 rounded border border-[#EAEDF1] whitespace-nowrap">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

