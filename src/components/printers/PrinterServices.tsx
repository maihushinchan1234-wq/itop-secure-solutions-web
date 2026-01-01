
import React from 'react';
import { Wrench, Settings, Package, Truck, Shield, Zap } from 'lucide-react';
import { usePageServices } from '@/hooks/useCMSContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Settings,
  Package,
  Truck,
  Shield,
  Zap,
};

export const PrinterServices = () => {
  const { content } = usePageServices('printers');

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Wrench;
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.sectionDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
