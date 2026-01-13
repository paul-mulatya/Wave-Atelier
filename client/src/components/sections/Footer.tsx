import { BRAND } from "@/lib/data";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold">{BRAND.name}</h3>
            <p className="text-white/60 max-w-xs font-light">
              {BRAND.description}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl">Contact Us</h4>
            <div className="space-y-2 text-white/60 font-light">
              <p>For inquiries, collaborations, or support.</p>
              <div className="pt-4 space-y-2">
                <p className="flex items-center gap-2">
                  <span className="uppercase text-xs tracking-widest w-16 opacity-50">Email</span>
                  <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">{BRAND.email}</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="uppercase text-xs tracking-widest w-16 opacity-50">Phone</span>
                  <a href={`tel:${BRAND.phone}`} className="hover:text-white transition-colors">{BRAND.phone}</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="uppercase text-xs tracking-widest w-16 opacity-50">Visit</span>
                  <span>{BRAND.address}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            <div className="pt-6">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Subscribe to our newsletter</p>
              <div className="flex border-b border-white/20 pb-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/20 font-light"
                />
                <button className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-light">
          <p>&copy; 2026 {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
