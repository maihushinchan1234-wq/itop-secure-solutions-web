
import React, { useState } from 'react';
import { HamburgerSidebar } from "@/components/layout/HamburgerSidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeedbackHero } from "@/components/feedback/FeedbackHero";
import { FeedbackForm } from "@/components/feedback/FeedbackForm";
import { FeedbackTestimonials } from "@/components/feedback/FeedbackTestimonials";
import { FeedbackOverview } from "@/components/feedback/FeedbackOverview";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const FeedbackPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useScrollPosition();

  return (
    <div className="min-h-screen flex flex-col w-full">
      <HamburgerSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="flex-1">
        <FeedbackHero />
        <FeedbackForm />
        <FeedbackTestimonials />
        <FeedbackOverview />
      </main>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
