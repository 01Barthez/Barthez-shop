import React from 'react'
import { ProductsData } from '../../constantes/Constantes'
import { BsFillStarFill } from "react-icons/bs"; 
import ContentText from './ContentText';
import ViewAllButtons from './ViewAllButtons'
function Products() {
  return (
    <div id='products' className='m-8 md:mt-14 md:mb-12'>
      <div className='container'>
        {/* Header Section */}
        <ContentText
          subtitle = "Top Selling Products for you"
          title = "Products"
          text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque unde alias ut vero dicta, quos facilis consequatur perspiciatis sequi distinctio aliquid quam totam"
        />        

        {/* Body Section */}
        <div className='flex flex-col gap-6'>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {/* CardsSection */}
            {
              ProductsData.map((product) => (
                <div
                  key = {product.id}
                  data-aos = "fade-up"
                  data-aos-delay = {product.AosDelay}
                  className = "shadow-sm shadow-dark dark:shadow-white hover:bg-primary/5 dark:hover:bg-secondary/5 block bg-white dark:bg-black text-dark dark:text-light hover:scale-110 rounded-md overflow-hidden"
                >
                  <img 
                    src = {product.img} 
                    alt = {product.title}
                    className="w-full max-h-[70%] object-cover"
                  />

                  <div className="flex flex-col p-2 ">
                    <h3 className="text-lg font-semiBold">{product.title}</h3>
                    <p className="text-sm text-gray-600">
                      { product.color }
                    </p>
                    <div className="flex items-center gap-1">
                      <BsFillStarFill className="text-yellow-400"/>
                      <span>{ product.rating }</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          {/* View all products button */}
          <ViewAllButtons
            name = "View All Products"
          />
        </div>
      </div>
    </div>
  )
}

export default Products
