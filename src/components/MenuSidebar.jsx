import React from 'react';
import { FileText, Map, ScanBarcode, X, BadgeCheck, CreativeCommons } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const MenuSidebar = ({ theme, isDark, isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'verification', label: 'Verification', icon: BadgeCheck, path: '/verification' },
    { id: 'dpp', label: 'DPP', icon: FileText, path: '/dpp' },
    { id: 'map', label: 'Map', icon: Map, path: '/map' },
    { id: 'cc', label: 'CC', icon: CreativeCommons, path: '/ccmap' },
    { id: 'gs1', label: 'GS1 DL', icon: ScanBarcode, path: '/gs1' }
  ];

  const handleNavigation = (path) => {
    onClose();
    navigate(path, { state: { isDark } });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed top-0 right-0 h-full w-80 z-40 shadow-2xl hidden md:block"
      style={{ backgroundColor: theme.background2 }}
    >
      {/* Menu Header */}
      <div 
        className="flex justify-between items-center p-6 border-b"
        style={{ borderColor: theme.stroke }}
      >
        <h2 className="text-xl font-semibold" style={{ color: theme.text }}>
          Navigation
        </h2>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ color: theme.text }}
        >
          <X size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className="w-full flex items-center gap-4 p-4 rounded-lg mb-2 transition-all hover:opacity-80"
              style={{ 
                backgroundColor: isActive ? theme.button : 'transparent',
                color: isActive ? '#FFFFFF' : theme.text
              }}
            >
              <Icon size={24} />
              <span className="text-base font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MenuSidebar;
