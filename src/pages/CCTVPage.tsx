
import React, { useState } from 'react';
import { HamburgerSidebar } from "@/components/layout/HamburgerSidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CCTVHero } from "@/components/cctv/CCTVHero";
import { CCTVServices } from "@/components/cctv/CCTVServices";
import { CCTVTypes } from "@/components/cctv/CCTVTypes";
import { CCTVIndustries } from "@/components/cctv/CCTVIndustries";
import { SmartCCTVFeatures } from "@/components/cctv/SmartCCTVFeatures";
import { CCTVBrands } from "@/components/cctv/CCTVBrands";
import { CCTVFAQs } from "@/components/cctv/CCTVFAQs";
import { MonitorProperty } from "@/components/cctv/MonitorProperty";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const CCTVPage = () => {
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
        <CCTVHero />
        <CCTVServices />
        <CCTVTypes />
        <CCTVIndustries />
        <SmartCCTVFeatures />
        <CCTVBrands />
        <CCTVFAQs />
        <MonitorProperty />
      </main>
      <Footer />
    </div>
  );
};

export default CCTVPage;
