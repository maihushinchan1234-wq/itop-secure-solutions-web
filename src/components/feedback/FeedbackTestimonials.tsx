
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const FeedbackTestimonials = () => {
  const testimonials = [
    {
      name: "Ravi Sharma",
      location: "New Delhi",
      service: "Printer Repair",
      rating: 5,
      comment: "Had an issue with my Canon printer — they fixed it the same day! Courteous staff and reasonable prices. The technician was very professional and explained everything clearly.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sonal Verma",
      location: "Gurgaon",
      service: "Smart Lock Installation",
      rating: 5,
      comment: "Replaced my old lock with a smart one from Yale. The technician helped me set it up on my phone too! Great service and very patient with all my questions.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Amit Patel",
      location: "Noida",
      service: "CCTV Installation",
      rating: 5,
      comment: "Excellent CCTV installation service. They installed 6 cameras in our office and the quality is amazing. Mobile app works perfectly and the team was very professional.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Singh",
      location: "Faridabad",
      service: "Fire Alarm System",
      rating: 5,
      comment: "iTOP Services installed our complete fire alarm system. Very thorough work and they explained all the safety features. Feel much safer now in our office building.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      service: "Printer AMC",
      rating: 4,
      comment: "Great AMC service for our office printers. Regular maintenance keeps everything running smoothly. Quick response whenever we have any issues.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Neha Gupta",
      location: "Ghaziabad",
      service: "Door Lock Repair",
      rating: 5,
      comment: "Emergency lock repair service was fantastic. They came within 2 hours and fixed our smart lock issue. Very reliable and trustworthy service.",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Customer Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Hear what our satisfied customers have to say about our services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 relative hover:shadow-lg transition-shadow">
              <Quote className="h-8 w-8 text-blue-600 opacity-20 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
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

              <p className="text-gray-700 text-sm">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
