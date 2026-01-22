import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">
              The Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-foreground">
              "True style doesn't scream, <br className="hidden md:block"/> it whispers confidence."
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground font-light leading-relaxed">
              <p className="mb-6">
                Our Minimalism collection is a celebration of clean silhouettes, muted tones, 
                and timeless design. Every piece is crafted to elevate your wardrobe with subtle power.
              </p>
              <p>
                From the stitching to the fit, designed for the modern movers.
                We blend structured silhouettes with relaxed comfort, elevating everyday 
                wear into luxury streetwear.
              </p>
            </div>
            <div className="mt-12">
              <Button variant="link" className="text-foreground border-b border-foreground rounded-none px-0 pb-1 h-auto text-lg font-serif italic hover:no-underline hover:opacity-70">
                Read our story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
