import { contact } from "@/lib/menu";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-5 md:px-10 pt-16 pb-10 border-t border-glass-border">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-red shadow-[0_0_14px_var(--color-red)]" />
            <span className="font-serif italic text-2xl md:text-3xl">Mékong</span>
          </div>
          <p className="text-cream-dim text-sm mt-3 max-w-sm">
            Cuisine vietnamienne · Vente à emporter
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm">
          <a
            href={contact.phoneHref}
            className="text-cream hover:text-red-glow transition-colors duration-300"
          >
            {contact.phone}
          </a>
          <span className="text-cream-dim">© {year} Mékong</span>
        </div>
      </div>
    </footer>
  );
}
