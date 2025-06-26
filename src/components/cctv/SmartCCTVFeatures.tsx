
import React from 'react';
import { Shield, Smartphone, Cloud, Eye, FileText, Lock } from 'lucide-react';

export const SmartCCTVFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "24/7 Live Monitoring",
      description: "Continuous surveillance with real-time alerts"
    },
    {
      icon: Smartphone,
      title: "Mobile Alerts & App Access",
      description: "Instant notifications and remote viewing on your phone"
    },
    {
      icon: Cloud,
      title: "Cloud Storage Integration",
      description: "Secure cloud backup and easy access to recordings"
    },
    {
      icon: Eye,
      title: "AI-Powered Motion Detection",
      description: "Smart analytics to reduce false alarms"
    },
    {
      icon: FileText,
      title: "Log History for Recorded Events",
      description: "Detailed timeline of all surveillance activities"
    },
    {
      icon: Lock,
      title: "Secure Remote Access Control",
      description: "Protected login and encrypted data transmission"
    }
  ];

  return (
    <section id="smart-features" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Smart CCTV Features
          </h2>
          <p className="text-lg text-gray-600">
            Advanced technology for modern security needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
