import React from 'react'

const WorkRight = ({ img, tagline, title, desc }) => {
    return (
        <article className='my-20 bg-white flex items-center flex-wrap lg:flex-nowrap rounded-xl justify-between'>
            <div class="lg:w-6/12 order-2 lg:order-1 flex flex-col justify-between p-4 leading-normal">
                <button className='bg-cyan-100 text-purple-500 py-3 px-4 rounded w-40 my-5 mx-auto lg:mx-0'>{tagline}</button>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center lg:text-start">{title}</h5>
                <p class="mb-3 lg:w-1/2 font-normal text-gray-700 dark:text-gray-400 text-justify lg:text-start">{desc}</p>
            </div>
            <picture className="lg:w-6/12 order-1 lg:order-2">
                <img class="object-cover w-96" src={img} alt="" />
            </picture>
        </article>
    )
}

export default WorkRight