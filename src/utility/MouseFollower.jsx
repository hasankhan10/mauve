import { useState } from "react"

function MouseFollower() {
    const [top,setTop]=useState()
    const [left,setLeft]=useState()
    document.addEventListener("mousemove",(e)=>{
        setTop(e.clientY-5)
        setLeft(e.clientX-5)
        
    })
  return (
    <div className='mouseFollower absolute z-50 w-3 h-3 rounded-full bg-gray-700 transition-all duration-700 ease-out' style={{top:top,left:left}}></div>
  )
}

export default MouseFollower