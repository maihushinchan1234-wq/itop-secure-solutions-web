
import React from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Header = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToPageSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getNavigationItems = () => {
    switch (location.pathname) {
      case '/printers':
        return [
          { label: 'Services', action: () => scrollToPageSection('services') },
          { label: 'Types', action: () => scrollToPageSection('printer-types') },
          { label: 'Brands', action: () => scrollToPageSection('brands') },
          { label: 'FAQs', action: () => scrollToPageSection('faqs') }
        ];
      case '/cctv':
        return [
          { label: 'Services', action: () => scrollToPageSection('services') },
          { label: 'Types', action: () => scrollToPageSection('cctv-types') },
          { label: 'FAQs', action: () => scrollToPageSection('faqs') },
          { label: 'Contact', action: () => scrollToSection('contact') }
        ];
      case '/door-locks':
        return [
          { label: 'Services', action: () => scrollToPageSection('services') },
          { label: 'Types', action: () => scrollToPageSection('lock-types') },
          { label: 'Brands', action: () => scrollToPageSection('brands') },
          { label: 'FAQs', action: () => scrollToPageSection('faqs') }
        ];
      case '/fire-alarms':
        return [
          { label: 'Services', action: () => scrollToPageSection('services') },
          { label: 'Types', action: () => scrollToPageSection('alarm-types') },
          { label: 'Brands', action: () => scrollToPageSection('brands') },
          { label: 'FAQs', action: () => scrollToPageSection('faqs') }
        ];
      case '/feedback':
        return [
          { label: 'Overview', action: () => scrollToPageSection('overview') },
          { label: 'Testimonials', action: () => scrollToPageSection('testimonials') },
          { label: 'Submit', action: () => scrollToPageSection('submit') }
        ];
      default:
        return [
          { label: 'About', action: () => scrollToSection('about') },
          { label: 'Services', action: () => scrollToSection('services') },
          { label: 'Contact', action: () => scrollToSection('contact') },
          { label: 'Blogs / FAQs', action: () => scrollToSection('blogs') }
        ];
    }
  };

  const navigationItems = getNavigationItems();

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
          {navigationItems.map((item, index) => (
            <button 
              key={index}
              onClick={item.action}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
