import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    return (
        <div className='bg-cyan-100 lg:p-5 py-10 px-5'>
            <h1 className='text-3xl pb-3 text-center font-semibold'>Our Testimonial</h1>

            <div className='flex flex-wrap lg:flex-nowrap'>
            <TestimonialCard />
            </div>

        </div>
    )
}

export default Testimonial