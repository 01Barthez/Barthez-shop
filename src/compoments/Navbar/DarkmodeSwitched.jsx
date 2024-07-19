import React, { useEffect, useState } from 'react'
import { BsFillSunFill } from "react-icons/bs"; 
import { FaMoon } from "react-icons/fa"; 

function DarkmodeSwitched() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    const element = document.documentElement;
    // console.log(element);

    useEffect(() => {
        if(theme ==="dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme])
    
    return (
    <div className='relative -top-3'>
        {/* Dark Mode  */}
        <FaMoon 
            className={`absolute top-0 left-0 z-10 rounded-full text-2xl text-light cursor-pointer drop-shadow-xl transition-all duration-300
                ${theme === "dark" ? "opacity-0" : "opacity-100"} `}
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')
            }            
        />

        {/* Light Mode */}
        <BsFillSunFill 
            className={`absolute top-0 left-0 z-10 rounded-full text-2xl cursor-pointer drop-shadow-xl transition-all duration-300
                ${theme === "light" ? "opacity-0" : "opacity-100"} `}
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')
            }            
        />
    </div>
  )
}

export default DarkmodeSwitched
