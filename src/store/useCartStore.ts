import { create } from 'zustand';
import { MenuItem, CartItem } from '../types';

interface CartState {
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (item: MenuItem, qty?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, change: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => {
  // Try to load initial cart from localStorage safely
  const getInitialCart = (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('jk_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
    return [];
  };

  const saveToStorage = (cart: CartItem[]) => {
    localStorage.setItem('jk_cart', JSON.stringify(cart));
  };

  return {
    cart: getInitialCart(),
    cartOpen: false,
    setCartOpen: (open) => set({ cartOpen: open }),

    addToCart: (item, qty = 1) => {
      const { cart } = get();
      const existingIdx = cart.findIndex((i) => i.menuItem.id === item.id);
      let newCart = [...cart];

      if (existingIdx > -1) {
        newCart[existingIdx] = {
          ...newCart[existingIdx],
          quantity: newCart[existingIdx].quantity + qty,
        };
      } else {
        newCart.push({ menuItem: item, quantity: qty });
      }

      set({ cart: newCart });
      saveToStorage(newCart);
    },

    removeFromCart: (itemId) => {
      const { cart } = get();
      const newCart = cart.filter((i) => i.menuItem.id !== itemId);
      set({ cart: newCart });
      saveToStorage(newCart);
    },

    updateQuantity: (itemId, change) => {
      const { cart } = get();
      const existingIdx = cart.findIndex((i) => i.menuItem.id === itemId);
      if (existingIdx === -1) return;

      let newCart = [...cart];
      const newQty = newCart[existingIdx].quantity + change;

      if (newQty <= 0) {
        newCart.splice(existingIdx, 1);
      } else {
        newCart[existingIdx] = {
          ...newCart[existingIdx],
          quantity: newQty,
        };
      }

      set({ cart: newCart });
      saveToStorage(newCart);
    },

    clearCart: () => {
      set({ cart: [] });
      saveToStorage([]);
    },

    getTotalItems: () => {
      const { cart } = get();
      return cart.reduce((sum, item) => sum + item.quantity, 0);
    },

    getTotalPrice: () => {
      const { cart } = get();
      return cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
    },
  };
});
