"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, ArrowRight01Icon, CheckIcon, CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
import TailorCtaCard from "@/components/TailorCtaCard";
import AnalogGrainBackground from "@/components/AnalogGrainBackground";
import {
  BESPOKE_STEPS,
  BESPOKE_TIERS,
  BESPOKE_ARCHITECTURE,
  BESPOKE_FAQS,
} from "@/data/mockData";

export default function BespokePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#f4ead5] text-[#1e3b2f] min-h-screen flex flex-col font-body-md selection:bg-[#ff3ea5] selection:text-white">
      <main className="w-full">
        {/* ========================================================= */}
        {/* SECTION 1: BESPOKE HERO */}
        {/* ========================================================= */}
        <section
          className="relative w-full min-h-[80svh] bg-[#f4ead5] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pt-32 pb-20 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "var(--color-butter-cream)" }}
        >
          <AnalogGrainBackground variant="cream" id="grain-bespoke-hero" />

          <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-[6rem] text-[#1e3b2f] leading-[1.08]"
            >
              Sculpted to Your Posture.
              <br />
              Crafted Once. Worn Forever.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm sm:text-base lg:text-lg text-[#1e3b2f]/75 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Every garment begins with your posture, then takes shape through
              muslin draping and hand-finishing in our London and Paris ateliers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 rounded-full bg-[#1e3b2f] text-[#f4ead5] font-label-caps text-xs px-8 py-4 hover:bg-[#274b3c] transition-colors"
              >
                Book a Private Fitting
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.7} aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: THE 5-STAGE BESPOKE PATHWAY                     */}
        {/* ========================================================= */}
        <section
          className="relative w-full bg-[#1e3b2f] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 text-[#f4ead5] overflow-hidden"
          style={{ backgroundColor: "var(--color-forest-green)" }}
        >
          {/* Static Analog Film Grain Background */}
          <AnalogGrainBackground variant="green" id="grain-bespoke-pathway" />

          <div className="relative z-10 w-full flex flex-col gap-12 sm:gap-16">
            {/* Section Masthead */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f4ead5] font-normal leading-tight">
                The 5-Stage Bespoke Pathway
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#f4ead5]/80 font-light leading-relaxed">
                From 34 anatomical measurements to the final hand-felled French
                seams, each stage ensures zero pulling, zero creasing, and
                sublime kinetic ease.
              </p>
            </div>

            {/* 5-Step Connected Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-2.5 w-full">
              {BESPOKE_STEPS.map((step) => (
                  <article
                    key={step.stepNumber}
                    className="text-left p-6 sm:p-7 flex flex-col bg-[#fffdf9] text-[#1e3b2f]"
                  >
                    <div className="space-y-4">
                      {/* Top Header: Step Number & Duration */}
                      <div className="flex items-center justify-between border-b border-current/15 pb-3">
                        <span className="font-serif text-3xl font-semibold leading-none text-[#d42684]">
                          {step.stepNumber}
                        </span>
                        <span className="font-label-caps text-xs opacity-65">
                          {step.duration}
                        </span>
                      </div>

                      {/* Title & Badge */}
                      <div className="space-y-1.5">
                        <span className="font-label-caps text-[10px] opacity-70 block">
                          {step.session}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-[13px] opacity-80 font-light leading-relaxed pt-2">
                        {step.description}
                      </p>
                    </div>

                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: HOW WE MEET — DUAL FITTING MODES                */}
        {/* ========================================================= */}
        <section className="relative w-full bg-[#f4ead5] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-b border-[#1e3b2f]/10 overflow-hidden" style={{ backgroundColor: "var(--color-butter-cream)" }}>
          {/* Static Analog Film Grain Background for Light Canvas */}
          <AnalogGrainBackground variant="cream" id="grain-bespoke-modes" />

          <div className="relative z-10 w-full space-y-12 sm:space-y-16">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1e3b2f] font-normal">
                How We Meet: In-Person or Worldwide
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#1e3b2f]/75 font-light leading-relaxed">
                Whether you visit our private Mayfair and Paris salons or join
                our Global Virtual Atelier, the tailoring precision remains
                uncompromised.
              </p>
            </div>

            {/* Dual Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 w-full">
              {/* Card 1: Studio Fitting */}
              <div className="bg-[#fffdf9] p-8 sm:p-10 border border-[#1e3b2f]/10 flex flex-col justify-between gap-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-xs text-[#1e3b2f]/65 font-semibold">
                      Mode A · Flagship Salons
                    </span>
                    <span className="font-label-caps text-xs text-[#1e3b2f]/70">
                      Mayfair &amp; Paris
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1e3b2f] font-normal">
                    The Studio Fitting (In-Person)
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#1e3b2f]/75 font-light leading-relaxed">
                    14 Savile Row, Mayfair, London &amp; 28 Rue du Faubourg
                    Saint-Honoré, Paris. Enjoy complete privacy in our salon
                    suites with direct access to over 300 archival fabric bolts
                    and live draped muslin trials.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      "Dedicated private salon suite reserved exclusively for you",
                      "3-way triple mirrors with calibrated architectural morning light",
                      "Direct consultation & hand-pinning with Creative Director Nerissa",
                      "Champagne & fine herbal tea service during fitting sessions",
                    ].map((perk, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#1e3b2f]/80"
                      >
                        <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} strokeWidth={1.7} className="text-[#d42684] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1e3b2f]/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-label-caps text-xs text-[#1e3b2f]/65">
                    London / Paris Appts
                  </span>
                  <Link
                    href="/booking?mode=studio"
                    className="px-6 py-3 rounded-full bg-[#1e3b2f] text-[#f4ead5] font-label-caps text-xs hover:bg-[#274b3c] transition-colors"
                  >
                    Select Studio Fitting →
                  </Link>
                </div>
              </div>

              {/* Card 2: Virtual Atelier */}
              <div className="bg-[#fffdf9] p-8 sm:p-10 border border-[#1e3b2f]/10 flex flex-col justify-between gap-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-xs text-[#1e3b2f]/65 font-semibold">
                      Mode B · International Patrons
                    </span>
                    <span className="font-label-caps text-xs text-[#1e3b2f]/70">
                      Worldwide Courier
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1e3b2f] font-normal">
                    The Global Virtual Atelier
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#1e3b2f]/75 font-light leading-relaxed">
                    Over 40% of our patrons reside in New York, Zurich, Geneva,
                    Tokyo, and Dubai. We dispatch our bespoke Calico Muslin Kit
                    directly to your residence, followed by private
                    high-definition video fitting sessions.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      "Personalized Toile Box dispatched with measurement calipers & pins",
                      "60-minute 1-on-1 virtual fitting session via private encrypted video",
                      "Tactile silk and wool crepe swatch envelopes shipped prior to appointment",
                      "Complimentary return courier for fine-tuning before final silk cut",
                    ].map((perk, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#1e3b2f]/80"
                      >
                        <HugeiconsIcon icon={CheckmarkCircle01Icon} size={18} strokeWidth={1.7} className="text-[#d42684] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1e3b2f]/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-label-caps text-xs text-[#1e3b2f]/65">
                    Dispatched Globally
                  </span>
                  <Link
                    href="/booking?mode=virtual"
                    className="px-6 py-3 rounded-full bg-[#1e3b2f] text-[#f4ead5] font-label-caps text-xs hover:bg-[#274b3c] transition-colors"
                  >
                    Select Virtual Atelier →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: CURATED COMMISSION TIERS                       */}
        {/* ========================================================= */}
        <section
          className="relative w-full bg-[#f4ead5] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-b border-[#1e3b2f]/10 text-[#1e3b2f] overflow-hidden"
          style={{ backgroundColor: "var(--color-butter-cream)" }}
        >
          {/* Static Analog Film Grain Background */}
          <AnalogGrainBackground variant="cream" id="grain-bespoke-tiers" />

          <div className="relative z-10 w-full space-y-12 sm:space-y-16">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1e3b2f] font-normal">
                Curated Commission Tiers
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#1e3b2f]/75 font-light leading-relaxed">
                Every tier includes our 34-point posture diagnosis, physical
                calico trial, and lifetime seam care.
              </p>
            </div>

            {/* 3 Pricing / Commission Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 w-full items-stretch">
              {BESPOKE_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`p-8 sm:p-10 flex flex-col justify-between relative border ${
                    tier.isFeatured
                      ? "bg-[#1e3b2f] text-[#f4ead5] border-[#1e3b2f]"
                      : "bg-[#fffdf9] text-[#1e3b2f] border-[#1e3b2f]/10"
                  }`}
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span
                        className={`font-label-caps text-xs uppercase tracking-widest ${
                          tier.isFeatured
                            ? "text-[#f4ead5]/70"
                            : "text-[#1e3b2f]/60"
                        }`}
                      >
                        {tier.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                        {tier.name}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-current/15 pb-2">
                      <span className="font-serif text-3xl sm:text-4xl font-semibold block">
                        {tier.startingPrice}
                      </span>
                      <span
                        className={`font-label-caps text-xs uppercase tracking-wider ${
                          tier.isFeatured
                            ? "text-[#f4ead5]/75"
                            : "text-[#1e3b2f]/70"
                        }`}
                      >
                        {tier.leadTime} · {tier.fittings}
                      </span>
                    </div>

                    <p
                      className={`font-sans text-xs sm:text-sm font-light leading-relaxed ${
                        tier.isFeatured ? "text-[#f4ead5]/85" : "text-[#1e3b2f]/80"
                      }`}
                    >
                      {tier.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5 pt-2">
                      {tier.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px]"
                        >
                          <HugeiconsIcon icon={CheckIcon} size={17} strokeWidth={1.7} className={`shrink-0 mt-0.5 ${tier.isFeatured ? "text-[#f4ead5]" : "text-[#d42684]"}`} aria-hidden="true" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-current/15">
                    <Link
                      href={`/booking?tier=${tier.id}`}
                      className={`w-full py-3.5 rounded-full font-label-caps text-xs uppercase tracking-wider text-center block transition-all font-semibold ${
                        tier.isFeatured
                          ? "bg-[#f4ead5] text-[#1e3b2f] hover:bg-white"
                          : "bg-[#1e3b2f] text-[#f4ead5] hover:bg-[#274b3c]"
                      }`}
                    >
                      Inquire About This Tier
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: THE INVISIBLE ARCHITECTURE                     */}
        {/* ========================================================= */}
        <section
          className="relative w-full bg-[#1e3b2f] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 text-[#f4ead5] overflow-hidden"
          style={{ backgroundColor: "var(--color-forest-green)" }}
        >
          {/* Static Analog Film Grain Background */}
          <AnalogGrainBackground variant="green" id="grain-bespoke-architecture" />

          <div className="relative z-10 w-full space-y-12 sm:space-y-16">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f4ead5] font-normal">
                The Invisible Architecture
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#f4ead5]/80 font-light leading-relaxed">
                What lies inside a garment determines how it feels after six
                hours on the floor. We never cut corners inside the linings.
              </p>
            </div>

            {/* Structural details, presented as a quiet material archive. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 w-full">
              {BESPOKE_ARCHITECTURE.map((card) => (
                <article key={card.title} className="group bg-[#fffdf9] text-[#1e3b2f] p-5 sm:p-6 flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden bg-[#f4ead5]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="space-y-4 pt-6 flex-1 flex flex-col">
                    <span className="font-label-caps text-xs text-[#d42684]">{card.tag}</span>
                    <h3 className="font-serif text-2xl sm:text-3xl leading-tight">{card.title}</h3>
                    <p className="font-sans text-sm text-[#1e3b2f]/75 font-light leading-relaxed">{card.description}</p>
                    <p className="font-label-caps text-xs text-[#1e3b2f]/70 border-t border-[#1e3b2f]/10 pt-4 mt-auto">{card.stat}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: FREQUENTLY CONSIDERED QUESTIONS (ACCORDION)    */}
        {/* Same styling and canvas as the CTA section                */}
        {/* ========================================================= */}
        <section className="relative w-full bg-[#f4ead5] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-t border-[#1e3b2f]/10 overflow-hidden" style={{ backgroundColor: "var(--color-butter-cream)" }}>
          {/* Static Analog Film Grain Background for Light Canvas */}
          <AnalogGrainBackground variant="cream" id="grain-bespoke-faqs" />

          <div className="relative z-10 w-full max-w-5xl mx-auto space-y-10 sm:space-y-12">
            <div className="flex flex-col items-center text-center space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1e3b2f] font-normal">
                Frequently Considered Questions
              </h2>
            </div>

            <div className="space-y-2.5 w-full">
              {BESPOKE_FAQS.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-[#fffdf9] border border-[#1e3b2f]/10 overflow-hidden transition-colors duration-300 hover:border-[#1e3b2f]/25"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`bespoke-faq-${index}`}
                      className="w-full px-6 sm:px-8 py-6 sm:py-7 text-left flex items-center justify-between gap-6 cursor-pointer hover:bg-[#f4ead5]/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#1e3b2f]"
                    >
                      <span className="font-serif text-lg sm:text-xl lg:text-2xl text-[#1e3b2f] font-medium leading-snug">
                        {faq.question}
                      </span>
                      <HugeiconsIcon icon={ArrowDown01Icon} size={22} strokeWidth={1.7} className={`shrink-0 text-[#1e3b2f] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          id={`bespoke-faq-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <div className="px-6 sm:px-8 pb-7 text-[#1e3b2f]/80 font-sans text-base sm:text-lg font-light leading-relaxed border-t border-[#1e3b2f]/10 pt-5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 7: FINAL GATEWAY BANNER (TAILOR CTA CARD)         */}
        {/* ========================================================= */}
        <section className="relative w-full bg-[#f4ead5] pb-16 sm:pb-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 overflow-hidden" style={{ backgroundColor: "var(--color-butter-cream)" }}>
          {/* Static Analog Film Grain Background for Light Canvas */}
          <AnalogGrainBackground variant="cream" id="grain-bespoke-cta" />

          <div className="relative z-10 w-full">
            <TailorCtaCard />
          </div>
        </section>
      </main>
    </div>
  );
}
