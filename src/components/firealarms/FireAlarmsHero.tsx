
import React from 'react';

export const FireAlarmsHero = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Fire Alarm & Detection Systems
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          From Smoke Detectors to Integrated Alarm Systems – Detect Early, Respond Fast, Stay Safe
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Professional fire alarm system installation and maintenance for homes, offices, and industrial facilities. 
          Advanced detection systems with 24/7 monitoring and emergency response capabilities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Fire Safety Audit
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Explore Alarm Types
          </button>
        </div>
      </div>
    </section>
  );
};
