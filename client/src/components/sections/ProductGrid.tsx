import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function ProductGrid() {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-16">Selected Pieces</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 z-10 bg-primary text-white hover:bg-primary rounded-none tracking-widest text-[10px] py-1 px-3 uppercase">
                    New Arrival
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
                <p className="text-sm font-medium">
                  KES {product.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
