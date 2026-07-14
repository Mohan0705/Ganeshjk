import React, { useState } from 'react';
import { REVIEWS } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CustomerReviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const activeReview = REVIEWS[activeIndex];

  return (
    <section className="py-24 relative bg-grain-texture border-b border-gray-100" id="reviews-section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary text-xs font-extrabold tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full inline-block">
            💬 The Gastronomic Verdict
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 tracking-tight mt-4">
            Diners&#39; Chronicles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 font-light text-sm mt-4 leading-relaxed">
            Nothing makes us prouder than the stories of delight shared by our wonderful guests. Read about their premium dining experiences with us.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="max-w-3xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-16 rounded-[2.5rem] bg-white/70 backdrop-blur-md border border-white shadow-xl relative overflow-hidden"
            >
              {/* Gold light shine */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              {/* Big Quote Decorative Mark */}
              <Quote className="absolute top-6 right-8 w-24 h-24 text-orange-100/50 rotate-180 pointer-events-none" />

              <div className="space-y-8 relative z-10">
                {/* Rating Stars with golden coloring */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-6 h-6 ${
                        idx < activeReview.rating
                          ? 'fill-gold text-gold'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment Text with elegant Playfair serif spacing */}
                <p className="text-xl sm:text-2xl text-gray-800 font-display font-medium leading-relaxed italic text-left">
                  &ldquo;{activeReview.comment}&rdquo;
                </p>

                {/* Author Info with Luxury Badges */}
                <div className="flex items-center justify-between pt-8 border-t border-[#F5EDE4]">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-white text-lg shadow-md border-2 border-white">
                      {activeReview.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-base leading-tight">
                        {activeReview.name}
                      </h4>
                      <span className="text-[10px] text-emerald-600 font-extrabold tracking-widest uppercase flex items-center gap-1 mt-0.5">
                        <Award className="w-3 h-3" />
                        <span>Verified Royal Diner</span>
                      </span>
                    </div>
                  </div>
                  
                  <span className="text-xs text-gray-400 font-mono font-bold tracking-wider">
                    {activeReview.date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons styled exquisitely */}
          <div className="flex justify-center items-center space-x-6 mt-10">
            <button
              onClick={handlePrev}
              className="p-4 rounded-full bg-white border border-gray-200 hover:border-primary text-gray-600 hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'bg-primary w-8' : 'bg-gray-300 w-2.5 hover:bg-gray-450'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-4 rounded-full bg-white border border-gray-200 hover:border-primary text-gray-600 hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

