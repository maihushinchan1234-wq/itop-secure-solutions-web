
import React from 'react';

export const CCTVHero = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          CCTV Camera Installation & Surveillance Systems
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          From Indoor Monitoring to Smart AI-Powered Security – Keep an Eye with Confidence
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Professional CCTV installation and monitoring solutions for homes, offices, and commercial spaces. 
          Complete security systems with 24/7 monitoring, cloud storage, and mobile access.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quote
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};
