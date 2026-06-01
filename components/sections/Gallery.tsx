const photos = [
  { src: "/photos/nem.jpg", label: "Nems maison" },
  { src: "/photos/bao.jpg", label: "Bao porc" },
  { src: "/photos/xiu-mai.jpg", label: "Xiu mai" },
  { src: "/photos/rouleau-printemps.jpg", label: "Rouleau de printemps" },
  { src: "/photos/yakitori.jpg", label: "Yakitori" },
  { src: "/photos/samoussa.jpg", label: "Samoussa" },
  { src: "/photos/bowl-special.jpg", label: "Bowl signature" },
  { src: "/photos/bo-bun.jpg", label: "Bo bun" },
];

export function Gallery() {
  return (
    <section id="galerie" className="relative pt-2 md:pt-4 pb-16 md:pb-24 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="mb-12 md:mb-16 flex items-end justify-between gap-6 flex-wrap"
          data-reveal
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-cream-dim">
              En cuisine
            </span>
            <h2 className="font-serif text-[clamp(32px,5vw,60px)] leading-[1] tracking-[-0.02em] mt-4">
              Quelques <em className="text-cream font-medium italic">plats</em>
            </h2>
          </div>
          <p className="text-cream-dim text-sm md:text-base max-w-md">
            Les vraies photos, prises sur place. Pas de stock, pas de retouche
            qui ment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {photos.map((p, i) => (
            <figure
              key={p.src}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-glass-border"
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-xs md:text-sm font-medium tracking-tight">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
