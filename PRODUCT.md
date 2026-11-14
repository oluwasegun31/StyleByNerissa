# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Private haute couture, bridal, and eveningwear clients seeking one-of-a-kind bespoke commissions and luxury capsule tailoring sculpted to their anatomical posture and personal presence.

## Product Purpose

Serve as the premier digital atelier for Style by Nerissa, providing an intimate, high-touch consultation booking and discovery experience that mirrors the discretion, precision, and artistry of Savile Row and Parisian haute couture. Success is measured by guiding discerning clients from editorial discovery to booked private fittings (in London, Paris, or worldwide virtual suites) while establishing uncompromising authority in contemporary bespoke craftsmanship.

## Positioning

Proportional architecture and bespoke body replication — combining micro-anatomical 34-point posture analysis, physical calico draft toiles, hand-basted horsehair canvassing, and provenance-traceable textiles from generational family-run mills in Como, Biella, and Kyoto. Unlike mass luxury ready-to-wear or automated made-to-measure, every garment is an individual architectural sculpture built around the client's posture and movement.

## Operating Context

- Private salon consultations at Mayfair (London, 14 Savile Row) and Faubourg Saint-Honoré (Paris, 28 Rue du Fbg Saint-Honoré).
- Worldwide virtual fitting suites utilizing calibrated digital measurement intake and courier-delivered physical calico toiles.
- Three-phase client journey:
  1. Phase 01: Anatomical Blueprint & Calico Toile (micro-measurement and posture drafting)
  2. Phase 02: Structural Hand-Basting (horsehair floating canvas fitting)
  3. Phase 03: Final Silhouette & Delivery (hand-finished French seams and personalized garment archive)

## Capabilities and Constraints

- Multi-step bespoke consultation booking flow with salon / virtual suite selection, date/time scheduling, and silhouette brief intake.
- Curated capsule lookbook and archive with textile provenance, drape notes, and swatch specifications.
- Interactive multi-stage bespoke process walkthrough ("From First Toile to Final Hem").
- Client feedback, event provenance, and garment review archives.
- No instant digital checkout for bespoke commissions; all bespoke creations require private consultation booking.
- Built on Next.js 16 (App Router), React 19, Tailwind CSS v4, and Motion.

## Brand Commitments

- **Name:** Style by Nerissa (SBN Atelier).
- **Atelier Tone:** Quiet luxury, couture reverence, precision language, and understated elegance. Free of generic e-commerce patterns, aggressive marketing ribbons, or artificial urgency badges.
- **Visual Identity Anchor:** Curated palette featuring signature Barbie Pink (`#FB228E`) and Deep Noir accents alongside Stormy Teal (`#1B3B36`) and Warm Alabaster (`#FAF9F7`), unified with analog film grain texture across all surfaces.

## Evidence on Hand

- Structured mock data model in `src/data/mockData.ts` (capsule catalog, 3 bespoke phases, textile swatches, client reviews, atelier addresses, FAQs).
- High-fidelity atelier photography assets in `public/` and cloud storage mirrors.
- Confirmed salon addresses in London (Mayfair) and Paris.

## Product Principles

1. **Posture Before Pattern:** Every bespoke garment honors anatomical individuality and natural drape rather than forcing rigid standard sizing.
2. **Quiet Confidence over Clutter:** Present craftsmanship through meticulous detail, textile provenance, and patient whitespace rather than aggressive commercial promotion.
3. **Frictionless Haute Couture Access:** Make reserving an exclusive private consultation effortless whether in-person at a European salon or virtually across the globe.
4. **Truth to Materials:** Celebrate noble, traceable fibers (pure silk, Como jacquards, Biella wools) with transparent weight, luster, and origin specifications.

## Accessibility & Inclusion

- Semantic HTML structure across all routes with accessible heading hierarchies and landmark regions.
- High-contrast text compliance against tactile textured backgrounds.
- Respect for reduced motion preferences (`prefers-reduced-motion`) across complex transitions and card stacks.
- Keyboard-accessible consultation booking forms and interactive swatch selectors.

