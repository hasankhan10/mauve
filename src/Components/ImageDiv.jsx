import { useState } from "react"
import imageData from "../assets/imageData"

function ImageDiv({getUrl}) {
    const [imgUrl,setImgUrl]=useState()
    const [index,setIndex] = useState()
    const [border,setBorder] = useState()
    const [scale,setScale] = useState()
    const [margin,setMargin] = useState()
    const handleImage = (url,key)=>{
        setImgUrl(url)
        setIndex(key)
        setBorder("2px solid black")
        setScale("1.1")
        setMargin("1.25rem")
    }
    getUrl(imgUrl)


  return (
    <>
          
         {imageData.map((image,key)=>{
            
            return (
                <button  onClick={()=>{
                    let url = image.url;
                    handleImage(url,key)
                }}>
                    <div className=' w-24 h-32 rounded-xl bg-slate-500 hover:opacity-90 duration-300' style={{border:key==index?border:null,scale:key==index?scale:"1",marginBottom:key==index?margin:"0"}}>{image.url}</div>
                </button>
            )
         })}

    </>
  )
}

export default ImageDiv