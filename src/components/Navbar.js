// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import PhoneNumber from './PhoneNumber'; // Импортируем компонент PhoneNumber

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar ${isScrolled ? 'bg-opacity-70 backdrop-blur-md shadow-md' : 'bg-transparent'} fixed border-b border-white border-opacity-15 top-0 w-full z-50 transition-all duration-300`}>
            <div className="container mx-auto">
                <div className="navbar-start">
                    <a href="/" className="btn btn-ghost text-xl">
                        <img src="/images/logo.svg" alt="Логотип" className="lg:h-4 h-5 w-auto" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#services">Услуги</a></li>
                        <li><a href="#adv">Преимущества</a></li>
                        <li><a href="#footer">Контакты</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center justify-end'>
                        <PhoneNumber />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
