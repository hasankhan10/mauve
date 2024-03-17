import React from 'react'

function Navbar() {
  return (
    <div className='navbar absolute w-[100%] h-[50px] top-7 flex justify-center z-50'>
        <nav className=' h-full w-[52%] backdrop:blur-3xl rounded-lg overflow-hidden flex justify-center shadow-lg shadow-gray-500 hover:shadow-gray-600 duration-200'>
            <section className=' h-full w-full flex justify-center place-items-center space-x-20 text-xl font-semibold'>
                <h1 className=' hover:scale-105 duration-200'>Home</h1>
                <h1 className=' hover:scale-105 duration-200'>Services</h1>
                <h1 className=' hover:scale-105 duration-200'>Our Process</h1>
                <h1 className=' hover:scale-105 duration-200'>About us</h1>
                <h1 className=' hover:scale-105 duration-200'>Contact</h1>
            </section>
        </nav>
    </div>
  )
}

export default Navbar