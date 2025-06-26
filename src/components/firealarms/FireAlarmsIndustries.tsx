
import React from 'react';
import { Home, Building, School, Hotel, Factory, ShoppingBag } from 'lucide-react';

export const FireAlarmsIndustries = () => {
  const industries = [
    {
      icon: Home,
      title: "Residential",
      description: "Home fire safety systems for apartments, villas, and residential complexes"
    },
    {
      icon: Building,
      title: "Commercial",
      description: "Office buildings, corporate complexes, and commercial establishments"
    },
    {
      icon: School,
      title: "Educational",
      description: "Schools, colleges, and educational institutions with compliance requirements"
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Hotels, restaurants, and hospitality venues with guest safety priorities"
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Manufacturing plants, warehouses, and industrial facilities"
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Shopping malls, retail stores, and commercial complexes"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600">
            Customized fire safety solutions for every sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <industry.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
