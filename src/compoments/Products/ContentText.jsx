import React from 'react'

function ContentText(props) {
  return (
    <div>
      <div className="flex flex-col gap-3 md:gap-5 items-center text-center mb-6 md:mb-10">
          <p className='text-sm text-primary dark:text-secondary font-medium'>
            {props.subtitle}
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold dark:text-light'>
            {props.title}
          </h2>
          <p className='text-xs md:text-sm text-gray-400 dark:text-gray-100'>
            {props.text} 
          </p>
      </div>      
    </div>
  )
}

ContentText.defaultProps = {
  subtitle : "Le SousTitre Ici",
  title : "Le Titre Ici",
  text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, et dolor! Repellendus eligendi tenetur ipsa, suscipit fuga minima fugit in ex. Dolore enim."
}


export default ContentText
