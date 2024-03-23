import React from 'react'

function AboutUs() {
  return (
    <div className='about w-screen h-screen flex justify-center place-items-center'>
        <section className=' w-[75%] h-[80%] flex gap-10 justify-center place-items-center'>
        <div className=' w-[45%] h-fit backdrop-blur-3xl flex flex-col gap-7 text-center p-9 rounded-xl'>
                <h1 className=' text-5xl font-bold text-gray-900'>ALL ABOUT US</h1>
                <p className=' text-xl'>Mauve interio is here to make your design dream a reality. Whatever you’ve envisioned for your home or workspace, we are here to get it done. Since 2019, our professional, creative team has been designing the spaces that are most important to our clients. Let us lead the way to an outcome you’ll absolutely love.
                In short, we’re here to help you love your space. We pay great attention to detail, and know how crucial the little touches are. We’ll work closely with you to understand what you want, what your style is and which elements are most important to you. Schedule a consultation with us today.</p>
            </div>
            <div className='abpi w-1/2 h-[90%] bg-red-600 rounded-xl'></div>
        </section>
    </div>
  )
}

export default AboutUs