"use client";

import { useState } from "react";
import { contact } from "@/lib/menu";

const links = [
  { href: "#carte", label: "Carte" },
  { href: "#galerie", label: "Galerie" },
  { href: "#visite", label: "Visite" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/[0.03] backdrop-blur-md border-b border-cream/[0.04]">
      <div className="flex items-center justify-between md:grid md:grid-cols-3 px-4 md:px-8 py-3.5 md:py-4">
        {/* Left: brand in Fraunces italic (same as hero signature) */}
        <div className="flex items-center">
          <a
            href="#"
            className="font-serif italic text-xl md:text-2xl tracking-[-0.01em] text-cream hover:text-red-glow transition-colors"
          >
            Mékong
          </a>
        </div>

        {/* Center: section links — desktop only */}
        <div className="hidden md:flex items-center justify-center gap-8 text-sm text-cream-dim">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cream transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: phone (≥sm) + Commander + mobile menu toggle */}
        <div className="flex items-center justify-end gap-3 md:gap-5">
          <a
            href={contact.phoneHref}
            className="hidden sm:inline text-sm font-medium text-cream tabular-nums hover:text-red-glow transition-colors"
          >
            {contact.phone}
          </a>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 px-3.5 py-2 md:px-4 md:py-2.5 rounded-full bg-red/15 text-cream text-xs md:text-sm font-semibold backdrop-blur-md border border-red-glow/30 shadow-[0_8px_24px_-6px_rgba(193,39,45,0.25)] hover:bg-red/35 hover:border-red-glow/55 hover:-translate-y-0.5 transition-all duration-300"
          >
            Commander
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 -mr-1 text-cream"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3.5" y1="7" x2="20.5" y2="7" />
                  <line x1="3.5" y1="12" x2="20.5" y2="12" />
                  <line x1="3.5" y1="17" x2="20.5" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-cream/[0.06] transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-2 bg-ink/40 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-cream-dim hover:text-cream transition-colors border-b border-cream/[0.05] last:border-b-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={contact.phoneHref}
            onClick={() => setOpen(false)}
            className="py-3 text-base font-medium text-cream tabular-nums"
          >
            {contact.phone}
          </a>
        </div>
      </div>
    </nav>
  );
}
