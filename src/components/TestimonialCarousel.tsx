"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ClientReview } from "@/data/mockData";

interface TestimonialCarouselProps {
  reviews: ClientReview[];
}

export default function TestimonialCarousel({ reviews }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPaused, setIsPaused] = useState(false);

  const total = reviews.length;

  // Auto-advance every 6 seconds as requested
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const goTo = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    // Calculate shortest directional path
    const diff = (targetIndex - currentIndex + total) % total;
    const newDir = diff <= total / 2 ? 1 : -1;
    setDirection(newDir);
    setCurrentIndex(targetIndex);
  };

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Safe cyclic indices for the 4 flanking capsule cards
  const left2Index = (currentIndex - 2 + total) % total;
  const left1Index = (currentIndex - 1 + total) % total;
  const right1Index = (currentIndex + 1) % total;
  const right2Index = (currentIndex + 2) % total;

  const currentReview = reviews[currentIndex];
  const left2Review = reviews[left2Index];
  const left1Review = reviews[left1Index];
  const right1Review = reviews[right1Index];
  const right2Review = reviews[right2Index];

  // Animation variants for the center card content
  const cardVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <div
      className="w-full flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ========================================================= */}
      {/* 5-CARD HORIZONTAL CONNECTED WING CAROUSEL */}
      {/* ========================================================= */}
      <div className="w-full flex items-center justify-center gap-1.5 sm:gap-2.5 xl:gap-3.5 py-4">
        {/* Left -2 Flanking Card (Smallest — Teal Card Shell with Visible Padding) */}
        <button
          type="button"
          onClick={() => goTo(left2Index)}
          aria-label={`View testimonial by ${left2Review.name}`}
          className="hidden lg:flex shrink-0 w-16 xl:w-20 h-48 xl:h-56 rounded-[24px] xl:rounded-[28px] bg-stormy-teal p-2 xl:p-2.5 shadow-md border border-white/15 cursor-pointer transition-all duration-500 hover:scale-105 hover:brightness-110 opacity-80 relative group"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="w-full h-full rounded-[18px] xl:rounded-[22px] overflow-hidden bg-surface-container relative">
            <img
              src={left2Review.image}
              alt={left2Review.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
          </div>
        </button>

        {/* Connector Line: Left -2 to Left -1 */}
        <div className="hidden lg:flex items-center justify-center w-3 xl:w-5 h-[2px] bg-stormy-teal/40 relative">
          <span className="w-1.5 h-1.5 rounded-full bg-stormy-teal" />
        </div>

        {/* Left -1 Flanking Card (Medium — Teal Card Shell with Visible Padding) */}
        <button
          type="button"
          onClick={() => goTo(left1Index)}
          aria-label={`View testimonial by ${left1Review.name}`}
          className="hidden md:flex shrink-0 w-24 xl:w-28 h-64 xl:h-72 rounded-[28px] xl:rounded-[32px] bg-stormy-teal p-2.5 xl:p-3 shadow-md border border-white/15 cursor-pointer transition-all duration-500 hover:scale-105 hover:brightness-110 opacity-90 relative group"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="w-full h-full rounded-[20px] xl:rounded-[24px] overflow-hidden bg-surface-container relative">
            <img
              src={left1Review.image}
              alt={left1Review.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
          </div>
        </button>

        {/* Connector Line: Left -1 to Center */}
        <div className="hidden md:flex items-center justify-center w-3 xl:w-5 h-[2px] bg-stormy-teal/40 relative">
          <span className="w-1.5 h-1.5 rounded-full bg-stormy-teal" />
        </div>

        {/* ========================================================= */}
        {/* CENTER MAIN ACTIVE CARD (HERO TESTIMONIAL VIEW — BARBIE PINK) */}
        {/* ========================================================= */}
        <div
          className="relative w-full max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[56rem] bg-barbie-pink rounded-[28px] sm:rounded-[36px] shadow-[0_20px_50px_-15px_rgba(251,34,142,0.35)] border border-black/10 overflow-hidden min-h-[380px] sm:min-h-[420px] flex items-center"
          style={{ backgroundColor: "var(--color-barbie-pink)" }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentReview.id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-8 lg:p-10"
            >
              {/* Left Column: Metric & Testimonial Narrative */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
                {/* Punchy Metric / Outcome Headline */}
                <div className="space-y-2">
                  {currentReview.statHighlight && (
                    <span className="inline-block font-label-caps text-[10px] tracking-[0.2em] text-[#161412]/80 font-semibold uppercase">
                      {currentReview.statHighlight}
                    </span>
                  )}
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[28px] xl:text-[32px] text-[#161412] font-semibold leading-tight">
                    {currentReview.headline}
                  </h3>
                </div>

                {/* Quotation Body */}
                <p className="font-sans text-sm sm:text-base text-[#161412]/90 leading-relaxed font-light">
                  {currentReview.quote}
                </p>

                {/* Patron Attribution Block */}
                <div className="pt-2 border-t border-black/15 flex flex-col space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-stormy-teal text-white text-xs font-semibold px-2.5 py-0.5 rounded-md shadow-xs">
                      {currentReview.name}
                    </span>
                    {currentReview.role && (
                      <span className="text-xs text-[#161412]/85 font-medium">
                        · {currentReview.role}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#161412]/70 font-label-sm">
                    {currentReview.event}
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Portrait with Play / Monogram Node */}
              <div className="md:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-[22px] overflow-hidden bg-black/10 shadow-md group">
                  <img
                    src={currentReview.image}
                    alt={currentReview.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Center Play Button Node */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-stormy-teal text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <span className="material-symbols-outlined text-white text-[26px] translate-x-0.5">
                        play_arrow
                      </span>
                    </div>
                  </div>

                  {/* Bottom Ambient Scrim with Caption */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 sm:p-5 text-white flex flex-col justify-end">
                    <span className="font-serif text-sm sm:text-base font-medium leading-tight">
                      {currentReview.name} · {currentReview.garment}
                    </span>
                    <span className="text-[11px] text-white/80 font-sans tracking-wide">
                      {currentReview.location} Atelier Fitting
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Arrow Navigation Triggers */}
          <div className="flex md:hidden absolute inset-y-0 inset-x-2 items-center justify-between pointer-events-none">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous review"
              className="pointer-events-auto w-9 h-9 rounded-full bg-stormy-teal text-white shadow-md flex items-center justify-center hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next review"
              className="pointer-events-auto w-9 h-9 rounded-full bg-stormy-teal text-white shadow-md flex items-center justify-center hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Connector Line: Center to Right +1 */}
        <div className="hidden md:flex items-center justify-center w-3 xl:w-5 h-[2px] bg-stormy-teal/40 relative">
          <span className="w-1.5 h-1.5 rounded-full bg-stormy-teal" />
        </div>

        {/* Right +1 Flanking Card (Medium — Teal Card Shell with Visible Padding) */}
        <button
          type="button"
          onClick={() => goTo(right1Index)}
          aria-label={`View testimonial by ${right1Review.name}`}
          className="hidden md:flex shrink-0 w-24 xl:w-28 h-64 xl:h-72 rounded-[28px] xl:rounded-[32px] bg-stormy-teal p-2.5 xl:p-3 shadow-md border border-white/15 cursor-pointer transition-all duration-500 hover:scale-105 hover:brightness-110 opacity-90 relative group"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="w-full h-full rounded-[20px] xl:rounded-[24px] overflow-hidden bg-surface-container relative">
            <img
              src={right1Review.image}
              alt={right1Review.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
          </div>
        </button>

        {/* Connector Line: Right +1 to Right +2 */}
        <div className="hidden lg:flex items-center justify-center w-3 xl:w-5 h-[2px] bg-stormy-teal/40 relative">
          <span className="w-1.5 h-1.5 rounded-full bg-stormy-teal" />
        </div>

        {/* Right +2 Flanking Card (Smallest — Teal Card Shell with Visible Padding) */}
        <button
          type="button"
          onClick={() => goTo(right2Index)}
          aria-label={`View testimonial by ${right2Review.name}`}
          className="hidden lg:flex shrink-0 w-16 xl:w-20 h-48 xl:h-56 rounded-[24px] xl:rounded-[28px] bg-stormy-teal p-2 xl:p-2.5 shadow-md border border-white/15 cursor-pointer transition-all duration-500 hover:scale-105 hover:brightness-110 opacity-80 relative group"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="w-full h-full rounded-[18px] xl:rounded-[22px] overflow-hidden bg-surface-container relative">
            <img
              src={right2Review.image}
              alt={right2Review.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
          </div>
        </button>
      </div>

      {/* ========================================================= */}
      {/* PAGINATION INDICATOR PILLS & DOTS */}
      {/* ========================================================= */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {reviews.map((review, idx) => (
          <button
            key={review.id}
            type="button"
            onClick={() => goTo(idx)}
            aria-label={`Go to ${review.name}'s review`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? "w-8 bg-barbie-pink"
                : "w-2 bg-stormy-teal/40 hover:bg-stormy-teal"
            }`}
            style={
              idx === currentIndex
                ? { backgroundColor: "var(--color-barbie-pink)" }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}

