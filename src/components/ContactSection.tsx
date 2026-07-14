import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mapProvider, setMapProvider] = useState<'osm' | 'google'>('osm');

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
    <section className="py-12 lg:py-20 relative min-h-screen bg-[#FAFAFA]" id="contact-page">
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold tracking-widest uppercase">
            Get In Touch
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-gray-800 tracking-tight mt-2">
            We Would Love to Hear From You
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-[#FF8C39] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 font-light text-sm mt-4">
            Have questions about catering, private bookings, or need help with a custom order? Drop us a line and our manager will reach out within minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6">
              <h2 className="font-display font-bold text-xl text-gray-800 tracking-tight flex items-center space-x-2.5">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Send Us a Direct Message</span>
              </h2>

              {success ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-100 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto font-bold text-lg">
                    ✓
                  </div>
                  <h3 className="font-bold text-gray-800 text-base">Message Sent Successfully!</h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting Ganesh J K Restaurant. Our customer care manager will respond to you via email or phone shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-xs text-primary font-bold hover:underline uppercase tracking-wider block mx-auto pt-2 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Kumar"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. anand@gmail.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Subject (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Party Catering Query"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Detailed Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Type your questions or queries here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-primary/50 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 shadow-md shadow-primary/10 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Contact Card & Timing */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6">
              <h2 className="font-display font-bold text-lg text-gray-800 tracking-tight border-b border-gray-100 pb-4">
                Operational Info
              </h2>

              <ul className="space-y-5 text-xs text-gray-500 font-medium">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-2 text-left">
                    <h4 className="font-bold text-gray-800 text-sm">Restaurant Address</h4>
                    <div className="leading-relaxed text-xs text-gray-500 space-y-0.5">
                      <p>📍 Railway Station Road,</p>
                      <p>Near Railway Station,</p>
                      <p>Tadepalligudem,</p>
                      <p>Andhra Pradesh</p>
                    </div>
                    <div className="pt-1">
                      <a
                        href="https://maps.google.com/?q=Ganesh+J+K+Restaurant,+Railway+Station+Road,+Near+Railway+Station,+Tadepalligudem,+Andhra+Pradesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-[10px] font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
                      >
                        <span>📍 Get Directions</span>
                      </a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1 text-left">
                    <h4 className="font-bold text-gray-800 text-sm">Direct Phone Number</h4>
                    <p><a href="tel:+919160776152" className="hover:text-primary text-gray-850 font-bold">+91 9160776152</a> (Order & Booking Hotline)</p>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1 text-left">
                    <h4 className="font-bold text-gray-800 text-sm">Customer Support Mail</h4>
                    <p><a href="mailto:ganeshjkrestaurant@gmail.com" className="hover:text-primary text-gray-850">ganeshjkrestaurant@gmail.com</a></p>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1 text-left">
                    <h4 className="font-bold text-gray-800 text-sm">Opening Hours</h4>
                    <p>Mon - Fri: 11:00 AM - 11:30 PM</p>
                    <p>Sat - Sun: 11:00 AM - Midnight</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Location Map Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl text-gray-800 tracking-tight">Interactive Location Map</h2>
            </div>
            
            {/* Map Provider Tabs */}
            <div className="inline-flex rounded-xl bg-gray-100 p-1 border border-gray-200/50 self-start sm:self-auto text-xs font-semibold">
              <button
                type="button"
                onClick={() => setMapProvider('osm')}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  mapProvider === 'osm'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                OpenStreetMap (Highly Compatible)
              </button>
              <button
                type="button"
                onClick={() => setMapProvider('google')}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  mapProvider === 'google'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Google Maps (Standard)
              </button>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden border border-gray-200/80 shadow-md h-96 w-full bg-white relative">
            {mapProvider === 'osm' ? (
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=81.520%2C16.828%2C81.536%2C16.838&amp;layer=mapnik&amp;marker=16.833%2C81.528"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Ganesh J K Restaurant OpenStreetMap Location"
              />
            ) : (
              <iframe
                src="https://maps.google.com/maps?q=Ganesh%20J%20K%20Restaurant,%20Railway%20Station%20Road,%20Near%20Railway%20Station,%20Tadepalligudem,%20Andhra%20Pradesh&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Ganesh J K Restaurant Google Map Location"
              />
            )}
            
            {/* Quick directions overlay link inside the map for better navigation */}
            <div className="absolute bottom-4 right-4 z-10">
              <a
                href="https://maps.google.com/?q=Ganesh+J+K+Restaurant,+Railway+Station+Road,+Near+Railway+Station,+Tadepalligudem,+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-lg transition-all duration-200"
              >
                <span>📍 Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
