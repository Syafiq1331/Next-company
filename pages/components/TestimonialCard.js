import React from 'react'

const TestimonialCard = () => {
    return (
        <>
            <article className="text-center lg:mb-24">
                    <h2 className='text-5xl text-purple-700 pt-10'>{`"`}</h2>
                    <p className='lg:w-1/2 mx-auto text-slate-900'>“...he found his passion in powder skiing and moved to Jackson Hole, Wyoming. His relentless pursuit of knowledge and ski touring in the mountains has led to countless adventures all across the globe.”</p>
                    <picture>
                        <img src="/avatar.svg" alt="" className='w-20 mx-auto mt-5' />
                    </picture>
                    <p className='mt-3 font-bold'>Anthony</p>
                    <p className='text-slate-500'>Front end engineer</p>
            </article>
            <article className="text-center pt-10">
                    <h2 className='text-5xl text-purple-700'>{`"`}</h2>
                    <p className='lg:w-1/2 mx-auto text-slate-900'>“These are noodles with a mean streak, a potent lashing of hot chile and oil, laced with just enough Sichuan peppercorn to numb your palate, to make the next bite not just tolerable but actually kind of great.”</p>
                    <picture>
                        <img src="/avatar_1.svg" alt="" className='w-20 mx-auto mt-5' />
                    </picture>
                    <p className='mt-3 font-bold'>Anthony</p>
                    <p className='text-slate-500'>Back end engineer</p>
            </article>
        </>
    )
}

export default TestimonialCard