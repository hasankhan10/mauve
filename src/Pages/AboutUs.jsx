import React from 'react'
import { NavLink } from 'react-router-dom'
import {motion} from "framer-motion"
function AboutUs() {
  return (
    <div className='about w-screen h-screen flex justify-center place-items-center'>
        <motion.section animate={{opacity:1}} initial={{opacity:0}} transition={{duration:1}} className=' sm:w-[75%] sm:h-[80%] flex sm:gap-10 sm:flex-row flex-col justify-center place-items-center'>
            <div className=' sm:w-[45%] w-full sm:h-fit h-full sm:backdrop-blur-3xl backdrop-blur-md flex flex-col gap-7 text-center p-9 rounded-xl'>
                <h1 className=' sm:text-5xl text-3xl font-bold text-gray-900'>ALL ABOUT US</h1>
                <p className=' text-xl'>Mauve interio is here to make your design dream to a reality. Whatever you’ve envisioned for your home or workspace, we are here to get it done. Since 2019, our professional, creative team has been designing the spaces that are most important to our clients. Let us lead the way to an outcome you’ll absolutely love.
                In short, we’re here to help you love your space. We pay great attention to detail, and know how crucial the little touches are. We’ll work closely with you to understand what you want, what your style is and which elements are most important to you. Schedule a consultation with us today.</p>
            </div>
            <NavLink to={"/contact"}>
              <button className="sm:hidden w-56 h-14 bg-blue-800 text-white font-bold text-xl mt-8 rounded-md hover:scale-105 duration-300 hover:shadow-2xl shadow-black">Get in touch</button>
            </NavLink>
            <motion.div animate={{x:0}} initial={{x:200}} transition={{duration:1}} className='abpi w-1/2 h-[90%] rounded-xl'></motion.div>
        </motion.section>
    </div>
  )
}

export default AboutUs