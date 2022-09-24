import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="container mx-auto px-10 flex flex-wrap lg:flex-nowrap items-center justify-between py-10">
      <article className='lg:w-8/12 w-full order-2 lg:order-1 text-center lg:text-start'>
        <h1 className='text-slate-900 font-bold leading-snug lg:text-5xl text-2xl my-5 lg:m-0'>We help you to <br /> visualize your business</h1>
        <p className='text-slate-800/70 leading-relaxed text-lg'>We help your business to grow with the help of design <br /> and development in the 4.0 industry</p>
        <button className='mt-5 bg-purple-600 text-white py-3 px-4 rounded font-bold'>Contact Us</button>
      </article>
      <picture className='lg:w-4/12 w-full order-1 lg:order-2'>
        <img src="/store.svg" className="w-[25rem]" alt="" />
      </picture>
    </section>
  )
}

export default Hero