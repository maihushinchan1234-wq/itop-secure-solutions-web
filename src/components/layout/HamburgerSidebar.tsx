
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Printer, 
  Shield, 
  Eye, 
  Flame, 
  MapPin, 
  Star,
  Settings,
  Wrench,
  RefreshCw,
  Headphones,
  Cog,
  MessageSquare,
  ChevronDown
} from "lucide-react";

interface HamburgerSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const HamburgerSidebar = ({ isOpen, onToggle }: HamburgerSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    navigate(path);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    onToggle(); // Close sidebar after navigation
  };

  const openMap = () => {
    window.open('https://maps.google.com/?q=224, B1, DDA Flats, Loknayak Puram, New Delhi 110041', '_blank');
    onToggle();
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-700" />
        ) : (
          <Menu className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto pt-16 pb-4">
          <div className="px-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800">Services Menu</h2>
            <p className="text-sm text-gray-600">Navigate to our services</p>
          </div>

          <nav className="space-y-2 px-4">
            {/* Installation Section */}
            <div>
              <button
                onClick={() => toggleSection('installation')}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-700">Installation</span>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-500 transform transition-transform ${
                  openSections.includes('installation') ? 'rotate-180' : ''
                }`} />
              </button>
              
              {openSections.includes('installation') && (
                <div className="ml-8 space-y-1 mt-2">
                  <button
                    onClick={() => handleNavigation('/printers', 'services')}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    <Printer className="h-4 w-4 text-gray-500" />
                    <span>Printers</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('/door-locks', 'services')}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    <Shield className="h-4 w-4 text-gray-500" />
                    <span>Door Locks</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('/cctv', 'services')}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4 text-gray-500" />
                    <span>CCTV</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('/fire-alarms', 'services')}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    <Flame className="h-4 w-4 text-gray-500" />
                    <span>Fire Alarms</span>
                  </button>
                </div>
              )}
            </div>

            {/* Refilling Section */}
            <div>
              <button
                onClick={() => toggleSection('refilling')}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-700">Refilling</span>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-500 transform transition-transform ${
                  openSections.includes('refilling') ? 'rotate-180' : ''
                }`} />
              </button>
              
              {openSections.includes('refilling') && (
                <div className="ml-8 space-y-1 mt-2">
                  <button
                    onClick={() => handleNavigation('/printers', 'services')}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    <span>Toner Refills (HP, Canon, Brother)</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('/printers', 'services')}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    <span>Ink Refills (HP, Canon, Epson)</span>
                  </button>
                </div>
              )}
            </div>

            {/* Repair Section */}
            <div>
              <button
                onClick={() => toggleSection('repair')}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-orange-600" />
                  <span className="font-medium text-gray-700">Repair</span>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-500 transform transition-transform ${
                  openSections.includes('repair') ? 'rotate-180' : ''
                }`} />
              </button>
              
              {openSections.includes('repair') && (
                <div className="ml-8 space-y-1 mt-2">
                  <button
                    onClick={() => handleNavigation('/printers', 'services')}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    <Printer className="h-4 w-4 text-gray-500" />
                    <span>Printers</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('/cctv', 'services')}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4 text-gray-500" />
                    <span>CCTV</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('/door-locks', 'services')}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    <Shield className="h-4 w-4 text-gray-500" />
                    <span>Door Locks</span>
                  </button>
                  <button
                    onClick={() => handleNavigation('/fire-alarms', 'services')}
                    className="w-full flex items-center gap-3 p-2 text-left hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    <Flame className="h-4 w-4 text-gray-500" />
                    <span>Fire Alarms</span>
                  </button>
                </div>
              )}
            </div>

            {/* AMC Section */}
            <div>
              <button
                onClick={() => toggleSection('amc')}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Headphones className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-gray-700">AMC</span>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-500 transform transition-transform ${
                  openSections.includes('amc') ? 'rotate-180' : ''
                }`} />
              </button>
              
              {openSections.includes('amc') && (
                <div className="ml-8 space-y-1 mt-2">
                  <button
                    onClick={() => handleNavigation('/', 'services')}
                    className="w-full text-left p-2 hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    Preventive Maintenance
                  </button>
                  <button
                    onClick={() => handleNavigation('/', 'services')}
                    className="w-full text-left p-2 hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    Firmware/Software Updates
                  </button>
                  <button
                    onClick={() => handleNavigation('/', 'services')}
                    className="w-full text-left p-2 hover:bg-blue-50 rounded-md transition-colors text-sm"
                  >
                    On-site Support
                  </button>
                </div>
              )}
            </div>

            {/* Feedback Section */}
            <button
              onClick={() => handleNavigation('/feedback')}
              className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Star className="h-5 w-5 text-yellow-600" />
              <span className="font-medium text-gray-700">Feedback & Reviews</span>
            </button>

            {/* Location */}
            <button
              onClick={openMap}
              className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
            >
              <MapPin className="h-5 w-5 text-red-600" />
              <span className="font-medium text-gray-700">Our Location</span>
            </button>
          </nav>

          <div className="mt-8 px-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Need Help?</h3>
              <p className="text-sm text-blue-600 mb-3">Contact us for immediate assistance</p>
              <button
                onClick={() => handleNavigation('/', 'contact')}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
