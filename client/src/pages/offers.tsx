import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, BRAND } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { useCart, CartItem } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SizeGuide } from "@/components/sections/SizeGuide";

export default function OffersPage() {
  const offerItems = PRODUCTS.filter(p => p.onOffer);
  const { addItem, setIsOpen } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<null | typeof PRODUCTS[0]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileViewingImages, setIsMobileViewingImages] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("M");

  const openProduct = (product: typeof PRODUCTS[0]) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setIsMobileViewingImages(false);
    setSelectedSize(product.availableSizes ? product.availableSizes[0] : "M");
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addItem(selectedProduct, selectedSize);
      setSelectedProduct(null);
      setIsOpen(true);
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
                onClick={() => openProduct(product)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                {product.status && (
                  <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    {product.status}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  15% OFF
                </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(product, "M");
                        setIsOpen(true);
                      }}
                      className="rounded-none bg-white text-black hover:bg-white/90 font-bold uppercase tracking-widest text-xs h-12 px-8 z-10"
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
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
                {/* Back to details button for mobile image view */}
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
            
            <div className="mb-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                {selectedProduct?.collection}
              </p>
              <h2 className="font-serif text-3xl mb-4">{selectedProduct?.name}</h2>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-muted-foreground line-through text-sm">
                  KES {selectedProduct?.price.toLocaleString()}
                </span>
                <span className="text-xl font-bold text-primary italic">
                  KES {selectedProduct?.discountPrice?.toLocaleString()}
                </span>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground font-light leading-relaxed">
                <p>
                  Elevated luxury streetwear crafted with precision in Nairobi. 
                  Designed for the modern mover who values authenticity and timeless silhouettes.
                </p>
                <div className="pt-6">
                  <p className="text-xs uppercase tracking-widest mb-3">Select Size</p>
                  <div className="flex flex-wrap gap-2">
                    {(selectedProduct?.availableSizes || ["S", "M", "L", "XL"]).map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 border text-xs font-bold transition-colors ${
                          selectedSize === size
                            ? "bg-primary text-white border-primary"
                            : "border-border/60 hover:border-primary"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
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

      <Footer />
      <CartDrawer />
    </div>
  );
}
