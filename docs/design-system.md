# Style by Nerissa — Atelier Design System
**Visual Identity & Architecture Specification**  
*Extracted from Stitch Project: "Style by Nerissa Atelier Homepage" (Haute Couture Atelier)*

---

## 1. Brand Philosophy & Aesthetic Movement
**Editorial Minimalism infused with Artisanal Tactility**

Style by Nerissa is an exclusive, artisanal couture and ready-to-wear tailoring house rooted in London (Mayfair, 14 Savile Row) and Paris (28 Rue du Faubourg Saint-Honoré). The aesthetic fuses:
- **Architectural Line & Posture:** Sharp right angles, deliberate hairlines, and generous negative space reminiscent of broadsheet couture lookbooks and museum monographs.
- **Materiality & Drape:** Fluid silks, bonded wool crepes, and gossamer organzas celebrated through tactile specimen cards, subtle surface contrasts, and macro-texture imagery.
- **Unrushed Cadence:** High contrast serif headlines paired with airy, monospaced-precision micro-typography, animated with silk-smooth easing curves via `motion`.

---

## 2. Color Palette & Tone Architecture

| Token | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| `surface` / `surface-bright` | `#FAF9F7` | **Warm Alabaster** — The luminous, unbleached silk/paper canvas. |
| `surface-container-low` | `#F4F3F1` | Subtle container background for manifestos & secondary blocks. |
| `surface-container` | `#EFEEEC` | **Soft Sand** — Product trays, garment specs, and card containers. |
| `surface-container-high` | `#E9E8E6` | Elevated cards, client testimonial containers. |
| `surface-container-highest` | `#E3E2E0` | Active highlights, contrast chips. |
| `surface-dim` | `#DADAD8` | Muted stone borders and subtle hover surfaces. |
| `primary` | `#161412` / `#000000` | **Deep Espresso / Pure Ink** — Dominant editorial titles, primary buttons. |
| `on-primary` | `#FFFFFF` | Text on primary containers and buttons. |
| `primary-container` | `#1D1B19` | Deep charcoal foundations, dark action containers. |
| `secondary` | `#645D58` / `#78716C` | **Warm Slate** — Metadata, provenance, fabric tracking codes. |
| `tertiary-container` | `#1D1B19` | **Noir Espresso** — Grounding footer frame, inverted viewports. |
| `outline` | `#7D766F` | Medium borders and structural separators. |
| `outline-variant` | `#CEC5BD` | Soft hairline dividers. |
| `hairline` | `rgba(22, 20, 18, 0.08)` | 1px whispered structural framing. |

---

## 3. Typography System

### Typefaces
- **Primary Display & Headlines:** `Morside` (Self-hosted local font in `src/assets/Morside/` and `public/fonts/`).  
  *Characteristics:* Artisanal bespoke high-fashion display serif with exquisite proportions and editorial rhythm. Zero external Google Font CDN dependency for privacy & GDPR compliance.
- **Primary Sans (Body, Micro-Labels & Navigation):** `Plus Jakarta Sans`, system-ui, sans-serif  
  *Characteristics:* Light (300) and Normal (400) for body copy with open leading; Medium (500) and SemiBold (600) for uppercase micro-labels with wide letter-spacing (`0.14em`).

### Typographic Scale
- `display-lg`: `64px` / line-height `72px` / tracking `-0.02em` (Mobile: `40px` / `48px`)
- `display-md`: `48px` / line-height `56px` / tracking `-0.015em` (Mobile: `32px` / `40px`)
- `headline-lg`: `36px` / line-height `44px`
- `headline-md`: `28px` / line-height `36px`
- `headline-sm`: `22px` / line-height `30px` / weight `500`
- `body-lg`: `18px` / line-height `30px` / weight `300`
- `body-md`: `15px` / line-height `24px` / weight `400`
- `body-sm`: `13px` / line-height `20px` / weight `400`
- `label-caps`: `11px` / line-height `16px` / tracking `0.14em` / uppercase / weight `600`
- `label-sm`: `12px` / line-height `16px` / tracking `0.04em` / weight `500`

---

## 4. Layout, Grid & Spatial Rhythm
- **12-Column Responsive Grid:**
  - Desktop: Standard 12-column layout with `2rem` (32px) gutters and `4rem` (64px) page margins.
  - Mobile: 4-column layout with `1rem` (16px) gutters and `1.5rem` (24px) page margins.
- **Spacing Units:**
  - `space-xs`: `0.375rem` (6px)
  - `space-sm`: `0.75rem` (12px)
  - `space-md`: `1.5rem` (24px)
  - `space-lg`: `3rem` (48px)
  - `space-xl`: `5rem` (80px)

---

## 5. Shape Language & Elevation
- **Planar Stacking & Razor Definition:** Absolute right angles (`border-radius: 0px` for architectural cards and tailoring blocks; refined soft pills `rounded-full` for select floating badges and interactive buttons).
- **Hairline Framing:** Borders rely on `1px solid rgba(22, 20, 18, 0.08)` or `#CEC5BD` rather than drop shadows.
- **Depth via Tonal Planes:** Surfaces sit atop one another (`#EFECE6` on `#FAF9F7`) without skeuomorphic blurs.

---

## 6. Motion & Animation Standards (`motion`)
- **Atmospheric Easing:** Silky smooth spring or cubic-bezier curves (`[0.16, 1, 0.3, 1]` or `[0.22, 1, 0.36, 1]`).
- **Hero & Section Reveals:** Staggered opacity (`0` to `1`) and slight vertical drift (`y: 20` to `y: 0`).
- **Kinetic Image Scale:** Hover zooms limited to `1.03x` - `1.05x` with `duration: 0.7s`.
- **Slide-up Action Trays:** Interactive overlay trays slide smoothly on hover (`translateY: 0`, `opacity: 1`).

