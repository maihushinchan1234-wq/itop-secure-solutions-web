
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, Shield, Eye, Flame, ArrowRight } from 'lucide-react';

export const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Printer,
      title: "Printers",
      description: "Repairs, toner refills, leasing, sales, Canon/HP/Epson support, on-site technicians.",
      path: "/printers",
      color: "bg-gray-100 text-gray-800"
    },
    {
      icon: Eye,
      title: "CCTV Systems",
      description: "Indoor/outdoor cameras, IP systems, cloud storage, demo videos, maintenance plans.",
      path: "/cctv",
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: Shield,
      title: "Door Locks",
      description: "Smart locks, biometric/keycard access, mobile app integration, full installation.",
      path: "/door-locks",
      color: "bg-green-100 text-green-800"
    },
    {
      icon: Flame,
      title: "Fire Alarms",
      description: "Smoke/heat/CO sensors, regulatory compliance, emergency support, AMCs.",
      path: "/fire-alarms",
      color: "bg-red-100 text-red-800"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology and security solutions for homes, offices, and institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(service.path)}
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {service.description}
                </p>
                <div className="flex items-center justify-center text-blue-600 font-medium">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
