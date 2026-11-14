"use client";

import React, { useEffect, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

/**
 * Oversized half-open zipper behind the hero copy.
 * The V converges right at the bottom edge of the hero (y = 1000), and the
 * zipper slider + pull tab overflows across the border into the top of the
 * next section below.
 */

const VB_W = 1600;
const VB_H = 1000;
const CX = VB_W / 2;
const TOP_Y = -20;
const MAX_HALF_SPREAD = 480; // 20% inset from left and right edges
const APEX_TRAVEL = 1020; // lands at y = 1000 (the bottom edge of the hero)

const TOOTH_PITCH = 22;

const CREAM = "#f4ead5";
const PINK = "#ff3ea5";
const PINK_DEEP = "#d42684";
const GREEN = "#1e3b2f";

type Pt = { x: number; y: number };

interface Tooth {
  cx: number;
  cy: number;
  angle: number;
}

/** Round floats to fixed precision so Node SSR and browser V8 produce identical strings */
function r3(n: number): number {
  return Math.round(n * 1000) / 1000;
}

function edgeTeeth(from: Pt, to: Pt, side: "left" | "right", phase: number) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy);
  if (len < 1) return { teeth: [] as Tooth[], n: { x: 0, y: 0 } };

  const d = { x: dx / len, y: dy / len };
  const n = side === "left" ? { x: d.y, y: -d.x } : { x: -d.y, y: d.x };
  const angle = r3((Math.atan2(n.y, n.x) * 180) / Math.PI);

  const teeth: Tooth[] = [];
  for (let s = phase; s < len - 36; s += TOOTH_PITCH) {
    teeth.push({
      cx: r3(from.x + d.x * s + n.x * 4),
      cy: r3(from.y + d.y * s + n.y * 4),
      angle,
    });
  }
  return { teeth, n };
}

export default function HeroZipper() {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0.08);

  useEffect(() => {
    if (reduceMotion) {
      setProgress(1);
      return;
    }
    const controls = animate(0.08, 1, {
      duration: 1.9,
      delay: 0.25,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setProgress(v),
    });
    return () => controls.stop();
  }, [reduceMotion]);

  const half = r3(MAX_HALF_SPREAD * progress);
  const apexY = r3(TOP_Y + APEX_TRAVEL * progress);

  const L0: Pt = { x: r3(CX - half), y: TOP_Y };
  const R0: Pt = { x: r3(CX + half), y: TOP_Y };
  const A: Pt = { x: CX, y: apexY };

  const left = edgeTeeth(L0, A, "left", TOOTH_PITCH * 0.5);
  const right = edgeTeeth(R0, A, "right", TOOTH_PITCH);

  const TAPE_OFFSET = 8;
  const tapeLine = (from: Pt, n: Pt) => ({
    x1: r3(from.x - n.x * TAPE_OFFSET),
    y1: r3(from.y - n.y * TAPE_OFFSET),
    x2: r3(A.x - n.x * TAPE_OFFSET),
    y2: r3(A.y - n.y * TAPE_OFFSET),
  });

  const vPoints = `${L0.x},${L0.y} ${R0.x},${R0.y} ${A.x},${A.y}`;

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible"
      aria-hidden="true"
    >
      <defs>
        {/* Keep the V opening and tapes clipped cleanly to the hero bounds while the pull tab overflows */}
        <clipPath id="zip-hero-bounds">
          <rect x="-400" y="0" width={VB_W + 800} height={VB_H} />
        </clipPath>

        {/* Analog grain on the pink opening */}
        <filter id="zip-pink-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feComponentTransfer in="mono" result="grain">
            <feFuncA type="table" tableValues="0 0.22" />
          </feComponentTransfer>
          <feComposite in="grain" in2="SourceGraphic" operator="in" />
        </filter>

        <filter
          id="zip-pull-shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="8"
            floodColor="#000000"
            floodOpacity="0.32"
          />
        </filter>
      </defs>

      {/* Clipped Hero Interior: Pink V, Tapes, and Teeth */}
      <g clipPath="url(#zip-hero-bounds)">
        <polygon points={vPoints} fill={PINK} />
        <polygon
          points={vPoints}
          fill="#000"
          filter="url(#zip-pink-grain)"
          style={{ mixBlendMode: "multiply" }}
        />

        {/* Tonal pink seam tapes */}
        <line
          {...tapeLine(L0, left.n)}
          stroke={PINK_DEEP}
          strokeWidth="12"
          strokeLinecap="round"
        />
        <line
          {...tapeLine(R0, right.n)}
          stroke={PINK_DEEP}
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Open zipper teeth along both V sides */}
        {[...left.teeth, ...right.teeth].map((t, i) => (
          <rect
            key={i}
            x={-11}
            y={-5.5}
            width="22"
            height="11"
            rx="3"
            fill={CREAM}
            stroke={PINK_DEEP}
            strokeWidth="1.2"
            transform={`translate(${t.cx} ${t.cy}) rotate(${t.angle})`}
          />
        ))}
      </g>

      {/* Unclipped Zipper Slider + Pull Tab (overflows into the next section below) */}
      <g
        transform={`translate(${CX} ${apexY})`}
        filter="url(#zip-pull-shadow)"
      >
        {/* Slider body straddling the hero bottom border */}
        <path
          d="M -26 -36 Q -26 -44 -17 -44 L 17 -44 Q 26 -44 26 -36 L 20 22 Q 18 32 9 34 L -9 34 Q -18 32 -20 22 Z"
          fill={CREAM}
          stroke={GREEN}
          strokeWidth="2"
        />
        <path
          d="M -13 -32 L 13 -32"
          stroke={PINK_DEEP}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Crown loop */}
        <circle cx="0" cy="24" r="5.5" fill={PINK} stroke={GREEN} strokeWidth="1.5" />
        {/* Hanging pull tab that overflows into the Forest Green section below */}
        <rect
          x="-14"
          y="26"
          width="28"
          height="84"
          rx="14"
          fill={CREAM}
          stroke={GREEN}
          strokeWidth="2"
        />
        {/* Inner cutout slot on the pull tab */}
        <rect
          x="-5.5"
          y="74"
          width="11"
          height="24"
          rx="5.5"
          fill={PINK}
          stroke={GREEN}
          strokeWidth="1.2"
        />
      </g>
    </svg>
  );
}
