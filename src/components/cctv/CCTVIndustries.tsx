
import React from 'react';
import { Home, Building, School, Hotel, Factory, ShoppingBag } from 'lucide-react';

export const CCTVIndustries = () => {
  const industries = [
    {
      icon: Home,
      title: "Residential",
      description: "Home security cameras for entrances, gardens, and interior monitoring"
    },
    {
      icon: Building,
      title: "Commercial",
      description: "Office surveillance, parking lots, and business premise security"
    },
    {
      icon: School,
      title: "Educational",
      description: "School and college campus security with comprehensive coverage"
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Hotel lobby, corridor, and facility monitoring systems"
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Factory floor monitoring, perimeter security, and safety compliance"
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Store surveillance, theft prevention, and customer behavior analysis"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Installation Suggestions by Property Type
          </h2>
          <p className="text-lg text-gray-600">
            Customized surveillance solutions for every sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
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
