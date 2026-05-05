import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Atmosphere } from "@/components/atmosphere/Atmosphere";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saigon — Cuisine vietnamienne · Biscarrosse",
  description:
    "Saigon, restaurant vietnamien à Biscarrosse. Nems, bo bun, raviolis vapeur, rouleaux de printemps faits maison. Vente à emporter. 05 58 78 06 07.",
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {/* Global atmospheric background — image fixed (no movement) */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none" aria-hidden="true">
          <img
            src="/photos/bg-vegetal.jpg"
            alt=""
            className="bg-vegetal"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-black/85" />
        </div>
        {/* Neon flicker + embers */}
        <Atmosphere />
        {children}
      </body>
    </html>
  );
}
