
import React, { useState } from 'react';
import { Star, Upload } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useFeedbackForm } from '@/hooks/useCMSContent';

export const FeedbackForm = () => {
  const { toast } = useToast();
  const { content } = useFeedbackForm();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    service: '',
    rating: 0,
    feedback: '',
    photo: null as File | null
  });

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

    if (!formData.name || !formData.service || !formData.feedback || !formData.location) {
      toast({
        title: "Please fill all required fields",
        description: "Name, location, service, and feedback are required.",
        variant: "destructive"
      });
      return;
    }

    // Create testimonial object
    const testimonial = {
      id: Date.now().toString(),
      name: formData.name,
      location: formData.location,
      service: formData.service,
      rating: formData.rating,
      comment: formData.feedback,
      avatar: '',
      date: new Date().toISOString(),
      verified: true
    };

    // Save to localStorage (in a real app, this would be sent to a backend)
    const existingTestimonials = JSON.parse(localStorage.getItem('itop-testimonials') || '[]');
    existingTestimonials.push(testimonial);
    localStorage.setItem('itop-testimonials', JSON.stringify(existingTestimonials));
    
    toast({
      title: "Thank you for your feedback!",
      description: "Your review has been submitted and will appear on the website shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      location: '',
      service: '',
      rating: 0,
      feedback: '',
      photo: null
    });

    // Reload testimonials section
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <section id="submit" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {content.sectionTitle}
            </h2>
            <p className="text-lg text-gray-600">
              {content.sectionDescription}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {content.formLabels.name}
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
                    {content.formLabels.location}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., New Delhi, Gurgaon"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content.formLabels.service}
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {content.services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content.formLabels.rating}
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className="p-1 transition-colors"
                    >
                      <Star 
                        className={`h-8 w-8 ${star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`} 
                      />
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">Click to rate your experience</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content.formLabels.feedback}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.feedback}
                  onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please share your detailed experience with our service. What did you like? How can we improve? Your honest feedback helps us serve you better."
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">Minimum 50 characters recommended</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content.formLabels.photo}
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm mb-2">
                    Upload a photo of our work or your experience
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    Supported formats: JPG, PNG, GIF (max 5MB)
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({...formData, photo: e.target.files?.[0] || null})}
                    className="block mx-auto"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Note:</strong> {content.noteText}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {content.submitButtonText}
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {content.googleReviewSection.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {content.googleReviewSection.description}
              </p>
              <button 
                onClick={() => window.open(content.googleReviewSection.link, '_blank')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {content.googleReviewSection.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
