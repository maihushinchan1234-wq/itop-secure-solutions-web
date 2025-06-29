
import React from 'react';

export const FireAlarmsTypes = () => {
  const alarmTypes = [
    {
      title: "Smoke Detectors",
      description: "Ionization and photoelectric smoke detectors for early fire detection",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    },
    {
      title: "Heat Detectors",
      description: "Fixed temperature and rate-of-rise heat detectors for kitchen and industrial areas",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
    },
    {
      title: "Control Panels",
      description: "Addressable and conventional fire alarm control panels with zone management",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop"
    },
    {
      title: "Notification Devices",
      description: "Sirens, strobes, and voice evacuation systems for emergency alerts",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="types" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Types of Fire Alarm Systems We Offer
          </h2>
          <p className="text-lg text-gray-600">
            Advanced fire detection systems for complete protection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {alarmTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={type.image} 
                alt={type.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
