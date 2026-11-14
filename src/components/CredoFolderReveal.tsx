"use client";

import React from "react";
import Link from "next/link";
import { CREDO_DATA } from "@/data/mockData";

/**
 * Section 2 Asymmetric Bento Grid — keeps the 3-card layout and soft
 * blush-cream inner viewports from the reference, with bespoke tailoring
 * illustrations inside each card (Pattern Drafting Blueprint + Fitting Card,
 * Anatomical Dress Form with Measurement Tags, and Layered Textile Swatch Card).
 */

const SOFT_BLUSH_VIEWPORT_STYLE: React.CSSProperties = {
  background:
    "radial-gradient(circle at 50% 45%, #fdfaf2 28%, #f8e5dc 78%, #f5d0df 100%)",
};

export default function CredoFolderReveal() {
  const [pillar1, pillar2, pillar3] = CREDO_DATA.pillars;

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto mt-14 sm:mt-20 flex flex-col gap-5 sm:gap-6">
      {/* ========================================================= */}
      {/* TOP FULL-WIDTH CARD (Dual Fitting Workflows + Right CTA)  */}
      {/* ========================================================= */}
      <div className="relative w-full rounded-none bg-[#f4ead5] p-2.5 sm:p-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] border border-white/40 overflow-hidden">
        {/* Top Inset Visual Viewport: Cutting Table Pattern Blueprint & Fitting Card */}
        <div
          className="relative w-full h-[280px] sm:h-[340px] rounded-none overflow-hidden border border-[#ff3ea5]/15 flex items-center justify-center px-4"
          style={SOFT_BLUSH_VIEWPORT_STYLE}
        >
          {/* Back Sheet: Physical Paper Pattern Drafting Blueprint */}
          <div className="relative w-[310px] sm:w-[460px] h-[220px] sm:h-[255px] rounded-none bg-[#fdfbf7] shadow-[0_16px_40px_rgba(30,59,47,0.09)] border border-[#1e3b2f]/10 p-3.5 sm:p-5 flex flex-col justify-between translate-x-6 sm:translate-x-14 select-none">
            {/* Pattern Sheet Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#1e3b2f]/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3ea5]" />
                <span className="font-serif italic text-xs sm:text-sm text-[#1e3b2f]">
                  Bespoke Pattern Block · N° 014
                </span>
              </div>
              <span className="font-label-caps text-[9px] tracking-[0.18em] uppercase text-[#1e3b2f]/60 font-semibold">
                14 Savile Row · Paris
              </span>
            </div>

            {/* Pattern Sheet Body: Bodice Sloper Drawing + Pinned Silk Swatch */}
            <div className="flex-1 grid grid-cols-12 gap-3 pt-3 items-center">
              {/* Left: Technical Bodice & Lapel Pattern Block SVG */}
              <div className="col-span-7 h-full rounded-none bg-[#f7f2e7]/80 border border-[#1e3b2f]/8 p-2 flex items-center justify-center relative">
                <svg
                  viewBox="0 0 200 130"
                  className="w-full h-full max-h-[135px]"
                  fill="none"
                >
                  {/* Faint grid lines */}
                  <line x1="0" y1="32" x2="200" y2="32" stroke="#1e3b2f" strokeOpacity="0.07" />
                  <line x1="0" y1="65" x2="200" y2="65" stroke="#1e3b2f" strokeOpacity="0.07" />
                  <line x1="0" y1="98" x2="200" y2="98" stroke="#1e3b2f" strokeOpacity="0.07" />
                  <line x1="65" y1="0" x2="65" y2="130" stroke="#1e3b2f" strokeOpacity="0.07" />
                  <line x1="135" y1="0" x2="135" y2="130" stroke="#1e3b2f" strokeOpacity="0.07" />

                  {/* Outer Cut Line of Jacket Front Pattern Block */}
                  <path
                    d="M 48 16 L 82 10 Q 92 28 112 30 C 102 52 106 78 122 92 L 116 118 L 44 118 L 40 72 Q 52 46 48 16 Z"
                    fill="#fdfbf7"
                    stroke="#1e3b2f"
                    strokeWidth="1.4"
                  />
                  {/* Dashed Seam Allowance & Lapel Roll Line */}
                  <path
                    d="M 53 20 L 79 15 Q 88 31 106 33 C 97 53 100 76 115 90 L 110 113 L 49 113 L 45 72 Q 56 46 53 20 Z"
                    stroke="#ff3ea5"
                    strokeWidth="1.1"
                    strokeDasharray="3 3"
                  />
                  {/* Waist Dart Diamond */}
                  <path
                    d="M 76 58 L 82 86 L 76 112 L 70 86 Z"
                    stroke="#1e3b2f"
                    strokeOpacity="0.55"
                    strokeWidth="1"
                  />
                  {/* Grainline Arrow */}
                  <line x1="58" y1="36" x2="58" y2="102" stroke="#ff3ea5" strokeWidth="1" />
                  <path d="M55 41l3-5 3 5M55 97l3 5 3-5" stroke="#ff3ea5" strokeWidth="1" />

                  {/* Tailor's Shears Icon cutting along the pattern line */}
                  <circle cx="148" cy="44" r="6" stroke="#1e3b2f" strokeWidth="1.4" />
                  <circle cx="148" cy="60" r="6" stroke="#1e3b2f" strokeWidth="1.4" />
                  <path d="M153 47 L182 62 M153 57 L182 42" stroke="#1e3b2f" strokeWidth="1.6" strokeLinecap="round" />
                </svg>

                <span className="absolute bottom-1.5 right-2 font-mono text-[8px] text-[#1e3b2f]/55 uppercase">
                  Grain 45° · Front Panel
                </span>
              </div>

              {/* Right: Dashed Fitting Notes & Pinned Measuring Tape */}
              <div className="col-span-5 h-full rounded-none border border-dashed border-[#ff3ea5]/45 bg-[#fffdfa] p-2.5 sm:p-3 flex flex-col justify-between text-left">
                <div className="space-y-1">
                  <span className="font-label-caps text-[8.5px] tracking-[0.16em] uppercase text-[#ff3ea5] font-bold block">
                    Fitting Ledger
                  </span>
                  <p className="font-serif text-xs text-[#1e3b2f] leading-tight">
                    Muslin Toile &amp; Drape Check
                  </p>
                </div>

                {/* Mini Yellow/Pink Tailor's Measuring Tape Strip */}
                <div className="w-full h-5 rounded-none bg-[#ff3ea5] text-white px-2 flex items-center justify-between shadow-xs">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-[1px] bg-white/80 ${
                        i % 2 === 0 ? "h-2.5" : "h-1.5"
                      }`}
                    />
                  ))}
                  <span className="font-mono text-[8px] font-bold tracking-wider">
                    64.0 CM
                  </span>
                </div>

                <div className="flex items-center justify-between text-[9px] text-[#1e3b2f]/70 font-medium pt-0.5 border-t border-[#1e3b2f]/8">
                  <span>Mayfair · Paris</span>
                  <span className="text-[#ff3ea5] font-bold">3 Fittings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Front-Left Tilted Tailor's Appointment Dossier Card */}
          <div className="absolute left-4 sm:left-14 md:left-20 top-1/2 -translate-y-1/2 -rotate-6 w-[205px] sm:w-[245px] rounded-none bg-[#fdfbf7] shadow-[0_22px_45px_rgba(30,59,47,0.15)] border border-[#1e3b2f]/10 p-3.5 sm:p-4 space-y-2.5 select-none text-left">
            {/* Card Header with Tailor Shears Emblem */}
            <div className="flex items-center justify-between border-b border-[#1e3b2f]/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3ea5]" />
                <span className="font-serif text-xs sm:text-[13px] font-semibold text-[#1e3b2f]">
                  Fitting Schedule
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#1e3b2f]/50">
                N° 882
              </span>
            </div>

            {/* Fitting Stage 1 */}
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-none bg-[#1e3b2f]/[0.03] text-[11px] text-[#1e3b2f]/60">
              <span>1. Posture &amp; Measure</span>
              <span className="font-mono text-[9px]">Done</span>
            </div>

            {/* Active Fitting Stage 2 (Highlighted with Hot Pink Swatch Badge) */}
            <div className="relative flex items-center justify-between px-2.5 py-2 rounded-none bg-[#f4ead5] border border-[#ff3ea5]/35 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-none bg-[#ff3ea5] text-white flex items-center justify-center shadow-xs shrink-0">
                  {/* Needle & Thread SVG Icon */}
                  <svg
                    viewBox="0 0 16 16"
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12.5 3.5L4 12M10.5 2.5c1.2-1.2 3 .6 1.8 1.8" strokeLinecap="round" />
                    <path d="M4 12c-1.5 1.5-2.5 0-1-1.5s3-1 1.5 1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#1e3b2f] leading-none">
                    2. Calico Toile Fitting
                  </p>
                  <p className="text-[9px] text-[#1e3b2f]/65 mt-0.5">
                    Mayfair Salon · Courier
                  </p>
                </div>
              </div>
            </div>

            {/* Fitting Stage 3 */}
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-none bg-[#1e3b2f]/[0.03] text-[11px] text-[#1e3b2f]/60">
              <span>3. Final Silk Drape</span>
              <span className="font-mono text-[9px]">Booked</span>
            </div>
          </div>
        </div>

        {/* Bottom Text + Right-Aligned Hot Pink Pill Button */}
        <div className="px-4 sm:px-6 pt-5 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="font-sans text-lg sm:text-[21px] font-semibold text-[#1e3b2f] tracking-tight">
              {pillar3.title} Across London, Paris &amp; Virtual Suites
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#1e3b2f]/75 leading-relaxed">
              {pillar3.description}
            </p>
          </div>

          <Link
            href="/booking"
            className="self-start sm:self-center shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-gradient-to-b from-[#ff5cb4] to-[#ff3ea5] text-white font-sans text-xs sm:text-[13px] font-semibold shadow-[0_6px_18px_rgba(255,62,165,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] hover:brightness-105 transition-all cursor-pointer"
          >
            <svg
              viewBox="0 0 16 16"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="8" cy="8" r="6" strokeOpacity="0.65" />
              <path d="M8 5v6M5 8h6" strokeLinecap="round" />
            </svg>
            <span>Book Fitting</span>
          </Link>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM 2-COLUMN ASYMMETRIC ROW (7 COLS LEFT / 5 COLS RIGHT)*/}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* ======================================================= */}
        {/* BOTTOM-LEFT CARD (7 Cols): Proportional Architecture    */}
        {/* Dressmaker's Mannequin Bust & Anatomical Caliper Points */}
        {/* ======================================================= */}
        <div className="relative overflow-hidden lg:col-span-7 rounded-none bg-[#f4ead5] p-2.5 sm:p-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] border border-white/40 flex flex-col justify-between">
          {/* Top Inset Visual Viewport: Dress Form Sculpture & 34-Point Callouts */}
          <div
            className="relative w-full h-[260px] sm:h-[280px] rounded-none overflow-hidden border border-[#ff3ea5]/15 flex items-center justify-center px-3 sm:px-6 select-none"
            style={SOFT_BLUSH_VIEWPORT_STYLE}
          >
            {/* Central Sculpted Dressmaker's Dummy / Mannequin Torso SVG */}
            <div className="relative flex items-center justify-center w-full max-w-[440px] h-full">
              <svg
                viewBox="0 0 360 230"
                className="w-full h-full max-h-[235px]"
                fill="none"
              >
                {/* Dashed Tailor's Chalk Callout Lines from Mannequin to Tags */}
                <path
                  d="M 152 52 L 92 42 M 208 52 L 268 42 M 156 126 L 88 158 M 204 126 L 272 158"
                  stroke="#ff3ea5"
                  strokeOpacity="0.6"
                  strokeWidth="1.3"
                  strokeDasharray="3 3"
                />

                {/* Brass Finial & Neck Cap of Dress Form */}
                <circle cx="180" cy="18" r="5" fill="#1e3b2f" />
                <rect x="172" y="23" width="16" height="6" fill="#1e3b2f" />
                <path
                  d="M 171 29 L 169 42 L 191 42 L 189 29 Z"
                  fill="#f4ead5"
                  stroke="#1e3b2f"
                  strokeWidth="1.5"
                />

                {/* Linen Mannequin Torso Silhouette */}
                <path
                  d="M 169 42 L 142 52 C 138 74 146 96 154 124 C 145 148 140 172 142 186 Q 180 194 218 186 C 220 172 215 148 206 124 C 214 96 222 74 218 52 L 191 42 Z"
                  fill="#fdfbf7"
                  stroke="#1e3b2f"
                  strokeWidth="1.7"
                />

                {/* Center Front & Princess Seam Basting Lines on the Mannequin */}
                <line
                  x1="180"
                  y1="42"
                  x2="180"
                  y2="189"
                  stroke="#1e3b2f"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                />
                <path
                  d="M 154 50 Q 166 92 162 187 M 206 50 Q 194 92 198 187"
                  stroke="#1e3b2f"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                {/* Horizontal Bust & Hip Balance Lines */}
                <path
                  d="M 143 84 Q 180 92 217 84"
                  stroke="#1e3b2f"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />

                {/* Hot Pink Tailor's Measuring Tape Wrapped Around Waist */}
                <path
                  d="M 153 122 Q 180 130 207 122 L 208 130 Q 180 138 152 130 Z"
                  fill="#ff3ea5"
                />

                {/* Wooden/Brass Stand Pole at Bottom */}
                <line x1="180" y1="190" x2="180" y2="225" stroke="#1e3b2f" strokeWidth="3" />
                <rect x="173" y="190" width="14" height="6" fill="#1e3b2f" />

                {/* Hot Pink Anatomical Pin Nodes on the Mannequin */}
                <circle cx="152" cy="52" r="4" fill="#ff3ea5" stroke="#fdfbf7" strokeWidth="1.5" />
                <circle cx="208" cy="52" r="4" fill="#ff3ea5" stroke="#fdfbf7" strokeWidth="1.5" />
                <circle cx="156" cy="126" r="4" fill="#ff3ea5" stroke="#fdfbf7" strokeWidth="1.5" />
                <circle cx="204" cy="126" r="4" fill="#ff3ea5" stroke="#fdfbf7" strokeWidth="1.5" />
              </svg>

              {/* Top-Left Floating Tailor Tag: Shoulder Pitch */}
              <div className="absolute left-0 sm:left-2 top-5 rounded-none bg-[#fdfbf7] px-3 py-2 shadow-[0_8px_20px_rgba(30,59,47,0.08)] border border-[#1e3b2f]/10 text-left">
                <span className="font-mono text-[9px] text-[#ff3ea5] font-bold uppercase block">
                  Shoulder Pitch
                </span>
                <span className="font-serif text-xs sm:text-[13px] text-[#1e3b2f] font-semibold">
                  14.2° Slope Balance
                </span>
              </div>

              {/* Top-Right Floating Tailor Tag: Armscye & Collar */}
              <div className="absolute right-0 sm:right-2 top-5 rounded-none bg-[#fdfbf7] px-3 py-2 shadow-[0_8px_20px_rgba(30,59,47,0.08)] border border-[#1e3b2f]/10 text-left">
                <span className="font-mono text-[9px] text-[#ff3ea5] font-bold uppercase block">
                  Collar &amp; Gorge
                </span>
                <span className="font-serif text-xs sm:text-[13px] text-[#1e3b2f] font-semibold">
                  Hand-Padded Roll
                </span>
              </div>

              {/* Bottom-Left Floating Tailor Tag: Waist Suppression */}
              <div className="absolute left-0 sm:left-1 bottom-5 rounded-none bg-[#fdfbf7] px-3 py-2 shadow-[0_8px_20px_rgba(30,59,47,0.08)] border border-[#1e3b2f]/10 text-left">
                <span className="font-mono text-[9px] text-[#1e3b2f]/60 font-bold uppercase block">
                  Calico Toile #14
                </span>
                <span className="font-serif text-xs sm:text-[13px] text-[#1e3b2f] font-semibold">
                  Pin-Sculpted Waist
                </span>
              </div>

              {/* Bottom-Right Floating Tailor Tag: 34 Points */}
              <div className="absolute right-0 sm:right-1 bottom-5 rounded-none bg-[#fdfbf7] px-3 py-2 shadow-[0_8px_20px_rgba(30,59,47,0.08)] border border-[#ff3ea5]/30 text-left">
                <span className="font-mono text-[9px] text-[#ff3ea5] font-bold uppercase block">
                  34 Posture Points
                </span>
                <span className="font-serif text-xs sm:text-[13px] text-[#1e3b2f] font-semibold">
                  Custom Paper Pattern
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Text Area */}
          <div className="px-4 sm:px-5 pt-5 pb-4 text-left space-y-1.5">
            <h3 className="font-sans text-lg sm:text-[21px] font-semibold text-[#1e3b2f] tracking-tight">
              {pillar1.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#1e3b2f]/75 leading-relaxed">
              {pillar1.description}
            </p>
          </div>
        </div>

        {/* ======================================================= */}
        {/* BOTTOM-RIGHT CARD (5 Cols): Hand-Basted Canvassing      */}
        {/* Layered Textile Swatch Card & Hand-Basted Seam Sampler  */}
        {/* ======================================================= */}
        <div className="relative overflow-hidden lg:col-span-5 rounded-none bg-[#f4ead5] p-2.5 sm:p-3 shadow-[0_24px_60px_rgba(0,0,0,0.28)] border border-white/40 flex flex-col justify-between">
          {/* Top Inset Visual Viewport: Physical Fabric Swatch Card & Basting Stitch */}
          <div
            className="relative w-full h-[260px] sm:h-[280px] rounded-none overflow-hidden border border-[#ff3ea5]/15 flex items-center justify-center px-5 select-none"
            style={SOFT_BLUSH_VIEWPORT_STYLE}
          >
            {/* Physical Atelier Textile Swatch Card */}
            <div className="relative w-full max-w-[275px] rounded-none bg-[#fdfbf7] p-3.5 shadow-[0_14px_34px_rgba(30,59,47,0.09)] border border-[#1e3b2f]/10 space-y-3 text-left">
              {/* Swatch Header */}
              <div className="flex items-center justify-between text-[10px] font-label-caps tracking-[0.16em] uppercase text-[#1e3b2f]/65">
                <span>Textile Archive</span>
                <span className="text-[#ff3ea5] font-bold">Mill Cert.</span>
              </div>

              {/* Inner Hand-Basted Dashed Seam Sampler Frame with Layered Fabric Swatches */}
              <div className="relative w-full h-28 rounded-none border-2 border-dashed border-[#ff3ea5]/45 bg-[#f7efe0] p-3 flex flex-col justify-between overflow-hidden">
                {/* Diagonal Woven Horsehair Texture Lines */}
                <svg
                  viewBox="0 0 200 100"
                  className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                >
                  <defs>
                    <pattern
                      id="horsehair-weave"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M 0 10 L 10 0 M -2 2 L 2 -2 M 8 12 L 12 8" stroke="#1e3b2f" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#horsehair-weave)" />
                </svg>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-none bg-[#1e3b2f] text-[#f4ead5] font-mono text-[8.5px] uppercase tracking-wider">
                    Floating Horsehair
                  </span>
                  {/* Brass Tailor Pin Head */}
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff3ea5] ring-2 ring-white shadow-xs" />
                </div>

                <div className="relative z-10 space-y-0.5">
                  <p className="font-serif italic text-sm text-[#1e3b2f]">
                    100% Hand-Felled French Seam
                  </p>
                  <p className="font-mono text-[9px] text-[#1e3b2f]/65">
                    12 Stitches per Inch · Silk Thread
                  </p>
                </div>
              </div>

              {/* Bottom Provenance Row */}
              <div className="flex items-center justify-between px-1 pt-0.5">
                <span className="font-serif text-xs text-[#1e3b2f] font-medium">
                  Como, Italy · Biella Wool
                </span>
                <span className="font-mono text-[9.5px] text-[#ff3ea5] font-bold">
                  120–340 GSM
                </span>
              </div>

              {/* Tilted Floating Woven Couture Label Overlapping Bottom-Right */}
              <div className="absolute -right-3 bottom-7 -rotate-6 rounded-none bg-[#1e3b2f] text-[#f4ead5] px-3.5 py-2 shadow-[0_14px_28px_rgba(30,59,47,0.22)] border border-[#f4ead5]/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3ea5]" />
                <span className="font-serif italic text-xs tracking-wide whitespace-nowrap">
                  Pure Mulberry Silk
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Text Area */}
          <div className="px-4 sm:px-5 pt-5 pb-4 text-left space-y-1.5">
            <h3 className="font-sans text-lg sm:text-[21px] font-semibold text-[#1e3b2f] tracking-tight">
              {pillar2.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#1e3b2f]/75 leading-relaxed">
              {pillar2.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
