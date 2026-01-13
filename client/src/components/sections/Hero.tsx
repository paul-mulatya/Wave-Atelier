import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  image: string;
}

export function Hero({ image }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay */}
        <img
          src={image}
          alt="Wave Kenya Hero"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4">
            New Collection
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6">
            Modern African <br /> Luxury
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 font-light mb-8 leading-relaxed">
            Rooted in authenticity. Crafted with precision. <br/>
            Where heritage meets contemporary street style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-base tracking-widest uppercase"
            >
              Shop Collection
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 hover:text-white hover:border-white rounded-none px-8 py-6 text-base tracking-widest uppercase"
            >
              View Lookbook
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-8 h-8 opacity-70" />
      </motion.div>
    </section>
  );
}
