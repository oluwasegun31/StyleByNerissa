"use client";

import React, { useState, useEffect } from "react";
import { ATELIER_LOCATIONS } from "@/data/mockData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-barbie-pink text-[#161412] py-20 sm:py-28 border-t border-black/15">
      {/* 100% Full-Width Container (Screen Restriction Removed) */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Massive Editorial Pullout */}
        <div className="pb-12 border-b border-black/15 text-center overflow-hidden">
          <span className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.18em] text-[#161412] block select-none font-medium">
            Your Silhouette Awaits
          </span>
        </div>

        {/* 3-Column Atelier Information Grid */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Col 1: Private Commissions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <p className="font-label-caps text-xs text-black/75 tracking-widest uppercase font-semibold">
                Private Commissions
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#161412] font-semibold leading-snug">
                Book an in-studio consultation or virtual fitting session.
              </h3>
              <p className="font-body-sm text-black/80 max-w-lg leading-relaxed">
                Each commission begins with architectural proportion analysis,
                tactile fabric selection, and precise bespoke draping overseen
                personally by Nerissa.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#booking"
                className="inline-flex items-center justify-center bg-[#161412] text-white font-label-caps text-xs font-semibold rounded-full px-7 py-3 transition-all hover:bg-black shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                Schedule Fitting
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-black/30 text-[#161412] font-label-caps text-xs rounded-full px-6 py-3 transition-colors hover:bg-black/10 gap-2 font-medium"
              >
                <span className="material-symbols-outlined text-[16px]">
                  chat
                </span>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Atelier Locations */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 text-black/85">
            {ATELIER_LOCATIONS.map((atelier) => (
              <div key={atelier.city} className="space-y-3">
                <h4 className="font-label-caps text-xs text-[#161412] font-bold tracking-wider uppercase">
                  {atelier.name}
                </h4>
                <p className="font-body-sm leading-relaxed text-black/80">
                  {atelier.addressLines.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <p className="font-label-sm text-black/65 pt-1 font-medium">
                  {atelier.schedule}
                </p>
              </div>
            ))}
          </div>

          {/* Col 3: Confidential Newsletter Protocol */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-label-caps text-xs text-[#161412] font-bold tracking-wider uppercase">
              Private Capsule Release
            </h4>
            <p className="font-body-sm text-black/80 leading-relaxed">
              Receive confidential invitations to micro-capsules, fabric
              archives, and private salon viewings.
            </p>

            {subscribed ? (
              <div className="p-3 bg-black/10 border border-black/20 rounded-lg text-xs text-[#161412] font-label-sm font-semibold">
                Thank you. Atelier correspondence protocol initiated.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3 pt-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your correspondence email"
                    className="w-full bg-transparent border-b border-black/30 py-2.5 font-body-sm text-[#161412] placeholder:text-black/45 focus:outline-none focus:border-black transition-colors text-sm pr-8"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-0 bottom-2 text-[#161412] hover:text-black transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
                <p className="font-label-sm text-black/60 text-[11px]">
                  Atelier confidential protocol respected.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Metadata & Legal Bar with Dynamic Year */}
        <div className="pt-8 border-t border-black/15 flex flex-col md:flex-row items-center justify-between gap-4 text-black/75 font-label-sm text-xs">
          <div className="flex flex-wrap items-center gap-6">
            <p>
              © {currentYear} Style by Nerissa Atelier Ltd. All rights reserved.
            </p>
            <a
              href="#sustainability"
              className="hover:text-black transition-colors"
            >
              Sustainability Pledge
            </a>
            <a href="#terms" className="hover:text-black transition-colors">
              Terms of Bespoke Service
            </a>
          </div>
          <div className="flex items-center gap-6 font-label-caps text-[10px] tracking-widest font-semibold">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://vogue.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Vogue Runway
            </a>
            <a href="#journal" className="hover:text-black transition-colors">
              Journal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
