
import React from 'react';
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="md:hidden" />
          <div>
            <h1 className="text-2xl font-bold text-blue-600">iTOP Services</h1>
            <p className="text-sm text-gray-600">Your One-Stop Tech Security & Print Solution</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={() => scrollToSection('blogs')}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Blogs / FAQs
          </button>
        </nav>
      </div>
    </header>
  );
};
