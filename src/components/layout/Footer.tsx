
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFooterContent } from '@/hooks/useCMSContent';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { content } = useFooterContent();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleServiceNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{content.companyName}</h3>
            <p className="text-gray-300 mb-4">
              {content.description}
            </p>
            <div className="flex space-x-4">
              <a href={content.socialLinks.facebook} className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={content.socialLinks.instagram} className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={content.socialLinks.whatsapp} className="text-gray-300 hover:text-white">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {content.quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-300 hover:text-white text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => navigate('/feedback')}
                  className="text-gray-300 hover:text-white text-left"
                >
                  Feedback
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {content.serviceLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleServiceNavigation(link.path)}
                    className="text-gray-300 hover:text-white text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-gray-300">{content.contactInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-gray-300">{content.contactInfo.email}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span className="text-gray-300">{content.contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
