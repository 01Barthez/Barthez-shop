import React from 'react'
import { TopProductData } from '../../constantes/Constantes'
import { BsFillStarFill } from "react-icons/bs"; 
import ContentText from '../Products/ContentText';

function TopProduct() {
  return (
    <div
        id='services' 
        className='bg-blue-100 dark:bg-red-950'
    >
        <div className="container flex flex-col gap-16 py-10">

            {/* Header Section */}
            <ContentText
                subtitle = "Top Rated Products for you"
                title = "Best Products"
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad vel sint reprehenderit doloremque necessitatibus voluptatem facere, ea quisquam quibusdam optio rem, quasi vitae aliquam architecto repellat atque odit mollitia."
            />

            {/* Body Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
                {
                    TopProductData.map((element) => (
                        <div
                            key={element.id} 
                            data-aos = "zoom-in"
                            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-dark/80 dark:hover:bg-secondary hover:text-white relative shadow-xl transition-all duration-200 group max-w-xs"
                        >
                            {/*  Image section */}
                            <div 
                                className="h-24"
                                data-aos = 'zoom-out'
                            >
                                <img 
                                    src={element.img} 
                                    alt={element.title} 
                                    className='max-w-28 block mx-auto group-hover:scale-125 group-hover:rotate-12 -translate-y-20 duration-300 drop-shadow-md'
                                />
                            </div>
    
                            {/* detail section */}
                            <div className='p-4 text-center flex flex-col items-center gap-1'>
                                {/* Star */}
                                <div className="w-full flex items-center justify-center gap-2">
                                    <BsFillStarFill className="text-yellow-400"/>
                                    <BsFillStarFill className="text-yellow-400"/>
                                    <BsFillStarFill className="text-yellow-400"/>
                                </div>

                                {/* Title */}
                                <h4 className="text-dark dark:text-light group-hover:text-light text-xl font-bold">{element.title}</h4>

                                <p className="text-gray-500 dark:text-gray-50 text-sm group-hover:text-white duration-300 line-clamp-2">
                                    {element.description}
                                </p>

                                <button 
                                    className='order_btn3'
                                    onClick={()=>alert("Ordering not available yet !")}
                                >
                                    Order Now
                                </button>
                            </div> 
                            {/* </div> */}
                        </div>
                    ))
                }                
            </div>
        </div>
    </div>
  )
}

export default TopProduct
