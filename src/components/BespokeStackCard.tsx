"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { BespokePhase } from "@/data/mockData";

interface BespokeStackCardProps {
  phase: BespokePhase;
  index: number;
  total: number;
  onActive?: (phaseNumber: string) => void;
}

export default function BespokeStackCard({
  phase,
  index,
  total,
  onActive,
}: BespokeStackCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;

  // Exact docking position in pixels (6rem = 96px, + 32px per card step)
  const dockPixel = 96 + index * 32;

  // Track scroll position of this card as it rises from entering viewport to its exact dock position
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", `start ${dockPixel}px` as any],
  });

  // Docked scale when pinned below the navbar:
  // Preceding cards contract (Card 0 -> 0.80, Card 1 -> 0.88, Card 2 -> 0.98)
  // Incoming cards at 1.0 visibly overlap the docked card with more width
  const targetDockScale = isLast ? 0.98 : 0.80 + index * 0.08;

  // Scale: enters at 0.78, reaches full 1.0 width through the middle of the viewport,
  // then smoothly contracts to targetDockScale as it docks at the top
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.75, 1],
    [0.78, 1.0, 1.0, targetDockScale]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0.6, 1.0]
  );

  // Clearance below the 80px (5rem) fixed navbar:
  // First card docks at 6rem (96px = 16px clear margin below navbar).
  // Each subsequent card steps down by 32px so the header tabs of earlier cards stay visible.
  const topOffset = `calc(6rem + ${index * 32}px)`;

  return (
    <div
      ref={cardRef}
      className={`sticky w-full origin-top ${
        isLast ? "mb-20 lg:mb-28" : "mb-[30vh] lg:mb-[38vh]"
      }`}
      style={{
        top: topOffset,
        zIndex: 10 + index,
      }}
    >
      <motion.div
        onViewportEnter={() => onActive?.(phase.phaseNumber)}
        viewport={{ amount: 0.35 }}
        style={{
          scale,
          opacity,
        }}
        className="group w-full min-h-[480px] sm:min-h-[520px] origin-top rounded-none bg-[#fffdf9] p-6 sm:p-7 shadow-[0_24px_55px_-12px_rgba(0,0,0,0.45)] border border-[#1e3b2f]/15 flex flex-col justify-between transition-shadow hover:shadow-[0_28px_65px_-10px_rgba(0,0,0,0.55)]"
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
            <span>{phase.phaseCode}</span>
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

        {/* Center Minimalist Floating Image Frame */}
        <div className="relative z-10 my-auto w-full flex items-center justify-center py-6">
          <div className="w-[56%] sm:w-[46%] aspect-[3/3.8] rounded-none overflow-hidden shadow-[0_14px_34px_rgba(30,59,47,0.10)] bg-[#f4ead5]">
            <img
              src={phase.image1}
              alt={phase.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* Bottom Minimalist Footer: Title, Subtitle & Spec Tag */}
        <div className="relative z-20 pt-4 flex items-end justify-between gap-4">
          <div className="space-y-1 text-left min-w-0">
            <h3 className="font-sans text-[15px] sm:text-base font-medium text-[#1e3b2f] leading-snug lowercase truncate">
              {phase.title}
            </h3>
            <p className="font-sans text-xs sm:text-[13px] text-[#1e3b2f]/45 leading-snug lowercase truncate">
              {phase.subtitle} · {phase.metadataLeft}
            </p>
          </div>

          <span className="shrink-0 px-3.5 py-1.5 rounded-none bg-[#1e3b2f]/[0.06] text-[#1e3b2f]/80 font-sans text-xs sm:text-[13px] font-medium lowercase">
            {phase.metadataRight}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

