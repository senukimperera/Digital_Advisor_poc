import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, ChevronLeft, CheckIcon, Menu } from 'lucide-react';
import { darkTheme, lightTheme } from '../components/theme';
import QRImage from '../assets/QR.png';
import BottomNavbar from '../components/BottomNavbar';
import MenuSidebar from '../components/MenuSidebar';

const VerificationScreen = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(location.state?.isDark ?? true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const theme = isDark ? darkTheme : lightTheme;
  
  const handleVerify = () => {
    navigate('/onboard', { state: { isDark } });
  };
  return (
    <div
      className="min-h-screen flex flex-col px-6 pt-4"
      style={{ backgroundColor: theme.background1 }}
    >
      {/* Header */}
      <div className="absolute top-8 left-0 right-0 flex justify-between items-center px-6 z-20">
        <button
          className="p-1"
          onClick={() => navigate('/scanqr', { state: { isDark } })}
          style={{ color: theme.text }}
        >
          <ChevronLeft size={24} />
        </button>

        <h1
          className="text-lg font-semibold"
          style={{ color: theme.text }}
        >
          Verification
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-full hidden md:flex items-center justify-center"
            style={{ color: theme.text }}
          >
            <Menu size={20} />
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ color: theme.text }}
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>

      {/* Menu Sidebar */}
      <MenuSidebar 
        theme={theme} 
        isDark={isDark} 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      {/* Main Content*/}
      <div className="flex flex-col md:flex-row gap-4 mt-20 w-full">
        {/* Authenticated Image */}
        <div
          className="flex flex-col items-center justify-center text-center px-2 py-4 w-full  h-auto rounded-lg"
          style={{ backgroundColor: theme.background2, borderColor: theme.stroke, borderWidth: 1 }}
        >
          <div className="flex flex-col items-center justify-center text-center w-full max-w-md h-auto relative">
            <div
              className="absolute top-2 left-4 px-3 py-1 rounded-2xl font-semibold text-sm z-10"
              style={{ backgroundColor: theme.labelbg, color: theme.textgreen, borderColor: theme.labelstroke, borderWidth: 1 }}
            >
              Authentic
            </div>
            <img src={QRImage} alt="QR Code" className="w-full h-auto object-contain" />
            <div
              className="absolute bottom-2 left-4 px-3 py-1 rounded-lg text-sm text-left text-white z-10"
              style={{ backgroundColor: 'rgba(22, 22, 31, 0.7)' }}
            >
              <p className="font-semibold">iPhone 15 pro</p>
              <p className="font-regular">Model Number: A3102</p>
            </div>
          </div>
        </div>

        {/* Verified Label and Product Details */}
        <div className="flex flex-col w-full md:w-1/2">
          {/* Verified Label */}
          <div className="flex flex-row items-center justify-start text-left px-4 py-4 w-full h-auto rounded-lg gap-4"
            style={{ backgroundColor: theme.labelbg, color: theme.textgreen, borderColor: theme.labelstroke, borderWidth: 1 }}>
            <div className="flex items-center justify-center w-16 h-16 rounded-full flex-shrink-0"
              style={{ backgroundColor: theme.labelstroke }}>
              <div className="flex items-center justify-center w-12 h-12 rounded-full"
                style={{ backgroundColor: theme.textgreen }}>
                <CheckIcon size={24} className="text-white" />
              </div>
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold">Verified Product</p>
              <p className="font-regular text-sm">This product is authentic and registered</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col items-start justify-start text-left px-4 py-4 w-full mt-4 h-auto rounded-lg gap-4"
            style={{ backgroundColor: theme.background2, borderColor: theme.stroke, borderWidth: 1 }}>
            <p className="font-semibold text-lg mb-2" style={{ color: theme.text }}>Product Details</p>
            <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>Serial Number:</p> F2L9Q3X7N6Y8</p>
            <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>GTIN / EAN:</p> 0195949123456</p>
            <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>Manufacturer:</p> Apple Inc.</p>
            <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>Manufacture Date:</p> 2024-09-18</p>
            <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>Market Region:</p>Europe (EU)</p>
            <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>DPP Version:</p>DPP-1.0</p>
          </div>
        </div>
      </div>

       {/* Bottom Navigation */}
            <BottomNavbar theme={theme} isDark={isDark} />

    </div>
  );

}

export default VerificationScreen;