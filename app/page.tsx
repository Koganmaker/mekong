import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Cuisine } from "@/components/sections/Cuisine";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Cuisine />
        <Menu />
        <Gallery />
        <div id="visite">
          <Visit />
        </div>
      </main>
      <Footer />
    </>
  );
}
