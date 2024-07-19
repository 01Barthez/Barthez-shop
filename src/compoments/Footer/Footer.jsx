import React from 'react'
import bannerImg from '../../assets/banner/footer.jpg'
import ImageLogo from '../Navbar/ImageLogo'
import ToTopButton from "../Others-Compoments/ToTopButton";
import { FooterLinks, Menu } from '../../constantes/Constantes'
import { FaMobileAlt } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa"; 
import { FaFacebookSquare } from "react-icons/fa"; 
import { HiOutlineLocationMarker } from "react-icons/hi"; 
import { FaInstagramSquare } from "react-icons/fa"; 

const bannerImage = {
  backgroundImage: `url(${bannerImg})`,
  backgroundPosition: "center bottom",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  with: "100%",
  height: "100%"
}

function Footer() {
  return (
    <div 
      className="relative text-white"
      style={bannerImage}
    >
      <footer
        className='container grid grid-cols-1 sm:grid-cols-3 py-20 pb-52 gap-8'
        data-aos = 'zoom-in'  
      >
        {/* Company details  */}
        <div className='flex flex-col gap-4'>
          <div className=''>
            <ImageLogo />
          </div>

          <p className='text-sm text-light/70'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium harum aperiam atque culpa odit non?
          </p>
        </div>

        {/* Footer Links */}
        <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3">
          <div className='flex flex-col gap-2 items-center'>
            <h4 className="relative  cursor-default text-lg sm:text-xl font-semiBold text-justify sm:text-left mb-3">
              Important Links
              <span className="translate_bar">
              </span>
            </h4>

            <ul className="flex flex-col gap-1">
              {
                FooterLinks.map((link) => (
                  <a 
                    key={link.id}
                    href={link.link} 
                    className="text-gray-200 hover:text-primary hover:translate-x-1 duration-200"
                  >
                    {link.title}
                  </a>
                ))
              }
            </ul>
          </div>

          <div className='flex flex-col gap-2 items-center'>
            <h4 className="relative cursor-default text-lg sm:text-xl font-semiBold text-justify sm:text-left mb-3">
              Usefuls Links
              <span className="translate_bar">
              </span>
            </h4>

            <ul className="flex flex-col gap-1">
              {
                Menu.map((link) => (
                  <a 
                    key={link.id}
                    href={link.link} 
                    className="text-gray-200 hover:text-primary hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                ))
              }
            </ul>
          </div>

          {/* Socials Links */}
          <div className="py-8">
            <div className="flex gap-4 items-center">
              <a href="#" className="text-2xl">
                <FaInstagramSquare className='hover:-translate-y-2 duration-200 hover:text-primary'/>
              </a>

              <a href="#" className="text-2xl">
                <FaFacebookSquare className='hover:-translate-y-2 duration-200 hover:text-primary'/>
              </a>

              <a href="#" className="text-2xl">
                <FaLinkedin className='hover:-translate-y-2 duration-200 hover:text-primary'/>
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 cursor-default">
                <HiOutlineLocationMarker className="trans"/>
                <span>Noida, Uttar Pradesh</span>
              </div>

              <div className="flex items-center gap-3 cursor-default">
                <FaMobileAlt className="rotate"/>
                <span>+237 - 655 646 688</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="absolute right-10 -top-12">
        <ToTopButton/>
      </div>
    </div>
  )
}

export default Footer
