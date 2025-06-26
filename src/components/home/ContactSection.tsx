
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919990820830', '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch for all your technology and security needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone / WhatsApp</h4>
                  <p className="text-gray-600">+91 9990820830</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">sachidanand@live.in</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">224, B1, DDA Flats, Loknayak Puram, New Delhi 110041</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Coverage Area</h4>
                  <p className="text-gray-600">Delhi NCR</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.2!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
