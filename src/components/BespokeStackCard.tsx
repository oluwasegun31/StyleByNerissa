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
        className="w-full origin-top rounded-2xl bg-[#161412] p-6 sm:p-8 shadow-[0_24px_55px_-12px_rgba(0,0,0,0.6)] border border-white/15 space-y-6 transition-shadow hover:shadow-[0_28px_65px_-10px_rgba(0,0,0,0.7)]"
      >
        {/* Card Header Tag Row */}
        <div className="flex items-center justify-between border-b border-white/15 pb-3">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-stormy-teal" />
            <span className="font-label-caps text-xs tracking-wider text-white font-semibold">
              {phase.phaseCode}
            </span>
          </div>
          <span className="font-label-sm text-xs text-white/70 tracking-wide">
            {phase.subtitle}
          </span>
        </div>

        {/* Specimen Media Block */}
        {phase.image2 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="aspect-[16/9] sm:aspect-[4/5] rounded-lg overflow-hidden bg-black/30 border border-white/10">
              <img
                src={phase.image1}
                alt="Muslin Toile Draping"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="aspect-[16/9] sm:aspect-[4/5] rounded-lg overflow-hidden bg-black/30 border border-white/10">
              <img
                src={phase.image2}
                alt="Hand Embroidery Detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        ) : (
          <div className="aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/30 border border-white/10">
            <img
              src={phase.image1}
              alt={phase.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        )}

        {/* Phase Quote if available */}
        {phase.quote && (
          <p className="font-serif text-sm text-white/85 italic border-l-2 border-stormy-teal pl-4 py-1">
            {phase.quote}
          </p>
        )}

        {/* Bottom Technical Specimen Metadata */}
        <div className="flex justify-between items-center text-white/75 font-label-sm text-xs pt-2 border-t border-white/15">
          <span>{phase.metadataLeft}</span>
          <span className="font-mono text-white font-medium">
            {phase.metadataRight}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

