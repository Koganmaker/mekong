import { contact } from "@/lib/menu";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center px-4 md:px-8 py-3.5 md:py-4 bg-ink/[0.03] backdrop-blur-md border-b border-cream/[0.04]">
      {/* Left: brand in Fraunces italic (same as hero signature) */}
      <div className="flex items-center">
        <a
          href="#"
          className="font-serif italic text-xl md:text-2xl tracking-[-0.01em] text-cream hover:text-red-glow transition-colors"
        >
          Mékong
        </a>
      </div>

      {/* Center: menu */}
      <div className="flex items-center justify-center gap-3.5 md:gap-8 text-[13px] md:text-sm text-cream-dim">
        <a href="#carte" className="hover:text-cream transition-colors">
          Carte
        </a>
        <a href="#galerie" className="hover:text-cream transition-colors">
          Galerie
        </a>
        <a
          href="#visite"
          className="hover:text-cream transition-colors"
        >
          Visite
        </a>
      </div>

      {/* Right: phone + Commander */}
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
      </div>
    </nav>
  );
}
