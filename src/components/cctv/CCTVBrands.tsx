
import React from 'react';

export const CCTVBrands = () => {
  const brands = [
    {
      name: "Hikvision",
      logo: "https://www.hikvision.com/content/dam/hikvision/global/about-us/brand-identity/hikvision-logo.png",
      description: "World's leading provider of innovative video surveillance products"
    },
    {
      name: "Dahua",
      logo: "https://www.dahuasecurity.com/asset/image/logo.png",
      description: "Professional video surveillance and smart IoT solutions"
    },
    {
      name: "Axis",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Axis-Logo.png",
      description: "Pioneer in network video and intelligent security solutions"
    },
    {
      name: "Bosch",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Bosch-Logo.png",
      description: "Premium security cameras and surveillance systems"
    },
    {
      name: "CP Plus",
      logo: "https://www.cpplus.in/images/logo.png",
      description: "Leading security surveillance brand in India"
    },
    {
      name: "Panasonic",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Panasonic-Logo.png",
      description: "Advanced video surveillance and security solutions"
    }
  ];

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Top CCTV Brands We Work With
          </h2>
          <p className="text-lg text-gray-600">
            Authorized partners for premium surveillance solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="h-8 w-auto"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.style.display = 'block';
                    }}
                  />
                  <span 
                    className="text-lg font-semibold text-gray-700 hidden"
                  >
                    {brand.name}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {brand.name}
                </h3>
              </div>
              <p className="text-gray-600">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
