
import React from 'react';
import { CheckCircle, Users, Clock, Award } from 'lucide-react';

export const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Customers",
      description: "Homes and businesses served across Delhi NCR"
    },
    {
      icon: Clock,
      number: "16+",
      label: "Years Experience",
      description: "Established in 2008, serving the community"
    },
    {
      icon: Award,
      number: "50+",
      label: "Brands Supported",
      description: "Wide range of technology brands and models"
    },
    {
      icon: CheckCircle,
      number: "24/7",
      label: "Support Available",
      description: "Emergency services and customer support"
    }
  ];

  const features = [
    "Certified and experienced technicians",
    "Same-day service for most repairs",
    "Genuine parts and quality materials",
    "Comprehensive warranty on all services",
    "Transparent pricing with no hidden costs",
    "Free consultation and site surveys"
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About iTOP Services
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Since 2008, iTOP Services has been Delhi NCR's trusted partner for comprehensive 
              technology solutions. What started as a small printer repair service has grown into 
              a full-service technology and security company, serving hundreds of satisfied customers 
              across residential and commercial sectors.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We specialize in printer services, CCTV surveillance systems, smart door locks, 
              and fire alarm installations. Our team of certified technicians brings years of 
              experience and expertise to every project, ensuring reliable solutions that keep 
              your technology running smoothly and your property secure.
            </p>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{achievement.label}</div>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Why Choose iTOP Services?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              At iTOP Services, we understand that technology is essential to your daily life and business operations. 
              That's why we're committed to providing fast, reliable, and cost-effective solutions that minimize 
              downtime and maximize your peace of mind.
            </p>
            <p className="text-lg text-gray-600">
              Whether you need emergency printer repair, want to upgrade to a smart security system, or require 
              regular maintenance for your office equipment, we're here to help with professional service and 
              genuine care for our customers' satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
