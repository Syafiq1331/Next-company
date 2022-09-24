import React from 'react';
import CardService from './CardService';
import Hire from './Hire';

const Services = () => {
    return (
        <div className='bg-cyan-100 text-center lg:text-start pb-5 lg:pb-0'>
            <section className='container mx-auto lg:px-10 lg:py-10 px-5'>
                <div className='lg:w-1/2 lg:h-1/2 w-80'>
                    <h1 className='text-3xl pb-3 font-semibold'>Our services </h1>
                    <h3>Our services are end to end Product Design and Development according to your needs, here are our services. </h3>
                </div>

                <CardService/>
                <Hire/>
            </section>
        </div>
    )
}

export default Services