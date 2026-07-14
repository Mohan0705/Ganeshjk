import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Menu, X, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { activePage, setActivePage, cart, setCartOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass-effect-strong border-b border-white/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick('home')}
              id="nav-logo"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary via-secondary to-[#FF8C39] flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-gray-800 block">
                  Ganesh J K <span className="text-primary text-glow">Restaurant</span>
                </span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest -mt-1 block font-semibold">
                  Luxury Dining & Fine Taste
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 bg-white/40 p-1.5 rounded-full border border-white/50 shadow-xs" id="desktop-nav">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isActive ? 'text-primary bg-white shadow-xs font-bold' : 'text-gray-600 hover:text-primary hover:bg-white/40'
                    }`}
                    id={`nav-link-${link.id}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute bottom-1 left-5 right-5 h-0.5 bg-primary rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative px-4 py-2.5 rounded-full bg-primary text-white hover:bg-primary-hover transition-all duration-300 group shadow-md shadow-primary/20 hover-glow cursor-pointer font-bold text-sm flex items-center space-x-2"
                id="navbar-cart-btn"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300 text-white" />
                <span className="text-xs font-bold hidden sm:inline">Cart</span>
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="min-w-[20px] h-5 px-1.5 bg-white text-primary font-bold text-[10px] rounded-full flex items-center justify-center shadow-md animate-pulse"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full bg-white hover:bg-gray-100 border border-gray-250/50 text-gray-700 md:hidden transition-all duration-300 shadow-xs cursor-pointer"
                id="navbar-mobile-toggle"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Sidebar Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white z-50 md:hidden p-6 flex flex-col shadow-2xl border-l border-gray-100"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-lg text-gray-800">
                  Navigation
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-gray-50 text-gray-500 hover:text-gray-850"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-3 flex-1">
                {navLinks.map((link) => {
                  const isActive = activePage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-200 flex items-center justify-between ${
                        isActive 
                          ? 'bg-orange-50 text-primary border-l-4 border-primary pl-4' 
                          : 'bg-transparent hover:bg-orange-50/50 text-gray-600 hover:text-primary'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <div className="w-1.5 h-1.5 bg-primary rounded-full" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-auto border-t border-gray-100 pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <UtensilsCrossed className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">J K Restaurant</h4>
                    <p className="text-xs text-gray-450">Dine In • Delivery • Takeaway</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCartOpen(true);
                  }}
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm text-center flex items-center justify-center space-x-2 transition-all duration-300 shadow-md shadow-primary/20"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>View Cart ({cartCount})</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
