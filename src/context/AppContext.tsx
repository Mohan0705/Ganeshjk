import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem } from '../types';
import { useCartStore } from '../store/useCartStore';
import { Language, TRANSLATIONS } from './translations';

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
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePageInternal] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<string>('All');
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('app_language');
      return (saved === 'te' || saved === 'en') ? saved : 'en';
    } catch {
      return 'en';
    }
  });
  
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

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('app_language', lang);
    } catch (e) {
      console.warn('Failed to save language setting:', e);
    }
  };

  const t = (key: string, replacements?: Record<string, string | number>): string => {
    const translationSet = TRANSLATIONS[language] || TRANSLATIONS['en'];
    let text = translationSet[key] || TRANSLATIONS['en'][key] || key;
    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    return text;
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
        deliveryCharge,
        language,
        setLanguage,
        t
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
