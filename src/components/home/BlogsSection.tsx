
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBlogs, useBlogsSection } from '@/hooks/useCMSContent';

export const BlogsSection = () => {
  const navigate = useNavigate();
  const { content: sectionContent } = useBlogsSection();
  const { content: blogs } = useBlogs();

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
            {sectionContent.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {sectionContent.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {blogs.map((blog) => (
            <article 
              key={blog._id || blog.id} 
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
            {sectionContent.viewAllButtonText}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
