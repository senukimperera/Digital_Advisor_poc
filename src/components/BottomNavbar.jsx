import React from 'react';
import { ShieldCheck, FileText, Map, Circle, Barcode, BadgeCheck, CreativeCommons, LucideBarcode, ScanBarcode } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavbar = ({ theme, isDark }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      id: 'verification', 
      label: 'Verification', 
      icon: BadgeCheck, 
      path: '/verification' 
    },
    { 
      id: 'dpp', 
      label: 'DPP', 
      icon: FileText, 
      path: '/dpp' 
    },
    { 
      id: 'map', 
      label: 'Map', 
      icon: Map, 
      path: '/map' 
    },
    { 
      id: 'cc', 
      label: 'CC', 
      icon: CreativeCommons, 
      path: '/ccmap' 
    },
    { 
      id: 'gs1', 
      label: 'GS1 DL', 
      icon: ScanBarcode, 
      path: '/gs1' 
    }
  ];

  const handleNavigation = (path) => {
    navigate(path, { state: { isDark } });
  };

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ backgroundColor: theme.background2 }}
    >
      <div 
        className="flex justify-around items-center px-2 py-3 border-t"
        style={{ borderColor: theme.stroke }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className="flex flex-col items-center justify-center min-w-0 py-1 transition-all relative"
            >
              <Icon 
                size={24} 
                style={{ 
                  color: isActive ? theme.button : theme.subText,
                  strokeWidth: isActive ? 2 : 1.5
                }}
              />
              <span 
                className="text-xs mt-1.5 font-normal"
                style={{ 
                  color: isActive ? theme.button : theme.subText 
                }}
              >
                {item.label}
              </span>
              {isActive && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: theme.button }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;
