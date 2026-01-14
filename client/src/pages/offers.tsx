import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function OffersPage() {
  const offerItems = PRODUCTS.filter(p => p.onOffer);
  const { addItem, setIsOpen } = useCart();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <header className="mb-20 text-center">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              The Sale Event
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Seasonal Offers</h1>
            <p className="text-muted-foreground font-light text-xl max-w-2xl mx-auto">
              Exclusive 15% discount on our signature tie-dye collection and selected luxury pieces.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {offerItems.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    15% OFF
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button 
                      onClick={() => {
                        addItem(product, "M");
                        setIsOpen(true);
                      }}
                      className="rounded-none bg-white text-black hover:bg-white/90 font-bold uppercase tracking-widest text-xs h-12 px-8"
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-2xl mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-muted-foreground line-through text-sm">
                      KES {product.price.toLocaleString()}
                    </span>
                    <span className="text-primary font-bold text-lg italic">
                      KES {product.discountPrice?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
