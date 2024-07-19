import React from 'react'


function TestimonialCard(props) {
    const defaultProfileImage = "https://via.placeholder.com/150";  // Image par défaut si l'URL n'est pas valide
    const profileImage = props.profile ? props.profile : defaultProfileImage;

    return (
    <div
        className='relative bg-primary/50  dark:bg-gray-900 text-black/80 dark:text-lime-50 flex flex-col gap-4 shadow-lg py-4 md:py-8 px-4 md:px-6 rounded-xl mx-2'
    >
        {/* Image Part */}
        <div className="shadow-md shadow-dark/30 dark:shadow-light/30 drop-shadow-md rounded-full max-w-16 max-h-16 bg-secondary mb-4 flex items-center justify-center">
            <img 
                src = {profileImage} 
                alt = {props.name}  
                className="rounded-full max-w-16 max-h-16 object-cover" 
            />
        </div>        

        {/* Text Part */}
        <div className='flex flex-col gap-4 items-center'>
            <div className="space-y-3">
                <p className="text-xs txt-gray-500">
                    {props.commentaire}
                </p>

                <h1 className='text-base sm:text-xl font-bold text-dark/85 dark:text-secondary2'>
                    {props.name}
                </h1>
            </div>
        </div>

        <p className="absolute top-20 right-0 font-serif text-9xl text-black/20 dark:text-light/20">
            "
        </p>
    </div>
  )
}

TestimonialCard.defaultProps = {
    name : "Barthez",
    commentaire : "Je suis satisfait",
}

export default TestimonialCard
