
import React, { useState } from 'react';
import { HamburgerSidebar } from "@/components/layout/HamburgerSidebar";
import { Header } from "@/components/layout/Header";
import { PrinterHero } from "@/components/printers/PrinterHero";
import { PrinterServices } from "@/components/printers/PrinterServices";
import { PrinterTypes } from "@/components/printers/PrinterTypes";
import { PrinterBrands } from "@/components/printers/PrinterBrands";
import { PrinterIndustries } from "@/components/printers/PrinterIndustries";
import { PrinterFAQs } from "@/components/printers/PrinterFAQs";
import { Footer } from "@/components/layout/Footer";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const PrintersPage = () => {
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
        <PrinterHero />
        <PrinterServices />
        <PrinterTypes />
        <PrinterBrands />
        <PrinterIndustries />
        <PrinterFAQs />
      </main>
      <Footer />
    </div>
  );
};

export default PrintersPage;
