
import React from 'react';
import { Shield, Smartphone, Cloud, Eye, FileText, Lock } from 'lucide-react';
import { useSmartFeatures } from '@/hooks/useCMSContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Smartphone,
  Cloud,
  Eye,
  FileText,
  Lock,
};

export const SmartCCTVFeatures = () => {
  const { content } = useSmartFeatures();

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Shield;
  };

  return (
    <section id="smart-features" className="py-16 bg-blue-50">
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
          {content.features.map((feature, index) => {
            const Icon = getIcon(feature.icon);
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
