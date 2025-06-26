
import React from 'react';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Trusted Technology & Security Experts
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Serving You Since 2008
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Your go-to specialist for reliable hardware and security solutions. 
          For over 17 years, we've proudly supported homes, offices, and institutions across Delhi NCR.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold">17+</div>
            <div className="text-sm opacity-75">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-sm opacity-75">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm opacity-75">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm opacity-75">Genuine Parts</div>
          </div>
        </div>
      </div>
    </section>
  );
};
