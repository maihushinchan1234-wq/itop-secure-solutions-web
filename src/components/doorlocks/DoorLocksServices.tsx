
import React from 'react';
import { Lock, Wrench, Smartphone, Key } from 'lucide-react';

export const DoorLocksServices = () => {
  const services = [
    {
      icon: Lock,
      title: "Lock Installation",
      description: "Professional installation of mechanical, electronic, and smart locks for all door types with proper alignment and security."
    },
    {
      icon: Wrench,
      title: "Lock Repair",
      description: "Expert repair services for jammed locks, broken keys, keypad issues, and smart lock troubleshooting."
    },
    {
      icon: Smartphone,
      title: "Smart Lock Setup",
      description: "Complete smart lock installation with mobile app configuration, user access setup, and integration training."
    },
    {
      icon: Key,
      title: "Key Services",
      description: "Key duplication, lock rekeying, master key systems, and emergency lockout services available 24/7."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Provide the Best Door Lock Services
          </h2>
          <p className="text-lg text-gray-600">
            Complete lock solutions for residential and commercial properties
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
