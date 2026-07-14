import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PrivacyPolicy: React.FC = () => {
  const { setActivePage } = useApp();

  return (
    <section className="py-12 lg:py-20 relative text-sm bg-[#FAFAFA]" id="privacy-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back navigation button */}
        <button
          onClick={() => setActivePage('home')}
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase text-gray-500 hover:text-primary mb-8 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-primary" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-md space-y-6 text-left">
          <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <div>
              <h1 className="font-display font-bold text-2xl text-gray-800">Privacy Policy</h1>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Last updated: July 13, 2026</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-500 leading-relaxed font-light">
            <p>
              Welcome to the Ganesh J K Restaurant website (jkrestaurant.in). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your details when you place an order or interact with us.
            </p>

            <h3 className="font-display font-bold text-gray-850 text-base pt-2 uppercase tracking-wider">1. Information We Collect</h3>
            <p>
              When you place an order on our platform or fill in our delivery sheet, we collect relevant shipment information including:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs text-gray-600 font-medium">
              <li>Customer Full Name</li>
              <li>Active Mobile / Phone Number</li>
              <li>Delivery Location: House No, Street, Landmark, Area, City, and PIN Code</li>
              <li>Special cooking or delivery instructions</li>
            </ul>

            <h3 className="font-display font-bold text-gray-850 text-base pt-2 uppercase tracking-wider">2. How We Use Your Information</h3>
            <p>
              Your data is solely used to format and pack your meal, calculate correct delivery distances, and generate a customized WhatsApp order confirmation message to directly process your order with our billing desk. We do NOT run telemetry tracker cookies, and we do NOT resell, trade, or share your contact list with third-party marketing companies.
            </p>

            <h3 className="font-display font-bold text-gray-850 text-base pt-2 uppercase tracking-wider">3. Local Storage Policy</h3>
            <p>
              Our website uses browser <code className="text-gray-800 bg-orange-50 border border-orange-100 px-1 rounded text-xs font-mono">localStorage</code> to temporarily persist your food items basket. This ensures you do not lose your selected dishes if you refresh the browser page or temporarily close the tab. This data remains on your local device and is never uploaded or parsed by external servers.
            </p>

            <h3 className="font-display font-bold text-gray-850 text-base pt-2 uppercase tracking-wider">4. Security Standards</h3>
            <p>
              We implement industry-standard secure network sockets (SSL / HTTPS) to ensure that any checkout values keyed into our client-side forms are fully encrypted before launching the secure WhatsApp protocol.
            </p>

            <h3 className="font-display font-bold text-gray-850 text-base pt-2 uppercase tracking-wider">5. Contacting Our Privacy Officer</h3>
            <p>
              If you have questions, corrections, or requests regarding your personal details, feel free to write to our compliance officer at <a href="mailto:ganeshjkrestaurant@gmail.com" className="text-primary hover:underline">ganeshjkrestaurant@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
