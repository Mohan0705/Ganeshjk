import React, { useState } from 'react';
import { REVIEWS } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section className="py-20 relative bg-white border-b border-gray-200/60" id="reviews-section">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-800 tracking-tight mt-2">
            Words From Our Diners
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-[#FF8C39] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 font-light text-sm mt-4">
            Read real feedback shared by regular food-lovers who trust us with their meals every single week.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="max-w-3xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/80 shadow-md relative"
            >
              {/* Big Quote Decorative Mark */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-orange-100 rotate-180 pointer-events-none" />

              <div className="space-y-6">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ${
                        idx < activeReview.rating
                          ? 'fill-primary text-primary'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed italic">
                  "{activeReview.comment}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-[#FF8C39] flex items-center justify-center font-bold text-white text-sm">
                      {activeReview.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base leading-tight">
                        {activeReview.name}
                      </h4>
                      <span className="text-[10px] text-emerald-600 font-bold tracking-wider uppercase">
                        ✓ Verified Diner
                      </span>
                    </div>
                  </div>
                  
                  <span className="text-xs text-gray-400 font-mono font-bold">
                    {activeReview.date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white border border-gray-200 hover:border-primary/30 text-gray-500 hover:text-primary transition-all duration-300 shadow-sm hover:bg-orange-50/50 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-1.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'bg-primary w-6' : 'bg-gray-250 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white border border-gray-200 hover:border-primary/30 text-gray-500 hover:text-primary transition-all duration-300 shadow-sm hover:bg-orange-50/50 cursor-pointer"
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
