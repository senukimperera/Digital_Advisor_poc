import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, ChevronLeft, BoxIcon, ChevronRight, CpuIcon, TruckIcon, Menu } from 'lucide-react';
import { darkTheme, lightTheme } from '../components/theme';
import BottomNavbar from '../components/BottomNavbar';
import MenuSidebar from '../components/MenuSidebar';
import QRScanImage from '../assets/qrimg.png';


const GS1DLScreen = () => {
    const location = useLocation();
    const [isDark, setIsDark] = useState(location.state?.isDark ?? true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const theme = isDark ? darkTheme : lightTheme;

    return (
        <div
            className="min-h-screen flex flex-col px-6 pt-4 pb-20"
            style={{ backgroundColor: theme.background1 }}
        >
            {/* Header */}
            <div className="absolute top-8 left-0 right-0 flex justify-between items-center px-6 z-20">
                <button
                    className="p-1"
                    onClick={() => navigate('/dpp', { state: { isDark } })}
                    style={{ color: theme.text }}
                >
                    <ChevronLeft size={24} />
                </button>

                <h1
                    className="text-lg font-semibold"
                    style={{ color: theme.text }}
                >
                    GS1 DL
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

            {/* qr */}
            <div className="w-full mt-24 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="flex items-center justify-center bg-white rounded-lg p-2">
                    <img src={QRScanImage} alt="QR Scan" className="w-auto h-auto max-w-full" />
                </div>
            </div>

            {/* link */}
            <div className="flex flex-row items-center justify-center text-center px-8 py-2 w-full mt-8 h-auto rounded-full"
                style={{ backgroundColor: "#BBE3F5" }}>
                <p className="font-regular" style={{ color: "#009ADA" }}>https://gtin.cloud/01/00027541217056/21/AV123</p>
            </div>

            {/* Product Details */}
            <div className="flex flex-col items-start justify-start text-left px-4 py-4 w-full mt-4 h-auto rounded-lg gap-4"
                style={{ backgroundColor: theme.background2, borderColor: theme.stroke, borderWidth: 1 }}>
                <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>Base URL: </p>Base URL</p>
                <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>Product Key:</p> Product Key</p>
                <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>Product GTIN:</p>Product GTIN</p>
                <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>Serial Key:</p> Serial Key</p>
                <p className="font-regular" style={{ color: theme.text }}> <p className="text-sm" style={{ color: theme.gray }}>Serial Number:</p>Serial Number</p>
            </div>

            {/* Bottom Navigation */}
            <BottomNavbar theme={theme} isDark={isDark} />

        </div>
    );
};

export default GS1DLScreen;