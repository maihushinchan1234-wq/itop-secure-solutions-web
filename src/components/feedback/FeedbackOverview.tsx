
import React from 'react';
import { Star, CheckCircle, Users, Clock, Award, Shield, Heart } from 'lucide-react';
import { useFeedbackOverview } from '@/hooks/useCMSContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  Users,
  Award,
  CheckCircle,
  Shield,
  Heart,
};

export const FeedbackOverview = () => {
  const { content } = useFeedbackOverview();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{content.ratingTitle}</h2>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-800 mb-2">{content.overallRating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-6 w-6 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <div className="text-gray-600">{content.reviewCount}</div>
              </div>
              
              <div className="space-y-3">
                {content.ratingDistribution.map((rating) => (
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8">{content.whyLoveUsTitle}</h2>
            <div className="grid gap-6">
              {content.stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon] || CheckCircle;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{stat.title}</h3>
                        <p className="text-gray-600 text-sm">{stat.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
