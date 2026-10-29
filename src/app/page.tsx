"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import BespokeStackCard from "@/components/BespokeStackCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TailorCtaCard from "@/components/TailorCtaCard";
import HeroConceptGallery from "@/components/HeroConceptGallery";
import {
  HERO_DATA,
  CREDO_DATA,
  CAPSULE_PRODUCTS,
  BESPOKE_PHASES,
  TEXTILE_ARCHIVE,
  CLIENT_REVIEWS,
} from "@/data/mockData";

export default function EditorialHomepage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activePhase, setActivePhase] = useState<string>("01");

  const filteredProducts =
    selectedFilter === "all"
      ? CAPSULE_PRODUCTS
      : CAPSULE_PRODUCTS.filter((item) => item.category === selectedFilter);

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md selection:bg-primary selection:text-on-primary">
      <main className="w-full pt-20">
        {/* ========================================================= */}
        {/* SECTION 1: MAIN HERO — HIGH-FASHION GALLERY             */}
        {/* ========================================================= */}
        <HeroConceptGallery />

        {/* ========================================================= */}
        {/* SECTION 2: BRAND MANIFESTO & SPECIFICATION ROW (FULL WIDTH) */}
        {/* ========================================================= */}
        <section
          className="w-full bg-stormy-teal py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-y border-black/10"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center">
              <span className="font-label-caps text-xs tracking-[0.25em] text-white/80 uppercase">
                {CREDO_DATA.label}
              </span>
            </div>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-white leading-[1.3] font-normal italic">
              {CREDO_DATA.quote}
            </blockquote>
            <div className="w-12 h-0.5 bg-white/30 mx-auto" />
          </div>

          {/* Stepped Triad Floating Cards (Centerpiece Flex Composition with Expanded Width) */}
          <div className="w-full mt-16 sm:mt-20 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-14 items-center max-w-[96rem] mx-auto">
            {CREDO_DATA.pillars.map((pillar) => {
              const isCenter = pillar.isHero;
              return (
                <div
                  key={pillar.num}
                  className={`w-full transition-all duration-500 flex justify-center ${
                    isCenter
                      ? "md:scale-[1.06] lg:scale-[1.08] z-20"
                      : pillar.num === "01"
                        ? "md:scale-[0.93] lg:scale-[0.92] md:origin-right z-10"
                        : "md:scale-[0.93] lg:scale-[0.92] md:origin-left z-10"
                  }`}
                >
                  {/* Outer Floating Tray Container with Smooth 28px/34px Radius */}
                  <div
                    className={`w-full max-w-lg md:max-w-none rounded-[28px] sm:rounded-[34px] flex flex-col gap-3.5 transition-all duration-300 ${
                      isCenter
                        ? "p-5 sm:p-6 lg:p-7 bg-[#161412] shadow-[0_28px_65px_-15px_rgba(0,0,0,0.6)] border border-white/15 ring-1 ring-white/10"
                        : "p-4 sm:p-5 lg:p-6 bg-[#161412]/95 shadow-[0_12px_32px_-10px_rgba(0,0,0,0.45)] border border-white/10 hover:shadow-2xl"
                    }`}
                  >
                    {/* Outer Header Bar: Plus Action on the RHS */}
                    <div className="flex items-center justify-end px-2 pt-1 pb-1">
                      <button
                        type="button"
                        aria-label="Add item"
                        className="text-white/60 hover:text-white transition-colors cursor-pointer p-0.5"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          add
                        </span>
                      </button>
                    </div>

                    {/* Inner Card */}
                    <div
                      className={`rounded-[22px] bg-[#1E1C1A] border border-white/10 shadow-inner flex flex-col justify-center group transition-all duration-300 ${
                        isCenter
                          ? "p-7 sm:p-9 min-h-[250px] sm:min-h-[280px] lg:min-h-[300px] space-y-4"
                          : "p-6 sm:p-8 min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] space-y-3"
                      }`}
                    >
                      <h3
                        className={`font-serif font-semibold text-white group-hover:text-white/80 transition-colors leading-snug ${
                          isCenter
                            ? "text-xl sm:text-2xl lg:text-3xl"
                            : "text-lg sm:text-xl"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className={`font-sans text-white/75 leading-relaxed ${
                          isCenter
                            ? "text-sm sm:text-base font-normal max-w-sm"
                            : "text-xs sm:text-sm font-light"
                        }`}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: READY-TO-WEAR CAPSULE SHOWCASE (FULL WIDTH) */}
        {/* ========================================================= */}
        <section
          id="capsule"
          className="w-full bg-surface-container px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-16 sm:py-24 border-t border-outline-variant/20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-label-caps text-xs tracking-[0.2em] text-on-surface-variant mb-2">
                Curated Releases
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-on-surface">
                The Permanent Capsule
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {[
                { id: "all", label: "All Releases" },
                { id: "silks", label: "Dresses & Silks" },
                { id: "tailoring", label: "Tailored Sets" },
                { id: "outerwear", label: "Outerwear" },
              ].map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id)}
                    className={`font-label-caps text-xs px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-stormy-teal text-white shadow-xs"
                        : "bg-surface-bright/90 text-on-surface-variant hover:text-on-surface hover:bg-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full-Width Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10 w-full"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col space-y-4"
                >
                  {/* Image Viewport with Left-to-Right Hover Wipe & Scale Transition */}
                  <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-surface-container cursor-pointer shadow-xs border border-outline-variant/20">
                    {/* Base Garment Photograph */}
                    <img
                      src={product.image}
                      alt={product.altText}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Barbie Pink Atelier Reveal Card (Wipes from Left to Right on Hover) */}
                    <div
                      className="absolute inset-0 w-full h-full [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none bg-barbie-pink overflow-hidden"
                      style={{ backgroundColor: "var(--color-barbie-pink)" }}
                    >
                      {/* Inner Content Contracting from Scale 1.3 to Scale 0.9 */}
                      <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between scale-[1.30] group-hover:scale-[0.90] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center text-white">
                        {/* Top Header Spec Tag */}
                        <div className="flex items-center justify-between border-b border-white/20 pb-3">
                          <span className="font-label-caps text-[9px] tracking-[0.25em] text-white/90 uppercase">
                            Silhouette View
                          </span>
                          <span className="font-mono text-[10px] text-white/75 uppercase">
                            {product.category}
                          </span>
                        </div>

                        {/* Center Monograph Specimen Typography */}
                        <div className="text-center space-y-2 my-auto py-4">
                          <span className="font-serif italic text-sm text-white/80 block">
                            Atelier Specimen
                          </span>
                          <h4 className="font-serif text-2xl sm:text-3xl text-white leading-tight font-medium">
                            {product.title}
                          </h4>
                          <p className="font-sans text-xs text-white/85 max-w-[220px] mx-auto leading-relaxed pt-1">
                            {product.material}
                          </p>
                        </div>

                        {/* Bottom Metric Line */}
                        <div className="pt-3 border-t border-white/20 flex items-center justify-between text-[10px] font-label-caps tracking-widest text-white/90">
                          <span>{product.price}</span>
                          <span className="text-white/70">
                            {product.fitNote}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Top Badges (z-20 to stay clearly readable) */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                      <span className="bg-surface-bright/90 backdrop-blur-sm text-on-surface font-label-caps text-[10px] px-3 py-1 rounded-full shadow-xs border border-surface-bright/50">
                        {product.badge}
                      </span>
                    </div>

                    {/* Hover Overlay / Slide-up Actions (z-20 with full pointer events) */}
                    <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 z-20">
                      <button
                        type="button"
                        className="flex-1 bg-stormy-teal text-white font-label-caps text-xs py-3 rounded-full hover:brightness-110 transition-all text-center shadow-lg cursor-pointer tracking-wider"
                      >
                        Quick View · Select Size
                      </button>
                      <button
                        type="button"
                        aria-label="Save to Wishlist"
                        className="w-11 h-11 bg-stormy-teal text-white hover:brightness-110 rounded-full flex items-center justify-center shadow-lg transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          bookmark_border
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-xl sm:text-2xl text-on-surface">
                        {product.title}
                      </h3>
                      <span className="font-label-caps text-xs text-on-surface font-semibold">
                        {product.price}
                      </span>
                    </div>
                    <p className="font-body-sm text-sm text-on-surface-variant flex items-center justify-between">
                      <span>{product.material}</span>
                      <span className="text-xs font-label-sm text-outline">
                        {product.fitNote}
                      </span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: THE BESPOKE ATELIER (FULL WIDTH SPLIT) */}
        {/* ========================================================= */}
        <section
          id="bespoke"
          className="w-full bg-barbie-pink py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-t border-black/10"
          style={{ backgroundColor: "var(--color-barbie-pink)" }}
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            {/* Sticky Left Narrative Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
              <div className="space-y-3">
                <p className="font-label-caps text-xs tracking-[0.2em] text-[#161412]/80">
                  The Bespoke Experience
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#161412] leading-tight">
                  From First Toile to Final Hem.
                </h2>
                <p className="font-body-md text-[#161412]/85 leading-relaxed">
                  A bespoke garment is an architectural collaboration. Over six
                  to ten weeks, your garment is drafted, basted, and
                  hand-finished directly onto a duplicate replica of your body
                  form.
                </p>
              </div>

              {/* Sequential Phase Navigation Indicators */}
              <div className="space-y-6 pt-4">
                {BESPOKE_PHASES.map((phase) => (
                  <div
                    key={phase.phaseNumber}
                    onClick={() => setActivePhase(phase.phaseNumber)}
                    className="flex items-start gap-4 cursor-pointer group"
                  >
                    <div
                      className={`w-8 h-8 rounded-full font-label-caps flex items-center justify-center shrink-0 text-xs transition-colors ${
                        activePhase === phase.phaseNumber
                          ? "bg-stormy-teal text-white shadow-xs"
                          : "bg-[#161412] text-white border border-white/10 shadow-xs group-hover:bg-stormy-teal group-hover:text-white"
                      }`}
                    >
                      {phase.phaseNumber}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg sm:text-xl text-[#161412]">
                        {phase.title}
                      </h4>
                      <p className="font-body-sm text-xs text-[#161412]/75 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#booking"
                  className="bg-stormy-teal text-white font-label-caps text-xs rounded-full px-8 py-4 inline-flex items-center gap-3 hover:brightness-110 transition-all shadow-md tracking-wider"
                >
                  <span>Schedule Discovery Call</span>
                  <span className="material-symbols-outlined text-[16px]">
                    calendar_today
                  </span>
                </a>
              </div>
            </div>

            {/* Right Visual Journey Cards — Scroll-Driven Stacking Card Deck */}
            <div className="lg:col-span-7 flex flex-col mt-8 lg:mt-0 relative pb-12">
              {BESPOKE_PHASES.map((phase, idx) => (
                <BespokeStackCard
                  key={phase.phaseNumber}
                  phase={phase}
                  index={idx}
                  total={BESPOKE_PHASES.length}
                  onActive={setActivePhase}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: THE TEXTILE ARCHIVE (FULL WIDTH SWATCHES) */}
        {/* ========================================================= */}
        <section
          id="textiles"
          className="w-full bg-stormy-teal px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-16 sm:py-24 border-t border-black/10"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="max-w-4xl mb-12">
            <p className="font-label-caps text-xs tracking-[0.2em] text-white/80 mb-2">
              Heritage Materiality
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-white">
              The Textile Archive
            </h2>
            <p className="font-body-md text-white/85 mt-3 leading-relaxed">
              Every yard is sustainably sourced from generational family-run
              mills in Como, Biella, and Kyoto. We select exclusively
              biodegradable fibers that soften and conform over decades of wear.
            </p>
          </div>

          {/* Full-Width 4-Card Swatch Layout — Single Line on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full">
            {TEXTILE_ARCHIVE.map((swatch) => (
              <div
                key={swatch.id}
                className="group flex flex-col space-y-4 cursor-pointer"
              >
                {/* Viewport with Left-to-Right Hover Wipe & Scale Transition */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-black/20 shadow-xs border border-white/10">
                  {/* Base Fabric Photograph */}
                  <img
                    src={swatch.image}
                    alt={swatch.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Barbie Pink Atelier Reveal Card (Wipes from Left to Right on Hover) */}
                  <div
                    className="absolute inset-0 w-full h-full [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none bg-barbie-pink overflow-hidden"
                    style={{ backgroundColor: "var(--color-barbie-pink)" }}
                  >
                    {/* Inner Content Contracting from Scale 1.3 to Scale 0.9 */}
                    <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between scale-[1.30] group-hover:scale-[0.90] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center text-white">
                      {/* Top Header Spec Tag */}
                      <div className="flex items-center justify-between border-b border-white/20 pb-3">
                        <span className="font-label-caps text-[9px] tracking-[0.25em] text-white/90 uppercase">
                          Archive Specimen
                        </span>
                        <span className="font-mono text-[10px] text-white/80 uppercase">
                          {swatch.gsm}
                        </span>
                      </div>

                      {/* Center Textile Monograph Specimen Typography */}
                      <div className="text-center space-y-2 my-auto py-3">
                        <span className="font-serif italic text-xs text-white/80 block">
                          Mill Provenance
                        </span>
                        <h4 className="font-serif text-2xl sm:text-3xl text-white leading-tight font-medium">
                          {swatch.name}
                        </h4>
                        <p className="font-sans text-xs text-white/85 max-w-[210px] mx-auto leading-relaxed pt-1">
                          {swatch.origin}
                        </p>
                        <p className="font-serif italic text-[11px] text-white/75 pt-1">
                          “{swatch.drape}”
                        </p>
                      </div>

                      {/* Bottom Metric Line */}
                      <div className="pt-3 border-t border-white/20 flex items-center justify-between text-[10px] font-label-caps tracking-widest text-white/90">
                        <span>{swatch.lusterOrFinish.label}</span>
                        <span className="text-white/80">
                          {swatch.lusterOrFinish.value}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Top Badges (z-20) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                    <span className="bg-surface-bright/90 backdrop-blur-sm text-on-surface font-label-caps text-[10px] px-3 py-1 rounded-full shadow-xs border border-surface-bright/50">
                      {swatch.origin.split(" · ")[0]}
                    </span>
                    <span className="bg-surface-bright/90 backdrop-blur-sm text-on-surface font-mono text-[10px] px-2.5 py-1 rounded-full shadow-xs border border-surface-bright/50">
                      {swatch.gsm}
                    </span>
                  </div>

                  {/* Hover Overlay Action (Slide Up on Hover, z-20) */}
                  <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 z-20">
                    <button
                      type="button"
                      className="w-full bg-stormy-teal text-white font-label-caps text-xs py-3 rounded-full hover:brightness-110 transition-all text-center shadow-md cursor-pointer tracking-wider"
                    >
                      Request Swatch Sample
                    </button>
                  </div>
                </div>

                {/* Editorial Swatch Metadata Below Viewport */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-lg sm:text-xl text-white group-hover:text-white/80 transition-colors">
                      {swatch.name}
                    </h3>
                    <span className="font-mono text-xs text-white/70 font-medium">
                      {swatch.gsm}
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-white/75 flex items-center justify-between">
                    <span>{swatch.origin}</span>
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs font-label-sm text-white/60 border-t border-white/15">
                    <span>
                      Drape:{" "}
                      <strong className="text-white font-normal">
                        {swatch.drape}
                      </strong>
                    </span>
                    <span>
                      {swatch.lusterOrFinish.label}:{" "}
                      <strong className="text-white font-normal">
                        {swatch.lusterOrFinish.value}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: CLIENT SILHOUETTES (CONNECTED WING CAROUSEL) */}
        {/* ========================================================= */}
        <section className="w-full bg-surface-container-high py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-t border-outline-variant/20 overflow-hidden">
          <div className="w-full space-y-12">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
              <p className="font-label-caps text-xs tracking-[0.25em] text-on-surface-variant uppercase">
                Commissions In Life
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-on-surface">
                Client Silhouettes
              </h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Each commission represents a shared memory. Here is how our
                patrons describe wearing Nerissa creations.
              </p>
            </div>

            {/* Reference-Matched Connected Capsule Carousel */}
            <TestimonialCarousel reviews={CLIENT_REVIEWS} />

            {/* Bespoke Tailor Shears CTA Card */}
            <TailorCtaCard />
          </div>
        </section>
      </main>
    </div>
  );
}
