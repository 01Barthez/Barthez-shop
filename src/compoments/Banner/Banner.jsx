import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci"; 
import { GrValidate } from "react-icons/gr"; 
import { RiSecurePaymentLine } from "react-icons/ri"; 
import bannerImg from '../../assets/banner/girl-father-smile.jpg'
import ContentText from '../Products/ContentText'
import { BsFillShieldLockFill } from "react-icons/bs"; 

function Banner() {
  return (
    <div id="promotion" className='min-h-[550px] flex justify-center items-center py-12'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 items-center">
                {/* Image part */}
                <div data-aos = "zoom-in">
                    <img 
                        src={bannerImg} 
                        alt="Image" 
                        className='max-w-96 h-80 w-full mx-auto drop-shadow-[-10px_10px_10px_#ff7b0027] object-cover'
                    />
                </div>

                {/* description Part */}
                <div>
                    <ContentText
                        subtitle = ""
                        title = 'Winter Sale upto 50% off'
                        text = 'Quod, quisquam rerum! Quisquam ipsa neque iste accusamus suscipit porro fugiat consequuntur non. Tempora recusandae corporis natus corrupti? Adipisci amet sint praesentium.'
                    />

                    <ul className="dark:text-light flex flex-col gap-3 sm:gap-4">
                        <li 
                            className="flex items-center gap-2 sm:gap-3 md:gap-4"
                            data-aos = "fade-left"
                            data-aos-delay = "0"
                        >
                            <BsFillShieldLockFill 
                                className='text-2xl sm:text-3xl md:text-4xl max-h-8 sm:max-h-10 md:max-h-12 max-w-8 sm:max-w-10 md:max-w-12 shadow-sm p-2 rounded-full bg-violet-200 dark:bg-violet-400'
                            />
                            <span className="md:text-lg">
                                Quality product
                            </span>
                        </li>

                        <li 
                            className="flex items-center gap-2 sm:gap-3 md:gap-4"
                            data-aos = "fade-left"
                            data-aos-delay = "50"
                        >
                            <CiDeliveryTruck
                                className='text-2xl sm:text-3xl md:text-4xl max-h-8 sm:max-h-10 md:max-h-12 max-w-8 sm:max-w-10 md:max-w-12 shadow-sm p-2 rounded-full bg-red-200 dark:bg-red-400'
                            />
                            <span className="md:text-lg">
                                Fast Delivery
                            </span>
                        </li>

                        <li 
                            className="flex items-center gap-2 sm:gap-3 md:gap-4"
                            data-aos = "fade-left"
                            data-aos-delay = "100"
                        >
                            <RiSecurePaymentLine
                                className='text-2xl sm:text-3xl md:text-4xl max-h-8 sm:max-h-10 md:max-h-12 max-w-8 sm:max-w-10 md:max-w-12 shadow-sm p-2 rounded-full bg-green-200 dark:bg-green-400'
                            />
                            <span className="md:text-lg">
                                Easy payment method
                            </span>
                        </li>

                        <li 
                            className="flex items-center gap-2 sm:gap-3 md:gap-4"
                            data-aos = "fade-left"
                            data-aos-delay = "150"
                        >
                            <GrValidate
                                className='text-2xl sm:text-3xl md:text-4xl max-h-8 sm:max-h-10 md:max-h-12 max-w-8 sm:max-w-10 md:max-w-12 shadow-sm p-2 rounded-full bg-yellow-200 dark:bg-yellow-400'
                            />
                            <span className="md:text-lg">
                                Get Offers
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
