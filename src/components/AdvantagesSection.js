import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClock, faTags, faUsers } from '@fortawesome/free-solid-svg-icons';

function AdvantagesSection() {
    const advantages = [
        { text: "Гарантия качества", icon: faCheckCircle },
        { text: "Быстрая заправка", icon: faClock },
        { text: "Доступные цены", icon: faTags },
        { text: "Опытные специалисты", icon: faUsers }
    ];

    return (
        <div id="adv" className="py-10 bg-base-200">
            <div className='container mx-auto'>
                <h2 className="text-3xl font-bold text-center mb-6">Наши преимущества</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="card bg-base-100 shadow-md p-4 flex flex-col items-center relative">

                            <div className="w-16 h-16 bg-primary bg-opacity-40 backdrop-blur-lg rounded-full shadow-lg absolute -top-6 flex items-center justify-center">
                                <FontAwesomeIcon icon={advantage.icon} className="text-white text-2xl" />
                            </div>
                            <p className="text-lg mt-10">{advantage.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdvantagesSection;
