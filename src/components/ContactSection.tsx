import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Sparkles, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mapProvider, setMapProvider] = useState<'google' | 'osm'>('google');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill out all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section className="py-24 relative min-h-screen bg-white" id="contact-page">
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary text-xs font-extrabold tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full inline-block">
            🛎️ Concierge &amp; Reservations
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-gray-900 tracking-tight mt-4">
            Connect With Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 font-light text-sm mt-4 leading-relaxed">
            Have questions regarding royal catering, family events, or need specialized delivery customization? Our guest relations officer is available 24/7 to curate your requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDFB]/90 rounded-[2rem] p-8 sm:p-10 border border-[#F4EBE1] shadow-xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              
              <h2 className="font-display font-bold text-2xl text-gray-900 tracking-tight flex items-center space-x-3">
                <MessageSquare className="w-6 h-6 text-primary" />
                <span>Send Us a Direct Message</span>
              </h2>

              {success ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto font-bold text-2xl shadow-lg">
                    ✓
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900">Message Delivered Successfully!</h3>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to Ganesh J K Restaurant. Our Guest Support Manager has received your query and will reply via email or phone within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-xs text-primary font-bold hover:underline uppercase tracking-widest block mx-auto pt-2 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-sm" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 font-medium transition-all"
                      />
                    </div>
                    
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. ganeshjkrestaurant@gmail.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block">Subject (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Party Catering Query"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 font-medium transition-all"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block">Detailed Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Type your questions or queries here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/60 font-medium transition-all resize-none"
                    />
                  </div>

                  <div className="text-left pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center space-x-2.5 shadow-lg shadow-primary/20 hover:scale-102 hover-glow cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Contact Card & Timing */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFFDFB]/90 rounded-[2rem] p-8 sm:p-10 border border-[#F4EBE1] shadow-xl space-y-8 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
              
              <h2 className="font-display font-bold text-xl text-gray-900 tracking-tight border-b border-[#F5EDE4] pb-5 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Operational Chronicles</span>
              </h2>

              <ul className="space-y-6 text-xs text-gray-600 font-medium">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">Restaurant Address</h4>
                    <div className="leading-relaxed text-xs text-gray-500">
                      <p className="font-bold text-gray-700">📍 Ganesh J K Restaurant</p>
                      <p>Railway Station Road,</p>
                      <p>Near Railway Station,</p>
                      <p>Tadepalligudem, Andhra Pradesh</p>
                    </div>
                    <div className="pt-2">
                      <a
                        href="https://maps.google.com/?q=Ganesh+J+K+Restaurant,+Railway+Station+Road,+Near+Railway+Station,+Tadepalligudem,+Andhra+Pradesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-[10px] font-extrabold uppercase tracking-widest transition-all duration-200 shadow-md hover-glow"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Get Directions</span>
                      </a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 text-sm">Direct Hotline</h4>
                    <p className="text-gray-700 font-extrabold text-base">
                      <a href="tel:+919160776152" className="hover:text-primary transition-colors">+91 9160776152</a>
                    </p>
                    <p className="text-[10px] text-gray-400 font-light">Available for Delivery, Catering &amp; Table Bookings</p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 text-sm">Direct Support Mail</h4>
                    <p className="text-gray-700 font-bold">
                      <a href="mailto:ganeshjkrestaurant@gmail.com" className="hover:text-primary transition-colors">ganeshjkrestaurant@gmail.com</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 text-sm">Fine Dining Hours</h4>
                    <p className="text-gray-700">Mon - Fri: <span className="font-bold">11:00 AM - 11:30 PM</span></p>
                    <p className="text-gray-700">Sat - Sun: <span className="font-bold">11:00 AM - Midnight</span></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Location Map Section */}
        <div className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="font-display font-bold text-2xl text-gray-900 tracking-tight">Interactive Sanctuary Map</h2>
            </div>
            
            {/* Map Provider Tabs */}
            <div className="inline-flex rounded-full bg-gray-100 p-1 border border-gray-200/50 self-start sm:self-auto text-xs font-semibold">
              <button
                type="button"
                onClick={() => setMapProvider('google')}
                className={`px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  mapProvider === 'google'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Google Maps
              </button>
              <button
                type="button"
                onClick={() => setMapProvider('osm')}
                className={`px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  mapProvider === 'osm'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                OpenStreetMap Fallback
              </button>
            </div>
          </div>
          
          <div className="rounded-[2rem] overflow-hidden border border-gray-200 shadow-2xl h-[450px] w-full bg-[#f8f9fa] relative">
            {mapProvider === 'google' ? (
              <iframe
                src="https://maps.google.com/maps?q=Ganesh%20J%20K%20Restaurant,%20Railway%20Station%20Road,%20Near%20Railway%20Station,%20Tadepalligudem,%20Andhra%20Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Ganesh J K Restaurant Location Map"
                className="w-full h-full"
              />
            ) : (
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=81.520%2C16.828%2C81.536%2C16.838&layer=mapnik&marker=16.833%2C81.528"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Ganesh J K Restaurant OpenStreetMap Location"
                className="w-full h-full"
              />
            )}
            
            {/* Quick directions overlay link inside the map */}
            <div className="absolute bottom-6 right-6 z-10">
              <a
                href="https://maps.google.com/?q=Ganesh+J+K+Restaurant,+Railway+Station+Road,+Near+Railway+Station,+Tadepalligudem,+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-5 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-extrabold uppercase tracking-widest shadow-xl transition-all duration-300 hover:scale-105 hover-glow"
              >
                <Navigation className="w-4 h-4 text-white animate-pulse" />
                <span>Open in Native Map App</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

