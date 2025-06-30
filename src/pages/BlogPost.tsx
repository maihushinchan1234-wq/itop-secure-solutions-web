
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Detailed blog posts data
  const blogPosts = {
    '1': {
      title: 'The Future of Home Security with Smart Door Locks',
      content: `As technology continues to evolve, so do our homes. Traditional lock and key systems are gradually being replaced by smart door locks that offer enhanced convenience, safety, and control. In this article, we explore how smart door locks work, their advantages, popular brands, and tips for choosing the right one.

## What Are Smart Door Locks?

Smart door locks are advanced locking systems that operate without traditional keys. Instead, they use technologies such as Bluetooth, Wi-Fi, fingerprint scanning, numeric keypads, or mobile apps to unlock and lock doors. These locks can be operated remotely, allowing users to control access even when they're not at home.

## Key Benefits of Smart Locks:

• **Remote Access**: Lock or unlock your door from anywhere using a mobile app.
• **Temporary Access Codes**: Provide guests, cleaners, or repair workers with one-time or time-limited access codes.
• **Real-Time Alerts**: Receive notifications if someone tries to tamper with or force the lock.
• **Activity Logs**: Track who enters and exits your home.
• **Integration**: Easily integrate with other smart home devices like doorbell cameras or alarm systems.

## Best Smart Lock Brands in India:

• **Qubo** – Affordable and app-connected.
• **Yale** – Highly secure and stylish.
• **Godrej** – Trusted Indian brand with a range of digital locks.
• **August** – Seamless smartphone control and voice assistant integration.
• **Hafele** – Sleek European designs with high security.

## Choosing the Right Lock for Your Door:

• **Wooden Doors**: Compatible with most smart locks.
• **Metal Doors**: Ensure the lock supports metal frame installation.
• **Glass Doors**: Require special digital locking solutions.

Smart door locks offer a blend of safety, convenience, and modern lifestyle enhancement. Whether it's your home or office, upgrading to a smart lock is a smart move in today's security-conscious world.`,
      author: 'Alice Johnson',
      date: '2024-01-20',
      readTime: '5 min read',
      category: 'Door Locks',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop'
    },
    '2': {
      title: 'Top 5 CCTV Cameras for Business Surveillance',
      content: `Business security is a priority for every owner, whether you run a small shop or a large warehouse. Installing CCTV cameras is one of the most effective ways to monitor, deter theft, and ensure employee safety. This blog will guide you through the best CCTV cameras suitable for business use in India.

## Features to Look for in Business CCTV Cameras:

• **High Resolution (HD/4K)**: Clear footage helps with facial and license plate recognition.
• **Night Vision**: IR LEDs allow for visibility even in complete darkness.
• **Wide Field of View**: Covers more area with fewer cameras.
• **Motion Detection**: Sends alerts when unusual movement is detected.
• **Cloud or DVR Storage**: Choose based on how long you want to retain footage.
• **Mobile Access**: Monitor live feeds on your smartphone.

## Top 5 CCTV Camera Brands for Businesses in India:

1. **CP Plus**: Great value, reliable DVR kits.
2. **Hikvision**: Industry leader in surveillance technology.
3. **Dahua**: Excellent software features with mobile app support.
4. **Godrej**: Strong Indian brand with great service.
5. **TP-Link Tapo**: Best for small offices with plug-and-play setup.

## Placement Tips for CCTV Installation:

• Mount cameras at entrances and exits.
• Cover blind spots and low-visibility areas.
• Point cameras at cash counters, storerooms, and gates.
• Ensure clear line of sight and proper lighting.

Choosing the right CCTV system ensures peace of mind, operational control, and better protection of your assets. Always consider your space and surveillance needs before making a purchase.`,
      author: 'Bob Williams',
      date: '2024-02-15',
      readTime: '7 min read',
      category: 'CCTV',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
    },
    '3': {
      title: 'Ensuring Fire Safety: A Guide to Modern Fire Alarms',
      content: `Fire emergencies can cause irreversible damage and even loss of life. The best way to protect your family, employees, and property is by installing modern fire alarm systems. This blog explains everything you need to know about fire alarms, their types, installation, and trusted brands.

## What Are Fire Alarms?

Fire alarms are devices that detect smoke, heat, or flames and issue warnings to alert people to evacuate or take preventive action. They can be standalone units or part of a central fire safety system.

## Types of Fire Alarm Systems:

• **Smoke Detectors**: Detect airborne smoke particles.
• **Heat Detectors**: React to a rapid rise in temperature.
• **Flame Sensors**: Detect visible flames using infrared sensors.

## Recommended Brands in India:

• **Honeywell** – Global leader in fire detection technology.
• **Ravel** – Indian brand offering quality control panels and sensors.
• **Ceasefire** – Trusted for both fire detection and suppression systems.
• **Bosch** – Advanced fire safety systems for large premises.
• **Siemens** – Best for high-end automation and integration.

## Best Locations to Install Fire Alarms:

• Kitchens
• Living rooms
• Hallways
• Near electrical control panels
• Above ceilings in offices or warehouses

Installing a modern fire alarm is not a luxury but a necessity. It ensures early detection, faster response, and reduced damage. Always use certified brands and schedule periodic maintenance.`,
      author: 'Charlie Brown',
      date: '2024-03-10',
      readTime: '6 min read',
      category: 'Fire Alarms',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=400&fit=crop'
    },
    '4': {
      title: 'Laser vs Inkjet Printers: Which One Suits Your Needs?',
      content: `Buying a printer can be overwhelming with so many options available. Should you get a laser or an inkjet printer? This guide helps you make the right choice based on your usage, budget, and printing needs.

## Inkjet Printers:

• Use liquid ink sprayed through nozzles.
• **Best for:** Color prints, photos, occasional home use.
• **Pros:** Lower cost, compact size, high-quality color.
• **Cons:** Slower, ink may dry out with infrequent use.

## Laser Printers:

• Use powdered toner and heat to fuse text/images.
• **Best for:** Offices, bulk document printing.
• **Pros:** Fast, sharp black text, lower cost per page.
• **Cons:** Higher upfront cost, bulky.

## Choosing Based on Use:

• **Home users**: Inkjet for school projects, photos
• **Students**: Ink tank printers for low-cost, color
• **Businesses**: Monochrome or color laser for speed & efficiency

Your printing needs determine the right printer. Inkjet = Color & occasional. Laser = Speed & documents. Choose wisely to save money and hassle.`,
      author: 'Tech Expert',
      date: '2024-03-15',
      readTime: '4 min read',
      category: 'Printers',
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=400&fit=crop'
    },
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <main className="flex-1 overflow-y-auto p-4">
              <div className="container mx-auto max-w-4xl">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <div className="text-red-800">
                    <h2 className="text-xl font-semibold mb-2">Blog post not found</h2>
                    <p>The requested blog post could not be found.</p>
                  </div>
                </div>
                <Link to="/#blogs" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog Section
                </Link>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    );
  }

  const formatContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('• ')) {
        return <li key={index} className="text-gray-700 mb-2 ml-4">{line.replace('• ', '')}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="text-gray-700 leading-relaxed mb-4">{line}</p>;
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          
          <main className="flex-1 overflow-y-auto">
            {/* Hero Section with Featured Image */}
            <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="absolute inset-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="text-white max-w-4xl">
                  <div className="mb-4">
                    <Link to="/#blogs" className="inline-flex items-center text-blue-200 hover:text-white transition-colors">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog Section
                    </Link>
                  </div>
                  <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full mb-4 inline-block">
                    {post.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {post.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {formatContent(post.content)}
                  </div>
                </div>

                {/* Back to Blog Button */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <Link to="/#blogs" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
                  </Link>
                </div>
              </div>
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BlogPost;
