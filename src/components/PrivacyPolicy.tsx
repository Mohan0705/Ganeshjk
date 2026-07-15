import React from 'react';
import { ShieldCheck, ArrowLeft, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PrivacyPolicy: React.FC = () => {
  const { setActivePage } = useApp();

  return (
    <section className="py-24 relative text-sm bg-white" id="privacy-page">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back navigation button */}
        <div className="text-left">
          <button
            onClick={() => setActivePage('home')}
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-primary mb-10 group transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-primary" />
            <span>Return to Sanctuary Lounge</span>
          </button>
        </div>

        <div className="bg-[#FFFDFB]/95 rounded-[2.5rem] p-8 sm:p-14 border border-[#F4EBE1] shadow-xl space-y-10 text-left">
          <div className="flex items-center space-x-4 border-b border-[#F5EDE4] pb-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">Privacy Policy</h1>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest mt-1">Last updated: July 13, 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed font-light">
            <p className="text-base font-normal text-gray-750">
              Welcome to the Ganesh JK Restaurant website. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your details when you place an order or interact with our digital sanctuary.
            </p>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="text-xs font-mono text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">1</span>
                <span>Information We Collect</span>
              </h3>
              <p className="pl-8">
                When you place an order on our platform or fill in our delivery sheet, we collect relevant shipment information including:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-10 text-xs text-gray-600 font-medium">
                <li>Customer Full Name</li>
                <li>Active Mobile / Phone Number</li>
                <li>Delivery Location: House No, Street, Landmark, Area, City, and PIN Code</li>
                <li>Special cooking or delivery instructions</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="text-xs font-mono text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">2</span>
                <span>How We Use Your Information</span>
              </h3>
              <p className="pl-8">
                Your data is solely used to format and pack your meal, calculate correct delivery distances, and generate a customized WhatsApp order confirmation message to directly process your order with our billing desk. We do NOT run telemetry tracker cookies, and we do NOT resell, trade, or share your contact list with third-party marketing companies.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="text-xs font-mono text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">3</span>
                <span>Local Storage Policy</span>
              </h3>
              <p className="pl-8">
                Our website uses browser <code className="text-gray-900 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded text-xs font-mono">localStorage</code> to temporarily persist your food items basket. This ensures you do not lose your selected dishes if you refresh the browser page or temporarily close the tab. This data remains on your local device and is never uploaded or parsed by external servers.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="text-xs font-mono text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">4</span>
                <span>Security Standards</span>
              </h3>
              <p className="pl-8">
                We implement industry-standard secure network sockets (SSL / HTTPS) to ensure that any checkout values keyed into our client-side forms are fully encrypted before launching the secure WhatsApp protocol.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="text-xs font-mono text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">5</span>
                <span>Contacting Our Privacy Officer</span>
              </h3>
              <p className="pl-8">
                If you have questions, corrections, or requests regarding your personal details, feel free to write to our compliance officer at <a href="mailto:ganeshjkrestaurant@gmail.com" className="text-primary font-bold hover:underline">ganeshjkrestaurant@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

