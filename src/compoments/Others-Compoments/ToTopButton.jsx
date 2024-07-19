import { AiOutlineUp } from "react-icons/ai"; 
import React from 'react'

function ToTopButton() {
  return (
    <a 
        href="/#"
        className="block p-2 bg-black hover:bg-primary text-2xl font-bold rounded-xl cursor-pointer duration-700"
    >
        <AiOutlineUp />
    </a>
  )
}

export default ToTopButton
