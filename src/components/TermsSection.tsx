import React from 'react';
import { ShieldCheck, ArrowLeft, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TermsSection: React.FC = () => {
  const { setActivePage } = useApp();

  return (
    <section className="py-24 relative text-sm bg-white" id="terms-page">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

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
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">Terms &amp; Conditions</h1>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest mt-1">Last updated: July 13, 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed font-light">
            <p className="text-base font-normal text-gray-750">
              By accessing, browsing, or ordering from the Ganesh J K Restaurant digital platform, you explicitly agree to comply with and be bound by the following terms and conditions. Please read carefully.
            </p>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="text-xs font-mono text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">1</span>
                <span>Order Placement &amp; Confirmations</span>
              </h3>
              <p className="pl-8">
                All orders are finalized and processed directly on WhatsApp. Submitting an order form on our platform generates a direct secure WhatsApp redirection. An order is ONLY considered "Accepted" once our billing coordinator confirms availability and estimated preparation time on WhatsApp.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="text-xs font-mono text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">2</span>
                <span>Pricing &amp; Taxes</span>
              </h3>
              <p className="pl-8">
                While we strive to keep all prices updated, Ganesh J K Restaurant reserves the right to modify any dish pricing without prior notification. A standard GST of 5% is added to all bills in compliance with local municipal food codes. Delivery charges are flat ₹40 and are fully waived on orders summing above ₹500.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="text-xs font-mono text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">3</span>
                <span>Delivery Logistics &amp; Safe Transit</span>
              </h3>
              <p className="pl-8">
                We guarantee 25-30 minutes hot-pack delivery to locations lying within our delivery zones in Tadepalligudem. Delivery times for orders originating beyond this radius may fluctuate. You must check the secure tamper-proof thermal tape upon arrival; do not accept packages if the seal is torn.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="text-xs font-mono text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">4</span>
                <span>Cancellations &amp; Refund Rules</span>
              </h3>
              <p className="pl-8">
                Once our chef begins preparing your food (noted on WhatsApp), the order cannot be cancelled or altered. If you receive a wrong or missing item, please send us a snapshot of the package on WhatsApp for an immediate, full money-back UPI refund or instant credit note.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display font-bold text-gray-900 text-lg flex items-center gap-2">
                <span className="text-xs font-mono text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center">5</span>
                <span>Intellectual Property</span>
              </h3>
              <p className="pl-8">
                All photographic displays, proprietary recipe names (e.g., Chicken 555), and custom web layouts remain the intellectual property of Ganesh J K Restaurant. Unauthorized reproduction of content is strictly prohibited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

