import React, { useEffect, useState } from 'react'
import Navbar from './compoments/Navbar/Navbar'
import Hero from './compoments/Hero/Hero'
import Products from './compoments/Products/Products'
import TopProduct from './compoments/TopProduct/TopProduct'
import Banner from './compoments/Banner/Banner'
import Subscribe from './compoments/subscribe/subscribe'
import Testimonials from './compoments/Testimonials/Testimonials'
import Footer from './compoments/Footer/Footer'
import PopUp from './compoments/PopUp/PopUp'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 75
    });
    AOS.refresh();
  }, []);

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  return (
    <>
      <div className="text-dark dark:text-light bg-gray-50 dark:bg-gray-900 duration-200">
        <Navbar handleOrderPopup = {handleOrderPopup}/>
        <Hero handleOrderPopup = {handleOrderPopup} />
        <Products/>
        <TopProduct/>
        <Banner/>
        <Subscribe/>        
        <Products/>
        <Testimonials/>
        <Footer/>
        <PopUp 
          orderPopup={orderPopup} 
          setOrderPopup={setOrderPopup}
        />
      </div>
    </>
  )
}

export default App
