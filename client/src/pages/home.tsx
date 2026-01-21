import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Offers } from "@/components/sections/Offers";
import { About } from "@/components/sections/About";
import { Collections } from "@/components/sections/Collections";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Footer } from "@/components/sections/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { MAIN_HERO_IMAGE, PRODUCTS, Product } from "@/lib/data";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/lib/cart";
import { SizeGuide } from "@/components/sections/SizeGuide";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileViewingImages, setIsMobileViewingImages] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const { addItem, setIsOpen: setCartOpen } = useCart();

  useEffect(() => {
    const handleOpenProduct = (e: any) => {
      const product = e.detail;
      setSelectedProduct(product);
      setCurrentImageIndex(0);
      setIsMobileViewingImages(false);
      setSelectedSize(product.availableSizes ? product.availableSizes[0] : "M");
    };

    window.addEventListener('openProduct', handleOpenProduct);
    return () => window.removeEventListener('openProduct', handleOpenProduct);
  }, []);

  const handleAddToCart = () => {
    if (selectedProduct) {
      addItem(selectedProduct, selectedSize);
      setSelectedProduct(null);
      setCartOpen(true);
    }
  };

  const nextImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
  };

  const prevImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
  };

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

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] md:h-[80vh] p-0 border-none bg-black overflow-hidden flex flex-col md:flex-row rounded-none">
          <DialogTitle className="sr-only">Product Details</DialogTitle>
          
          <div className={`relative flex-[1.5] bg-neutral-900 flex items-center justify-center overflow-hidden h-[50vh] md:h-full group ${isMobileViewingImages ? 'block' : 'hidden md:flex'}`}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={selectedProduct?.images[currentImageIndex]}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>

            {selectedProduct && selectedProduct.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-20"
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-20"
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute top-4 left-4 md:hidden rounded-none uppercase tracking-widest text-[10px] font-bold"
                  onClick={() => setIsMobileViewingImages(false)}
                >
                  Back to Details
                </Button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProduct.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        idx === currentImageIndex ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className={`w-full md:w-80 bg-background p-8 flex flex-col h-full overflow-y-auto ${isMobileViewingImages ? 'hidden md:flex' : 'flex'}`}>
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-foreground/50 hover:text-foreground md:hidden"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Mobile Image Preview */}
            <div className="md:hidden mb-6 aspect-[3/4] overflow-hidden bg-secondary relative group/mobile">
              <img 
                src={selectedProduct?.images[currentImageIndex]} 
                alt={selectedProduct?.name}
                className="w-full h-full object-cover"
              />
              {selectedProduct && selectedProduct.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 z-10"
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 z-10"
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
            </div>

            <div className="mb-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                {selectedProduct?.collection}
              </p>
              <h2 className="font-serif text-3xl mb-4">{selectedProduct?.name}</h2>
              <div className="flex items-center gap-3 mb-6">
                {selectedProduct?.onOffer ? (
                  <>
                    <span className="text-muted-foreground line-through text-sm">
                      KES {selectedProduct?.price.toLocaleString()}
                    </span>
                    <span className="text-xl font-bold text-primary italic">
                      KES {selectedProduct?.discountPrice?.toLocaleString()}
                    </span>
                  </>
                ) : (
                  <p className="text-xl font-medium">
                    KES {selectedProduct?.price.toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-auto pt-8 space-y-4">
              <Button 
                variant="outline"
                className="w-full rounded-none h-14 uppercase tracking-widest text-xs font-bold md:hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileViewingImages(true);
                }}
              >
                View Images
              </Button>
              <Button 
                className="w-full rounded-none h-14 bg-primary text-white hover:bg-primary/90 uppercase tracking-widest text-xs font-bold"
                onClick={handleAddToCart}
                disabled={!!selectedProduct?.status && selectedProduct.status === "Sold Out"}
              >
                {selectedProduct?.status === "Sold Out" ? "Sold Out" : "Add to Cart"}
              </Button>
              <div className="flex justify-center pt-2">
                <SizeGuide />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
