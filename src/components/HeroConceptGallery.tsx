"use client";

import React from "react";
import { HERO_DATA } from "@/data/mockData";

export default function HeroConceptGallery() {
  return (
    <section
      id="hero-concept-gallery"
      className="w-full bg-barbie-pink px-4 sm:px-8 lg:px-14 xl:px-16 2xl:px-20 pt-4 sm:pt-6 pb-6 sm:pb-10 border-b border-black/15 overflow-hidden"
      style={{ backgroundColor: "var(--color-barbie-pink)" }}
    >
      {/* ========================================================= */}
      {/* GLOBAL SVG CLIP PATH DEFINITIONS FOR FILE FOLDER TAB SILHOUETTES */}
      {/* ========================================================= */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Medium Card — Tab on Left with Smooth S-Curve Fillet */}
          <clipPath id="folder-tab-left" clipPathUnits="objectBoundingBox">
            <path d="M 0, 0.10 Q 0, 0, 0.12, 0 L 0.54, 0 C 0.61, 0, 0.65, 0.11, 0.72, 0.11 L 0.88, 0.11 Q 1, 0.11, 1, 0.21 L 1, 0.90 Q 1, 1, 0.88, 1 L 0.12, 1 Q 0, 1, 0, 0.90 L 0, 0.10 Z" />
          </clipPath>

          {/* Medium Card — Tab on Right with Smooth S-Curve Fillet */}
          <clipPath id="folder-tab-right" clipPathUnits="objectBoundingBox">
            <path d="M 0, 0.90 Q 0, 1, 0.12, 1 L 0.88, 1 Q 1, 1, 1, 0.90 L 1, 0.10 Q 1, 0, 0.88, 0 L 0.46, 0 C 0.39, 0, 0.35, 0.11, 0.28, 0.11 L 0.12, 0.11 Q 0, 0.11, 0, 0.21 L 0, 0.90 Z" />
          </clipPath>

          {/* Tall Card — Tab on Left with Smooth S-Curve Fillet */}
          <clipPath id="tall-folder-tab-left" clipPathUnits="objectBoundingBox">
            <path d="M 0, 0.05 Q 0, 0, 0.12, 0 L 0.52, 0 C 0.59, 0, 0.63, 0.07, 0.70, 0.07 L 0.88, 0.07 Q 1, 0.07, 1, 0.12 L 1, 0.95 Q 1, 1, 0.88, 1 L 0.12, 1 Q 0, 1, 0, 0.95 L 0, 0.05 Z" />
          </clipPath>

          {/* Tall Card — Tab on Right with Smooth S-Curve Fillet */}
          <clipPath id="tall-folder-tab-right" clipPathUnits="objectBoundingBox">
            <path d="M 0, 0.95 Q 0, 1, 0.12, 1 L 0.88, 1 Q 1, 1, 1, 0.95 L 1, 0.05 Q 1, 0, 0.88, 0 L 0.48, 0 C 0.41, 0, 0.37, 0.07, 0.30, 0.07 L 0.12, 0.07 Q 0, 0.07, 0, 0.12 L 0, 0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="w-full flex flex-col gap-5 sm:gap-7">
        {/* ========================================================= */}
        {/* TOP ROW: CIRCULAR BADGE + GRAND H1 + AVATARS */}
        {/* ========================================================= */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 pt-1">
          {/* Left: Spinning Circular Text Badge with Centered Play Button (Desktop only) */}
          <div className="hidden lg:flex lg:w-44 justify-start items-center shrink-0">
            <div className="relative w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center group cursor-pointer shrink-0">
              <svg
                className="w-full h-full animate-[spin_18s_linear_infinite]"
                viewBox="0 0 100 100"
              >
                <path
                  id="circlePathHeroConcept"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="font-label-caps text-[8.5px] tracking-[0.26em] fill-[#161412] font-semibold uppercase">
                  <textPath href="#circlePathHeroConcept" startOffset="0%">
                    • learn about us through this video •
                  </textPath>
                </text>
              </svg>

              {/* Centered Play Button */}
              <div className="absolute inset-0 m-auto w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#161412] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[16px] translate-x-0.5">
                  play_arrow
                </span>
              </div>
            </div>
          </div>

          {/* Center: Grand Headline with Fluid Responsive Scaling */}
          <div className="flex-1 text-center px-2">
            {/* Mobile Badge indicator */}
            <div className="flex lg:hidden items-center justify-center gap-2 pb-1 text-[#161412]/80 text-[11px] font-label-caps uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#161412]" />
              <span>{HERO_DATA.edition}</span>
            </div>

            <h1 className="font-serif font-semibold text-[clamp(2.35rem,8.5vw,4.5rem)] lg:text-[clamp(3.25rem,7vw,9.5rem)] text-[#161412] tracking-tight leading-[0.98] lg:leading-none transform lg:translate-y-5">
              {HERO_DATA.headlineLine1} <br />
              {HERO_DATA.headlineLine2}
            </h1>
          </div>

          {/* Right: Stacked Avatars + Plus Badge (Desktop only) */}
          <div className="hidden lg:flex lg:w-44 justify-end items-center shrink-0">
            <div className="flex items-center -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Patron Avatar"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#FB228E]"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Patron Avatar"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#FB228E]"
              />
              <div className="w-8 h-8 rounded-full bg-[#161412] text-white flex items-center justify-center text-xs font-semibold ring-2 ring-[#FB228E]">
                <span className="material-symbols-outlined text-[14px]">
                  add
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE / TABLET DISPLAY (< lg BREAKPOINT)                */}
        {/* Clean Curated 3-Card Spread with Button ALWAYS LAST       */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full lg:hidden pt-2">
          {/* Symmetrical 3-Card Gallery: Left File-Tab + Center + Right File-Tab */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 items-end w-full max-w-lg mx-auto">
            {/* Left Card: Emerald Green with Left-Side File Tab */}
            <div className="filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.14)] w-full">
              <div
                className="w-full h-[220px] sm:h-[280px] overflow-hidden bg-[#00A86B] relative cursor-pointer"
                style={{ clipPath: "url(#tall-folder-tab-left)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85"
                  alt="Emerald Green Overcoat Silhouette"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Center Card: Yellow Fedora with Sunburst Motif */}
            <div className="flex flex-col items-center gap-2.5 w-full">
              <div className="flex items-center justify-center text-[#161412]">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#161412] animate-[spin_16s_linear_infinite]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="2.8" fill="currentColor" stroke="none" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
                  <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
                  <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
                  <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
                </svg>
              </div>
              <div className="filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)] w-full">
                <div className="w-full aspect-[4/4.8] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#EAB308] relative cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85"
                    alt="High Fashion Hat Silhouette"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Right Card: Sky Blue Suit with Right-Side File Tab */}
            <div className="filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.14)] w-full">
              <div
                className="w-full h-[220px] sm:h-[280px] overflow-hidden bg-[#38BDF8] relative cursor-pointer"
                style={{ clipPath: "url(#tall-folder-tab-right)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85"
                  alt="Contemporary Tailoring Silhouette"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Mobile CTA Button: ALWAYS LAST below all images */}
          <div className="w-full pt-1 flex justify-center">
            <a
              href="#capsule"
              className="w-full sm:w-auto max-w-sm whitespace-nowrap bg-[#161412] text-white font-label-caps text-xs sm:text-sm py-3.5 px-8 rounded-full inline-flex items-center justify-center gap-2.5 hover:bg-stormy-teal hover:shadow-xl transition-all shadow-md tracking-wider cursor-pointer"
            >
              <span>Explore Collections</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP DISPLAY (>= lg BREAKPOINT) — FULL 5-COLUMN GALLERY */}
        {/* ========================================================= */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-3.5 xl:gap-5 2xl:gap-6 items-end w-full pt-2">
          {/* COLUMN 1: Split Stack (Top File-Tab Card + Bottom Card) */}
          <div className="flex flex-col gap-2.5 sm:gap-3.5 w-full">
            {/* Col 1 Top Card: Left File-Tab Silhouette */}
            <div className="filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-1 w-full">
              <div
                className="w-full aspect-[4/4.8] overflow-hidden bg-[#F97316] relative cursor-pointer"
                style={{ clipPath: "url(#folder-tab-left)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
                  alt="High Fashion Orange Trench Silhouette"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Col 1 Bottom Card: Clean Rounded Card */}
            <div className="filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.10)] transition-transform duration-500 hover:-translate-y-1 w-full">
              <div className="w-full aspect-[16/9.5] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#FBBF24] relative cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85"
                  alt="Tailored Wool Set Detail"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* COLUMN 2: Continuous Tall Card (Left File-Tab Silhouette) */}
          <div className="filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:-translate-y-1 w-full">
            <div
              className="w-full h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[490px] overflow-hidden bg-[#00A86B] relative cursor-pointer"
              style={{ clipPath: "url(#tall-folder-tab-left)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85"
                alt="Emerald Green Overcoat Silhouette"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* COLUMN 3: Central Anchor with Sunburst & Non-Wrapping Docked Button */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-end gap-3 sm:gap-3.5 w-full">
            {/* Sunburst Monogram Icon above card - Scaled & Crisp SVG */}
            <div className="flex items-center justify-center text-[#161412] pb-0.5">
              <svg
                className="w-8 h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-[#161412] animate-[spin_16s_linear_infinite]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="2.8" fill="currentColor" stroke="none" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
                <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
                <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
                <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
              </svg>
            </div>

            {/* Central Card: Symmetrical Rounded Rectangle */}
            <div className="filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-1 w-full">
              <div className="w-full aspect-[4/4.5] sm:aspect-[3.6/3.8] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#EAB308] relative cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85"
                  alt="High Fashion Hat Silhouette"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Docked Black Capsule CTA Button with NON-WRAPPING Text */}
            <a
              href="#capsule"
              className="w-full whitespace-nowrap shrink-0 bg-[#161412] text-white font-label-caps text-xs sm:text-[13px] py-3.5 px-4 rounded-full inline-flex items-center justify-center gap-2 hover:bg-stormy-teal hover:shadow-xl transition-all duration-300 shadow-md group cursor-pointer tracking-wider"
            >
              <span className="whitespace-nowrap">Explore Collections</span>
              <span className="material-symbols-outlined text-[15px] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                north_east
              </span>
            </a>
          </div>

          {/* COLUMN 4: Continuous Tall Card (Right File-Tab Silhouette) */}
          <div className="filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:-translate-y-1 w-full">
            <div
              className="w-full h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[490px] overflow-hidden bg-[#38BDF8] relative cursor-pointer"
              style={{ clipPath: "url(#tall-folder-tab-right)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85"
                alt="Contemporary Tailoring Silhouette"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* COLUMN 5: Split Stack (Top File-Tab Card + Bottom Card) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col gap-2.5 sm:gap-3.5 w-full">
            {/* Col 5 Top Card: Right File-Tab Silhouette */}
            <div className="filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-1 w-full">
              <div
                className="w-full aspect-[4/4.8] overflow-hidden bg-[#86EFAC] relative cursor-pointer"
                style={{ clipPath: "url(#folder-tab-right)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85"
                  alt="Editorial Portrait with Red Eyewear"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Col 5 Bottom Card: Clean Rounded Card */}
            <div className="filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.10)] transition-transform duration-500 hover:-translate-y-1 w-full">
              <div className="w-full aspect-[16/9.5] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#0B6E69] relative cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85"
                  alt="Deep Emerald Suit Silhouette"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
