"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import AnalogGrainBackground from "@/components/AnalogGrainBackground";
import HeroZipper from "@/components/HeroZipper";

const TOTAL_RULER_TICKS = 61; // 0 to 60 (6 cm in millimeter subdivisions)

export default function HeroConceptGallery() {
  const [hoveredTick, setHoveredTick] = useState<number | null>(null);

  return (
    <section
      id="hero-concept-gallery"
      className="relative z-20 w-full min-h-dvh bg-[#f4ead5] border-b border-[#1e3b2f]/10 overflow-visible flex items-center justify-center py-24 sm:py-28"
      style={{ backgroundColor: "var(--color-butter-cream)" }}
    >
      {/* Butter Cream (#f4ead5) Analog Grain Surface */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnalogGrainBackground variant="cream" id="hero-cream-grain" />
      </div>

      {/* Oversized half-open zipper behind the copy (pull tab overflows into next section) */}
      <div className="absolute inset-0 z-[5] overflow-visible pointer-events-none">
        <HeroZipper />
      </div>

      {/* Far-Left Vertical Editorial Index (01 | 04) */}
      <div
        className="hidden lg:flex flex-col items-center gap-3 absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 z-20 select-none text-[#1e3b2f]/75"
        aria-hidden="true"
      >
        <span className="font-sans text-[11px] font-medium tracking-[0.18em]">
          01
        </span>
        <span className="w-px h-14 bg-[#1e3b2f]/35" />
        <span className="font-sans text-[11px] font-medium tracking-[0.18em] text-[#1e3b2f]/45">
          04
        </span>
      </div>

      {/* ========================================================= */}
      {/* RIGHT-HAND EDGE INTERACTIVE TAILOR'S RULER                */}
      {/* ========================================================= */}
      <div
        onMouseLeave={() => setHoveredTick(null)}
        className="hidden sm:flex flex-col justify-between items-end absolute right-0 top-20 bottom-6 w-44 z-30 select-none"
        aria-label="Interactive tailor's measuring ruler"
      >
        {Array.from({ length: TOTAL_RULER_TICKS }).map((_, idx) => {
          const isMajor = idx % 10 === 0;
          const isMedium = idx % 5 === 0 && !isMajor;

          // Base resting widths (in px) for major (cm), medium (0.5cm), and minor (mm) ticks
          const baseWidth = isMajor ? 52 : isMedium ? 34 : 20;

          // Calculate distance from hovered tick for the 3-before / 3-after falloff wave
          const dist =
            hoveredTick !== null ? Math.abs(idx - hoveredTick) : Infinity;

          let extraWidth = 0;
          if (dist === 0) {
            extraWidth = 80; // Center hovered line grows out the furthest
          } else if (dist === 1) {
            extraWidth = 54; // 1st neighbor before & after
          } else if (dist === 2) {
            extraWidth = 32; // 2nd neighbor before & after
          } else if (dist === 3) {
            extraWidth = 15; // 3rd neighbor before & after
          }

          const finalWidth = baseWidth + extraWidth;
          const isCenterHover = dist === 0;
          const isWaveNeighbor = dist > 0 && dist <= 3;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredTick(idx)}
              className="w-full flex-1 flex items-center justify-end cursor-crosshair group"
            >
              {/* Centimeter numeral on major ticks or active hover */}
              {isMajor && idx > 0 && idx < TOTAL_RULER_TICKS - 1 && (
                <span
                  className={`mr-2 font-sans text-[9px] tracking-[0.14em] transition-all duration-200 ${
                    isCenterHover
                      ? "text-[#ff3ea5] font-bold opacity-100 -translate-x-1"
                      : isWaveNeighbor
                        ? "text-[#1e3b2f] opacity-85"
                        : "text-[#1e3b2f]/45 opacity-75"
                  }`}
                >
                  {String(idx / 10).padStart(2, "0")}
                </span>
              )}

              {/* The Ruler Tick Line flush to the right screen edge */}
              <span
                style={{ width: `${finalWidth}px` }}
                className={`block transition-all duration-200 ease-out origin-right ${
                  isCenterHover
                    ? "h-[2px] bg-[#ff3ea5]"
                    : isWaveNeighbor
                      ? "h-[1.5px] bg-[#1e3b2f]/85"
                      : isMajor
                        ? "h-[1.5px] bg-[#1e3b2f]/55"
                        : isMedium
                          ? "h-[1px] bg-[#1e3b2f]/40"
                          : "h-[1px] bg-[#1e3b2f]/25"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* RIGHT-HAND EDGE INTERACTIVE TAILOR'S RULER                */}
      {/* ========================================================= */}
      <div
        onMouseLeave={() => setHoveredTick(null)}
        className="hidden sm:flex flex-col justify-between items-end absolute right-0 top-20 bottom-6 w-44 z-30 select-none"
        aria-label="Interactive tailor's measuring ruler"
      >
        {Array.from({ length: TOTAL_RULER_TICKS }).map((_, idx) => {
          const isMajor = idx % 10 === 0;
          const isMedium = idx % 5 === 0 && !isMajor;

          // Base resting widths (in px) for major (cm), medium (0.5cm), and minor (mm) ticks
          const baseWidth = isMajor ? 52 : isMedium ? 34 : 20;

          // Calculate distance from hovered tick for the 3-before / 3-after falloff wave
          const dist =
            hoveredTick !== null ? Math.abs(idx - hoveredTick) : Infinity;

          let extraWidth = 0;
          if (dist === 0) {
            extraWidth = 80; // Center hovered line grows out the furthest
          } else if (dist === 1) {
            extraWidth = 54; // 1st neighbor before & after
          } else if (dist === 2) {
            extraWidth = 32; // 2nd neighbor before & after
          } else if (dist === 3) {
            extraWidth = 15; // 3rd neighbor before & after
          }

          const finalWidth = baseWidth + extraWidth;
          const isCenterHover = dist === 0;
          const isWaveNeighbor = dist > 0 && dist <= 3;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredTick(idx)}
              className="w-full flex-1 flex items-center justify-end cursor-crosshair group"
            >
              {/* Centimeter numeral on major ticks or active hover */}
              {isMajor && idx > 0 && idx < TOTAL_RULER_TICKS - 1 && (
                <span
                  className={`mr-2 font-sans text-[9px] tracking-[0.14em] transition-all duration-200 ${
                    isCenterHover
                      ? "text-[#ff3ea5] font-bold opacity-100 -translate-x-1"
                      : isWaveNeighbor
                        ? "text-[#1e3b2f] opacity-85"
                        : "text-[#1e3b2f]/45 opacity-75"
                  }`}
                >
                  {String(idx / 10).padStart(2, "0")}
                </span>
              )}

              {/* The Ruler Tick Line flush to the right screen edge */}
              <span
                style={{ width: `${finalWidth}px` }}
                className={`block transition-all duration-200 ease-out origin-right ${
                  isCenterHover
                    ? "h-[2px] bg-[#ff3ea5]"
                    : isWaveNeighbor
                      ? "h-[1.5px] bg-[#1e3b2f]/85"
                      : isMajor
                        ? "h-[1.5px] bg-[#1e3b2f]/55"
                        : isMedium
                          ? "h-[1px] bg-[#1e3b2f]/40"
                          : "h-[1px] bg-[#1e3b2f]/25"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Centered Fluid Editorial Typography */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <p className="font-label-caps text-[clamp(0.7rem,0.85vw,0.95rem)] tracking-[0.26em] uppercase text-[#1e3b2f] font-semibold mb-[clamp(1rem,2.2vh,2rem)]">
            Spring / Summer 2026
          </p>

          <h1 className="font-serif uppercase font-normal text-[clamp(2.75rem,min(6.8vw,11.5vh),8.5rem)] text-[#1e3b2f] tracking-[0.01em] leading-[0.98]">
            Where <br />
            Elegance <br />
            Meets Edge
          </h1>

          <p className="mt-[clamp(1.25rem,2.8vh,2.5rem)] font-body-md text-[clamp(0.95rem,min(1.2vw,2.2vh),1.35rem)] text-[#1e3b2f] max-w-[30ch] leading-[1.6] font-normal">
            Timeless silhouettes. Modern craftsmanship. Designed for the now and
            forever.
          </p>

          <div className="mt-[clamp(1.75rem,3.6vh,3rem)]">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center bg-[#1e3b2f] text-[#f4ead5] hover:bg-[#f4ead5] hover:text-[#1e3b2f] border border-[#1e3b2f] font-label-caps text-[clamp(0.7rem,0.8vw,0.875rem)] tracking-[0.22em] uppercase font-semibold px-[clamp(2rem,3vw,3.25rem)] py-[clamp(0.95rem,1.8vh,1.35rem)] transition-colors duration-300 cursor-pointer"
            >
              Shop The Collection
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
