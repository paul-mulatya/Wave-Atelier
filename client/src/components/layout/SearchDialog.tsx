import { useState, useMemo } from "react";
import { PRODUCTS } from "@/lib/data";
import { Search, X, ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SearchDialogProps {
  onProductClick: (product: any) => void;
}

export function SearchDialog({ onProductClick }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const searchLower = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.collection.toLowerCase().includes(searchLower) ||
        p.category.toLowerCase().includes(searchLower)
    );
  }, [query]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
          <Search className="w-5 h-5" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[70vh] flex flex-col p-0 gap-0 rounded-none border-none">
        <DialogHeader className="p-4 border-b flex flex-row items-center gap-2 space-y-0">
          <DialogTitle className="sr-only">Search Products</DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setOpen(false)}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1 flex items-center gap-2">
            <Search className="w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search our collection..."
              className="border-none focus-visible:ring-0 text-lg h-12"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setOpen(false)}
            className="hidden md:flex"
          >
            <X className="w-5 h-5" />
          </Button>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto p-4">
          {query && results.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No results found for "{query}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {results.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-2 hover:bg-secondary cursor-pointer transition-colors group"
                  onClick={() => {
                    onProductClick(product);
                    setOpen(false);
                  }}
                >
                  <div className="w-16 h-20 bg-secondary flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-serif text-sm group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                      {product.collection}
                    </p>
                    <p className="text-xs font-medium mt-1">
                      KES {product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!query && (
            <div className="text-center py-10">
              <p className="text-muted-foreground text-sm italic">Type to search for products, collections, or styles...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
