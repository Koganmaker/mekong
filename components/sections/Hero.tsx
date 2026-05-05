import { contact } from "@/lib/menu";

export function Hero() {
  return (
    <section className="relative overflow-hidden isolate px-5 md:px-10 pt-[34vh] pb-10 md:pb-14">
      {/* Subtle ember/red glow overlays only — bg is global */}
      <div
        className="absolute inset-0 -z-10 mix-blend-screen pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 30%, rgba(255,107,53,.18), transparent 65%), radial-gradient(ellipse 40% 30% at 80% 80%, rgba(193,39,45,.18), transparent 60%)",
        }}
      />

      {/* Stack: headline + signature + hours, tightly grouped */}
      <div className="text-center fade-up max-w-[920px] mx-auto">
        <h1 className="font-serif font-normal text-[clamp(40px,7.5vw,104px)] leading-[0.98] tracking-[-0.025em]">
          La cuisine d'Asie,
          <br />
          ici, <em className="text-red-glow font-medium italic">comme là-bas.</em>
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl text-cream/90 mt-5 tracking-[-0.01em]">
          — Saigon
        </p>
        <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-cream mt-10">
          {contact.hours}
        </p>
      </div>
    </section>
  );
}
