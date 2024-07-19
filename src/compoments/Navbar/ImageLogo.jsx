import React from 'react'
import Logo from '../../assets/Logo.png'

function ImageLogo() {
    return (
        <div>
            <a href="/#"  className='flex gap-1 items-center'>
                <img src= {Logo} alt="Logo-Shopsy" className='w-14'/>

                <span className='uppercase font-bold sm:text-xl'>
                    <span className='inline-block scale-125'>B</span>arthez
                    <span className='text-light dark:text-dark duration-200'>
                        <span className='inline-block scale-150'>S</span>hop
                    </span>
                </span>
            </a>
        </div>      
    )
}

export default ImageLogo
