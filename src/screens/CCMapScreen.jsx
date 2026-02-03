import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, ChevronLeft, BoxIcon, ChevronRight, CpuIcon, TruckIcon, Menu} from 'lucide-react';
import { darkTheme, lightTheme } from '../components/theme';
import BottomNavbar from '../components/BottomNavbar';
import MenuSidebar from '../components/MenuSidebar';

const CCMapScreen = () => {
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
                    CC Map
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

             {/* Map */}
            <div className="w-full mt-24 h-96 rounded-lg overflow-hidden"
                style={{ borderColor: theme.stroke, borderWidth: 1 }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9944337407924!2d79.8780278753171!3d6.8912680931078505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a2e86afdfdb%3A0x4b5bc43af0963b55!2sH2Compute%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1770103694639!5m2!1sen!2slk"
                    style={{ border: 0, width: '100%', height: '100%' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
           

            {/* Bottom Navigation */}
            <BottomNavbar theme={theme} isDark={isDark} />

        </div>
    );
};

export default CCMapScreen;