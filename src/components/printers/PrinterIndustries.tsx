
import React from 'react';
import { Building, Home, GraduationCap, ShoppingBag, Factory, Heart } from 'lucide-react';

export const PrinterIndustries = () => {
  const industries = [
    {
      icon: Building,
      title: "Corporate Offices",
      description: "High-volume printing solutions for large corporations with network printers, managed print services, and enterprise-grade security.",
      solutions: ["Network printer setup", "Managed print services", "Cost optimization", "Security features"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      icon: Home,
      title: "Home Offices",
      description: "Compact, efficient printers for home-based professionals and remote workers with wireless connectivity and mobile printing.",
      solutions: ["Wireless setup", "Mobile printing", "Compact designs", "Cost-effective solutions"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Reliable printing solutions for schools and colleges with high-capacity printers and student-friendly features.",
      solutions: ["High-capacity printers", "Student access control", "Bulk printing", "Educational discounts"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop"
    },
    {
      icon: ShoppingBag,
      title: "Retail Businesses",
      description: "Point-of-sale printers, receipt printers, and label printing solutions for retail operations and inventory management.",
      solutions: ["POS printers", "Receipt printing", "Label printers", "Inventory solutions"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industrial-grade printers for manufacturing environments with barcode printing, quality control documentation, and harsh environment capabilities.",
      solutions: ["Industrial printers", "Barcode printing", "Quality documentation", "Harsh environment"],
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Medical-grade printing solutions for hospitals and clinics with patient record printing, prescription labels, and compliance features.",
      solutions: ["Medical records", "Prescription labels", "HIPAA compliance", "Patient wristbands"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="industries" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized printing solutions tailored to meet the unique needs of different industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={industry.image} 
                alt={industry.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <industry.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Our Solutions:</h4>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
