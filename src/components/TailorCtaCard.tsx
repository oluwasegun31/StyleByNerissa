"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function TailorCtaCard() {
  return (
    <div
      id="booking"
      className="relative w-full rounded-none text-[#f4ead5] p-8 sm:p-12 lg:p-14 xl:p-16 overflow-hidden shadow-2xl border border-[#1e3b2f]/20 bg-[#1e3b2f]"
    >
      {/* ========================================================= */}
      {/* 1. HERO TAILOR SHEARS PHOTOGRAPH AS CARD BACKGROUND */}
      {/* ========================================================= */}
      <img
        src="/images/tailor-shears.jpg"
        alt="Bespoke Tailor Shears Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Full Base Dark Ambient Tint */}
      <div className="absolute inset-0 bg-[#1e3b2f]/50 pointer-events-none" />

      {/* Left-to-Right Forest Green Gradient Scrim to Ensure Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3b2f] via-[#1e3b2f]/95 via-55% to-[#1e3b2f]/35 pointer-events-none" />

      {/* ========================================================= */}
      {/* 2. CARD CONTENT GRID */}
      {/* ========================================================= */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Headline, Narrative, & Hot Pink Pill CTA */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-[#f4ead5] font-normal leading-[1.16] tracking-tight max-w-xl">
            Ready to Sculpt Your Bespoke Silhouette?
          </h3>

          <p className="font-sans text-sm sm:text-base text-[#f4ead5]/80 leading-relaxed max-w-lg font-light">
            Experience the pinnacle of haute couture tailoring. With 34
            anatomical posture measurements and hand-basted calico toiles, we
            craft garments that honor presence and quiet individuality.
          </p>

          <div className="pt-2">
            <a
              href="#booking"
              className="bg-[#ff3ea5] text-white font-label-caps text-xs sm:text-sm font-semibold rounded-full px-8 py-4 inline-flex items-center gap-3 hover:bg-[#e02b8d] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-[#ff3ea5]/30 cursor-pointer tracking-wider"
            >
              <span>Schedule a Fitting</span>
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={1.7} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
