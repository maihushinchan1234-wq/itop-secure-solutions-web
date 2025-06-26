
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { FeedbackHero } from "@/components/feedback/FeedbackHero";
import { FeedbackOverview } from "@/components/feedback/FeedbackOverview";
import { FeedbackTestimonials } from "@/components/feedback/FeedbackTestimonials";
import { FeedbackForm } from "@/components/feedback/FeedbackForm";
import { Footer } from "@/components/layout/Footer";

const FeedbackPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <FeedbackHero />
            <FeedbackOverview />
            <FeedbackTestimonials />
            <FeedbackForm />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default FeedbackPage;
