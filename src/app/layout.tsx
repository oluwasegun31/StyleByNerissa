import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Local self-hosted headline font (GDPR-compliant, no third-party tracking)
const morside = localFont({
  src: "../assets/Morside/Morside.otf",
  variable: "--font-morside",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Style by Nerissa — Haute Couture & Ready-to-Wear Atelier",
  description:
    "Bespoke bridal and couture commissions alongside small-batch ready-to-wear essentials, hand-finished in our London and Paris ateliers.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${morside.variable}`}>
      <body className="min-h-full flex flex-col bg-surface text-on-surface antialiased selection:bg-primary selection:text-on-primary">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
