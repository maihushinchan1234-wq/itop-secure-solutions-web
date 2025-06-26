
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    'choose-printer-office': {
      title: 'How to Choose a Printer for Your Office',
      date: 'December 15, 2024',
      author: 'iTOP Services Team',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
      content: `
        <p class="mb-6 text-gray-700 leading-relaxed">Choosing the right printer for your office is crucial for productivity and cost-effectiveness. With so many options available in the market, it can be overwhelming to make the right choice. This comprehensive guide will help you understand the key factors to consider when selecting a printer for your business needs.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Consider Your Printing Volume</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">The first and most important factor to consider is how much you print on a daily, weekly, and monthly basis. Small offices with light printing needs (under 500 pages per month) can opt for inkjet printers, which have lower upfront costs but higher per-page costs. For high-volume offices printing over 1,000 pages monthly, laser printers offer better cost per page and faster printing speeds.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Types of Printing</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">If you primarily print text documents, reports, and black-and-white materials, a monochrome laser printer is your best bet. These printers are fast, efficient, and have low running costs. For businesses that need to print marketing materials, presentations, and color documents, consider a color laser printer or high-quality inkjet printer. Photo printing requires specialized photo printers with multiple ink cartridges.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Connectivity and Features</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Modern offices need printers with Wi-Fi, Ethernet, and mobile printing capabilities. Look for printers that support cloud printing services like Google Cloud Print, Apple AirPrint, and have dedicated mobile apps. Multi-function printers (MFPs) that can print, scan, copy, and fax are ideal for space-constrained offices. Consider features like automatic duplex printing, large paper trays, and touchscreen controls for enhanced productivity.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Maintenance and Support</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Consider the availability of service support and genuine consumables in your area. At iTOP Services, we provide comprehensive support for all major printer brands including HP, Canon, Epson, and Brother. Regular maintenance is crucial for optimal performance - we offer AMC plans that include cleaning, consumable replacement, and priority support. Always factor in the cost of toner or ink cartridges, as this can significantly impact your total cost of ownership.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Budget Considerations</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">While the initial purchase price is important, consider the total cost of ownership including consumables, maintenance, and energy consumption. Sometimes a slightly more expensive printer with lower running costs can save money in the long run. We also offer printer leasing options for businesses that prefer predictable monthly expenses instead of large upfront investments.</p>
      `
    },
    'smart-vs-traditional-locks': {
      title: 'Smart Locks vs Traditional Locks',
      date: 'December 10, 2024',
      author: 'iTOP Services Team',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop',
      content: `
        <p class="mb-6 text-gray-700 leading-relaxed">The security landscape is evolving rapidly, and door locks are no exception. Smart locks are becoming increasingly popular, but are they right for everyone? This comprehensive comparison will help you understand the pros and cons of both traditional and smart locks to make an informed decision for your property.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Traditional Locks: Tried and True</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Traditional mechanical locks have been securing homes and businesses for decades. They're reliable, don't require power, and are generally more affordable upfront. Deadbolts, mortise locks, and lever handles are time-tested solutions that provide excellent security when properly installed. They're also easier to repair and maintain, with replacement parts readily available.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Smart Locks: The Future is Here</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Smart locks offer convenience and advanced features that traditional locks simply can't match. You can lock or unlock your door from anywhere in the world using your smartphone. Features like temporary access codes for guests, delivery personnel, or service providers eliminate the need for physical key exchanges. Many smart locks also maintain detailed access logs, showing who entered and when.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Security Considerations</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Both types can be highly secure when properly installed and maintained. Smart locks offer additional security features like automatic locking after a set time, tamper alerts, and the ability to immediately disable access codes if needed. However, traditional locks are immune to cyber attacks and don't rely on batteries or internet connectivity. The key is choosing quality products from reputable brands and ensuring professional installation.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Cost Analysis</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">Traditional locks have lower upfront costs but may require more frequent key duplication and lock changes for security. Smart locks have higher initial costs but can save money on locksmith services and key management. Consider the long-term value of features like remote access, guest management, and integration with security systems.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Making the Right Choice</h2>
        <p class="mb-6 text-gray-700 leading-relaxed">The choice depends on your specific needs, budget, and comfort with technology. For rental properties, offices with multiple users, or tech-savvy homeowners, smart locks offer significant advantages. For those prioritizing simplicity and reliability, traditional locks remain an excellent choice. Our experts at iTOP Services can help you evaluate your requirements and recommend the best solution for your property.</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  const handleBackToBlog = () => {
    window.location.href = '/#blogs';
  };

  if (!post) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto">
              <div className="container mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
                <Link to="/" className="text-blue-600 hover:underline">
                  Return to Homepage
                </Link>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
              <div className="container mx-auto px-4">
                <button 
                  onClick={handleBackToBlog}
                  className="inline-flex items-center text-white hover:text-blue-200 mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </button>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center text-blue-100 space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <article className="container mx-auto px-4 py-16 max-w-4xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-lg"
              />
              
              <div 
                className="prose max-w-none text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Need Expert Advice?
                </h3>
                <p className="text-gray-700 mb-4">
                  Our team at iTOP Services is here to help with all your technology and security needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:9990820830" 
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Call Us: 9990820830
                  </a>
                  <a 
                    href="mailto:sachidanand@live.in" 
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </article>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BlogPost;
