import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<null | typeof PRODUCTS[0]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const { addItem, setIsOpen } = useCart();

  const openProduct = (product: typeof PRODUCTS[0]) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setSelectedSize("M");
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
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-16">Our Collection</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openProduct(product)}
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
                {product.isNew && !product.onOffer && !product.status && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-white hover:bg-primary rounded-none tracking-widest text-[10px] py-1 px-3 uppercase">
                    New Arrival
                  </Badge>
                )}
                {product.onOffer && !product.status && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-white hover:bg-primary rounded-none tracking-widest text-[10px] py-1 px-3 uppercase">
                    15% OFF
                  </Badge>
                )}
                {product.status && (
                  <Badge className="absolute top-4 left-4 z-10 bg-black/80 text-white hover:bg-black/80 rounded-none tracking-widest text-[10px] py-1 px-3 uppercase">
                    {product.status}
                  </Badge>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  {product.collection}
                </p>
                <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-3">
                  {product.onOffer ? (
                    <>
                      <span className="text-sm text-muted-foreground line-through">
                        KES {product.price.toLocaleString()}
                      </span>
                      <span className="text-sm font-bold text-primary italic">
                        KES {product.discountPrice?.toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <p className="text-sm font-medium">
                      KES {product.price.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] md:h-[80vh] p-0 border-none bg-black overflow-hidden flex flex-col md:flex-row rounded-none">
          <DialogTitle className="sr-only">Product Details</DialogTitle>
          
          {/* Image Slider */}
          <div className="relative flex-[1.5] bg-neutral-900 flex items-center justify-center overflow-hidden h-[50vh] md:h-full group">
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                >
                  <ChevronRight className="h-8 w-8" />
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

          {/* Product Info */}
          <div className="w-full md:w-80 bg-background p-8 flex flex-col h-full overflow-y-auto">
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
                  Designed for the modern mover who values authenticity and timeless silhouettes.
                </p>
                <ul className="space-y-2 pt-4">
                  <li>• Premium African-sourced materials</li>
                  <li>• Hand-finished detailing</li>
                  <li>• Relaxed fit for modern comfort</li>
                </ul>

                <div className="pt-6">
                  <p className="text-xs uppercase tracking-widest mb-3">Select Size</p>
                  <div className="flex gap-2">
                    {["S", "M", "L", "XL"].map((size) => (
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
                  // Trigger image viewing mode
                  setCurrentImageIndex(0);
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
              <Button variant="outline" className="w-full rounded-none h-14 uppercase tracking-widest text-xs font-bold">
                Size Guide
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
