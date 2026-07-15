import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, ArrowLeft, ArrowRight, MapPin, CreditCard, ShieldCheck, CheckCircle } from 'lucide-react';
import { OrderDetails } from '../types';
import { PremiumImage } from './PremiumImage';

export const CheckoutSection: React.FC = () => {
  const { cart, deliveryCharge, clearCart, setActivePage } = useApp();

  // Form State
  const [formData, setFormData] = useState<OrderDetails>({
    name: '',
    phone: '',
    houseNo: '',
    street: '',
    area: '',
    landmark: '',
    city: 'Tadepalligudem', // Default city
    pinCode: '',
    specialInstructions: '',
    paymentMethod: 'cod'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderDetails, string>>>({});
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const isFreeDelivery = subtotal >= 500;
  const currentDeliveryFee = cart.length === 0 ? 0 : (isFreeDelivery ? 0 : deliveryCharge);
  const grandTotal = subtotal + currentDeliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof OrderDetails]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePaymentSelect = (method: 'cod' | 'upi') => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  // Basic Form Validation
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof OrderDetails, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData.houseNo.trim()) newErrors.houseNo = 'House / Flat No is required';
    if (!formData.street.trim()) newErrors.street = 'Street or Road name is required';
    if (!formData.area.trim()) newErrors.area = 'Area or Locality is required';
    if (!formData.city.trim()) newErrors.city = 'City name is required';
    
    const pinRegex = /^\d{6}$/;
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = 'PIN Code is required';
    } else if (!pinRegex.test(formData.pinCode)) {
      newErrors.pinCode = 'Enter a valid 6-digit Indian PIN Code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before placing an order.');
      return;
    }

    if (!validateForm()) {
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }

    setIsOrdering(true);

    // Format WhatsApp message
    // Restaurant WhatsApp number - explicitly requested 9160776152
    const whatsappNumber = '9160776152'; 
    
    let orderItemsStr = '';
    cart.forEach((item) => {
      orderItemsStr += `• ${item.menuItem.name} [x${item.quantity}] - ₹${item.menuItem.price * item.quantity}\n`;
    });

    const deliveryText = isFreeDelivery ? 'FREE' : `₹${currentDeliveryFee}`;
    const paymentText = formData.paymentMethod === 'cod' ? '💵 Cash on Delivery' : '📱 UPI / GPay';

    const message = `🍽️ *GANESH JK RESTAURANT ORDER* 🍽️\n\n` +
      `*CUSTOMER DETAILS:*\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `📍 Address: ${formData.houseNo}, ${formData.street}, ${formData.area}, ${formData.landmark ? `${formData.landmark}, ` : ''}${formData.city} - ${formData.pinCode}\n\n` +
      `*ITEMS ORDERED:*\n` +
      `${orderItemsStr}\n` +
      `*BILLING BREAKDOWN:*\n` +
      `Subtotal: ₹${subtotal}\n` +
      `Delivery Charge: ${deliveryText}\n` +
      `-------------------------\n` +
      `💰 *Total Amount: ₹${grandTotal}*\n\n` +
      `*ADDITIONAL DETAILS:*\n` +
      `💳 Payment: ${paymentText}\n` +
      `💬 Instructions: ${formData.specialInstructions || 'None'}\n\n` +
      `👉 _Please confirm my order and share estimated delivery time._`;

    // Open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Simulate slight loading to give production feel, then redirect
    setTimeout(() => {
      setIsOrdering(false);
      setOrderPlaced(true);
      clearCart();
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-6" id="order-success">
        <div className="w-20 h-20 bg-emerald-50 border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 mx-auto shadow-md animate-bounce">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <h1 className="font-display font-bold text-3xl text-gray-800">Order Sent Successfully!</h1>
          <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed font-light">
            We have redirected you to WhatsApp to confirm your order with our billing executive. If WhatsApp didn't open, click the button below.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-200/80 text-left space-y-3 max-w-md mx-auto text-xs font-light shadow-xs">
          <h4 className="text-gray-800 font-bold uppercase tracking-wider text-center border-b border-gray-100 pb-2">What happens next?</h4>
          <p className="flex items-start space-x-2"><span className="text-primary font-bold">1.</span> <span className="text-gray-600">Confirm the message on WhatsApp directly.</span></p>
          <p className="flex items-start space-x-2"><span className="text-primary font-bold">2.</span> <span className="text-gray-600">Our manager will verify food availability instantly.</span></p>
          <p className="flex items-start space-x-2"><span className="text-primary font-bold">3.</span> <span className="text-gray-600">You'll receive a delivery time estimate (usually 25-35 mins).</span></p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => setActivePage('menu')}
            className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Order More Food
          </button>
          <button
            onClick={() => setActivePage('home')}
            className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-primary/10 cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 lg:py-20 relative bg-[#FAFAFA]" id="checkout-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Back navigation button */}
        <button
          onClick={() => setActivePage('menu')}
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase text-gray-500 hover:text-primary mb-8 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-primary" />
          <span>Back to Menu</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Delivery Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-md">
              <h2 className="font-display font-bold text-2xl text-gray-800 tracking-tight flex items-center space-x-2.5 mb-6">
                <MapPin className="w-6 h-6 text-primary" />
                <span>Delivery Details</span>
              </h2>

              <form onSubmit={handleSubmitOrder} className="space-y-5 text-sm" id="checkout-form">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium ${
                        errors.name ? 'border-red-400' : 'border-gray-200/80'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Indian Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium ${
                        errors.phone ? 'border-red-400' : 'border-gray-200/80'
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone}</p>}
                  </div>
                </div>

                {/* House No & Street */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">House / Flat / Plot No *</label>
                    <input
                      type="text"
                      name="houseNo"
                      placeholder="e.g. Flat 402, Royal Residency"
                      value={formData.houseNo}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium ${
                        errors.houseNo ? 'border-red-400' : 'border-gray-200/80'
                      }`}
                    />
                    {errors.houseNo && <p className="text-[10px] text-red-500 font-bold">{errors.houseNo}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Street or Road *</label>
                    <input
                      type="text"
                      name="street"
                      placeholder="e.g. Road No 2, Jubilee Hills"
                      value={formData.street}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium ${
                        errors.street ? 'border-red-400' : 'border-gray-200/80'
                      }`}
                    />
                    {errors.street && <p className="text-[10px] text-red-500 font-bold">{errors.street}</p>}
                  </div>
                </div>

                {/* Area & Landmark */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Area / Locality *</label>
                    <input
                      type="text"
                      name="area"
                      placeholder="e.g. Near Cyber Towers"
                      value={formData.area}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium ${
                        errors.area ? 'border-red-400' : 'border-gray-200/80'
                      }`}
                    />
                    {errors.area && <p className="text-[10px] text-red-500 font-bold">{errors.area}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Famous Landmark (Optional)</label>
                    <input
                      type="text"
                      name="landmark"
                      placeholder="e.g. Opposite Metro Pillar A12"
                      value={formData.landmark}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium"
                    />
                  </div>
                </div>

                {/* City & PIN */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border text-gray-700 focus:outline-none focus:border-primary/50 font-medium ${
                        errors.city ? 'border-red-400' : 'border-gray-200/80'
                      }`}
                    />
                    {errors.city && <p className="text-[10px] text-red-500 font-bold">{errors.city}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">6-Digit PIN Code *</label>
                    <input
                      type="text"
                      name="pinCode"
                      placeholder="e.g. 500081"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium ${
                        errors.pinCode ? 'border-red-400' : 'border-gray-200/80'
                      }`}
                    />
                    {errors.pinCode && <p className="text-[10px] text-red-500 font-bold">{errors.pinCode}</p>}
                  </div>
                </div>

                {/* Special Instructions */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Special Cooking / Delivery Instructions</label>
                  <textarea
                    name="specialInstructions"
                    rows={2}
                    placeholder="e.g. Make the chicken biryani spicy, please don't ring the bell, etc."
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium"
                  />
                </div>

                {/* Payment Options Section */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="font-display font-bold text-base text-gray-800 flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span>Payment Method</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div
                      onClick={() => handlePaymentSelect('cod')}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        formData.paymentMethod === 'cod'
                          ? 'border-primary bg-orange-50/50 text-primary'
                          : 'border-gray-200 bg-[#FAFAFA] hover:bg-gray-50 text-gray-550'
                      }`}
                    >
                      <h4 className="font-bold text-xs sm:text-sm text-gray-800 flex items-center justify-between">
                        <span>💵 Cash on Delivery</span>
                        {formData.paymentMethod === 'cod' && <span className="w-2.5 h-2.5 bg-primary rounded-full" />}
                      </h4>
                      <p className="text-[11px] font-light mt-1 text-gray-500 leading-tight">Pay cash or scan QR at your door upon delivery.</p>
                    </div>

                    <div
                      onClick={() => handlePaymentSelect('upi')}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        formData.paymentMethod === 'upi'
                          ? 'border-primary bg-orange-50/50 text-primary'
                          : 'border-gray-200 bg-[#FAFAFA] hover:bg-gray-50 text-gray-550'
                      }`}
                    >
                      <h4 className="font-bold text-xs sm:text-sm text-gray-800 flex items-center justify-between">
                        <span>📱 Scan & Pay via UPI</span>
                        {formData.paymentMethod === 'upi' && <span className="w-2.5 h-2.5 bg-primary rounded-full" />}
                      </h4>
                      <p className="text-[11px] font-light mt-1 text-gray-500 leading-tight">Pay instantly on WhatsApp using any UPI app.</p>
                    </div>
                  </div>
                </div>

                {/* Place Order CTA */}
                <button
                  type="submit"
                  disabled={isOrdering}
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-bold text-sm text-center flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-primary/10 mt-6 cursor-pointer"
                >
                  {isOrdering ? (
                    <span>Formatting Order...</span>
                  ) : (
                    <>
                      <span>Place Order & Open WhatsApp</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6">
              <h2 className="font-display font-bold text-lg text-gray-800 tracking-tight flex items-center space-x-2 border-b border-gray-100 pb-4">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span>Your Order Basket</span>
              </h2>

              {/* Items List inside summary */}
              <div className="space-y-4 max-h-[280px] overflow-y-auto pr-1 no-scrollbar">
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div key={item.menuItem.id} className="flex items-center space-x-3.5 text-xs text-gray-500 font-light">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                        <PremiumImage
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-full h-full object-cover"
                          sizeHint="thumbnail"
                        />
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex justify-between">
                          <h4 className="font-bold text-gray-850 max-w-[170px] line-clamp-1 leading-tight">{item.menuItem.name}</h4>
                          <span className="text-gray-700 font-semibold">₹{item.menuItem.price * item.quantity}</span>
                        </div>
                        <p className="text-[10px] font-medium">Qty: {item.quantity} x ₹{item.menuItem.price}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-gray-500 py-4 text-center">No items added to basket.</p>
                )}
              </div>

              {/* Price calculations */}
              <div className="space-y-2.5 text-xs text-gray-500 border-t border-gray-100 pt-4">
                <div className="flex justify-between">
                  <span>Basket Subtotal</span>
                  <span className="text-gray-755 font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insulated Delivery Pack Fee</span>
                  {isFreeDelivery ? (
                    <span className="text-emerald-600 font-semibold uppercase text-[10px]">Free</span>
                  ) : (
                    <span className="text-gray-755 font-semibold">₹{currentDeliveryFee}</span>
                  )}
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3 text-sm">
                  <span className="text-gray-755 font-semibold">Total Payable</span>
                  <span className="text-primary font-sans font-semibold text-base">₹{grandTotal}</span>
                </div>
              </div>

              {/* Trust badges */}
              <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100/30 text-[10px] text-gray-650 space-y-2.5 font-light leading-relaxed">
                <p className="flex items-center space-x-2 font-bold text-gray-800 uppercase text-[9px] tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Ganesh JK Restaurant Guarantees</span>
                </p>
                <p>• Completely contactless hygiene preparation.</p>
                <p>• 100% replacement or refund if hygiene seal is compromised.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
