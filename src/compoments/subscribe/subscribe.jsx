import React, { useState } from 'react'
import bg1IMG from '../../assets/banner/—Pngtree—rectangle diagonal cut white lines_1467043.png'
import bg2IMG from '../../assets/banner/—Pngtree—domineering black gold new year_978739.jpg'

function Subscribe() {
  let [img, setImg] = useState(bg1IMG);
  const theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";
  
  // setImg(img = (theme === "light" ? bg1IMG : bg2IMG));

  const imgProperties = {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center center",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
  };

  console.log(img)
  console.log(theme)
  
  return (
    <div
      id='contact'
      data-aos = 'zoom-in'
      className='dark:text-white bg-gray-100 dark:bg-gray-900'
      style={imgProperties}
    >
      <div className="container backdrop-blur-sm py-24 sm:py-32 md:py-36 lg:py-40 xl:py-44">
        <div className='max-w-screen-md mx-auto flex flex-col items-center gap-8'>
          <h2 
            data-aos="fade-down" 
            className="text-2xl sm:text-3xl md:text-4xl text-center sm:text-left font-semiBold"
          >
            Get Notified About New Products
          </h2>

          <input 
            type="text" 
            data-aos="fade-up"
            placeholder='Enter Your Email Here...'
            className="w-full p-4 outline-none rounded-md text-dark dark:border-secondary" 
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
