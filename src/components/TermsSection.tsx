import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TermsSection: React.FC = () => {
  const { setActivePage } = useApp();

  return (
    <section className="py-12 lg:py-20 relative text-sm bg-[#FAFAFA]" id="terms-page">
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
              <h1 className="font-display font-bold text-2xl text-gray-800">Terms & Conditions</h1>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Last updated: July 13, 2026</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-500 leading-relaxed font-light">
            <p>
              By accessing, browsing, or using the Ganesh J K Restaurant website, you agree to comply with and be bound by the following terms and conditions. Please review these carefully before placing an order.
            </p>

            <h3 className="font-display font-bold text-gray-850 text-base pt-2 uppercase tracking-wider">1. Order Placement & Confirmations</h3>
            <p>
              All orders are finalized and processed directly on WhatsApp. Submitting an order form on our platform generates an encrypted WhatsApp redirection string. An order is ONLY considered "Accepted" once our billing coordinator confirms the availability and estimated preparation time on WhatsApp with you.
            </p>

            <h3 className="font-display font-bold text-gray-850 text-base pt-2 uppercase tracking-wider">2. Pricing & Taxes</h3>
            <p>
              While we strive to keep all prices updated, Ganesh J K Restaurant reserves the right to modify any dish pricing without prior notification. A standard GST of 5% is added to all bills in compliance with local municipal food codes. Delivery charges are flat ₹40 and are fully waived on orders summing above ₹500.
            </p>

            <h3 className="font-display font-bold text-gray-850 text-base pt-2 uppercase tracking-wider">3. Delivery Logistics & Safe Transit</h3>
            <p>
              We guarantee 25-30 minutes hot-pack delivery to locations lying within our delivery zones in Tadepalligudem. Delivery times for orders originating beyond this radius may fluctuate. You must check the secure tamper-proof thermal tape upon arrival; do not accept packages if the seal is torn.
            </p>

            <h3 className="font-display font-bold text-gray-850 text-base pt-2 uppercase tracking-wider">4. Cancellations & Refund Rules</h3>
            <p>
              Once our chef begins preparing your food (noted on WhatsApp), the order cannot be cancelled or altered. If you receive a wrong or missing item, please send us a snapshot of the package on WhatsApp for an immediate, full money-back UPI refund or instant credit note.
            </p>

            <h3 className="font-display font-bold text-gray-850 text-base pt-2 uppercase tracking-wider">5. Intellectual Property</h3>
            <p>
              All photographic displays, proprietary recipe names (e.g., Chicken 555), and custom web layouts remain the intellectual property of Ganesh J K Restaurant. Unauthorized reproduction of content is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
