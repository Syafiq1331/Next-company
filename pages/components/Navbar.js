import React from 'react'

const Navbar = () => {
    return (
        <nav className='container mx-auto px-10 flex items-center lg:justify-between justify-center py-10'>
            <h3 className="text-3xl font-bold"><span className='text-purple-800'>Team</span><span className='text-cyan-400'>Up</span></h3>
            <div className='hidden lg:block'>
                <ul className='flex items-center'>
                    <li className="mx-7 text-slate-900/70 hover:text-purple-600">Services</li>
                    <li className="mx-7 text-slate-900/70 hover:text-purple-600">Portfolio</li>
                    <li className="mx-7 text-slate-900/70 hover:text-purple-600">Testimonial</li>
                    <button className='bg-purple-600 text-white py-3 px-4 rounded font-bold'>Contact Us</button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar