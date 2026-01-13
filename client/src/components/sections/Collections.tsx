import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function Collections() {
  return (
    <section id="collections" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2 block">
              Discover
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Our Collections
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {COLLECTIONS.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden border-none rounded-none shadow-none bg-transparent">
                <CardContent className="p-0 relative aspect-[3/4] overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-serif text-3xl mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-white/80 text-sm font-light line-clamp-2 max-w-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {collection.description}
                    </p>
                    <div className="flex items-center gap-2 text-white text-xs tracking-widest uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      Explore <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
