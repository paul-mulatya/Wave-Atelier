import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, Product } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { useCart } from "@/lib/cart";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SizeGuide } from "@/components/sections/SizeGuide";
import { Input } from "@/components/ui/input";

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileViewingImages, setIsMobileViewingImages] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSizeFilter, setActiveSizeFilter] = useState<string | null>(null);
  const { addItem, setIsOpen } = useCart();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize = !activeSizeFilter || product.availableSizes?.includes(activeSizeFilter) || (!product.availableSizes && ["S", "M", "L", "XL"].includes(activeSizeFilter));
    return matchesSearch && matchesSize;
  });

  const sizes = ["S", "M", "L", "XL"];

  const openProduct = (product: Product) => {
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
              The Full Experience
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 text-primary">Our Collection</h1>
            <p className="text-muted-foreground font-light text-xl max-w-2xl mx-auto italic">
              Modern African Luxury
            </p>
          </header>

          <div className="max-w-2xl mx-auto mb-16 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 h-12 bg-transparent border border-border rounded-none focus:outline-none focus:border-primary px-4 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex justify-center gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSizeFilter(activeSizeFilter === size ? null : size)}
                  className={`w-12 h-12 border text-[10px] font-bold tracking-widest transition-all duration-300 ${
                    activeSizeFilter === size
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-muted-foreground border-border hover:border-black hover:text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openProduct(product)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                  {product.status && (
                    <Badge className="absolute top-2 left-2 z-10 bg-black/80 text-white rounded-none tracking-widest text-[8px] py-1 px-2 uppercase">
                      {product.status}
                    </Badge>
                  )}
                  {product.onOffer && !product.status && (
                    <Badge className="absolute top-2 left-2 z-10 bg-primary text-white rounded-none tracking-widest text-[8px] py-1 px-2 uppercase">
                      15% OFF
                    </Badge>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="text-left px-1">
                  <h3 className="font-serif text-sm md:text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    {product.onOffer ? (
                      <>
                        <span className="text-muted-foreground line-through text-[10px] md:text-xs">
                          KES {product.price.toLocaleString()}
                        </span>
                        <span className="text-primary font-bold text-xs md:text-sm italic">
                          KES {product.discountPrice?.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-foreground font-medium text-xs md:text-sm">
                        KES {product.price.toLocaleString()}
                      </span>
                    )}
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
              <div className="space-y-4 text-sm text-muted-foreground font-light leading-relaxed">
                <p>
                  Elevated luxury streetwear crafted with precision in Nairobi. 
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
