
import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useFeedbackTestimonials } from '@/hooks/useCMSContent';

// This would typically come from a database or API
interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
  verified: boolean;
}

export const FeedbackTestimonials = () => {
  const { content } = useFeedbackTestimonials();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Load testimonials from localStorage (simulating a backend)
  useEffect(() => {
    const storedTestimonials = localStorage.getItem('itop-testimonials');
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    }
  }, []);

  if (testimonials.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {content.sectionTitle}
            </h2>
            <p className="text-lg text-gray-600">
              {content.sectionDescription}
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-blue-50 rounded-lg p-12">
              <Quote className="h-16 w-16 text-blue-600 opacity-20 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {content.emptyState.title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {content.emptyState.description}
              </p>
              <p className="text-gray-500">
                {content.emptyState.subDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600">
            {content.sectionDescription}
          </p>
          <div className="mt-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {testimonials.length} Verified Reviews
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 relative hover:shadow-lg transition-shadow">
              <Quote className="h-8 w-8 text-blue-600 opacity-20 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  {testimonial.verified && (
                    <span className="text-xs text-green-600 font-medium">✓ {content.verifiedBadgeText}</span>
                  )}
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
              </div>

              <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full inline-block mb-3">
                {testimonial.service}
              </div>

              <p className="text-gray-700 text-sm mb-3">
                "{testimonial.comment}"
              </p>

              <p className="text-xs text-gray-500">
                {new Date(testimonial.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            {content.bottomText}
          </p>
        </div>
      </div>
    </section>
  );
};
