"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import TailorCtaCard from "@/components/TailorCtaCard";
import { LOOKBOOK_DATA, LookbookItem } from "@/data/mockData";

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "rtw" | "bespoke"
  >("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("UK 8 / US 4");

  // Filter and sort items dynamically
  const filteredItems = useMemo(() => {
    let items = [...LOOKBOOK_DATA];

    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory);
    }

    if (sortBy === "price-high") {
      items.sort((a, b) => b.rawPrice - a.rawPrice);
    } else if (sortBy === "price-low") {
      items.sort((a, b) => a.rawPrice - b.rawPrice);
    }

    return items;
  }, [activeCategory, sortBy]);

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md selection:bg-primary selection:text-on-primary">
      <main className="w-full pt-20">
        {/* ========================================================= */}
        {/* SECTION 1: PAGE MASTHEAD & COLLECTION OVERVIEW (FULL VIEWPORT) */}
        {/* ========================================================= */}
        <section
          className="w-full min-h-[calc(100vh-5rem)] bg-barbie-pink px-4 sm:px-8 lg:px-14 xl:px-16 2xl:px-20 py-8 sm:py-12 flex flex-col justify-between items-center text-center border-b border-black/15 overflow-hidden"
          style={{ backgroundColor: "var(--color-barbie-pink)" }}
        >
          {/* Center Column: Sunburst Motif + Grand H1 + Subtitle + Micro Strip */}
          <div className="w-full flex flex-col items-center justify-center my-auto py-6 sm:py-8">
            {/* Scaled Rotating Sunburst Motif Icon */}
            <div className="flex items-center justify-center text-[#161412] mb-3 sm:mb-4">
              <svg
                className="w-8 h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-[#161412] animate-[spin_16s_linear_infinite]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="2.8"
                  fill="currentColor"
                  stroke="none"
                />
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

            {/* Grand Serif Display Headline matching Homepage Hero */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-semibold text-[clamp(2.35rem,8.5vw,4.5rem)] lg:text-[clamp(3.25rem,7vw,9.5rem)] text-[#161412] tracking-tight leading-[0.98] lg:leading-none mb-5 w-full"
            >
              The Atelier &amp; Collections
            </motion.h1>

            {/* Editorial Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-base sm:text-lg md:text-xl text-[#161412]/85 max-w-3xl mx-auto mb-7 font-light leading-relaxed"
            >
              A continuous study of drape, form, and texture. Explore
              limited-run seasonal pieces ready for immediate delivery, or
              browse our archival bespoke commissions tailored for private
              clients.
            </motion.p>

            {/* Micro Status Strip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-2.5 rounded-full bg-black/10 border border-black/15 shadow-none"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#161412]" />
                <span className="font-label-caps text-xs uppercase tracking-wider text-[#161412]">
                  Showing {filteredItems.length} Archival &amp; Current
                  Silhouettes
                </span>
              </div>
              <span className="text-[#161412]/30 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span className="font-label-caps text-xs uppercase tracking-wider text-[#161412]/80">
                  Bespoke Queue: 4–6 Weeks Turnaround
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: TEAL FILTER & SORT BAR (NON-STICKY)            */}
        {/* ========================================================= */}
        <section
          className="w-full bg-stormy-teal border-b border-black/15 transition-all duration-300"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left Segmented Buttons */}
            <div className="flex items-center p-1 rounded-full bg-black/25 gap-1 w-full sm:w-auto overflow-x-auto justify-start border border-white/10">
              {[
                { id: "all", label: "All Creations" },
                { id: "rtw", label: "Ready-to-Wear (Immediate)" },
                { id: "bespoke", label: "Bespoke Archive (Commission)" },
              ].map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as any)}
                    className={`px-4 sm:px-5 py-2 rounded-full font-label-caps text-xs uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-white text-[#161412] shadow-xs font-semibold"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Right Sorter Dropdown & Result Count */}
            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
              <div className="relative">
                <select
                  aria-label="Sort Collections"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-black/25 pl-4 pr-9 py-2 rounded-full font-label-caps text-xs uppercase text-white cursor-pointer focus:outline-none focus:bg-black/35 transition-colors border border-white/10"
                >
                  <option value="featured" className="bg-[#161412] text-white">
                    Sort: Featured
                  </option>
                  <option
                    value="price-high"
                    className="bg-[#161412] text-white"
                  >
                    Price: High to Low
                  </option>
                  <option value="price-low" className="bg-[#161412] text-white">
                    Price: Low to High
                  </option>
                </select>
                <span className="material-symbols-outlined text-[16px] absolute right-3 top-2.5 pointer-events-none text-white/70">
                  expand_more
                </span>
              </div>

              <span className="font-label-caps text-xs uppercase text-white/75 hidden sm:inline">
                {filteredItems.length}{" "}
                {filteredItems.length === 1 ? "Result" : "Results"}
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: EDITORIAL GARMENTS (ALL 6 CARDS IN ONE GRID)   */}
        {/* ========================================================= */}
        <section
          className="w-full bg-stormy-teal px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-12 sm:py-20 border-b border-black/15"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredItems.map((item) => (
              <GarmentCard
                key={item.id}
                item={item}
                onOpen={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: BESPOKE TAILOR SHEARS CTA CARD                */}
        {/* ========================================================= */}
        <section className="w-full bg-surface-container-high py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-t border-outline-variant/20 overflow-hidden">
          <div className="w-full">
            <TailorCtaCard />
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* SLIDE-OUT QUICK-VIEW DRAWER / MODAL                       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Backdrop Veil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-surface shadow-2xl overflow-y-auto border-l border-outline-variant/30 flex flex-col justify-between"
            >
              <div className="p-6 md:p-8 space-y-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-label-caps text-xs uppercase text-on-surface-variant tracking-widest">
                      Atelier Quick View
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label="Close Drawer"
                    onClick={() => setSelectedItem(null)}
                    className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      close
                    </span>
                  </button>
                </div>

                {/* Dual Previews: Main Look Photograph + Tactile Silk Weave Detail */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container relative border border-outline-variant/20">
                    <img
                      src={selectedItem.swatchImage}
                      alt="Tactile Silk Texture"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 bg-surface/90 backdrop-blur-sm rounded text-center border border-outline-variant/20">
                      <span className="font-label-caps text-[9px] uppercase tracking-wider text-on-surface font-semibold">
                        Tactile Silk Weave
                      </span>
                    </div>
                  </div>
                </div>

                {/* Garment Spec */}
                <div className="space-y-2 pt-2">
                  <p className="font-label-caps text-xs uppercase text-secondary tracking-widest font-medium">
                    {selectedItem.editionNote}
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-on-surface font-normal">
                    {selectedItem.title}
                  </h2>
                  <p className="font-serif text-lg sm:text-xl text-on-surface font-light">
                    {selectedItem.price} · {selectedItem.statusTag}
                  </p>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed pt-1">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Sizing Selection */}
                <div className="space-y-3 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-xs uppercase tracking-wider text-on-surface font-semibold">
                      Select Atelier Size
                    </span>
                    <button
                      type="button"
                      className="font-label-sm text-xs text-secondary hover:underline cursor-pointer"
                    >
                      Sizing Guide &amp; Posture Fit
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "UK 6 / US 2",
                      "UK 8 / US 4",
                      "UK 10 / US 6",
                      "UK 12 / US 8",
                      "Custom Measure",
                    ].map((size) => {
                      const isSizeActive = selectedSize === size;
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-full font-label-caps text-xs uppercase tracking-wider transition-all cursor-pointer ${
                            isSizeActive
                              ? "bg-primary text-on-primary shadow-xs"
                              : "bg-surface-container text-on-surface hover:bg-surface-container-high border border-outline-variant/20"
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Expandable Couture Accordions */}
                <div className="space-y-2 border-t border-outline-variant/30 pt-4">
                  <details className="group cursor-pointer">
                    <summary className="flex justify-between items-center font-label-caps text-xs uppercase tracking-wider text-on-surface list-none py-2.5">
                      <span>Fabric &amp; Tactile Draping</span>
                      <span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <p className="font-body-sm text-xs text-on-surface-variant pt-1 pb-2 leading-relaxed">
                      {selectedItem.fabricDetails}
                    </p>
                  </details>

                  <details className="group cursor-pointer border-t border-outline-variant/20">
                    <summary className="flex justify-between items-center font-label-caps text-xs uppercase tracking-wider text-on-surface list-none py-2.5">
                      <span>Atelier Construction &amp; Seams</span>
                      <span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <p className="font-body-sm text-xs text-on-surface-variant pt-1 pb-2 leading-relaxed">
                      {selectedItem.constructionDetails}
                    </p>
                  </details>

                  <details className="group cursor-pointer border-t border-outline-variant/20">
                    <summary className="flex justify-between items-center font-label-caps text-xs uppercase tracking-wider text-on-surface list-none py-2.5">
                      <span>Care &amp; Archival Storage</span>
                      <span className="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <p className="font-body-sm text-xs text-on-surface-variant pt-1 pb-2 leading-relaxed">
                      {selectedItem.careDetails}
                    </p>
                  </details>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 md:p-8 pt-4 border-t border-outline-variant/30 bg-surface flex flex-col gap-3">
                <button
                  type="button"
                  className="w-full py-4 rounded-full bg-primary text-on-primary font-label-caps text-xs uppercase tracking-wider hover:bg-stormy-teal transition-colors shadow-sm cursor-pointer"
                >
                  Add to Wardrobe Bag
                </button>
                <a
                  href="#booking"
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-3.5 rounded-full bg-surface-container text-on-surface font-label-caps text-xs uppercase tracking-wider hover:bg-surface-container-high transition-colors text-center border border-outline-variant/20 cursor-pointer"
                >
                  Book Virtual Fitting Session
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// =========================================================================
// SUB-COMPONENT: EDITORIAL GARMENT CARD
// =========================================================================

interface GarmentCardProps {
  item: LookbookItem;
  onOpen: () => void;
}

function GarmentCard({ item, onOpen }: GarmentCardProps) {
  const isBespoke = item.category === "bespoke";

  return (
    <article onClick={onOpen} className="group flex flex-col cursor-pointer">
      {/* Image Viewport with Hover Zoom & Barbie Pink Wipe Reveal */}
      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black/20 cursor-pointer shadow-md border border-white/15">
        {/* Base Garment Photograph */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Barbie Pink Atelier Reveal Card (Wipes from Left to Right on Hover) */}
        <div
          className="absolute inset-0 w-full h-full [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none bg-barbie-pink overflow-hidden"
          style={{ backgroundColor: "var(--color-barbie-pink)" }}
        >
          {/* Inner Content Contracting from Scale 1.3 to Scale 0.9 */}
          <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between scale-[1.30] group-hover:scale-[0.90] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center text-[#161412]">
            {/* Top Header Spec Tag */}
            <div className="flex items-center justify-between border-b border-black/20 pb-3">
              <span className="font-label-caps text-[9px] tracking-[0.25em] text-[#161412]/90 uppercase">
                {isBespoke ? "Bespoke Archive" : "Ready-to-Wear"}
              </span>
              <span className="font-mono text-[10px] text-[#161412]/75 uppercase">
                {item.lookNumber}
              </span>
            </div>

            {/* Center Monograph Specimen Typography */}
            <div className="text-center space-y-2 my-auto py-4">
              <span className="font-serif italic text-sm text-[#161412]/80 block">
                Atelier Specimen
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#161412] leading-tight font-medium">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-[#161412]/85 max-w-[220px] mx-auto leading-relaxed pt-1 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Bottom Metric Line */}
            <div className="pt-3 border-t border-black/20 flex items-center justify-between text-[10px] font-label-caps tracking-widest text-[#161412]/90">
              <span>{item.price}</span>
              <span className="text-[#161412]/70 font-sans truncate max-w-[140px]">
                {item.badge}
              </span>
            </div>
          </div>
        </div>

        {/* Top Badges (z-20 to stay clearly readable above wipe) */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="backdrop-blur-md bg-white/95 text-[#161412] font-label-caps text-[10px] uppercase font-semibold px-3 py-1 rounded-full shadow-xs border border-white/60">
            {item.badge}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="font-label-caps text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs backdrop-blur-md bg-black/40 text-white border border-white/20">
            {item.typeTag}
          </span>
        </div>

        {/* Bottom Slide-up Action Trigger (z-20) */}
        <div className="absolute inset-x-4 bottom-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <div
            className={`w-full py-3 font-label-caps text-xs uppercase text-center rounded-xl shadow-lg transition-colors cursor-pointer ${
              isBespoke
                ? "bg-white text-[#161412] hover:bg-stone-100 font-semibold"
                : "bg-[#161412] text-white hover:bg-black font-semibold"
            }`}
          >
            {isBespoke
              ? "Inquire This Silhouette →"
              : "Quick View / Select Size"}
          </div>
        </div>
      </div>

      {/* Editorial Metadata Below Card (Light Colors on Stormy Teal) */}
      <div className="mt-4 flex flex-col space-y-1">
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="font-serif text-lg sm:text-xl text-white group-hover:text-white/80 transition-colors">
            {item.title}
          </h2>
          <span className="font-label-caps text-xs uppercase font-semibold whitespace-nowrap text-white">
            {item.price}
          </span>
        </div>

        <div className="flex items-center justify-between text-white/70 font-body-sm text-xs mt-1">
          <span>{item.provenance}</span>
          <span className="font-label-caps text-[10px] uppercase text-white/80 font-medium">
            {item.statusTag}
          </span>
        </div>
      </div>
    </article>
  );
}
