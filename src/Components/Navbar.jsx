import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'

function Navbar() {
 
  const [display,setDisplay] = useState("none")
  const [bgColor,setBgColor] = useState("")
  const getBool = (bool) => {
    bool === true ? setDisplay("block") : setDisplay("none")
    bool === true ? setBgColor("skyblue") : setBgColor("")
  
  }
  return (
    <div className='navbar absolute w-[100%] sm:h-[50px] h-[40%] top-7 flex sm:justify-start justify-end pl-16 sm:gap-72 z-[999]'>
        <Menu getBool ={getBool} />
        <nav className='logo hidden sm:block h-full w-fit hover:scale-105 duration-200'>
        
          <NavLink to={"/"}>
            <img className=' h-full w-full rounded-md' src="https://static.wixstatic.com/media/5edfa9_ee63e8792bbc4428ae15f05ddaaadb33~mv2.png/v1/fill/w_64,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mi.png" alt="" />
          </NavLink>
          
        </nav>
        
        <nav className=' h-full w-[55%] backdrop:blur-3xl rounded-lg overflow-hidden flex justify-center shadow-lg shadow-gray-500 hover:shadow-gray-600 duration-200' style={{display:display}}>
      
            <section className=' h-full w-full flex sm:flex-row flex-col justify-center place-items-center  gap-10 sm:gap-20 text-xl font-semibold' style={{backgroundColor:bgColor}}>

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