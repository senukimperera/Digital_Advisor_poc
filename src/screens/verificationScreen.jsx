import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Html5Qrcode } from 'html5-qrcode';
import { darkTheme, lightTheme } from '../components/theme';

const VerificationScreen = () => {
  const [isDark, setIsDark] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();
  const scannerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    startScanner();
    return () => {
      stopScanner();
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const startScanner = async () => {
    try {
      const scanner = new Html5Qrcode("qr-reader");
      scannerRef.current = scanner;

      await scanner.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 280, height: 280 }
        },
        (decodedText) => {
          handleBarcodeScanned(decodedText);
        },
        (errorMessage) => {
          // Ignore scan errors, just continue scanning
        }
      );
      
      setCameraPermission(true);
    } catch (err) {
      console.error("Camera error:", err);
      setCameraPermission(false);
      setErrorMessage("Unable to access camera. Please grant camera permissions.");
    }
  };

  const stopScanner = async () => {
    if (scannerRef.current && scannerRef.current.isScanning) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
      } catch (err) {
        console.error("Error stopping scanner:", err);
      }
    }
  };

  const handleBarcodeScanned = async (data) => {
    if (isScanning) return;
    
    setIsScanning(true);
    await stopScanner();
    
    // Simulate scanning progress
    let progress = 0;
    progressIntervalRef.current = setInterval(() => {
      progress += 10;
      setScanProgress(progress);
      
      if (progress >= 100) {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
        setIsScanning(false);
        console.log('QR Code scanned:', data);
        // Navigate to product details or show result
      }
    }, 200);
  };

  const requestPermission = async () => {
    await startScanner();
  };

  if (cameraPermission === false) {
    return (
      <div 
        className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{ backgroundColor: theme.background }}
      >
        <p 
          className="text-center mb-4"
          style={{ color: theme.text }}
        >
          {errorMessage || "We need camera permission to scan QR codes"}
        </p>
        <button 
          onClick={requestPermission}
          className="py-3 px-6 rounded-lg font-semibold text-white"
          style={{ backgroundColor: theme.button }}
        >
          Grant Permission
        </button>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 w-full h-full overflow-hidden"
      style={{ backgroundColor: theme.background }}
    >
      {/* Header */}
      <div className="absolute top-12 left-0 right-0 flex justify-between items-center px-6 z-20">
        <button 
          className="p-1"
          onClick={() => navigate('/scanqrScreen')}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ color: theme.text }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <h1 
          className="text-lg font-semibold"
          style={{ color: theme.text }}
        >
          Verification
        </h1>

        <button 
          onClick={() => setIsDark(!isDark)}
          className="w-10 h-10 rounded-full flex items-center justify-center"
        >
          <svg 
            className="w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            style={{ color: theme.text }}
          >
            {isDark ? (
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            ) : (
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div> 

      {/* Brand Logo */}
      <div className="absolute top-28 left-0 right-0 flex justify-center items-center z-20">
        <img 
          src={isDark ? require('../assets/Abbott_logo-dark.png') : require('../assets/Abbott_logo-light.png')} 
          alt="Abbott Logo" 
          className="h-8 w-auto object-contain" 
        />
      </div>

      {/* QR Scanner - Full Screen */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div id="qr-reader" className="w-full h-full"></div>

        {/* Scanner Frame Overlay */}
        <div className="absolute top-1/2 left-1/2 w-70 h-70 -ml-35 -mt-35 pointer-events-none z-10" style={{ width: '280px', height: '280px', marginLeft: '-140px', marginTop: '-140px' }}>
          {/* Top Left Corner */}
          <div 
            className="absolute top-0 left-0 w-15 h-15"
            style={{ 
              width: '60px', 
              height: '60px',
              borderTop: `4px solid ${isDark ? theme.text : '#FFFFFF'}`,
              borderLeft: `4px solid ${isDark ? theme.text : '#FFFFFF'}`,
              borderTopLeftRadius: '8px'
            }}
          />

          {/* Top Right Corner */}
          <div 
            className="absolute top-0 right-0 w-15 h-15"
            style={{ 
              width: '60px', 
              height: '60px',
              borderTop: `4px solid ${isDark ? theme.text : '#FFFFFF'}`,
              borderRight: `4px solid ${isDark ? theme.text : '#FFFFFF'}`,
              borderTopRightRadius: '8px'
            }}
          />

          {/* Bottom Left Corner */}
          <div 
            className="absolute bottom-0 left-0 w-15 h-15"
            style={{ 
              width: '60px', 
              height: '60px',
              borderBottom: `4px solid ${isDark ? theme.text : '#FFFFFF'}`,
              borderLeft: `4px solid ${isDark ? theme.text : '#FFFFFF'}`,
              borderBottomLeftRadius: '8px'
            }}
          />

          {/* Bottom Right Corner */}
          <div 
            className="absolute bottom-0 right-0 w-15 h-15"
            style={{ 
              width: '60px', 
              height: '60px',
              borderBottom: `4px solid ${isDark ? theme.text : '#FFFFFF'}`,
              borderRight: `4px solid ${isDark ? theme.text : '#FFFFFF'}`,
              borderBottomRightRadius: '8px'
            }}
          />

          {/* Scanning Line Animation */}
          {isScanning && (
            <div 
              className="absolute top-0 left-0 right-0 h-1 animate-scan"
              style={{
                height: '3px',
                backgroundColor: '#00A3E0',
                opacity: 0.9,
                boxShadow: '0 0 8px rgba(0, 163, 224, 0.8)',
                animation: 'scan 2s linear infinite'
              }}
            />
          )}
        </div>
      </div>

      {/* Scanning Progress */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center z-20">
        <div 
          className="py-3 px-12 rounded-full border backdrop-blur-sm"
          style={{ 
            borderColor: theme.subText,
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
          }}
        >
          <p 
            className="text-sm font-medium"
            style={{ color: '#FFFFFF' }}
          >
            Scanning {scanProgress}%
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(280px); }
        }
        
        #qr-reader video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
        
        #qr-reader {
          border: none !important;
          width: 100% !important;
          height: 100% !important;
        }
        
        #qr-reader > div {
          border: none !important;
        }
      `}</style>
    </div>
  );
};

export default VerificationScreen;
