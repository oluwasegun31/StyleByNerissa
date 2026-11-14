"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, SparklesIcon } from "@hugeicons/core-free-icons";

interface CapsuleTicketCardProps {
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  hoverImage: string;
  altText: string;
  hoverAltText: string;
  onOpen?: () => void;
}

export default function CapsuleTicketCard({
  badge,
  title,
  subtitle,
  price,
  image,
  hoverImage,
  altText,
  hoverAltText,
  onOpen,
}: CapsuleTicketCardProps) {
  return (
    <article
      className="relative w-full flex-1 rounded-none bg-[#fffdf9] flex flex-col justify-between p-6 sm:p-7 overflow-hidden"
      style={{
        WebkitMaskImage:
          "radial-gradient(circle 20px at 0px 74%, transparent 19.5px, #000 20px), radial-gradient(circle 20px at 100% 74%, transparent 19.5px, #000 20px)",
        WebkitMaskComposite: "destination-in",
        maskImage:
          "radial-gradient(circle 20px at 0px 74%, transparent 19.5px, #000 20px), radial-gradient(circle 20px at 100% 74%, transparent 19.5px, #000 20px)",
        maskComposite: "intersect",
      }}
    >
      <div className="relative z-20 flex items-center justify-between pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#ff3ea5]/12 group-hover:bg-white/95 text-[#d42684] text-xs font-medium transition-colors duration-300">
          <HugeiconsIcon icon={SparklesIcon} size={11} strokeWidth={1.8} aria-hidden="true" />
          <span>{badge}</span>
        </span>
        <span className="text-[#1e3b2f]/75 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
          <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.7} aria-hidden="true" />
        </span>
      </div>

      <div className="relative z-[5] my-auto w-full flex items-center justify-center py-4 pointer-events-none">
        <div className="w-[62%] aspect-[3/3.9] rounded-none overflow-hidden shadow-[0_14px_34px_rgba(30,59,47,0.10)] bg-[#f4ead5]">
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>

      <div
        className="absolute inset-0 w-full h-full [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none bg-[#ff3ea5] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "var(--color-hot-pink)" }}
      >
        <div className="w-[64%] aspect-[3/3.9] -translate-y-4 rounded-none overflow-hidden shadow-[0_22px_48px_rgba(0,0,0,0.26)] scale-[1.28] group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center bg-[#f4ead5]">
          <img src={hoverImage} alt={hoverAltText} className="w-full h-full object-cover object-top" />
        </div>
      </div>

      <div className="relative z-20 pt-6 flex items-end justify-between gap-4 pointer-events-none">
        <div className="space-y-1 text-left min-w-0">
          <h3 className="font-sans text-[15px] sm:text-base font-medium text-[#1e3b2f] group-hover:text-white leading-snug lowercase truncate transition-colors duration-300">
            {title}
          </h3>
          <p className="font-sans text-xs sm:text-[13px] text-[#1e3b2f]/55 group-hover:text-white/80 leading-snug lowercase truncate transition-colors duration-300">
            {subtitle}
          </p>
        </div>
        <span className="shrink-0 px-3.5 py-1.5 rounded-none bg-[#1e3b2f]/[0.06] group-hover:bg-white/95 text-[#1e3b2f]/80 group-hover:text-[#1e3b2f] font-sans text-xs sm:text-[13px] font-medium transition-colors duration-300">
          {price}
        </span>
      </div>

      {onOpen && (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`View ${title}`}
          className="absolute inset-0 z-30 w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-5px] focus-visible:outline-[#1e3b2f]"
        />
      )}
    </article>
  );
}
