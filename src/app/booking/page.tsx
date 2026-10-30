"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  BOOKING_FORMATS,
  BOOKING_CATEGORIES,
  BOOKING_DATES,
  ATELIER_POLICIES,
} from "@/data/mockData";

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);
  const [selectedFormat, setSelectedFormat] = useState<string>("in-studio");
  const [selectedCategory, setSelectedCategory] = useState<string>("bridal");
  const [selectedTier, setSelectedTier] = useState<string>("gala");
  const [eventDate, setEventDate] = useState<string>("");
  const [silhouetteNotes, setSilhouetteNotes] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>(BOOKING_DATES[0].date);
  const [selectedSlot, setSelectedSlot] = useState<string>(BOOKING_DATES[0].slots[0]);
  const [patronName, setPatronName] = useState<string>("");
  const [patronEmail, setPatronEmail] = useState<string>("");
  const [patronPhone, setPatronPhone] = useState<string>("");
  const [patronCity, setPatronCity] = useState<string>("London");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Active date object
  const activeDateObj = BOOKING_DATES.find((d) => d.date === selectedDate) || BOOKING_DATES[0];

  const handleNext = () => {
    if (currentStep < 4) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (stepNum: number) => {
    if (stepNum !== currentStep) {
      setDirection(stepNum > currentStep ? 1 : -1);
      setCurrentStep(stepNum);
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md selection:bg-primary selection:text-on-primary">
      <main className="w-full pt-20">
        {/* ========================================================= */}
        {/* SECTION 1: EDITORIAL MASTHEAD & BOOKING OVERVIEW           */}
        {/* Full viewport height accounting for the 5rem (80px) navbar */}
        {/* ========================================================= */}
        <section
          className="w-full min-h-[calc(100vh-5rem)] bg-barbie-pink px-4 sm:px-8 lg:px-14 xl:px-16 2xl:px-20 py-8 sm:py-12 flex flex-col justify-between items-center text-center border-b border-black/15 overflow-hidden"
          style={{ backgroundColor: "var(--color-barbie-pink)" }}
        >
          <div className="w-full flex flex-col items-center text-center my-auto py-6 sm:py-8">
            {/* Capsule Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/10 text-[#161412] font-label-caps text-xs uppercase tracking-[0.2em] mb-6 border border-black/15"
            >
              <span>Atelier Private Intake</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#161412]" />
              <span>2026 Commission Calendar</span>
            </motion.div>

            {/* Rotating Sunburst Motif Icon */}
            <div className="flex items-center justify-center text-[#161412] mb-4">
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

            {/* Grand Serif Display Headline matching brand scale */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-semibold text-[clamp(2.35rem,8.5vw,4.5rem)] lg:text-[clamp(3.25rem,6.8vw,8.5rem)] text-[#161412] tracking-tight leading-[0.98] lg:leading-none mb-6 w-full"
            >
              Reserve Your Private Consultation
            </motion.h1>

            {/* Editorial Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-base sm:text-lg md:text-xl text-[#161412]/85 max-w-3xl mx-auto mb-8 font-light leading-relaxed"
            >
              Step into our London Mayfair or Paris salons, or begin via our Global Virtual Atelier. Every session includes tactile silk drape analysis, 34-point posture diagnosis, and personal silhouette croquis.
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
                  100% Deposit Credited Toward Final Commission
                </span>
              </div>
              <span className="text-[#161412]/30 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span className="font-label-caps text-xs uppercase tracking-wider text-[#161412]/85">
                  Mayfair &amp; Paris Slots Live
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: MULTI-STEP INTERACTIVE INTAKE FLOW             */}
        {/* HAUTE COUTURE ATELIER LEDGER BOOK SPREAD (3D PAGE FLIP)    */}
        {/* ========================================================= */}
        <section
          className="w-full bg-stormy-teal py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 border-b border-black/15 text-white"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="w-full flex flex-col gap-10 sm:gap-14">
            {/* Stepper Progress Bar */}
            <div className="w-full flex items-center justify-center">
              <div className="flex items-center gap-2 sm:gap-3 p-1.5 rounded-full bg-black/25 border border-white/10 overflow-x-auto max-w-full">
                {[
                  { num: 1, label: "01 Format" },
                  { num: 2, label: "02 Category" },
                  { num: 3, label: "03 Vision" },
                  { num: 4, label: "04 Schedule" },
                ].map((s) => {
                  const isActive = currentStep === s.num;
                  const isCompleted = currentStep > s.num;
                  return (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => goToStep(s.num)}
                      className={`px-4 sm:px-5 py-2 rounded-full font-label-caps text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-white text-[#161412] font-semibold shadow-md"
                          : isCompleted
                            ? "bg-black/30 text-white/90 hover:bg-black/40"
                            : "text-white/60 hover:text-white"
                      }`}
                    >
                      <span>{s.label}</span>
                      {isCompleted && (
                        <span className="material-symbols-outlined text-[13px] ml-1.5 translate-y-0.5">
                          check
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Atelier Ledger Book Shell with 3D Perspective */}
            <div className="w-full max-w-7xl mx-auto rounded-3xl bg-[#141210] border border-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] relative p-3 sm:p-5 lg:p-7 [perspective:2200px]">
              {/* Central Spine Binding with Metallic Stitching & Crease Shadows */}
              <div className="hidden lg:block absolute inset-y-6 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-30">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
                <div className="w-px h-full bg-white/25 mx-auto" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-1 rounded-full bg-white/40" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3.5 h-1 rounded-full bg-white/40" />
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                {isSubmitted ? (
                  /* Success Confirmation Screen (Master Archival Dossier) */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center py-12 sm:py-16 space-y-6 max-w-2xl mx-auto"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-stormy-teal text-white flex items-center justify-center shadow-lg border border-white/20">
                      <span className="material-symbols-outlined text-[36px]">
                        verified
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-white/70">
                        Reservation Request Confirmed
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
                        Your Salon Suite Awaits
                      </h2>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
                      Thank you, <strong className="text-white font-medium">{patronName || "esteemed patron"}</strong>. We have reserved your appointment on <strong className="text-white font-medium">{selectedDate}</strong> at <strong className="text-white font-medium">{selectedSlot}</strong>.
                    </p>

                    <div className="p-6 rounded-2xl bg-[#1E1C1A] border border-white/10 text-left w-full space-y-3 font-body-sm text-xs text-white/80">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="font-label-caps uppercase text-white/60">Atelier Ref:</span>
                        <span className="font-mono text-white font-semibold">SBN-2026-FITTING</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="font-label-caps uppercase text-white/60">Format:</span>
                        <span className="text-white">{selectedFormat === "in-studio" ? "In-Studio Salon Suite (London/Paris)" : "Global Virtual Atelier"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-label-caps uppercase text-white/60">Concierge Notice:</span>
                        <span className="text-white">Full dossier sent to {patronEmail || "your email"}</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4 justify-center">
                      <Link
                        href="/collections"
                        className="px-8 py-3.5 rounded-full bg-white text-[#161412] font-label-caps text-xs uppercase tracking-wider hover:bg-stone-100 font-semibold transition-all shadow-md"
                      >
                        Explore Current Silhouettes →
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setCurrentStep(1);
                        }}
                        className="px-7 py-3.5 rounded-full bg-white/10 text-white font-label-caps text-xs uppercase tracking-wider hover:bg-white/15 transition-all border border-white/15 cursor-pointer"
                      >
                        Book Another Session
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Interactive 2-Page Book Spread */
                  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 [transform-style:preserve-3d]">
                    {/* =================================================== */}
                    {/* LHS: LEFT PAGE (ATELIER FOLIO & BRIEF)             */}
                    {/* Folds/Unfolds from Right Spine Edge                 */}
                    {/* =================================================== */}
                    <motion.div
                      key={`lhs-${currentStep}`}
                      custom={direction}
                      variants={{
                        initial: (dir: number) => ({
                          rotateY: dir > 0 ? 80 : -45,
                          opacity: 0,
                          transformOrigin: "right center",
                        }),
                        animate: {
                          rotateY: 0,
                          opacity: 1,
                          transformOrigin: "right center",
                          transition: {
                            duration: 0.65,
                            ease: [0.16, 1, 0.3, 1],
                            delay: direction > 0 ? 0.15 : 0,
                          },
                        },
                        exit: (dir: number) => ({
                          rotateY: dir < 0 ? 80 : -45,
                          opacity: 0,
                          transformOrigin: "right center",
                          transition: {
                            duration: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        }),
                      }}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="w-full bg-[#171513] rounded-2xl lg:rounded-r-none p-6 sm:p-8 lg:p-10 border border-white/15 lg:border-r-0 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-[inset_-16px_0_24px_rgba(0,0,0,0.5)] [transform-style:preserve-3d]"
                    >
                      {/* Top Folio Metadata */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="font-label-caps text-[10px] uppercase tracking-[0.25em] text-white/70">
                          Folio 0{currentStep} / 04 · Atelier Ledger
                        </span>
                        <span className="font-mono text-[10px] text-white/60 uppercase">
                          Savile Row / Paris Salons
                        </span>
                      </div>

                      {/* Step-Specific Left Page Brief */}
                      {currentStep === 1 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="space-y-2">
                            <span className="font-label-caps text-xs uppercase tracking-widest text-secondary text-white/70">
                              Consultation Mode
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                              The Fitting Encounter
                            </h2>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                            Every Nerissa silhouette is sculpted against true anatomical posture. Choose between an intimate consultation in our private Mayfair or Paris suites, or connect from anywhere globally via our bespoke Toile Box kit.
                          </p>
                          <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2.5 text-xs text-white/75 font-sans">
                            <div className="flex items-center gap-2 text-white font-semibold font-label-caps text-[11px] uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              <span>Atelier Assurance</span>
                            </div>
                            <p className="leading-relaxed">
                              100% of your initial consultation fee is credited directly toward your final couture commission invoice.
                            </p>
                          </div>
                          <blockquote className="font-serif italic text-xs sm:text-sm text-white/70 border-l border-white/20 pl-4 py-1">
                            &ldquo;A bespoke garment does not merely fit; it aligns with the patron&apos;s posture in motion.&rdquo;
                          </blockquote>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="space-y-2">
                            <span className="font-label-caps text-xs uppercase tracking-widest text-secondary text-white/70">
                              Silhouette Archetype
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                              Commission Category
                            </h2>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                            Tell us the nature of the piece you envision. Each archetype requires specialized internal architecture—from floating horsehair chest canvas to hand-boned internal French corsetry.
                          </p>
                          <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs text-white/80 font-sans">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                              <span className="font-label-caps uppercase text-white/60">Selected Mode:</span>
                              <span className="text-white font-medium">{selectedFormat === "in-studio" ? "Flagship In-Studio" : "Global Virtual Atelier"}</span>
                            </div>
                            <div className="flex justify-between pt-1">
                              <span className="font-label-caps uppercase text-white/60">Toile Protocol:</span>
                              <span className="text-white font-medium">Bespoke Calico Trial Included</span>
                            </div>
                          </div>
                          <blockquote className="font-serif italic text-xs sm:text-sm text-white/70 border-l border-white/20 pl-4 py-1">
                            &ldquo;Internal corsetry should support the body with quiet weightlessness, never restrict it.&rdquo;
                          </blockquote>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="space-y-2">
                            <span className="font-label-caps text-xs uppercase tracking-widest text-secondary text-white/70">
                              Runway &amp; Calendar
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                              Milestone &amp; Vision
                            </h2>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                            Couture creation is a synchronized dialogue between Italian silk mills in Lake Como and hand-basting in our Mayfair atelier. Please articulate your timeline and aesthetic intent.
                          </p>
                          <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs text-white/80 font-sans">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                              <span className="font-label-caps uppercase text-white/60">Archetype:</span>
                              <span className="text-white font-medium uppercase font-mono">{selectedCategory}</span>
                            </div>
                            <div className="flex justify-between pt-1">
                              <span className="font-label-caps uppercase text-white/60">Standard Runway:</span>
                              <span className="text-white font-medium">6–8 Weeks from 1st Fitting</span>
                            </div>
                          </div>
                          <blockquote className="font-serif italic text-xs sm:text-sm text-white/70 border-l border-white/20 pl-4 py-1">
                            &ldquo;Mulberry silk crepe requires 48 hours of gravity hang before hand-felling the hemline.&rdquo;
                          </blockquote>
                        </div>
                      )}

                      {currentStep === 4 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="space-y-2">
                            <span className="font-label-caps text-xs uppercase tracking-widest text-secondary text-white/70">
                              Final Itinerary
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                              Appointment Dossier
                            </h2>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                            Review your selected itinerary. Upon submission, a private concierge confirmation with salon directions and preliminary fabric envelope tracking will be dispatched.
                          </p>
                          <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2.5 text-xs text-white/80 font-sans">
                            <div className="flex justify-between border-b border-white/10 pb-1.5">
                              <span className="font-label-caps uppercase text-white/60">Salon Mode:</span>
                              <span className="text-white font-medium">{selectedFormat === "in-studio" ? "London / Paris Studio" : "Global Virtual Atelier"}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-1.5">
                              <span className="font-label-caps uppercase text-white/60">Category &amp; Tier:</span>
                              <span className="text-white font-medium uppercase">{selectedCategory} · {selectedTier}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-1.5">
                              <span className="font-label-caps uppercase text-white/60">Reserved Slot:</span>
                              <span className="text-white font-semibold font-mono">{selectedDate} @ {selectedSlot}</span>
                            </div>
                            <div className="flex justify-between pt-1">
                              <span className="font-label-caps uppercase text-white/60">Privacy:</span>
                              <span className="text-white font-medium">Confidential Salon Suite</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bottom Page Seal */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-white/50">
                        <span>Nerissa Couture Atelier</span>
                        <span>London · Paris</span>
                      </div>
                    </motion.div>

                    {/* =================================================== */}
                    {/* RHS: RIGHT PAGE (INTERACTIVE CONTROLS & ACTIONS)    */}
                    {/* Folds toward LHS on Next Step (rotateY: 0 -> -90)   */}
                    {/* =================================================== */}
                    <motion.div
                      key={`rhs-${currentStep}`}
                      custom={direction}
                      variants={{
                        initial: (dir: number) => ({
                          rotateY: dir < 0 ? -90 : 45,
                          opacity: 0,
                          transformOrigin: "left center",
                        }),
                        animate: {
                          rotateY: 0,
                          opacity: 1,
                          transformOrigin: "left center",
                          transition: {
                            duration: 0.65,
                            ease: [0.16, 1, 0.3, 1],
                            delay: direction < 0 ? 0.15 : 0,
                          },
                        },
                        exit: (dir: number) => ({
                          rotateY: dir > 0 ? -90 : 45,
                          opacity: 0,
                          transformOrigin: "left center",
                          transition: {
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        }),
                      }}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="w-full bg-[#1B1917] rounded-2xl lg:rounded-l-none p-6 sm:p-8 lg:p-10 border border-white/15 lg:border-l-0 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-[inset_16px_0_24px_rgba(0,0,0,0.5)] [transform-style:preserve-3d]"
                    >
                      {/* Top Folio Indicator */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="font-label-caps text-[10px] uppercase tracking-[0.25em] text-white/70">
                          Input Page · Step 0{currentStep}
                        </span>
                        <span className="font-mono text-[10px] text-white/60 uppercase">
                          Action Sheet
                        </span>
                      </div>

                      {/* STEP 1: FORMAT & LOCATION */}
                      {currentStep === 1 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="grid grid-cols-1 gap-4">
                            {BOOKING_FORMATS.map((fmt) => {
                              const isChosen = selectedFormat === fmt.id;
                              return (
                                <div
                                  key={fmt.id}
                                  onClick={() => setSelectedFormat(fmt.id)}
                                  className={`rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 border flex flex-col justify-between space-y-4 ${
                                    isChosen
                                      ? "bg-[#24211E] border-white/40 shadow-xl ring-1 ring-white/20"
                                      : "bg-black/30 border-white/10 hover:border-white/20 hover:bg-black/40"
                                  }`}
                                >
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                      <span className="font-label-caps text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                                        {fmt.tag}
                                      </span>
                                      <div
                                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                                          isChosen
                                            ? "bg-white text-[#161412] border-white"
                                            : "border-white/30 text-transparent"
                                        }`}
                                      >
                                        <span className="material-symbols-outlined text-[16px]">
                                          check
                                        </span>
                                      </div>
                                    </div>

                                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                                      {fmt.title}
                                    </h3>
                                    <p className="font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                                      {fmt.description}
                                    </p>
                                  </div>

                                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-label-caps uppercase tracking-wider">
                                    <div>
                                      <span className="text-white font-semibold text-sm block">
                                        {fmt.fee}
                                      </span>
                                      <span className="text-white/60 text-[10px]">
                                        {fmt.feeNote}
                                      </span>
                                    </div>
                                    <span className="text-white/80">{fmt.location}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="flex justify-end pt-4 border-t border-white/10">
                            <button
                              type="button"
                              onClick={handleNext}
                              className="px-8 py-3.5 rounded-full bg-white text-[#161412] font-label-caps text-xs uppercase tracking-wider hover:bg-stone-100 font-semibold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>Continue to Commission Category</span>
                              <span className="material-symbols-outlined text-[16px]">
                                arrow_forward
                              </span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 2: COMMISSION CATEGORY */}
                      {currentStep === 2 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {BOOKING_CATEGORIES.map((cat) => {
                              const isChosen = selectedCategory === cat.id;
                              return (
                                <div
                                  key={cat.id}
                                  onClick={() => setSelectedCategory(cat.id)}
                                  className={`rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-300 border flex flex-col justify-between space-y-3 ${
                                    isChosen
                                      ? "bg-[#24211E] border-white/40 shadow-xl ring-1 ring-white/20"
                                      : "bg-black/30 border-white/10 hover:border-white/20 hover:bg-black/40"
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div
                                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                        isChosen
                                          ? "bg-white text-[#161412]"
                                          : "bg-white/10 text-white"
                                      }`}
                                    >
                                      <span className="material-symbols-outlined text-[18px]">
                                        {cat.icon}
                                      </span>
                                    </div>
                                    <div
                                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                                        isChosen
                                          ? "bg-white text-[#161412] border-white"
                                          : "border-white/30 text-transparent"
                                      }`}
                                    >
                                      <span className="material-symbols-outlined text-[14px]">
                                        check
                                      </span>
                                    </div>
                                  </div>

                                  <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                      <h3 className="font-serif text-base sm:text-lg text-white font-medium">
                                        {cat.title}
                                      </h3>
                                    </div>
                                    <span className="font-mono text-[10px] text-white/60 uppercase block">
                                      {cat.subtitle}
                                    </span>
                                    <p className="font-sans text-xs text-white/75 font-light leading-relaxed line-clamp-2 pt-1">
                                      {cat.desc}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="px-6 py-3 rounded-full text-white/75 font-label-caps text-xs uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
                            >
                              ← Back
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="px-8 py-3.5 rounded-full bg-white text-[#161412] font-label-caps text-xs uppercase tracking-wider hover:bg-stone-100 font-semibold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>Continue to Vision &amp; Notes</span>
                              <span className="material-symbols-outlined text-[16px]">
                                arrow_forward
                              </span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 3: TIMELINE & VISION */}
                      {currentStep === 3 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="space-y-4">
                            {/* Target Event Date */}
                            <div className="space-y-2">
                              <label className="font-label-caps text-xs uppercase tracking-wider text-white/80 block">
                                Target Event Date
                              </label>
                              <input
                                type="date"
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                                className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-white transition-colors"
                              />
                              <span className="font-sans text-[11px] text-white/60 block">
                                Standard couture turnaround: 6–8 weeks. Express slots available on request.
                              </span>
                            </div>

                            {/* Commission Investment Tier */}
                            <div className="space-y-2">
                              <label className="font-label-caps text-xs uppercase tracking-wider text-white/80 block">
                                Anticipated Commission Tier
                              </label>
                              <select
                                value={selectedTier}
                                onChange={(e) => setSelectedTier(e.target.value)}
                                className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                              >
                                <option value="separates" className="bg-[#161412] text-white">
                                  Tailored Separates ($2,400 – $4,500 USD)
                                </option>
                                <option value="gala" className="bg-[#161412] text-white">
                                  Gala &amp; Red Carpet Couture ($4,800 – $7,500 USD)
                                </option>
                                <option value="bridal" className="bg-[#161412] text-white">
                                  Bridal &amp; Ceremonial Masterpiece ($7,500+ USD)
                                </option>
                              </select>
                            </div>

                            {/* Silhouette Notes */}
                            <div className="space-y-2">
                              <label className="font-label-caps text-xs uppercase tracking-wider text-white/80 block">
                                Silhouette Vision or Aesthetic Notes
                              </label>
                              <textarea
                                rows={3}
                                value={silhouetteNotes}
                                onChange={(e) => setSilhouetteNotes(e.target.value)}
                                placeholder="Describe desired drape, volume, preferred silks (Mulberry, crepe, organza), or special requirements..."
                                className="w-full bg-black/40 border border-white/20 rounded-xl p-3 text-white font-sans text-xs sm:text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white/40 leading-relaxed"
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="px-6 py-3 rounded-full text-white/75 font-label-caps text-xs uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
                            >
                              ← Back
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="px-8 py-3.5 rounded-full bg-white text-[#161412] font-label-caps text-xs uppercase tracking-wider hover:bg-stone-100 font-semibold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>Continue to Slot &amp; Details</span>
                              <span className="material-symbols-outlined text-[16px]">
                                arrow_forward
                              </span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 4: SCHEDULE SLOT & CLIENT DETAILS */}
                      {currentStep === 4 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="space-y-4">
                            {/* Available Dates */}
                            <div className="space-y-2">
                              <label className="font-label-caps text-xs uppercase tracking-wider text-white/80 block">
                                Available Salon Dates
                              </label>
                              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                {BOOKING_DATES.map((item) => {
                                  const isDateSelected = selectedDate === item.date;
                                  return (
                                    <button
                                      key={item.date}
                                      type="button"
                                      onClick={() => {
                                        setSelectedDate(item.date);
                                        setSelectedSlot(item.slots[0]);
                                      }}
                                      className={`p-2 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                                        isDateSelected
                                          ? "bg-white text-[#161412] border-white shadow-md font-semibold"
                                          : "bg-black/30 text-white/80 border-white/10 hover:border-white/20"
                                      }`}
                                    >
                                      <span className="font-label-caps text-[9px] uppercase opacity-75">
                                        {item.day}
                                      </span>
                                      <span className="font-serif text-sm mt-0.5">
                                        {item.date}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Time Slots */}
                            <div className="space-y-2">
                              <label className="font-label-caps text-xs uppercase tracking-wider text-white/80 block">
                                Available Time Slots ({selectedDate})
                              </label>
                              <div className="flex flex-wrap gap-2">
                                {activeDateObj.slots.map((slot) => {
                                  const isSlotSelected = selectedSlot === slot;
                                  return (
                                    <button
                                      key={slot}
                                      type="button"
                                      onClick={() => setSelectedSlot(slot)}
                                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                                        isSlotSelected
                                          ? "bg-white text-[#161412] border-white font-semibold shadow-sm"
                                          : "bg-black/30 text-white/80 border-white/10 hover:border-white/20"
                                      }`}
                                    >
                                      {slot}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Patron Coordinates Inputs */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                              <input
                                type="text"
                                placeholder="Your Full Name *"
                                value={patronName}
                                onChange={(e) => setPatronName(e.target.value)}
                                className="w-full bg-black/40 border border-white/20 rounded-xl px-3.5 py-2.5 text-white font-sans text-xs focus:outline-none focus:border-white transition-colors placeholder:text-white/40"
                              />
                              <input
                                type="email"
                                placeholder="Your Email Address *"
                                value={patronEmail}
                                onChange={(e) => setPatronEmail(e.target.value)}
                                className="w-full bg-black/40 border border-white/20 rounded-xl px-3.5 py-2.5 text-white font-sans text-xs focus:outline-none focus:border-white transition-colors placeholder:text-white/40"
                              />
                              <input
                                type="tel"
                                placeholder="WhatsApp or Phone *"
                                value={patronPhone}
                                onChange={(e) => setPatronPhone(e.target.value)}
                                className="w-full bg-black/40 border border-white/20 rounded-xl px-3.5 py-2.5 text-white font-sans text-xs focus:outline-none focus:border-white transition-colors placeholder:text-white/40"
                              />
                              <input
                                type="text"
                                placeholder="Residence City (e.g. London, NY)"
                                value={patronCity}
                                onChange={(e) => setPatronCity(e.target.value)}
                                className="w-full bg-black/40 border border-white/20 rounded-xl px-3.5 py-2.5 text-white font-sans text-xs focus:outline-none focus:border-white transition-colors placeholder:text-white/40"
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="px-6 py-3 rounded-full text-white/75 font-label-caps text-xs uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
                            >
                              ← Back
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="px-8 py-3.5 rounded-full bg-white text-[#161412] font-label-caps text-xs uppercase tracking-wider hover:bg-stone-100 font-semibold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>Confirm Private Consultation</span>
                              <span className="material-symbols-outlined text-[16px]">
                                check_circle
                              </span>
                            </button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: ATELIER EXPERIENCE STANDARDS & POLICIES        */}
        {/* ========================================================= */}
        <section className="w-full bg-surface-container-high py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-t border-outline-variant/20">
          <div className="w-full space-y-12">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
              <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-secondary">
                Atelier Pledges
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal">
                Experience Standards &amp; Policies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
              {ATELIER_POLICIES.map((policy, idx) => (
                <div
                  key={idx}
                  className="bg-surface rounded-3xl p-8 border border-outline-variant/40 flex flex-col space-y-4 shadow-xs hover:shadow-lg transition-all hover:border-black/20"
                >
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[24px]">
                      {policy.icon}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-on-surface font-medium">
                    {policy.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                    {policy.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: STUDIO COORDINATES & DIRECT CONCIERGE CARD     */}
        {/* Same background color as Experience Standards & Policies  */}
        {/* ========================================================= */}
        <section className="w-full bg-surface-container-high pb-16 sm:pb-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 overflow-hidden">
          <div className="w-full bg-[#161412] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-label-caps text-xs uppercase tracking-widest text-white/70">
                Direct Atelier Concierge
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                Require Immediate or Confidential Assistance?
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-xl">
                Our private client manager is on hand via direct WhatsApp concierge to discuss high-priority dates, red-carpet urgency, or tailored travel arrangements.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/447911123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-stormy-teal text-white font-label-caps text-xs uppercase tracking-wider hover:brightness-110 font-semibold transition-all inline-flex items-center gap-2.5 shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    chat
                  </span>
                  <span>Direct WhatsApp Line</span>
                </a>
                <Link
                  href="/bespoke"
                  className="px-7 py-3.5 rounded-full bg-white/10 text-white font-label-caps text-xs uppercase tracking-wider hover:bg-white/15 transition-all border border-white/20"
                >
                  Explore Bespoke Journey →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-[#1E1C1A] border border-white/10 text-xs font-sans text-white/75">
              <div className="space-y-2">
                <h4 className="font-label-caps text-xs uppercase text-white font-semibold tracking-wider">
                  Mayfair Salon
                </h4>
                <p className="leading-relaxed">
                  14 Savile Row<br />
                  Mayfair, London W1S 3JN<br />
                  United Kingdom
                </p>
                <p className="text-white/60 pt-1 font-mono text-[11px]">
                  Tue–Sat: By Private Appt
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-label-caps text-xs uppercase text-white font-semibold tracking-wider">
                  Paris Salon
                </h4>
                <p className="leading-relaxed">
                  28 Rue du Fbg Saint-Honoré<br />
                  75008 Paris<br />
                  France
                </p>
                <p className="text-white/60 pt-1 font-mono text-[11px]">
                  Mon–Fri: By Private Appt
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
