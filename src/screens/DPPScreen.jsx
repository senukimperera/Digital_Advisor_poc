import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, ChevronLeft, BoxIcon, ChevronRight, CpuIcon, TruckIcon, Menu } from 'lucide-react';
import { darkTheme, lightTheme } from '../components/theme';
import BottomNavbar from '../components/BottomNavbar';
import MenuSidebar from '../components/MenuSidebar';

const DPPScreen = () => {
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
                    onClick={() => navigate('/verification', { state: { isDark } })}
                    style={{ color: theme.text }}
                >
                    <ChevronLeft size={24} />
                </button>

                <h1
                    className="text-lg font-semibold"
                    style={{ color: theme.text }}
                >
                    DPP
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


            {/* card 1*/}
            <div className="flex flex-row items-center justify-center text-center px-2 py-4 w-full mt-24 h-auto rounded-lg"
                style={{ backgroundColor: theme.background2, borderColor: theme.stroke, borderWidth: 1 }}>
                <div className="flex flex-row items-center justify-start text-left w-full h-auto gap-4 px-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'rgba(220, 184, 255, 0.35)' }}>
                        <BoxIcon size={20} style={{ color: '#A855F7' }} />
                    </div>
                    <div className="text-lg" style={{ color: theme.text }}>
                        Product Identification
                    </div>
                </div>
                <div>
                    <button
                        className="p-1"
                        onClick={() => navigate('/', { state: { isDark } })}
                        style={{ color: theme.text }}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
            {/* card 2*/}
            <div className="flex flex-row items-center justify-center text-center px-2 py-4 w-full mt-4 h-auto rounded-lg"
                style={{ backgroundColor: theme.background2, borderColor: theme.stroke, borderWidth: 1 }}>
                <div className="flex flex-row items-center justify-start text-left w-full h-auto gap-4 px-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'rgba(246, 184, 255, 0.35)' }}>
                        <CpuIcon size={20} style={{ color: '#EC4899' }} />
                    </div>
                    <div className="text-lg" style={{ color: theme.text }}>
                        Material and Component Information
                    </div>
                </div>
                <div>
                    <button
                        className="p-1"
                        onClick={() => navigate('/', { state: { isDark } })}
                        style={{ color: theme.text }}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
            {/* card 3*/}
            <div className="flex flex-row items-center justify-center text-center px-2 py-4 w-full mt-4 h-auto rounded-lg"
                style={{ backgroundColor: theme.background2, borderColor: theme.stroke, borderWidth: 1 }}>
                <div className="flex flex-row items-center justify-start text-left w-full h-auto gap-4 px-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'rgba(184, 227, 255, 0.35)' }}>
                        <TruckIcon size={20} style={{ color: '#3B82F6' }} />
                    </div>
                    <div className="text-lg" style={{ color: theme.text }}>
                        Supply Chain & Origin
                    </div>
                </div>
                <div>
                    <button
                        className="p-1"
                        onClick={() => navigate('/', { state: { isDark } })}
                        style={{ color: theme.text }}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <BottomNavbar theme={theme} isDark={isDark} />

        </div>
    );
};

export default DPPScreen;