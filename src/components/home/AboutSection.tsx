
import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About iTOP Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to iTOP Services, your go-to specialist for reliable hardware and security solutions. 
            For over 17 years (since 2008), we've proudly supported homes, offices, and institutions across Delhi NCR.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To equip every space with smart, efficient, and secure technology—empowering clients 
              with peace of mind and operational excellence.
            </p>
            <p className="text-gray-600">
              We're more than just a supply store — we're your dedicated partner in keeping your 
              environment safe, connected, and productive.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop" 
              alt="Office Technology Setup" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop" 
              alt="Security System Installation" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop" 
              alt="Printer Service" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop" 
              alt="Smart Lock Installation" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Expertise & Experience</h4>
              <p className="text-gray-600 text-sm">Nearly two decades of trusted service in Delhi NCR</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Quality Product Range</h4>
              <p className="text-gray-600 text-sm">Only genuine, brand-backed hardware and components</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">End-to-End Care</h4>
              <p className="text-gray-600 text-sm">From consultation to installation and after-sales support</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Customer-First Approach</h4>
              <p className="text-gray-600 text-sm">Honest advice, tailored solutions, attention to detail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
