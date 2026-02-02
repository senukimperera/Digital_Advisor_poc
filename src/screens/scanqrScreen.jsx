import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { darkTheme, lightTheme } from '../components/theme';

const ScanqrScreen = () => {
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();
  const theme = isDark ? darkTheme : lightTheme;

  const handleScan = () => {
    navigate('/verificationScreen');
  };

  return (
    <div 
      className="min-h-screen flex flex-col px-6 pt-4"
      style={{ backgroundColor: theme.background }}
    >
      {/* Theme Toggle */}
      <div className="flex justify-end items-center mb-2">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{ backgroundColor: isDark ? '#1E2936' : '#F3F4F6', color: theme.text }}
        >
          {isDark ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      {/* Header with logos */}
      <div className="w-full flex justify-between items-center mt-2 mb-8">
        <img 
          src={isDark ? require('../assets/dlq.png') : require('../assets/dlq-logo-light.png')} 
          alt="DLQ Logo" 
          className="h-8 w-auto object-contain" 
        />
        <img 
          src={isDark ? require('../assets/h2compute.png') : require('../assets/h2c-logo-light.png')} 
          alt="H2Compute Logo" 
          className="h-10 w-auto object-contain" 
        />
      </div>

      {/* Illustration with Gradient Overlay */}
      <div className="flex-1 flex items-center justify-center relative mb-8">
        <div className="relative w-full max-w-sm">
          <img 
            src={isDark ? require('../assets/scan_portrait_dark.png') : require('../assets/scan_portrait_light.png')} 
            alt="Scan Illustration" 
            className="w-full h-auto object-contain mx-auto"
            style={{ maxHeight: '590px' }}
          />
          
          {/* Gradient Overlay */}
          <div 
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '591px',
              background: isDark 
                ? 'linear-gradient(to bottom, transparent 0%, rgba(11, 18, 32, 0.5) 70%, #0B1220 80%, #0B1220 100%)'
                : 'linear-gradient(to bottom, transparent 0%, rgba(248, 249, 250, 0.7) 70%, #F8F9FA 80%, #F8F9FA 100%)'
            }}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center px-8 mb-8 relative z-10" style={{ marginTop: '-140px' }}>
        <h1 
          className="text-3xl font-bold mb-2"
          style={{ color: theme.text }}
        >
          Verify Product
        </h1>
        <p 
          className="text-sm leading-5"
          style={{ color: theme.subText }}
        >
          Scan the QR code to check product authenticity
        </p>
      </div>

      {/* Scan Button */}
      <div className="mb-16 max-w-md mx-auto w-full relative z-20">
        <button 
          onClick={handleScan}
          className="w-full py-4 rounded-xl font-semibold text-white text-base transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: theme.button }}
        >
          Scan
        </button>
      </div>
    </div>
  );
};

export default ScanqrScreen;
