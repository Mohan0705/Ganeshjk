import React from 'react';
import { ChefHat, ShieldCheck, Zap, HeartHandshake, PhoneCall, ArrowRight, Award } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      icon: <ChefHat className="w-6 h-6 text-primary" />,
      title: 'Master Culinary Artists',
      description: 'Our elite kitchen is directed by legendary, award-winning chefs with decades of experience preparing legacy Royal Indian, Tandoori & Mughlai recipes.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: 'Michelin-Grade Hygiene',
      description: 'We adhere strictly to flawless quality metrics: multi-stage ingredient sanitization, pure filtered water prep, and immaculate kitchen environments.'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: 'Thermal Insulated Express',
      description: 'Every online delivery is packaged carefully in thermo-secure custom boxes and dispatched with priority routes to lock in piping hot steam.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
      title: '100% Purity Guaranteed',
      description: 'Zero added artificial MSG, zero synthetic food color dyes, and prepared exclusively with cold-pressed oils for exquisite, wholesome taste.'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="why-choose-us">
      {/* Exquisite Subtle Background Ornaments */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary text-xs font-extrabold tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full inline-block">
            ✨ Uncompromising Excellence
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 tracking-tight mt-4">
            The Ganesh JK Benchmark
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 font-light text-sm mt-4 leading-relaxed">
            We do not just prepare food; we cultivate deep sensory memories. Discover how we elevate every meal into a royal banquet of taste, hygiene, and service.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#FFFDFB]/80 border border-[#F4EBE1] flex flex-col items-center text-center space-y-5 hover:bg-white shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group"
            >
              {/* Gold light shine on group hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              {/* Icon Container with Floating Accent */}
              <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100/60 flex items-center justify-center shadow-inner relative z-10 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-3 relative z-10">
                <h3 className="font-display font-bold text-lg text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Catering Banner with High-End Glass styling */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1C1C1C] via-[#2A2A2A] to-[#121212] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          {/* Subtle flare behind */}
          <div className="absolute top-0 right-0 w-80 h-full bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-center md:text-left relative z-10 space-y-1.5">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-primary flex items-center justify-center md:justify-start gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>Royal Banquet &amp; Party Catering</span>
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-tight">
              Planning a Grand Gathering or Private Party?
            </h4>
            <p className="text-xs text-gray-400 font-light">
              We specialize in custom bulk orders, elegant menu curated party trays, and full catering service for your memorable milestones.
            </p>
          </div>
          <a
            href="tel:+919160776152"
            className="px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center space-x-2.5 shadow-lg shadow-primary/25 hover:scale-105 hover-glow cursor-pointer whitespace-nowrap z-10"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Connect with our Manager</span>
          </a>
        </div>

      </div>
    </section>
  );
};

