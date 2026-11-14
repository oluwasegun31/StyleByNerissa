"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArchiveIcon, ArrowRight01Icon, CalendarCheckIn01Icon, Chatting01Icon, CheckIcon, CheckmarkBadge01Icon, CheckmarkCircle01Icon, HeartIcon, PartyIcon, Settings02Icon, Suit01Icon } from "@hugeicons/core-free-icons";
import {
  BOOKING_FORMATS,
  BOOKING_CATEGORIES,
  BOOKING_DATES,
  ATELIER_POLICIES,
} from "@/data/mockData";
import AnalogGrainBackground from "@/components/AnalogGrainBackground";

const categoryIcons: Record<string, typeof HeartIcon> = {
  favorite: HeartIcon,
  celebration: PartyIcon,
  styler: Suit01Icon,
  history_edu: ArchiveIcon,
};

const policyIcons: Record<string, typeof HeartIcon> = {
  verified: CheckmarkBadge01Icon,
  event_available: CalendarCheckIn01Icon,
  tune: Settings02Icon,
};

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
    <div className="bg-[#f4ead5] text-[#1e3b2f] min-h-screen flex flex-col font-body-md selection:bg-[#ff3ea5] selection:text-white">
      <main className="w-full">
        {/* ========================================================= */}
        {/* SECTION 1: EDITORIAL MASTHEAD & BOOKING OVERVIEW           */}
        {/* ========================================================= */}
        <section
          className="relative w-full min-h-[68vh] bg-[#f4ead5] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 pt-32 sm:pt-40 pb-16 sm:pb-24 flex items-center justify-center text-center overflow-hidden"
          style={{ backgroundColor: "var(--color-butter-cream)" }}
        >
          {/* Static Analog Film Grain Background (Exact grainy feel, no moving black gradient) */}
          <AnalogGrainBackground variant="cream" id="grain-booking-hero" />

          <div className="relative z-10 w-full max-w-5xl mx-auto space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-[6rem] text-[#1e3b2f] leading-[1.08]"
            >
              Reserve Your Private Consultation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-sm sm:text-base lg:text-lg text-[#1e3b2f]/75 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Begin in our London or Paris salon, or meet us through the Global Virtual Atelier. Tell us what you envision and we will shape the fitting around you.
            </motion.p>
            <a href="#consultation" className="inline-flex items-center gap-3 rounded-full bg-[#1e3b2f] text-[#f4ead5] font-label-caps text-xs px-8 py-4 hover:bg-[#274b3c] transition-colors">
              Begin Your Consultation
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.7} aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: MULTI-STEP INTERACTIVE INTAKE FLOW             */}
        {/* HAUTE COUTURE ATELIER LEDGER BOOK SPREAD (3D PAGE FLIP)    */}
        {/* ========================================================= */}
        <section
          id="consultation"
          className="relative w-full bg-[#1e3b2f] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 text-[#f4ead5] overflow-hidden scroll-mt-20"
          style={{ backgroundColor: "var(--color-forest-green)" }}
        >
          {/* Static Analog Film Grain Background */}
          <AnalogGrainBackground variant="green" id="grain-booking-ledger" />

          <div className="relative z-10 w-full flex flex-col gap-10 sm:gap-14">
            {/* Stepper Progress Bar */}
            <div className="w-full flex items-center justify-center">
              <div className="flex items-center gap-2 sm:gap-3 p-1.5 rounded-full bg-[#f4ead5]/10 border border-[#f4ead5]/20 overflow-x-auto max-w-full">
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
                          ? "bg-[#f4ead5] text-[#1e3b2f] font-semibold"
                          : isCompleted
                            ? "bg-[#f4ead5]/15 text-[#f4ead5] hover:bg-[#f4ead5]/20"
                            : "text-[#f4ead5]/70 hover:text-[#f4ead5]"
                      }`}
                    >
                      <span>{s.label}</span>
                      {isCompleted && (
                        <HugeiconsIcon icon={CheckIcon} size={13} strokeWidth={1.7} className="ml-1.5 translate-y-0.5" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Two-page consultation folio */}
            <div className="w-full max-w-7xl mx-auto bg-[#fffdf9] border border-[#f4ead5]/25 relative p-2 sm:p-3 [perspective:2200px]">
              <div className="hidden lg:block absolute inset-y-3 left-1/2 -translate-x-1/2 w-px bg-[#1e3b2f]/15 pointer-events-none z-30" />

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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1e3b2f] text-[#f4ead5] flex items-center justify-center">
                      <HugeiconsIcon icon={CheckmarkBadge01Icon} size={36} strokeWidth={1.7} aria-hidden="true" />
                    </div>

                    <div className="space-y-2">
                      <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-[#1e3b2f]/70">
                        Reservation Request Confirmed
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1e3b2f] font-normal">
                        Your Salon Suite Awaits
                      </h2>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-[#1e3b2f]/80 font-light leading-relaxed">
                      Thank you, <strong className="text-[#1e3b2f] font-medium">{patronName || "esteemed patron"}</strong>. We have reserved your appointment on <strong className="text-[#1e3b2f] font-medium">{selectedDate}</strong> at <strong className="text-[#1e3b2f] font-medium">{selectedSlot}</strong>.
                    </p>

                    <div className="p-6 rounded-none bg-[#f8f4eb] border border-[#1e3b2f]/10 text-left w-full space-y-3 font-body-sm text-xs text-[#1e3b2f]/80">
                      <div className="flex justify-between border-b border-[#1e3b2f]/10 pb-2">
                        <span className="font-label-caps uppercase text-[#1e3b2f]/60">Atelier Ref:</span>
                        <span className="font-sans text-[#1e3b2f] font-semibold">SBN-2026-FITTING</span>
                      </div>
                      <div className="flex justify-between border-b border-[#1e3b2f]/10 pb-2">
                        <span className="font-label-caps uppercase text-[#1e3b2f]/60">Format:</span>
                        <span className="text-[#1e3b2f]">{selectedFormat === "in-studio" ? "In-Studio Salon Suite (London/Paris)" : "Global Virtual Atelier"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-label-caps uppercase text-[#1e3b2f]/60">Concierge Notice:</span>
                        <span className="text-[#1e3b2f]">Full dossier sent to {patronEmail || "your email"}</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4 justify-center">
                      <Link
                        href="/collections"
                        className="px-8 py-3.5 rounded-full bg-[#1e3b2f] text-[#f4ead5] font-label-caps text-xs uppercase tracking-wider hover:bg-[#274b3c] font-semibold transition-all "
                      >
                        Explore Current Silhouettes →
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setCurrentStep(1);
                        }}
                        className="px-7 py-3.5 rounded-full bg-[#1e3b2f]/[0.07] text-[#1e3b2f] font-label-caps text-xs uppercase tracking-wider hover:bg-[#1e3b2f]/15 transition-all border border-[#1e3b2f]/15 cursor-pointer"
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
                      className="w-full bg-[#fffdf9] text-[#1e3b2f] p-6 sm:p-8 lg:p-10 border border-[#1e3b2f]/10 lg:border-r-0 flex flex-col justify-between space-y-6 relative overflow-hidden [transform-style:preserve-3d]"
                    >
                      {/* Top Folio Metadata */}
                      <div className="flex items-center justify-between border-b border-[#1e3b2f]/10 pb-4">
                        <span className="font-label-caps text-[10px] uppercase tracking-[0.25em] text-[#1e3b2f]/70">
                          Folio 0{currentStep} / 04 · Atelier Ledger
                        </span>
                        <span className="font-sans text-[10px] text-[#1e3b2f]/60 uppercase">
                          Savile Row / Paris Salons
                        </span>
                      </div>

                      {/* Step-Specific Left Page Brief */}
                      {currentStep === 1 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="space-y-2">
                            <span className="font-label-caps text-xs uppercase tracking-widest text-[#1e3b2f]/70">
                              Consultation Mode
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1e3b2f] font-normal leading-tight">
                              The Fitting Encounter
                            </h2>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-[#1e3b2f]/80 font-light leading-relaxed">
                            Every Nerissa silhouette is sculpted against true anatomical posture. Choose between an intimate consultation in our private Mayfair or Paris suites, or connect from anywhere globally via our bespoke Toile Box kit.
                          </p>
                          <div className="p-4 rounded-none bg-[#fffdf9] border border-[#1e3b2f]/10 space-y-2.5 text-xs text-[#1e3b2f]/75 font-sans">
                            <div className="flex items-center gap-2 text-[#1e3b2f] font-semibold font-label-caps text-[11px] uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              <span>Atelier Assurance</span>
                            </div>
                            <p className="leading-relaxed">
                              100% of your initial consultation fee is credited directly toward your final couture commission invoice.
                            </p>
                          </div>
                          <blockquote className="font-serif italic text-xs sm:text-sm text-[#1e3b2f]/70 border-l border-[#1e3b2f]/20 pl-4 py-1">
                            &ldquo;A bespoke garment does not merely fit; it aligns with the patron&apos;s posture in motion.&rdquo;
                          </blockquote>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="space-y-2">
                            <span className="font-label-caps text-xs uppercase tracking-widest text-[#1e3b2f]/70">
                              Silhouette Archetype
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1e3b2f] font-normal leading-tight">
                              Commission Category
                            </h2>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-[#1e3b2f]/80 font-light leading-relaxed">
                            Tell us the nature of the piece you envision. Each archetype requires specialized internal architecture—from floating horsehair chest canvas to hand-boned internal French corsetry.
                          </p>
                          <div className="p-4 rounded-none bg-[#fffdf9] border border-[#1e3b2f]/10 space-y-2 text-xs text-[#1e3b2f]/80 font-sans">
                            <div className="flex justify-between border-b border-[#1e3b2f]/10 pb-2">
                              <span className="font-label-caps uppercase text-[#1e3b2f]/60">Selected Mode:</span>
                              <span className="text-[#1e3b2f] font-medium">{selectedFormat === "in-studio" ? "Flagship In-Studio" : "Global Virtual Atelier"}</span>
                            </div>
                            <div className="flex justify-between pt-1">
                              <span className="font-label-caps uppercase text-[#1e3b2f]/60">Toile Protocol:</span>
                              <span className="text-[#1e3b2f] font-medium">Bespoke Calico Trial Included</span>
                            </div>
                          </div>
                          <blockquote className="font-serif italic text-xs sm:text-sm text-[#1e3b2f]/70 border-l border-[#1e3b2f]/20 pl-4 py-1">
                            &ldquo;Internal corsetry should support the body with quiet weightlessness, never restrict it.&rdquo;
                          </blockquote>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="space-y-2">
                            <span className="font-label-caps text-xs uppercase tracking-widest text-[#1e3b2f]/70">
                              Runway &amp; Calendar
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1e3b2f] font-normal leading-tight">
                              Milestone &amp; Vision
                            </h2>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-[#1e3b2f]/80 font-light leading-relaxed">
                            Couture creation is a synchronized dialogue between Italian silk mills in Lake Como and hand-basting in our Mayfair atelier. Please articulate your timeline and aesthetic intent.
                          </p>
                          <div className="p-4 rounded-none bg-[#fffdf9] border border-[#1e3b2f]/10 space-y-2 text-xs text-[#1e3b2f]/80 font-sans">
                            <div className="flex justify-between border-b border-[#1e3b2f]/10 pb-2">
                              <span className="font-label-caps uppercase text-[#1e3b2f]/60">Archetype:</span>
                              <span className="text-[#1e3b2f] font-medium uppercase font-sans">{selectedCategory}</span>
                            </div>
                            <div className="flex justify-between pt-1">
                              <span className="font-label-caps uppercase text-[#1e3b2f]/60">Standard Runway:</span>
                              <span className="text-[#1e3b2f] font-medium">6–8 Weeks from 1st Fitting</span>
                            </div>
                          </div>
                          <blockquote className="font-serif italic text-xs sm:text-sm text-[#1e3b2f]/70 border-l border-[#1e3b2f]/20 pl-4 py-1">
                            &ldquo;Mulberry silk crepe requires 48 hours of gravity hang before hand-felling the hemline.&rdquo;
                          </blockquote>
                        </div>
                      )}

                      {currentStep === 4 && (
                        <div className="space-y-6 my-auto py-2">
                          <div className="space-y-2">
                            <span className="font-label-caps text-xs uppercase tracking-widest text-[#1e3b2f]/70">
                              Final Itinerary
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1e3b2f] font-normal leading-tight">
                              Appointment Dossier
                            </h2>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-[#1e3b2f]/80 font-light leading-relaxed">
                            Review your selected itinerary. Upon submission, a private concierge confirmation with salon directions and preliminary fabric envelope tracking will be dispatched.
                          </p>
                          <div className="p-4 rounded-none bg-[#fffdf9] border border-[#1e3b2f]/10 space-y-2.5 text-xs text-[#1e3b2f]/80 font-sans">
                            <div className="flex justify-between border-b border-[#1e3b2f]/10 pb-1.5">
                              <span className="font-label-caps uppercase text-[#1e3b2f]/60">Salon Mode:</span>
                              <span className="text-[#1e3b2f] font-medium">{selectedFormat === "in-studio" ? "London / Paris Studio" : "Global Virtual Atelier"}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#1e3b2f]/10 pb-1.5">
                              <span className="font-label-caps uppercase text-[#1e3b2f]/60">Category &amp; Tier:</span>
                              <span className="text-[#1e3b2f] font-medium uppercase">{selectedCategory} · {selectedTier}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#1e3b2f]/10 pb-1.5">
                              <span className="font-label-caps uppercase text-[#1e3b2f]/60">Reserved Slot:</span>
                              <span className="text-[#1e3b2f] font-semibold font-sans">{selectedDate} @ {selectedSlot}</span>
                            </div>
                            <div className="flex justify-between pt-1">
                              <span className="font-label-caps uppercase text-[#1e3b2f]/60">Privacy:</span>
                              <span className="text-[#1e3b2f] font-medium">Confidential Salon Suite</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Bottom Page Seal */}
                      <div className="pt-4 border-t border-[#1e3b2f]/10 flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-[#1e3b2f]/50">
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
                      className="w-full bg-[#f8f4eb] text-[#1e3b2f] p-6 sm:p-8 lg:p-10 border border-[#1e3b2f]/10 lg:border-l-0 flex flex-col justify-between space-y-6 relative overflow-hidden [transform-style:preserve-3d]"
                    >
                      {/* Top Folio Indicator */}
                      <div className="flex items-center justify-between border-b border-[#1e3b2f]/10 pb-4">
                        <span className="font-label-caps text-[10px] uppercase tracking-[0.25em] text-[#1e3b2f]/70">
                          Input Page · Step 0{currentStep}
                        </span>
                        <span className="font-sans text-[10px] text-[#1e3b2f]/60 uppercase">
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
                                <button
                                  key={fmt.id}
                                  type="button"
                                  onClick={() => setSelectedFormat(fmt.id)}
                                  aria-pressed={isChosen}
                                  className={`w-full text-left rounded-none p-5 sm:p-6 cursor-pointer transition-all duration-300 border flex flex-col justify-between space-y-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3b2f] ${
                                    isChosen
                                      ? "bg-[#fffdf9] border-[#1e3b2f]"
                                      : "bg-[#fffdf9] border-[#1e3b2f]/10 hover:border-[#1e3b2f]/40"
                                  }`}
                                >
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                      <span className="font-label-caps text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#1e3b2f]/[0.07] text-[#1e3b2f] border border-[#1e3b2f]/15">
                                        {fmt.tag}
                                      </span>
                                      <div
                                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                                          isChosen
                                            ? "bg-[#1e3b2f] text-[#f4ead5] border-[#1e3b2f]"
                                            : "border-[#1e3b2f]/30 text-transparent"
                                        }`}
                                      >
                                        <HugeiconsIcon icon={CheckIcon} size={16} strokeWidth={1.7} aria-hidden="true" />
                                      </div>
                                    </div>

                                    <h3 className="font-serif text-xl sm:text-2xl text-[#1e3b2f] font-medium">
                                      {fmt.title}
                                    </h3>
                                    <p className="font-sans text-xs sm:text-sm text-[#1e3b2f]/75 font-light leading-relaxed">
                                      {fmt.description}
                                    </p>
                                  </div>

                                  <div className="pt-3 border-t border-[#1e3b2f]/10 flex items-center justify-between text-xs font-label-caps uppercase tracking-wider">
                                    <div>
                                      <span className="text-[#1e3b2f] font-semibold text-sm block">
                                        {fmt.fee}
                                      </span>
                                      <span className="text-[#1e3b2f]/60 text-[10px]">
                                        {fmt.feeNote}
                                      </span>
                                    </div>
                                    <span className="text-[#1e3b2f]/80">{fmt.location}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          <div className="flex justify-end pt-4 border-t border-[#1e3b2f]/10">
                            <button
                              type="button"
                              onClick={handleNext}
                              className="px-8 py-3.5 rounded-full bg-[#1e3b2f] text-[#f4ead5] font-label-caps text-xs uppercase tracking-wider hover:bg-[#274b3c] font-semibold transition-all  inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>Continue to Commission Category</span>
                              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.7} aria-hidden="true" />
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
                                <button
                                  key={cat.id}
                                  type="button"
                                  onClick={() => setSelectedCategory(cat.id)}
                                  aria-pressed={isChosen}
                                  className={`w-full text-left rounded-none p-4 sm:p-5 cursor-pointer transition-all duration-300 border flex flex-col justify-between space-y-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3b2f] ${
                                    isChosen
                                      ? "bg-[#fffdf9] border-[#1e3b2f]"
                                      : "bg-[#fffdf9] border-[#1e3b2f]/10 hover:border-[#1e3b2f]/40"
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div
                                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                        isChosen
                                          ? "bg-[#1e3b2f] text-[#f4ead5]"
                                          : "bg-[#1e3b2f]/[0.07] text-[#1e3b2f]"
                                      }`}
                                    >
                                      <HugeiconsIcon icon={categoryIcons[cat.icon] ?? HeartIcon} size={18} strokeWidth={1.7} aria-hidden="true" />
                                    </div>
                                    <div
                                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                                        isChosen
                                          ? "bg-[#1e3b2f] text-[#f4ead5] border-[#1e3b2f]"
                                          : "border-[#1e3b2f]/30 text-transparent"
                                      }`}
                                    >
                                      <HugeiconsIcon icon={CheckIcon} size={14} strokeWidth={1.7} aria-hidden="true" />
                                    </div>
                                  </div>

                                  <div className="space-y-1">
                                    <div className="flex items-center justify-between">
                                      <h3 className="font-serif text-base sm:text-lg text-[#1e3b2f] font-medium">
                                        {cat.title}
                                      </h3>
                                    </div>
                                    <span className="font-sans text-[10px] text-[#1e3b2f]/60 uppercase block">
                                      {cat.subtitle}
                                    </span>
                                    <p className="font-sans text-xs text-[#1e3b2f]/75 font-light leading-relaxed line-clamp-2 pt-1">
                                      {cat.desc}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-[#1e3b2f]/10">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="px-6 py-3 rounded-full text-[#1e3b2f]/75 font-label-caps text-xs uppercase tracking-wider hover:text-[#1e3b2f] transition-colors cursor-pointer"
                            >
                              ← Back
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="px-8 py-3.5 rounded-full bg-[#1e3b2f] text-[#f4ead5] font-label-caps text-xs uppercase tracking-wider hover:bg-[#274b3c] font-semibold transition-all  inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>Continue to Vision &amp; Notes</span>
                              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.7} aria-hidden="true" />
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
                              <label className="font-label-caps text-xs uppercase tracking-wider text-[#1e3b2f]/80 block">
                                Target Event Date
                              </label>
                              <input
                                type="date"
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                                className="w-full bg-[#fffdf9] border border-[#1e3b2f]/20 rounded-none px-4 py-3 text-[#1e3b2f] font-sans text-sm focus:outline-none focus:border-[#1e3b2f] transition-colors"
                              />
                              <span className="font-sans text-[11px] text-[#1e3b2f]/60 block">
                                Standard couture turnaround: 6–8 weeks. Express slots available on request.
                              </span>
                            </div>

                            {/* Commission Investment Tier */}
                            <div className="space-y-2">
                              <label className="font-label-caps text-xs uppercase tracking-wider text-[#1e3b2f]/80 block">
                                Anticipated Commission Tier
                              </label>
                              <select
                                value={selectedTier}
                                onChange={(e) => setSelectedTier(e.target.value)}
                                className="w-full bg-[#fffdf9] border border-[#1e3b2f]/20 rounded-none px-4 py-3 text-[#1e3b2f] font-sans text-sm focus:outline-none focus:border-[#1e3b2f] transition-colors cursor-pointer"
                              >
                                <option value="separates" className="bg-[#f8f4eb] text-[#1e3b2f]">
                                  Tailored Separates ($2,400 – $4,500 USD)
                                </option>
                                <option value="gala" className="bg-[#f8f4eb] text-[#1e3b2f]">
                                  Gala &amp; Red Carpet Couture ($4,800 – $7,500 USD)
                                </option>
                                <option value="bridal" className="bg-[#f8f4eb] text-[#1e3b2f]">
                                  Bridal &amp; Ceremonial Masterpiece ($7,500+ USD)
                                </option>
                              </select>
                            </div>

                            {/* Silhouette Notes */}
                            <div className="space-y-2">
                              <label className="font-label-caps text-xs uppercase tracking-wider text-[#1e3b2f]/80 block">
                                Silhouette Vision or Aesthetic Notes
                              </label>
                              <textarea
                                rows={3}
                                value={silhouetteNotes}
                                onChange={(e) => setSilhouetteNotes(e.target.value)}
                                placeholder="Describe desired drape, volume, preferred silks (Mulberry, crepe, organza), or special requirements..."
                                className="w-full bg-[#fffdf9] border border-[#1e3b2f]/20 rounded-none p-3 text-[#1e3b2f] font-sans text-xs sm:text-sm focus:outline-none focus:border-[#1e3b2f] transition-colors placeholder:text-[#1e3b2f]/40 leading-relaxed"
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-[#1e3b2f]/10">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="px-6 py-3 rounded-full text-[#1e3b2f]/75 font-label-caps text-xs uppercase tracking-wider hover:text-[#1e3b2f] transition-colors cursor-pointer"
                            >
                              ← Back
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="px-8 py-3.5 rounded-full bg-[#1e3b2f] text-[#f4ead5] font-label-caps text-xs uppercase tracking-wider hover:bg-[#274b3c] font-semibold transition-all  inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>Continue to Slot &amp; Details</span>
                              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.7} aria-hidden="true" />
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
                              <label className="font-label-caps text-xs uppercase tracking-wider text-[#1e3b2f]/80 block">
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
                                      className={`p-2 rounded-none border flex flex-col items-center justify-center transition-all cursor-pointer ${
                                        isDateSelected
                                          ? "bg-[#1e3b2f] text-[#f4ead5] border-[#1e3b2f]  font-semibold"
                                          : "bg-[#fffdf9] text-[#1e3b2f]/80 border-[#1e3b2f]/10 hover:border-[#1e3b2f]/20"
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
                              <label className="font-label-caps text-xs uppercase tracking-wider text-[#1e3b2f]/80 block">
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
                                      className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer border ${
                                        isSlotSelected
                                          ? "bg-[#1e3b2f] text-[#f4ead5] border-[#1e3b2f] font-semibold "
                                          : "bg-[#fffdf9] text-[#1e3b2f]/80 border-[#1e3b2f]/10 hover:border-[#1e3b2f]/20"
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
                                className="w-full bg-[#fffdf9] border border-[#1e3b2f]/20 rounded-none px-3.5 py-2.5 text-[#1e3b2f] font-sans text-xs focus:outline-none focus:border-[#1e3b2f] transition-colors placeholder:text-[#1e3b2f]/40"
                              />
                              <input
                                type="email"
                                placeholder="Your Email Address *"
                                value={patronEmail}
                                onChange={(e) => setPatronEmail(e.target.value)}
                                className="w-full bg-[#fffdf9] border border-[#1e3b2f]/20 rounded-none px-3.5 py-2.5 text-[#1e3b2f] font-sans text-xs focus:outline-none focus:border-[#1e3b2f] transition-colors placeholder:text-[#1e3b2f]/40"
                              />
                              <input
                                type="tel"
                                placeholder="WhatsApp or Phone *"
                                value={patronPhone}
                                onChange={(e) => setPatronPhone(e.target.value)}
                                className="w-full bg-[#fffdf9] border border-[#1e3b2f]/20 rounded-none px-3.5 py-2.5 text-[#1e3b2f] font-sans text-xs focus:outline-none focus:border-[#1e3b2f] transition-colors placeholder:text-[#1e3b2f]/40"
                              />
                              <input
                                type="text"
                                placeholder="Residence City (e.g. London, NY)"
                                value={patronCity}
                                onChange={(e) => setPatronCity(e.target.value)}
                                className="w-full bg-[#fffdf9] border border-[#1e3b2f]/20 rounded-none px-3.5 py-2.5 text-[#1e3b2f] font-sans text-xs focus:outline-none focus:border-[#1e3b2f] transition-colors placeholder:text-[#1e3b2f]/40"
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-[#1e3b2f]/10">
                            <button
                              type="button"
                              onClick={handleBack}
                              className="px-6 py-3 rounded-full text-[#1e3b2f]/75 font-label-caps text-xs uppercase tracking-wider hover:text-[#1e3b2f] transition-colors cursor-pointer"
                            >
                              ← Back
                            </button>
                            <button
                              type="button"
                              onClick={handleNext}
                              className="px-8 py-3.5 rounded-full bg-[#1e3b2f] text-[#f4ead5] font-label-caps text-xs uppercase tracking-wider hover:bg-[#274b3c] font-semibold transition-all  inline-flex items-center gap-2 cursor-pointer"
                            >
                              <span>Confirm Private Consultation</span>
                              <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} strokeWidth={1.7} aria-hidden="true" />
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
        <section className="relative w-full bg-[#f4ead5] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 overflow-hidden" style={{ backgroundColor: "var(--color-butter-cream)" }}>
          {/* Static Analog Film Grain Background for Light Canvas */}
          <AnalogGrainBackground variant="cream" id="grain-booking-policies" />

          <div className="relative z-10 w-full space-y-12">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1e3b2f] font-normal">
                Before Your Fitting
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 w-full">
              {ATELIER_POLICIES.map((policy, idx) => (
                <div
                  key={idx}
                  className="bg-[#fffdf9] p-8 border border-[#1e3b2f]/10 flex flex-col space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1e3b2f]/[0.07] flex items-center justify-center text-[#1e3b2f]">
                    <HugeiconsIcon icon={policyIcons[policy.icon] ?? CheckmarkBadge01Icon} size={24} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#1e3b2f] font-medium">
                    {policy.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#1e3b2f]/75 font-light leading-relaxed">
                    {policy.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: STUDIO COORDINATES & DIRECT CONCIERGE CARD     */}
        {/* ========================================================= */}
        <section className="relative w-full bg-[#1e3b2f] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 overflow-hidden" style={{ backgroundColor: "var(--color-forest-green)" }}>
          <AnalogGrainBackground variant="green" id="grain-booking-concierge" />

          <div className="relative z-10 w-full text-[#f4ead5] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f4ead5] font-normal leading-tight">
                A More Personal Conversation
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#f4ead5]/80 font-light leading-relaxed max-w-xl">
                Speak with our concierge about your date, travel, or the piece you have in mind.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/447911123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-[#f4ead5] text-[#1e3b2f] font-label-caps text-xs uppercase tracking-wider hover:bg-[#fffdf9] font-semibold transition-colors inline-flex items-center gap-2.5"
                >
                  <HugeiconsIcon icon={Chatting01Icon} size={18} strokeWidth={1.7} aria-hidden="true" />
                  <span>Direct WhatsApp Line</span>
                </a>
                <Link
                  href="/bespoke"
                  className="px-7 py-3.5 rounded-full bg-[#f4ead5]/10 text-[#f4ead5] font-label-caps text-xs uppercase tracking-wider hover:bg-[#f4ead5]/15 transition-colors border border-[#f4ead5]/30"
                >
                  Explore Bespoke Journey →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-t lg:border-t-0 lg:border-l border-[#f4ead5]/25 lg:pl-10 text-sm font-sans text-[#f4ead5]/80">
              <div className="space-y-2">
                <h4 className="font-label-caps text-xs uppercase text-[#f4ead5] font-semibold tracking-wider">
                  Mayfair Salon
                </h4>
                <p className="leading-relaxed">
                  14 Savile Row<br />
                  Mayfair, London W1S 3JN<br />
                  United Kingdom
                </p>
                <p className="text-[#f4ead5]/65 pt-1 text-xs">
                  Tue–Sat: By Private Appt
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-label-caps text-xs uppercase text-[#f4ead5] font-semibold tracking-wider">
                  Paris Salon
                </h4>
                <p className="leading-relaxed">
                  28 Rue du Fbg Saint-Honoré<br />
                  75008 Paris<br />
                  France
                </p>
                <p className="text-[#f4ead5]/65 pt-1 text-xs">
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
