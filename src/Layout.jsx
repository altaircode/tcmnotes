import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext';

export function Layout({ children }) {
    const [themeMode, setThemeMode] = useState('');
    useEffect(() => {
        if (!localStorage.getItem('theme-mode')) localStorage.setItem('theme-mode', 'light');
        setThemeMode(localStorage.getItem('theme-mode'));
    }, [themeMode]);
    return (
        <ThemeContext.Provider value={{
            themeMode: themeMode, setThemeMode: setThemeMode,
            text_color: themeMode == "dark" ? "text-color_dark" : "text-color_light",
            color_h3: themeMode == "dark" ? "text-[#666666]" : "text-[#929292]"
        }}>
            {children}
        </ThemeContext.Provider >
    )
}