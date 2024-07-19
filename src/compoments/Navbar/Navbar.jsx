import React from 'react'
import DarkmodeSwitched from './DarkmodeSwitched'
import ImageLogo from './ImageLogo'
import { BiSearchAlt2 } from "react-icons/bi"; 
import { BsFillCaretDownFill } from "react-icons/bs"; 
import { CgShoppingCart } from "react-icons/cg"; 
import { DropDownLink, Menu } from '../../constantes/Constantes'
import { FaMobileAlt } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa"; 
import { FaFacebookSquare } from "react-icons/fa"; 
import { HiOutlineLocationMarker } from "react-icons/hi"; 
import { FaInstagramSquare } from "react-icons/fa"; 


function Navbar({handleOrderPopup}) {
  return (
    <div className='relative z-40 w-full shadow-md bg-light dark:bg-dark/90 dark:text-light duration-200'>
        {/* Info Navbar */}
        <div className="bg-secondary/80 hidden sm:block">
            <div className="container flex justify-between items-center py-[2px]">
                {/* Addresse */}
                <div className="flex gap-4 text-xs">
                    <div className="flex items-center gap-1 cursor-default">
                        <HiOutlineLocationMarker/>
                        <span>Noida, Uttar Pradesh</span>
                    </div>

                    <span>|</span>

                    <div className="flex items-center gap-1 cursor-default">
                        <FaMobileAlt/>
                        <span>+237 - 655 646 688</span>
                </div>
                </div>

                {/* SocialLinks */}
                <div className="flex items-center gap-3">
                    <a href="#">
                        <FaInstagramSquare className='hover:-translate-y-2 duration-200 hover:text-primary'/>
                    </a>

                    <a href="#">
                        <FaFacebookSquare className='hover:-translate-y-2 duration-200 hover:text-primary'/>
                    </a>

                    <a href="#">
                        <FaLinkedin className='hover:-translate-y-2 duration-200 hover:text-primary'/>
                    </a>
                </div>
            </div>
        </div>
       
        {/* Upper Navbar */}
        <div className=' bg-primary2 dark:bg-secondary2 border-b-2 sm:border-b-0 border-b-primary py-1'>
            <div className='container flex items-center justify-between'>
                {/* Image Logo */}
                <ImageLogo/>  
                
                {/* Search Bar and Order Button */}
                <div className="flex gap-2 items-center">
                    {/* Search Bar */}
                    <div className="relative group hidden sm:block">
                        <input 
                            type="text" 
                            placeholder='search'
                            className="nav_input"
                        />
                        <BiSearchAlt2 
                            className = "text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2"
                        />
                    </div>

                    {/* Order Button */}
                    <button
                        onClick={() => handleOrderPopup()}
                        className='order_btn group'
                    >
                        <span className='md:group-hover:inline-block hidden transition-all duration-300 font-semibold'>
                            Order
                        </span>

                        <CgShoppingCart 
                            className="text-xl drop-shadow-sm cursor-pointer"
                        />
                    </button>

                    {/* Darkmode Switched */}
                    <DarkmodeSwitched/>
                </div>
            </div>
        </div>
        
        {/* Lower Navbar */}
        <div className="container flex justify-center">
            <ul className='hidden sm:flex items-center gap-4 md:gap-8'>
                {
                    Menu.map((arrayData)=>(
                        <li key={arrayData.id} >
                            <a 
                                href={arrayData.link}
                                className='link_menu'
                            >
                                {arrayData.name}
                            </a>
                        </li>
                    ))
                }
                {/* Simple Dropdown and and Links */}
                <li className='group relative cursor-pointer'>
                    <a 
                        href="/#"
                        className='link_menu flex items-center gap-2'
                    >
                        <span>Trending</span>
                        <BsFillCaretDownFill 
                            className="absolute -right-3 top-1/2 -translate-y-1/4 transition-all duration-300 group-hover:rotate-180"
                        />
                    </a>
                    {/* Links of our dropDownlink */}
                    <div className='absolute z-50 top-8 left-1/2 -translate-x-1/2 shadow-md min-w-52 hidden group-hover:block px-1 py-4 rounded-b-md bg-white/90 text-dark dark:bg-black/80 dark:text-light'>
                        <ul className='flex flex-col items-center'>
                            {
                                DropDownLink.map((data)=>(
                                    <li key={data.id} >
                                        <a 
                                            href={data.link}
                                            className='sublink_menu'
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
