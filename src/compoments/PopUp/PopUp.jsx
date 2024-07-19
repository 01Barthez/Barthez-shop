import React from 'react'
import { CgClose } from "react-icons/cg"; 
import InputForm from './InputForm';

function PopUp({orderPopup, setOrderPopup}) {
  return (
    <>
        {orderPopup && (
            <div className="popup">
                <div className="h-screen w-screen fixed top-0 left-0 z-50 bg-dark/80 dark:bg-white/30 backdrop-blur-lg">
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md dark:bg-gray-950 rounded-md duration-200 w-80 p-6">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-semibold">
                                Order Now
                            </h3>

                            <div 
                                className="bg-primary hover:bg-secondary p-1 rounded-md cursor-pointer text-sm text-light"
                                onClick={() => setOrderPopup(false)}    
                            >
                                <CgClose />
                            </div>
                        </div>
                        
                        {/* Form */}
                        <form 
                            action="#" 
                            className="mt-8 flex flex-col gap-4"
                        >
                            <InputForm 
                                type = "name"
                                placeholder = "Nom" 
                            />

                            <InputForm 
                                type = "email"
                                placeholder = "Email" 
                            />

                            <InputForm 
                                type = "Address"
                                placeholder = "Address" 
                            />

                            <div className="mx-auto">
                                <button className="order_btn2">
                                    Order Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>                
            </div>
        )}
    </>
  )
}

export default PopUp
