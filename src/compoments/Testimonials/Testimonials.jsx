import React from 'react'
import Slider from "react-slick";
import ContentText from '../Products/ContentText'
import {settingsTestimonial} from '../../constantes/const-react-slides-setting'
import {TestimonialsData} from '../../constantes/Constantes'
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <div className='bg-primary3 dark:bg-blue-950 py-10'>
        <div className="container flex flex-col gap-4">
            {/* Header Section */}
            <ContentText
                subtitle = "What our customers are saying"
                title = "Testimonial"
            />

            {/* Body Section */}
            <div 
                className=""
                data-aos = "zoom-in"
            >
                <Slider {...settingsTestimonial}>
                    {
                        TestimonialsData.map((data) => (
                            <TestimonialCard
                                key = {data.id}
                                name = {data.name}
                                commentaire = {data.commentaire}
                                profile = {data.profile}
                            />                 
                        ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
