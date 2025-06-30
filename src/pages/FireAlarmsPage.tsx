
import React, { useState } from 'react';
import { HamburgerSidebar } from "@/components/layout/HamburgerSidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FireAlarmsHero } from "@/components/firealarms/FireAlarmsHero";
import { FireAlarmsServices } from "@/components/firealarms/FireAlarmsServices";
import { FireAlarmsTypes } from "@/components/firealarms/FireAlarmsTypes";
import { FireAlarmsBrands } from "@/components/firealarms/FireAlarmsBrands";
import { FireAlarmsIndustries } from "@/components/firealarms/FireAlarmsIndustries";
import { FireAlarmsFAQs } from "@/components/firealarms/FireAlarmsFAQs";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const FireAlarmsPage = () => {
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
        <FireAlarmsHero />
        <FireAlarmsServices />
        <FireAlarmsTypes />
        <FireAlarmsBrands />
        <FireAlarmsIndustries />
        <FireAlarmsFAQs />
      </main>
      <Footer />
    </div>
  );
};

export default FireAlarmsPage;
