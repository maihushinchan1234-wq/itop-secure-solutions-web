
import React from 'react';

export const PrinterTypes = () => {
  const printerTypes = [
    {
      title: "Laser Printers",
      description: "High-speed, cost-effective printing for offices and businesses. Perfect for high-volume text documents with sharp, professional quality.",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
      features: ["Fast printing speeds", "Low cost per page", "Professional quality", "High paper capacity"],
      bestFor: "Offices, businesses, high-volume printing"
    },
    {
      title: "Inkjet Printers",
      description: "Versatile printers ideal for photo printing and color documents. Great for home use and small offices requiring quality color output.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
      features: ["Excellent photo quality", "Color accuracy", "Affordable initial cost", "Compact design"],
      bestFor: "Home users, photo printing, small offices"
    },
    {
      title: "All-in-One Printers",
      description: "Multifunction devices combining printing, scanning, copying, and faxing capabilities. Space-saving solution for comprehensive office needs.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      features: ["Multiple functions", "Space-saving", "Network connectivity", "Mobile printing"],
      bestFor: "Small offices, home offices, versatile tasks"
    },
    {
      title: "Wide Format Printers",
      description: "Large format printing for posters, banners, and technical drawings. Professional quality for marketing materials and engineering plans.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      features: ["Large format printing", "High resolution", "Professional quality", "Various media types"],
      bestFor: "Design studios, engineering firms, marketing agencies"
    },
    {
      title: "Thermal Printers",
      description: "Specialized printers for labels, receipts, and barcodes. Essential for retail, logistics, and inventory management applications.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      features: ["No ink required", "Fast printing", "Durable labels", "Low maintenance"],
      bestFor: "Retail, warehouses, shipping, inventory"
    },
    {
      title: "Dot Matrix Printers",
      description: "Impact printers for multi-part forms and carbon copies. Reliable solution for applications requiring duplicate copies.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      features: ["Multi-part forms", "Carbon copies", "Reliable operation", "Low operating cost"],
      bestFor: "Banking, logistics, official documentation"
    }
  ];

  return (
    <section id="types" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Types of Printers We Service
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work with all types of printers, from basic home models to industrial printing solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {printerTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={type.image} 
                alt={type.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <span className="text-sm font-medium text-blue-800">Best for: </span>
                  <span className="text-sm text-blue-700">{type.bestFor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
