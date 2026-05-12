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
  title: "Mékong — Cuisine vietnamienne",
  description:
    "Mékong, restaurant vietnamien. Nems, bo bun, raviolis vapeur, rouleaux de printemps faits maison. Vente à emporter. 01 23 45 67 89.",
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
            src="/photos/bg-restaurant.png"
            alt=""
            className="bg-vegetal"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        </div>
        {/* Neon flicker + embers */}
        <Atmosphere />
        {children}
      </body>
    </html>
  );
}
