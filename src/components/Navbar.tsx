"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, Calendar03Icon, Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { NAV_LINKS, NavItem } from "@/data/mockData";

export default function Navbar() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Synchronize browser window hash for anchor links (e.g. /#bespoke)
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Determine active link based on current route pathname and section hash
  const isLinkActive = (item: NavItem) => {
    if (item.href.includes("#")) {
      const [path, hash] = item.href.split("#");
      const targetPath = path || "/";
      if (pathname === targetPath && currentHash === `#${hash}`) {
        return true;
      }
      return false;
    }

    if (item.href === "/") {
      return pathname === "/" && !currentHash;
    }

    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when grand mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP & GLOBAL HEADER — 100% FULL-WIDTH VIEWPORT */}
      {/* ========================================================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f4ead5]/90 backdrop-blur-xl border-b border-[#1e3b2f]/10 shadow-[0_4px_20px_-4px_rgba(30,59,47,0.08)]"
            : "bg-transparent border-b border-transparent shadow-none"
        }`}
      >
        <div className="h-20 w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 flex items-center justify-between">
          {/* Brand Wordmark (Initials on Mobile, Full Name on Desktop) */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-headline-sm text-lg sm:text-xl uppercase tracking-[0.25em] text-[#1e3b2f] hover:opacity-80 transition-opacity whitespace-nowrap font-medium"
            >
              <span className="hidden sm:inline">Style by Nerissa</span>
              <span className="sm:hidden font-serif tracking-[0.22em] font-medium text-xl">
                SBN
              </span>
            </Link>
          </div>

          {/* Desktop Editorial Navigation with Line Growing Hover (0% -> 100%) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((item) => {
              const isActive = isLinkActive(item);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    if (item.href.includes("#")) {
                      setCurrentHash(`#${item.href.split("#")[1]}`);
                    } else {
                      setCurrentHash("");
                    }
                  }}
                  className={`font-label-caps text-xs tracking-[0.14em] uppercase py-2 relative group inline-flex flex-col items-center justify-center transition-colors ${
                    isActive
                      ? "text-[#1e3b2f] font-semibold"
                      : "text-[#1e3b2f]/75 hover:text-[#1e3b2f] font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Underline expanding from 0% to 100% on hover, persistent when active */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#ff3ea5] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Fitting CTA & Mobile Menu */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/booking"
              className="hidden lg:inline-flex items-center justify-center bg-[#ff3ea5] text-white font-label-caps text-xs uppercase font-bold rounded-full px-6 py-2.5 transition-all duration-300 hover:bg-[#e02b8d] shadow-md shadow-[#ff3ea5]/25"
            >
              Book Fitting
            </Link>

            {/* Mobile Menu Trigger Button */}
            <button
              type="button"
              aria-label="Open Navigation Menu"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#1e3b2f] focus:outline-none flex items-center gap-2 cursor-pointer"
            >
              <span className="font-label-caps text-[11px] tracking-widest hidden sm:inline">
                MENU
              </span>
              <HugeiconsIcon icon={Menu01Icon} size={26} strokeWidth={1.7} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* GRAND FULL-SCREEN MOBILE OVERLAY MENU (COUTURE ATELIER) */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-[100dvh] bg-[#1e3b2f] text-[#f4ead5] z-[100] flex flex-col justify-between px-6 sm:px-12 py-6 overflow-y-auto"
          >
            {/* Top Bar: Brand + Close Trigger */}
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              <span className="font-headline-sm text-base uppercase tracking-[0.25em] text-[#f4ead5] font-semibold">
                Style by Nerissa
              </span>
              <button
                type="button"
                aria-label="Close Navigation Menu"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-2 text-[#f4ead5] hover:opacity-75 transition-opacity cursor-pointer py-1 px-2"
              >
                <span className="font-label-caps text-xs tracking-[0.2em] uppercase text-[#f4ead5] font-semibold">
                  Close
                </span>
                <HugeiconsIcon icon={Cancel01Icon} size={24} strokeWidth={1.7} aria-hidden="true" />
              </button>
            </div>

            {/* Main Navigation: Large Grand Serif Typography with Hairline Rows */}
            <div className="my-auto py-8 flex flex-col justify-center">
              <nav className="flex flex-col divide-y divide-white/15">
                {NAV_LINKS.map((item, index) => {
                  const isActive = isLinkActive(item);
                  const itemNumber = String(index + 1).padStart(2, "0");
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        delay: 0.05 + index * 0.06,
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (item.href.includes("#")) {
                            setCurrentHash(`#${item.href.split("#")[1]}`);
                          } else {
                            setCurrentHash("");
                          }
                          setMobileMenuOpen(false);
                        }}
                        className="group py-5 sm:py-6 flex items-center justify-between transition-all duration-300 hover:pl-2"
                      >
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          <span className="font-label-caps text-xs tracking-widest text-[#ff3ea5] font-semibold">
                            {itemNumber}
                          </span>
                          <span
                            className={`font-serif text-2xl sm:text-4xl transition-colors ${
                              isActive
                                ? "text-[#ff3ea5] italic font-semibold"
                                : "text-[#f4ead5] font-normal group-hover:text-[#ff3ea5]"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} strokeWidth={1.7} className="text-[#ff3ea5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" aria-hidden="true" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile CTA: Commission Fitting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="pt-8"
              >
                <Link
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#ff3ea5] text-white font-label-caps text-xs py-4 px-6 rounded-full inline-flex items-center justify-center gap-3 hover:bg-[#e02b8d] transition-all shadow-lg shadow-[#ff3ea5]/25 font-bold tracking-wider"
                >
                  <span>Book Atelier Fitting</span>
                  <HugeiconsIcon icon={Calendar03Icon} size={16} strokeWidth={1.7} aria-hidden="true" />
                </Link>
              </motion.div>
            </div>

            {/* Bottom Atelier Provenance & Concierge Information */}
            <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#f4ead5]/80 font-label-sm text-xs">
              <div className="space-y-1">
                <p className="font-label-caps text-[10px] tracking-widest text-[#f4ead5] uppercase font-bold">
                  Atelier Locations
                </p>
                <p className="text-[#f4ead5]/75">
                  London (14 Savile Row) · Paris (28 Rue du Fbg Saint-Honoré)
                </p>
              </div>
              <div className="flex items-center gap-6 font-label-caps text-[10px] tracking-widest font-semibold">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff3ea5] transition-colors uppercase text-[#f4ead5]"
                >
                  Instagram
                </a>
                <a
                  href="https://vogue.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff3ea5] transition-colors uppercase text-[#f4ead5]"
                >
                  Vogue Runway
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
