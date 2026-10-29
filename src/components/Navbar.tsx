"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "@/data/mockData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("bespoke");

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
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 shadow-none border-none ${
          scrolled ? "backdrop-blur-lg" : ""
        }`}
        style={{
          backgroundColor: scrolled
            ? "rgba(251, 34, 142, 0.95)"
            : "var(--color-barbie-pink)",
        }}
      >
        <div className="h-20 w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 flex items-center justify-between">
          {/* Brand Wordmark (Initials on Mobile, Full Name on Desktop) */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-headline-sm text-lg sm:text-xl uppercase tracking-[0.25em] text-[#161412] hover:opacity-80 transition-opacity whitespace-nowrap font-medium"
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
              const isActive = activeLink === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveLink(item.id)}
                  className={`font-label-caps text-xs tracking-[0.14em] uppercase py-2 relative group inline-flex flex-col items-center justify-center transition-colors ${
                    isActive
                      ? "text-[#161412] font-semibold"
                      : "text-[#161412]/75 hover:text-[#161412] font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Underline expanding from 0% to 100% on hover, persistent when active */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#161412] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Desktop Fitting CTA */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#booking"
              className="hidden lg:inline-flex items-center justify-center bg-stormy-teal text-white font-label-caps text-xs uppercase rounded-full px-6 py-2.5 transition-all duration-300 hover:brightness-110 shadow-sm"
            >
              Book Fitting
            </a>

            {/* Shopping Bag Icon with Counter */}
            <button
              type="button"
              aria-label="View shopping bag"
              className="relative flex items-center justify-center text-[#161412] hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">
                shopping_bag
              </span>
              <span className="absolute -top-1.5 -right-2 bg-stormy-teal text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-label-caps font-semibold">
                0
              </span>
            </button>

            {/* Client Account Silhouette */}
            <div
              title="Atelier Patron Portal"
              className="w-8 h-8 rounded-full bg-stormy-teal flex items-center justify-center shrink-0 cursor-pointer hover:brightness-110 transition-all text-white"
            >
              <span className="material-symbols-outlined text-white text-[18px]">
                person
              </span>
            </div>

            {/* Mobile Menu Trigger Button */}
            <button
              type="button"
              aria-label="Open Navigation Menu"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#161412] focus:outline-none flex items-center gap-2 cursor-pointer"
            >
              <span className="font-label-caps text-[11px] tracking-widest hidden sm:inline">
                MENU
              </span>
              <span className="material-symbols-outlined text-[26px]">
                menu
              </span>
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
            style={{ backgroundColor: "var(--color-barbie-pink)" }}
            className="fixed inset-0 w-full h-[100dvh] bg-barbie-pink text-[#161412] z-[100] flex flex-col justify-between px-6 sm:px-12 py-6 overflow-y-auto"
          >
            {/* Top Bar: Brand + Close Trigger */}
            <div className="flex items-center justify-between border-b border-black/15 pb-5">
              <span className="font-headline-sm text-base uppercase tracking-[0.25em] text-[#161412] font-semibold">
                Style by Nerissa
              </span>
              <button
                type="button"
                aria-label="Close Navigation Menu"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-2 text-[#161412] hover:opacity-75 transition-opacity cursor-pointer py-1 px-2"
              >
                <span className="font-label-caps text-xs tracking-[0.2em] uppercase text-[#161412] font-semibold">
                  Close
                </span>
                <span className="material-symbols-outlined text-[24px] text-[#161412]">
                  close
                </span>
              </button>
            </div>

            {/* Main Navigation: Large Grand Serif Typography with Hairline Rows */}
            <div className="my-auto py-8 flex flex-col justify-center">
              <nav className="flex flex-col divide-y divide-black/15">
                {NAV_LINKS.map((item, index) => {
                  const isActive = activeLink === item.id;
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
                      <a
                        href={item.href}
                        onClick={() => {
                          setActiveLink(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className="group py-5 sm:py-6 flex items-center justify-between transition-all duration-300 hover:pl-2"
                      >
                        <div className="flex items-baseline gap-4 sm:gap-6">
                          <span className="font-label-caps text-xs tracking-widest text-black/60 font-semibold">
                            {itemNumber}
                          </span>
                          <span
                            className={`font-serif text-2xl sm:text-4xl transition-colors ${
                              isActive
                                ? "text-[#161412] italic font-semibold"
                                : "text-[#161412] font-normal group-hover:opacity-75"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-[#161412] text-[20px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                          north_east
                        </span>
                      </a>
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
                <a
                  href="#booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-stormy-teal text-white font-label-caps text-xs uppercase tracking-[0.16em] rounded-full py-4 transition-colors hover:brightness-110 shadow-md gap-2 font-semibold"
                >
                  <span>Book Private Fitting</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Bottom Atelier Provenance & Concierge Information */}
            <div className="border-t border-black/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-black/80 font-label-sm text-xs">
              <div className="space-y-1">
                <p className="font-label-caps text-[10px] tracking-widest text-[#161412] uppercase font-bold">
                  Atelier Locations
                </p>
                <p className="text-black/75">
                  London (14 Savile Row) · Paris (28 Rue du Fbg Saint-Honoré)
                </p>
              </div>
              <div className="flex items-center gap-6 font-label-caps text-[10px] tracking-widest font-semibold">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors uppercase text-[#161412]"
                >
                  Instagram
                </a>
                <a
                  href="https://vogue.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors uppercase text-[#161412]"
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
