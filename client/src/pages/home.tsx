import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Collections } from "@/components/sections/Collections";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Footer } from "@/components/sections/Footer";
import { MAIN_HERO_IMAGE } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <Hero image={MAIN_HERO_IMAGE} />
      <About />
      <Collections />
      <ProductGrid />
      <Footer />
    </div>
  );
}
