import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data';
import { Star, Search, Plus, Minus, SlidersHorizontal, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PremiumImage } from './PremiumImage';

export const MenuSection: React.FC = () => {
  const { 
    addToCart, 
    updateQuantity,
    cart, 
    searchQuery, 
    setSearchQuery, 
    selectedMenuCategory, 
    setSelectedMenuCategory 
  } = useApp();

  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated asynchronous content loading on filter/search parameters update to present skeleton screens
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [selectedMenuCategory, vegFilter, searchQuery]);

  const categories = [
    { name: 'All', icon: '🍽️' },
    { name: 'Biryani', icon: '🍛' },
    { name: 'Fried Rice', icon: '🍚' },
    { name: 'Starters', icon: '🍗' },
    { name: 'Main Course', icon: '🍲' },
    { name: 'Seafood', icon: '🦐' },
    { name: 'Soups', icon: '🍜' },
    { name: 'Indian Bread', icon: '🫓' }
  ];

  // Filtering Logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedMenuCategory !== 'All' && item.category !== selectedMenuCategory) {
        return false;
      }
      
      // Veg/NonVeg filter
      if (vegFilter === 'veg' && !item.isVeg) return false;
      if (vegFilter === 'nonveg' && item.isVeg) return false;

      // Search Query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [selectedMenuCategory, vegFilter, searchQuery]);

  const displayedItems = useMemo(() => {
    if (showFullMenu || searchQuery.trim() !== '' || selectedMenuCategory !== 'All') {
      return filteredItems;
    }
    // Default limit for compact clean view representation
    return filteredItems.slice(0, 8);
  }, [filteredItems, showFullMenu, searchQuery, selectedMenuCategory]);

  const getCartItem = (itemId: string) => {
    return cart.find((cartItem) => cartItem.menuItem.id === itemId);
  };

  return (
    <section className="py-12 lg:py-20 relative min-h-screen bg-[#FAFAFA]" id="menu-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            Our Menu
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-gray-800 tracking-tight mt-2">
            Explore Our Delicious Dishes
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-[#FF8C39] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 font-light text-sm mt-4">
            Enjoy our freshly prepared biryanis, tasty fried rices, delicious seafood, and freshly baked tandoori breads made with fresh ingredients and served with care.
          </p>
        </div>

        {/* Filters and Search Control Box */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 mb-10 border border-gray-200/80 shadow-md space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md flex items-center bg-[#FAFAFA] border border-gray-200/60 focus-within:border-primary/50 focus-within:bg-white rounded-xl px-3 py-1.5 transition-all">
              <Search className="w-4 h-4 text-gray-400 shrink-0 ml-1" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-0 outline-none text-gray-700 text-sm px-3 py-1.5 placeholder-gray-400 font-medium"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-gray-400 hover:text-primary px-1.5 font-bold cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Veg / Non-Veg Toggle Bar */}
            <div className="flex items-center space-x-1 p-1 bg-[#FAFAFA] rounded-xl border border-gray-150 w-full md:w-auto">
              {[
                { label: 'All Dishes', id: 'all' },
                { label: '🟢 Veg Only', id: 'veg' },
                { label: '🔴 Non-Veg Only', id: 'nonveg' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setVegFilter(filter.id as 'all' | 'veg' | 'nonveg')}
                  className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 cursor-pointer ${
                    vegFilter === filter.id
                      ? 'bg-primary text-white shadow-xs'
                      : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Category Swiper */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-gray-500 text-xs mb-3 font-semibold">
              <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
              <span>Browse Categories:</span>
            </div>
            
            <div className="flex space-x-2.5 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
              {categories.map((cat) => {
                const isSelected = selectedMenuCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedMenuCategory(cat.name)}
                    className={`px-4 py-3 rounded-xl border flex items-center space-x-2 shrink-0 transition-all duration-300 font-bold text-xs cursor-pointer ${
                      isSelected
                        ? 'bg-orange-50 border-primary text-primary shadow-xs'
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-orange-50/30 hover:border-orange-100'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="popLayout">
          {isLoading ? (
            <motion.div
              key="loading-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {[...Array(8)].map((_, index) => (
                <div key={`skeleton-${index}`} className="rounded-2xl bg-white border border-gray-200/80 overflow-hidden flex flex-col h-full justify-between shadow-xs animate-pulse">
                  {/* Aspect [4/3] Image Skeleton */}
                  <div className="relative aspect-[4/3] w-full bg-gray-200 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin" />
                  </div>
                  
                  {/* Details Skeleton */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Category */}
                      <div className="h-3 bg-gray-200 rounded-md w-1/4" />
                      {/* Name */}
                      <div className="h-5 bg-gray-200 rounded-md w-3/4" />
                      {/* Description */}
                      <div className="space-y-1.5">
                        <div className="h-3 bg-gray-200 rounded-md w-full" />
                        <div className="h-3 bg-gray-200 rounded-md w-5/6" />
                        <div className="h-3 bg-gray-200 rounded-md w-2/3" />
                      </div>
                    </div>
                    
                    {/* Footer Action Row */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="space-y-1 w-1/3">
                        <div className="h-2.5 bg-gray-200 rounded-md w-1/2" />
                        <div className="h-4 bg-gray-200 rounded-md w-3/4" />
                      </div>
                      <div className="h-9 bg-gray-200 rounded-xl w-24" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : displayedItems.length > 0 ? (
            <motion.div 
              layout
              key="menu-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {displayedItems.map((dish, idx) => {
                const cartItem = getCartItem(dish.id);
                return (
                  <motion.div
                    layout
                    key={dish.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group rounded-2xl bg-white border border-gray-200/80 overflow-hidden flex flex-col h-full justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 duration-300"
                  >
                    {/* Dish Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                      <PremiumImage
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500 brightness-95 group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Rating Label */}
                      <div className="absolute top-3.5 right-3.5 py-1 px-2.5 rounded-lg bg-white/95 backdrop-blur-md border border-gray-100 flex items-center space-x-1 shadow-sm">
                        <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                        <span className="text-[10px] font-bold text-gray-800">{dish.rating}</span>
                      </div>

                      {/* Veg / Non veg */}
                      <div className="absolute top-3.5 left-3.5 flex items-center shadow-sm">
                        {dish.isVeg ? (
                          <span className="py-1 px-2.5 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">Veg</span>
                          </span>
                        ) : (
                          <span className="py-1 px-2.5 rounded-lg bg-red-50 border border-red-100 flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            <span className="text-[9px] font-bold text-red-700 uppercase tracking-wider">Non-Veg</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Dish Body Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-primary uppercase font-bold tracking-wider">
                            {dish.category}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-base text-gray-850 tracking-tight group-hover:text-primary transition-colors duration-300">
                          {dish.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-light line-clamp-3 leading-relaxed">
                          {dish.description}
                        </p>
                      </div>

                      {/* Action Row */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Price</span>
                          <p className="font-display font-bold text-lg text-gray-850">₹{dish.price}</p>
                        </div>

                        {cartItem ? (
                          <div className="flex items-center space-x-1 bg-orange-50 border border-orange-100/50 rounded-xl p-1 shadow-xs">
                            <button
                              onClick={() => updateQuantity(dish.id, -1)}
                              className="w-8 h-8 rounded-lg text-primary hover:bg-orange-100/50 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-6 text-center font-bold text-sm text-gray-800">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(dish.id, 1)}
                              className="w-8 h-8 rounded-lg text-primary hover:bg-orange-100/50 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(dish, 1)}
                            className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-1.5 shadow-md shadow-primary/10 hover:scale-[1.02] cursor-pointer"
                            aria-label="Add food to cart"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add To Cart</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="text-center py-20 rounded-2xl border border-dashed border-gray-250 bg-white shadow-xs">
              <p className="text-lg text-gray-500">No dishes found matching your filter criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedMenuCategory('All');
                  setVegFilter('all');
                }}
                className="mt-4 text-xs font-bold text-primary hover:underline uppercase tracking-widest cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </AnimatePresence>

        {/* View Full Menu CTA for Default Showings */}
        {!showFullMenu && selectedMenuCategory === 'All' && searchQuery.trim() === '' && filteredItems.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowFullMenu(true)}
              className="px-8 py-3.5 rounded-xl border border-primary/20 hover:border-primary/45 hover:bg-orange-50/50 text-primary transition-all duration-300 font-bold text-sm inline-flex items-center space-x-2 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>View More Dishes</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
