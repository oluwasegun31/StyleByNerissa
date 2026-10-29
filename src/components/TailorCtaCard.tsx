"use client";

import React from "react";

export default function TailorCtaCard() {
  return (
    <div
      id="booking"
      className="relative w-full rounded-[32px] sm:rounded-[40px] text-white p-8 sm:p-12 lg:p-14 xl:p-16 overflow-hidden shadow-2xl border border-white/10 bg-[#161412]"
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
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Left-to-Right Dark Gradient Scrim to Ensure Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#141210] via-[#141210]/90 via-50% to-[#141210]/30 pointer-events-none" />

      {/* ========================================================= */}
      {/* 2. CARD CONTENT GRID */}
      {/* ========================================================= */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Headline, Narrative, & White Pill CTA */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-white font-normal leading-[1.16] tracking-tight max-w-xl">
            Ready to Sculpt Your Bespoke Silhouette?
          </h3>

          <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed max-w-lg font-light">
            Experience the pinnacle of haute couture tailoring. With 34
            anatomical posture measurements and hand-basted calico toiles, we
            craft garments that honor presence and quiet individuality.
          </p>

          <div className="pt-2">
            <a
              href="#booking"
              className="bg-white text-[#161412] font-label-caps text-xs sm:text-sm font-semibold rounded-full px-8 py-4 inline-flex items-center gap-3 hover:bg-stone-100 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer tracking-wider"
            >
              <span>Schedule a Fitting</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
