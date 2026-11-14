"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import TailorCtaCard from "@/components/TailorCtaCard";
import AnalogGrainBackground from "@/components/AnalogGrainBackground";
import CapsuleTicketCard from "@/components/CapsuleTicketCard";
import { LOOKBOOK_DATA, LookbookItem } from "@/data/mockData";

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "rtw" | "bespoke"
  >("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);

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
    <div className="bg-[#f4ead5] text-[#1e3b2f] min-h-screen flex flex-col font-body-md selection:bg-[#ff3ea5] selection:text-white">
      <main className="w-full">
        {/* ========================================================= */}
        {/* SECTION 1: COLLECTION MASTHEAD */}
        {/* ========================================================= */}
        <section
          className="relative w-full lg:min-h-[66vh] bg-[#f4ead5] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pt-32 sm:pt-40 pb-14 sm:pb-20 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "var(--color-butter-cream)" }}
        >
          <AnalogGrainBackground variant="cream" id="grain-collections-hero" />

          {/* Quiet fabric joins at the edges of the masthead. */}
          <svg
            className="absolute inset-0 z-[1] h-full w-full pointer-events-none select-none"
            viewBox="0 0 1440 760"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            aria-hidden="true"
          >
            <path d="M-36 88 214 42 Q240 38 250 63 L277 228 Q279 249 253 254 L-36 288Z" fill="#fffaf0" fillOpacity="0.28" stroke="#1e3b2f" strokeOpacity="0.1" />
            <path d="M-18 105 211 61 Q227 59 233 76 L258 224 Q260 235 247 238 L-18 270" stroke="#1e3b2f" strokeOpacity="0.22" strokeWidth="1.4" strokeDasharray="8 8" />
            <path d="M1010-34 1439-34 1439 212 1182 196 Q1160 194 1152 173 L1097 40 Q1085 14 1010-34Z" fill="#e8ddc8" fillOpacity="0.3" stroke="#1e3b2f" strokeOpacity="0.1" />
            <path d="M1043-18 1120 48 1170 174 Q1175 181 1188 182 L1423 197" stroke="#1e3b2f" strokeOpacity="0.2" strokeWidth="1.4" strokeDasharray="9 8" />
            <path d="M-32 572 258 525 Q282 524 288 546 L315 766-32 766Z" fill="#fffaf0" fillOpacity="0.22" stroke="#1e3b2f" strokeOpacity="0.09" />
            <path d="M-14 589 256 542 Q270 540 273 555 L296 748" stroke="#1e3b2f" strokeOpacity="0.18" strokeWidth="1.4" strokeDasharray="8 9" />
            <path d="M1231 476 Q1241 460 1263 462 L1472 501 1472 785 1134 785 1168 559 Q1173 531 1195 515Z" fill="#e8ddc8" fillOpacity="0.25" stroke="#1e3b2f" strokeOpacity="0.09" />
            <path d="M1246 492 Q1253 479 1268 481 L1450 514 M1192 545 Q1184 551 1182 566 L1154 751" stroke="#1e3b2f" strokeOpacity="0.2" strokeWidth="1.4" strokeDasharray="8 8" />
            <g stroke="#d42684" strokeOpacity="0.22" strokeWidth="1.2" strokeLinecap="round">
              <path d="M228 70l9 9m0-9-9 9M1171 173l9 9m0-9-9 9M268 550l9 9m0-9-9 9M1250 489l9 9m0-9-9 9" />
            </g>
          </svg>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-[#1e3b2f] leading-tight"
            >
              The Collections
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm sm:text-base lg:text-lg text-[#1e3b2f]/75 max-w-xl mx-auto font-light leading-relaxed"
            >
              An edit of enduring silhouettes, from ready-to-wear pieces to
              private commissions.
            </motion.p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: COLLECTION FILTERS */}
        {/* ========================================================= */}
        <section
          className="relative w-full bg-[#f4ead5] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pb-6 overflow-hidden"
          style={{ backgroundColor: "var(--color-butter-cream)" }}
        >
          <AnalogGrainBackground variant="cream" id="grain-collections-bar" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1e3b2f]/10 pb-5">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {([
                { id: "all", label: "All Creations" },
                { id: "rtw", label: "Ready to Wear" },
                { id: "bespoke", label: "Bespoke Archive" },
              ] as const).map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`font-label-caps text-xs px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#1e3b2f] text-[#f4ead5] shadow-xs font-semibold"
                        : "bg-white/70 text-[#1e3b2f]/80 hover:text-[#1e3b2f] hover:bg-white border border-[#1e3b2f]/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4">
              <div className="relative">
                <select
                  aria-label="Sort Collections"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white/70 pl-4 pr-9 py-2.5 rounded-full font-label-caps text-xs text-[#1e3b2f] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3b2f] transition-colors border border-[#1e3b2f]/10"
                >
                  <option value="featured">
                    Featured
                  </option>
                  <option value="price-high">
                    Price: High to Low
                  </option>
                  <option value="price-low">
                    Price: Low to High
                  </option>
                </select>
                <HugeiconsIcon icon={ArrowDown01Icon} size={16} strokeWidth={1.7} className="absolute right-3 top-3 pointer-events-none text-[#1e3b2f]/70" aria-hidden="true" />
              </div>

              <span className="font-label-caps text-xs text-[#1e3b2f]/65 hidden sm:inline">
                {filteredItems.length}{" "}
                {filteredItems.length === 1 ? "Result" : "Results"}
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: THE COLLECTION */}
        {/* ========================================================= */}
        <section
          className="relative w-full bg-[#1e3b2f] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden"
          style={{ backgroundColor: "var(--color-forest-green)" }}
        >
          <AnalogGrainBackground variant="green" id="grain-collections-grid" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 md:gap-2 xl:gap-2.5">
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
        <section className="relative w-full bg-[#f4ead5] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-t border-[#1e3b2f]/10 overflow-hidden" style={{ backgroundColor: "var(--color-butter-cream)" }}>
          <AnalogGrainBackground variant="cream" id="grain-collections-cta" />

          <div className="relative z-10 w-full">
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
              className="fixed inset-0 bg-[#1e3b2f]/55 z-50 cursor-pointer"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-[#f4ead5] shadow-2xl overflow-y-auto border-l border-[#1e3b2f]/10 flex flex-col justify-between"
            >
              <div className="p-6 md:p-8 space-y-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1e3b2f]/10">
                  <span className="font-label-caps text-xs text-[#1e3b2f]/65">Selected Silhouette</span>
                  <button
                    type="button"
                    aria-label="Close Drawer"
                    onClick={() => setSelectedItem(null)}
                    className="w-9 h-9 rounded-full bg-[#1e3b2f]/[0.06] flex items-center justify-center text-[#1e3b2f] hover:bg-[#1e3b2f]/10 transition-colors cursor-pointer"
                  >
                    <HugeiconsIcon icon={Cancel01Icon} size={20} strokeWidth={1.7} aria-hidden="true" />
                  </button>
                </div>

                {/* Dual Previews: Main Look Photograph + Tactile Silk Weave Detail */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] overflow-hidden bg-[#fffdf9]">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden bg-[#fffdf9] relative">
                    <img
                      src={selectedItem.swatchImage}
                      alt="Tactile Silk Texture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Garment Spec */}
                <div className="space-y-2 pt-2">
                  <p className="font-label-caps text-xs text-[#1e3b2f]/60 font-medium">
                    {selectedItem.editionNote}
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1e3b2f] font-normal">
                    {selectedItem.title}
                  </h2>
                  <p className="font-sans text-sm text-[#1e3b2f]/75">
                    {selectedItem.price} · {selectedItem.statusTag}
                  </p>
                  <p className="font-body-sm text-sm text-[#1e3b2f]/80 leading-relaxed pt-1">
                    {selectedItem.description}
                  </p>
                </div>


                {/* Expandable Couture Accordions */}
                <div className="space-y-2 border-t border-[#1e3b2f]/10 pt-4">
                  <details className="group cursor-pointer">
                    <summary className="flex justify-between items-center font-label-caps text-xs text-[#1e3b2f] list-none py-2.5">
                      <span>Fabric &amp; Tactile Draping</span>
                      <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={1.7} className="group-open:rotate-180 transition-transform" aria-hidden="true" />
                    </summary>
                    <p className="font-body-sm text-xs text-[#1e3b2f]/75 pt-1 pb-2 leading-relaxed">
                      {selectedItem.fabricDetails}
                    </p>
                  </details>

                  <details className="group cursor-pointer border-t border-[#1e3b2f]/10">
                    <summary className="flex justify-between items-center font-label-caps text-xs text-[#1e3b2f] list-none py-2.5">
                      <span>Atelier Construction &amp; Seams</span>
                      <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={1.7} className="group-open:rotate-180 transition-transform" aria-hidden="true" />
                    </summary>
                    <p className="font-body-sm text-xs text-[#1e3b2f]/75 pt-1 pb-2 leading-relaxed">
                      {selectedItem.constructionDetails}
                    </p>
                  </details>

                  <details className="group cursor-pointer border-t border-[#1e3b2f]/10">
                    <summary className="flex justify-between items-center font-label-caps text-xs text-[#1e3b2f] list-none py-2.5">
                      <span>Care &amp; Archival Storage</span>
                      <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={1.7} className="group-open:rotate-180 transition-transform" aria-hidden="true" />
                    </summary>
                    <p className="font-body-sm text-xs text-[#1e3b2f]/75 pt-1 pb-2 leading-relaxed">
                      {selectedItem.careDetails}
                    </p>
                  </details>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 md:p-8 pt-4 border-t border-[#1e3b2f]/10 bg-[#f4ead5]">
                <a
                  href="/booking"
                  onClick={() => setSelectedItem(null)}
                  className="block w-full py-3.5 rounded-full bg-[#1e3b2f] text-[#f4ead5] font-label-caps text-xs text-center hover:bg-[#274b3c] transition-colors cursor-pointer"
                >
                  Book a Fitting
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
  const price = `${item.category === "bespoke" ? "from " : ""}$${item.rawPrice.toLocaleString("en-US")}`;

  return (
    <div className="group relative flex w-full filter drop-shadow-[0_12px_30px_rgba(30,59,47,0.08)] hover:drop-shadow-[0_20px_42px_rgba(30,59,47,0.14)] transition-all duration-500">
      <CapsuleTicketCard
        badge={item.badge}
        title={item.title}
        subtitle={item.provenance.split(" · ")[0]}
        price={price}
        image={item.image}
        hoverImage={item.swatchImage}
        altText={item.title}
        hoverAltText={`${item.title} textile detail`}
        onOpen={onOpen}
      />
    </div>
  );
}
