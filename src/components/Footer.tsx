import React from 'react';
import { useApp } from '../context/AppContext';
import { UtensilsCrossed, Phone, Mail, MapPin, ArrowUp, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActivePage } = useApp();

  const handlePageClick = (pageId: string) => {
    setActivePage(pageId);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200/80 pt-16 pb-8 text-gray-500 text-xs relative" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* Column 1 - Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handlePageClick('home')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-[#FF8C39] flex items-center justify-center shadow-md">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-gray-800 block">
                  Ganesh J K <span className="text-primary">Restaurant</span>
                </span>
                <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400">
                  Quality & Taste
                </span>
              </div>
            </div>
            
            <p className="leading-relaxed font-light text-gray-500 max-w-sm">
              Enjoying delicious food with fresh ingredients and served with care since 2011. Order your favorites right to your doorstep.
            </p>

            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <span key={social} className="hover:text-primary transition-colors cursor-pointer text-[10px] font-bold uppercase tracking-wider">
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2 - Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-gray-800 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-medium">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Our Menu', id: 'menu' },
                { name: 'About Us', id: 'about' },
                { name: 'Food Gallery', id: 'gallery' },
                { name: 'Contact Us', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handlePageClick(item.id)}
                    className="hover:text-primary transition-colors hover:translate-x-1 duration-200 transform text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Timings */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-gray-800 tracking-wider uppercase flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Opening Hours</span>
            </h4>
            <ul className="space-y-2.5 font-light leading-relaxed">
              <li className="flex justify-between border-b border-gray-100 pb-1.5">
                <span>Monday - Friday</span>
                <span className="text-gray-800 font-semibold">11:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1.5">
                <span>Saturday</span>
                <span className="text-gray-800 font-semibold">11:00 AM - Midnight</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gray-800 font-semibold">11:00 AM - Midnight</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-gray-800 tracking-wider uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-3 font-light">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  📍 Railway Station Road,<br />
                  Near Railway Station,<br />
                  Tadepalligudem,<br />
                  Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919160776152" className="hover:text-primary transition-colors text-gray-850 font-bold">
                  +91 9160776152
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:ganeshjkrestaurant@gmail.com" className="hover:text-primary transition-colors">
                  ganeshjkrestaurant@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright footer row */}
        <div className="border-t border-gray-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-light text-center sm:text-left">
            © 2026 Ganesh J K Restaurant. All rights reserved. Made with quality and served with care.
          </p>

          <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-wider justify-center">
            <button onClick={() => handlePageClick('privacy')} className="hover:text-primary cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handlePageClick('terms')} className="hover:text-primary cursor-pointer">
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-white border border-gray-200 hover:border-primary/40 hover:bg-orange-50/50 text-gray-600 transition-all duration-300 flex items-center space-x-1 group cursor-pointer"
              aria-label="Back to top"
            >
              <span className="text-[9px]">Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-primary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
