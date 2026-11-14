"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

interface TailorStitchBackgroundProps {
  id: string;
}

interface SeamGeometry {
  width: number;
  height: number;
  path: string;
  boundaries: number[];
}

const THREAD_COLORS = ["#f4ead5", "#d42684", "#f4ead5", "#d42684", "#d42684"];

/** One continuous seam from the manifesto through the final homepage section. */
export default function TailorStitchBackground({ id }: TailorStitchBackgroundProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const reduceMotion = useReducedMotion();
  const [geometry, setGeometry] = useState<SeamGeometry>({
    width: 1,
    height: 1,
    path: "",
    boundaries: [],
  });

  const { scrollYProgress } = useScroll({
    target: overlayRef,
    offset: ["start 0.85", "end 0.15"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const drawnLength = useTransform(progress, (value) => (reduceMotion ? 1 : value));
  const needleX = useMotionValue(0);
  const needleY = useMotionValue(0);
  const needleAngle = useMotionValue(90);
  const needleOpacity = useTransform(progress, (value) =>
    reduceMotion ? 0 : Math.min(value * 20, 1)
  );

  useEffect(() => {
    const overlay = overlayRef.current;
    const parent = overlay?.parentElement;
    if (!overlay || !parent) return;

    const sections = Array.from(parent.querySelectorAll<HTMLElement>("[data-stitch-section]"));
    if (sections.length !== THREAD_COLORS.length) return;

    const measure = () => {
      const parentRect = parent.getBoundingClientRect();
      const width = parentRect.width;
      const height = parentRect.height;
      if (!width || !height) return;

      const boundaries = [0, ...sections.map((section) =>
        section.getBoundingClientRect().bottom - parentRect.top
      )];
      const xs = [0.86, 0.14, 0.84, 0.16, 0.82, 0.14].map((fraction) => fraction * width);
      const path = sections.map((_, index) => {
        const y0 = boundaries[index];
        const y1 = boundaries[index + 1];
        const control = (y1 - y0) * 0.42;
        return `${index === 0 ? `M ${xs[index]} ${y0}` : ""} C ${xs[index]} ${y0 + control}, ${xs[index + 1]} ${y1 - control}, ${xs[index + 1]} ${y1}`;
      }).join(" ");

      setGeometry({ width, height, path, boundaries });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(parent);
    sections.forEach((section) => observer.observe(section));
    measure();
    return () => observer.disconnect();
  }, []);

  const updateNeedle = useCallback((value: number) => {
    const path = pathRef.current;
    if (!path || !geometry.path) return;
    const length = path.getTotalLength();
    const distance = Math.min(Math.max(value, 0), 1) * length;
    const point = path.getPointAtLength(distance);
    const next = path.getPointAtLength(Math.min(distance + 2, length));
    const previous = path.getPointAtLength(Math.max(distance - 2, 0));
    needleX.set(point.x);
    needleY.set(point.y);
    needleAngle.set(Math.atan2(next.y - previous.y, next.x - previous.x) * 180 / Math.PI);
  }, [geometry.path, needleX, needleY, needleAngle]);

  useMotionValueEvent(progress, "change", updateNeedle);

  useEffect(() => {
    updateNeedle(progress.get());
  }, [updateNeedle, progress]);

  const gradientStops = geometry.boundaries.flatMap((boundary, index) => {
    if (index === geometry.boundaries.length - 1) return [];
    const start = boundary / geometry.height * 100;
    const end = geometry.boundaries[index + 1] / geometry.height * 100;
    return [
      { offset: `${start}%`, color: THREAD_COLORS[index] },
      { offset: `${end}%`, color: THREAD_COLORS[index] },
    ];
  });

  return (
    <div ref={overlayRef} className="absolute inset-0 z-[1] pointer-events-none select-none" aria-hidden="true">
      <svg
        className="h-full w-full overflow-visible"
        viewBox={`0 0 ${geometry.width} ${geometry.height}`}
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`${id}-thread`} x1="0" y1="0" x2="0" y2={geometry.height} gradientUnits="userSpaceOnUse">
            {gradientStops.map((stop, index) => (
              <stop key={index} offset={stop.offset} stopColor={stop.color} />
            ))}
          </linearGradient>
          <mask id={`${id}-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width={geometry.width} height={geometry.height}>
            <motion.path d={geometry.path} stroke="white" strokeWidth="8" style={{ pathLength: drawnLength }} />
          </mask>
        </defs>

        <path ref={pathRef} d={geometry.path} stroke={`url(#${id}-thread)`} strokeOpacity="0.16" strokeWidth="1" strokeDasharray="2 8" />
        <path
          d={geometry.path}
          mask={`url(#${id}-mask)`}
          stroke={`url(#${id}-thread)`}
          strokeOpacity="0.72"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="12 11"
        />
      </svg>

      {!reduceMotion && geometry.path && (
        <motion.div className="absolute left-0 top-0 h-0 w-0" style={{ x: needleX, y: needleY, rotate: needleAngle, opacity: needleOpacity, transformOrigin: "0 0" }}>
          <svg width="66" height="20" viewBox="0 0 66 20" className="absolute -left-[11px] -top-[10px] overflow-visible" fill="none">
            <path d="M 4 10 C 4 6, 10 5, 18 6 L 63 10 L 18 14 C 10 15, 4 14, 4 10 Z" fill="#bfc7c4" stroke="#1e3b2f" strokeWidth="1.2" />
            <path d="M 18 8 L 55 9.5" stroke="#f4ead5" strokeWidth="1" strokeLinecap="round" />
            <ellipse cx="11" cy="10" rx="4" ry="1.6" fill="#1e3b2f" />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
