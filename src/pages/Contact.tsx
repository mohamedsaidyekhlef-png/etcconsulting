import React from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import FadeIn from '../components/ui/FadeIn';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const mapToken = import.meta.env.VITE_MAPBOX_TOKEN;
  
  // Coordinates for a central location in New York (Midtown)
  // Since the address is fictional, we place it near Bryant Park for a nice visual
  const coordinates = {
    lat: 40.7536,
    lng: -73.9832
  };

  return (
    <div className="min-h-screen bg-soft-white pt-24">
      {/* Hero */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-white/80">We'd love to hear from you. Reach out to start the conversation.</p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <FadeIn>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <p className="font-medium text-primary">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <p className="font-medium text-primary">hello@etconsultinghub.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Office</p>
                      <p className="font-medium text-primary">
                        123 Leadership Ave, Suite 400<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Map Integration */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-80 relative">
                {mapToken ? (
                  <Map
                    mapboxAccessToken={mapToken}
                    initialViewState={{
                      longitude: coordinates.lng,
                      latitude: coordinates.lat,
                      zoom: 14
                    }}
                    style={{ width: '100%', height: '100%' }}
                    mapStyle="mapbox://styles/mapbox/light-v11"
                    attributionControl={false}
                  >
                    <Marker longitude={coordinates.lng} latitude={coordinates.lat} color="#5A3E2B" />
                    <NavigationControl position="bottom-right" showCompass={false} />
                  </Map>
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                    Map Configuration Missing
                  </div>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <form className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="How can we help?" />
                </div>
                <div className="space-y-2 mb-8">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none h-40 resize-none" placeholder="Tell us about your needs..." />
                </div>
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
