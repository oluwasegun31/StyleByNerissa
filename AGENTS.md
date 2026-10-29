<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Style by Nerissa — Engineering & Design Standards

This document defines the strict engineering, architectural, design system, and animation standards for the **Style by Nerissa** tailoring atelier project. All contributing agents and developers must adhere to these conventions.

---

## 1. Project Philosophy & Workflow
- **Page-by-Page Cadence:** We design, refine, and verify the website one page at a time. Each page is elevated with bespoke art direction, refined typography, and purposeful animations before moving to the next.
- **Mock Data First:** UI and animations must always be perfected with structured mock data in `src/data/mockData.ts` before integrating Supabase tables. Data shapes must mirror future Postgres/Supabase schemas.
- **Atelier Tone:** Every interaction, transition, and micro-copy must reflect quiet luxury, haute couture craftsmanship, and Savile Row/Parisian bespoke tailoring. Never use generic e-commerce patterns or garish digital badges.

---

## 2. Design System & Styling Rules
- **Color Discipline:**
  - Base canvas: `--color-surface` (`#FAF9F7` / Warm Alabaster). Never use stark digital `#FFFFFF` for the root background.
  - Text: `--color-on-surface` (`#1A1C1B`) for dominant ink; `--color-secondary` (`#645D58`) for metadata and captions.
  - Accents/Inversion: `--color-primary` (`#161412` / Deep Espresso) and `--color-tertiary-container` (`#1D1B19` / Noir Espresso).
  - Dividers: Whispered 1px hairlines (`rgba(22, 20, 18, 0.08)` or `--color-outline-variant`). Avoid heavy shadows or skeuomorphism.
- **Typography Standards:**
  - Headlines & Titles: `Morside` (Self-hosted local font from `src/assets/Morside/`). Zero external network font requests for strict privacy and GDPR compliance.
  - Body & Micro-Labels: `Plus Jakarta Sans`. Light (300) and Normal (400) for reading; `label-caps` (all-caps with `0.14em` letter-spacing) for tags, provenance, metrics, and price labels.
- **Geometry & Shapes:**
  - Structural blocks, imagery viewports, and spec containers: Sharp right angles (`border-radius: 0px` or subtle `rounded-lg`).
  - Interactive pill triggers & badges: `rounded-full` for floating capsule tags and primary action buttons.

---

## 3. Motion & Animation Guidelines (`motion/react`)
- Always import from `"motion/react"`:
  ```tsx
  import { motion, AnimatePresence } from "motion/react";
  ```
- **Pacing & Easing:**
  - Luxury transitions must feel weighted and fluid, avoiding frantic or abrupt steps.
  - Preferred bezier easing: `[0.16, 1, 0.3, 1]` or smooth spring configs (`{ stiffness: 380, damping: 30 }`).
- **Standard Animations:**
  - Entrance reveals: Staggered opacity (`0` to `1`) and gentle vertical drift (`y: 20` to `y: 0`).
  - Image scale: Subtle hover zoom (`scale: 1.05`, `duration: 0.7s`, `ease: "easeOut"`).
  - Tray overlays: Smooth slide-up on hover (`translateY: 0`, `opacity: 1`).

---

## 4. Component & Next.js Conventions
- **Root Layout (`src/app/layout.tsx`):**
  - Mounts persistent global shells: `<Navbar />` and `<Footer />`.
  - Child pages render within a flex-grow main wrapper.
- **Client vs. Server Components:**
  - Add `"use client";` at the top of components utilizing hooks (`useState`, `useEffect`) or `motion`.
  - Keep components modular within `src/components/`.
- **Next.js 16 Compatibility:**
  - Verify all Next.js conventions against `node_modules/next/dist/docs/`.
  - Avoid unsupported webpack loader overrides in `next.config.ts`.
