
import React, { useState } from 'react';
import { HamburgerSidebar } from "@/components/layout/HamburgerSidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DoorLocksHero } from "@/components/doorlocks/DoorLocksHero";
import { DoorLocksServices } from "@/components/doorlocks/DoorLocksServices";
import { DoorLocksTypes } from "@/components/doorlocks/DoorLocksTypes";
import { DoorLocksBrands } from "@/components/doorlocks/DoorLocksBrands";
import { DoorLocksIndustries } from "@/components/doorlocks/DoorLocksIndustries";
import { DoorLocksFAQs } from "@/components/doorlocks/DoorLocksFAQs";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const DoorLocksPage = () => {
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
        <DoorLocksHero />
        <DoorLocksServices />
        <DoorLocksTypes />
        <DoorLocksBrands />
        <DoorLocksIndustries />
        <DoorLocksFAQs />
      </main>
      <Footer />
    </div>
  );
};

export default DoorLocksPage;
