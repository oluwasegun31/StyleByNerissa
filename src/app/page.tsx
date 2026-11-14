"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, Calendar03Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import BespokeStackCard from "@/components/BespokeStackCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TailorCtaCard from "@/components/TailorCtaCard";
import HeroConceptGallery from "@/components/HeroConceptGallery";
import AnalogGrainBackground from "@/components/AnalogGrainBackground";
import CredoFolderReveal from "@/components/CredoFolderReveal";
import TailorStitchBackground from "@/components/TailorStitchBackground";
import CapsuleTicketCard from "@/components/CapsuleTicketCard";
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
    <div className="bg-[#f4ead5] text-[#1e3b2f] min-h-screen flex flex-col font-body-md selection:bg-[#ff3ea5] selection:text-white">
      <main className="w-full">
        {/* ========================================================= */}
        {/* SECTION 1: MAIN HERO — BUTTER CREAM CANVAS (#f4ead5)       */}
        {/* ========================================================= */}
        <HeroConceptGallery />

        <div className="relative z-10">
          <TailorStitchBackground id="stitch-home-journey" />

        {/* ========================================================= */}
        {/* SECTION 2: BRAND MANIFESTO — FOREST GREEN (#1e3b2f)       */}
        {/* ========================================================= */}
        <section
          data-stitch-section
          className="relative w-full bg-[#1e3b2f] pt-28 sm:pt-36 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-y border-black/10 overflow-hidden"
          style={{ backgroundColor: "var(--color-forest-green)" }}
        >
          {/* Static Analog Film Grain Background */}
          <AnalogGrainBackground variant="green" id="grain-manifesto" />

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center">
              <span className="font-label-caps text-xs tracking-[0.25em] text-[#ff3ea5] uppercase font-semibold">
                {CREDO_DATA.label}
              </span>
            </div>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-[#f4ead5] leading-[1.3] font-normal italic">
              {CREDO_DATA.quote}
            </blockquote>
            <div className="w-12 h-0.5 bg-[#f4ead5]/30 mx-auto" />
          </div>

          {/* Bespoke Atelier Craftsmanship Pillars — Folder to 3-Card Reveal */}
          <CredoFolderReveal />
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: READY-TO-WEAR CAPSULE — BUTTER CREAM (#f4ead5) */}
        {/* ========================================================= */}
        <section
          id="capsule"
          data-stitch-section
          className="relative w-full bg-[#f4ead5] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-16 sm:py-24 border-t border-[#1e3b2f]/10 overflow-hidden"
          style={{ backgroundColor: "var(--color-butter-cream)" }}
        >
          {/* Static Analog Film Grain Background for Butter Cream */}
          <AnalogGrainBackground variant="cream" id="grain-capsule-home" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-[#1e3b2f]">
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
                        ? "bg-[#1e3b2f] text-[#f4ead5] shadow-xs font-semibold"
                        : "bg-white/70 text-[#1e3b2f]/80 hover:text-[#1e3b2f] hover:bg-white border border-[#1e3b2f]/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full-Width Minimalist Ticket Card Grid */}
          <motion.div
            layout
            className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-2.5 md:gap-2 xl:gap-2.5 w-full"
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
                  className="group relative flex w-full filter drop-shadow-[0_12px_30px_rgba(30,59,47,0.08)] hover:drop-shadow-[0_20px_42px_rgba(30,59,47,0.14)] transition-all duration-500"
                >
                  <CapsuleTicketCard
                    badge={product.badge}
                    title={product.title}
                    subtitle={product.material}
                    price={product.price}
                    image={product.image}
                    hoverImage={product.hoverImage}
                    altText={product.altText}
                    hoverAltText={`${product.title} alternate lookbook view`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: THE BESPOKE ATELIER — FOREST GREEN (#1e3b2f)   */}
        {/* ========================================================= */}
        <section
          id="bespoke"
          data-stitch-section
          className="relative w-full bg-[#1e3b2f] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-t border-black/10"
          style={{ backgroundColor: "var(--color-forest-green)" }}
        >
          {/* Static Analog Film Grain Background for Forest Green */}
          <AnalogGrainBackground variant="green" id="grain-bespoke-home" />

          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
            {/* Sticky Left Narrative Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#f4ead5] leading-tight">
                  From First Toile to Final Hem.
                </h2>
                <p className="font-body-md text-[#f4ead5]/85 leading-relaxed">
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
                          ? "bg-[#ff3ea5] text-white shadow-xs font-bold"
                          : "bg-white/10 text-[#f4ead5] border border-white/20 shadow-xs group-hover:bg-[#ff3ea5] group-hover:text-white"
                      }`}
                    >
                      {phase.phaseNumber}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg sm:text-xl text-[#f4ead5]">
                        {phase.title}
                      </h4>
                      <p className="font-body-sm text-xs text-[#f4ead5]/75 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#booking"
                  className="bg-[#ff3ea5] text-white font-label-caps text-xs rounded-full px-8 py-4 inline-flex items-center gap-3 hover:bg-[#e02b8d] transition-all shadow-lg shadow-[#ff3ea5]/25 tracking-wider font-semibold"
                >
                  <span>Schedule Discovery Call</span>
                  <HugeiconsIcon icon={Calendar03Icon} size={16} strokeWidth={1.7} aria-hidden="true" />
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
        {/* SECTION 5: THE TEXTILE ARCHIVE — BUTTER CREAM (#f4ead5)   */}
        {/* ========================================================= */}
        <section
          id="textiles"
          data-stitch-section
          className="relative w-full bg-[#f4ead5] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-16 sm:py-24 border-t border-[#1e3b2f]/10 overflow-hidden"
          style={{ backgroundColor: "var(--color-butter-cream)" }}
        >
          {/* Static Analog Film Grain Background for Butter Cream */}
          <AnalogGrainBackground variant="cream" id="grain-textiles-home" />

          <div className="relative z-10 max-w-4xl mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-[#1e3b2f]">
              The Textile Archive
            </h2>
            <p className="font-body-md text-[#1e3b2f]/85 mt-3 leading-relaxed">
              Every yard is sustainably sourced from generational family-run
              mills in Como, Biella, and Kyoto. We select exclusively
              biodegradable fibers that soften and conform over decades of wear.
            </p>
          </div>

          {/* Full-Width 4-Card Minimalist Ticket Layout — Matches Section 3 */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 lg:gap-2 xl:gap-2.5 w-full">
            {TEXTILE_ARCHIVE.map((swatch) => (
              <div
                key={swatch.id}
                className="group relative w-full filter drop-shadow-[0_12px_30px_rgba(30,59,47,0.08)] hover:drop-shadow-[0_20px_42px_rgba(30,59,47,0.14)] transition-all duration-500"
              >
                {/* Ticket Card with Real Left & Right Circular Side Cutouts */}
                <article
                  className="relative w-full h-[490px] sm:h-[520px] lg:h-[540px] rounded-none bg-[#fffdf9] flex flex-col justify-between p-5 sm:p-6 overflow-hidden cursor-pointer"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(circle 20px at 0px 74%, transparent 19.5px, #000 20px), radial-gradient(circle 20px at 100% 74%, transparent 19.5px, #000 20px)",
                    WebkitMaskComposite: "destination-in",
                    maskImage:
                      "radial-gradient(circle 20px at 0px 74%, transparent 19.5px, #000 20px), radial-gradient(circle 20px at 100% 74%, transparent 19.5px, #000 20px)",
                    maskComposite: "intersect",
                  }}
                >
                  {/* =================================================== */}
                  {/* TOP ROW: MINIMAL BADGE + DIAGONAL ARROW (↗)         */}
                  {/* =================================================== */}
                  <div className="relative z-20 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#ff3ea5]/12 group-hover:bg-white/95 text-[#d42684] text-xs font-medium lowercase transition-colors duration-300">
                      <HugeiconsIcon icon={SparklesIcon} size={11} strokeWidth={1.8} aria-hidden="true" />
                      <span>{swatch.origin.split(" · ")[0]}</span>
                    </span>

                    <span className="text-[#1e3b2f]/75 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                      <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                  </div>

                  {/* =================================================== */}
                  {/* CENTER SWATCH IMAGE (Minimalist Floating Frame)     */}
                  {/* =================================================== */}
                  <div className="relative z-[5] my-auto w-full flex items-center justify-center py-4 pointer-events-none">
                    <div className="w-[64%] aspect-[3/3.9] rounded-none overflow-hidden shadow-[0_14px_34px_rgba(30,59,47,0.10)] bg-[#f4ead5]">
                      <img
                        src={swatch.image}
                        alt={swatch.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>

                  {/* =================================================== */}
                  {/* FULL-HEIGHT HOT PINK HOVER WIPE SHOWING 2ND IMAGE   */}
                  {/* Covers 100% of the card height (inset-0)            */}
                  {/* =================================================== */}
                  <div
                    className="absolute inset-0 w-full h-full [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none bg-[#ff3ea5] flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: "var(--color-hot-pink)" }}
                  >
                    <div className="w-[66%] aspect-[3/3.9] -translate-y-4 rounded-none overflow-hidden shadow-[0_22px_48px_rgba(0,0,0,0.26)] scale-[1.28] group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center bg-[#f4ead5]">
                      <img
                        src={swatch.hoverImage}
                        alt={`${swatch.name} atelier drape view`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* =================================================== */}
                  {/* BOTTOM MINIMALIST FOOTER: TITLE, SUBTITLE & GSM TAG */}
                  {/* =================================================== */}
                  <div className="relative z-20 pt-6 flex items-end justify-between gap-3 pointer-events-none">
                    <div className="space-y-1 text-left min-w-0">
                      <h3 className="font-sans text-[15px] sm:text-base font-medium text-[#1e3b2f] group-hover:text-white leading-snug lowercase truncate transition-colors duration-300">
                        {swatch.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-[13px] text-[#1e3b2f]/45 group-hover:text-white/80 leading-snug lowercase truncate transition-colors duration-300">
                        {swatch.drape} · {swatch.lusterOrFinish.value}
                      </p>
                    </div>

                    <span className="shrink-0 px-3 py-1.5 rounded-none bg-[#1e3b2f]/[0.06] group-hover:bg-white/95 text-[#1e3b2f]/80 group-hover:text-[#1e3b2f] font-sans text-xs sm:text-[13px] font-medium lowercase transition-colors duration-300">
                      {swatch.gsm}
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: CLIENT SILHOUETTES — BUTTER CREAM (#f4ead5)    */}
        {/* ========================================================= */}
        <section data-stitch-section className="relative w-full bg-[#f4ead5] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-t border-[#1e3b2f]/10 overflow-hidden"
          style={{ backgroundColor: "var(--color-butter-cream)" }}
        >
          {/* Static Analog Film Grain Background for Butter Cream */}
          <AnalogGrainBackground variant="cream" id="grain-reviews-home" />

          <div className="relative z-10 w-full space-y-12">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-[#1e3b2f]">
                Client Silhouettes
              </h2>
              <p className="font-body-md text-sm sm:text-base text-[#1e3b2f]/80 leading-relaxed">
                Each commission represents a shared memory. Here is how our
                patrons describe wearing Nerissa creations.
              </p>
            </div>

            {/* Reference-Matched Connected Capsule Carousel */}
            <TestimonialCarousel reviews={CLIENT_REVIEWS} />

            {/* Bespoke Tailor Shears CTA Card (Forest Green with Hot Pink button) */}
            <TailorCtaCard />
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}
