import React from 'react'

const Footer = () => {
    return (
        <footer className="py-24 px-20 flex flex-wrap lg:flex-nowrap justify-evenly bg-purple-700">
            <div className='-mt-2'>
                <h2 className='text-white text-3xl font-bold'>Lets work together</h2>
                <h2 className='text-cyan-400 text-2xl font-semibold mt-5'>Contact Us </h2>
            </div>
            <hr className="my-10" />
            <div className='text-white'>
                <h4 className='text-2xl text-white/70 mb-1'>Email</h4>
                <p>hallo@pemudacoding.id</p>
                <br />
                <h4 className='text-2xl text-white/70 mb-1'>Find Us</h4>
                <p>Jl. Puntodewo No.07, Krajan, Wedomartani, Sleman, <br/> Yogyakarta, Indonesia</p>
            </div>
        </footer>
    )
}

export default Footer