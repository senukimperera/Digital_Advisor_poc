import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { darkTheme, lightTheme } from '../components/theme';

const WelcomePage = () => {
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();
  const theme = isDark ? darkTheme : lightTheme;

  const handleGetStarted = () => {
    navigate('/onboard', { state: { isDark } });
  };

  return (
    <div 
      className="min-h-screen flex flex-col px-6 pt-4"
      style={{ backgroundColor: theme.background2 }}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        {/* Main Heading */}
        <h1 
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          style={{ color: theme.text }}
        >
          {/* Mobile view - with line break */}
          <span className="md:hidden">
            Scan. <span style={{ color: theme.button }}>Trust.</span><br />
            Engage.
          </span>
          {/* Desktop view - single line */}
          <span className="hidden md:inline">
            Scan. <span style={{ color: theme.button }}>Trust.</span> Engage.
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-base mb-12 max-w-sm px-4"
          style={{ color: theme.subText }}
        >
          Verification, transparency, and engagement delivered instantly.
        </p>

        {/* Illustration */}
        <div className="mb-12 w-64 h-64 flex items-center justify-center">
          <img 
            src={require('../assets/qrscan.png')} 
            alt="QR Scan Illustration" 
            className="w-full h-full object-contain" 
          />
        </div>

        {/* Footer Text */}
        <p 
          className="text-sm max-w-xs text-center"
          style={{ color: theme.subText }}
        >
          Dynamic product experiences powered by<br />
          GS1 Digital Link.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col items-center gap-6 max-w-md mx-auto mb-8">
        {/* Get Started Button */}
        <button 
          onClick={handleGetStarted}
          className="w-full font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: theme.button, color: '#ffffff' }}
        >
          <span className="text-base">Get Started →</span>
        </button>

        {/* Page Indicator */}
        <div className="flex gap-2 mb-4 md:hidden">
          <div 
            className="w-16 h-1 rounded-full transition-all"
            style={{ backgroundColor: theme.text }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;