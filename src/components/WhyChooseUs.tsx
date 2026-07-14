import React from 'react';
import { ChefHat, ShieldCheck, Zap, HeartHandshake, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      icon: <ChefHat className="w-6 h-6 text-primary" />,
      title: 'Master Culinary Artists',
      description: 'Our traditional kitchen is led by award-winning chefs with decades of experience crafting premium Indian, Tandoori & Chinese recipes.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: 'Flawless Food Hygiene',
      description: 'We follow stringent quality checks, triple-washing processes, and complete kitchen sanitization daily to guarantee safe, healthy meals.'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: 'Superfast Insulated Delivery',
      description: 'Every local delivery order is packed in custom thermo-insulated containers and delivered within 25 minutes to retain piping hot freshness.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
      title: 'No Hidden Ingredients',
      description: 'We prioritize health: No artificial MSG enhancers, no chemical food colorings, and 100% premium quality ground cold-pressed oils.'
    }
  ];

  return (
    <section className="py-20 relative bg-[#FAFAFA]" id="why-choose-us">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">Our Commitment</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-800 tracking-tight mt-2">
            Why Dine at J K Restaurant?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-[#FF8C39] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 font-light text-sm mt-4">
            We don't just cook food; we craft culinary experiences. Discover how we set the highest benchmark for fine dining and contactless home delivery.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white border border-gray-200/80 flex flex-col items-center text-center space-y-4 shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shadow-xs">
                {item.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-gray-850 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culinary Quote Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-orange-50/50 border border-orange-100/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-base font-bold text-gray-800 tracking-tight">Planning a family gathering or mini-party?</h4>
            <p className="text-xs text-gray-500 mt-1 font-light">We accept custom catering orders, pre-orders, and heavy-portion family packs!</p>
          </div>
          <a
            href="tel:+919160776152"
            className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-all duration-300 flex items-center space-x-2 shadow-md shadow-primary/10 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Our Manager</span>
          </a>
        </div>

      </div>
    </section>
  );
};
