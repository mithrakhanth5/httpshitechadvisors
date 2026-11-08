# Symmetry AI — Website Clone & Modern SaaS Template

A high-fidelity clone and production-ready landing page template inspired by [Symmetry](https://www.getsymmetry.com/?ref=land-book.com), built with **React 19 + TypeScript + Tailwind CSS v4 + Vite**.

Designed specifically for autonomous AI agents, coordination software, and modern SaaS products featuring clean editorial typography, geometric design tokens, interactive components, and responsive layouts.

---

## ✨ Features & Architecture

- **Symmetry Design Tokens**:
  - Warm ink: `#2e2926`
  - Crisp paper & surface: `#ffffff`, `#fdfcfa`, `#f5f3f2`
  - Accent palette: Symmetry Blue (`#6cbee4`), Green (`#40aa4a`), Yellow (`#fac344`), and soft tints (`#e2f2f9`, `#e2f9e9`, `#fcf1d8`).
- **Interactive Geometric Brand Mark**: 4-quadrant interactive emblem with smooth parting hover mechanics.
- **Sticky Frosted Navigation**: Translucent backdrop blur with desktop links, action CTAs, and responsive mobile drawer.
- **Dynamic Hero Section**: Display typography, dual CTAs, trust pill, and interactive floating task cards with live source metadata.
- **Meet Sym**: Asymmetric card styling (`24px 24px 64px 24px`) with parting geometric quadrant visual.
- **Every Task, From Everywhere**: Ingestion pipeline showcasing multi-source sync (Slack, Gmail, Linear, Notion, Calendar, Drive) with interactive detail inspector.
- **A Task List That Runs Itself**: 4 interactive feature tiles with authentic vector background grids and live sync tags.
- **Sym Does The Work**: 3 stacked capability cards with live agent execution simulator and step-by-step reasoning.
- **100+ Tool Integrations**: Filterable directory with search and animated marquee of workplace integrations.
- **Built for How You Actually Work (Roles)**: 6 interactive role accordions (Founder, Product, Operations, Sales, Client services, Recruiting) with animated dwell progress bars and dynamic preview cards.
- **Your Whole Team, in Symmetry (Multiplayer)**: Collaborative team mesh canvas with 4 capability pillars and active agent signals.
- **Private and Secure**: Dark contrast section with subtle grid lines, 4 security guarantees, and SOC 2 Type 1 indicator.
- **Final CTA**: Clean early access action form with floating bobbing geometric landscape elements.
- **Footer**: Brand mark, legal copyright, navigation columns, and giant typographic SYMMETRY letter strip.
- **Interactive Modals**:
  - `EarlyAccessModal`: Waitlist request with role selector, company size, and daily tools checklist.
  - `DemoModal`: Interactive calendar booking modal with slot picker.
- **GreenSock Animation Platform (GSAP)**:
  - Official `gsap` package installed with `ScrollTrigger` plugin.
  - Local repository set up from `https://github.com/greensock/GSAP.git`.
  - Utility helpers and custom React hooks in [`src/lib/gsap.ts`](file:///c:/Users/sivak/OneDrive/Desktop/httpshitechadvisors/src/lib/gsap.ts) and [`src/hooks/useGSAP.ts`](file:///c:/Users/sivak/OneDrive/Desktop/httpshitechadvisors/src/hooks/useGSAP.ts).
- **Modular Template Config (`src/data/templateConfig.ts`)**: Rebrand or customize the entire website from a single configuration file.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript check & build for production
npm run build

# Run Oxlint
npm run lint

# Preview production build locally
npm run preview
```

---

## 🎨 How to Customize (Template Mode)

All content, branding, navigation links, roles, tools, and copy are centralized in:

```
src/data/templateConfig.ts
```

To adapt this template for your own SaaS or AI product:
1. Update `brand.name`, `brand.tagline`, and `brand.copyright`.
2. Edit `nav.links` and action button labels.
3. Customize `roles.list` to match your target personas.
4. Modify `integrations.tools` to reflect your product's integrations.
5. Customize `security.points` for your compliance guarantees.
