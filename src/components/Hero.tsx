import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowRight, MessageSquare, Calendar, Phone, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { PremiumImage } from './PremiumImage';

export const Hero: React.FC = () => {
  const { setActivePage, setSearchQuery, setSelectedMenuCategory, t, language } = useApp();
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

  const openWhatsApp = () => {
    window.open('https://wa.me/919160776152?text=Hi%20Ganesh%20J%20K%20Restaurant%2C%20I%20would%20like%20to%20place%20an%20order!', '_blank');
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden luxury-dark-bg py-16 lg:py-0" id="hero-section">
      {/* Cinematic Premium Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1600&auto=format&fit=crop" 
          alt="Cinematic luxury restaurant table" 
          className="w-full h-full object-cover opacity-35 scale-105 filter blur-[1px] animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Soft Golden & Deep Crimson Gradients for unmatched luxury look */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-transparent to-[#1C1C1C]/40" />
        <div className="absolute top-1/4 left-1/3 w-[35rem] h-[35rem] bg-[#FF7A00]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[25rem] h-[25rem] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Floating Sparkles & Light Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-1/3 left-10 w-2 h-2 bg-secondary rounded-full opacity-60 animate-ping" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-gold rounded-full opacity-40 animate-bounce float-slow" />
        <div className="absolute top-1/4 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-pulse" />
        <div className="absolute bottom-1/3 right-12 w-2 h-2 bg-primary rounded-full opacity-50 float-reverse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 sm:mt-14 lg:mt-8 inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect-dark border border-white/10 text-secondary text-xs font-bold tracking-wider uppercase shadow-lg shadow-black/10"
            >
              <Flame className="w-4.5 h-4.5 text-primary animate-pulse" />
              <span>{t('nav.tagline')}</span>
            </motion.div>

            {/* Elegant Luxury Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-medium text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]"
              >
                {t('hero.welcome')} <br />
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-[#FFC573] text-glow filter drop-shadow-md">
                   Ganesh JK Restaurant
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-sm sm:text-lg max-w-2xl font-light leading-relaxed font-sans"
              >
                {t('hero.desc')}
              </motion.p>
            </div>

            {/* Glassmorphic Search Bar */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSearchSubmit}
              className="max-w-xl flex items-center p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl shadow-black/20 w-full"
            >
              <input
                type="text"
                placeholder={t('hero.searchPlaceholder')}
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="flex-1 min-w-0 bg-transparent px-3 sm:px-4 py-3 text-white placeholder-gray-400 focus:outline-none text-sm font-medium"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2.5 sm:py-3.5 shrink-0 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-all duration-300 flex items-center space-x-1.5 sm:space-x-2 shadow-lg shadow-primary/35 hover-glow cursor-pointer"
              >
                <span>{t('hero.search')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>

            {/* Premium Category Quick Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-nowrap items-center text-xs text-gray-400 font-medium overflow-x-auto scrollbar-none pb-1 w-full"
            >
              <span className="py-1 text-gray-500 mr-2 shrink-0">{t('hero.featured')}</span>
              <div className="flex items-center gap-2 flex-nowrap">
                {['Biryani', 'Starters', 'Seafood'].map((cat) => {
                  const displayLabel = cat === 'Biryani' ? t('cat.biryani') : cat === 'Starters' ? t('cat.starters') : t('cat.seafood');
                  return (
                    <button
                      key={cat}
                      onClick={() => handleQuickCategory(cat)}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 cursor-pointer shadow-xs font-semibold shrink-0"
                    >
                      {displayLabel}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Luxury Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => setActivePage('menu')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 hover-glow flex items-center space-x-2.5 cursor-pointer"
              >
                <span>{t('hero.exploreMenu')}</span>
                <Sparkles className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={() => setActivePage('contact')}
                className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-base shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center space-x-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-secondary" />
                <span>{t('hero.bookTable')}</span>
              </button>
            </motion.div>

          </div>

          {/* Interactive Floating Dish Cards Column */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center min-h-[450px]">
            {/* Centerpiece Image of Premium Dish with Steam */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-80 h-80 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden group float-slow bg-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop" 
                alt="Signature Chicken Biryani at Ganesh JK Restaurant" 
                className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Soft Simulated Steam Overlay */}
              <div className="absolute inset-x-0 bottom-12 top-0 pointer-events-none flex justify-center items-end space-x-4 opacity-40">
                <div className="w-1.5 h-16 bg-white/20 rounded-full blur-xs steam-element" style={{ animationDelay: '0s' }} />
                <div className="w-1.5 h-20 bg-white/30 rounded-full blur-xs steam-element" style={{ animationDelay: '1.5s' }} />
                <div className="w-1 h-14 bg-white/15 rounded-full blur-xs steam-element" style={{ animationDelay: '0.8s' }} />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="px-3 py-1 bg-primary text-white text-[10px] uppercase font-bold rounded-full shadow-md">Chef Special</span>
                <h3 className="text-white font-display font-bold text-lg mt-1.5 drop-shadow-md">Signature Hyderabadi Biryani</h3>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Dynamic Trust badging & Statistics panel in luxury glass look */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl glass-effect-dark border border-white/5 shadow-2xl relative"
        >
          {/* Decorative grain/ambient background for statistics */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl pointer-events-none" />
          
          <div className="text-center p-3">
            <h3 className="text-white font-sans text-2xl sm:text-3xl font-extrabold text-glow">4.9 ★</h3>
            <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">Top Rated Dine</p>
          </div>
          <div className="text-center p-3 border-l border-white/10">
            <h3 className="text-white font-sans text-2xl sm:text-3xl font-extrabold text-glow">25-30</h3>
            <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">Minutes Delivery</p>
          </div>
          <div className="text-center p-3 border-l border-white/10">
            <h3 className="text-white font-sans text-2xl sm:text-3xl font-extrabold text-glow">100%</h3>
            <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">Fresh Ingredients</p>
          </div>
          <div className="text-center p-3 border-l border-white/10">
            <h3 className="text-white font-sans text-2xl sm:text-3xl font-extrabold text-glow">10k+</h3>
            <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">Happy Foodies</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

