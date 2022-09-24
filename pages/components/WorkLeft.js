import React from 'react'

const WorkLeft = ({ img, tagline, title, desc }) => {
    return (
        <article className='my-20 bg-white flex items-center rounded-xl justify-between flex-wrap lg:flex-nowrap'>
            <picture className="lg:w-6/12 flex justify-start">
                <img class="object-cover w-96" src={img} alt="" />
            </picture>
            <div class="lg:w-6/12 flex flex-col lg:justify-between p-4 leading-normal">
                <button className='bg-cyan-100 text-purple-500 py-3 px-4 rounded w-40 my-5 mx-auto lg:mx-0'>{tagline}</button>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center lg:text-start">{title}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:w-1/2 text-justify lg:text-start">{desc}</p>
            </div>
        </article>
    )
}

export default WorkLeft