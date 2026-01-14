import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Offers } from "@/components/sections/Offers";
import { About } from "@/components/sections/About";
import { Collections } from "@/components/sections/Collections";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Footer } from "@/components/sections/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { MAIN_HERO_IMAGE } from "@/lib/data";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full w-12 h-12 bg-primary text-white shadow-lg hover:bg-primary/90"
            >
              <ArrowUp className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
