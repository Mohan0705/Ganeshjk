import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PremiumImage } from './PremiumImage';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'food' | 'dining' | 'kitchen'>('all');

  const galleryItems = [
    {
      id: 1,
      category: 'food',
      title: 'Royal Mutton Dum Biryani',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'dining',
      title: 'The Premium Seating Lounge',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'food',
      title: 'Crispy Sizzling Chicken 65',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      category: 'kitchen',
      title: 'Our Clean Live Clay Tandoors',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 5,
      category: 'food',
      title: 'Creamy Butter Chicken',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 6,
      category: 'dining',
      title: 'Private Family Dining Room',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 7,
      category: 'food',
      title: 'Traditional Coastal Apollo Fish',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 8,
      category: 'kitchen',
      title: 'Plating the Perfection',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section className="py-12 lg:py-20 relative min-h-screen bg-[#FAFAFA]" id="gallery-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            Visual Delights
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-gray-800 tracking-tight mt-2">
            The J K Food Gallery
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-[#FF8C39] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 font-light text-sm mt-4">
            A photographic tour through our signature platters, premium dine-in environment, and our ultra-clean hygienic live kitchen setup.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10 text-xs font-bold uppercase tracking-wider">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'food', label: 'Signature Platters' },
            { id: 'dining', label: 'Luxury Dining' },
            { id: 'kitchen', label: 'Kitchen & Craft' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as 'all' | 'food' | 'dining' | 'kitchen')}
              className={`px-5 py-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                filter === item.id
                  ? 'bg-primary border-primary text-white shadow-xs'
                  : 'bg-white border-gray-200 text-gray-500 hover:text-primary hover:bg-orange-50/50 hover:border-orange-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Bento Grid layout with animations */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-square border border-gray-200/80 bg-white shadow-xs"
              >
                <PremiumImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500 brightness-95 group-hover:brightness-100 animate-fade-in"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left pointer-events-none">
                  <span className="text-[9px] text-primary uppercase font-bold tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-white text-sm mt-1">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 p-2 rounded-lg bg-white/90 backdrop-blur-xs border border-gray-100 opacity-100 group-hover:opacity-0 transition-opacity flex items-center shadow-xs">
                  <Camera className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
