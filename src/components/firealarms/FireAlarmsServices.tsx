
import React from 'react';
import { Flame, Shield, Wrench, Bell, Settings, AlertTriangle } from 'lucide-react';
import { usePageServices } from '@/hooks/useCMSContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Shield,
  Wrench,
  Bell,
  Settings,
  AlertTriangle,
};

export const FireAlarmsServices = () => {
  const { content } = usePageServices('firealarms');

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Flame;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
