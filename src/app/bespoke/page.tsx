"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import TailorCtaCard from "@/components/TailorCtaCard";
import {
  BESPOKE_STEPS,
  BESPOKE_TIERS,
  BESPOKE_ARCHITECTURE,
  BESPOKE_FAQS,
} from "@/data/mockData";

export default function BespokePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<string>("01");

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md selection:bg-primary selection:text-on-primary">
      <main className="w-full pt-20">
        {/* ========================================================= */}
        {/* SECTION 1: HERO SECTION — THE CELESTIAL ATELIER ORBIT     */}
        {/* ========================================================= */}
        <section
          className="relative w-full min-h-[calc(100vh-5rem)] bg-barbie-pink px-4 sm:px-8 lg:px-14 xl:px-16 2xl:px-20 py-16 sm:py-24 flex items-center justify-center overflow-hidden border-b border-black/15 select-none"
          style={{ backgroundColor: "var(--color-barbie-pink)" }}
        >
          {/* SVG CLIP PATH DEFINITIONS FOR FILE FOLDER TAB SILHOUETTES */}
          <svg
            className="absolute w-0 h-0 pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              {/* Card with File Tab on Top-Left */}
              <clipPath
                id="bespoke-file-tab-top-left"
                clipPathUnits="objectBoundingBox"
              >
                <path d="M 0, 0.10 Q 0, 0, 0.12, 0 L 0.54, 0 C 0.61, 0, 0.65, 0.11, 0.72, 0.11 L 0.88, 0.11 Q 1, 0.11, 1, 0.21 L 1, 0.90 Q 1, 1, 0.88, 1 L 0.12, 1 Q 0, 1, 0, 0.90 L 0, 0.10 Z" />
              </clipPath>
              {/* Card with File Tab on Top-Right */}
              <clipPath
                id="bespoke-file-tab-top-right"
                clipPathUnits="objectBoundingBox"
              >
                <path d="M 0, 0.21 Q 0, 0.11, 0.12, 0.11 L 0.28, 0.11 C 0.35, 0.11, 0.39, 0, 0.46, 0 L 0.88, 0 Q 1, 0, 1, 0.10 L 1, 0.90 Q 1, 1, 0.88, 1 L 0.12, 1 Q 0, 1, 0, 0.90 L 0, 0.21 Z" />
              </clipPath>
              {/* Card with File Tab on Bottom-Left */}
              <clipPath
                id="bespoke-file-tab-bottom-left"
                clipPathUnits="objectBoundingBox"
              >
                <path d="M 0, 0.10 Q 0, 0, 0.12, 0 L 0.88, 0 Q 1, 0, 1, 0.10 L 1, 0.79 Q 1, 0.89, 0.88, 0.89 L 0.72, 0.89 C 0.65, 0.89, 0.61, 1, 0.54, 1 L 0.12, 1 Q 0, 1, 0, 0.90 L 0, 0.10 Z" />
              </clipPath>
              {/* Card with File Tab on Bottom-Right */}
              <clipPath
                id="bespoke-file-tab-bottom-right"
                clipPathUnits="objectBoundingBox"
              >
                <path d="M 0, 0.10 Q 0, 0, 0.12, 0 L 0.88, 0 Q 1, 0, 1, 0.10 L 1, 0.90 Q 1, 1, 0.88, 1 L 0.46, 1 C 0.39, 1, 0.35, 0.89, 0.28, 0.89 L 0.12, 0.89 Q 0, 0.89, 0, 0.79 L 0, 0.10 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* ========================================================= */}
          {/* COSMIC PLANET ORBIT RINGS & CELESTIAL STARS BACKGROUND    */}
          {/* ========================================================= */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
            {/* Ambient Dark Cosmic Glow Nucleus */}
            <div className="w-[500px] h-[500px] md:w-[750px] md:h-[750px] rounded-full bg-black/5 blur-3xl" />

            {/* Circular Orbit Ring 1 (Outer Solid Subtle Hairline) */}
            <div className="absolute w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] lg:w-[1220px] lg:h-[1220px] rounded-full border border-black/15 aspect-square" />

            {/* Circular Orbit Ring 2 (Dashed Planetary Trajectory) */}
            <div className="absolute w-[660px] h-[660px] sm:w-[820px] sm:h-[820px] lg:w-[980px] lg:h-[980px] rounded-full border border-dashed border-black/25 aspect-square" />

            {/* Circular Orbit Ring 3 (Intermediate Planetary Orbit) */}
            <div className="absolute w-[500px] h-[500px] sm:w-[620px] sm:h-[620px] lg:w-[760px] lg:h-[760px] rounded-full border border-black/15 aspect-square" />

            {/* Circular Orbit Ring 4 (Inner Dashed Trajectory) */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] lg:w-[540px] lg:h-[540px] rounded-full border border-dashed border-black/20 aspect-square" />

            {/* Circular Orbit Ring 5 (Innermost Whispered Nucleus Ring) */}
            <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] rounded-full border border-black/10 aspect-square" />

            {/* ===================================================== */}
            {/* EXPANDED CONSTELLATION STARS & CELESTIAL SPARKS        */}
            {/* ===================================================== */}
            {/* Star 1 (Top Left Outer) */}
            <div
              className="absolute top-[8%] left-[14%] animate-pulse"
              style={{ animationDuration: "2.4s" }}
            >
              <svg
                className="w-5 h-5 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 2 (Top Left Inner) */}
            <div
              className="absolute top-[22%] left-[26%] animate-pulse"
              style={{ animationDuration: "3.2s", animationDelay: "400ms" }}
            >
              <svg
                className="w-3.5 h-3.5 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 3 (Top Mid-Left Diamond) */}
            <div
              className="absolute top-[15%] left-[36%] animate-pulse"
              style={{ animationDuration: "1.8s", animationDelay: "900ms" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#161412] block shadow-xs" />
            </div>
            {/* Star 4 (Top Center Sparkle) */}
            <div
              className="absolute top-[6%] left-[50%] -translate-x-1/2 animate-pulse"
              style={{ animationDuration: "2.8s", animationDelay: "200ms" }}
            >
              <svg
                className="w-6 h-6 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 5 (Top Right Outer) */}
            <div
              className="absolute top-[10%] right-[14%] animate-pulse"
              style={{ animationDuration: "3s", animationDelay: "600ms" }}
            >
              <svg
                className="w-5 h-5 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 6 (Top Right Inner) */}
            <div
              className="absolute top-[20%] right-[25%] animate-pulse"
              style={{ animationDuration: "2.2s", animationDelay: "1100ms" }}
            >
              <svg
                className="w-4 h-4 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 7 (Top Mid-Right Dot) */}
            <div
              className="absolute top-[16%] right-[38%] animate-pulse"
              style={{ animationDuration: "2s", animationDelay: "300ms" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#161412] block shadow-xs" />
            </div>

            {/* Star 8 (Mid-Left Orbit Spark) */}
            <div
              className="absolute top-[36%] left-[6%] animate-pulse"
              style={{ animationDuration: "3.5s", animationDelay: "700ms" }}
            >
              <svg
                className="w-4 h-4 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 9 (Mid-Left Dot) */}
            <div
              className="absolute top-[48%] left-[12%] animate-pulse"
              style={{ animationDuration: "1.9s", animationDelay: "1300ms" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#161412] block shadow-xs" />
            </div>
            {/* Star 10 (Mid-Left Lower Spark) */}
            <div
              className="absolute top-[62%] left-[8%] animate-pulse"
              style={{ animationDuration: "2.6s", animationDelay: "500ms" }}
            >
              <svg
                className="w-3.5 h-3.5 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            {/* Star 11 (Mid-Right Orbit Spark) */}
            <div
              className="absolute top-[34%] right-[6%] animate-pulse"
              style={{ animationDuration: "2.5s", animationDelay: "800ms" }}
            >
              <svg
                className="w-4 h-4 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 12 (Mid-Right Dot) */}
            <div
              className="absolute top-[50%] right-[11%] animate-pulse"
              style={{ animationDuration: "2.1s", animationDelay: "450ms" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#161412] block shadow-xs" />
            </div>
            {/* Star 13 (Mid-Right Lower Spark) */}
            <div
              className="absolute top-[64%] right-[7%] animate-pulse"
              style={{ animationDuration: "3.1s", animationDelay: "1000ms" }}
            >
              <svg
                className="w-4.5 h-4.5 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            {/* Star 14 (Bottom Left Outer) */}
            <div
              className="absolute bottom-[10%] left-[13%] animate-pulse"
              style={{ animationDuration: "2.9s", animationDelay: "350ms" }}
            >
              <svg
                className="w-5 h-5 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 15 (Bottom Left Inner) */}
            <div
              className="absolute bottom-[20%] left-[23%] animate-pulse"
              style={{ animationDuration: "2.3s", animationDelay: "850ms" }}
            >
              <svg
                className="w-3.5 h-3.5 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 16 (Bottom Mid-Left Dot) */}
            <div
              className="absolute bottom-[14%] left-[34%] animate-pulse"
              style={{ animationDuration: "1.7s", animationDelay: "150ms" }}
            >
              <span className="w-2 rounded-full h-2 bg-[#161412] block shadow-xs" />
            </div>

            {/* Star 17 (Bottom Center Sparkle) */}
            <div
              className="absolute bottom-[5%] left-[50%] -translate-x-1/2 animate-pulse"
              style={{ animationDuration: "2.7s", animationDelay: "650ms" }}
            >
              <svg
                className="w-5 h-5 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            {/* Star 18 (Bottom Right Outer) */}
            <div
              className="absolute bottom-[9%] right-[13%] animate-pulse"
              style={{ animationDuration: "3.3s", animationDelay: "500ms" }}
            >
              <svg
                className="w-5 h-5 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 19 (Bottom Right Inner) */}
            <div
              className="absolute bottom-[18%] right-[22%] animate-pulse"
              style={{ animationDuration: "2.4s", animationDelay: "1200ms" }}
            >
              <svg
                className="w-4 h-4 text-[#161412]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
            {/* Star 20 (Bottom Mid-Right Dot) */}
            <div
              className="absolute bottom-[12%] right-[33%] animate-pulse"
              style={{ animationDuration: "2s", animationDelay: "950ms" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#161412] block shadow-xs" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* ORBITAL FLOATING FILE-TAB CARDS (INITIAL ORBIT POSITIONS)  */}
          {/* All cards have file design with uniform dimensions        */}
          {/* ========================================================= */}

          {/* Card 1: Top-Left Orbit (Phase 01 / Toile Balance) */}
          <motion.div
            animate={{
              y: [0, -10, 0, 8, 0],
              x: [0, 6, 0, -6, 0],
              rotate: [-2, 1, -2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden lg:block absolute top-6 xl:top-8 left-[3%] xl:left-[6%] 2xl:left-[9%] z-10 w-[175px] xl:w-[200px] 2xl:w-[220px] filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] group cursor-pointer"
          >
            <div
              className="w-full aspect-[4/4.9] overflow-hidden bg-[#161412] relative transition-transform duration-500 group-hover:scale-105"
              style={{ clipPath: "url(#bespoke-file-tab-top-left)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=85"
                alt="Bespoke Overcoat Drapery"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="font-label-caps text-[8.5px] uppercase tracking-widest block opacity-85">
                  Phase 01 / Toile
                </span>
                <span className="font-serif text-xs font-medium truncate block">
                  Muslin Balance
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Top-Right Orbit (Mayfair Studio Silhouette) */}
          <motion.div
            animate={{
              y: [0, 9, 0, -10, 0],
              x: [0, -7, 0, 7, 0],
              rotate: [2, -1, 2],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="hidden lg:block absolute top-6 xl:top-8 right-[3%] xl:right-[6%] 2xl:right-[9%] z-10 w-[175px] xl:w-[200px] 2xl:w-[220px] filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] group cursor-pointer"
          >
            <div
              className="w-full aspect-[4/4.9] overflow-hidden bg-[#161412] relative transition-transform duration-500 group-hover:scale-105"
              style={{ clipPath: "url(#bespoke-file-tab-top-right)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85"
                alt="High Fashion Atelier Portrait"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="font-label-caps text-[8.5px] uppercase tracking-widest block opacity-85">
                  Mayfair Studio
                </span>
                <span className="font-serif text-xs font-medium truncate block">
                  Couture Silhouette
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Mid-Left Orbit (Phase 02 / Posture Mapping) */}
          <motion.div
            animate={{
              y: [0, -11, 0, 10, 0],
              x: [0, 5, 0, -5, 0],
              rotate: [2.5, -1.5, 2.5],
            }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.6,
            }}
            className="hidden xl:block absolute top-[40%] left-[1.5%] 2xl:left-[4%] z-10 w-[175px] xl:w-[200px] 2xl:w-[220px] filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] group cursor-pointer"
          >
            <div
              className="w-full aspect-[4/4.9] overflow-hidden bg-[#161412] relative transition-transform duration-500 group-hover:scale-105"
              style={{ clipPath: "url(#bespoke-file-tab-bottom-left)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=85"
                alt="Editorial Portrait with Avant-Garde Styling"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="font-label-caps text-[8.5px] uppercase tracking-widest block opacity-85">
                  Phase 02 / Posture
                </span>
                <span className="font-serif text-xs font-medium truncate block">
                  34 Posture Points
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Mid-Right Orbit (Como Silk 120 GSM) */}
          <motion.div
            animate={{
              y: [0, 10, 0, -9, 0],
              x: [0, -5, 0, 5, 0],
              rotate: [-2, 1.5, -2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="hidden xl:block absolute top-[40%] right-[1.5%] 2xl:right-[4%] z-10 w-[175px] xl:w-[200px] 2xl:w-[220px] filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] group cursor-pointer"
          >
            <div
              className="w-full aspect-[4/4.9] overflow-hidden bg-[#161412] relative transition-transform duration-500 group-hover:scale-105"
              style={{ clipPath: "url(#bespoke-file-tab-top-right)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85"
                alt="Bespoke Silk Tailoring Silhouette"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="font-label-caps text-[8.5px] uppercase tracking-widest block opacity-85">
                  Materiality / Como
                </span>
                <span className="font-serif text-xs font-medium truncate block">
                  Como Silk 120 GSM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Bottom-Left Orbit (Phase 04 / Seams) */}
          <motion.div
            animate={{
              y: [0, -9, 0, 11, 0],
              x: [0, -6, 0, 6, 0],
              rotate: [1.5, -2, 1.5],
            }}
            transition={{
              duration: 10.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="hidden lg:block absolute bottom-6 xl:bottom-8 left-[4%] xl:left-[7%] 2xl:left-[10%] z-10 w-[175px] xl:w-[200px] 2xl:w-[220px] filter drop-shadow-[0_18px_32px_rgba(0,0,0,0.18)] group cursor-pointer"
          >
            <div
              className="w-full aspect-[4/4.9] overflow-hidden bg-[#161412] relative transition-transform duration-500 group-hover:scale-105"
              style={{ clipPath: "url(#bespoke-file-tab-bottom-left)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85"
                alt="Contemporary Bespoke Tailoring"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="font-label-caps text-[8.5px] uppercase tracking-widest block opacity-85">
                  Phase 04 / Seams
                </span>
                <span className="font-serif text-xs font-medium truncate block">
                  French Hand-Felled
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Bottom-Right Orbit (Phase 05 / Archival Case) */}
          <motion.div
            animate={{
              y: [0, 11, 0, -10, 0],
              x: [0, 6, 0, -6, 0],
              rotate: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8,
            }}
            className="hidden lg:block absolute bottom-6 xl:bottom-8 right-[4%] xl:right-[7%] 2xl:right-[10%] z-10 w-[175px] xl:w-[200px] 2xl:w-[220px] filter drop-shadow-[0_18px_32px_rgba(0,0,0,0.18)] group cursor-pointer"
          >
            <div
              className="w-full aspect-[4/4.9] overflow-hidden bg-[#161412] relative transition-transform duration-500 group-hover:scale-105"
              style={{ clipPath: "url(#bespoke-file-tab-bottom-right)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=85"
                alt="Deep Emerald Suit Silhouette"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="font-label-caps text-[8.5px] uppercase tracking-widest block opacity-85">
                  Phase 05 / Master
                </span>
                <span className="font-serif text-xs font-medium truncate block">
                  Archival Case
                </span>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* CENTER NUCLEUS: GRAND TYPOGRAPHY & BESPOKE MANIFESTO       */}
          {/* Text is strictly layered above cards (z-40 relative)      */}
          {/* ========================================================= */}
          <div className="relative z-40 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 my-auto pointer-events-auto">
            {/* Rotating Sunburst Motif Icon */}
            <div className="flex items-center justify-center text-[#161412] mb-3 sm:mb-4">
              <svg
                className="w-8 h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-[#161412] animate-[spin_16s_linear_infinite]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="2.8"
                  fill="currentColor"
                  stroke="none"
                />
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
              className="font-serif font-semibold text-[clamp(2.35rem,8.5vw,4.5rem)] lg:text-[clamp(3.25rem,6.4vw,7.8rem)] text-[#161412] tracking-tight leading-[0.98] lg:leading-none mb-6 w-full"
            >
              Sculpted to Your Posture. <br className="hidden sm:inline" />
              Crafted Once. Worn Forever.
            </motion.h1>

            {/* Editorial Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-base sm:text-lg md:text-xl text-[#161412]/85 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
            >
              A couture garment from Style by Nerissa is an unrepeatable
              dialogue between client anatomy, millimetric muslin draping, and
              centuries-old Savile Row and Parisian hand-finishes.
            </motion.p>

            {/* Queue Status Strip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-2.5 rounded-full bg-black/10 border border-black/15 shadow-none mb-8"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#161412]" />
                <span className="font-label-caps text-xs uppercase tracking-wider text-[#161412]">
                  Strictly 8 Commissions Per Month
                </span>
              </div>
              <span className="text-[#161412]/30 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span className="font-label-caps text-xs uppercase tracking-wider text-[#161412]/85">
                  Current Turnaround: 6–8 Weeks
                </span>
              </div>
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/booking"
                className="px-8 py-4 rounded-full bg-[#161412] text-white font-label-caps text-xs uppercase tracking-wider hover:bg-stormy-teal transition-all font-semibold shadow-lg inline-flex items-center gap-2.5 group"
              >
                <span>Reserve Private Fitting Slot</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </motion.div>

            {/* Mobile / Tablet Curated 3-Card Spread (< lg breakpoint) */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md mx-auto pt-10 lg:hidden">
              <div className="filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]">
                <div
                  className="w-full aspect-[3/4] overflow-hidden bg-[#161412] relative"
                  style={{ clipPath: "url(#bespoke-folder-tab-left)" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=85"
                    alt="Bespoke Overcoat"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]">
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#161412] border border-black/15 relative">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85"
                    alt="Atelier Model"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]">
                <div
                  className="w-full aspect-[3/4] overflow-hidden bg-[#161412] relative"
                  style={{ clipPath: "url(#bespoke-folder-tab-right)" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=85"
                    alt="Bespoke Suit"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: THE 5-STAGE BESPOKE PATHWAY                     */}
        {/* ========================================================= */}
        <section
          className="w-full bg-stormy-teal py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-b border-black/15 text-white"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="w-full flex flex-col gap-12 sm:gap-16">
            {/* Section Masthead */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
              <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-white/80">
                Methodology &amp; Anatomy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                The 5-Stage Bespoke Pathway
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/85 font-light leading-relaxed">
                From 34 anatomical measurements to the final hand-felled French
                seams, each stage ensures zero pulling, zero creasing, and
                sublime kinetic ease.
              </p>
            </div>

            {/* 5-Step Connected Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 sm:gap-6 w-full">
              {BESPOKE_STEPS.map((step) => {
                const isSelected = activeStep === step.stepNumber;
                return (
                  <div
                    key={step.stepNumber}
                    onClick={() => setActiveStep(step.stepNumber)}
                    className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? "bg-[#161412] text-white border-white/30 shadow-2xl -translate-y-1.5"
                        : "bg-black/20 text-white/90 border-white/10 hover:bg-black/30 hover:border-white/20"
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Top Header: Step Number & Duration */}
                      <div className="flex items-center justify-between border-b border-white/15 pb-3">
                        <span className="font-serif text-3xl font-semibold leading-none">
                          {step.stepNumber}
                        </span>
                        <span className="font-mono text-xs uppercase text-white/70">
                          {step.duration}
                        </span>
                      </div>

                      {/* Title & Badge */}
                      <div className="space-y-1.5">
                        <span className="font-label-caps text-[10px] uppercase tracking-wider text-white/70 block">
                          {step.session}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                          {step.title}
                        </h3>
                        <span className="inline-block font-label-caps text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/15 text-white mt-1 border border-white/20">
                          {step.badge}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-[13px] text-white/80 font-light leading-relaxed pt-2">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-white/60">
                      <span>Protocol Step</span>
                      <span className="material-symbols-outlined text-[16px] text-white">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: HOW WE MEET — DUAL FITTING MODES                */}
        {/* ========================================================= */}
        <section className="w-full bg-surface-container-high py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-b border-outline-variant/20">
          <div className="w-full space-y-12 sm:space-y-16">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
              <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-secondary">
                Atelier Geography
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal">
                How We Meet: In-Person or Worldwide
              </h2>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
                Whether you visit our private Mayfair and Paris salons or join
                our Global Virtual Atelier, the tailoring precision remains
                uncompromised.
              </p>
            </div>

            {/* Dual Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              {/* Card 1: Studio Fitting */}
              <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-outline-variant/30 flex flex-col justify-between space-y-8 shadow-xs hover:shadow-xl transition-all">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-xs uppercase tracking-widest text-secondary font-semibold">
                      Mode A · Flagship Salons
                    </span>
                    <span className="font-mono text-xs uppercase text-on-surface bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
                      Mayfair &amp; Paris
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-on-surface font-normal">
                    The Studio Fitting (In-Person)
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
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
                        className="flex items-start gap-3 text-xs sm:text-sm text-on-surface"
                      >
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="font-label-caps text-xs uppercase tracking-wider text-secondary">
                    London / Paris Appts
                  </span>
                  <Link
                    href="/booking?mode=studio"
                    className="px-6 py-3 rounded-full bg-primary text-on-primary font-label-caps text-xs uppercase tracking-wider hover:bg-stormy-teal transition-colors"
                  >
                    Select Studio Fitting →
                  </Link>
                </div>
              </div>

              {/* Card 2: Virtual Atelier */}
              <div className="bg-surface rounded-3xl p-8 sm:p-12 border border-outline-variant/30 flex flex-col justify-between space-y-8 shadow-xs hover:shadow-xl transition-all">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-xs uppercase tracking-widest text-secondary font-semibold">
                      Mode B · International Patrons
                    </span>
                    <span className="font-mono text-xs uppercase text-on-surface bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
                      Worldwide Courier
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-on-surface font-normal">
                    The Global Virtual Atelier
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
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
                        className="flex items-start gap-3 text-xs sm:text-sm text-on-surface"
                      >
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="font-label-caps text-xs uppercase tracking-wider text-secondary">
                    Dispatched Globally
                  </span>
                  <Link
                    href="/booking?mode=virtual"
                    className="px-6 py-3 rounded-full bg-surface-container-high text-on-surface font-label-caps text-xs uppercase tracking-wider hover:bg-surface-container-highest transition-colors border border-outline-variant/30"
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
          className="w-full bg-barbie-pink py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-b border-black/15 text-[#161412]"
          style={{ backgroundColor: "var(--color-barbie-pink)" }}
        >
          <div className="w-full space-y-12 sm:space-y-16">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
              <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-[#161412]/75 font-semibold">
                Investment &amp; Calendar
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#161412] font-normal">
                Curated Commission Tiers
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#161412]/85 font-light leading-relaxed">
                Every tier includes our 34-point posture diagnosis, physical
                calico trial, and lifetime seam care.
              </p>
            </div>

            {/* 3 Pricing / Commission Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
              {BESPOKE_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative border ${
                    tier.isFeatured
                      ? "bg-[#161412] text-white shadow-2xl md:-translate-y-2 border-white/20 ring-1 ring-white/10"
                      : "bg-[#FAF9F7] text-[#161412] shadow-md border-black/10 hover:shadow-xl hover:border-black/20"
                  }`}
                >
                  {tier.isFeatured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#161412] px-4 py-1 rounded-full font-label-caps text-[10px] uppercase tracking-widest font-semibold shadow-md">
                      Most Requested
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span
                        className={`font-label-caps text-xs uppercase tracking-widest ${
                          tier.isFeatured
                            ? "text-white/70"
                            : "text-[#161412]/60"
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
                            ? "text-white/75"
                            : "text-[#161412]/70"
                        }`}
                      >
                        {tier.leadTime} · {tier.fittings}
                      </span>
                    </div>

                    <p
                      className={`font-sans text-xs sm:text-sm font-light leading-relaxed ${
                        tier.isFeatured ? "text-white/85" : "text-[#161412]/80"
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
                          <span
                            className={`material-symbols-outlined text-[17px] shrink-0 mt-0.5 ${
                              tier.isFeatured ? "text-white" : "text-[#161412]"
                            }`}
                          >
                            check
                          </span>
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
                          ? "bg-white text-[#161412] hover:bg-stone-100 shadow-md"
                          : "bg-[#161412] text-white hover:bg-stone-900 shadow-sm"
                      }`}
                    >
                      Inquire This Tier →
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
          className="w-full bg-stormy-teal py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-b border-black/15 text-white"
          style={{ backgroundColor: "var(--color-stormy-teal)" }}
        >
          <div className="w-full space-y-12 sm:space-y-16">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
              <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-white/80">
                Haute Couture Standards
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
                The Invisible Architecture
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/85 font-light leading-relaxed">
                What lies inside a garment determines how it feels after six
                hours on the floor. We never cut corners inside the linings.
              </p>
            </div>

            {/* Specimen Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {BESPOKE_ARCHITECTURE.map((card, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col space-y-4 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/20 shadow-md border border-white/15">
                    {/* Base Architecture Photograph */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                      <span className="backdrop-blur-md bg-white/95 text-[#161412] font-label-caps text-[10px] uppercase font-semibold px-3 py-1 rounded-full shadow-xs">
                        {card.tag}
                      </span>
                    </div>

                    {/* Barbie Pink Atelier Reveal Card (Wipes from Left to Right on Hover) */}
                    <div
                      className="absolute inset-0 w-full h-full [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 pointer-events-none bg-barbie-pink overflow-hidden"
                      style={{ backgroundColor: "var(--color-barbie-pink)" }}
                    >
                      {/* Inner Content Contracting from Scale 1.3 to Scale 0.9 */}
                      <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between scale-[1.30] group-hover:scale-[0.90] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center text-[#161412]">
                        {/* Top Header Spec Tag */}
                        <div className="flex items-center justify-between border-b border-black/20 pb-2.5">
                          <span className="font-label-caps text-[9px] tracking-[0.25em] text-[#161412]/90 uppercase">
                            {card.tag}
                          </span>
                          <span className="font-mono text-[10px] text-[#161412]/75 uppercase">
                            Spec 0{idx + 1}
                          </span>
                        </div>

                        {/* Center Monograph Specimen Typography */}
                        <div className="text-center space-y-1.5 my-auto py-2">
                          <span className="font-serif italic text-xs text-[#161412]/80 block">
                            Internal Architecture
                          </span>
                          <h4 className="font-serif text-xl sm:text-2xl text-[#161412] leading-tight font-medium">
                            {card.title}
                          </h4>
                          <p className="font-sans text-xs text-[#161412]/85 max-w-[240px] mx-auto leading-relaxed pt-1 line-clamp-2">
                            {card.description}
                          </p>
                        </div>

                        {/* Bottom Spec Footer */}
                        <div className="flex items-center justify-between border-t border-black/20 pt-2.5 text-xs font-label-caps uppercase tracking-wider text-[#161412]/80">
                          <span>Standard</span>
                          <span className="font-semibold text-[#161412]">
                            {card.stat}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                        {card.title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      {card.description}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-white/60 border-t border-white/15">
                      <span>Standard</span>
                      <span className="text-white font-semibold">
                        {card.stat}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: FREQUENTLY CONSIDERED QUESTIONS (ACCORDION)    */}
        {/* Same styling and canvas as the CTA section                */}
        {/* ========================================================= */}
        <section className="w-full bg-surface-container-high py-16 sm:py-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 border-t border-outline-variant/20">
          <div className="w-full max-w-4xl mx-auto space-y-10 sm:space-y-12">
            <div className="flex flex-col items-center text-center space-y-3">
              <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-secondary">
                Atelier Clarifications
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal">
                Frequently Considered Questions
              </h2>
            </div>

            <div className="space-y-3 w-full">
              {BESPOKE_FAQS.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-surface rounded-2xl border border-outline-variant/40 overflow-hidden transition-all duration-300 shadow-xs hover:border-black/20"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-surface-container/60 transition-colors"
                    >
                      <span className="font-serif text-base sm:text-lg text-on-surface font-medium">
                        {faq.question}
                      </span>
                      <span
                        className={`material-symbols-outlined text-[20px] text-secondary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <div className="px-6 sm:px-8 pb-6 text-on-surface-variant font-sans text-sm sm:text-base font-light leading-relaxed border-t border-outline-variant/20 pt-4">
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
        <section className="w-full bg-surface-container-high pb-16 sm:pb-24 px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 overflow-hidden">
          <div className="w-full">
            <TailorCtaCard />
          </div>
        </section>
      </main>
    </div>
  );
}
