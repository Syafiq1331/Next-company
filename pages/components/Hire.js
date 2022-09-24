import React from 'react'

const Hire = () => {
    return (
        <div className='my-20 bg-white flex flex-wrap lg:flex-nowrap items-center rounded-xl'>
            <picture className="lg:w-6/12 w-full">
                <img class="object-cover" src="/store.svg" alt="" />
            </picture>
            <div class="lg:w-6/12 flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hire our team </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We understand building a product design and development team is very difficult, so we also provide services to hire our dedicated team within your company. Here are some benefit from this service:</p>

                <div className="flex flex-wrap lg:flex-nowrap lg:justify-around justify-center">
                    <ul className="list-inside list-disc">
                        <li className='text-sm'>A solid & good team</li>
                        <li className='text-sm'>More efficient coordination</li>
                    </ul>
                    <ul className="list-inside list-disc">
                        <li className='text-sm'>Guaranteed resources</li>
                        <li className='text-sm'>More cost and time saving</li>
                    </ul>
                </div>
                <button className='bg-purple-600 text-white py-3 px-4 mx-auto lg:mx-0 rounded font-bold w-32 my-5'>Contact Us</button>
            </div>
        </div>
    )
}

export default Hire