import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PopularDishes } from './components/PopularDishes';
import { TodaysSpecial } from './components/TodaysSpecial';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { MenuSection } from './components/MenuSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutSection } from './components/CheckoutSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsSection } from './components/TermsSection';
import { motion, AnimatePresence } from 'motion/react';

const AppContent: React.FC = () => {
  const { activePage } = useApp();

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return (
          <motion.div
            key="home-page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-0"
          >
            <Hero />
            <PopularDishes />
            <TodaysSpecial />
            <WhyChooseUs />
            <CustomerReviews />
          </motion.div>
        );
      case 'menu':
        return (
          <motion.div
            key="menu-page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <MenuSection />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about-page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <AboutSection />
          </motion.div>
        );
      case 'gallery':
        return (
          <motion.div
            key="gallery-page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <GallerySection />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact-page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ContactSection />
          </motion.div>
        );
      case 'checkout':
        return (
          <motion.div
            key="checkout-page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <CheckoutSection />
          </motion.div>
        );
      case 'privacy':
        return (
          <motion.div
            key="privacy-page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <PrivacyPolicy />
          </motion.div>
        );
      case 'terms':
        return (
          <motion.div
            key="terms-page"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <TermsSection />
          </motion.div>
        );
      default:
        return (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
            <h1 className="font-display font-bold text-4xl text-primary">404</h1>
            <p className="text-secondary-text mt-2">The page you are looking for does not exist.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAFAFA]">
      {/* Dynamic Global Top Navigation */}
      <Navbar />

      {/* Main Core Component Frame */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderActivePage()}
        </AnimatePresence>
      </main>

      {/* Global Slide-In Shopping Basket */}
      <CartDrawer />

      {/* Dynamic Footer Info */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
