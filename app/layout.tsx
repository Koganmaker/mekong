import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Atmosphere } from "@/components/atmosphere/Atmosphere";
import { ScrollReveal } from "@/components/ScrollReveal";

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

// Display serif close in spirit to Fraunces (high-contrast, elegant) but with
// conventional, robust glyphs — used for the "Une cuisine franche…" heading
// where Fraunces' variable f/g rendered badly in Safari.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {/* Arm scroll-reveal before paint so content never flashes hidden when
            JS is off / reduced motion is on */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reveal-ready')}}catch(e){}",
          }}
        />
        <ScrollReveal />
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
