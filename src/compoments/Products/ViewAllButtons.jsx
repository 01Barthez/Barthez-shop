import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi"; 

function ViewAllButtons(props) {
  return (
    <>
        <button className="view_btn group flex items-center gap-2 hover:gap-4">
            <span>{ props.name }</span>
            <BiRightArrowAlt className='text-2xl text-white'/>
        </button>   
    </>
  )
}

export default ViewAllButtons
