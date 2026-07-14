import React from 'react';
import { useApp } from '../context/AppContext';
import { UtensilsCrossed, Phone, Mail, MapPin, ArrowUp, Clock, Facebook, Instagram, Twitter, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActivePage } = useApp();

  const handlePageClick = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] border-t border-white/5 pt-20 pb-12 text-gray-400 text-xs relative overflow-hidden" id="footer-section">
      {/* Decorative backdrop elements */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Column 1 - Brand Info */}
          <div className="md:col-span-4 space-y-6 text-left">
            <div 
              className="flex items-center space-x-3 cursor-pointer inline-flex"
              onClick={() => handlePageClick('home')}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  Ganesh J K <span className="text-primary">Restaurant</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                  Est. 2011 • Luxury Cuisine
                </span>
              </div>
            </div>
            
            <p className="leading-relaxed font-light text-gray-400 max-w-sm">
              Artisanal recipes, flawless hospitality, and an uncompromising commitment to hygienic live cooking. Experience the true grandeur of fine South and North Indian dining.
            </p>

            <div className="flex space-x-4 pt-2">
              {[
                { name: 'Facebook', icon: <Facebook className="w-4 h-4" /> },
                { name: 'Instagram', icon: <Instagram className="w-4 h-4" /> },
                { name: 'Twitter', icon: <Twitter className="w-4 h-4" /> }
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Links */}
          <div className="md:col-span-2 space-y-6 text-left">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">
              Chronicles
            </h4>
            <ul className="space-y-3.5 font-medium">
              {[
                { name: 'Home Lounge', id: 'home' },
                { name: 'Our Royal Menu', id: 'menu' },
                { name: 'About Us', id: 'about' },
                { name: 'Culinary Canvas', id: 'gallery' },
                { name: 'Guest Relations', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handlePageClick(item.id)}
                    className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1.5 inline-block text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Timings */}
          <div className="md:col-span-3 space-y-6 text-left">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Sanctuary Hours</span>
            </h4>
            <ul className="space-y-3.5 font-light leading-relaxed">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white font-bold">11:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span className="text-white font-bold">11:00 AM - Midnight</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-bold">11:00 AM - Midnight</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="md:col-span-3 space-y-6 text-left">
            <h4 className="font-display font-bold text-sm text-white tracking-widest uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  📍 Railway Station Road,<br />
                  Near Railway Station,<br />
                  Tadepalligudem, Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919160776152" className="hover:text-primary transition-colors text-white font-bold">
                  +91 9160776152
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:ganeshjkrestaurant@gmail.com" className="hover:text-primary transition-colors text-gray-300">
                  ganeshjkrestaurant@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright footer row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-light text-center sm:text-left text-gray-500">
            © 2026 Ganesh J K Restaurant. All rights reserved. Designed with precision, served with care.
          </p>

          <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest justify-center items-center">
            <button onClick={() => handlePageClick('privacy')} className="hover:text-primary cursor-pointer flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>
            <button onClick={() => handlePageClick('terms')} className="hover:text-primary cursor-pointer">
              Terms &amp; Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

