import { contact } from "@/lib/menu";

export function Visit() {
  return (
    <section className="relative pt-2 md:pt-4 pb-16 md:pb-24 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 md:mb-16 text-center" data-reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-cream-dim">
            Passez nous voir
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,60px)] leading-[1] tracking-[-0.02em] mt-4">
            On s'en <em className="text-cream font-medium italic">occupe</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          <article className="glass-card p-8 md:p-10 text-center" data-reveal>
            <span className="text-[11px] uppercase tracking-[0.22em] text-cream-dim">
              Téléphone
            </span>
            <a
              href={contact.phoneHref}
              className="block text-2xl md:text-3xl font-medium tracking-[-0.01em] mt-4 tabular-nums hover:text-red-glow transition-colors duration-300"
            >
              {contact.phone}
            </a>
            <p className="text-cream-dim text-sm mt-5 leading-relaxed">
              {contact.description}
            </p>
          </article>

          <article
            className="glass-card glass-card-2 p-8 md:p-10 text-center"
            data-reveal
            style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
          >
            <span className="text-[11px] uppercase tracking-[0.22em] text-cream-dim">
              Service
            </span>
            <p className="text-2xl md:text-3xl font-medium tracking-[-0.01em] mt-4 leading-tight">
              Sur place
              <br />
              <span className="text-cream-dim">ou à emporter</span>
            </p>
            <p className="text-cream-dim text-sm mt-5 leading-relaxed">
              Quelques places en salle. Sinon on vous prépare tout pour partir
            </p>
          </article>

          <article
            className="glass-card glass-card-3 p-8 md:p-10 text-center"
            data-reveal
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            <span className="text-[11px] uppercase tracking-[0.22em] text-cream-dim">
              Adresse
            </span>
            <p className="text-xl md:text-[26px] font-medium tracking-[-0.01em] mt-4 leading-[1.25]">
              {contact.address.line1}
              <br />
              <span className="text-cream-dim">{contact.address.line2}</span>
            </p>
            <p className="text-cream-dim text-sm mt-5 leading-relaxed">
              On vous attend au coin de la rue
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
