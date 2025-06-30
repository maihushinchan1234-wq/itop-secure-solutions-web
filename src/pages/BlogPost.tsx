
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogContent = {
    '1': {
      title: 'The Future of Home Security with Smart Door Locks',
      author: 'Alice Johnson',
      date: '2024-01-20',
      category: 'Door Locks',
      readTime: '5 min read',
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>As technology continues to evolve, so do our homes. Traditional lock and key systems are gradually being replaced by smart door locks that offer enhanced convenience, safety, and control. In this article, we explore how smart door locks work, their advantages, popular brands, and tips for choosing the right one.</p>
          
          <h2>What Are Smart Door Locks?</h2>
          <p>Smart door locks are advanced locking systems that operate without traditional keys. Instead, they use technologies such as Bluetooth, Wi-Fi, fingerprint scanning, numeric keypads, or mobile apps to unlock and lock doors. These locks can be operated remotely, allowing users to control access even when they're not at home.</p>
          
          <h2>Key Benefits of Smart Locks:</h2>
          <ul>
            <li><strong>Remote Access:</strong> Lock or unlock your door from anywhere using a mobile app.</li>
            <li><strong>Temporary Access Codes:</strong> Provide guests, cleaners, or repair workers with one-time or time-limited access codes.</li>
            <li><strong>Real-Time Alerts:</strong> Receive notifications if someone tries to tamper with or force the lock.</li>
            <li><strong>Activity Logs:</strong> Track who enters and exits your home.</li>
            <li><strong>Integration:</strong> Easily integrate with other smart home devices like doorbell cameras or alarm systems.</li>
          </ul>
          
          <h2>Best Smart Lock Brands in India:</h2>
          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800">Qubo</h3>
              <p class="text-sm text-gray-700">Affordable and app-connected with reliable performance.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800">Yale</h3>
              <p class="text-sm text-gray-700">Highly secure and stylish with premium features.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800">Godrej</h3>
              <p class="text-sm text-gray-700">Trusted Indian brand with a range of digital locks.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800">August</h3>
              <p class="text-sm text-gray-700">Seamless smartphone control and voice assistant integration.</p>
            </div>
          </div>
          
          <h2>Choosing the Right Lock for Your Door:</h2>
          <div class="bg-gray-50 p-6 rounded-lg my-6">
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <h4 class="font-semibold text-gray-800">Wooden Doors</h4>
                <p class="text-sm text-gray-600">Compatible with most smart locks</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">Metal Doors</h4>
                <p class="text-sm text-gray-600">Ensure the lock supports metal frame installation</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">Glass Doors</h4>
                <p class="text-sm text-gray-600">Require special digital locking solutions</p>
              </div>
            </div>
          </div>
          
          <h2>Conclusion</h2>
          <p>Smart door locks offer a blend of safety, convenience, and modern lifestyle enhancement. Whether it's your home or office, upgrading to a smart lock is a smart move in today's security-conscious world.</p>
        </div>
      `
    },
    '2': {
      title: 'Top 5 CCTV Cameras for Business Surveillance',
      author: 'Bob Williams',
      date: '2024-02-15',
      category: 'CCTV',
      readTime: '7 min read',
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>Business security is a priority for every owner, whether you run a small shop or a large warehouse. Installing CCTV cameras is one of the most effective ways to monitor, deter theft, and ensure employee safety. This blog will guide you through the best CCTV cameras suitable for business use in India.</p>
          
          <h2>Features to Look for in Business CCTV Cameras:</h2>
          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 class="font-semibold text-green-800">High Resolution (HD/4K)</h4>
              <p class="text-sm text-gray-700">Clear footage helps with facial and license plate recognition</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 class="font-semibold text-green-800">Night Vision</h4>
              <p class="text-sm text-gray-700">IR LEDs allow for visibility even in complete darkness</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 class="font-semibold text-green-800">Wide Field of View</h4>
              <p class="text-sm text-gray-700">Covers more area with fewer cameras</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 class="font-semibold text-green-800">Motion Detection</h4>
              <p class="text-sm text-gray-700">Sends alerts when unusual movement is detected</p>
            </div>
          </div>
          
          <h2>Top 5 CCTV Camera Brands for Businesses in India:</h2>
          <div class="space-y-4 my-6">
            <div class="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-blue-600">1. CP Plus</h3>
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Best Value</span>
              </div>
              <p class="text-gray-700">Great value, reliable DVR kits with excellent after-sales support.</p>
            </div>
            
            <div class="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-blue-600">2. Hikvision</h3>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Industry Leader</span>
              </div>
              <p class="text-gray-700">Industry leader in surveillance technology with cutting-edge features.</p>
            </div>
            
            <div class="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-blue-600">3. Dahua</h3>
                <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Smart Features</span>
              </div>
              <p class="text-gray-700">Excellent software features with mobile app support and AI capabilities.</p>
            </div>
            
            <div class="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-blue-600">4. Godrej</h3>
                <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Trusted Brand</span>
              </div>
              <p class="text-gray-700">Strong Indian brand with great service and local support network.</p>
            </div>
            
            <div class="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-blue-600">5. TP-Link Tapo</h3>
                <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Easy Setup</span>
              </div>
              <p class="text-gray-700">Best for small offices with plug-and-play setup and affordable pricing.</p>
            </div>
          </div>
          
          <h2>Placement Tips for CCTV Installation:</h2>
          <div class="bg-yellow-50 p-6 rounded-lg my-6 border border-yellow-200">
            <ul class="space-y-2">
              <li class="flex items-start"><span class="text-yellow-600 mr-2">•</span> Mount cameras at entrances and exits</li>
              <li class="flex items-start"><span class="text-yellow-600 mr-2">•</span> Cover blind spots and low-visibility areas</li>
              <li class="flex items-start"><span class="text-yellow-600 mr-2">•</span> Point cameras at cash counters, storerooms, and gates</li>
              <li class="flex items-start"><span class="text-yellow-600 mr-2">•</span> Ensure clear line of sight and proper lighting</li>
            </ul>
          </div>
          
          <h2>Conclusion</h2>
          <p>Choosing the right CCTV system ensures peace of mind, operational control, and better protection of your assets. Always consider your space and surveillance needs before making a purchase.</p>
        </div>
      `
    },
    '3': {
      title: 'Ensuring Fire Safety: A Guide to Modern Fire Alarms',
      author: 'Charlie Brown',
      date: '2024-03-10',
      category: 'Fire Alarms',
      readTime: '6 min read',
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>Fire emergencies can cause irreversible damage and even loss of life. The best way to protect your family, employees, and property is by installing modern fire alarm systems. This blog explains everything you need to know about fire alarms, their types, installation, and trusted brands.</p>
          
          <h2>What Are Fire Alarms?</h2>
          <p>Fire alarms are devices that detect smoke, heat, or flames and issue warnings to alert people to evacuate or take preventive action. They can be standalone units or part of a central fire safety system.</p>
          
          <h2>Types of Fire Alarm Systems:</h2>
          <div class="grid md:grid-cols-3 gap-6 my-8">
            <div class="bg-red-50 p-6 rounded-lg border-2 border-red-200 text-center">
              <div class="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-white font-bold text-xl">S</span>
              </div>
              <h3 class="font-bold text-red-800 mb-2">Smoke Detectors</h3>
              <p class="text-sm text-gray-700">Detect airborne smoke particles for early warning</p>
            </div>
            
            <div class="bg-orange-50 p-6 rounded-lg border-2 border-orange-200 text-center">
              <div class="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-white font-bold text-xl">H</span>
              </div>
              <h3 class="font-bold text-orange-800 mb-2">Heat Detectors</h3>
              <p class="text-sm text-gray-700">React to a rapid rise in temperature</p>
            </div>
            
            <div class="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200 text-center">
              <div class="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-white font-bold text-xl">F</span>
              </div>
              <h3 class="font-bold text-yellow-800 mb-2">Flame Sensors</h3>
              <p class="text-sm text-gray-700">Detect visible flames using infrared sensors</p>
            </div>
          </div>
          
          <h2>Recommended Brands in India:</h2>
          <div class="space-y-3 my-6">
            <div class="flex items-center p-4 bg-gray-50 rounded-lg">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">H</span>
              </div>
              <div>
                <h4 class="font-semibold">Honeywell</h4>
                <p class="text-sm text-gray-600">Global leader in fire detection technology</p>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-gray-50 rounded-lg">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">R</span>
              </div>
              <div>
                <h4 class="font-semibold">Ravel</h4>
                <p class="text-sm text-gray-600">Indian brand offering quality control panels and sensors</p>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-gray-50 rounded-lg">
              <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">C</span>
              </div>
              <div>
                <h4 class="font-semibold">Ceasefire</h4>
                <p class="text-sm text-gray-600">Trusted for both fire detection and suppression systems</p>
              </div>
            </div>
          </div>
          
          <h2>Best Locations to Install Fire Alarms:</h2>
          <div class="bg-blue-50 p-6 rounded-lg my-6">
            <div class="grid md:grid-cols-2 gap-4">
              <ul class="space-y-2">
                <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Kitchens</li>
                <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Living rooms</li>
                <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Hallways</li>
              </ul>
              <ul class="space-y-2">
                <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Near electrical control panels</li>
                <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Above ceilings in offices</li>
                <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Warehouses and storage areas</li>
              </ul>
            </div>
          </div>
          
          <h2>Conclusion</h2>
          <p>Installing a modern fire alarm is not a luxury but a necessity. It ensures early detection, faster response, and reduced damage. Always use certified brands and schedule periodic maintenance.</p>
        </div>
      `
    },
    '4': {
      title: 'Laser vs Inkjet Printers: Which One Suits Your Needs?',
      author: 'Tech Expert',
      date: '2024-03-15',
      category: 'Printers',
      readTime: '4 min read',
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>Buying a printer can be overwhelming with so many options available. Should you get a laser or an inkjet printer? This guide helps you make the right choice based on your usage, budget, and printing needs.</p>
          
          <div class="grid md:grid-cols-2 gap-8 my-8">
            <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 class="text-2xl font-bold text-blue-800 mb-4">Inkjet Printers</h2>
              <p class="mb-4">Use liquid ink sprayed through nozzles.</p>
              
              <div class="mb-4">
                <h4 class="font-semibold text-green-700 mb-2">✓ Pros:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• Lower upfront cost</li>
                  <li>• Compact size</li>
                  <li>• Excellent color quality</li>
                  <li>• Great for photos</li>
                </ul>
              </div>
              
              <div class="mb-4">
                <h4 class="font-semibold text-red-700 mb-2">✗ Cons:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• Slower printing speed</li>
                  <li>• Ink may dry out</li>
                  <li>• Higher cost per page</li>
                </ul>
              </div>
              
              <div class="bg-blue-100 p-3 rounded">
                <p class="text-sm font-medium text-blue-800">Best for: Color prints, photos, occasional home use</p>
              </div>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">Laser Printers</h2>
              <p class="mb-4">Use powdered toner and heat to fuse text/images.</p>
              
              <div class="mb-4">
                <h4 class="font-semibold text-green-700 mb-2">✓ Pros:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• Fast printing speed</li>
                  <li>• Sharp black text</li>
                  <li>• Lower cost per page</li>
                  <li>• Toner doesn't dry out</li>
                </ul>
              </div>
              
              <div class="mb-4">
                <h4 class="font-semibold text-red-700 mb-2">✗ Cons:</h4>
                <ul class="text-sm space-y-1 text-gray-700">
                  <li>• Higher upfront cost</li>
                  <li>• Bulky size</li>
                  <li>• Limited color quality</li>
                </ul>
              </div>
              
              <div class="bg-gray-200 p-3 rounded">
                <p class="text-sm font-medium text-gray-800">Best for: Offices, bulk document printing</p>
              </div>
            </div>
          </div>
          
          <h2>Choosing Based on Use:</h2>
          <div class="grid md:grid-cols-3 gap-6 my-6">
            <div class="text-center p-6 bg-green-50 rounded-lg">
              <h3 class="font-bold text-green-800 mb-2">Home Users</h3>
              <p class="text-sm text-gray-700">Inkjet for school projects and photos</p>
            </div>
            
            <div class="text-center p-6 bg-blue-50 rounded-lg">
              <h3 class="font-bold text-blue-800 mb-2">Students</h3>
              <p class="text-sm text-gray-700">Ink tank printers for low-cost color printing</p>
            </div>
            
            <div class="text-center p-6 bg-purple-50 rounded-lg">
              <h3 class="font-bold text-purple-800 mb-2">Businesses</h3>
              <p class="text-sm text-gray-700">Laser for speed & efficiency</p>
            </div>
          </div>
          
          <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
            <h3 class="font-bold text-yellow-800 mb-2">💡 Quick Decision Guide:</h3>
            <p class="text-gray-700">Choose <strong>Inkjet</strong> if you need color and print occasionally. Choose <strong>Laser</strong> if you need speed and print documents frequently.</p>
          </div>
          
          <h2>Conclusion</h2>
          <p>Your printing needs determine the right printer. Inkjet = Color & occasional use. Laser = Speed & documents. Choose wisely to save money and hassle in the long run.</p>
        </div>
      `
    }
  };

  const blog = blogContent[id as keyof typeof blogContent];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog post not found</h1>
          <button 
            onClick={() => navigate('/#blogs')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog Section
          </button>
        </div>
      </div>
    );
  }

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
              <div className="container mx-auto px-4">
                <button 
                  onClick={() => navigate('/#blogs')}
                  className="flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog Section
                </button>
                
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-4 text-blue-200">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{new Date(blog.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span className="text-sm">{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {blog.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                
                {/* Call to Action */}
                <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Need Professional Help?</h3>
                  <p className="text-gray-700 mb-6">
                    Our expert technicians are ready to help you with installation, maintenance, and repairs. 
                    Contact us today for a free consultation.
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => navigate('/#contact')}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Contact Us
                    </button>
                    <button 
                      onClick={() => navigate('/#blogs')}
                      className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Read More Articles
                    </button>
                  </div>
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
