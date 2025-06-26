
import React from 'react';

export const CCTVServices = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Provide the Best CCTV Services
          </h2>
          <p className="text-lg text-gray-600">
            Complete surveillance solutions for residential and commercial properties
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              1. CCTV Camera Installation
            </h3>
            <p className="text-gray-600">
              Professional installation of dome, bullet, PTZ, IP, and face recognition cameras. 
              Covers placement, cabling, and integration with control systems. Our technicians 
              ensure optimal camera positioning for maximum coverage and minimal blind spots.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2. System Upgrade & Expansion
            </h3>
            <p className="text-gray-600">
              Upgrade from analog to HD or IP-based systems. Includes expanding coverage, 
              integrating facial recognition, and modernizing storage solutions. Transform 
              your old surveillance system into a smart, connected security network.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              3. Camera Repair & Maintenance
            </h3>
            <p className="text-gray-600">
              Lens cleaning, connectivity troubleshooting, DVR issues, recording failure diagnosis. 
              Includes scheduled maintenance and system health checks to ensure continuous 
              surveillance and optimal performance of your security system.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              4. DVR/NVR Setup
            </h3>
            <p className="text-gray-600">
              Configuration of DVR/NVRs for storage, recording schedules, motion detection triggers, 
              and remote access. Complete setup includes network configuration, mobile app integration, 
              and user training for easy system management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
