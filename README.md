# Style by Nerissa — Atelier

An exclusive, high-design digital experience for **Style by Nerissa**, an artisanal couture and bespoke tailoring house based in London (Mayfair, 14 Savile Row) and Paris (28 Rue du Faubourg Saint-Honoré).

---

## 🏛️ Brand & Architectural Vision
- **Aesthetic Movement:** *Editorial Minimalism infused with Artisanal Tactility*
- **Design Philosophy:** Every garment begins with posture. The digital platform merges broadsheet couture monograph aesthetics with understated materiality, hairline geometry, and silk-smooth micro-animations.
- **Craftsmanship:** Bespoke bridal and evening wear commissions alongside small-batch ready-to-wear essentials, hand-finished with uncompromising drape.

---

## 🎨 Design System ("Haute Couture Atelier")

The design system has been extracted from Stitch wireframes and tuned specifically for high tailoring:

### Typography
- **Headlines & Serif Accents:** `Playfair Display` (Regular & Medium weights with tight letter-spacing for editorial elegance; never bold/black).
- **Body & Micro-Typography:** `Plus Jakarta Sans` (Light 300 & Normal 400 for spacious reading leading; 500/600 for uppercase micro-labels with `0.14em` letter-spacing).

### Color Tokens
- **Warm Alabaster Canvas (`--color-surface` / `#FAF9F7`):** Unbleached organic paper tone for page ground.
- **Soft Sand (`--color-surface-container` / `#EFEEEC`):** Tactile trays and garment spec modules.
- **Deep Espresso Ink (`--color-primary` / `#161412`):** Decisive CTA buttons and editorial titles.
- **Noir Espresso (`--color-tertiary-container` / `#1D1B19`):** Grounding footer frame and inverted viewports.
- **Warm Slate (`--color-secondary` / `#645D58`):** Fabric provenance, tracking codes, and metadata.
- **Whispered Hairlines (`rgba(22, 20, 18, 0.08)` / `#CEC5BD`):** Structural 1px rules without visual weight.

Full design specifications can be viewed in [`docs/design-system.md`](docs/design-system.md).

---

## 📐 Architecture & Layout

### Global Shell (`src/app/layout.tsx`)
The global root layout mounts the persistent brand frame:
- [`Navbar`](src/components/Navbar.tsx): Sticky glassmorphic navigation bar with brand wordmark, editorial links, interactive mobile drawer, "Book Fitting" action, and bag/patron controls.
- `Children`: Main page content rendered per route.
- [`Footer`](src/components/Footer.tsx): Grand editorial footer featuring the "YOUR SILHOUETTE AWAITS" display banner, atelier addresses (Mayfair & Paris), booking links, confidential newsletter intake, and sustainability/legal notices.

### Editorial Homepage (`src/app/page.tsx`)
1. **Hero Section:** Editorial split with season edition indicator, high-contrast headline, panoramic lookbook viewport with floating capsule pill tag, and live Mayfair booking indicators.
2. **Brand Manifesto (The Credo):** Posture philosophy and 3 architectural pillars (*Proportional Architecture*, *Hand-Basted Canvassing*, *Dual Fitting Workflows*).
3. **The Permanent Capsule:** Interactive ready-to-wear showcase with category tabs (*All Releases*, *Dresses & Silks*, *Tailored Sets*, *Outerwear*) and slide-up quick actions.
4. **The Bespoke Atelier:** Sticky split narrative column tracking couture phases (*Phase 01 Drafting*, *Phase 02 The Toile Sculpture*, *Phase 03 Master Finishes*).
5. **The Textile Archive:** Tactile specimen cards celebrating Mulberry Raw Silk, French Duchesse Satin, Bonded Wool Crepe, and Gossamer Silk Organza with GSM chips and drape descriptions.
6. **Client Silhouettes:** Patron testimonials from London and Cannes, accompanied by the atelier's *Lifetime Re-Fitting* pledge.

---

## 📦 Mock Data & Supabase Roadmap

All dynamic content is currently managed via typed mock objects in [`src/data/mockData.ts`](src/data/mockData.ts). This ensures UI and interactions can be perfected page-by-page before database wiring.

### Supabase Migration Schema (Upcoming):
- `products`: Ready-to-wear catalogue, pricing, fabric compositions, imagery.
- `bespoke_phases`: Atelier workflow phases and croquis references.
- `textiles`: Mill provenance, fabric weights (GSM), drape metrics.
- `appointments`: Client fitting consultations (in-person Mayfair/Paris or virtual fitting suites).
- `patron_profiles`: Saved client measurements, posture profiles, and orders.

---

## 🛠️ Tech Stack
- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with bespoke theme variables
- **Animations:** [Motion](https://motion.dev) (`motion/react`)
- **Language:** TypeScript 5

---

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
