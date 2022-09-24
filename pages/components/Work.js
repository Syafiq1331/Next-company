import React from 'react'
import WorkLeft from './WorkLeft';
import WorkRight from './WorkRight'

const Work = () => {
    return (
        <article className="py-20 container mx-auto px-10">
            <div className='text-center'>
                <h1 className='text-3xl pb-3 font-semibold'>Recent works.  </h1>
                <h3>We have worked on projects from National to International scale, here are examples of what we have done. </h3>
            </div>

            <WorkLeft img="/store.svg" tagline="mobile apps" title="RNI - Mobile App" desc="We have an opportunity to help one of Indonesian BUMN designing their aplication that help farmer to track and schedule their activity using the help of machine learning. " />

            <WorkRight img="/store.svg" tagline="mobile apps" title="RNI - Mobile App" desc="We have an opportunity to help one of Indonesian BUMN designing their aplication that help farmer to track and schedule their activity using the help of machine learning. " />

            <WorkLeft img="/store.svg" tagline="mobile apps" title="RNI - Mobile App" desc="We have an opportunity to help one of Indonesian BUMN designing their aplication that help farmer to track and schedule their activity using the help of machine learning. " />

            <WorkRight img="/store.svg" tagline="mobile apps" title="RNI - Mobile App" desc="We have an opportunity to help one of Indonesian BUMN designing their aplication that help farmer to track and schedule their activity using the help of machine learning. " />
        </article>
    )
}

export default Work