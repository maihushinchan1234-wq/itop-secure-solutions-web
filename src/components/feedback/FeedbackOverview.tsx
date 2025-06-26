
import React from 'react';
import { Star, CheckCircle, Users, Clock, Award } from 'lucide-react';

export const FeedbackOverview = () => {
  const stats = [
    {
      icon: Clock,
      title: "24-Hour Service Response",
      description: "Quick response to all service requests"
    },
    {
      icon: Users,
      title: "97% Customers Recommend Us",
      description: "High satisfaction rate from our clients"
    },
    {
      icon: Award,
      title: "1000+ Devices Serviced",
      description: "Extensive experience across all services"
    },
    {
      icon: CheckCircle,
      title: "100% Issue Resolution",
      description: "We don't stop until it's fixed"
    }
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 78, count: 117 },
    { stars: 4, percentage: 15, count: 23 },
    { stars: 3, percentage: 5, count: 8 },
    { stars: 2, percentage: 1, count: 2 },
    { stars: 1, percentage: 1, count: 0 }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Rating Overview</h2>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-800 mb-2">4.8</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-6 w-6 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <div className="text-gray-600">Based on 150+ reviews</div>
              </div>
              
              <div className="space-y-3">
                {ratingDistribution.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-16">
                      <span className="text-sm">{rating.stars}</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: `${rating.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12">{rating.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Customers Love Us</h2>
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{stat.title}</h3>
                      <p className="text-gray-600 text-sm">{stat.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
