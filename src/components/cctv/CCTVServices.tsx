
import React from 'react';
import { Shield, Camera, Wrench, HardDrive, AlertTriangle, Settings } from 'lucide-react';
import { usePageServices } from '@/hooks/useCMSContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Settings,
  Wrench,
  HardDrive,
  Shield,
  AlertTriangle,
};

export const CCTVServices = () => {
  const { content } = usePageServices('cctv');

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Camera;
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600">
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
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Repair Section */}
        {content.repairSection && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {content.repairSection.title}
              </h3>
              <p className="text-lg text-gray-600">
                {content.repairSection.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.repairSection.items.map((item, index) => {
                const Icon = getIcon(item.icon);
                return (
                  <div key={index} className="bg-red-50 rounded-lg p-6 text-center">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
