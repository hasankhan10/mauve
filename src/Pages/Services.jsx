import React, { useState } from 'react'
import ImageDiv from '../Components/ImageDiv'

function Services() {
  const [Url,setUrl]= useState()
  const getImageUrl = (getUrl)=>{
    setUrl(getUrl)
  }
  return (
    <div className='service w-screen h-screen flex justify-center place-items-center'>
        <section className='change-box w-[85%] h-[70%] mt-7 flex overflow-hidden'>
            <div className=' h-full w-[10%] flex justify-center place-items-center'>
                <button><img className=' h-14' src="https://cdn-icons-png.flaticon.com/512/2609/2609370.png" alt="" /></button>
            </div>
            <section className=' h-full w-[80%] flex justify-end bg-slate-200 place-items-end rounded-lg relative gap-3 pr-3 pb-3'>
                <p className=' absolute top-[50%] left-[50%]'>{Url}</p>
                <ImageDiv getUrl={getImageUrl} />
            </section>
            <div className=' h-full w-[10%] flex justify-center place-items-center'>
                <button><img className=' h-14' src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="" /></button>
            </div>
        </section>
    </div>
  )
}

export default Services
