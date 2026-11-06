/**
 * Hitech Advisors Official Brand Color System & Design Tokens
 * As specified in the Hitech Advisors Website Build Document (Section 6)
 */

export const BRAND_COLORS = {
  // Primary brand palette
  ink: '#0B1F33',        // Headings, primary text, dark sections
  inkDeep: '#06121E',    // Deep background canvas
  bodyText: '#3A4A5A',   // Paragraphs in light mode
  bodyMuted: '#94A3B8',  // Secondary copy in dark mode
  
  // Brand accents
  crimson: '#D22931',    // Primary brand crimson from the Hitech logo mark
  crimsonHover: '#E11D48',
  tealAccent: '#0B7A7C', // Secondary platform-neutral accent
  
  // Canvas & Structure
  paper: '#FFFFFF',      // Main light background
  mist: '#F4F6F8',       // Clean alternate section backgrounds / cards
  line: '#D9E0E6',       // Dividers, card borders
  cardDark: 'rgba(15, 23, 42, 0.75)',
  borderDark: 'rgba(255, 255, 255, 0.08)',
};

export const BRAND_TYPOGRAPHY = {
  h1: 'font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]',
  h2: 'font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight',
  h3: 'font-sans text-xl sm:text-2xl font-semibold tracking-tight text-white',
  eyebrow: 'font-sans text-xs uppercase tracking-widest font-semibold text-rose-400',
  bodyLarge: 'font-sans text-lg sm:text-xl text-slate-300 leading-relaxed font-normal',
  body: 'font-sans text-base text-slate-300 leading-relaxed',
};

export const BRAND_POSITIONING = {
  brandPromise: 'Clarity in the decision. Accountability in the delivery.',
  brandLine: 'Meaningful problems deserve meaningful solutions.',
  descriptor: 'Business & Technology Solutions',
  homepageH1: 'Strategy That Connects to Execution.',
  primaryCTA: 'Discuss a Challenge',
  secondaryCTA: 'Explore Our Solutions',
  responseTime: 'A senior consultant will respond within 24 hours — with questions worth answering, not a sales pitch.',
};
