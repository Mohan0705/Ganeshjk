import React, { useState } from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PremiumImage } from './PremiumImage';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'food' | 'dining' | 'kitchen'>('all');

  const galleryItems = [
    {
      id: 1,
      category: 'food',
      title: 'Royal Mutton Dum Biryani',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop',
      span: 'lg:col-span-2'
    },
    {
      id: 2,
      category: 'dining',
      title: 'The Premium Seating Lounge',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop',
      span: ''
    },
    {
      id: 3,
      category: 'food',
      title: 'Crispy Sizzling Chicken 65',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=600&auto=format&fit=crop',
      span: ''
    },
    {
      id: 4,
      category: 'kitchen',
      title: 'Our Clean Live Clay Tandoors',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop',
      span: ''
    },
    {
      id: 5,
      category: 'food',
      title: 'Creamy Butter Chicken',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop',
      span: 'lg:col-span-2'
    },
    {
      id: 6,
      category: 'dining',
      title: 'Private Family Dining Room',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop',
      span: ''
    },
    {
      id: 7,
      category: 'food',
      title: 'Traditional Coastal Apollo Fish',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop',
      span: ''
    },
    {
      id: 8,
      category: 'kitchen',
      title: 'Plating the Perfection',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop',
      span: ''
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section className="py-24 relative min-h-screen bg-white" id="gallery-page">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs font-extrabold tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full inline-block">
            📷 A Photographic Odyssey
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-gray-900 tracking-tight mt-4">
            The Culinary Canvas
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 font-light text-sm mt-4 leading-relaxed">
            Take a visual tour of our culinary craftsmanship, immaculate family spaces, and live-tandoor hearths. We believe food should first nourish the eyes.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-3 justify-center mb-16 text-xs font-bold uppercase tracking-widest">
          {[
            { id: 'all', label: 'All Chronicles' },
            { id: 'food', label: 'Signature Dishes' },
            { id: 'dining', label: 'Luxury Dining' },
            { id: 'kitchen', label: 'Artisanal Kitchen' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as 'all' | 'food' | 'dining' | 'kitchen')}
              className={`px-6 py-3.5 rounded-full border transition-all duration-300 cursor-pointer ${
                filter === item.id
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 hover-glow'
                  : 'bg-white border-gray-200 text-gray-500 hover:text-primary hover:bg-orange-50/50 hover:border-orange-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Modern Bento Grid layout with animations */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group relative rounded-[2rem] overflow-hidden aspect-square border border-white/40 bg-white shadow-md hover:shadow-2xl transition-all duration-500 ${item.span || ''}`}
              >
                <PremiumImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  sizeHint="medium"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-left pointer-events-none z-10">
                  <span className="text-[10px] text-primary uppercase font-extrabold tracking-widest flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{item.category}</span>
                  </span>
                  <h3 className="font-display font-bold text-white text-lg sm:text-xl">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-5 right-5 p-3 rounded-full bg-white/90 backdrop-blur-md border border-white/60 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center shadow-md z-10">
                  <Camera className="w-4 h-4 text-primary" />
                </div>
                
                <div className="absolute inset-0 border border-white/20 rounded-[2rem] pointer-events-none z-25" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

