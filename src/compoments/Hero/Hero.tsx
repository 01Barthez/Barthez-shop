import React from 'react'
import Slider from "react-slick";
import { HeroElementList } from '../../constantes/Constantes'
import { settingsHero } from '../../constantes/const-react-slides-setting';

function Hero({handleOrderPopup}) {
    return (
        <div id='home' className='relative overflow-hidden min-h-[20rem] md:min-h-60 lg:min-h-96 bg-gray-100 text-dark dark:text-light dark:bg-dark flex justify-center'>
            {/* Baground Pattern */}
            <div>
                <div className="bg_pattern">BARTHEZ<br/>SHOP</div>
                <div className="bg_pattern2">BARTHEZ<br/>SHOP</div>
                <div className="bg_pattern3">BARTHEZ<br/>SHOP</div>
            </div>

            {/* Hero section */}
            <div className="container relative z-10">
                <Slider {...settingsHero}>
                    {
                        HeroElementList.map((item) => (
                            <div 
                                key={item.id} 
                                className='mx-8'
                            >
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-8 py-4 sm:py-12 md:pt-28'>
                                    {/* Text content section */}
                                    <div className='flex flex-col justify-center items-center md:items-start gap-3 md:gap-4 text-center md:text-left order-2'>
                                        <h1 
                                            data-aos="zoom-out" 
                                            data-aos-once="true"
                                            data-aos-duration="600" 
                                            className='text-4xl sm:text-5xl lg:text-6xl font-bold'
                                        >
                                            {item.title}
                                        </h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

                                        <p
                                            data-aos="fade-up" 
                                            data-aos-duration="500" 
                                            data-aos-delay="100"
                                            className='text-sm sm:text-base lg:text-lg'
                                        >
                                            {item.description}
                                        </p>

                                        <div
                                            data-aos="fade-up" 
                                            data-aos-duration="700" 
                                            data-aos-delay="100"
                                        >
                                            <button 
                                                className='order_btn2'
                                                onClick={() => handleOrderPopup()}
                                            >
                                                Order Now
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image section */}
                                    <div>
                                        <div
                                            data-aos="zoom-in" 
                                            data-aos-once="true"
                                        >
                                            <img 
                                                src={item.img} 
                                                alt="Smile after buy on BarthezShop" 
                                                className="min-w-60 max-h-60 sm:min-w-80 sm:max-h-80 sm:scale-105 md:scale-125 duration-300 object-contain mx-auto" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Hero
