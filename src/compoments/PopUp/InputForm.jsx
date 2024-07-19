import React from 'react'

function InputForm(props) {
  return (
    <>
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            className='w-full outline-none rounded-full border border-primary/10 dark:border-white/10 bg-transparent px-4 py-1 text-lg placeholder-secondary/40'
        />
    </>
  )
}

export default InputForm
