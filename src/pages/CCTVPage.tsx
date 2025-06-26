
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { CCTVHero } from "@/components/cctv/CCTVHero";
import { CCTVServices } from "@/components/cctv/CCTVServices";
import { CCTVTypes } from "@/components/cctv/CCTVTypes";
import { CCTVBrands } from "@/components/cctv/CCTVBrands";
import { CCTVIndustries } from "@/components/cctv/CCTVIndustries";
import { CCTVFAQs } from "@/components/cctv/CCTVFAQs";

const CCTVPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <CCTVHero />
            <CCTVServices />
            <CCTVTypes />
            <CCTVBrands />
            <CCTVIndustries />
            <CCTVFAQs />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CCTVPage;
