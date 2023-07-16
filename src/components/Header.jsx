import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext";
import { SwitchMode } from './SwitchMode';
import Logo from '../assets/logo.png'

export function Header() {
    const { themeMode, text_color } = useContext(ThemeContext);
    const [isTop, setIsTop] = useState(true);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const { top } = section.getBoundingClientRect();
            window.scrollTo({
                top: window.scrollY + top - 80,
                behavior: 'smooth',
            });
        };
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setIsTop(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const header_background = isTop ? "bg-transparent" : `bg-${themeMode}`;

    return (
        <header className={`py-3 fixed z-50 w-full ${header_background}`}>
            <nav className="container mx-auto flex items-center justify-between">
                <div onClick={() => scrollToSection('home')}>
                    <button type="button" className={`${text_color} text-lg font-bold text-start inline-flex items-center mr-2 mb-2`}>
                        <img
                            src={Logo}
                            width={50}
                            height={50}
                            alt="TCM NOtes Logo"
                        />
                        TCM Notes
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <ul className={`hidden md:flex space-x-4 ${text_color}`}>
                        <li className='cursor-pointer' onClick={() => scrollToSection('services')}>
                            <a className='text-lg hover:text-primary'>Services</a>
                        </li>
                        <li className='cursor-pointer' onClick={() => scrollToSection('pricing')}>
                            <a className='text-lg hover:text-primary'>Pricing</a>
                        </li>
                        <li className='cursor-pointer' onClick={() => scrollToSection('contact')}>
                            <a className='text-lg hover:text-primary'>Contact</a>
                        </li>
                        <div className="border-l border-primary h-6"></div>
                    </ul>
                    <SwitchMode isTop={isTop} />
                    <div className='flex md:hidden p-2'>
                        <svg className="w-6 h-6 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </div>
                    <button type="button" className="hidden md:flex text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-primary/55 mr-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Get Stated
                    </button>
                </div>
            </nav>
        </header>
    );
};
