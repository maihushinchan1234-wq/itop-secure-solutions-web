
import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export const MonitorProperty = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Monitor Your Property
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Ready to secure your property with professional CCTV installation?
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://wa.me/919990820830"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <MessageSquare className="h-5 w-5" />
            WhatsApp Our Expert
          </a>
          <a 
            href="mailto:sachidanand@live.in"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
};
