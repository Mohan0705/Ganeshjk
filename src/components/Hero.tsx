import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowRight, Clock, Star, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { PremiumImage } from './PremiumImage';

export const Hero: React.FC = () => {
  const { setActivePage, setSearchQuery, setSelectedMenuCategory } = useApp();
  const [localSearch, setLocalSearch] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchQuery(localSearch);
      setSelectedMenuCategory('All');
      setActivePage('menu');
    }
  };

  const handleQuickCategory = (categoryName: string) => {
    setSelectedMenuCategory(categoryName);
    setSearchQuery('');
    setActivePage('menu');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7ED]/60 via-[#FAFAFA] to-[#FAFAFA] pt-16 pb-24 lg:pt-28 lg:pb-36" id="hero-section">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -left-12 w-[30rem] h-[30rem] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/10 right-0 w-[25rem] h-[25rem] bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Main Hero Content */}
          <div className="space-y-8 flex flex-col items-center w-full">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100/70 border border-orange-200/50 text-primary text-xs font-bold tracking-wider uppercase mx-auto shadow-sm"
            >
              <span>🍽️ Dine In • 🛍️ Takeaway • 🚚 Fast Delivery</span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-5 w-full flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-800 tracking-tight leading-tight text-center"
              >
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FF8C39] filter drop-shadow-sm">
                  Ganesh J K Restaurant
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed text-center"
              >
                Where quality meets great taste. Enjoy freshly prepared biryanis, Chinese, seafood, and Indian favorites made with fresh ingredients and served with care.
              </motion.p>
            </div>

            {/* Interactive Search Bar */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSearchSubmit}
              className="max-w-xl mx-auto flex items-center p-2 rounded-2xl bg-white border border-gray-200/80 shadow-lg shadow-gray-100/50 w-full"
            >
              <input
                type="text"
                placeholder="Search Biryani, Chicken 65, Butter Naan..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none text-sm font-medium"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-all duration-300 flex items-center space-x-2 shadow-md shadow-primary/20 hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>

            {/* Quick Categories Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2.5 justify-center text-xs text-gray-500 font-medium"
            >
              <span className="py-1">Popular:</span>
              {['Biryani', 'Starters', 'Main Course', 'Seafood'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleQuickCategory(cat)}
                  className="px-4 py-1.5 rounded-full bg-white border border-gray-250 text-gray-600 hover:text-primary hover:border-primary/50 hover:bg-orange-50/50 transition-all duration-300 cursor-pointer shadow-xs"
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Features Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gray-200/80 max-w-xl mx-auto w-full"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center text-primary space-x-1.5 mb-1.5 justify-center">
                  <span className="font-bold text-gray-800 text-sm sm:text-base">⭐ 4.9/5</span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-450 font-bold tracking-wider text-center">
                  Customer Rating
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-primary space-x-1.5 mb-1.5 justify-center">
                  <span className="font-bold text-gray-800 text-sm sm:text-base">🚚 25–30 Min</span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-450 font-bold tracking-wider text-center">
                  Average Delivery
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-primary space-x-1.5 mb-1.5 justify-center">
                  <span className="font-bold text-gray-800 text-sm sm:text-base">✅ Fresh & Hygienic</span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-450 font-bold tracking-wider text-center">
                  Quality Food
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
