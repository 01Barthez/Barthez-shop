// Setting Of Hero Slide
export const settingsHero = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    pauseOnHover: "false",
    pauseOnFocus: "true",
}

export const settingsTestimonial = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                initialSlide: 2
            }
        },

        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }        
    ]
}
