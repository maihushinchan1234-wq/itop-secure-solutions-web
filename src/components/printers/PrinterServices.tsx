
import React from 'react';
import { Wrench, Settings, Package, Truck, HelpCircle, Shield, Zap, Users } from 'lucide-react';

export const PrinterServices = () => {
  const services = [
    {
      icon: Wrench,
      title: "Printer Repairs",
      description: "Complete diagnosis and repair services for all printer issues including paper jams, quality problems, and hardware failures. Our certified technicians handle everything from simple fixes to complex component replacements.",
      features: ["Paper jam resolution", "Print quality issues", "Hardware component replacement", "Diagnostic services"]
    },
    {
      icon: Settings,
      title: "Installation & Setup",
      description: "Professional printer installation and network setup services. We handle everything from unboxing to driver installation, network configuration, and user training.",
      features: ["Network printer setup", "Driver installation", "WiFi configuration", "User training"]
    },
    {
      icon: Package,
      title: "Toner & Ink Supply",
      description: "Reliable supply of original and compatible toner cartridges and ink refills for all major printer brands. We offer competitive pricing and bulk discounts for businesses.",
      features: ["Original cartridges", "Compatible alternatives", "Bulk discounts", "Regular supply contracts"]
    },
    {
      icon: Truck,
      title: "Printer Leasing",
      description: "Flexible printer leasing options for businesses and events. Choose from our range of high-quality printers with maintenance included in the rental package.",
      features: ["Monthly rental plans", "Event-based rentals", "Maintenance included", "Flexible terms"]
    },
    {
      icon: Shield,
      title: "AMC Plans",
      description: "Comprehensive Annual Maintenance Contracts to keep your printers running smoothly. Regular maintenance, priority support, and genuine parts included.",
      features: ["Preventive maintenance", "Priority support", "Genuine parts", "Cost-effective plans"]
    },
    {
      icon: Zap,
      title: "Emergency Support",
      description: "24/7 emergency printer support for critical business operations. Quick response times and on-site service when you need it most.",
      features: ["24/7 availability", "Quick response", "On-site service", "Emergency repairs"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Complete Printer Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From installation to maintenance, we provide comprehensive printer solutions for homes and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
