import React from 'react'

function Navbar() {
  return (
    <div className='navbar absolute w-[100%] h-[50px] top-5 flex justify-center z-50'>
        <nav className=' h-full w-[25%] bg-slate-700 rounded-full overflow-hidden flex justify-center shadow-lg shadow-gray-400 hover:shadow-gray-600 duration-200'>
            <section className=' h-full w-[80%] flex justify-center place-items-center space-x-20 text-white text-xl font-semibold'>
                <h1 className=' hover:scale-105 duration-200'>Contact</h1>
                <h1 className=' hover:scale-105 duration-200'>Our Process</h1>
            </section>
        </nav>
    </div>
  )
}

export default Navbar