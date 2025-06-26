
import React from 'react';

export const PrinterBrands = () => {
  const brands = [
    {
      name: "HP",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/HP-Logo.png",
      description: "Leading manufacturer of inkjet and laser printers for home and business use.",
      specialties: ["LaserJet series", "DeskJet inkjet", "OfficeJet all-in-one", "Enterprise solutions"]
    },
    {
      name: "Canon",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Canon-Logo.png",
      description: "Premium printers known for excellent photo quality and reliability.",
      specialties: ["PIXMA series", "imageCLASS laser", "Professional photo printers", "Wide format"]
    },
    {
      name: "Epson",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Epson-Logo.png",
      description: "Innovative printing technology with EcoTank and WorkForce series.",
      specialties: ["EcoTank printers", "WorkForce series", "Photo printers", "POS printers"]
    },
    {
      name: "Brother",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Brother-Logo.png",
      description: "Reliable printers for small to medium businesses with excellent support.",
      specialties: ["Laser printers", "Label printers", "All-in-one devices", "Industrial printers"]
    },
    {
      name: "Samsung",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png",
      description: "Quality laser printers with smart connectivity features.",
      specialties: ["Laser printers", "Smart connectivity", "Mobile printing", "Office solutions"]
    },
    {
      name: "Xerox",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Xerox-Logo.png",
      description: "Professional printing solutions for large enterprises and offices.",
      specialties: ["Production printers", "Multifunction devices", "Document solutions", "Enterprise systems"]
    }
  ];

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Brands We Service
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Authorized service partners for all major printer brands with genuine parts and expert technicians
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
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {brand.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {brand.description}
              </p>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                <ul className="space-y-1">
                  {brand.specialties.map((specialty, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Don't see your brand?
            </h3>
            <p className="text-gray-600 mb-6">
              We service many other brands including Ricoh, Kyocera, Lexmark, and more. 
              Contact us to check if we can help with your specific printer model.
            </p>
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
