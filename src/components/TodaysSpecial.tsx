import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MENU_ITEMS } from '../data';
import { Star, ShoppingBag, Clock, Plus, Minus } from 'lucide-react';
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
  const originalPrice = Math.floor(specialDish.price * 1.2);

  const cartItem = cart.find(cartItem => cartItem.menuItem.id === specialDish.id);

  return (
    <section className="py-20 bg-[#FAFAFA] relative" id="specials-section">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-white border border-gray-200/80 p-8 sm:p-12 relative overflow-hidden shadow-xl">
          
          {/* Decorative Corner Lights */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-50/50 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge Row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="py-1 px-3.5 rounded-full bg-orange-100/60 border border-orange-200/40 text-primary font-bold text-xs uppercase tracking-wider shadow-xs">
                  Today's Exclusive Special
                </span>
                
                {/* Countdown Timer Grid */}
                <div className="flex items-center space-x-1.5 py-1 px-3 rounded-xl bg-orange-50 border border-orange-100/50 text-gray-700 text-xs font-mono">
                  <Clock className="w-4 h-4 text-primary animate-pulse" />
                  <span className="font-bold text-gray-500">Ends In:</span>
                  <span className="font-bold text-primary">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-800 tracking-tight">
                  {specialDish.name}
                </h2>
                
                {/* Star rating info */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="text-xs text-gray-500 font-bold pl-2">
                    {specialDish.rating} (520+ orders placed today)
                  </span>
                </div>

                <p className="text-gray-500 font-light text-base leading-relaxed pt-2">
                  Enjoy our delicious Mutton Dum Biryani, made with premium long-grain Basmati rice, tender mutton, layered with caramelized onions, coriander, fresh mint, and our secret blend of spices, cooked slowly to perfection.
                </p>
              </div>

              {/* Review Testimonial Quote */}
              <div className="p-4 rounded-xl bg-orange-50/50 border-l-4 border-primary/60 text-xs text-gray-600 font-medium italic">
                "The mutton was melt-in-your-mouth soft, and the aroma filled the whole room instantly. Simply phenomenal, J K has nailed the authentic Dum cooking!" - Dr. Anand K.
              </div>

              {/* Price & Cart Add Panel */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Deal Price</span>
                  <div className="flex items-baseline space-x-3">
                    <span className="font-display font-bold text-3xl text-gray-850">₹{specialDish.price}</span>
                    <span className="text-sm text-gray-400 line-through font-medium">₹{originalPrice}</span>
                    <span className="text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-lg">
                      Save {Math.round((1 - specialDish.price / originalPrice) * 100)}%
                    </span>
                  </div>
                </div>

                {cartItem ? (
                  <div className="flex items-center space-x-1.5 bg-orange-50 border border-orange-100/50 rounded-xl p-1.5 shadow-sm">
                    <button
                      onClick={() => updateQuantity(specialDish.id, -1)}
                      className="w-10 h-10 rounded-lg text-primary hover:bg-orange-100/50 flex items-center justify-center font-bold text-sm transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold text-sm text-gray-800">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(specialDish.id, 1)}
                      className="w-10 h-10 rounded-lg text-primary hover:bg-orange-100/50 flex items-center justify-center font-bold text-sm transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(specialDish, 1)}
                    className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-primary/10 hover:scale-[1.02] cursor-pointer"
                  >
                    <ShoppingBag className="w-4.5 h-4.5" />
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
                className="relative w-full max-w-sm aspect-square"
              >
                {/* Image Border Accent */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-gray-200/80 p-2 bg-white shadow-xl">
                  <PremiumImage
                    src={specialDish.image}
                    alt={specialDish.name}
                    className="w-full h-full object-cover rounded-xl brightness-95 hover:brightness-100 transition-all duration-300"
                    sizeHint="large"
                  />
                  
                  {/* Decorative Special Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-gray-100 text-center font-display font-bold text-gray-750 text-xs">
                    ⚡ Prepared fresh hourly by our Master Chefs
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold font-display text-sm">
                  Top
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
