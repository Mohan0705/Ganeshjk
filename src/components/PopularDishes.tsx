import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data';
import { Star, Plus, Minus, Flame, Clock, ShieldCheck, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
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

  // Helper to determine specific metadata dynamically for design depth
  const getSpiceLevel = (category: string) => {
    if (category === 'Biryani') return { label: 'Medium Spice', level: 2, icon: '🌶️🌶️' };
    if (category === 'Starters' || category === 'Seafood') return { label: 'Spicy Hot', level: 3, icon: '🌶️🌶️🌶️' };
    return { label: 'Mild & Sweet', level: 1, icon: '🌶️' };
  };

  const getPrepTime = (category: string) => {
    if (category === 'Biryani') return '25 Mins';
    if (category === 'Starters') return '15 Mins';
    return '20 Mins';
  };

  return (
    <section className="py-24 luxury-gradient-bg border-y border-white/20 relative overflow-hidden" id="popular-section">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grain-texture pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary text-xs font-extrabold tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full inline-block">
            🌟 Chef&#39;s Signature Masterpieces
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 tracking-tight mt-4">
            Signature Creations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 font-light text-sm mt-4 leading-relaxed">
            Meticulously prepared using authentic spices and fresh, premium ingredients. Experience luxury on a plate with our diners&#39; highly celebrated choices.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            [...Array(4)].map((_, index) => (
              <div key={`popular-skeleton-${index}`} className="rounded-3xl bg-white border border-gray-200/40 overflow-hidden flex flex-col h-full justify-between shadow-lg animate-pulse">
                <div className="relative aspect-[4/3] w-full bg-gray-200 flex items-center justify-center">
                  <div className="w-8 h-8 border-3 border-gray-300 border-t-primary rounded-full animate-spin" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
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
              const spice = getSpiceLevel(dish.category);
              const prepTime = getPrepTime(dish.category);
              
              return (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative rounded-3xl glass-card flex flex-col h-full overflow-hidden shadow-lg border border-white/40"
                >
                  {/* Decorative Best Seller Ribbon / Badge */}
                  <div className="absolute top-4 left-0 z-20 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white text-[9px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-r-full shadow-md flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span>Best Seller</span>
                    </div>
                  </div>

                  {/* Visual Image Container with Rich Overlays */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-orange-50/25">
                    <PremiumImage
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-112 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                      sizeHint="medium"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Highly Polished Rating Badge Overlay */}
                    <div className="absolute top-4 right-4 py-1 px-3 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-white/60 flex items-center space-x-1 z-10">
                      <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                      <span className="text-xs font-extrabold text-gray-800">{dish.rating}</span>
                    </div>

                    {/* Veg / Non-Veg Indicator Badge Overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center z-10">
                      {dish.isVeg ? (
                        <span className="py-1 px-3 rounded-full bg-emerald-500/90 backdrop-blur-md text-white flex items-center space-x-1.5 shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">VEG</span>
                        </span>
                      ) : (
                        <span className="py-1 px-3 rounded-full bg-red-500/90 backdrop-blur-md text-white flex items-center space-x-1.5 shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">NON-VEG</span>
                        </span>
                      )}
                    </div>

                    {/* Chef Recommendation overlay tag */}
                    <div className="absolute bottom-4 right-4 z-10">
                      <span className="text-[10px] font-extrabold bg-[#D4AF37]/90 text-white px-2.5 py-1 rounded-full shadow-md backdrop-blur-md">
                        Chef Choice
                      </span>
                    </div>
                  </div>

                  {/* Information Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-white/75 backdrop-blur-sm">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase text-primary">
                        <span>{dish.category}</span>
                        <span className="text-gray-400 font-normal">Tadepalligudem Special</span>
                      </div>
                      
                      <h3 className="font-display font-bold text-xl text-gray-900 tracking-tight group-hover:text-primary transition-colors duration-300">
                        {dish.name}
                      </h3>
                      
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-light">
                        {dish.description}
                      </p>

                      {/* Micro Metadata Metrics (Spice & Prep Time) */}
                      <div className="flex items-center justify-between pt-2 text-[11px] font-medium text-gray-500 border-t border-gray-100">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          <span>{prepTime} Prep</span>
                        </span>
                        <span className="flex items-center space-x-1 text-orange-600">
                          <span className="font-bold text-xs">{spice.icon}</span>
                          <span>{spice.label}</span>
                        </span>
                      </div>
                    </div>

                    {/* Footer Row with Prices and Premium Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-[10px] text-gray-400 block leading-none mb-1 uppercase font-bold tracking-wider">Price</span>
                        <span className="font-sans font-semibold text-lg text-gray-700">₹{dish.price}</span>
                      </div>

                      {cartItem ? (
                        <div className="flex items-center space-x-2.5 bg-primary/10 border border-primary/20 rounded-full p-1 shadow-sm">
                          <button
                            onClick={() => updateQuantity(dish.id, -1)}
                            className="w-8 h-8 rounded-full bg-white text-primary hover:bg-primary hover:text-white flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-xs cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-5 text-center font-bold text-sm text-gray-900">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(dish.id, 1)}
                            className="w-8 h-8 rounded-full bg-white text-primary hover:bg-primary hover:text-white flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-xs cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(dish, 1)}
                          className="px-5 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-primary/25 hover-glow hover:-translate-y-0.5 cursor-pointer"
                          aria-label="Add item to cart"
                        >
                          <ShoppingBag className="w-3.5 h-3.5 text-white" />
                          <span>Add To Cart</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => setActivePage('menu')}
            className="px-10 py-4.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg cursor-pointer inline-flex items-center space-x-3 hover-glow"
          >
            <span>Explore Complete Luxury Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

