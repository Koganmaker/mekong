export type MenuItem = {
  name: string;
  desc: string;
  price: string;
};

export type MenuCategory = {
  title: string;
  from: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    title: "Fritures",
    from: "à partir de 1,30€",
    items: [
      { name: "Nem au porc", desc: "Vermicelles, champignons noirs, carottes", price: "1,30€" },
      { name: "Nem au poulet", desc: "Poulet, légumes croquants", price: "1,30€" },
      { name: "Nem aux crevettes", desc: "Crevettes fraîches, herbes", price: "1,30€" },
      { name: "Nem végétarien", desc: "Vermicelles, légumes", price: "1,30€" },
      { name: "Samoussa bœuf", desc: "Bœuf épicé, pomme de terre", price: "1,30€" },
      { name: "Samoussa végétarien", desc: "Légumes croquants, épices douces", price: "1,30€" },
      { name: "Crevettes panées", desc: "Croustillant doré, sauce sucrée-salée", price: "1,30€" },
      { name: "Beignet de poulet", desc: "Mariné aux 5 épices", price: "1,30€" },
    ],
  },
  {
    title: "Produits vapeur",
    from: "à partir de 4€",
    items: [
      { name: "Bao bao au porc", desc: "Pain vapeur moelleux, sauce hoisin", price: "4€" },
      { name: "Xiu mai", desc: "Boulettes vapeur, sauce tomate", price: "6€" },
      { name: "Hô kao", desc: "Raviolis vapeur transparents", price: "6€" },
      { name: "Banh cuon", desc: "Crêpes vapeur farcies, porc, crevettes", price: "6€" },
    ],
  },
  {
    title: "Plats chauds",
    from: "à partir de 4€",
    items: [
      { name: "Brochette yakitori", desc: "Poulet mariné soja-mirin, grillé minute", price: "6€" },
      { name: "Porc caramel", desc: "Mijoté, sucre brun, gingembre", price: "6€" },
      { name: "Riz parfumé jasmin", desc: "Cuit à la vapeur", price: "4€" },
      { name: "Nouilles chinoises", desc: "Wok de légumes, sauce maison", price: "4€" },
    ],
  },
  {
    title: "Coups de cœur",
    from: "à partir de 3€",
    items: [
      { name: "Rouleau de printemps", desc: "Crevettes, menthe, vermicelles", price: "3€" },
      { name: "Bo bun bœuf", desc: "Le best-seller de la maison", price: "8€" },
      { name: "Bo bun poulet", desc: "Poulet citronnelle, herbes fraîches", price: "8€" },
      { name: "Accompagnement maison", desc: "Avec friture ou plat chaud", price: "4€" },
    ],
  },
];

export const contact = {
  phone: "01 23 45 67 89",
  phoneHref: "tel:0123456789",
  description: "Vente à emporter",
  address: {
    line1: "1 rue de l'Exemple",
    line2: "00000 Ville",
  },
  hours: "Mardi → Dimanche · 12h — 14h · 18h — 21h30",
};
