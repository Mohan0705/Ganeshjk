import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data';
import { Star, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';
import { PremiumImage } from './PremiumImage';

export const PopularDishes: React.FC = () => {
  const { addToCart, updateQuantity, cart, setActivePage } = useApp();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const popularDishes = MENU_ITEMS.filter((item) => item.isPopular).slice(0, 4);

  const getCartItem = (itemId: string) => {
    return cart.find((cartItem) => cartItem.menuItem.id === itemId);
  };

  return (
    <section className="py-20 bg-[#FAFAFA] border-y border-gray-200/60 relative" id="popular-section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            Chef's Selections
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-800 tracking-tight mt-2">
            Signature Masterpieces
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-[#FF8C39] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 font-light text-sm mt-4">
            Curated list of our diners' absolute favourites. Exquisite Indian heritage flavours prepared to absolute perfection under meticulous quality standards.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            [...Array(4)].map((_, index) => (
              <div key={`popular-skeleton-${index}`} className="rounded-2xl bg-white border border-gray-200/80 overflow-hidden flex flex-col h-full justify-between shadow-xs animate-pulse">
                <div className="relative aspect-[4/3] w-full bg-gray-200 flex items-center justify-center">
                  <div className="w-8 h-8 border-3 border-gray-300 border-t-primary rounded-full animate-spin" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <div className="space-y-3">
                    <div className="h-2.5 bg-gray-200 rounded-md w-1/4" />
                    <div className="h-5 bg-gray-200 rounded-md w-3/4" />
                    <div className="space-y-1.5">
                      <div className="h-3 bg-gray-200 rounded-md w-full" />
                      <div className="h-3 bg-gray-200 rounded-md w-5/6" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="space-y-1 w-1/3">
                      <div className="h-2.5 bg-gray-200 rounded-md w-1/2" />
                      <div className="h-4 bg-gray-200 rounded-md w-3/4" />
                    </div>
                    <div className="h-9 bg-gray-200 rounded-xl w-24" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            popularDishes.map((dish, idx) => {
            const cartItem = getCartItem(dish.id);
            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-white border border-gray-200/80 flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Visual Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <PremiumImage
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500 brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Rating Overlay */}
                  <div className="absolute top-3 right-3 py-1 px-2.5 rounded-lg bg-white/95 backdrop-blur-md shadow-sm border border-gray-100 flex items-center space-x-1">
                    <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                    <span className="text-[10px] font-bold text-gray-800">{dish.rating}</span>
                  </div>

                  {/* Veg / Non-Veg Indicator Badge */}
                  <div className="absolute top-3 left-3 flex items-center">
                    {dish.isVeg ? (
                      <span className="py-1 px-2.5 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center space-x-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">Veg</span>
                      </span>
                    ) : (
                      <span className="py-1 px-2.5 rounded-lg bg-red-50 border border-red-100 flex items-center space-x-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span className="text-[9px] font-bold text-red-700 uppercase tracking-wider">Non-Veg</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Information Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <div className="space-y-2">
                    <span className="text-[10px] text-primary uppercase font-bold tracking-wider">
                      {dish.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-gray-850 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-light">
                      {dish.description}
                    </p>
                  </div>

                  {/* Footer Row (Price and Button) */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-[10px] text-gray-400 block leading-none mb-1 uppercase font-bold">Price</span>
                      <span className="font-display font-bold text-xl text-gray-850">₹{dish.price}</span>
                    </div>

                    {cartItem ? (
                      <div className="flex items-center space-x-1.5 bg-orange-50 border border-orange-100/50 rounded-xl p-1 shadow-xs">
                        <button
                          onClick={() => updateQuantity(dish.id, -1)}
                          className="w-8 h-8 rounded-lg text-primary hover:bg-orange-100/50 flex items-center justify-center font-bold text-sm transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-bold text-sm text-gray-800">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(dish.id, 1)}
                          className="w-8 h-8 rounded-lg text-primary hover:bg-orange-100/50 flex items-center justify-center font-bold text-sm transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(dish, 1)}
                        className="px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-1.5 shadow-md shadow-primary/10 hover:scale-[1.02] cursor-pointer"
                        aria-label="Add item to cart"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add To Cart</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          }))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => setActivePage('menu')}
            className="px-8 py-3.5 rounded-xl border border-primary/20 hover:border-primary/45 hover:bg-orange-50/50 text-primary transition-all duration-300 font-bold text-sm inline-flex items-center space-x-2"
          >
            <span>Explore Complete Menu</span>
            <Plus className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
