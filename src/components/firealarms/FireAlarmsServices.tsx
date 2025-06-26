
import React from 'react';
import { Flame, Shield, Wrench, Bell } from 'lucide-react';

export const FireAlarmsServices = () => {
  const services = [
    {
      icon: Flame,
      title: "Fire Alarm Installation",
      description: "Complete installation of smoke, heat, and flame detectors with control panel setup and zone configuration."
    },
    {
      icon: Shield,
      title: "System Maintenance",
      description: "Regular testing, battery replacement, sensor cleaning, and compliance inspections to ensure optimal performance."
    },
    {
      icon: Wrench,
      title: "Emergency Repairs",
      description: "24/7 urgent response for faulty alarms, disconnected sensors, and control panel issues."
    },
    {
      icon: Bell,
      title: "Smart Monitoring",
      description: "Advanced monitoring systems with mobile alerts, incident logs, and integration with building management systems."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Provide the Best Fire Alarm Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive fire safety solutions for all types of properties
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
