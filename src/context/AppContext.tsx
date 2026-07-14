import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem } from '../types';
import { useCartStore } from '../store/useCartStore';

interface AppContextType {
  activePage: string;
  setActivePage: (page: string) => void;
  cart: CartItem[];
  addToCart: (item: MenuItem, qty?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, change: number) => void;
  clearCart: () => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedMenuCategory: string;
  setSelectedMenuCategory: (category: string) => void;
  deliveryCharge: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePageInternal] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<string>('All');
  
  const deliveryCharge = 40; // Flat ₹40 delivery fee

  const {
    cart,
    cartOpen,
    setCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCartStore();

  const setActivePage = (page: string) => {
    setActivePageInternal(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartOpen,
        setCartOpen,
        searchQuery,
        setSearchQuery,
        selectedMenuCategory,
        setSelectedMenuCategory,
        deliveryCharge
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
