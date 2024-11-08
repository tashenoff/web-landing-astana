import React, { useState, useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';

function ServiceSection() {
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Симулируем загрузку данных
        setTimeout(() => {
            // Проверяем наличие данных
            setServices([
                {
                    name: "Разработка сайтов",
                    image: "/images/s1.jpg",
                    description: "Профессиональная заправка и восстановление черно-белых лазерных картриджей для принтеров различных марок."
                },
                {
                    name: "Поддержка",
                    image: "/images/s2.png",
                    description: "Качественная заправка цветных лазерных картриджей с гарантией на все виды работ и расходных материалов."
                },
                {
                    name: "Продвижение",
                    image: "/images/3.jpg",
                    description: "Заправка и восстановление тонер-картриджей для лазерных принтеров с использованием высококачественных тонеров."
                },
            ]);
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <p className="text-center">Загрузка...</p>;
    }

    if (services.length === 0) {
        return <p className="text-center">Данные не найдены</p>;
    }

    return (
        <div id="services" className="bg-base-200 hero">
            <div className='py-10'>
                <div className='container mx-auto'>
                    <h2 className="text-3xl font-bold text-center mb-6">Наши услуги</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div key={index} className="card bg-opacity-70 backdrop-blur-md bg-base-200 border-base-100 border shadow-md p-4">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="h-full w-full object-cover mb-4 rounded-lg"
                                />
                                <h3 className="text-xl font-semibold">{service.name}</h3>
                                <p className="mt-2">{service.description}</p>
                                <WhatsAppButton />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
