import React from 'react';
import { ChefHat, Flame, History, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { PremiumImage } from './PremiumImage';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden bg-[#FAFAFA]" id="about-page">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Page title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            Our Story
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-gray-800 tracking-tight mt-2">
            The Story of Ganesh JK Restaurant
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-[#FF8C39] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 font-light text-sm mt-4">
            Established in 2011, Ganesh JK Restaurant represents the perfect intersection of ancient clay-oven cooking, secret family spice blends, and luxury hospitality.
          </p>
        </div>

        {/* Brand narrative split block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-800 tracking-tight">
              A Legacy of Exquisite Flavors & Handpicked Herbs
            </h2>
            <p className="text-gray-500 leading-relaxed font-light text-sm">
              At Ganesh JK Restaurant, we believe that the best meals are crafted with deep respect for the legacy of Indian cuisine. For over a decade, we have been serving Tadepalligudem with delicious, high-quality dishes.
            </p>
            <p className="text-gray-500 leading-relaxed font-light text-sm">
              We source our spices directly from the hills of Kerala and grind them in-house weekly. Our meats are fresh-cut and processed under strict halal-hygiene guidelines, and we never compromise on our oil choices. Our kitchen does not utilize any chemical food colors, nor MSG, keeping our meals highly safe for child and elderly dining alike.
            </p>

            {/* Quick Specs bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-bold text-gray-700">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-primary border border-orange-100"><Award className="w-4.5 h-4.5" /></div>
                <span>15+ Years Experienced Chefs</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-primary border border-orange-100"><Flame className="w-4.5 h-4.5" /></div>
                <span>Traditional Clay Dum Cooking</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-primary border border-orange-100"><ChefHat className="w-4.5 h-4.5" /></div>
                <span>100% In-house Ground Spices</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-primary border border-orange-100"><History className="w-4.5 h-4.5" /></div>
                <span>150,000+ Happy Foodies Served</span>
              </div>
            </div>
          </div>

          {/* Majestic Image Frame */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-gray-200/85 p-2.5 bg-white shadow-xl">
              <PremiumImage
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop"
                alt="Chefs prepared food at Ganesh JK Restaurant"
                className="w-full h-full object-cover rounded-2xl brightness-95"
                sizeHint="large"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-gray-100 text-center text-xs text-gray-800 font-bold shadow-md">
                "Gastronomy is the art of using food to create happiness."
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stats Panel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white border border-gray-200/80 text-center shadow-md mb-12">
          <div>
            <span className="font-sans font-bold text-3xl sm:text-4xl text-primary block">2011</span>
            <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-widest mt-1 block">Year Founded</span>
          </div>
          <div>
            <span className="font-sans font-bold text-3xl sm:text-4xl text-primary block">15+</span>
            <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-widest mt-1 block">Master Chefs</span>
          </div>
          <div>
            <span className="font-sans font-bold text-3xl sm:text-4xl text-primary block">40+</span>
            <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-widest mt-1 block">Signature Dishes</span>
          </div>
          <div>
            <span className="font-sans font-bold text-3xl sm:text-4xl text-primary block">4.9</span>
            <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-widest mt-1 block">Customer Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
};
