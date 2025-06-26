
import React from 'react';

export const PrinterHero = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Comprehensive Printer Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Sales, Service, Repairs & Support — Everything You Need for Seamless Printing
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          From home inkjet printers to commercial laser systems, we provide complete printer solutions 
          including installation, repair, maintenance, and supplies for all major brands.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Free Quote
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};
