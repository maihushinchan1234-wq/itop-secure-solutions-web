
import React from 'react';

export const DoorLocksBrands = () => {
  const brands = [
    "Godrej", "Yale", "Qubo", "Hafele", "Ozone", "August"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Top Door Lock Brands We Work With
          </h2>
          <p className="text-lg text-gray-600">
            Trusted brands for reliable security solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg font-semibold text-gray-700">{brand}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
