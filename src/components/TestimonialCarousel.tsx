"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
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
        {/* Left -2 Flanking Card (Smallest — Forest Green Shell) */}
        <button
          type="button"
          onClick={() => goTo(left2Index)}
          aria-label={`View testimonial by ${left2Review.name}`}
          className="hidden lg:flex shrink-0 w-16 xl:w-20 h-52 xl:h-60 rounded-none bg-[#1e3b2f] p-2 xl:p-2.5 shadow-md border border-[#1e3b2f]/20 cursor-pointer transition-all duration-500 hover:scale-105 hover:brightness-110 opacity-75 relative group"
        >
          <div className="w-full h-full rounded-none overflow-hidden bg-[#e8ddc7] relative">
            <img
              src={left2Review.image}
              alt={left2Review.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#1e3b2f]/20 group-hover:bg-transparent transition-colors" />
          </div>
        </button>

        {/* Connector Line: Left -2 to Left -1 */}
        <div className="hidden lg:flex items-center justify-center w-3 xl:w-5 h-[2px] bg-[#1e3b2f]/30 relative">
          <span className="w-1.5 h-1.5 rounded-none bg-[#1e3b2f]" />
        </div>

        {/* Left -1 Flanking Card (Medium — Forest Green Shell) */}
        <button
          type="button"
          onClick={() => goTo(left1Index)}
          aria-label={`View testimonial by ${left1Review.name}`}
          className="hidden md:flex shrink-0 w-24 xl:w-28 h-68 xl:h-76 rounded-none bg-[#1e3b2f] p-2.5 xl:p-3 shadow-md border border-[#1e3b2f]/20 cursor-pointer transition-all duration-500 hover:scale-105 hover:brightness-110 opacity-85 relative group"
        >
          <div className="w-full h-full rounded-none overflow-hidden bg-[#e8ddc7] relative">
            <img
              src={left1Review.image}
              alt={left1Review.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#1e3b2f]/20 group-hover:bg-transparent transition-colors" />
          </div>
        </button>

        {/* Connector Line: Left -1 to Center */}
        <div className="hidden md:flex items-center justify-center w-3 xl:w-5 h-[2px] bg-[#1e3b2f]/30 relative">
          <span className="w-1.5 h-1.5 rounded-none bg-[#1e3b2f]" />
        </div>

        {/* ========================================================= */}
        {/* CENTER MAIN ACTIVE CARD (MINIMALIST GALLERY LAYOUT)       */}
        {/* ========================================================= */}
        <div
          className="relative w-full max-w-full md:max-w-xl lg:max-w-2xl bg-[#fffdf9] rounded-none shadow-[0_18px_45px_rgba(30,59,47,0.10)] border border-[#1e3b2f]/12 overflow-hidden min-h-[480px] sm:min-h-[520px] flex items-stretch"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentReview.id}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="group w-full flex flex-col justify-between p-6 sm:p-8"
            >
              {/* Top Row: Minimalist Badge + Diagonal Arrow (↗) */}
              <div className="relative z-20 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#ff3ea5]/12 text-[#d42684] text-xs font-medium lowercase">
                  <svg
                    viewBox="0 0 12 12"
                    className="w-2.5 h-2.5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M6 0L7.4 4.6L12 6L7.4 7.4L6 12L4.6 7.4L0 6L4.6 4.6L6 0Z" />
                  </svg>
                  <span>{currentReview.statHighlight || currentReview.garment}</span>
                </span>

                <span className="text-[#1e3b2f]/75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <svg
                    viewBox="0 0 16 16"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path
                      d="M4.5 11.5L11.5 4.5M6 4.5h5.5V10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              {/* Center Minimalist Floating Portrait + Concise Quote */}
              <div className="relative z-10 my-auto w-full flex flex-col items-center justify-center py-6 gap-5">
                <div className="w-[155px] sm:w-[175px] aspect-[3/3.8] rounded-none overflow-hidden shadow-[0_14px_34px_rgba(30,59,47,0.10)] bg-[#f4ead5]">
                  <img
                    src={currentReview.image}
                    alt={currentReview.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-[#1e3b2f]/70 max-w-md text-center leading-relaxed line-clamp-2 px-2">
                  {currentReview.quote}
                </p>
              </div>

              {/* Bottom Minimalist Footer: Patron Name, Garment & Location Tag */}
              <div className="relative z-20 pt-4 flex items-end justify-between gap-4">
                <div className="space-y-1 text-left min-w-0">
                  <h3 className="font-sans text-[15px] sm:text-base font-medium text-[#1e3b2f] leading-snug lowercase truncate">
                    {currentReview.name}
                    {currentReview.role ? ` · ${currentReview.role}` : ""}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-[#1e3b2f]/45 leading-snug lowercase truncate">
                    {currentReview.garment} · {currentReview.event}
                  </p>
                </div>

                <span className="shrink-0 px-3.5 py-1.5 rounded-none bg-[#1e3b2f]/[0.06] text-[#1e3b2f]/80 font-sans text-xs sm:text-[13px] font-medium lowercase">
                  {currentReview.location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Arrow Navigation Triggers */}
          <div className="flex md:hidden absolute inset-y-0 inset-x-2 items-center justify-between pointer-events-none z-30">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous review"
              className="pointer-events-auto w-8 h-8 rounded-none bg-[#1e3b2f] text-[#f4ead5] shadow-md flex items-center justify-center hover:bg-[#ff3ea5] hover:text-white transition-all"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} size={18} strokeWidth={1.7} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next review"
              className="pointer-events-auto w-8 h-8 rounded-none bg-[#1e3b2f] text-[#f4ead5] shadow-md flex items-center justify-center hover:bg-[#ff3ea5] hover:text-white transition-all"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={1.7} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Connector Line: Center to Right +1 */}
        <div className="hidden md:flex items-center justify-center w-3 xl:w-5 h-[2px] bg-[#1e3b2f]/30 relative">
          <span className="w-1.5 h-1.5 rounded-none bg-[#1e3b2f]" />
        </div>

        {/* Right +1 Flanking Card (Medium — Forest Green Shell) */}
        <button
          type="button"
          onClick={() => goTo(right1Index)}
          aria-label={`View testimonial by ${right1Review.name}`}
          className="hidden md:flex shrink-0 w-24 xl:w-28 h-68 xl:h-76 rounded-none bg-[#1e3b2f] p-2.5 xl:p-3 shadow-md border border-[#1e3b2f]/20 cursor-pointer transition-all duration-500 hover:scale-105 hover:brightness-110 opacity-85 relative group"
        >
          <div className="w-full h-full rounded-none overflow-hidden bg-[#e8ddc7] relative">
            <img
              src={right1Review.image}
              alt={right1Review.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#1e3b2f]/20 group-hover:bg-transparent transition-colors" />
          </div>
        </button>

        {/* Connector Line: Right +1 to Right +2 */}
        <div className="hidden lg:flex items-center justify-center w-3 xl:w-5 h-[2px] bg-[#1e3b2f]/30 relative">
          <span className="w-1.5 h-1.5 rounded-none bg-[#1e3b2f]" />
        </div>

        {/* Right +2 Flanking Card (Smallest — Forest Green Shell) */}
        <button
          type="button"
          onClick={() => goTo(right2Index)}
          aria-label={`View testimonial by ${right2Review.name}`}
          className="hidden lg:flex shrink-0 w-16 xl:w-20 h-52 xl:h-60 rounded-none bg-[#1e3b2f] p-2 xl:p-2.5 shadow-md border border-[#1e3b2f]/20 cursor-pointer transition-all duration-500 hover:scale-105 hover:brightness-110 opacity-75 relative group"
        >
          <div className="w-full h-full rounded-none overflow-hidden bg-[#e8ddc7] relative">
            <img
              src={right2Review.image}
              alt={right2Review.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#1e3b2f]/20 group-hover:bg-transparent transition-colors" />
          </div>
        </button>
      </div>

      {/* ========================================================= */}
      {/* PAGINATION INDICATOR BARS */}
      {/* ========================================================= */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {reviews.map((review, idx) => (
          <button
            key={review.id}
            type="button"
            onClick={() => goTo(idx)}
            aria-label={`Go to ${review.name}'s review`}
            className={`h-2 rounded-none transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? "w-8 bg-[#ff3ea5]"
                : "w-2 bg-[#1e3b2f]/30 hover:bg-[#1e3b2f]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

