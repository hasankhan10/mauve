import { useState } from "react"
import imageData from "../assets/imageData"

function ImageDiv({getUrl}) {
    const [imgUrl,setImgUrl]=useState()
    const handleImage = (url)=>{
        setImgUrl(url)
        
    }
    getUrl(imgUrl)

  return (
    <>
          
         {imageData.map((image)=>{
            return (
                <button onClick={()=>{
                    let url = image.url;
                    handleImage(url)
                }}>
                    <div className=' w-24 h-32 rounded-xl bg-slate-500'>{image.url}</div>
                </button>
            )
         })}

    </>
  )
}

export default ImageDiv