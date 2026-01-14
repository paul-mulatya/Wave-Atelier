import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Offers } from "@/components/sections/Offers";
import { About } from "@/components/sections/About";
import { Collections } from "@/components/sections/Collections";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Footer } from "@/components/sections/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { MAIN_HERO_IMAGE } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <Hero image={MAIN_HERO_IMAGE} />
      <Offers />
      <About />
      <Collections />
      <ProductGrid />
      <Footer />
      <CartDrawer />
    </div>
  );
}
