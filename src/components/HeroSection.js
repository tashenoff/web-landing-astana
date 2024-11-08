import React from 'react';
import ScrollArrow from './ScrollArrow';
import WhatsAppButton from './WhatsAppButton'; // Импортируем компонент WhatsAppButton

function HeroSection() {
    return (
        <div id="home" className="hero relative h-[600px] bg-base-200">
            {/* Видео фон */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/1.mp4" // путь к вашему видео файлу
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Тонировка */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

            <div className="hero-content text-center relative z-10">
                <div className="w-full">
                    <h1 className="text-5xl font-bold">Создание сайтов в Астане</h1>
                    <p className="py-6">Бвстро, не дорого, с рекламой под ключ.</p>
                    <WhatsAppButton />
                </div>
            </div>
            <ScrollArrow className='bottom-16 absolute animate-bounce' direction="down" targetId="services" />
        </div>
    );
}

export default HeroSection;
