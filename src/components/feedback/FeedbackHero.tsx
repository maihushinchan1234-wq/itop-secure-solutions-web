
import React from 'react';
import { Star } from 'lucide-react';

export const FeedbackHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          What Our Customers Say
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Real feedback from our happy clients — across printer repair, smart lock installs, CCTV setup, and more
        </p>
        <div className="flex justify-center items-center gap-4 text-lg">
          <span className="text-yellow-400 font-bold">4.8/5</span>
          <span>•</span>
          <span>Based on 150+ reviews</span>
        </div>
      </div>
    </section>
  );
};
