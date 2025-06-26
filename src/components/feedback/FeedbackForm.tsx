
import React, { useState } from 'react';
import { Star, Upload } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export const FeedbackForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    rating: 0,
    feedback: '',
    photo: null as File | null
  });

  const services = [
    'Printer Repair',
    'Printer Installation',
    'Door Lock Installation',
    'Smart Lock Setup',
    'CCTV Installation',
    'Fire Alarm Installation',
    'AMC Service',
    'Emergency Repair',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      toast({
        title: "Please select a rating",
        description: "Rating is required to submit your feedback.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thank you for your feedback!",
      description: "Your review will appear shortly after verification.",
    });
    
    setFormData({
      name: '',
      service: '',
      rating: 0,
      feedback: '',
      photo: null
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600">
              Help us improve our services by sharing your feedback
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Used *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Rating *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className="p-1"
                    >
                      <Star 
                        className={`h-8 w-8 ${star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Feedback *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.feedback}
                  onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your experience with our service..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Photo (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm">
                    Upload a photo of our work or your experience
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({...formData, photo: e.target.files?.[0] || null})}
                    className="mt-2"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Write a Google Review
              </h3>
              <p className="text-gray-600 mb-4">
                Help others find us by leaving a review on Google
              </p>
              <button 
                onClick={() => window.open('#', '_blank')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Write Google Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
