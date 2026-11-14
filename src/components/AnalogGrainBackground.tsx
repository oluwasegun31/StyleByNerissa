"use client";

import React from "react";

interface AnalogGrainBackgroundProps {
  variant: "cream" | "green" | "pink" | "white";
  id: string;
  className?: string;
}

/**
 * Reusable Analog Grain Background for homepage sections and pages.
 * Reproduces the exact tactile, fine-art analog film grain texture
 * overlaid directly onto our solid brand colors:
 * - "cream": Butter Cream (#f4ead5)
 * - "green": Forest Green (#1e3b2f)
 * - "pink": Hot Pink (#ff3ea5)
 * - "white": Warm Alabaster (#FAF9F7)
 */
export default function AnalogGrainBackground({
  variant,
  id,
  className = "",
}: AnalogGrainBackgroundProps) {
  const isCream = variant === "cream";
  const isPink = variant === "pink";
  const isGreen = variant === "green";
  const isWhite = variant === "white";

  const baseBg = isCream
    ? "#f4ead5"
    : isGreen
      ? "#1e3b2f"
      : isPink
        ? "#ff3ea5"
        : "#FAF9F7";

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* 1. Base Solid Color — Clean & Uniform */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: baseBg,
        }}
      />

      {/* 2. The Exact Crisp Analog Grain Filter */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={id} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noise"
              result="monoNoise"
            />
            <feComponentTransfer in="monoNoise" result="boostedNoise">
              <feFuncR type="linear" slope="2.2" intercept="-0.6" />
              <feFuncG type="linear" slope="2.2" intercept="-0.6" />
              <feFuncB type="linear" slope="2.2" intercept="-0.6" />
            </feComponentTransfer>
          </filter>
        </defs>

        {/* Dual Grain Passes tuned to tone */}
        {isWhite || isCream ? (
          <>
            <rect
              width="100%"
              height="100%"
              filter={`url(#${id})`}
              opacity="0.22"
              style={{ mixBlendMode: "multiply" }}
            />
            <rect
              width="100%"
              height="100%"
              filter={`url(#${id})`}
              opacity="0.12"
              style={{ mixBlendMode: "overlay" }}
            />
          </>
        ) : (
          <>
            <rect
              width="100%"
              height="100%"
              filter={`url(#${id})`}
              opacity={isPink ? "0.28" : "0.32"}
              style={{ mixBlendMode: "overlay" }}
            />
            <rect
              width="100%"
              height="100%"
              filter={`url(#${id})`}
              opacity={isPink ? "0.12" : "0.15"}
              style={{ mixBlendMode: "soft-light" }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
