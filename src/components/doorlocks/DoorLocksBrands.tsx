
import React from 'react';

export const DoorLocksBrands = () => {
  const brands = [
    {
      name: "Yale",
      logo: "https://www.yalehome.com/content/dam/yale/logos/yale-logo.png",
      description: "Premium smart locks and traditional security solutions"
    },
    {
      name: "August",
      logo: "https://august.com/images/logo.png",
      description: "Smart home access and keyless entry systems"
    },
    {
      name: "Schlage",
      logo: "https://www.schlage.com/content/dam/schlage-com/logo.png",
      description: "Trusted residential and commercial lock solutions"
    },
    {
      name: "Kwikset",
      logo: "https://www.kwikset.com/images/logo.png",
      description: "Innovative door hardware and smart lock technology"
    },
    {
      name: "Godrej",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Godrej-Logo.png",
      description: "India's leading security and storage solutions"
    },
    {
      name: "Honeywell",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Honeywell-Logo.png",
      description: "Advanced home automation and security systems"
    }
  ];

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Top Door Lock Brands We Work With
          </h2>
          <p className="text-lg text-gray-600">
            Trusted brands for secure access solutions
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
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
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
