import { create } from 'zustand';
import { PRODUCTS } from './data';

export type Product = typeof PRODUCTS[0];

export type CartItem = {
  product: Product;
  quantity: number;
  size?: string;
};

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (product: Product, size?: string) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, delta: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  isOpen: false,
  setIsOpen: (open: boolean) => set({ isOpen: open }),
  addItem: (product: Product, size?: string) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.product.id === product.id && i.size === size);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            (i.product.id === product.id && i.size === size) ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { product, quantity: 1, size }] };
    });
  },
  removeItem: (productId: number) =>
    set((state) => ({ items: state.items.filter((i) => i.product.id !== productId) })),
  updateQuantity: (productId: number, delta: number) => {
    set((state) => ({
      items: state.items.map((i) =>
        i.product.id === productId
          ? { ...i, quantity: Math.max(1, i.quantity + delta) }
          : i
      ),
    }));
  },
  clearCart: () => set({ items: [] }),
}));

export const getCartTotal = (items: CartItem[]) => {
  return items.reduce(
    (acc: number, item: CartItem) => acc + (item.product.discountPrice || item.product.price) * item.quantity,
    0
  );
};
