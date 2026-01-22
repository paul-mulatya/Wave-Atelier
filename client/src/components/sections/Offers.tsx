import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data";

interface OffersProps {
  products: Product[];
}

export function Offers({ products }: OffersProps) {
  const offerItems = products.filter(p => p.onOffer);
  
  return (
    <section className="py-24 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Limited Time Offer
              </span>
              <h2 className="font-serif text-5xl md:text-7xl mb-6 text-foreground leading-tight">
                Authentic <br />
                <span className="text-primary italic">Luxury</span> Sale
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-md leading-relaxed">
                Elevate your aesthetic with our curated collection, now at 15% off. Modern silhouettes meet traditional craftsmanship.
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold text-primary">15%</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Discount</span>
              </div>
              <div className="h-12 w-px bg-primary/20" />
              <div className="relative group/btn">
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex gap-1 pointer-events-none">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        x: [0, 10, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                      className="text-primary"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </motion.div>
                  ))}
                </div>

                <Link href="/offers">
                  <Button className="relative z-10 rounded-none h-14 px-10 bg-primary text-white hover:bg-primary/90 uppercase tracking-widest text-xs font-bold transition-all hover:gap-4">
                    Shop Now
                  </Button>
                </Link>

                <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex gap-1 pointer-events-none flex-row-reverse">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        x: [0, -10, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                      className="text-primary"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"/>
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full aspect-[4/5] max-w-md group">
              <div className="absolute inset-0 bg-primary/10 -translate-x-4 translate-y-4 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
              {offerItems.length > 0 && (
                <img 
                  src={offerItems[0]?.image} 
                  alt="Limited Offer" 
                  className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
              )}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white z-20 animate-pulse">
                <div className="text-center">
                  <span className="block text-2xl font-serif font-bold italic">15%</span>
                  <span className="text-[8px] uppercase tracking-widest font-bold">OFF</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
