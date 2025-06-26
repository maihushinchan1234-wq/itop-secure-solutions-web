
import React from 'react';

export const CCTVTypes = () => {
  const cameraTypes = [
    {
      title: "Dome Cameras",
      description: "360° view, vandal-resistant design perfect for indoor and outdoor monitoring",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    },
    {
      title: "Bullet Cameras",
      description: "Long range, weatherproof cameras ideal for perimeter monitoring and outdoor areas",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
    },
    {
      title: "PTZ Cameras",
      description: "Pan, tilt, zoom functionality for active monitoring and tracking of subjects",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop"
    },
    {
      title: "IP Cameras",
      description: "HD quality, smart analytics, and network connectivity for modern surveillance",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    {
      title: "Thermal Cameras",
      description: "Night vision and heat sensing technology for 24/7 monitoring capabilities",
      image: "https://images.unsplash.com/photo-1573883430120-6e6d5dc38cd5?w=400&h=300&fit=crop"
    },
    {
      title: "Face Recognition Cameras",
      description: "AI-powered, real-time alerts for advanced security and access control",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Types of CCTV Systems We Offer
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect camera for your security needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cameraTypes.map((type, index) => (
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
