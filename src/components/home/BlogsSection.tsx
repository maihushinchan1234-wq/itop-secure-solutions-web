
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export const BlogsSection = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      title: "How to Choose a Printer for Your Office",
      excerpt: "A comprehensive guide to selecting the right printer based on your business needs, volume, and budget.",
      date: "December 15, 2024",
      slug: "choose-office-printer"
    },
    {
      title: "Smart Locks vs Traditional Locks",
      excerpt: "Compare the benefits, security features, and costs of smart locks versus traditional lock systems.",
      date: "December 10, 2024",
      slug: "smart-vs-traditional-locks"
    },
    {
      title: "Top 5 Fire Alarm Systems for Small Businesses",
      excerpt: "Essential fire safety systems every small business should consider for compliance and protection.",
      date: "December 5, 2024",
      slug: "fire-alarm-systems-business"
    },
    {
      title: "CCTV Placement Tips for Home Security",
      excerpt: "Strategic placement of cameras to maximize coverage and deterrent effect for residential properties.",
      date: "November 30, 2024",
      slug: "cctv-placement-home"
    },
    {
      title: "Choosing the Right CCTV for Offices",
      excerpt: "Office-specific security considerations and recommended camera types for business environments.",
      date: "November 25, 2024",
      slug: "cctv-office-guide"
    },
    {
      title: "5 Signs Your Printer Needs Repair",
      excerpt: "Common warning signs that indicate your printer requires professional maintenance or repair.",
      date: "November 20, 2024",
      slug: "printer-repair-signs"
    }
  ];

  return (
    <section id="blogs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Blogs & FAQs
          </h2>
          <p className="text-lg text-gray-600">
            Expert insights and answers to your technology questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/blog/${blog.slug}`)}
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {blog.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span className="text-sm">Read More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
