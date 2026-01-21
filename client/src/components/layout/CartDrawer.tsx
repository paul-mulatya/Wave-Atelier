import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart, getCartTotal, CartItem } from "@/lib/cart";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useLocation } from "wouter";

import { BRAND } from "@/lib/data";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem } = useCart();
  const [, setLocation] = useLocation();

  const itemCount = items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);
  const total = getCartTotal(items);

  const handleStartShopping = () => {
    setIsOpen(false);
    setLocation("/shop");
  };

  const handleCheckout = () => {
    const phoneNumber = BRAND.phone.replace(/\D/g, "");
    let message = "Hello Wave Kenya, I would like to place an order:\n\n";
    
    items.forEach((item) => {
      message += `${item.product.name}${item.size ? ` (Size: ${item.size})` : ""} x ${item.quantity}\n`;
    });
    
    message += `\nTotal: KES ${total.toLocaleString()}\n\n`;
    message += "Please let me know how to proceed with payment and delivery.";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-border/40">
        <SheetHeader className="p-6 border-b border-border/40">
          <SheetTitle className="font-serif text-2xl flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Bag ({itemCount})
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 px-6">
          {items.length === 0 ? (
            <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/20" />
              <p className="text-muted-foreground font-light">Your bag is empty</p>
              <Button 
                variant="outline" 
                className="rounded-none uppercase tracking-widest text-xs font-bold"
                onClick={handleStartShopping}
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="py-6 space-y-6">
              {items.map((item: CartItem) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="relative aspect-[3/4] w-24 overflow-hidden bg-secondary flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="font-serif text-lg leading-tight mb-1">{item.product.name}</h4>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.product.collection}</p>
                        {item.size && (
                          <>
                            <span className="text-[10px] text-muted-foreground/40">•</span>
                            <span className="text-[10px] font-bold text-primary">SIZE {item.size}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border/60">
                        <button 
                          className="p-2 hover:bg-secondary transition-colors"
                          onClick={() => updateQuantity(item.product.id, -1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          className="p-2 hover:bg-secondary transition-colors"
                          onClick={() => updateQuantity(item.product.id, 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        className="text-muted-foreground hover:text-destructive transition-colors"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right py-1">
                    <p className="text-sm font-medium">
                      KES {((item.product.discountPrice || item.product.price) * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <SheetFooter className="p-6 bg-secondary/30 flex-col space-y-4 sm:flex-col">
            <Separator className="mb-2" />
            <div className="flex justify-between items-center w-full">
              <span className="text-muted-foreground font-light uppercase tracking-widest text-xs">Subtotal</span>
              <span className="text-xl font-medium font-serif italic">KES {total.toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-muted-foreground/60 text-center uppercase tracking-tighter">
              Shipping and taxes calculated at checkout
            </p>
            <Button 
              className="w-full rounded-none h-14 bg-primary text-white hover:bg-primary/90 uppercase tracking-widest text-xs font-bold"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
