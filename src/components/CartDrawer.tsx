import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PremiumImage } from './PremiumImage';
import { DISH_TRANSLATIONS } from '../context/translations';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    cartOpen, 
    setCartOpen, 
    deliveryCharge,
    setActivePage,
    t,
    language
  } = useApp();

  const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const isFreeDelivery = subtotal >= 500;
  const currentDeliveryFee = cart.length === 0 ? 0 : (isFreeDelivery ? 0 : deliveryCharge);
  const grandTotal = subtotal + currentDeliveryFee;

  const handleCheckoutClick = () => {
    setCartOpen(false);
    setActivePage('checkout');
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 cursor-pointer"
          />

          {/* Drawer Panel container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-white z-50 border-l border-gray-200/80 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200/80 flex items-center justify-between bg-gray-50/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shadow-xs">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-base text-gray-800">{t('cart.title')}</h2>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    {t('cart.itemsSelected', { count: cart.reduce((acc, item) => acc + item.quantity, 0).toString() })}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                className="p-2 rounded-xl bg-white border border-gray-200 hover:border-primary/30 text-gray-500 hover:text-primary transition-all shadow-xs cursor-pointer"
                aria-label="Close Cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Body - Items list */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar bg-[#FAFAFA]">
              {cart.length > 0 ? (
                <>
                  {/* Free delivery tracker banner */}
                  {!isFreeDelivery ? (
                    <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-100/50 text-[11px] text-gray-650 text-center font-medium">
                      {t('cart.addMoreForFree', { amount: (500 - subtotal).toString() })}
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-100/50 text-[11px] text-emerald-600 font-bold text-center">
                      {t('cart.freeDeliveryUnlocked')}
                    </div>
                  )}

                  {/* Items list mapper */}
                  {cart.map((item) => {
                    const itemTranslation = DISH_TRANSLATIONS[language]?.[item.menuItem.name];
                    const itemDisplayName = itemTranslation?.name || item.menuItem.name;
                    return (
                      <div
                        key={item.menuItem.id}
                        className="p-3.5 rounded-xl bg-white border border-gray-150 flex items-center space-x-4 shadow-xs"
                      >
                        {/* Item image */}
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                          <PremiumImage
                            src={item.menuItem.image}
                            alt={itemDisplayName}
                            className="w-full h-full object-cover"
                            sizeHint="thumbnail"
                          />
                        </div>

                        {/* Detail row */}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-start justify-between">
                            <h4 className="font-bold text-gray-800 text-xs sm:text-sm line-clamp-1 leading-tight">
                              {itemDisplayName}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.menuItem.id)}
                              className="p-1 text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                              aria-label="Delete item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-primary font-semibold">
                              ₹{item.menuItem.price * item.quantity}
                            </span>

                            {/* Action quantity togglers */}
                            <div className="flex items-center space-x-2 bg-orange-50 border border-orange-100/50 rounded-lg p-1">
                              <button
                                onClick={() => updateQuantity(item.menuItem.id, -1)}
                                className="p-1 hover:bg-orange-100/50 text-primary rounded transition cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs text-gray-800 font-bold px-1">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.menuItem.id, 1)}
                                className="p-1 hover:bg-orange-100/50 text-primary rounded transition cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white border border-dashed border-gray-200 flex items-center justify-center text-gray-300 shadow-xs">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-gray-800">{t('cart.emptyTitle')}</h3>
                    <p className="text-xs text-gray-500 mt-1 max-w-xs leading-relaxed font-light">
                      {t('cart.emptyDesc')}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setCartOpen(false);
                      setActivePage('menu');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-primary/10 cursor-pointer"
                  >
                    {t('cart.browseMenu')}
                  </button>
                </div>
              )}
            </div>

            {/* Drawer Billing and checkout footer panel */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-200/80 bg-white space-y-4 shadow-inner">
                {/* Billing specs */}
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>{t('cart.subtotal')}</span>
                    <span className="text-gray-750 font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('cart.delivery')}</span>
                    {isFreeDelivery ? (
                      <span className="text-emerald-600 font-semibold uppercase text-[10px]">{t('cart.free')}</span>
                    ) : (
                      <span className="text-gray-750 font-semibold">₹{deliveryCharge}</span>
                    )}
                  </div>
                  <div className="flex justify-between pt-2.5 border-t border-gray-200 text-sm">
                    <span className="text-gray-750 font-semibold">{t('cart.total')}</span>
                    <span className="text-primary font-sans font-semibold text-base">₹{grandTotal}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm text-center flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-primary/20 cursor-pointer"
                >
                  <span>{t('cart.proceed')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
