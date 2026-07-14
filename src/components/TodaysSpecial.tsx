import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data';
import { Star, ShoppingBag, Clock, Plus, Minus, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PremiumImage } from './PremiumImage';

export const TodaysSpecial: React.FC = () => {
  const { addToCart, updateQuantity, cart } = useApp();
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 42, seconds: 12 });

  // Real-time ticking countdown to end-of-day
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const diff = endOfDay.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Find Mutton Dum Biryani as today's special
  const specialDish = MENU_ITEMS.find(item => item.id === 'b3') || MENU_ITEMS[0];
  const originalPrice = Math.floor(specialDish.price * 1.25);

  const cartItem = cart.find(cartItem => cartItem.menuItem.id === specialDish.id);

  return (
    <section className="py-24 bg-grain-texture relative overflow-hidden" id="specials-section">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#1C1C1C] via-[#2A2A2A] to-[#121212] p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-white/10">
          
          {/* Decorative Corner Lights and Grain */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-gold/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7 text-left">
              
              {/* Badge Row */}
              <div className="flex flex-wrap items-center gap-4">
                <span className="py-1.5 px-4 rounded-full bg-primary/20 border border-primary/30 text-secondary font-extrabold text-xs uppercase tracking-widest shadow-lg flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Today&#39;s Exclusive Special</span>
                </span>
                
                {/* Countdown Timer Grid with Glowing effect */}
                <div className="flex items-center space-x-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono shadow-md backdrop-blur-md">
                  <Clock className="w-4 h-4 text-secondary animate-pulse" />
                  <span className="font-semibold text-gray-350">Ends In:</span>
                  <span className="font-extrabold text-primary text-glow">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h2 className="font-display font-medium text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                  Our Legendary <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{specialDish.name}</span>
                </h2>
                
                {/* Star rating info */}
                <div className="flex items-center space-x-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                  <span className="text-xs text-gray-300 font-semibold pl-2">
                    {specialDish.rating} Star Chef Rating (520+ orders today)
                  </span>
                </div>

                <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed pt-2 font-sans">
                  Treat yourself to our majestic Dum-cooked masterpiece. Made with select aged basmati rice, tender farm-sourced mutton marinated in hand-ground spices, caramelized onions, and fresh garden herbs. Slow-steamed over raw embers in our custom brass vessels.
                </p>
              </div>

              {/* Review Testimonial Quote */}
              <div className="p-5 rounded-2xl bg-white/5 border-l-4 border-primary text-xs sm:text-sm text-gray-300 font-medium italic backdrop-blur-sm shadow-inner">
                &ldquo;The mutton was incredibly soft, literally falling off the bone, and the aroma filled our entire home immediately. Simply phenomenal! Ganesh J K has perfected the authentic Dum biryani!&rdquo; — Dr. Anand K.
              </div>

              {/* Price & Cart Add Panel */}
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Deal Price</span>
                  <div className="flex items-baseline space-x-3.5">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-white">₹{specialDish.price}</span>
                    <span className="text-base text-gray-500 line-through font-medium">₹{originalPrice}</span>
                    <span className="text-xs text-[#2E8B57] font-extrabold bg-[#2E8B57]/10 border border-[#2E8B57]/20 px-3 py-1 rounded-full">
                      Save {Math.round((1 - specialDish.price / originalPrice) * 100)}%
                    </span>
                  </div>
                </div>

                {cartItem ? (
                  <div className="flex items-center space-x-2.5 bg-white/10 border border-white/20 rounded-full p-1.5 shadow-lg backdrop-blur-md">
                    <button
                      onClick={() => updateQuantity(specialDish.id, -1)}
                      className="w-10 h-10 rounded-full bg-white text-primary hover:bg-primary hover:text-white flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center font-bold text-sm text-white">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(specialDish.id, 1)}
                      className="w-10 h-10 rounded-full bg-white text-primary hover:bg-primary hover:text-white flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-md cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(specialDish, 1)}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 flex items-center space-x-3 shadow-xl shadow-primary/20 hover:shadow-primary/45 hover-glow cursor-pointer"
                  >
                    <ShoppingBag className="w-5 h-5 text-white" />
                    <span>Order This Special Now</span>
                  </button>
                )}
              </div>

            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-sm aspect-square p-2 bg-white/5 border border-white/10 rounded-3xl shadow-2xl"
              >
                {/* Image Border Accent */}
                <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                  <PremiumImage
                    src={specialDish.image}
                    alt={specialDish.name}
                    className="w-full h-full object-cover rounded-2xl brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                    sizeHint="large"
                  />
                  
                  {/* Decorative Special Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 text-center font-sans font-bold text-gray-800 text-xs shadow-lg">
                    ✨ Prepared fresh hourly by our Master Chefs
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-primary border-4 border-[#2A2A2A] flex items-center justify-center text-white font-extrabold font-display text-sm shadow-xl text-glow animate-bounce">
                  Best
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

