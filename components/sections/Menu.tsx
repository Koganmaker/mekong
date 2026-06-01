import { menu } from "@/lib/menu";

export function Menu() {
  return (
    <section id="carte" className="relative pt-2 md:pt-4 pb-16 md:pb-24 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 md:mb-16" data-reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-cream-dim">
            La carte
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,60px)] leading-[1] tracking-[-0.02em] mt-4">
            Tous nos <em className="text-cream font-medium italic">plats</em>
          </h2>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="rounded-2xl bg-ink-2/60 backdrop-blur-md border border-glass-border p-6 md:p-12"
        >
          {menu.map((cat, i) => (
            <div key={cat.title} className={i > 0 ? "mt-12" : ""}>
              <div className="flex items-baseline justify-between border-b border-glass-border pb-3 mb-5">
                <h3 className="font-serif text-2xl md:text-3xl tracking-[-0.01em]">
                  {cat.title}
                </h3>
                <span className="text-xs md:text-sm text-cream-dim">
                  {cat.from}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 group"
                  >
                    <div className="min-w-0">
                      <div className="text-base font-medium tracking-[-0.005em] group-hover:text-lantern transition-colors duration-300">
                        {item.name}
                      </div>
                      <div className="text-xs md:text-[13px] text-cream-dim mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-cream whitespace-nowrap shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
