
import React from 'react';
import { Shield, Camera, Monitor, Settings } from 'lucide-react';

export const CCTVServices = () => {
  const services = [
    {
      icon: Camera,
      title: "CCTV Installation",
      description: "Professional installation of dome, bullet, PTZ, and IP cameras with proper placement and cabling setup for maximum coverage."
    },
    {
      icon: Monitor,
      title: "System Monitoring",
      description: "24/7 live monitoring with mobile app access, cloud storage integration, and real-time alerts for suspicious activities."
    },
    {
      icon: Settings,
      title: "Maintenance & Repair",
      description: "Regular maintenance, lens cleaning, connectivity troubleshooting, DVR repairs, and system health checks."
    },
    {
      icon: Shield,
      title: "Security Consultation",
      description: "Expert advice on camera placement, system design, and security protocols tailored to your specific needs."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Provide the Best CCTV Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive security solutions for homes, offices, and commercial spaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
