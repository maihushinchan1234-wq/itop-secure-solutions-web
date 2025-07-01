
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BlogsSection = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: '1',
      title: 'The Future of Home Security with Smart Door Locks',
      excerpt: 'Discover how smart door locks work, their key benefits like remote access and activity logs, and the best brands available in India including Qubo, Yale, and Godrej.',
      author: 'Alice Johnson',
      date: '2024-01-20',
      category: 'Door Locks'
    },
    {
      id: '2',
      title: 'Top 5 CCTV Cameras for Business Surveillance',
      excerpt: 'A comprehensive guide to choosing the right CCTV system for your business, featuring top brands like CP Plus, Hikvision, and Dahua with placement tips.',
      author: 'Bob Williams',
      date: '2024-02-15',
      category: 'CCTV'
    },
    {
      id: '3',
      title: 'Ensuring Fire Safety: A Guide to Modern Fire Alarms',
      excerpt: 'Learn about different types of fire alarm systems, recommended brands like Honeywell and Ceasefire, and the best locations for installation.',
      author: 'Charlie Brown',
      date: '2024-03-10',
      category: 'Fire Alarms'
    },
    {
      id: '4',
      title: 'Laser vs Inkjet Printers: Which One Suits Your Needs?',
      excerpt: 'Compare inkjet and laser printers to make the right choice based on your usage, budget, and printing needs for home or business use.',
      author: 'Tech Expert',
      date: '2024-03-15',
      category: 'Printers'
    },
  ];

  const handleBlogClick = (blogId: string) => {
    navigate(`/blog/${blogId}`);
  };

  const handleViewAllClick = () => {
    navigate('/feedback');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Latest Blogs & FAQs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends and insights in technology and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
              onClick={() => handleBlogClick(blog.id)}
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                    {blog.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors leading-tight">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium mr-1">Read More</span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={handleViewAllClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center gap-2"
          >
            View Testimonials & Feedback
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
