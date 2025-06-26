
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sidebar as SidebarPrimitive, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar 
} from "@/components/ui/sidebar";
import { 
  ChevronRight, 
  Printer, 
  Shield, 
  Eye, 
  Flame, 
  MapPin, 
  Star,
  Settings,
  Wrench,
  RefreshCw,
  Headphones
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { isMobile } = useSidebar();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const openMap = () => {
    window.open('https://maps.google.com/?q=224, B1, DDA Flats, Loknayak Puram, New Delhi 110041', '_blank');
  };

  return (
    <SidebarPrimitive className="border-r bg-gray-50">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Services</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible open={openSections.includes('installation')} onOpenChange={() => toggleSection('installation')}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" />
                      <span>Installation</span>
                      <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${openSections.includes('installation') ? 'rotate-90' : ''}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton onClick={() => handleNavigation('/printers')}>
                          <Printer className="h-4 w-4" />
                          Printers
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton onClick={() => handleNavigation('/door-locks')}>
                          <Shield className="h-4 w-4" />
                          Door Locks
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton onClick={() => handleNavigation('/cctv')}>
                          <Eye className="h-4 w-4" />
                          CCTV
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton onClick={() => handleNavigation('/fire-alarms')}>
                          <Flame className="h-4 w-4" />
                          Fire Alarms
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <Collapsible open={openSections.includes('refilling')} onOpenChange={() => toggleSection('refilling')}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <RefreshCw className="h-4 w-4" />
                      <span>Refilling</span>
                      <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${openSections.includes('refilling') ? 'rotate-90' : ''}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <Collapsible open={openSections.includes('toner')} onOpenChange={() => toggleSection('toner')}>
                        <SidebarMenuSubItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton>
                              <span>Toner Refills</span>
                              <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${openSections.includes('toner') ? 'rotate-90' : ''}`} />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="ml-4 space-y-1">
                              <div className="text-xs text-gray-600 px-2 py-1">HP</div>
                              <div className="text-xs text-gray-600 px-2 py-1">Canon</div>
                              <div className="text-xs text-gray-600 px-2 py-1">Brother</div>
                              <div className="text-xs text-gray-600 px-2 py-1">Samsung</div>
                              <div className="text-xs text-gray-600 px-2 py-1">Others</div>
                            </div>
                          </CollapsibleContent>
                        </SidebarMenuSubItem>
                      </Collapsible>
                      <Collapsible open={openSections.includes('ink')} onOpenChange={() => toggleSection('ink')}>
                        <SidebarMenuSubItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton>
                              <span>Ink Refills</span>
                              <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${openSections.includes('ink') ? 'rotate-90' : ''}`} />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="ml-4 space-y-1">
                              <div className="text-xs text-gray-600 px-2 py-1">HP</div>
                              <div className="text-xs text-gray-600 px-2 py-1">Canon</div>
                              <div className="text-xs text-gray-600 px-2 py-1">Epson</div>
                              <div className="text-xs text-gray-600 px-2 py-1">Others</div>
                            </div>
                          </CollapsibleContent>
                        </SidebarMenuSubItem>
                      </Collapsible>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <Collapsible open={openSections.includes('repair')} onOpenChange={() => toggleSection('repair')}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Wrench className="h-4 w-4" />
                      <span>Repair</span>
                      <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${openSections.includes('repair') ? 'rotate-90' : ''}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton onClick={() => handleNavigation('/printers')}>
                          <Printer className="h-4 w-4" />
                          Printers
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton onClick={() => handleNavigation('/cctv')}>
                          <Eye className="h-4 w-4" />
                          CCTV
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton onClick={() => handleNavigation('/door-locks')}>
                          <Shield className="h-4 w-4" />
                          Door Locks
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton onClick={() => handleNavigation('/fire-alarms')}>
                          <Flame className="h-4 w-4" />
                          Fire Alarms
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <Collapsible open={openSections.includes('amc')} onOpenChange={() => toggleSection('amc')}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Headphones className="h-4 w-4" />
                      <span>AMC</span>
                      <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${openSections.includes('amc') ? 'rotate-90' : ''}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>Preventive Maintenance</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>Firmware Updates</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>On-site Support</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>Priority Service</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => handleNavigation('/feedback')}>
                  <Star className="h-4 w-4" />
                  <span>Feedback & Ratings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton onClick={openMap}>
                  <MapPin className="h-4 w-4" />
                  <span>Location</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarPrimitive>
  );
};
