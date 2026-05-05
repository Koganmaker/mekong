export function Cuisine() {
  return (
    <section className="relative pt-2 md:pt-4 pb-14 md:pb-20 px-5 md:px-10">
      <div className="max-w-[820px] mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-cream-dim">
          Notre cuisine
        </span>
        <h2 className="font-serif text-[clamp(36px,5.5vw,68px)] leading-[1.08] tracking-[-0.02em] mt-4 pb-2">
          Une cuisine <em className="text-red-glow font-medium italic">franche</em>,
          <br />
          des produits frais.
        </h2>
        <div className="mt-10 space-y-5 text-cream-dim text-base md:text-lg max-w-[60ch] mx-auto">
          <p>
            Tout est préparé sur place. Les nems sont roulés à la main le matin,
            les bao cuits vapeur quelques minutes avant le service, le bo bun
            assemblé devant vous.
          </p>
          <p>
            Pas de surgelés, pas de raccourcis. Juste la cuisine que la maison
            fait depuis toujours, avec les bons gestes et le bon produit.
          </p>
        </div>
      </div>
    </section>
  );
}
