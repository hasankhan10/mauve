import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar absolute w-[100%] h-[50px] top-7 flex justify-start pl-16 space-x-72 z-50'>
        <nav className='logo h-full w-fit hover:scale-105 duration-200'>
          <NavLink to={"/"}>
            <img className=' h-full w-full rounded-md' src="https://static.wixstatic.com/media/5edfa9_ee63e8792bbc4428ae15f05ddaaadb33~mv2.png/v1/fill/w_64,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mi.png" alt="" />
          </NavLink>
        </nav>
        <nav className=' h-full w-[55%] backdrop:blur-3xl rounded-lg overflow-hidden flex justify-center shadow-lg shadow-gray-500 hover:shadow-gray-600 duration-200'>
            <section className=' h-full w-full flex justify-center place-items-center space-x-20 text-xl font-semibold'>
                 <NavLink to={"/"}>
                  <h1 className=' hover:scale-105 duration-200'>Home</h1>
                </NavLink>
                
                <NavLink to={"/services"}>
                  <h1 className=' hover:scale-105 duration-200'>Services</h1>
                </NavLink>
                <NavLink to={"/ourprocess"}>
                  <h1 className=' hover:scale-105 duration-200'>Our Process</h1>
                </NavLink>
                <NavLink to={"/aboutus"}>
                  <h1 className=' hover:scale-105 duration-200'>About us</h1>
                </NavLink>
                <NavLink to={"/contact"}>
                  <h1 className=' hover:scale-105 duration-200'>Contact</h1>
                </NavLink>
            </section>
        </nav>
    </div>
  )
}

export default Navbar