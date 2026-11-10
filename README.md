# Hitech Advisors — Corporate Website

Enterprise systems, AI engineering, data intelligence, cybersecurity, and technology advisory. One accountable team from the first strategic decision to measurable production delivery.

Built strictly in accordance with the **Hitech Advisors Website Build Document**.

---

## Architecture & Technology Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Custom Design Tokens
  - Typography: **Source Serif 4** (Display & Headings) and **Inter** (Body & UI)
  - Color Palette: Deep Navy (`#020626`), Crimson Red (`#D22931`), Gold/Amber (`#FAC344`), Surface Mist (`#EBF2F7`, `#F4F6F8`)
- **Animations**: GSAP (GreenSock) with `ScrollTrigger` and Lenis Smooth Inertia Scrolling
- **Staging Access Control**: Password-protected client review gate (`hitech2026`) with `noindex, nofollow` search robot exclusion
- **Form Handling**: Direct test inbox integration with resilient local capture (`localStorage`) and error recovery

---

## Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript check & build for production
npm run build

# Run Oxlint
npm run lint

# Preview production build locally
npm run preview
```

---

## Project Structure

```
├── index.html                   # HTML entry with Source Serif 4 & Inter Google Fonts, noindex meta
├── public/
│   ├── favicon.ico
│   ├── logo.svg                 # Authentic Hitech Advisors Monogram
│   └── robots.txt               # Disallow: /
├── src/
│   ├── components/
│   │   ├── hitech/              # Discuss Challenge modal with test inbox dispatch
│   │   ├── layout/              # Navbar and Footer components
│   │   ├── sections/            # Core content sections (Hero, Problem, Solutions, Roles, etc.)
│   │   ├── ui/                  # Particle canvas, custom cursor, magnetic buttons
│   │   └── StagingGate.tsx      # Staging gate for review protection
│   ├── data/
│   │   └── hitechContent.ts     # Content conforming to the Website Build Document
│   ├── hooks/                   # GSAP animation hooks
│   ├── lib/                     # GSAP and Lenis initialization
│   ├── App.tsx                  # Root application component wrapped in StagingGate
│   ├── index.css                # Base Tailwind v4 configuration and typography
│   └── main.tsx                 # React DOM mount point
```
