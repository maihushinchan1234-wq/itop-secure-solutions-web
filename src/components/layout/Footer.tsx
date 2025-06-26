
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageSquare } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">iTOP Services</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for technology and security solutions since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/919990820830" className="text-gray-300 hover:text-white">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('blogs')}
                  className="text-gray-300 hover:text-white"
                >
                  Blogs
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/printers" className="text-gray-300 hover:text-white">Printers</a></li>
              <li><a href="/cctv" className="text-gray-300 hover:text-white">CCTV Systems</a></li>
              <li><a href="/door-locks" className="text-gray-300 hover:text-white">Door Locks</a></li>
              <li><a href="/fire-alarms" className="text-gray-300 hover:text-white">Fire Alarms</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-gray-300">+91 9990820830</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-gray-300">sachidanand@live.in</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span className="text-gray-300">224, B1, DDA Flats, Loknayak Puram, New Delhi 110041</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 iTOP Services. All rights reserved. | Serving Delhi NCR since 2008
          </p>
        </div>
      </div>
    </footer>
  );
};
