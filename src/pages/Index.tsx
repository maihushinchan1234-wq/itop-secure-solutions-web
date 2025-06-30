
import React, { useState, useEffect } from 'react';
import { HamburgerSidebar } from "@/components/layout/HamburgerSidebar";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ContactSection } from "@/components/home/ContactSection";
import { BlogsSection } from "@/components/home/BlogsSection";
import { Footer } from "@/components/layout/Footer";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useScrollPosition();

  // Handle hash navigation for when users return from blog posts
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <HamburgerSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <BlogsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
